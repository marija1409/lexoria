import type { Metadata } from "next";
import { SITE_CONTENT, SITE_URL } from "./constants";

const defaultTitle = `${SITE_CONTENT.title} — ${SITE_CONTENT.tagline}`;
const defaultDescription = SITE_CONTENT.description;

export const BASE_METADATA: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: defaultTitle,
    template: `%s | ${SITE_CONTENT.title}`,
  },
  description: defaultDescription,
  keywords: [
    "naplata štete",
    "osiguranje",
    "šteta na vozilu",
    "saobraćajna nezgoda",
    "naknada štete",
    "pravni poslovi",
    "procena štete",
    "Srbija",
    "Lexoria",
    "kasko",
    "evropski izveštaj",
  ],
  authors: [{ name: SITE_CONTENT.title }],
  openGraph: {
    type: "website",
    locale: "sr_RS",
    url: SITE_URL,
    siteName: SITE_CONTENT.title,
    title: defaultTitle,
    description: defaultDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE_URL,
  },
};

/**
 * Per-page SEO metadata.
 * Keys match the route folder name (empty string = home page).
 */
export const PAGE_METADATA: Record<string, Metadata> = {
  "": {
    title: `${SITE_CONTENT.title} — Naplata štete od osiguranja`,
    description:
      "Profesionalna procena i naplata štete od osiguranja. Bez troškova unapred — plaćate samo ako uspemo. Dostupni 24/7.",
    alternates: { canonical: SITE_URL },
  },
  kontakt: {
    title: "Kontakt",
    description:
      "Kontaktirajte Lexoria agenciju za naplatu štete. Pozovite nas, pošaljite email ili popunite kontakt formu. Odgovaramo u roku od 24h.",
    alternates: { canonical: `${SITE_URL}/kontakt` },
  },
  "steta-na-vozilu": {
    title: "Šteta na vozilu",
    description:
      "Naplatite štetu na vozilu od osiguranja. Besplatna procena, dolazak na vašu adresu i maksimalna naknada bez stresa.",
    alternates: { canonical: `${SITE_URL}/steta-na-vozilu` },
  },
  povrede: {
    title: "Povrede",
    description:
      "Naplata štete za telesne povrede nastale u saobraćajnoj nezgodi. Borimo se za pravičnu naknadu za vaše povrede.",
    alternates: { canonical: `${SITE_URL}/povrede` },
  },
  "ostale-stete": {
    title: "Ostale štete",
    description:
      "Naplata svih vrsta šteta od osiguravajućih društava — materijalne štete, nematerijalne štete i drugo.",
    alternates: { canonical: `${SITE_URL}/ostale-stete` },
  },
  "evropski-izvestaj": {
    title: "Evropski izveštaj",
    description:
      "Sve o evropskom izveštaju o saobraćajnoj nezgodi — kako ga popuniti, šta je važno i kako vam Lexoria može pomoći.",
    alternates: { canonical: `${SITE_URL}/evropski-izvestaj` },
  },
  kasko: {
    title: "Kasko osiguranje",
    description:
      "Pomoć pri naplati kasko štete. Saznajte svoja prava i maksimalno iskoristite kasko polisu osiguranja.",
    alternates: { canonical: `${SITE_URL}/kasko` },
  },
  "ostali-pravni-poslovi": {
    title: "Ostali pravni poslovi",
    description:
      "Pored naplate štete, pružamo pravne usluge: ugovori, konsultacije, građevinske dozvole, upravni postupci.",
    alternates: { canonical: `${SITE_URL}/ostali-pravni-poslovi` },
  },
  "cesta-pitanja": {
    title: "Česta pitanja",
    description:
      "Odgovori na najčešća pitanja o naplati štete od osiguranja — postupak, troškovi, rokovi i vaša prava.",
    alternates: { canonical: `${SITE_URL}/cesta-pitanja` },
  },
};
