export const config = {
  runtime: 'edge', // Tetap gunakan edge agar tidak terkena timeout/video blank
};

export default async function handler(request) {
  const { searchParams } = new URL(request.url);
  const fileId = searchParams.get('fileId');
  const apiKey = process.env.GDRIVE_API_KEY;

  if (!fileId) {
    return new Response('File ID tidak ditemukan', { status: 400 });
  }

  const rangeHeader = request.headers.get('range');
  const driveUrl = `https://www.googleapis.com/drive/v3/files/${fileId}?key=${apiKey}&alt=media`;

  try {
    const fetchOptions = {
      method: 'GET',
      headers: {},
    };

    // Meneruskan request range dari browser ke Google Drive di level Edge
    if (rangeHeader) {
      fetchOptions.headers['Range'] = rangeHeader;
    }

    const response = await fetch(driveUrl, fetchOptions);

    if (!response.ok) {
      return new Response('Gagal mengambil video dari Google Drive', { status: response.status });
    }

    // Ambil semua header krusial dari Google Drive
    const contentType = response.headers.get('content-type') || 'video/mp4';
    const contentRange = response.headers.get('content-range');
    const contentLength = response.headers.get('content-length');

    // Buat objek header baru yang bersih untuk dikirim ke browser
    const responseHeaders = new Headers();
    responseHeaders.set('Content-Type', contentType);
    responseHeaders.set('Accept-Ranges', 'bytes');
    responseHeaders.set('Cache-Control', 'no-cache, no-transform');
    responseHeaders.set('Access-Control-Allow-Origin', '*');

    if (contentRange) responseHeaders.set('Content-Range', contentRange);
    if (contentLength) responseHeaders.set('Content-Length', contentLength);

    // Kirimkan aliran data langsung menggunakan response bawaan Edge Runtime
    return new Response(response.body, {
      status: rangeHeader ? 206 : 200,
      headers: responseHeaders,
    });

  } catch (error) {
    return new Response('Internal Server Error', { status: 500 });
  }
}
