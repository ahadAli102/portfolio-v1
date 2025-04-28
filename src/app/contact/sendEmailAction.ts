// app/contact/sendEmailAction.ts
// 'use server';
//
// import nodemailer from 'nodemailer';
// import { promises as fs } from 'fs';
// import path from 'path';
// import {redirect} from "next/navigation";

export async function sendEmail(formData: FormData) {
    // const name = formData.get('name') as string;
    // const email = formData.get('email') as string;
    // const subject = formData.get('subject') as string;
    // const message = formData.get('message') as string;
    //
    // if (!name || !email || !subject || !message) {
    //     throw new Error('Missing required fields');
    // }
    //
    // const templatePath = path.join(process.cwd(), 'public', 'html', 'email-template.html');
    // let emailHtml;
    //
    // try {
    //     emailHtml = await fs.readFile(templatePath, 'utf-8');
    // } catch (err) {
    //     console.error("Failed to read the HTML template:", err);
    //     throw new Error("Template read error");
    // }
    //
    // emailHtml = emailHtml
    //     .replace('{{name}}', name)
    //     .replace('{{email}}', email)
    //     .replace('{{subject}}', subject)
    //     .replace('{{message}}', message);
    //
    // const transporter = nodemailer.createTransport({
    //     service: 'gmail',
    //     auth: {
    //         user: process.env.GMAIL_HOST_USERNAME,
    //         pass: process.env.GMAIL_HOST_PASSWORD,
    //     },
    // });
    //
    // const mailOptions = {
    //     from: process.env.GMAIL_HOST_USERNAME,
    //     to: process.env.GMAIL_RECEIVER_EMAIL,
    //     subject: subject,
    //     html: emailHtml,
    // };
    //
    // try {
    //     await transporter.sendMail(mailOptions);
    //     redirect('/contact?success=1');
    // } catch (error) {
    //     console.error("Email sending failed:", error);
    //     redirect('/contact?error=1');
    // }
}
