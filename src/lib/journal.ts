import type { ImageAsset } from "./types";

export interface ArticleBlock {
  type: "p" | "h2" | "ul";
  text?: string;
  items?: string[];
}

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO
  readingMinutes: number;
  category: string;
  image: ImageAsset;
  body: ArticleBlock[];
  related?: string[];
  seo?: { title?: string; description?: string };
}

export const articles: Article[] = [
  {
    slug: "khasiat-buah-tin",
    title: "Khasiat Buah Tin: Kenapa Ia Digelar Superfood",
    excerpt:
      "Kaya serat, potasium dan antioksidan — dan disebut dalam Al-Quran. Ketahui mengapa buah tin begitu istimewa.",
    date: "2026-06-15",
    readingMinutes: 5,
    category: "Kesihatan",
    image: { alt: "Buah tin segar yang dibelah menampakkan isi merah", motif: "fig-halved" },
    body: [
      { type: "p", text: "Buah tin (fig) telah dihargai pelbagai budaya sejak beribu tahun. Ia disebut dalam Al-Quran menerusi Surah At-Tin, dan sejak dahulu dianggap sebagai buah yang istimewa. Tetapi di sebalik nilai sejarahnya, apakah yang menjadikan buah tin begitu berkhasiat?" },
      { type: "h2", text: "Kaya dengan serat semula jadi" },
      { type: "p", text: "Buah tin ialah sumber serat pemakanan yang baik, yang membantu melancarkan pencernaan dan membuatkan anda rasa kenyang lebih lama — sebahagian yang baik dalam diet seimbang." },
      { type: "h2", text: "Sumber potasium dan mineral" },
      { type: "p", text: "Buah tin mengandungi potasium, kalsium dan zat besi secara semula jadi, serta antioksidan yang membantu melindungi sel tubuh." },
      { type: "h2", text: "Cara menikmatinya" },
      { type: "ul", items: ["Makan segar begitu sahaja sebagai snek", "Hidangkan dengan yogurt, granola atau keju", "Seduh teh daun tin untuk minuman menenangkan tanpa kafein"] },
      { type: "p", text: "Nota: Buah tin ialah makanan semula jadi, bukan ubat, dan tidak bertujuan untuk mendiagnos, merawat atau mencegah sebarang penyakit." },
    ],
    related: ["menanam-pokok-tin", "resepi-buah-tin"],
    seo: {
      title: "Khasiat Buah Tin — Kenapa Ia Digelar Superfood",
      description: "Buah tin kaya serat, potasium dan antioksidan. Ketahui khasiat buah tin dan cara terbaik menikmatinya dalam diet seimbang.",
    },
  },
  {
    slug: "menanam-pokok-tin",
    title: "Cara Menanam Pokok Tin di Malaysia: Panduan Pemula",
    excerpt: "Buah tin sebenarnya mudah ditanam dalam iklim tropika kita. Ikuti panduan ringkas ini untuk bermula.",
    date: "2026-06-01",
    readingMinutes: 6,
    category: "Menanam",
    image: { alt: "Anak pokok tin muda dalam pasu", motif: "tree" },
    body: [
      { type: "p", text: "Ramai yang terkejut apabila mengetahui buah tin boleh tumbuh subur di Malaysia. Dengan sedikit penjagaan, anda boleh menanam pokok tin yang berbuah di halaman atau balkoni rumah anda sendiri." },
      { type: "h2", text: "Pilih varieti yang sesuai" },
      { type: "p", text: "Untuk pemula, varieti seperti Masui Dauphine sangat sesuai — ia tahan tropika, cepat berbuah dan mudah dijaga." },
      { type: "h2", text: "Tanah dan pasu" },
      { type: "p", text: "Pokok tin sukakan tanah yang ringan dan bersaliran baik. Gunakan media tanaman yang diformulasi khas seperti Tanah Tin, dan pasu yang cukup besar dengan lubang saliran." },
      { type: "h2", text: "Cahaya, air dan baja" },
      { type: "ul", items: ["Letak di tempat dengan cahaya matahari penuh", "Siram kerap tetapi elakkan tanah terlalu lembap", "Beri baja seimbang seperti BajaTin Formula untuk pertumbuhan dan buah yang kuat"] },
      { type: "p", text: "Dengan penjagaan yang konsisten, anak pokok yang sihat boleh mula berbuah dalam beberapa bulan sahaja." },
    ],
    related: ["khasiat-buah-tin", "resepi-buah-tin"],
    seo: {
      title: "Cara Menanam Pokok Tin di Malaysia — Panduan Pemula",
      description: "Panduan ringkas menanam pokok tin di Malaysia: memilih varieti, tanah, pasu, cahaya, air dan baja. Mudah untuk pemula.",
    },
  },
  {
    slug: "resepi-buah-tin",
    title: "5 Cara Menikmati Buah Tin Segar",
    excerpt: "Daripada snek mudah hinggalah hidangan istimewa — inspirasi untuk menikmati buah tin segar anda.",
    date: "2026-05-20",
    readingMinutes: 4,
    category: "Resepi",
    image: { alt: "Buah tin segar dihidangkan di atas pinggan", motif: "fig-whole" },
    body: [
      { type: "p", text: "Buah tin segar sudah cukup sedap dimakan begitu sahaja, tetapi ia juga sangat serba boleh di dapur. Berikut lima cara mudah untuk menikmatinya." },
      { type: "ul", items: [
        "Belah dua dan hidangkan dengan madu dan keju lembut",
        "Hiris ke atas yogurt dan granola untuk sarapan",
        "Panggang sebentar untuk hidangan pencuci mulut yang hangat",
        "Tambah ke dalam salad bersama sayuran hijau dan kacang",
        "Jadikan topping untuk roti bakar bersama jem tin",
      ] },
      { type: "p", text: "Ingat, buah tin segar paling sedap dinikmati sejuk dan dalam beberapa hari selepas dipetik — jadi simpan dalam peti sejuk dan nikmati semasa ia pada puncak kesegaran." },
    ],
    related: ["khasiat-buah-tin", "menanam-pokok-tin"],
    seo: {
      title: "5 Cara Menikmati Buah Tin Segar",
      description: "Lima idea mudah untuk menikmati buah tin segar — snek, sarapan, pencuci mulut, salad dan lagi.",
    },
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
