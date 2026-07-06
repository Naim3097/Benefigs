import type { Metadata } from "next";
import { WishlistView } from "@/components/product/WishlistView";

export const metadata: Metadata = {
  title: "Wishlist",
  description: "Produk Benefigs yang anda simpan untuk nanti.",
  robots: { index: false, follow: true },
};

export default function WishlistPage() {
  return <WishlistView />;
}
