import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.your-email-provider.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER || 'your-email@example.com',
        pass: process.env.SMTP_PASS || 'your-email-password',
      },
    });

    const mailOptions = {
      from: email,
      to: 'anasbounabat@gmail.com',
      subject: `Message de ${name}`,
      text: message,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Email envoyé avec succès" });
  } catch (error) {
    return NextResponse.json({ error: "Erreur lors de l'envoi de l'email" }, { status: 500 });
  }
}
