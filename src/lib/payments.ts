/**
 * ============================================================================
 * PAYMENTS  ·  Lean.X (LeanX.io) provider abstraction
 * ============================================================================
 * A thin, swappable payment provider. Until `LEANX_UUID` + `LEANX_AUTH_TOKEN`
 * are supplied, `createPayment` runs in SIMULATED mode so the entire checkout →
 * confirmation flow is testable end-to-end. When the credentials are set, wire
 * the real Lean.X create-payment call in the marked TODO — no other code
 * changes are required.
 * ============================================================================
 */

export type PaymentMethod = "fpx" | "card" | "ewallet";

export interface CreatePaymentInput {
  orderId: string;
  amount: number; // in MYR
  currency: "MYR";
  method: PaymentMethod;
  customer: { name: string; email: string; phone: string };
  description: string;
  redirectUrl: string; // buyer returns here after paying
}

export interface CreatePaymentResult {
  ok: boolean;
  mode: "live" | "simulated";
  paymentId?: string;
  redirectUrl?: string; // where to send the buyer next
  error?: string;
}

export interface PaymentProvider {
  name: string;
  createPayment(input: CreatePaymentInput): Promise<CreatePaymentResult>;
}

const LEANX_API_BASE =
  process.env.LEANX_ENV === "production"
    ? "https://api.leanx.io" // PLACEHOLDER — confirm production base URL
    : "https://sandbox.leanx.io"; // PLACEHOLDER — confirm sandbox base URL

export const leanxProvider: PaymentProvider = {
  name: "leanx",
  async createPayment(input) {
    const uuid = process.env.LEANX_UUID;
    const token = process.env.LEANX_AUTH_TOKEN;

    // No credentials yet → simulate a successful gateway round-trip.
    if (!uuid || !token) {
      const params = new URLSearchParams({ order: input.orderId, status: "paid", sim: "1" });
      return {
        ok: true,
        mode: "simulated",
        paymentId: `sim_${input.orderId}`,
        redirectUrl: `${input.redirectUrl}?${params.toString()}`,
      };
    }

    try {
      // TODO(Lean.X): replace with the real Lean.X create-payment call once the
      // API contract is provided. Illustrative shape:
      //
      // const res = await fetch(`${LEANX_API_BASE}/api/v1/payment`, {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //     Authorization: `Bearer ${token}`,
      //     "X-Client-UUID": uuid,
      //   },
      //   body: JSON.stringify({
      //     amount: input.amount,
      //     currency: input.currency,
      //     reference: input.orderId,
      //     description: input.description,
      //     channel: input.method,
      //     customer: input.customer,
      //     redirect_url: input.redirectUrl,
      //   }),
      // });
      // const data = await res.json();
      // return { ok: true, mode: "live", paymentId: data.id, redirectUrl: data.payment_url };

      void LEANX_API_BASE;
      return { ok: false, mode: "live", error: "Integrasi Lean.X belum dikonfigurasikan." };
    } catch {
      return { ok: false, mode: "live", error: "Gagal menghubungi gerbang pembayaran." };
    }
  },
};

export function getPaymentProvider(): PaymentProvider {
  return leanxProvider;
}
