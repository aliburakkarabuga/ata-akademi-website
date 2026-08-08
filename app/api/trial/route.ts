import { NextResponse } from "next/server";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzbUEzePT2DCrPAMpLIj1AlS5XgtmQs41PVHni4DjU8SqYoBpQcA6RGNss52N1I0dNu/exec";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body?.parentName || !body?.phone || !body?.grade || !body?.program) {
    return NextResponse.json(
      { message: "Eksik bilgi" },
      { status: 400 }
    );
  }

  try {
    await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    return NextResponse.json({
      ok: true,
      message: "Başvuru alındı",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        ok: false,
        message: "Gönderim hatası",
      },
      { status: 500 }
    );
  }
}