
import nodemailer from 'nodemailer';
import {NextRequest, NextResponse} from "next/server";
import {EmailBody} from "@/app/type/EmailBody";

export async function POST(req: NextRequest) {
    const {name, email, subject, message} = await req.json() as EmailBody;

    if (!name || !subject || !email || !message) {
        return NextResponse.json({ error: 'Missing required fields: to, subject, body' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_HOST_USERNAME,
            pass: process.env.GMAIL_HOST_PASSWORD,
        },
    });
    const mailOptions = {
        from: process.env.GMAIL_USERNAME,
        to: process.env.GMAIL_RECEIVER_EMAIL,
        subject: subject,
        text: message,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        return NextResponse.json({ message: 'Email sent successfully'}, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: 'Email sent failed'}, { status: 500 });
    }
}

