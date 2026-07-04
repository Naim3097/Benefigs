import { NextResponse } from "next/server";

/**
 * Lean.X payment webhook.
 * TODO(Lean.X): verify the signature using `LEANX_WEBHOOK_SECRET`, then update
 * the order status (paid / failed / refunded) in your database and trigger the
 * order-confirmation email. Returns 200 quickly so the gateway does not retry.
 */
export async function POST(req: Request) {
  try {
    await req.json().catch(() => null);
    // const signature = req.headers.get("x-leanx-signature");
    // if (!verify(signature, rawBody, process.env.LEANX_WEBHOOK_SECRET)) {
    //   return NextResponse.json({ ok: false }, { status: 401 });
    // }
  } catch {
    /* ignore malformed payloads */
  }
  return NextResponse.json({ received: true });
}
