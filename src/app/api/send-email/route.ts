import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from "next/server";
import { EmailBody } from "@/type/EmailBody";
import { promises as fs } from 'fs';
import path from 'path';

export async function POST(req: NextRequest) {
    const { name, email, subject, message } = await req.json() as EmailBody;

    if (!name || !subject || !email || !message) {
        return NextResponse.json({ error: 'Missing required fields: name, email, subject, message' }, { status: 400 });
    }

    const templatePath = path.join(process.cwd(), 'public', 'html', 'email-template.html');

    let emailHtml;
    try {
        emailHtml = await fs.readFile(templatePath, 'utf-8');
    } catch (err) {
        console.error("Failed to read the HTML template:", err);
        return NextResponse.json({ message: 'Failed to load email template' }, { status: 500 });
    }

    emailHtml = emailHtml
        .replace('{{name}}', name)
        .replace('{{email}}', email)
        .replace('{{subject}}', subject)
        .replace('{{message}}', message);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_HOST_USERNAME,
            pass: process.env.GMAIL_HOST_PASSWORD,
        },
    });
    const mailOptions = {
        from: process.env.GMAIL_HOST_USERNAME,
        to: process.env.GMAIL_RECEIVER_EMAIL,
        subject: subject,
        html: emailHtml,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
    }
}
