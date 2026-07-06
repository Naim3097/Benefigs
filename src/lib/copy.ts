/**
 * ============================================================================
 * UI MICROCOPY  ·  Bahasa Malaysia (santai & mesra — natural rojak)
 * ============================================================================
 * Single source of truth for all reused interface text. We write the way a
 * friendly Malaysian brand actually talks: Malay as the base, warm tone, and
 * everyday English terms kept as-is because that's how people say them
 * (Checkout, E-Wallet, Online Banking, free shipping, inbox…). Content that
 * belongs to a page/product lives with that data; this file holds the shared
 * strings. To add a full English locale later, create a parallel `copy.en.ts`
 * with the same shape and select by locale — no component changes required.
 * ============================================================================
 */

import { formatMYR } from "./utils";

export const copy = {
  common: {
    skipToContent: "Terus ke kandungan",
    home: "Laman utama",
    brandHome: "Benefigs — laman utama",
    menu: "Menu",
    openMenu: "Buka menu",
    closeMenu: "Tutup menu",
    close: "Tutup",
    search: "Cari",
    searchProducts: "Cari produk",
    account: "Akaun anda",
    signIn: "Log masuk",
    cart: "Troli",
    openCart: "Buka troli",
    closeCart: "Tutup troli",
    viewAll: "Lihat semua",
    shopAll: "Lihat semua produk",
    backToShop: "Kembali ke kedai",
    readMore: "Baca lagi",
    loading: "Sekejap ya…",
    yes: "Ya",
    no: "Tidak",
  },

  nav: {
    shop: "Kedai",
    freshFigs: "Buah Tin Segar",
    figTrees: "Pokok Tin",
    gifts: "Hadiah",
    visitFarm: "Lawati Ladang",
    ourStory: "Kisah Kami",
    shopByCategory: "Beli ikut kategori",
    yourAccount: "Akaun anda",
    whatsapp: "Chat dengan kami di WhatsApp",
  },

  product: {
    addToCart: "Tambah ke troli",
    added: "Dah masuk troli",
    addNamed: (name: string) => `Tambah ${name} ke troli`,
    chooseOptions: "Pilih pilihan dulu",
    enquire: "Tanya kami",
    viewProduct: "Lihat produk",
    requestQuote: "Minta sebut harga",
    save: (pct: number) => `Jimat ${pct}%`,
    reviews: (n: number) => `${n.toLocaleString("en-MY")} ulasan`,
    reviewsShort: (n: number) => `(${n.toLocaleString("en-MY")})`,
    ratedOutOf: (r: number, n?: number) =>
      `Dinilai ${r.toFixed(1)} daripada 5${n != null ? `, berdasarkan ${n} ulasan` : ""}`,
    quantity: "Kuantiti",
    increaseQtyNamed: (name: string) => `Tambah kuantiti ${name}`,
    decreaseQtyNamed: (name: string) => `Kurangkan kuantiti ${name}`,
    related: "Mungkin anda suka ni juga",
    description: "Penerangan",
    details: "Butiran",
    howToUse: "Cara guna & simpan",
    highlights: "Kelebihan",
    specifications: "Spesifikasi",
    reviewsHeading: "Ulasan pelanggan",
    writeReview: "Tulis ulasan",
    inStockReady: "Ada stok, sedia dihantar",
    chooseAnOption: "Pilih pilihan anda dulu ya",
    option: "Pilihan",
  },

  cart: {
    title: "Troli anda",
    empty: "Troli anda masih kosong",
    emptyBlurb: "Buah tin segar, pokok dan hadiah — semua seklik je.",
    startShopping: "Jom shopping",
    subtotal: "Subtotal",
    shippingNote: "Penghantaran & cukai dikira masa checkout.",
    checkout: "Ke checkout",
    continueShopping: "Sambung shopping",
    secureNote: "Pembayaran selamat · Jaminan segar 7 hari",
    remove: "Buang",
    freeShipRemaining: (amount: number) =>
      `${formatMYR(amount)} lagi untuk dapat free shipping.`,
    freeShipUnlocked: "Bagus — anda dah layak free shipping!",
    itemsOne: "1 item",
    itemsMany: (n: number) => `${n} item`,
    reviewOrder: "Semak order anda",
    orderSummary: "Ringkasan order",
  },

  search: {
    placeholder: "Cari buah tin, pokok, hadiah…",
    popular: "Carian popular",
    noResults: (q: string) => `Tak jumpa apa-apa untuk “${q}”.`,
    browseAll: "Lihat semua produk",
    seeAll: (q: string) => `Lihat semua hasil untuk “${q}”`,
    resultsFor: (q: string) => `Hasil carian untuk “${q}”`,
  },

  newsletter: {
    heading: "Sertai keluarga Benefigs",
    blurb: "Cerita musim tuai, tips menanam dan tawaran khas. No spam, kami janji.",
    emailLabel: "Alamat e-mel",
    placeholder: "Alamat e-mel anda",
    subscribe: "Langgan",
    subscribing: "Sekejap…",
    success: "Terima kasih — check inbox anda untuk pengesahan ya.",
    invalid: "Sila masukkan alamat e-mel yang betul.",
  },

  footer: {
    brandBlurb:
      "Buah tin premium Malaysia — buah segar, pokok yang sihat dan makanan tin artisan, ditanam elok-elok di ladang kami yang bertauliah MyGAP dan dihantar ke seluruh negara.",
    joinHeading: "Sertai keluarga Benefigs",
    joinBlurb: "Cerita musim tuai, tips menanam dan tawaran khas pelanggan. No spam, kami janji.",
    visitContact: "Lawati & hubungi",
    securePayments: "Pembayaran selamat melalui",
    paymentTail: "— kad, Online Banking (FPX) & E-Wallet.",
    rightsReserved: "Hak cipta terpelihara.",
    madeIn: "Ditanam & dihasilkan di Malaysia",
  },

  availability: {
    in_stock: "Ada stok",
    low_stock: "Stok tinggal sikit",
    preorder: "Dibuat atas pesanan",
    seasonal: "Bermusim — terhad",
    out_of_stock: "Habis stok",
  },

  trust: {
    shipping: "Penghantaran ke seluruh Semenanjung & Malaysia Timur.",
    mygap: "Bertauliah MyGAP · ditanam di Malaysia",
    returns: "Jaminan segar 7 hari untuk buah tin segar.",
    freshnessGuarantee: "Jaminan segar 7 hari",
    secureCheckout: "Pembayaran selamat",
    nationwide: "Penghantaran seluruh negara",
  },
} as const;
