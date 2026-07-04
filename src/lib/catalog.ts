import type { Category, Product } from "@/lib/types";

/**
 * ============================================================================
 * KATALOG BENEFIGS (data benih)  ·  Bahasa Malaysia
 * ============================================================================
 * Produk, SKU dan harga sebenar daripada profil syarikat + kajian. Harga dalam
 * MYR. Item bertanda `PLACEHOLDER` perlu pengesahan pelanggan. Modul ini ialah
 * satu-satunya sumber data yang dibaca oleh kedai; menukarnya kepada CMS/API
 * kemudian tidak memerlukan perubahan UI.
 * ============================================================================
 */

export const categories: Category[] = [
  {
    slug: "fresh-figs",
    name: "Buah Tin Segar",
    shortName: "Buah Tin Segar",
    tagline: "Dipetik masak, dihantar segar",
    description:
      "Buah tin Malaysia yang masak di pokok, dituai pada kemuncak kemanisan dan dibungkus sejuk pada hari yang sama. Ditanam sepanjang tahun dengan sistem pertanian moden kami — jadi anda boleh menikmati buah tin segar walaupun musim luar negara sudah berlalu.",
    image: { alt: "Buah tin segar Malaysia yang dibelah menampakkan isi merah pekat", motif: "fig-halved" },
    order: 1,
    featured: true,
  },
  {
    slug: "fig-trees",
    name: "Pokok Tin & Anak Pokok",
    shortName: "Pokok Tin",
    tagline: "Tanam sendiri buah dari syurga",
    description:
      "Anak pokok tin dan keratan yang sihat serta bebas penyakit, dipilih daripada lebih 28 varieti premium. Berakar kuat, sesuai iklim tropika dan cepat berbuah — supaya anda boleh menanam pokok tin yang memuaskan di rumah.",
    image: { alt: "Anak pokok tin muda dengan daun hijau segar", motif: "tree" },
    order: 2,
    featured: true,
  },
  {
    slug: "fig-foods",
    name: "Makanan Tin Artisan",
    shortName: "Makanan Tin",
    tagline: "Kelompok kecil, daripada buah tin sebenar",
    description:
      "Jeruk dan pes yang diperbuat daripada buah tin kami sendiri dalam kelompok kecil, tanpa bahan pengawet tiruan. Daripada jem tin yang lembut hingga sambal buah tin yang unik — buah sebenar, rasa sebenar.",
    image: { alt: "Sebalang jem buah tin buatan sendiri", motif: "jar" },
    order: 3,
  },
  {
    slug: "fig-drinks",
    name: "Minuman & Teh Tin",
    shortName: "Minuman & Teh",
    tagline: "Menyegarkan, secara semula jadi",
    description:
      "Jus tin tekanan sejuk, air limau tin berkarbonat dan teh daun tin tulen. Kesegaran manis semula jadi tanpa kafein, penuh dengan kebaikan buah tin.",
    image: { alt: "Sebotol teh daun tin", motif: "tea" },
    order: 4,
  },
  {
    slug: "growing-essentials",
    name: "Keperluan Menanam",
    shortName: "Keperluan Menanam",
    tagline: "Segala keperluan pokok tin anda",
    description:
      "Media tanaman dan baja formulasi ladang kami — sistem nutrisi yang sama kami gunakan di ladang sendiri — untuk membantu pokok tin anda membesar subur dan berbuah lebat.",
    image: { alt: "Sebeg baja untuk pokok tin", motif: "leaf" },
    order: 5,
  },
  {
    slug: "gift-hampers",
    name: "Hamper Hadiah",
    shortName: "Hadiah & Hamper",
    tagline: "Hadiah premium yang bermakna",
    description:
      "Hamper buah tin yang disusun teliti untuk Raya, musim perayaan dan hadiah korporat. Premium, halal dan benar-benar bermanfaat untuk orang tersayang.",
    image: { alt: "Hamper hadiah produk buah tin yang tersusun cantik", motif: "hamper" },
    order: 6,
    featured: true,
  },
  {
    slug: "farm-experience",
    name: "Pengalaman Ladang",
    shortName: "Lawati Ladang",
    tagline: "Petik buah tin anda sendiri",
    description:
      "Datang alami ladang buah tin yang beroperasi. Petik buah tin terus dari pokok, belajar cara ia tumbuh, dan rasa lebih 20 varieti — hari keluar yang tidak dilupakan untuk keluarga, sekolah dan kumpulan.",
    image: { alt: "Pengunjung memetik buah tin di ladang Benefigs", motif: "farm" },
    order: 7,
    featured: true,
  },
];

/** Pembantu ulasan ringkas supaya PDP terasa hidup. */
const R = (
  id: string,
  author: string,
  location: string,
  rating: number,
  title: string,
  body: string,
  date: string,
) => ({ id, author, location, rating, title, body, date, verified: true });

export const products: Product[] = [
  // ---- BUAH TIN SEGAR ------------------------------------------------------
  {
    id: "fresh-md-300",
    slug: "masui-dauphine-fresh-figs",
    name: "Buah Tin Segar Masui Dauphine",
    category: "fresh-figs",
    subtitle: "Buah tin merah pilihan kami · bekas 300g",
    shortDescription:
      "Kulit ungu kemerahan, isi manis bermadu. Buah tin segar paling laris kami — masak di pokok dan dibungkus sejuk pada hari ia dipetik.",
    description: [
      "Masui Dauphine ialah buah tin yang membina ladang kami. Ditanam dalam rumah hijau di bawah sistem penanaman Benefigs, setiap buah dibiarkan masak sepenuhnya di pokok, kemudian dipetik dengan tangan dan dibungkus sejuk pada hari yang sama supaya sampai kepada anda pada tahap paling manis.",
      "Nikmati isi yang lembut bermadu dengan sentuhan rasa beri, berbalut kulit ungu kemerahan yang halus. Sedap dimakan sejuk begitu sahaja, bersama keju, atau di atas yogurt dan granola.",
    ],
    highlights: [
      "Masak di pokok untuk kemanisan semula jadi terbaik",
      "Dibungkus sejuk pada hari sama untuk kesegaran",
      "Ditanam sepanjang tahun — tidak terhad kepada musim pendek",
      "Bertauliah MyGAP, ditanam tanpa pemasak buatan",
    ],
    price: 20,
    unit: "setiap bekas 300g",
    sku: "BFG-FR-MD-300",
    images: [
      { alt: "Buah tin Masui Dauphine, satu dibelah menampakkan isi merah pekat", motif: "fig-halved" },
      { alt: "Sebekas buah tin Masui Dauphine yang utuh", motif: "fig-whole" },
    ],
    availability: "in_stock",
    badges: ["Paling Laris", "MyGAP"],
    rating: 4.9,
    reviewCount: 128,
    reviews: [
      R("r1", "Faridah A.", "Shah Alam", 5, "Buah tin paling segar pernah saya rasa", "Sampai dalam keadaan sejuk dan cukup masak. Manis macam madu — sekeluarga habiskan sekotak dalam satu duduk.", "2026-06-02"),
      R("r2", "Kenneth L.", "Petaling Jaya", 5, "Lebih baik daripada import", "Jauh lebih segar berbanding tin kering import. Rasa memang baru dipetik.", "2026-05-18"),
      R("r3", "Noraini M.", "Klang", 4, "Sedap, akan beli lagi", "Sedap dan pembungkusan kemas. Sedikit mahal tetapi berbaloi untuk hadiah diri.", "2026-05-01"),
    ],
    specs: [
      { label: "Varieti", value: "Masui Dauphine (MD)" },
      { label: "Asal", value: "Ditanam di Malaysia" },
      { label: "Berat", value: "300g (lebih kurang 6–9 biji)" },
      { label: "Penyimpanan", value: "Simpan dalam peti sejuk, terbaik dalam 3–4 hari" },
    ],
    usage: [
      "Simpan dalam peti sejuk dan nikmati dalam 3–4 hari selepas terima.",
      "Biarkan pada suhu bilik 10 minit sebelum dimakan untuk rasa paling penuh.",
      "Sepadan dengan keju lembut, madu, yogurt atau dalam salad.",
    ],
    related: ["cda-fresh-figs", "dried-figs-100", "fig-leaf-tea", "wellness-hamper"],
    benefitTags: ["heart", "digestion", "energy"],
    origin: "Jepun (ditanam di Malaysia)",
    flavour: "Bermadu, lembut, sedikit beri",
    colour: "Ungu kemerahan",
    featured: true,
    bestseller: true,
    seo: {
      title: "Buah Tin Segar Masui Dauphine (300g) — Masak di Pokok",
      description:
        "Beli buah tin segar Masui Dauphine dalam talian di Malaysia. Masak di pokok, dibungkus sejuk hari sama, bertauliah MyGAP. Buah tin merah manis dihantar segar ke pintu anda.",
    },
  },
  {
    id: "fresh-cda-300",
    slug: "cda-fresh-figs",
    name: "Buah Tin Segar Constantine de Algerie",
    category: "fresh-figs",
    subtitle: "Buah tin hijau amat manis · bekas 300g",
    shortDescription:
      "Kulit hijau keemasan dengan isi merah jambu batu yang lembut — antara buah tin paling manis dan berair yang kami tanam.",
    description: [
      "Constantine de Algerie (CDA) terkenal dengan isinya yang lumer dan berair serta kandungan gula yang amat tinggi. Di bawah kulit hijau keemasan tersembunyi isi merah jambu batu yang lembut, hampir seperti jem.",
      "Dibiarkan masak sepenuhnya di pokok dan dibungkus sejuk pada hari sama, CDA sesuai untuk sesiapa yang mahu merasai betapa hebatnya buah tin segar boleh jadi.",
    ],
    highlights: [
      "Antara varieti paling manis yang kami tanam",
      "Tekstur lembut, berair dan lumer",
      "Masak di pokok dan dibungkus sejuk hari sama",
      "Ditanam di Malaysia, sepanjang tahun",
    ],
    price: 22,
    unit: "setiap bekas 300g",
    sku: "BFG-FR-CDA-300",
    images: [
      { alt: "Buah tin hijau Constantine de Algerie yang dibelah menampakkan isi merah", motif: "fig-halved" },
      { alt: "Buah tin hijau CDA yang utuh dalam bekas", motif: "fig-whole" },
    ],
    availability: "in_stock",
    badges: ["MyGAP"],
    rating: 4.8,
    reviewCount: 74,
    reviews: [
      R("r1", "Anita R.", "Subang Jaya", 5, "Sangat manis", "Lebih lembut dan manis daripada yang merah. Rasa macam jem tin terus dari buah.", "2026-06-10"),
      R("r2", "Hassan I.", "Kajang", 5, "Betul-betul istimewa", "Pembungkusan cantik dan sangat segar. Sedap ditemani kopi.", "2026-05-22"),
    ],
    specs: [
      { label: "Varieti", value: "Constantine de Algerie (CDA)" },
      { label: "Asal", value: "Ditanam di Malaysia" },
      { label: "Berat", value: "300g (lebih kurang 5–8 biji)" },
      { label: "Penyimpanan", value: "Simpan dalam peti sejuk, terbaik dalam 3 hari" },
    ],
    usage: [
      "Sangat lembut apabila masak — kendalikan dengan berhati-hati dan sejukkan sebaik terima.",
      "Terbaik dinikmati dalam masa 3 hari.",
      "Sedap dimakan begitu sahaja, atau dengan mascarpone dan sedikit madu.",
    ],
    related: ["masui-dauphine-fresh-figs", "mixed-fig-box", "fig-jam"],
    benefitTags: ["heart", "digestion"],
    origin: "Algeria (ditanam di Malaysia)",
    flavour: "Amat manis, lumer, bermadu",
    colour: "Hijau keemasan / isi merah",
    seo: {
      title: "Buah Tin Segar Constantine de Algerie (300g) — Tin Hijau Manis",
      description:
        "Beli buah tin segar Constantine de Algerie (CDA) di Malaysia. Buah tin hijau yang amat manis dan berair, masak di pokok dan dibungkus sejuk hari sama.",
    },
  },
  {
    id: "fresh-mixed-box",
    slug: "mixed-fig-box",
    name: "Kotak Buah Tin Premium Campuran",
    category: "fresh-figs",
    subtitle: "Pilihan rasa buah tin terbaik kami",
    shortDescription:
      "Kotak pelbagai varieti buah tin premium pada kemuncaknya — cara terbaik untuk menemui kegemaran anda.",
    description: [
      "Sukar memilih? Kotak Buah Tin Premium Campuran menghimpunkan pilihan bermusim varieti terbaik yang masak di ladang kami pada minggu itu — mungkin termasuk Masui Dauphine, Constantine de Algerie dan varieti jarang yang lain.",
      "Ia pengenalan ideal kepada betapa pelbagai dan sedapnya buah tin segar, serta menjadi hadiah yang menarik.",
    ],
    highlights: [
      "Rasa bermusim pelbagai varieti premium",
      "Ditanam, dimasakkan dan dibungkus di ladang kami",
      "Hadiah cantik atau hidangan untuk dikongsi",
    ],
    price: 45,
    compareAtPrice: 52,
    unit: "setiap kotak pilihan",
    sku: "BFG-FR-MIX-01",
    images: [{ alt: "Kotak buah tin premium pelbagai warna", motif: "fig-whole" }],
    availability: "seasonal",
    badges: ["Terhad"],
    rating: 4.9,
    reviewCount: 41,
    specs: [
      { label: "Kandungan", value: "Pilihan bermusim, lebih kurang 600g" },
      { label: "Varieti", value: "Berubah setiap minggu mengikut tuaian" },
      { label: "Penyimpanan", value: "Simpan dalam peti sejuk, terbaik dalam 3–4 hari" },
    ],
    related: ["masui-dauphine-fresh-figs", "cda-fresh-figs", "wellness-hamper"],
    benefitTags: ["heart", "digestion", "energy"],
    seo: {
      title: "Kotak Buah Tin Premium Campuran — Pilihan Buah Tin Segar",
      description:
        "Kotak pelbagai varieti buah tin segar premium pada kemuncaknya, ditanam di Malaysia. Pilihan rasa buah tin segar yang sempurna atau hadiah istimewa.",
    },
  },
  {
    id: "dried-figs-100",
    slug: "dried-figs-100",
    name: "Buah Tin Kering",
    category: "fresh-figs",
    subtitle: "Dikeringkan secara semula jadi · 100g",
    shortDescription:
      "Buah tin utuh, dikeringkan perlahan untuk memekatkan kemanisan semula jadinya. Snek berkhasiat sepanjang tahun yang tahan lama.",
    description: [
      "Apabila buah tin sesegar ini, mengeringkannya hanya memperdalam rasanya. Buah tin kering kami dikeringkan perlahan untuk mengekalkan nutrisi dan kemanisan karamel yang kaya — tanpa gula tambahan, tanpa pengawet.",
      "Simpan sepaket dalam almari untuk snek manis semula jadi, untuk membakar, atau ditambah pada papan keju, yogurt atau bijirin pagi.",
    ],
    highlights: [
      "Tiada gula tambahan, tiada pengawet",
      "Tinggi serat dan manis semula jadi",
      "Jangka hayat panjang — snek bila-bila masa",
      "Sesuai untuk membakar, salad dan papan keju",
    ],
    price: 28.9,
    unit: "setiap paket 100g",
    sku: "BFG-DR-100",
    images: [{ alt: "Sepaket buah tin utuh yang dikeringkan secara semula jadi", motif: "fig-whole" }],
    availability: "in_stock",
    badges: ["Kegemaran dapur"],
    rating: 4.7,
    reviewCount: 96,
    specs: [
      { label: "Berat", value: "100g" },
      { label: "Ramuan", value: "100% buah tin" },
      { label: "Penyimpanan", value: "Tempat sejuk dan kering. Tutup semula selepas dibuka." },
    ],
    related: ["fig-leaf-tea", "masui-dauphine-fresh-figs", "wellness-hamper"],
    benefitTags: ["digestion", "energy", "heart"],
    seo: {
      title: "Buah Tin Kering (100g) — Tiada Gula Tambahan",
      description:
        "Buah tin Malaysia yang dikeringkan secara semula jadi tanpa gula tambahan atau pengawet. Tinggi serat dan manis berkaramel. Snek berkhasiat sepanjang tahun.",
    },
  },

  // ---- POKOK TIN & ANAK POKOK ---------------------------------------------
  {
    id: "sapling-md",
    slug: "masui-dauphine-sapling",
    name: "Anak Pokok Tin Masui Dauphine",
    category: "fig-trees",
    subtitle: "Mesra pemula · cepat berbuah",
    shortDescription:
      "Anak pokok Masui Dauphine yang sihat dan bebas penyakit — buah tin paling mudah dan memuaskan untuk ditanam dalam iklim Malaysia.",
    description: [
      "Mulakan perjalanan buah tin anda dengan varieti yang membina ladang kami. Masui Dauphine tumbuh cergas, tahan tropika dan cepat berbuah, menjadikannya pilihan ideal untuk penanam kali pertama.",
      "Setiap anak pokok dibiakkan di ladang kami, dibesarkan sihat dan bebas penyakit, serta dihantar dibungkus rapi bersama panduan menanam yang ringkas.",
    ],
    highlights: [
      "Bebas penyakit, berakar kuat, dibiak di ladang",
      "Cepat berbuah — selalunya dalam beberapa bulan",
      "Sesuai dengan iklim Malaysia",
      "Disertakan panduan menanam untuk pemula",
    ],
    price: 55,
    unit: "setiap anak pokok",
    sku: "BFG-TR-MD",
    images: [{ alt: "Anak pokok tin Masui Dauphine yang sihat dalam beg semaian", motif: "tree" }],
    availability: "in_stock",
    badges: ["Paling Laris", "Sesuai pemula"],
    rating: 4.8,
    reviewCount: 210,
    reviews: [
      R("r1", "Zul H.", "Rawang", 5, "Berbuah di balkoni saya!", "Sampai sihat dan berakar baik. Sudah nampak buah selepas beberapa bulan. Hebat.", "2026-06-01"),
      R("r2", "Mary T.", "Ipoh", 5, "Pokok sangat sihat", "Pembungkusan sangat baik, pokok sampai tanpa satu pun daun patah.", "2026-04-19"),
    ],
    specs: [
      { label: "Varieti", value: "Masui Dauphine (MD)" },
      { label: "Pembiakan", value: "Dibiak di ladang, bebas penyakit" },
      { label: "Sesuai untuk", value: "Pemula, pasu dan taman" },
      { label: "Penghantaran", value: "Dibungkus rapi, dihantar seluruh negara" },
    ],
    usage: [
      "Tanam dalam pasu besar atau tanah dengan tanah bersaliran baik dan cahaya matahari penuh.",
      "Siram kerap tetapi elakkan tanah terlalu lembap.",
      "Beri baja BajaTin kami untuk pertumbuhan dan pembuahan yang kuat.",
    ],
    related: ["fig-sapling-medium", "fig-cutting", "bajatin-formula", "starter-3-saplings"],
    benefitTags: [],
    origin: "Jepun",
    seo: {
      title: "Anak Pokok Tin Masui Dauphine — Pokok Tin Mudah untuk Malaysia",
      description:
        "Beli anak pokok tin Masui Dauphine yang sihat dan bebas penyakit. Cepat berbuah, sesuai iklim Malaysia, dibiak di ladang dengan panduan menanam. Dihantar seluruh negara.",
    },
  },
  {
    id: "sapling-medium",
    slug: "fig-sapling-medium",
    name: "Anak Pokok Tin Gred Sederhana",
    category: "fig-trees",
    subtitle: "Pilih daripada varieti terbukti",
    shortDescription:
      "Anak pokok kukuh dan produktif daripada varieti terbukti seperti Galicia Negra, Green Jordan dan Sarek Tuman. Tumbuh cergas dan berbuah lebat.",
    description: [
      "Sedia menambah koleksi? Anak pokok gred sederhana kami datang daripada varieti yang boleh diharap dan produktif yang tumbuh cergas serta berbuah lebat — imbangan hebat antara kualiti dan nilai.",
      "Setiap satu dibiak di ladang, bebas penyakit dan dihantar dengan berhati-hati. Beli dua dan jimat.",
    ],
    highlights: [
      "Varieti terbukti dan produktif",
      "Tumbuh cergas, berbuah lebat",
      "Bebas penyakit dan dibiak di ladang",
      "Beli 2 dan jimat",
    ],
    price: 65,
    unit: "setiap anak pokok",
    sku: "BFG-TR-MED",
    variants: [
      { id: "v-galicia", label: "Galicia Negra", price: 65, sku: "BFG-TR-MED-GAL", availability: "in_stock" },
      { id: "v-green-jordan", label: "Green Jordan", price: 65, sku: "BFG-TR-MED-GJ", availability: "in_stock" },
      { id: "v-sarek", label: "Sarek Tuman", price: 65, sku: "BFG-TR-MED-SAR", availability: "low_stock" },
      { id: "v-belvedere", label: "Belvedere", price: 65, sku: "BFG-TR-MED-BEL", availability: "in_stock" },
    ],
    images: [{ alt: "Anak pokok tin gred sederhana yang cergas", motif: "tree" }],
    availability: "in_stock",
    badges: ["Beli 2 & jimat"],
    rating: 4.7,
    reviewCount: 88,
    specs: [
      { label: "Gred", value: "Gred sederhana" },
      { label: "Varieti", value: "Galicia Negra, Green Jordan, Sarek Tuman, Belvedere" },
      { label: "Pembiakan", value: "Dibiak di ladang, bebas penyakit" },
    ],
    related: ["masui-dauphine-sapling", "fig-sapling-premium", "bajatin-formula"],
    seo: {
      title: "Anak Pokok Tin Gred Sederhana — Varieti Produktif Terbukti",
      description:
        "Anak pokok tin kukuh dan produktif (Galicia Negra, Green Jordan, Sarek Tuman dan lagi). Bebas penyakit, dibiak di ladang. Beli 2 dan jimat. Dihantar seluruh Malaysia.",
    },
  },
  {
    id: "sapling-premium",
    slug: "fig-sapling-premium",
    name: "Anak Pokok Tin Gred Premium (Kolektor)",
    category: "fig-trees",
    subtitle: "Varieti jarang, tinggi permintaan",
    shortDescription:
      "Untuk penanam serius: varieti kolektor jarang seperti Panache Tiger, Kafe Te Jiate dan De La Reina — buah besar, rasa luar biasa.",
    description: [
      "Anak pokok gred premium kami ialah mahkota koleksi — kultivar jarang dan tinggi permintaan yang terkenal di seluruh dunia kerana rasa luar biasa dan buah yang menawan.",
      "Pilih daripada kegemaran kolektor seperti Panache Tiger berjalur, De La Reina yang amat manis, atau Kafe Te Jiate yang berharga. Setiap satu dibiak di ladang dan dibesarkan pada standard tertinggi kami.",
    ],
    highlights: [
      "Varieti gred kolektor yang jarang",
      "Buah besar, rasa luar biasa",
      "Dibiak di ladang pada standard tertinggi",
      "Tambahan berharga untuk mana-mana koleksi",
    ],
    price: 150,
    unit: "setiap anak pokok",
    sku: "BFG-TR-PREM",
    variants: [
      { id: "v-panache", label: "Panache Tiger", price: 150, sku: "BFG-TR-PREM-PAN", availability: "in_stock" },
      { id: "v-ktj", label: "Kafe Te Jiate", price: 150, sku: "BFG-TR-PREM-KTJ", availability: "low_stock" },
      { id: "v-delareina", label: "De La Reina", price: 150, sku: "BFG-TR-PREM-DLR", availability: "in_stock" },
    ],
    images: [{ alt: "Anak pokok tin gred premium untuk kolektor", motif: "tree" }],
    availability: "in_stock",
    badges: ["Kolektor", "Terhad"],
    rating: 4.9,
    reviewCount: 37,
    specs: [
      { label: "Gred", value: "Gred premium / kolektor" },
      { label: "Varieti", value: "Panache Tiger, Kafe Te Jiate, De La Reina" },
      { label: "Pembiakan", value: "Dibiak di ladang, bebas penyakit" },
    ],
    related: ["fig-sapling-medium", "masui-dauphine-sapling", "bajatin-formula"],
    seo: {
      title: "Anak Pokok Tin Premium Kolektor — Varieti Jarang",
      description:
        "Anak pokok tin gred kolektor yang jarang — Panache Tiger, Kafe Te Jiate, De La Reina dan lagi. Buah besar, rasa luar biasa, dibiak di ladang. Bekalan terhad.",
    },
  },
  {
    id: "fig-cutting",
    slug: "fig-cutting",
    name: "Keratan Batang Pokok Tin",
    category: "fig-trees",
    subtitle: "Untuk penanam yang gemar mencuba",
    shortDescription:
      "Keratan batang tin yang segar dan sihat sedia untuk berakar — cara berpatutan untuk membiak pokok anda sendiri.",
    description: [
      "Untuk tukang kebun yang gemar mencuba, keratan tin segar kami ialah cara berpatutan menanam pokok anda sendiri dari mula. Diambil daripada pokok induk yang sihat di ladang kami dan dihantar segar.",
      "Satu projek kecil yang memuaskan — dengan sedikit penjagaan, keratan akan menjadi pokok yang berbuah.",
    ],
    highlights: [
      "Diambil segar daripada pokok induk yang sihat",
      "Cara berpatutan untuk membiak",
      "Projek menanam yang memuaskan",
    ],
    price: 20,
    unit: "setiap keratan",
    sku: "BFG-TR-CUT",
    images: [{ alt: "Keratan batang tin segar sedia untuk berakar", motif: "leaf" }],
    availability: "in_stock",
    rating: 4.5,
    reviewCount: 54,
    related: ["masui-dauphine-sapling", "bajatin-formula", "tanah-tin"],
    seo: {
      title: "Keratan Batang Pokok Tin — Biak Pokok Tin Anda Sendiri",
      description:
        "Keratan tin segar dan sihat sedia untuk berakar. Cara berpatutan membiak pokok tin anda sendiri, diambil daripada pokok induk sihat di ladang kami di Malaysia.",
    },
  },
  {
    id: "starter-3-saplings",
    slug: "starter-3-saplings",
    name: "Pakej Permulaan — 3 Anak Pokok",
    category: "fig-trees",
    subtitle: "Campur mana-mana 3 · jimat RM25",
    shortDescription:
      "Set tiga anak pokok mudah tanam pada harga pakej — cara terbaik memulakan dusun tin kecil anda sendiri.",
    description: [
      "Baru berjinak dengan tin? Mulakan dengan tiga. Pakej ini menghimpunkan campuran varieti kami yang paling memuaskan dan mesra pemula pada harga jimat — segala yang anda perlukan untuk memulakan dusun di rumah.",
      "Setiap anak pokok bebas penyakit, dibiak di ladang dan dihantar bersama panduan menanam.",
    ],
    highlights: [
      "Tiga anak pokok mudah tanam",
      "Jimat RM25 berbanding beli berasingan",
      "Disertakan panduan menanam untuk pemula",
    ],
    price: 110,
    compareAtPrice: 135,
    unit: "setiap set 3",
    sku: "BFG-TR-BUNDLE3",
    images: [{ alt: "Tiga anak pokok tin muda dalam satu set", motif: "tree" }],
    availability: "in_stock",
    badges: ["Jimat RM25", "Nilai terbaik"],
    rating: 4.9,
    reviewCount: 63,
    related: ["masui-dauphine-sapling", "fig-sapling-medium", "bajatin-formula"],
    seo: {
      title: "Pakej Permulaan Tin — 3 Anak Pokok (Jimat RM25)",
      description:
        "Mulakan dusun tin di rumah dengan set tiga anak pokok mudah tanam pada harga pakej. Bebas penyakit, dibiak di ladang, dengan panduan menanam.",
    },
  },

  // ---- MAKANAN TIN ARTISAN -------------------------------------------------
  {
    id: "fig-jam",
    slug: "fig-jam",
    name: "Jem Buah Tin",
    category: "fig-foods",
    subtitle: "Kelompok kecil · 150g",
    shortDescription:
      "Jem buah tin yang lembut, diperbuat daripada buah tin kami sendiri dalam kelompok kecil. Kaya, penuh rasa buah dan tanpa pengawet tiruan.",
    description: [
      "Jem buah tin kami dibuat dengan cara jujur — buah tin sebenar dari ladang kami, dimasak perlahan dalam kelompok kecil sehingga lembut dan mendalam rasanya. Tiada pengawet tiruan, tiada jalan pintas.",
      "Sapukan pada roti bakar hangat, cicah dengan keju, atau kacau ke dalam yogurt. Ia juga menjadi hadiah yang manis dan bermakna.",
    ],
    highlights: [
      "Diperbuat daripada buah tin ladang kami sendiri",
      "Kelompok kecil, tiada pengawet tiruan",
      "Kaya dan penuh dengan rasa buah",
      "Sedap dengan roti bakar, keju atau yogurt",
    ],
    price: 18,
    unit: "setiap balang 150g",
    sku: "BFG-FD-JAM-150",
    images: [{ alt: "Sebalang jem buah tin Benefigs kelompok kecil", motif: "jar" }],
    availability: "in_stock",
    badges: ["Paling Laris"],
    rating: 4.8,
    reviewCount: 152,
    reviews: [
      R("r1", "Sarah W.", "Cyberjaya", 5, "Tak terlalu manis, cukup padu", "Betul-betul terasa buah tinnya. Sedap atas roti sourdough dengan keju.", "2026-05-30"),
    ],
    specs: [
      { label: "Berat", value: "150g" },
      { label: "Ramuan", value: "Buah tin, gula, limau" },
      { label: "Penyimpanan", value: "Simpan dalam peti sejuk selepas dibuka" },
    ],
    related: ["fig-sambal", "masui-dauphine-fresh-figs", "wellness-hamper"],
    benefitTags: ["digestion"],
    seo: {
      title: "Jem Buah Tin (150g) — Kelompok Kecil, Buah Tin Sebenar",
      description:
        "Jem buah tin lembut kelompok kecil diperbuat daripada buah tin ladang kami di Malaysia, tanpa pengawet tiruan. Kaya dan penuh rasa buah. Jeruk yang sesuai dihadiahkan.",
    },
  },
  {
    id: "fig-sambal",
    slug: "fig-sambal",
    name: "Sambal Buah Tin",
    category: "fig-foods",
    subtitle: "Cita rasa Malaysia asli · 200g",
    shortDescription:
      "Sambal unik yang menemukan kemanisan semula jadi buah tin dengan pedas rempah Malaysia. Kaya, menyelerakan dan benar-benar asli.",
    description: [
      "Ini sesuatu yang tidak akan anda temui di tempat lain. Kami adun buah tin kami sendiri ke dalam sambal tradisional, di mana kemanisan buah melengkapkan pedas dan kedalaman rempah.",
      "Hidangkan dengan nasi, ikan bakar, atau apa sahaja yang perlukan sentuhan istimewa. Amaran: ia cepat habis.",
    ],
    highlights: [
      "Sambal buah tin yang benar-benar asli",
      "Manis-pedas, kaya dan menyelerakan",
      "Diperbuat dengan buah tin ladang kami sendiri",
      "Pembuka bicara di mana-mana meja",
    ],
    price: 18,
    unit: "setiap balang 200g",
    sku: "BFG-FD-SBL-200",
    images: [{ alt: "Sebalang sambal buah tin Benefigs", motif: "jar" }],
    availability: "in_stock",
    badges: ["Asli", "MyGAP"],
    rating: 4.7,
    reviewCount: 89,
    specs: [
      { label: "Berat", value: "200g" },
      { label: "Kepedasan", value: "Sederhana" },
      { label: "Penyimpanan", value: "Simpan dalam peti sejuk selepas dibuka" },
    ],
    related: ["fig-jam", "masui-dauphine-fresh-figs"],
    seo: {
      title: "Sambal Buah Tin (200g) — Cita Rasa Malaysia Asli",
      description:
        "Sambal buah tin unik Malaysia di mana kemanisan tin bertemu pedas rempah. Kaya, menyelerakan dan benar-benar asli. Diperbuat dengan buah tin ladang Benefigs.",
    },
  },

  // ---- MINUMAN & TEH TIN ---------------------------------------------------
  {
    id: "fig-leaf-tea",
    slug: "fig-leaf-tea",
    name: "Teh Daun Tin",
    category: "fig-drinks",
    subtitle: "Teh herba tanpa kafein · 30g",
    shortDescription:
      "Teh daun tin tulen dengan kemanisan lembut yang bersahaja. Tanpa kafein dan menenangkan secara semula jadi — ritual kesihatan harian.",
    description: [
      "Lama dihargai dalam kesihatan tradisional, daun tin menghasilkan teh herba yang lembut dan manis semula jadi. Teh kami diperbuat sepenuhnya daripada daun tin ladang kami sendiri, dikeringkan dengan teliti untuk mengekalkan wataknya.",
      "Seduh secawan untuk berehat pada waktu malam, atau nikmati sepanjang hari — ia tanpa kafein dan menenangkan.",
    ],
    highlights: [
      "100% daun tin tulen, tanpa kafein",
      "Rasa lembut, manis semula jadi dan bersahaja",
      "Daripada ladang bertauliah MyGAP kami sendiri",
      "Ritual harian yang menenangkan",
    ],
    price: 29.9,
    unit: "setiap paket 30g",
    sku: "BFG-DK-TEA-30",
    images: [{ alt: "Secawan teh daun tin keemasan bersama daun kering", motif: "tea" }],
    availability: "in_stock",
    badges: ["Kesihatan", "Tanpa kafein"],
    rating: 4.6,
    reviewCount: 118,
    reviews: [
      R("r1", "Rohana S.", "Seremban", 5, "Cawan petang saya", "Lembut dan menenangkan. Saya nantikannya setiap malam. Terasa berkhasiat.", "2026-06-05"),
    ],
    specs: [
      { label: "Berat", value: "30g" },
      { label: "Ramuan", value: "100% daun tin kering" },
      { label: "Kafein", value: "Tiada" },
      { label: "Seduhan", value: "1 sudu teh setiap cawan, rendam 5–7 minit" },
    ],
    usage: [
      "Rendam satu sudu teh dalam air panas selama 5–7 minit.",
      "Nikmati begitu sahaja atau dengan sedikit madu.",
      "Tanpa kafein — sesuai pada bila-bila masa.",
    ],
    faqs: [
      {
        question: "Adakah teh daun tin sesuai untuk yang menjaga paras gula?",
        answer:
          "Teh daun tin ialah minuman herba tanpa kafein yang popular dan secara semula jadi tanpa gula. Ia bukan ubat dan tidak membuat sebarang tuntutan perubatan — jika anda menguruskan sesuatu keadaan kesihatan, sila rujuk doktor sebelum mengubah rutin anda.",
      },
    ],
    related: ["dried-figs-100", "fig-juice", "wellness-hamper"],
    benefitTags: ["wellness", "digestion"],
    seo: {
      title: "Teh Daun Tin (30g) — Tanpa Kafein",
      description:
        "Teh daun tin tulen tanpa kafein daripada ladang bertauliah MyGAP kami sendiri. Lembut manis dan menenangkan — ritual kesihatan harian yang berkhasiat.",
    },
  },
  {
    id: "fig-juice",
    slug: "fig-juice",
    name: "Jus Buah Tin Tekanan Sejuk",
    category: "fig-drinks",
    subtitle: "Tanpa gula tambahan",
    shortDescription:
      "Jus buah tin tekanan sejuk tulen — manis semula jadi, menyegarkan dan diperbuat daripada buah tin sebenar tanpa apa-apa tambahan.",
    description: [
      "Segala kebaikan buah tin dalam segelas. Kami tekan sejuk buah tin kami menjadi jus tulen yang manis semula jadi tanpa gula tambahan dan tanpa pati.",
      "Hidangkan sejuk dengan ais untuk minuman menyegarkan dan berkhasiat untuk seisi keluarga.",
    ],
    highlights: ["Buah tin sebenar, tekanan sejuk", "Tiada gula tambahan, tiada pati", "Manis semula jadi dan menyegarkan"],
    price: 18,
    unit: "setiap botol",
    sku: "BFG-DK-JUICE",
    images: [{ alt: "Sebotol jus buah tin tekanan sejuk", motif: "bottle" }],
    availability: "in_stock",
    rating: 4.6,
    reviewCount: 47,
    related: ["fig-lemonade", "fig-leaf-tea"],
    benefitTags: ["energy"],
    seo: {
      title: "Jus Buah Tin Tekanan Sejuk — Tanpa Gula Tambahan",
      description:
        "Jus buah tin tekanan sejuk tulen diperbuat daripada buah tin Malaysia sebenar tanpa gula tambahan atau pati. Manis semula jadi dan menyegarkan.",
    },
  },
  {
    id: "fig-lemonade",
    slug: "fig-lemonade",
    name: "Air Limau Buah Tin Berkarbonat",
    category: "fig-drinks",
    subtitle: "Menyegarkan · 310ml",
    shortDescription:
      "Air limau buah tin berkarbonat yang cergas — kemanisan buah tin bertemu sentuhan sitrus. Kesegaran sejuk, secara semula jadi.",
    description: [
      "Air limau tin kami umpama cahaya matahari dalam botol: buah tin sebenar dan sitrus segar, sedikit berkarbonat dan amat menyegarkan.",
      "Simpan beberapa botol sejuk untuk petang yang panas dan majlis — hidangan yang disukai semua dan terasa sedikit istimewa.",
    ],
    highlights: ["Buah tin sebenar bertemu sitrus segar", "Sedikit berkarbonat dan menyegarkan", "Disukai semua secara semula jadi"],
    price: 7,
    unit: "setiap botol 310ml",
    sku: "BFG-DK-LEM-310",
    images: [{ alt: "Sebotol air limau buah tin berkarbonat", motif: "bottle" }],
    availability: "in_stock",
    badges: ["Menyegarkan"],
    rating: 4.7,
    reviewCount: 73,
    related: ["fig-juice", "fig-leaf-tea"],
    seo: {
      title: "Air Limau Buah Tin Berkarbonat (310ml) — Menyegarkan Semula Jadi",
      description:
        "Air limau buah tin yang cergas dan sedikit berkarbonat diperbuat dengan buah tin sebenar dan sitrus segar. Menyegarkan bila disejukkan — disukai semua.",
    },
  },

  // ---- KEPERLUAN MENANAM ---------------------------------------------------
  {
    id: "bajatin-formula",
    slug: "bajatin-formula",
    name: "Baja BajaTin Formula",
    category: "growing-essentials",
    subtitle: "Nutrisi formulasi ladang",
    shortDescription:
      "Baja seimbang yang kami gunakan di ladang sendiri — diformulasi untuk membantu pokok tin membesar kuat dan berbuah lebat.",
    description: [
      "Beri pokok tin anda nutrisi yang sama diterima pokok kami sendiri. BajaTin Formula ialah baja seimbang yang dibangunkan di ladang kami untuk menyokong pertumbuhan cergas dan pembuahan lebat.",
      "Sesuai untuk pokok tin dan pokok berbuah lain — sedikit sudah memadai.",
    ],
    highlights: [
      "Formula yang kami guna di ladang sendiri",
      "Nutrisi seimbang untuk pertumbuhan dan buah yang kuat",
      "Sesuai untuk pokok tin dan pokok lain",
    ],
    price: 15,
    unit: "setiap paket",
    sku: "BFG-GE-BTF",
    images: [{ alt: "Sepaket baja BajaTin Formula", motif: "leaf" }],
    availability: "in_stock",
    badges: ["Kegemaran ladang"],
    rating: 4.8,
    reviewCount: 134,
    related: ["tanah-tin", "masui-dauphine-sapling", "bajatin-subur"],
    seo: {
      title: "Baja BajaTin Formula — Nutrisi Pokok Tin Formulasi Ladang",
      description:
        "Baja seimbang yang Benefigs gunakan di ladang sendiri, diformulasi untuk membantu pokok tin membesar kuat dan berbuah lebat. Sesuai untuk pokok tin dan pokok lain.",
    },
  },
  {
    id: "tanah-tin",
    slug: "tanah-tin",
    name: "Media Tanaman Tanah Tin",
    category: "growing-essentials",
    subtitle: "Tanah tin sedia guna",
    shortDescription:
      "Media tanaman bersaliran baik dan sedia guna yang diformulasi untuk pokok tin — asas ideal untuk pokok yang subur.",
    description: [
      "Pokok tin sukakan tanah yang ringan dan bersaliran baik. Media tanaman Tanah Tin kami diformulasi khas untuknya, supaya anak pokok anda bermula dengan cara terbaik.",
      "Cuma masukkan ke pasu dan tanam — tanpa teka-teki.",
    ],
    highlights: ["Bersaliran baik, diformulasi untuk pokok tin", "Sedia guna — tanpa perlu campur", "Asas ideal untuk pokok muda"],
    price: 10,
    unit: "setiap beg",
    sku: "BFG-GE-TTF",
    images: [{ alt: "Sebeg media tanaman Tanah Tin untuk pokok tin", motif: "leaf" }],
    availability: "in_stock",
    rating: 4.7,
    reviewCount: 61,
    related: ["bajatin-formula", "masui-dauphine-sapling", "fig-cutting"],
    seo: {
      title: "Media Tanaman Tanah Tin — Tanah Pokok Tin Sedia Guna",
      description:
        "Media tanaman bersaliran baik yang diformulasi khas untuk pokok tin. Sedia guna — asas ideal untuk pokok tin muda yang subur.",
    },
  },
  {
    id: "bajatin-subur",
    slug: "bajatin-subur",
    name: "Penggalak BajaTin Subur",
    category: "growing-essentials",
    subtitle: "Untuk pertumbuhan subur dan sihat",
    shortDescription:
      "Penggalak pertumbuhan untuk menggalakkan daun subur dan pokok tin yang sihat serta cergas.",
    description: [
      "BajaTin Subur ialah penggalak pertumbuhan kami, diformulasi untuk menggalakkan daun subur dan pokok yang sihat serta cergas — sesuai semasa musim membesar.",
    ],
    highlights: ["Menggalakkan pertumbuhan subur dan sihat", "Sesuai semasa musim membesar", "Formula bangunan ladang"],
    price: 8,
    unit: "setiap paket",
    sku: "BFG-GE-BTS",
    images: [{ alt: "Sepaket penggalak pertumbuhan BajaTin Subur", motif: "leaf" }],
    availability: "in_stock",
    rating: 4.6,
    reviewCount: 40,
    related: ["bajatin-formula", "tanah-tin"],
    seo: {
      title: "Penggalak BajaTin Subur — Untuk Pertumbuhan Tin yang Subur",
      description:
        "Penggalak pertumbuhan bangunan ladang untuk menggalakkan daun subur dan pokok tin yang sihat serta cergas. Sesuai semasa musim membesar.",
    },
  },

  // ---- HAMPER HADIAH -------------------------------------------------------
  {
    id: "wellness-hamper",
    slug: "wellness-hamper",
    name: "Hamper Kesihatan Benefigs",
    category: "gift-hampers",
    subtitle: "Hadiah premium yang halal",
    shortDescription:
      "Hamper produk buah tin kegemaran yang dipersembahkan cantik — hadiah premium, halal dan benar-benar bermakna.",
    description: [
      "Beri hadiah yang premium dan benar-benar baik untuk seseorang. Hamper Kesihatan kami menghimpunkan pilihan produk kegemaran kami — mungkin termasuk buah tin kering, jem tin, teh daun tin dan lagi — dipersembahkan cantik dan sedia dihadiahkan.",
      "Sesuai untuk Raya, musim perayaan, ucapan semoga cepat sembuh dan hadiah korporat. Tambah mesej peribadi semasa pembayaran.",
    ],
    highlights: [
      "Pilihan produk terbaik kami yang disusun teliti",
      "Premium, halal dan dipersembahkan cantik",
      "Sempurna untuk hadiah perayaan dan korporat",
      "Tambah mesej hadiah peribadi",
    ],
    price: 120,
    unit: "setiap hamper",
    sku: "BFG-GH-WELL",
    images: [{ alt: "Hamper kesihatan Benefigs yang dipersembahkan cantik", motif: "hamper" }],
    availability: "in_stock",
    badges: ["Sesuai hadiah", "Halal"],
    rating: 4.9,
    reviewCount: 52,
    specs: [
      { label: "Kandungan", value: "Pilihan disusun teliti — berubah mengikut musim" },
      { label: "Persembahan", value: "Berkotak hadiah dengan reben" },
      { label: "Pemperibadian", value: "Tambah mesej hadiah semasa pembayaran" },
    ],
    related: ["fig-jam", "fig-leaf-tea", "dried-figs-100", "corporate-gift-set"],
    seo: {
      title: "Hamper Kesihatan Benefigs — Hadiah Buah Tin Halal Premium",
      description:
        "Hamper produk buah tin kegemaran Benefigs yang dipersembahkan cantik. Premium, halal dan bermakna — sesuai untuk hadiah Raya, perayaan dan korporat.",
    },
  },
  {
    id: "corporate-gift-set",
    slug: "corporate-gift-set",
    name: "Set Hadiah Korporat Buah Tin",
    category: "gift-hampers",
    subtitle: "Hadiah pukal & berjenama",
    shortDescription:
      "Set hadiah buah tin premium untuk pelanggan dan kakitangan, dengan pilihan penjenamaan tersuai dan tempahan pukal.",
    description: [
      "Tinggalkan kesan yang berkekalan dengan hadiah korporat yang menyerlah. Set hadiah buah tin kami premium, halal dan jelas bermakna — dengan pilihan logo anda, mesej tersuai dan harga pukal.",
      "Beritahu kami kuantiti dan majlis anda, dan kami akan sediakan set yang sesuai untuk anda.",
    ],
    highlights: [
      "Hadiah korporat premium yang halal",
      "Penjenamaan dan mesej tersuai tersedia",
      "Harga pukal untuk tempahan lebih besar",
    ],
    price: 0, // PLACEHOLDER — sebut harga setiap tempahan; dipapar sebagai "Minta sebut harga"
    unit: "sebut harga atas permintaan",
    sku: "BFG-GH-CORP",
    images: [{ alt: "Set hadiah korporat buah tin premium", motif: "hamper" }],
    availability: "preorder",
    badges: ["Tersuai", "Pukal"],
    rating: 5,
    reviewCount: 12,
    related: ["wellness-hamper", "fig-jam"],
    seo: {
      title: "Set Hadiah Korporat Buah Tin — Hadiah Tersuai & Pukal",
      description:
        "Set hadiah buah tin korporat premium dan halal dengan penjenamaan tersuai dan harga pukal. Tinggalkan kesan yang bermakna kepada pelanggan dan kakitangan.",
    },
  },

  // ---- PENGALAMAN LADANG ---------------------------------------------------
  {
    id: "farm-visit-adult",
    slug: "farm-visit-ticket",
    name: "Lawatan Ladang — Petik Buah Tin Sendiri",
    category: "farm-experience",
    subtitle: "Hari keluar yang tidak dilupakan",
    shortDescription:
      "Masuk ke ladang buah tin yang beroperasi. Petik buah tin dari pokok, rasa lebih 20 varieti dan belajar cara ia tumbuh. Seronok untuk semua peringkat umur.",
    description: [
      "Tiada yang seperti memetik buah tin dan memakannya beberapa minit kemudian, masih hangat dengan cahaya matahari. Lawati ladang kami untuk meredah barisan pokok, memetik sendiri, dan merasai lebih 20 varieti.",
      "Pemandu kami berkongsi cara buah tin tumbuh dan cara menanamnya sendiri. Ia hari keluar yang santai dan bermakna untuk keluarga, sekolah dan kumpulan — dan anda boleh bawa pulang apa sahaja yang anda petik.",
    ],
    highlights: [
      "Petik buah tin terus dari pokok",
      "Rasa lebih 20 varieti dalam satu lawatan",
      "Belajar cara buah tin tumbuh, daripada pemandu kami",
      "Sesuai untuk keluarga, sekolah dan kumpulan",
    ],
    price: 5,
    unit: "setiap tiket dewasa",
    sku: "BFG-EXP-ADULT",
    variants: [
      { id: "v-adult", label: "Dewasa", price: 5, sku: "BFG-EXP-ADULT", availability: "in_stock" },
      { id: "v-child", label: "Kanak-kanak / Warga emas", price: 3, sku: "BFG-EXP-CONC", availability: "in_stock" },
    ],
    images: [{ alt: "Sebuah keluarga memetik buah tin bersama di ladang", motif: "farm" }],
    availability: "in_stock",
    badges: ["Hari keluarga"],
    rating: 4.9,
    reviewCount: 214,
    reviews: [
      R("r1", "Keluarga Tan", "Lembah Klang", 5, "Anak-anak kami suka", "Pagi yang indah. Anak-anak tak sangka buah tin tumbuh di sini. Kami akan datang lagi.", "2026-05-11"),
    ],
    specs: [
      { label: "Waktu", value: "Buka setiap hari, 9:00 pagi – 6:00 petang" },
      { label: "Sesuai untuk", value: "Keluarga, sekolah, kumpulan korporat" },
      { label: "Nota", value: "Buah tin yang dipetik ditimbang dan dikira berasingan" },
    ],
    usage: [
      "Tempahan awal disyorkan, terutamanya untuk kumpulan.",
      "Pakai kasut selesa dan bawa topi — ia ladang yang beroperasi.",
      "Buah tin yang anda petik ditimbang dan dibayar pada akhir lawatan.",
    ],
    related: ["masui-dauphine-fresh-figs", "masui-dauphine-sapling", "wellness-hamper"],
    seo: {
      title: "Lawatan Ladang Buah Tin — Petik Buah Tin Sendiri di Malaysia",
      description:
        "Tempah lawatan ke ladang Benefigs. Petik buah tin sendiri, rasa lebih 20 varieti dan belajar cara ia tumbuh. Hari keluar untuk keluarga, sekolah dan kumpulan.",
    },
  },
];

/* ============================================================================
   PEMBANTU AKSES DATA
   ============================================================================ */

export function getAllProducts(): Product[] {
  return products;
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getProductsByCategory(slug: string): Product[] {
  return products.filter((p) => p.category === slug);
}

export function getFeaturedProducts(limit = 6): Product[] {
  const featured = products.filter((p) => p.featured);
  return (featured.length ? featured : products).slice(0, limit);
}

export function getBestsellers(limit = 4): Product[] {
  return products.filter((p) => p.bestseller).slice(0, limit);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  const bySlug = (product.related ?? [])
    .map((s) => getProductBySlug(s))
    .filter((p): p is Product => Boolean(p));
  if (bySlug.length >= limit) return bySlug.slice(0, limit);
  const fill = products.filter(
    (p) => p.category === product.category && p.slug !== product.slug && !bySlug.includes(p),
  );
  return [...bySlug, ...fill].slice(0, limit);
}

export function getFeaturedCategories(): Category[] {
  return [...categories].sort((a, b) => a.order - b.order);
}

export function searchProducts(query: string): Product[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return products.filter((p) =>
    [p.name, p.subtitle, p.shortDescription, p.category, ...(p.tags ?? []), ...(p.benefitTags ?? [])]
      .join(" ")
      .toLowerCase()
      .includes(q),
  );
}
