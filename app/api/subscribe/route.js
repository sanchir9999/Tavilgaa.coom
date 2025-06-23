import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        // address, phone-г ч мөн аваарай
        const { name, email, address, phone } = await req.json();

        const transporter = nodemailer.createTransport({
            service: "Gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const userMailOptions = {
            from: `"Tavilgaa.com" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: "Tavilgaa.com - 10% хямдралын код таньд!",
            html: `
              <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #1F2937; line-height: 1.6; padding: 20px; background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px;">
                <h1 style="font-size: 16px; margin-bottom: 20px;">
                  Сайн байна уу, 
                  <span style="font-size: 16px; margin-bottom: 20px; color:#059669;">${name}</span>!
                </h1>
          
                <p style="font-size: 16px; margin-bottom: 20px;">
                  Таны бүртгэл амжилттай хийгдлээ. <br />
                  Та <strong style="color: #059669;">10% хямдрал авах</strong> боломжтой боллоо!
                </p>

                <p style="font-size: 14px; margin-bottom: 16px;">
                  Таны мэдээлэл:<br />
                  <strong>Хаяг:</strong> ${address || "бичигдээгүй"}<br />
                  <strong>Утас:</strong> ${phone || "бичигдээгүй"}
                </p>
          
                <div style="background-color: #E0F2FE; border: 1px solid #BAE6FD; padding: 16px; border-radius: 6px; text-align: center; margin-bottom: 24px; font-size: 20px; font-weight: 700; letter-spacing: 2px; color: #0369A1;">
                  Таны хямдралын код: <span style="background-color: #0284C7; color: #fff; padding: 6px 12px; border-radius: 4px;">TAVILGAA10</span>
                </div>
          
                <p style="font-size: 14px; color: #4B5563; margin-bottom: 16px;">
                  Энэхүү кодыг та дараагийн худалдан авалтдаа ашиглана уу.
                </p>
          
                <hr style="border: none; border-top: 1px solid #E5E7EB; margin: 24px 0;" />
          
                <p style="font-size: 12px; color: #9CA3AF;">
                  Энэхүү захидал нь танд автоматаар үүссэн имэйл юм. Хариу илгээх шаардлагагүй.
                </p>
          
                <p style="font-size: 12px; color: #9CA3AF;">
                  © 2025 Tavilgaa.com. Бүх эрх хуулиар хамгаалагдсан.
                </p>
              </div>
            `,
        };

        const adminMailOptions = {
            from: `"Tavilgaa.com" <${process.env.EMAIL_USER}>`,
            to: process.env.NOTIFY_EMAIL,
            subject: "Tavilgaa.com-д шинэ харилцагч бүртгэгдлээ",
            text: `Шинэ хэрэглэгч бүртгэгдлээ:\n\nНэр: ${name}\nИ-мэйл: ${email}\nХаяг: ${address || "бичигдээгүй"}\nУтас: ${phone || "бичигдээгүй"}`,
        };

        await transporter.sendMail(userMailOptions);
        await transporter.sendMail(adminMailOptions);

        return NextResponse.json({ message: "Мэйлүүд амжилттай илгээгдлээ" });
    } catch (error) {
        console.error("Мэйл илгээхэд алдаа гарлаа:", error);
        return NextResponse.json({ message: "Алдаа гарлаа" }, { status: 500 });
    }
}
