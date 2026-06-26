export const config = {
  runtime: 'edge',
};

export default async function handler(request) {
  // Ambil fileId dari URL frontend
  const { searchParams } = new URL(request.url);
  const fileId = searchParams.get('fileId');
  const apiKey = process.env.GDRIVE_API_KEY;

  // Jika fileId tidak ada di link
  if (!fileId) {
    return new Response('File ID tidak ditemukan', { status: 400 });
  }

  // URL Google Drive API
  const driveUrl = `https://www.googleapis.com/drive/v3/files/${fileId}?key=${apiKey}&alt=media`;

  try {
    // Meminta file stream ke Google Drive
    const response = await fetch(driveUrl);
    
    if (!response.ok) {
      return new Response('Gagal mengambil video dari Google Drive', { status: response.status });
    }

    const contentType = response.headers.get('content-type') || 'video/mp4';

    // Lempar aliran data (stream) langsung ke frontend web Anda
    return new Response(response.body, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'no-cache, no-transform',
        'Access-Control-Allow-Origin': '*',
        'Accept-Ranges': 'bytes' // Penting agar video bisa di-seek (dipercepat/dimundurkan)
      },
    });
  } catch (error) {
    return new Response('Internal Server Error', { status: 500 });
  }
}
