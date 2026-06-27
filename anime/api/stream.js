export default async function handler(request) {
  // Ambil fileId dari URL frontend
  const { searchParams } = new URL(request.url);
  const fileId = searchParams.get('fileId');
  const apiKey = process.env.GDRIVE_API_KEY;

  if (!fileId) {
    return new Response('File ID tidak ditemukan', { status: 400 });
  }

  // Menangkap request Range dari browser (kunci utama agar slider bisa digeser)
  const rangeHeader = request.headers.get('range');
  const driveUrl = `https://www.googleapis.com/drive/v3/files/${fileId}?key=${apiKey}&alt=media`;

  try {
    const fetchOptions = {
      method: 'GET',
      headers: {},
    };

    // Jika browser meminta potongan detik tertentu (range bytes), teruskan ke Google Drive
    if (rangeHeader) {
      fetchOptions.headers['Range'] = rangeHeader;
    }

    const response = await fetch(driveUrl, fetchOptions);

    if (!response.ok) {
      return new Response('Gagal mengambil video dari Google Drive', { status: response.status });
    }

    // Ambil info content-range dan content-length asli dari Google Drive
    const contentType = response.headers.get('content-type') || 'video/mp4';
    const contentRange = response.headers.get('content-range');
    const contentLength = response.headers.get('content-length');

    // Susun header balasan ke browser agar fitur seek aktif
    const responseHeaders = new Headers({
      'Content-Type': contentType,
      'Accept-Ranges': 'bytes',
      'Cache-Control': 'no-cache, no-transform',
      'Access-Control-Allow-Origin': '*',
    });

    if (contentRange) responseHeaders.set('Content-Range', contentRange);
    if (contentLength) responseHeaders.set('Content-Length', contentLength);

    // Berikan status 206 (Partial Content) jika browser meminta lompat waktu, atau 200 jika play biasa
    return new Response(response.body, {
      status: rangeHeader ? 206 : 200,
      headers: responseHeaders,
    });

  } catch (error) {
    return new Response('Internal Server Error', { status: 500 });
  }
}
