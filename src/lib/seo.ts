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
    title: "Naplata štete na vozilu od osiguranja | Lexoria",
    description:
      "Doživeli ste saobraćajnu nezgodu? Lexoria naplaćuje štetu na vozilu od osiguranja — popravka, tegljenje, zamensko vozilo, umanjenje vrednosti, troškovi lečenja. Bez troškova unapred.",
    alternates: { canonical: `${SITE_URL}/steta-na-vozilu` },
  },
  povrede: {
    title: "Naplata štete za telesne povrede u saobraćajnoj nezgodi",
    description:
      "Naplata štete za telesne povrede — troškovi lečenja, izgubljena zarada, bol i patnja, trajna nesposobnost za rad. Zastupamo vas u celom postupku, bez troškova unapred.",
    alternates: { canonical: `${SITE_URL}/povrede` },
  },
  "ostale-stete": {
    title: "Naplata štete — neosigurano vozilo, palo drvo, rupa na putu",
    description:
      "Pomažemo u naplati štete od neosiguranih vozača (Garantni fond), palog drveta, rupe na putu i predmeta koji padnu sa drugog vozila. Situacije koje mnogi smatraju bezizlaznim.",
    alternates: { canonical: `${SITE_URL}/ostale-stete` },
  },
  "evropski-izvestaj": {
    title: "Evropski izveštaj o saobraćajnoj nezgodi — preuzmite PDF",
    description:
      "Sve o evropskom izveštaju — kada ga koristiti, kada ne, kako pravilno popuniti i posledice grešaka. Preuzmite PDF formular besplatno. Lexoria vam pomaže pri naplati štete.",
    alternates: { canonical: `${SITE_URL}/evropski-izvestaj` },
  },
  kasko: {
    title: "Naplata kasko štete od osiguravajućeg društva | Lexoria",
    description:
      "Naplata kasko štete po cenama originalnih delova. Objašnjavamo razliku između punog i delimičnog kaska, bonus-malus sistem i kada se isplati prijaviti štetu.",
    alternates: { canonical: `${SITE_URL}/kasko` },
  },
  "ostali-pravni-poslovi": {
    title: "Pravne usluge — ugovori, dozvole, upravni postupci | Lexoria",
    description:
      "Pravne usluge u Srbiji: sastavljanje ugovora, pravne konsultacije, građevinske i upotrebne dozvole, legalizacija objekata, upravni postupci i žalbe.",
    alternates: { canonical: `${SITE_URL}/ostali-pravni-poslovi` },
  },
  "cesta-pitanja": {
    title: "Česta pitanja o naplati štete od osiguranja | Lexoria",
    description:
      "Odgovori na pitanja o naplati štete: rokovi isplate (45/90 dana), policijski zapisnik, neosigurano vozilo, Garantni fond, palo drvo, rupa na putu, zastarelost potraživanja.",
    alternates: { canonical: `${SITE_URL}/cesta-pitanja` },
  },
};
