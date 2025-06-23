import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const { email } = await req.json();

        const transporter = nodemailer.createTransport({
            service: "Gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: `"Тавилгаа.ком" <${process.env.EMAIL_USER}>`,
            to: process.env.NOTIFY_EMAIL,
            subject: "Шинэ бүртгэл",
            text: `Шинээр бүртгүүлсэн хэрэглэгч: ${email}`,
        };

        await transporter.sendMail(mailOptions);
        return NextResponse.json({ message: "И-мэйл илгээгдлээ" });
    } catch (error) {
        console.error("И-мэйл илгээхэд алдаа гарлаа:", error);
        return NextResponse.json({ message: "Алдаа гарлаа" }, { status: 500 });
    }
}
