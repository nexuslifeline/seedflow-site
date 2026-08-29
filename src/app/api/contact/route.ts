import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import {
  getContactNotificationTemplate,
  getAutoReplyTemplate,
} from "@/utils/emailTemplates";

// Email configuration - you'll need to set these in your environment variables
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER, // your email
    pass: process.env.EMAIL_APP_PASS, // your app password
  },
  tls: {
    rejectUnauthorized: false, // Allow self-signed certificates in development
  },
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, service, message } = body;

    // Server-side validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 },
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address" },
        { status: 400 },
      );
    }

    // Prepare email content using template function
    const notificationHtml = getContactNotificationTemplate({
      name,
      email,
      phone,
      company,
      service,
      message,
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.CONTACT_EMAIL || process.env.EMAIL_USER, // where to send contact form submissions
      subject: `New Contact Form Submission from ${name}${company ? ` (${company})` : ""}`,
      html: notificationHtml,
    };

    // Send auto-reply to the user using template function
    const autoReplyHtml = getAutoReplyTemplate({
      name,
    });

    const autoReplyOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Thank you ${name}${company ? ` from ${company}` : ""} for contacting Seedflow`,
      html: autoReplyHtml,
    };

    // Send both emails concurrently using Promise.all
    await Promise.all([
      transporter.sendMail(mailOptions),
      transporter.sendMail(autoReplyOptions),
    ]);

    return NextResponse.json(
      { message: "Message sent successfully!" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 },
    );
  }
}
