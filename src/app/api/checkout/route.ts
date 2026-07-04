import { NextResponse } from "next/server";
import { getPaymentProvider, type PaymentMethod } from "@/lib/payments";

/**
 * Creates a payment for the current order via the configured provider (Lean.X).
 * In simulated mode (no LEANX_UUID) it returns a redirect to the confirmation
 * page so the flow is fully testable; in live mode it returns the gateway URL.
 */
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { amount, method, customer } = body ?? {};

    if (typeof amount !== "number" || amount <= 0 || !customer?.email || !customer?.name) {
      return NextResponse.json({ ok: false, error: "Maklumat pesanan tidak lengkap." }, { status: 400 });
    }

    const orderId = "BFG-" + crypto.randomUUID().split("-")[0].toUpperCase();
    const origin = new URL(req.url).origin;
    const provider = getPaymentProvider();

    const result = await provider.createPayment({
      orderId,
      amount,
      currency: "MYR",
      method: (method ?? "fpx") as PaymentMethod,
      customer: { name: customer.name, email: customer.email, phone: customer.phone ?? "" },
      description: `Pesanan Benefigs ${orderId}`,
      redirectUrl: `${origin}/checkout/selesai`,
    });

    // NOTE: persist the order to your DB here (status: pending) keyed by orderId.
    return NextResponse.json({ ...result, orderId }, { status: result.ok ? 200 : 502 });
  } catch {
    return NextResponse.json({ ok: false, error: "Ralat pelayan." }, { status: 500 });
  }
}
