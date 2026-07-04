import type { Metadata } from "next";
import { Suspense } from "react";
import { OrderConfirmation } from "@/components/checkout/OrderConfirmation";

export const metadata: Metadata = {
  title: "Pesanan disahkan",
  description: "Terima kasih atas pesanan anda.",
  robots: { index: false, follow: false },
};

export default function OrderCompletePage() {
  return (
    <Suspense fallback={null}>
      <OrderConfirmation />
    </Suspense>
  );
}
