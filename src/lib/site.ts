/**
 * ============================================================================
 * CENTRAL SITE CONFIGURATION
 * ============================================================================
 * Single source of truth for business info, contact details, navigation,
 * trust signals and integration IDs.
 *
 * Anything we could NOT verify from the company profile / research is marked
 * with `TODO_CONFIRM` (needs client sign-off) or `PLACEHOLDER` (drop-in value).
 * Replacing these does not require any design or architecture changes.
 * ============================================================================
 */

/** Read a public env var with a safe placeholder fallback (never throws). */
function pub(key: string, fallback = ""): string {
  const v = process.env[key];
  return v && v.length > 0 ? v : fallback;
}

export const site = {
  name: "Benefigs",
  legalName: "Benefigs Arus Sdn Bhd", // per company profile
  // "Benefits + Figs = Benefigs"
  tagline: "Good Figs, Good Life",
  slogan: "Fresh Malaysian figs, grown with care — from our farm to your family.",

  /** Canonical production URL. TODO_CONFIRM: confirm primary domain + fix SSL. */
  url: pub("NEXT_PUBLIC_SITE_URL", "https://benefigs.com"),
  locale: "en-MY",
  languageAlternates: {
    "en-MY": "/",
    // "ms-MY": "/ms",  // Malay locale planned (content layer is i18n-ready)
  },
  currency: "MYR" as const,
  currencySymbol: "RM",
  country: "Malaysia",

  founded: "2018",
  founder: "Mohamad Hafidz bin Arifin", // CEO & Founder (company profile)

  /** Contact — sourced from research; TODO_CONFIRM canonical set with client. */
  email: "hello@benefigs.com", // PLACEHOLDER (research showed sales.benefigs@gmail.com)
  salesEmail: "sales.benefigs@gmail.com",
  phoneDisplay: "+60 10-818 2031", // TODO_CONFIRM primary line
  phoneHref: "+60108182031",
  whatsapp: "60108182031", // wa.me number
  whatsappDisplay: "+60 10-818 2031",

  /** Registration & certification. */
  ssm: "PLACEHOLDER — SSM registration no. (e.g. 20XXXXXXXXXX)",
  certifications: ["MyGAP certified farms"], // verified via research

  /** Primary storefront + agro-tourism location. TODO_CONFIRM full address. */
  address: {
    label: "Benefigs Shah Alam — Selangor Fig Centre",
    line1: "PLACEHOLDER — Seksyen U12, Shah Alam",
    line2: "",
    city: "Shah Alam",
    state: "Selangor",
    postcode: "PLACEHOLDER",
    country: "Malaysia",
    // TODO_CONFIRM: geo-coordinates for LocalBusiness schema + map embed
    latitude: 3.0733,
    longitude: 101.5185,
    mapUrl: "https://maps.google.com/?q=Benefigs+Shah+Alam", // PLACEHOLDER
  },

  /** Farm network (from company profile). */
  farms: [
    { name: "Janda Baik", state: "Pahang", company: "Benefigs Arus" },
    { name: "FELDA Sungai Tengi Selatan", state: "Selangor", company: "Benefigs Arus" },
    { name: "Olak Lempit, Banting", state: "Selangor", company: "Benefigs Arus" },
    { name: "Pasir Puteh", state: "Kelantan", company: "AY Benefigs" },
    { name: "Shah Alam", state: "Selangor", company: "AKE Benefigs" },
    { name: "Jasin", state: "Melaka", company: "AKE Benefigs" },
  ],

  /** Operating hours (agro-tourism, per profile: 9am–6pm daily). TODO_CONFIRM. */
  hours: {
    display: "Open daily, 9:00am – 6:00pm",
    opens: "09:00",
    closes: "18:00",
    days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },

  socials: {
    facebook: "https://www.facebook.com/benefigs.official",
    instagram: "https://www.instagram.com/benefigs.official",
    tiktok: "https://www.tiktok.com/@benefigs.official",
  },

  /** Customer-facing commercial policy summaries (surfaced as trust signals). */
  policy: {
    freeShippingThreshold: 150, // RM — PLACEHOLDER pending client confirmation
    shippingBlurb: "Nationwide delivery across Peninsular & East Malaysia.",
    returnsBlurb: "7-day freshness guarantee on fresh figs. Hassle-free returns.",
    coldChainBlurb: "Fresh orders are cold-packed and dispatched same or next day.",
  },
} as const;

/** Public analytics / marketing IDs — all optional, gated on being present. */
export const analyticsConfig = {
  ga4: pub("NEXT_PUBLIC_GA4_ID"), // e.g. "G-XXXXXXXXXX"
  gtm: pub("NEXT_PUBLIC_GTM_ID"), // e.g. "GTM-XXXXXXX"
  metaPixel: pub("NEXT_PUBLIC_META_PIXEL_ID"),
  tiktokPixel: pub("NEXT_PUBLIC_TIKTOK_PIXEL_ID"),
  // Search Console is verified via DNS or the metaVerification tag below.
  googleSiteVerification: pub("NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION"),
};

/** Payment gateway (Lean.X by LeanX.io). Secrets stay server-side. */
export const paymentConfig = {
  provider: "leanx" as const,
  /** LEANX_UUID is injected server-side; client only knows if it's enabled. */
  enabled: Boolean(process.env.LEANX_UUID),
  sandbox: process.env.LEANX_ENV !== "production",
};

export type Site = typeof site;
