import { categories } from "./catalog";
import { copy } from "./copy";

export type NavLink = { label: string; href: string; description?: string };
export type NavItem = NavLink & { children?: NavLink[] };

/** Category links, ordered, for menus. */
export const categoryLinks: NavLink[] = [...categories]
  .sort((a, b) => a.order - b.order)
  .map((c) => ({ label: c.name, href: `/categories/${c.slug}`, description: c.tagline }));

/**
 * Primary navigation — deliberately short and plain-worded for low cognitive
 * load. "Kedai" reveals all categories; the rest are direct, obvious links.
 */
export const primaryNav: NavItem[] = [
  { label: copy.nav.shop, href: "/shop", children: categoryLinks },
  { label: copy.nav.freshFigs, href: "/categories/fresh-figs" },
  { label: copy.nav.figTrees, href: "/categories/fig-trees" },
  { label: copy.nav.gifts, href: "/categories/gift-hampers" },
  { label: copy.nav.visitFarm, href: "/farm-visit" },
  { label: copy.nav.ourStory, href: "/about" },
];

/** Footer link groups. */
export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: "Kedai",
    links: [
      { label: "Semua produk", href: "/shop" },
      { label: "Buah tin segar", href: "/categories/fresh-figs" },
      { label: "Pokok & anak pokok tin", href: "/categories/fig-trees" },
      { label: "Makanan tin artisan", href: "/categories/fig-foods" },
      { label: "Minuman & teh", href: "/categories/fig-drinks" },
      { label: "Hamper hadiah", href: "/categories/gift-hampers" },
    ],
  },
  {
    title: "Terokai",
    links: [
      { label: "Kisah kami", href: "/about" },
      { label: "Lawati ladang", href: "/farm-visit" },
      { label: "Khasiat buah tin", href: "/journal/khasiat-buah-tin" },
      { label: "Jurnal Benefigs", href: "/journal" },
      { label: "Menanam tin di rumah", href: "/journal/menanam-pokok-tin" },
    ],
  },
  {
    title: "Bantuan",
    links: [
      { label: "Hubungi kami", href: "/contact" },
      { label: "Penghantaran", href: "/shipping" },
      { label: "Pemulangan & jaminan", href: "/returns" },
      { label: "Soalan lazim", href: "/faq" },
      { label: "Jejak order", href: "/account/orders" },
    ],
  },
  {
    title: "Akaun",
    links: [
      { label: "Log masuk", href: "/account/login" },
      { label: "Daftar akaun", href: "/account/register" },
      { label: "Order saya", href: "/account/orders" },
      { label: "Wishlist", href: "/wishlist" },
    ],
  },
];

export const legalNav: NavLink[] = [
  { label: "Dasar privasi", href: "/privacy" },
  { label: "Terma perkhidmatan", href: "/terms" },
  { label: "Dasar penghantaran", href: "/shipping" },
  { label: "Dasar pemulangan", href: "/returns" },
];
