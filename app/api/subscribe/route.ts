import { NextRequest, NextResponse } from "next/server";

// Wire this up to MailerLite (or ConvertKit) once you have an API key.
// MailerLite: POST https://connect.mailerlite.com/api/subscribers
// Add MAILERLITE_API_KEY and MAILERLITE_GROUP_ID to your environment variables
// in Vercel (Project Settings -> Environment Variables), then uncomment the
// fetch call below.

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email || typeof email !== "string" || !email.includes("@")) {
    return NextResponse.json({ error: "A valid email is required." }, { status: 400 });
  }

  const apiKey = process.env.MAILERLITE_API_KEY;

  if (!apiKey) {
    // No provider connected yet. Log it so nothing is lost during development,
    // and return success so the UI flow can be tested end to end.
    console.log("[newsletter] new subscriber (no provider configured):", email);
    return NextResponse.json({ ok: true });
  }

  const res = await fetch("https://connect.mailerlite.com/api/subscribers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      email,
      groups: process.env.MAILERLITE_GROUP_ID ? [process.env.MAILERLITE_GROUP_ID] : undefined,
    }),
  });

  if (!res.ok) {
    return NextResponse.json({ error: "Subscription failed." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
