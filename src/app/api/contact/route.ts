
import { NextResponse } from "next/server";

export const runtime = "nodejs";

function getText(value: unknown): string {
  return typeof value === "string"
    ? value.trim()
    : "";
}

export async function POST(request: Request) {
  try {
    const contentLength = Number(
      request.headers.get("content-length") || "0"
    );

    if (contentLength > 10000) {
      return NextResponse.json(
        { error: "Request is too large." },
        { status: 413 }
      );
    }

    const raw = await request.json();

    if (
      !raw ||
      typeof raw !== "object" ||
      Array.isArray(raw)
    ) {
      return NextResponse.json(
        { error: "Invalid form data." },
        { status: 400 }
      );
    }

    const form = raw as Record<string, unknown>;

    const firstName = getText(form.firstName);
    const lastName = getText(form.lastName);
    const email = getText(form.email);
    const subject = getText(form.subject);
    const message = getText(form.message);
    const mathAnswer = getText(form.mathAnswer);
    const website = getText(form.website);

    // Basic honeypot check
    if (website) {
      return NextResponse.json(
        { error: "Invalid submission." },
        { status: 400 }
      );
    }

    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const valid =
      firstName.length >= 1 &&
      firstName.length <= 100 &&
      lastName.length >= 1 &&
      lastName.length <= 100 &&
      emailPattern.test(email) &&
      email.length <= 254 &&
      subject.length >= 1 &&
      subject.length <= 160 &&
      message.length >= 5 &&
      message.length <= 5000 &&
      mathAnswer === "16";

    if (!valid) {
      return NextResponse.json(
        { error: "Please check the form." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.CONTACT_FROM_EMAIL;
    const toEmail = process.env.CONTACT_TO_EMAIL;

    if (!apiKey || !fromEmail || !toEmail) {
      return NextResponse.json(
        {
          error: "Email delivery is not configured.",
        },
        { status: 503 }
      );
    }

    const safeSubject = subject.replace(
      /[\r\n]+/g,
      " "
    );

    const emailBody = [
      "New Prayer.Social contact form submission",
      "",
      `First Name: ${firstName}`,
      `Last Name: ${lastName}`,
      `Email: ${email}`,
      `Subject: ${safeSubject}`,
      "",
      "Message:",
      message,
    ].join("\n");

    const response = await fetch(
      "https://api.resend.com/emails",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [toEmail],
          reply_to: email,
          subject: `Prayer.Social Contact: ${safeSubject}`,
          text: emailBody,
        }),
        cache: "no-store",
      }
    );

    if (!response.ok) {
      return NextResponse.json(
        {
          error: "Unable to send your message.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your submission has been received.",
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      {
        error: "Unable to process your request.",
      },
      { status: 500 }
    );
  }
}
