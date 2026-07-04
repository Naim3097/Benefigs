import { NextResponse } from "next/server";

/**
 * Contact form endpoint.
 * TODO: forward the message to your inbox/CRM (Resend, Postmark, Formspree, etc.).
 */
export async function POST(req: Request) {
  try {
    const data = await req.json();
    if (!data?.email || !data?.message || !data?.name) {
      return NextResponse.json({ ok: false, error: "Sila lengkapkan borang." }, { status: 400 });
    }
    // await sendEmail({ to: process.env.CONTACT_INBOX, ...data })
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Ralat pelayan." }, { status: 500 });
  }
}
