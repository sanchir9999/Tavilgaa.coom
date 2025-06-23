import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const { name, email } = await req.json();

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
            subject: "Tavilgaa.com бүртгэл амжилттай боллоо",
            text: `Сайн байна уу ${name}!\n\nТанд баярлалаа! Таны и-мэйл Tavilgaa.com-д амжилттай бүртгэгдлээ.\n\nТаны тавилгын найдвартай сонголт юм.`,
        };

        const adminMailOptions = {
            from: `"Tavilgaa.com" <${process.env.EMAIL_USER}>`,
            to: process.env.NOTIFY_EMAIL,
            subject: "Tavilgaa.com-д шинэ харилцагч бүртгэгдлээ",
            text: `Шинэ хэрэглэгч бүртгэгдлээ: ${email}`,
        };

        await transporter.sendMail(userMailOptions);
        await transporter.sendMail(adminMailOptions);

        return NextResponse.json({ message: "Мэйлүүд амжилттай илгээгдлээ" });
    } catch (error) {
        console.error("Мэйл илгээхэд алдаа гарлаа:", error);
        return NextResponse.json({ message: "Алдаа гарлаа" }, { status: 500 });
    }
}
