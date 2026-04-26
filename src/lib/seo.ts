import type { Metadata } from "next";
import { SITE_CONTENT, SITE_URL } from "./constants";

const defaultTitle = "Lexoria - Agencija za naplatu štete od osiguranja";
const defaultDescription =
  "Lexoria — agencija za naplatu štete od osiguranja u Srbiji. Procena i naplata štete iz saobraćajnih nezgoda. Dolazimo na vašu adresu. Bez troškova unapred — naplaćujemo tek nakon uspešne naplate.";

export const BASE_METADATA: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: defaultTitle,
    template: `%s | Lexoria`,
  },
  description: defaultDescription,
  keywords: [
    "agencija za naplatu štete",
    "agencija za naplatu štete od osiguranja",
    "agencija za naplatu štete Beograd",
    "agencija za naplatu štete Srbija",
    "naplata štete od osiguranja",
    "procena štete od osiguranja",
    "naknada štete saobraćajna nezgoda",
    "naplata štete saobraćajna nezgoda",
    "osiguravajuće društvo naplata",
    "šteta na vozilu",
    "kasko naplata",
    "evropski izveštaj",
    "Lexoria",
    "pravne usluge Srbija",
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
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
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
    title: "Lexoria - Agencija za naplatu štete od osiguranja",
    description:
      "Lexoria je agencija za naplatu štete od osiguranja u Srbiji. Specijalizovani smo za procenu i naplatu štete iz saobraćajnih nezgoda. Bez troškova unapred, dostupni 24/7.",
    alternates: { canonical: SITE_URL },
    openGraph: {
      title: "Agencija za naplatu štete od osiguranja — Lexoria | Beograd, Srbija",
      description:
        "Lexoria je agencija za naplatu štete od osiguranja u Srbiji. Specijalizovani smo za procenu i naplatu štete iz saobraćajnih nezgoda. Bez troškova unapred, dostupni 24/7.",
      url: SITE_URL,
      type: "website",
      locale: "sr_RS",
      siteName: SITE_CONTENT.title,
    },
  },
  kontakt: {
    title: "Kontakt",
    description:
      "Kontaktirajte Lexoria agenciju za naplatu štete od osiguranja. Pozovite nas, pošaljite email ili popunite kontakt formu. Odgovaramo u roku od 24h.",
    alternates: { canonical: `${SITE_URL}/kontakt` },
  },
  "steta-na-vozilu": {
    title: "Šteta na vozilu — naplata od osiguranja",
    description:
      "Naplatite štetu na vozilu od osiguranja uz pomoć Lexoria agencije. Besplatne konsultacije, dolazimo na vašu adresu, borimo se za maksimalnu naknadu.",
    alternates: { canonical: `${SITE_URL}/steta-na-vozilu` },
  },
  povrede: {
    title: "Naplata štete za telesne povrede",
    description:
      "Naplata štete za telesne povrede nastale u saobraćajnoj nezgodi. Zastupamo vas u celom postupku i borimo se za pravičnu naknadu.",
    alternates: { canonical: `${SITE_URL}/povrede` },
  },
  "ostale-stete": {
    title: "Ostale štete od osiguranja",
    description:
      "Naplata svih vrsta šteta od osiguravajućih društava — materijalne, nematerijalne i ostale štete iz saobraćajnih nezgoda.",
    alternates: { canonical: `${SITE_URL}/ostale-stete` },
  },
  "evropski-izvestaj": {
    title: "Evropski izveštaj o saobraćajnoj nezgodi",
    description:
      "Sve o evropskom izveštaju o saobraćajnoj nezgodi — kako ga popuniti, na šta obratiti pažnju i kako vam Lexoria može pomoći pri naplati štete.",
    alternates: { canonical: `${SITE_URL}/evropski-izvestaj` },
  },
  kasko: {
    title: "Naplata kasko štete od osiguranja",
    description:
      "Pomoć pri naplati kasko štete od osiguravajućeg društva. Saznajte svoja prava i maksimalno iskoristite kasko polisu uz podršku Lexoria agencije.",
    alternates: { canonical: `${SITE_URL}/kasko` },
  },
  "ostali-pravni-poslovi": {
    title: "Pravne usluge — ugovori, dozvole, postupci",
    description:
      "Pored naplate štete, pružamo pravne usluge: sastavljanje ugovora, pravne konsultacije, građevinske dozvole i upravni postupci.",
    alternates: { canonical: `${SITE_URL}/ostali-pravni-poslovi` },
  },
  "cesta-pitanja": {
    title: "Česta pitanja o naplati štete od osiguranja",
    description:
      "Odgovori na najčešća pitanja o naplati štete od osiguranja — kako funkcioniše postupak, koji su troškovi, rokovi i vaša zakonska prava.",
    alternates: { canonical: `${SITE_URL}/cesta-pitanja` },
  },
};
