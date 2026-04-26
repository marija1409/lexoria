export const VIEWPORT_BREAKPOINT_PX = 768;

export const SITE_URL = "https://lexoria.rs";

export const SITE_CONTENT = {
  title: "Lexoria",
  tagline: "Agencija za naplatu štete",
  description: "Agencija za procenu i naplatu štete i druge pravne poslove.",
  email: "info@lexoria.rs",
  phone: "+381 65 373 1935",
} as const;

export const HOME_SIMPLE_CARDS = [
  {
    icon: "Clock",
    title: "Dostupni 24/7",
    description: "Pozovite nas u bilo koje vreme.",
  },
  {
    icon: "MapPin",
    title: "Dolazimo na vašu adresu",
    description: "Naš tim izlazi na teren i preuzima sve na licu mesta.",
  },
  {
    icon: "TrendingUp",
    title: "Maksimalna naknada",
    description: "Borimo se za najviši iznos koji vam po zakonu pripada.",
  },
  {
    icon: "CircleDollarSign",
    title: "Bez troškova unapred",
    description: "Plaćate samo nakon uspešne naplate, bez rizika za vas.",
  },
] as const;

export const HOME_DOCUMENTS = {
  title: "Potrebna dokumenta",
  subtitle:
    "Da bismo Vas zastupali u postupku naplate štete iz osiguranja, potrebno je da pripremite sledeću dokumentaciju:",
  items: [
    { text: "Lična karta vlasnika oštećenog vozila" },
    { text: "Saobraćajna dozvola oštećenog vozila" },
    { text: "Vozačka dozvola vozača oštećenog vozila" },
    { text: "Polise obaveznog osiguranja za vozila koja su učestvovala u nezgodi" },
    {
      text: "Originalni primerak Evropskog izveštaja o saobraćajnoj nezgodi",
      note: "ukoliko isti postoji",
    },
    { text: "Službena beleška MUP-a", note: "ukoliko ista postoji" },
    {
      text: "Fotografije sa lica mesta saobraćajne nezgode",
      note: "ukoliko iste postoje",
    },
    {
      text: "Medicinska dokumentacija",
      note: "ukoliko ste pretrpeli povrede",
    },
  ],
} as const;

export const HOME_WHY_US = {
  title: "Zašto izabrati nas?",
  subtitle: "Iskustvo, transparentnost i rezultati koji govore sami za sebe.",
  items: [
    {
      icon: "Eye",
      title: "Potpuna transparentnost",
      description:
        "Jasno definisan ugovor, precizan obračun provizije i redovno informisanje o statusu predmeta — bez iznenađenja.",
    },
    {
      icon: "TrendingUp",
      title: "Maksimalna naknada",
      description:
        "U velikom broju slučajeva klijenti dobijaju značajno višu naknadu nego što je prvobitno ponuđeno jer se borimo za najviši iznos koji vam po zakonu pripada.",
    },
    {
      icon: "BadgeCheck",
      title: "Stručnost koja donosi rezultat",
      description:
        "Procenitelji procenjuju štetu po cenama originalnih delova, dok pravna služba podnose zahtev i štiti vaša prava do naplate.",
    },
    {
      icon: "Handshake",
      title: "Mi rešavamo sve",
      description:
        "Preuzimamo na sebe komunikaciju sa osiguranjem, prikupljanje dokumentacije, pregovaranje oko iznosa naknade, vi samo čekate isplatu.",
    },
  ],
} as const;

export const HOME_WHY_US_BADGES = [
  { icon: "Clock", label: "Dostupni 24/7" },
  { icon: "MapPin", label: "Dolazimo na vašu adresu" },
  { icon: "CircleDollarSign", label: "Bez troškova unapred" },
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
        "Javite nam se telefonom, emailom ili putem kontakt forme. Dolazimo na vašu adresu — besplatne konsultacije.",
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
export const WEB3FORMS_ACCESS_KEY = "d63a54ec-ffdf-4b30-905c-4b3f3ab0f069";
