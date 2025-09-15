import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, phone, company, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const adminMail = {
      from: `"Tavilgaa.com" <${process.env.EMAIL_USER}>`,
      to: process.env.NOTIFY_EMAIL || process.env.EMAIL_USER,
      subject: `Шинэ санал хүсэлт — ${name}`,
      text: `Нэр: ${name}\nИмэйл: ${email}\nУтас: ${phone}\nКомпани: ${company || "—"}\n\nМессеж:\n${message}`,
    };

    const userMail = {
      from: `"Tavilgaa.com" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Таны санал хүсэлтийг хүлээн авлаа",
      html: `
        <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;line-height:1.6;color:#111">
          <h2 style="margin:0 0 8px">Санал хүсэлт хүлээн авлаа</h2>
          <p style="margin:0 0 12px">Баярлалаа, бид тун удахгүй холбогдоно.</p>
          <div style="background:#f3f4f6;border:1px solid #e5e7eb;border-radius:8px;padding:12px">
            <div><strong>Нэр:</strong> ${name}</div>
            <div><strong>Имэйл:</strong> ${email}</div>
            <div><strong>Утас:</strong> ${phone}</div>
            <div><strong>Компани:</strong> ${company || "—"}</div>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(adminMail);
    await transporter.sendMail(userMail);

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("quote error", e);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}

