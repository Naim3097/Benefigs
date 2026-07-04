import type { Metadata } from "next";
import { CartView } from "@/components/cart/CartView";

export const metadata: Metadata = {
  title: "Troli anda",
  description: "Semak item dalam troli anda dan teruskan ke pembayaran yang selamat.",
  robots: { index: false, follow: true },
};

export default function CartPage() {
  return <CartView />;
}
