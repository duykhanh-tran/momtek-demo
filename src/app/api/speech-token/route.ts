import { NextResponse } from 'next/server';

// API Route này dùng để cấp Token tạm thời cho Frontend
export async function GET() {
  const speechKey = process.env.AZURE_SPEECH_KEY;
  const speechRegion = process.env.AZURE_SPEECH_REGION;

  if (!speechKey || !speechRegion) {
    return NextResponse.json(
      { error: 'Chưa cấu hình Azure Speech Key/Region trong .env' },
      { status: 500 }
    );
  }

  try {
    // Sử dụng fetch thay cho axios để không cần cài thêm thư viện
    const response = await fetch(
      `https://${speechRegion}.api.cognitive.microsoft.com/sts/v1.0/issueToken`,
      {
        method: 'POST',
        headers: {
          'Ocp-Apim-Subscription-Key': speechKey,
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: 'Azure từ chối cấp token. Kiểm tra lại Key.' }, 
        { status: 401 }
      );
    }

    const token = await response.text();
    return NextResponse.json({ token, region: speechRegion });
    
  } catch (err) {
    console.error("Lỗi lấy token:", err);
    return NextResponse.json({ error: 'Lỗi server khi kết nối Azure' }, { status: 500 });
  }
}