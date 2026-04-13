export const VIEWPORT_BREAKPOINT_PX = 768;

export const SITE_URL = "https://lexoria.rs";

export const SITE_CONTENT = {
  title: "Lexoria",
  tagline: "Agencija za naplatu štete",
  description: "Agencija za procenu i naplatu štete i druge pravne poslove.",
  email: "info@lexoria.rs",
  phone: "+381 65 373 1935",
} as const;

export const HOME_BENEFITS = [
  {
    title: "Dostupni 24/7",
    description: "Pozovite nas u bilo koje vreme",
  },
  {
    title: "Dolazimo na vašu adresu",
    description: "Naš tim izlazi na teren i preuzima sve na licu mesta.",
  },
  {
    title: "Maksimalna naknada",
    description: "Borimo se za najviši iznos koji vam po zakonu pripada.",
  },
  {
    title: "Bez troškova unapred",
    description: "Plaćate samo nakon uspešne naplate, bez rizika za vas.",
  },
] as const;

export const HOME_LEGAL_SECTION = {
  title: "Ostali pravni poslovi",
  description:
    "Pored naplate štete, pružamo i širok spektar pravnih usluga.",
  ctaLabel: "Saznajte vise o pravnim uslugama",
  ctaHref: "/ostali-pravni-poslovi",
} as const;

export const HOME_LEGAL_SERVICES = [
  "Sastavljanje svih vrsta ugovora",
  "Pravne konsultacije i saveti",
  "Građevinske i upotrebne dozvole i legalizacija objekata",
  "Upravni postupci i žalbe",
] as const;

export const HOME_HERO = {
  headline: "Naplata štete bez brige",
  subheadline:
    "Profesionalna procena i naplata štete od osiguranja.",
  phoneCta: "Pozovite nas odmah",
  emailCta: "Pošaljite email",
  trustBadge: "Bez troškova unapred",
} as const;

export const HOME_PROCESS = {
  title: "Kako funkcioniše?",
  subtitle: "Tri jednostavna koraka do vaše naknade",
  steps: [
    {
      number: "01",
      title: "Kontaktirajte nas",
      description:
        "Javite nam se telefonom, emailom ili putem kontakt forme. Dolazimo na vašu adresu — besplatna procena.",
    },
    {
      number: "02",
      title: "Preuzimamo vaš slučaj",
      description:
        "Naš tim prikuplja dokumentaciju, procenjuje štetu i podnosi zahtev osiguravajućem društvu.",
    },
    {
      number: "03",
      title: "Isplata na vaš račun",
      description:
        "Novac ide direktno na vaš račun. Naša provizija se naplaćuje tek nakon uspešne naplate.",
    },
  ],
} as const;

export const HOME_CTA_BANNER = {
  title: "Imali ste saobraćajnu nezgodu?",
  subtitle: "Pozovite nas za besplatan savet — dostupni smo 24/7.",
  phoneCta: "Pozovite odmah",
} as const;

export const FOOTER_CONTENT = {
  description:
    "Agencija za procenu i naplatu štete i druge pravne poslove.",
  workingHours: "Pon - Pet: 08:00 - 20:00 | Sub: 09:00 - 15:00",
  copyright: `© ${new Date().getFullYear()} Lexoria. Sva prava zadržana.`,
} as const;

export const CONTACT_PAGE = {
  title: "Kontaktirajte nas",
  subtitle:
    "Javite nam se putem telefona, emaila ili popunite kontakt formu ispod. Odgovaramo u roku od 24 sata.",
  formTitle: "Pošaljite nam poruku",
  formFields: {
    name: "Ime i prezime",
    email: "Email adresa",
    phone: "Broj telefona",
    message: "Vaša poruka",
    submit: "Pošaljite poruku",
    sending: "Šalje se...",
    successTitle: "Poruka poslata!",
    successMessage:
      "Hvala vam na poruci. Odgovorićemo vam u najkraćem mogućem roku.",
    errorMessage:
      "Došlo je do greške pri slanju poruke. Molimo pokušajte ponovo ili nas pozovite telefonom.",
  },
  infoCards: {
    phone: { label: "Telefon", sublabel: "Dostupni 24/7" },
    email: { label: "Email", sublabel: "Odgovaramo u roku od 24h" },
    whatsapp: { label: "WhatsApp", sublabel: "Pišite nam poruku" },
    viber: { label: "Viber", sublabel: "Pišite nam poruku" },
  },
} as const;

/**
 * Web3Forms access key for the contact form.
 * Get your free key at https://web3forms.com
 * Replace this with your actual key.
 */
export const WEB3FORMS_ACCESS_KEY = "YOUR_ACCESS_KEY_HERE";
