/**
 * ============================================================================
 * UI MICROCOPY  ·  Bahasa Malaysia (primary locale)
 * ============================================================================
 * Single source of truth for all reused interface text. Content that belongs
 * to a page/product lives with that data; this file holds the shared strings
 * (navigation, buttons, cart, forms, states). To add English later, create a
 * parallel `copy.en.ts` with the same shape and select by locale — no component
 * changes required.
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
    shopAll: "Beli semua produk",
    backToShop: "Kembali ke kedai",
    readMore: "Baca lagi",
    loading: "Memuatkan…",
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
    shopByCategory: "Beli mengikut kategori",
    yourAccount: "Akaun anda",
    whatsapp: "Sembang dengan kami di WhatsApp",
  },

  product: {
    addToCart: "Tambah ke troli",
    added: "Telah ditambah",
    addNamed: (name: string) => `Tambah ${name} ke troli`,
    chooseOptions: "Pilih pilihan",
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
    related: "Anda mungkin juga suka",
    description: "Penerangan",
    details: "Butiran",
    howToUse: "Cara guna & penyimpanan",
    highlights: "Kelebihan",
    specifications: "Spesifikasi",
    reviewsHeading: "Ulasan pelanggan",
    writeReview: "Tulis ulasan",
    inStockReady: "Ada stok & sedia dihantar",
    chooseAnOption: "Sila pilih satu pilihan",
    option: "Pilihan",
  },

  cart: {
    title: "Troli anda",
    empty: "Troli anda kosong",
    emptyBlurb: "Buah tin segar, pokok dan hadiah hanya seklik sahaja.",
    startShopping: "Mula membeli-belah",
    subtotal: "Jumlah kecil",
    shippingNote: "Penghantaran & cukai dikira semasa pembayaran.",
    checkout: "Bayar dengan selamat",
    continueShopping: "Teruskan membeli-belah",
    secureNote: "Pembayaran selamat · Jaminan kesegaran 7 hari",
    remove: "Buang",
    freeShipRemaining: (amount: number) =>
      `Anda ${formatMYR(amount)} lagi untuk penghantaran percuma.`,
    freeShipUnlocked: "Tahniah — anda layak penghantaran percuma.",
    itemsOne: "1 item",
    itemsMany: (n: number) => `${n} item`,
    reviewOrder: "Semak pesanan anda",
    orderSummary: "Ringkasan pesanan",
  },

  search: {
    placeholder: "Cari buah tin, pokok, hadiah…",
    popular: "Carian popular",
    noResults: (q: string) => `Tiada padanan untuk “${q}”.`,
    browseAll: "Lihat semua produk",
    seeAll: (q: string) => `Lihat semua hasil untuk “${q}”`,
    resultsFor: (q: string) => `Hasil carian untuk “${q}”`,
  },

  newsletter: {
    heading: "Sertai keluarga Benefigs",
    blurb: "Berita musim tuai, tip menanam dan tawaran istimewa. Tiada spam, selamanya.",
    emailLabel: "Alamat e-mel",
    placeholder: "Alamat e-mel anda",
    subscribe: "Langgan",
    subscribing: "Melanggan…",
    success: "Terima kasih — sila semak peti masuk anda untuk pengesahan.",
    invalid: "Sila masukkan alamat e-mel yang sah.",
  },

  footer: {
    brandBlurb:
      "Destinasi buah tin premium Malaysia — buah segar, pokok yang sihat dan makanan tin artisan, ditanam dengan penuh teliti di ladang kami yang bertauliah MyGAP dan dihantar ke seluruh negara.",
    joinHeading: "Sertai keluarga Benefigs",
    joinBlurb: "Berita musim tuai, tip menanam dan tawaran khas pelanggan. Tiada spam, selamanya.",
    visitContact: "Lawati & hubungi",
    securePayments: "Pembayaran selamat melalui",
    paymentTail: "— kad, perbankan FPX & e-dompet.",
    rightsReserved: "Hak cipta terpelihara.",
    madeIn: "Ditanam & dihasilkan di Malaysia",
  },

  availability: {
    in_stock: "Ada stok",
    low_stock: "Stok terhad — pesan segera",
    preorder: "Dibuat atas pesanan",
    seasonal: "Bermusim — terhad",
    out_of_stock: "Kehabisan stok",
  },

  trust: {
    shipping: "Penghantaran ke seluruh Semenanjung & Malaysia Timur.",
    mygap: "Bertauliah MyGAP · ditanam di Malaysia",
    returns: "Jaminan kesegaran 7 hari untuk buah tin segar.",
    freshnessGuarantee: "Jaminan kesegaran 7 hari",
    secureCheckout: "Pembayaran selamat",
    nationwide: "Penghantaran seluruh negara",
  },
} as const;
