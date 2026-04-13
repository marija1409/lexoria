import { SITE_CONTENT, SITE_URL } from "@/lib/constants";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: SITE_CONTENT.title,
  description: SITE_CONTENT.description,
  url: SITE_URL,
  telephone: SITE_CONTENT.phone,
  email: SITE_CONTENT.email,
  areaServed: {
    "@type": "Country",
    name: "Serbia",
  },
  serviceType: [
    "Naplata štete od osiguranja",
    "Procena štete",
    "Pravne usluge",
    "Kasko osiguranje",
  ],
  priceRange: "Besplatno unapred — provizija samo nakon uspešne naplate",
  availableLanguage: {
    "@type": "Language",
    name: "Serbian",
  },
};

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
