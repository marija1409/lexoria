import { SITE_CONTENT, SITE_URL } from "@/lib/constants";

const structuredData = {
  "@context": "https://schema.org",
  "@type": ["LegalService", "LocalBusiness"],
  name: "Lexoria",
  description:
    "Agencija za naplatu štete od osiguranja u Beogradu i Srbiji. Specijalizovani smo za procenu i naplatu štete iz saobraćajnih nezgoda.",
  url: SITE_URL,
  telephone: SITE_CONTENT.phone,
  email: SITE_CONTENT.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Beograd",
    addressRegion: "Beograd",
    addressCountry: "RS",
  },
  areaServed: [
    { "@type": "City", name: "Beograd" },
    { "@type": "Country", name: "Srbija" },
  ],
  serviceType: [
    "Agencija za naplatu štete od osiguranja",
    "Procena štete od osiguranja",
    "Naplata štete iz saobraćajnih nezgoda",
    "Kasko naplata",
    "Pravne usluge",
  ],
  priceRange: "Besplatno unapred — provizija samo nakon uspešne naplate",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "15:00",
    },
  ],
  availableLanguage: { "@type": "Language", name: "Serbian" },
  knowsAbout: [
    "Naplata štete od osiguranja",
    "Saobraćajne nezgode",
    "Osiguravajuća društva u Srbiji",
    "Procena materijalne štete",
    "Naknada telesnih povreda",
  ],
};

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
