import { site } from "./site";
import { absoluteUrl } from "./utils";
import { schemaAvailability } from "./availability";
import type { Product, FAQ } from "./types";

/**
 * schema.org (JSON-LD) builders. Rendered via <JsonLd>. Rich, accurate
 * structured data is a core SEO lever — Organization, LocalBusiness, Product,
 * Breadcrumb, FAQ and WebSite (with SearchAction) are all covered.
 */

const ORG_ID = `${site.url}/#organization`;
const WEBSITE_ID = `${site.url}/#website`;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    description: site.slogan,
    foundingDate: site.founded,
    founder: { "@type": "Person", name: site.founder },
    email: site.salesEmail,
    telephone: site.phoneDisplay,
    areaServed: "MY",
    sameAs: [site.socials.facebook, site.socials.instagram, site.socials.tiktok],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: site.phoneDisplay,
      contactType: "customer service",
      areaServed: "MY",
      availableLanguage: ["en", "ms"],
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: site.url,
    name: site.name,
    publisher: { "@id": ORG_ID },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${site.url}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${site.url}/#localbusiness`,
    name: `${site.name} — ${site.address.city} Fig Farm`,
    image: absoluteUrl("/opengraph-image", site.url),
    url: site.url,
    telephone: site.phoneDisplay,
    email: site.salesEmail,
    priceRange: "RM",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.line1,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.postcode,
      addressCountry: "MY",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.address.latitude,
      longitude: site.address.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: site.hours.opens,
        closes: site.hours.closes,
      },
    ],
    parentOrganization: { "@id": ORG_ID },
  };
}

export function productSchema(product: Product) {
  const url = absoluteUrl(`/products/${product.slug}`, site.url);
  const hasReviews = product.reviewCount > 0;

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.shortDescription,
    sku: product.sku,
    category: product.category,
    brand: { "@type": "Brand", name: site.name },
    ...(product.origin ? { additionalProperty: [{ "@type": "PropertyValue", name: "Origin", value: product.origin }] } : {}),
    offers: {
      "@type": "Offer",
      url,
      priceCurrency: "MYR",
      price: product.price > 0 ? product.price.toFixed(2) : undefined,
      availability: schemaAvailability(product.availability),
      itemCondition: "https://schema.org/NewCondition",
      seller: { "@id": ORG_ID },
    },
    ...(hasReviews
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: product.rating.toFixed(1),
            reviewCount: product.reviewCount,
            bestRating: "5",
            worstRating: "1",
          },
        }
      : {}),
    ...(product.reviews?.length
      ? {
          review: product.reviews.slice(0, 5).map((r) => ({
            "@type": "Review",
            author: { "@type": "Person", name: r.author },
            datePublished: r.date,
            reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: "5" },
            name: r.title,
            reviewBody: r.body,
          })),
        }
      : {}),
  };
}

export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.href, site.url),
    })),
  };
}

export function faqSchema(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function itemListSchema(products: Product[], listName: string) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: listName,
    itemListElement: products.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: absoluteUrl(`/products/${p.slug}`, site.url),
      name: p.name,
    })),
  };
}
