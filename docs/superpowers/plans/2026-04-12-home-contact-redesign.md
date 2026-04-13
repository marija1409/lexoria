# Lexoria Home Page & Contact Page Redesign

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign the Lexoria home page with trust-building sections inspired by autobiro.rs and naplata-stete.rs, and build a contact page with a free email contact form via Web3Forms.

**Architecture:** The site uses a dual-render architecture (separate desktop/mobile CSS visibility via media queries, but shared React components). We'll build new section components in `src/components/home/` with CSS Modules, update the shared `HomePageContent` to compose them, and create a new `ContactPageContent` with a Web3Forms-powered contact form. All content stays in `src/lib/constants.ts`.

**Tech Stack:** Next.js 16 (static export), React 19, CSS Modules, Tailwind CSS 4 (via globals), shadcn components where helpful, lucide-react icons, Web3Forms for contact form submission, DM Sans font.

---

## Design Direction

**Inspired by autobiro.rs + naplata-stete.rs:**
- Clean, professional layout with generous whitespace
- Bold hero with strong headline and prominent phone CTA
- Step-by-step "How It Works" process section (3 steps)
- Benefit cards emphasizing "no upfront cost" and trust
- Dark blue (#042f69) as primary brand color, light backgrounds, accent gradients on CTAs
- Proper footer with contact info, nav links, and social links
- Contact page with form + direct contact info cards

**Color System (already established):**
- Primary: `#042f69` (dark blue)
- Primary hover: `#053a7d`
- Accent: `#1e3a8a` (navy)
- Light accent: `#bae6fd` (light blue)
- Text: `#171717`
- Secondary text: `#525252`
- Border: `#e5e5e5`
- Background: `#ffffff`
- New - Hero gradient background: `#f0f7ff` (very light blue)
- New - Success green: `#16a34a` (for checkmarks/trust indicators)

---

## File Structure

### New Files
```
src/components/home/HeroSection.tsx          — Hero with headline, subtitle, phone CTA
src/components/home/HeroSection.module.css
src/components/home/ProcessSection.tsx       — "How it works" 3-step section
src/components/home/ProcessSection.module.css
src/components/home/CtaBanner.tsx            — Full-width CTA banner
src/components/home/CtaBanner.module.css
src/components/common/Footer/Footer.tsx      — Site footer with nav, contact, social
src/components/common/Footer/Footer.module.css
src/components/contact/ContactPageContent.tsx     — Contact page layout
src/components/contact/ContactPageContent.module.css
src/components/contact/ContactForm.tsx            — Web3Forms contact form
src/components/contact/ContactForm.module.css
```

### Modified Files
```
src/lib/constants.ts                         — Add process steps, CTA content, footer content, contact form content
src/components/home/HomePageContent.tsx       — Recompose with new sections
src/components/home/HomePageContent.module.css — Update page wrapper styles
src/app/(site)/kontakt/page.tsx              — Use ContactPageContent
src/app/(site)/layout.tsx                    — Add Footer to shell
src/components/desktop/DesktopShell/DesktopShell.tsx — Add Footer
src/components/mobile/MobileShell/MobileShell.tsx   — Add Footer
```

---

### Task 1: Update Content Constants

**Files:**
- Modify: `src/lib/constants.ts`

- [ ] **Step 1: Add new content constants**

Add process steps, CTA banner content, footer content, and contact page content to the existing constants file. Also **replace** the existing `HOME_BENEFITS` with an updated version that includes descriptions.

```typescript
// REPLACE the existing HOME_BENEFITS in src/lib/constants.ts with this:

export const HOME_BENEFITS = [
  {
    title: "Dostupni 24/7",
    description: "Pozovite nas u bilo koje vreme.",
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

// Add these AFTER the existing constants:

export const HOME_HERO = {
  headline: "Naplata štete bez brige",
  subheadline:
    "Profesionalna procena i naplata štete od osiguranja.",
  phoneCta: "Pozovite nas odmah",
  emailCta: "Pošaljite email",
  trustBadge: "Bez troškova unapred — plaćate samo ako uspemo",
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
    "Agencija za profesionalnu procenu i naplatu štete od osiguranja i pružanje drugih pravnih usluga.",
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
```

- [ ] **Step 2: Verify the file builds**

Run: `cd /Users/marija/lexoria && npm run build 2>&1 | tail -20`
Expected: Build succeeds (unused constants are fine in TypeScript)

- [ ] **Step 3: Commit**

```bash
git add src/lib/constants.ts
git commit -m "feat: add content constants for home redesign and contact page"
```

---

### Task 2: Create Hero Section

**Files:**
- Create: `src/components/home/HeroSection.tsx`
- Create: `src/components/home/HeroSection.module.css`

- [ ] **Step 1: Create HeroSection component**

```tsx
// src/components/home/HeroSection.tsx
import { HOME_HERO, SITE_CONTENT } from "@/lib/constants";
import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/common/Button";
import styles from "./HeroSection.module.css";

export function HeroSection() {
  const phoneHref = `tel:${SITE_CONTENT.phone.replace(/\s/g, "")}`;
  const emailHref = `mailto:${SITE_CONTENT.email}`;

  return (
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={styles.trustBadge}>
          <span className={styles.trustBadgeDot} />
          {HOME_HERO.trustBadge}
        </div>

        <h1 className={styles.headline}>{HOME_HERO.headline}</h1>
        <p className={styles.subheadline}>{HOME_HERO.subheadline}</p>

        <div className={styles.ctas}>
          <Button variant="primary" href={phoneHref}>
            <Phone size={18} strokeWidth={2} />
            {HOME_HERO.phoneCta}
          </Button>
          <Button variant="secondary" href={emailHref}>
            <Mail size={18} strokeWidth={2} />
            {HOME_HERO.emailCta}
          </Button>
        </div>

        <div className={styles.contactDirect}>
          <a href={phoneHref} className={styles.contactLink}>
            {SITE_CONTENT.phone}
          </a>
          <span className={styles.contactDivider}>|</span>
          <a href={emailHref} className={styles.contactLink}>
            {SITE_CONTENT.email}
          </a>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Create HeroSection styles**

```css
/* src/components/home/HeroSection.module.css */

.hero {
  background: linear-gradient(180deg, #f0f7ff 0%, #ffffff 100%);
  padding: 3rem 1.25rem 4rem;
}

@media (min-width: 769px) {
  .hero {
    padding: 5rem 2rem 6rem;
  }
}

.heroInner {
  max-width: 720px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.trustBadge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 100px;
  background: #e0f2fe;
  color: #042f69;
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 0.01em;
  margin-bottom: 2rem;
}

@media (min-width: 769px) {
  .trustBadge {
    font-size: 0.875rem;
    padding: 0.5rem 1.25rem;
    margin-bottom: 2.5rem;
  }
}

.trustBadgeDot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #16a34a;
  flex-shrink: 0;
}

.headline {
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -0.03em;
  color: #042f69;
  margin: 0;
}

@media (min-width: 769px) {
  .headline {
    font-size: 3.25rem;
  }
}

.subheadline {
  margin-top: 1.25rem;
  font-size: 1.0625rem;
  line-height: 1.6;
  color: #525252;
  max-width: 560px;
}

@media (min-width: 769px) {
  .subheadline {
    margin-top: 1.5rem;
    font-size: 1.1875rem;
  }
}

.ctas {
  margin-top: 2.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.875rem;
}

@media (min-width: 769px) {
  .ctas {
    margin-top: 3rem;
    gap: 1rem;
  }
}

.ctas a,
.ctas button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.contactDirect {
  margin-top: 2rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.9375rem;
  color: #525252;
}

@media (min-width: 769px) {
  .contactDirect {
    margin-top: 2.5rem;
  }
}

.contactLink {
  text-decoration: none;
  color: #042f69;
  font-weight: 500;
  transition: opacity 0.2s;
}

.contactLink:hover {
  opacity: 0.75;
}

.contactDivider {
  color: #d4d4d4;
  user-select: none;
}
```

- [ ] **Step 3: Verify it builds**

Run: `cd /Users/marija/lexoria && npm run build 2>&1 | tail -20`
Expected: Build succeeds

- [ ] **Step 4: Commit**

```bash
git add src/components/home/HeroSection.tsx src/components/home/HeroSection.module.css
git commit -m "feat: add HeroSection component with trust badge, headline, and CTAs"
```

---

### Task 3: Create Process Section ("How It Works")

**Files:**
- Create: `src/components/home/ProcessSection.tsx`
- Create: `src/components/home/ProcessSection.module.css`

- [ ] **Step 1: Create ProcessSection component**

```tsx
// src/components/home/ProcessSection.tsx
import { HOME_PROCESS } from "@/lib/constants";
import styles from "./ProcessSection.module.css";

export function ProcessSection() {
  return (
    <section className={styles.process}>
      <div className={styles.processInner}>
        <h2 className={styles.title}>{HOME_PROCESS.title}</h2>
        <p className={styles.subtitle}>{HOME_PROCESS.subtitle}</p>

        <div className={styles.steps}>
          {HOME_PROCESS.steps.map((step, index) => (
            <div key={step.number} className={styles.step}>
              <div className={styles.stepNumber}>{step.number}</div>
              {index < HOME_PROCESS.steps.length - 1 && (
                <div className={styles.stepConnector} />
              )}
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Create ProcessSection styles**

```css
/* src/components/home/ProcessSection.module.css */

.process {
  background: #ffffff;
  padding: 4rem 1.25rem;
}

@media (min-width: 769px) {
  .process {
    padding: 6rem 2rem;
  }
}

.processInner {
  max-width: 960px;
  margin: 0 auto;
  text-align: center;
}

.title {
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #042f69;
  margin: 0;
}

@media (min-width: 769px) {
  .title {
    font-size: 2.25rem;
  }
}

.subtitle {
  margin-top: 0.75rem;
  font-size: 1rem;
  color: #525252;
  line-height: 1.5;
}

@media (min-width: 769px) {
  .subtitle {
    font-size: 1.125rem;
  }
}

.steps {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  margin-top: 3rem;
}

@media (min-width: 769px) {
  .steps {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: 4rem;
  }
}

.step {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.stepNumber {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #042f69;
  color: #ffffff;
  font-size: 1.25rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-bottom: 1.25rem;
}

@media (min-width: 769px) {
  .stepNumber {
    width: 64px;
    height: 64px;
    font-size: 1.375rem;
    margin-bottom: 1.5rem;
  }
}

/* Connector line between steps (desktop only) */
.stepConnector {
  display: none;
}

@media (min-width: 769px) {
  .stepConnector {
    display: block;
    position: absolute;
    top: 32px;
    left: calc(50% + 40px);
    width: calc(100% - 80px);
    height: 2px;
    background: #e0f2fe;
    transform: translateX(20px);
  }
}

.stepTitle {
  font-size: 1.125rem;
  font-weight: 600;
  color: #171717;
  margin: 0;
}

@media (min-width: 769px) {
  .stepTitle {
    font-size: 1.25rem;
  }
}

.stepDescription {
  margin-top: 0.5rem;
  font-size: 0.9375rem;
  line-height: 1.6;
  color: #525252;
  max-width: 280px;
}

@media (min-width: 769px) {
  .stepDescription {
    font-size: 1rem;
  }
}
```

- [ ] **Step 3: Verify it builds**

Run: `cd /Users/marija/lexoria && npm run build 2>&1 | tail -20`

- [ ] **Step 4: Commit**

```bash
git add src/components/home/ProcessSection.tsx src/components/home/ProcessSection.module.css
git commit -m "feat: add ProcessSection with 3-step 'how it works' flow"
```

---

### Task 4: Create CTA Banner Section

**Files:**
- Create: `src/components/home/CtaBanner.tsx`
- Create: `src/components/home/CtaBanner.module.css`

- [ ] **Step 1: Create CtaBanner component**

```tsx
// src/components/home/CtaBanner.tsx
import { HOME_CTA_BANNER, SITE_CONTENT } from "@/lib/constants";
import { Phone } from "lucide-react";
import { Button } from "@/components/common/Button";
import styles from "./CtaBanner.module.css";

export function CtaBanner() {
  const phoneHref = `tel:${SITE_CONTENT.phone.replace(/\s/g, "")}`;

  return (
    <section className={styles.banner}>
      <div className={styles.bannerInner}>
        <h2 className={styles.title}>{HOME_CTA_BANNER.title}</h2>
        <p className={styles.subtitle}>{HOME_CTA_BANNER.subtitle}</p>
        <Button variant="primary" href={phoneHref}>
          <Phone size={18} strokeWidth={2} />
          {HOME_CTA_BANNER.phoneCta}
        </Button>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Create CtaBanner styles**

```css
/* src/components/home/CtaBanner.module.css */

.banner {
  background: #042f69;
  padding: 3.5rem 1.25rem;
}

@media (min-width: 769px) {
  .banner {
    padding: 5rem 2rem;
  }
}

.bannerInner {
  max-width: 640px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: -0.02em;
  margin: 0;
}

@media (min-width: 769px) {
  .title {
    font-size: 2rem;
  }
}

.subtitle {
  margin-top: 0.75rem;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
}

@media (min-width: 769px) {
  .subtitle {
    font-size: 1.125rem;
  }
}

/* Override the primary button style within the banner - white on dark blue */
.banner a,
.banner button {
  margin-top: 2rem;
  background: #ffffff;
  color: #042f69;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
}

.banner a:hover,
.banner button:hover {
  background: #f0f7ff;
}
```

- [ ] **Step 3: Verify it builds**

Run: `cd /Users/marija/lexoria && npm run build 2>&1 | tail -20`

- [ ] **Step 4: Commit**

```bash
git add src/components/home/CtaBanner.tsx src/components/home/CtaBanner.module.css
git commit -m "feat: add CTA banner section with phone call-to-action"
```

---

### Task 5: Create Footer Component

**Files:**
- Create: `src/components/common/Footer/Footer.tsx`
- Create: `src/components/common/Footer/Footer.module.css`

- [ ] **Step 1: Create Footer component**

```tsx
// src/components/common/Footer/Footer.tsx
import { SITE_CONTENT, FOOTER_CONTENT } from "@/lib/constants";
import { NAV_ITEMS } from "@/lib/nav";
import { getWhatsAppChatUrl, getViberChatUrl } from "@/lib/contact";
import { Phone, Mail } from "lucide-react";
import { Icon } from "@/components/icons/Icon";
import styles from "./Footer.module.css";

export function Footer() {
  const phoneHref = `tel:${SITE_CONTENT.phone.replace(/\s/g, "")}`;
  const emailHref = `mailto:${SITE_CONTENT.email}`;
  const whatsappHref = getWhatsAppChatUrl(SITE_CONTENT.phone);
  const viberHref = getViberChatUrl(SITE_CONTENT.phone);

  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.grid}>
          {/* Brand column */}
          <div className={styles.brand}>
            <img
              src="/icons/logo-lexoria.svg"
              alt={SITE_CONTENT.title}
              className={styles.logo}
            />
            <p className={styles.brandDescription}>
              {FOOTER_CONTENT.description}
            </p>
            <div className={styles.social}>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className={styles.socialLink}
              >
                <Icon name="whatsapp" size={20} />
              </a>
              <a
                href={viberHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Viber"
                className={styles.socialLink}
              >
                <Icon name="viber" size={20} />
              </a>
            </div>
          </div>

          {/* Navigation column */}
          <div className={styles.navColumn}>
            <h3 className={styles.columnTitle}>Stranice</h3>
            <ul className={styles.navList}>
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className={styles.navLink}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div className={styles.contactColumn}>
            <h3 className={styles.columnTitle}>Kontakt</h3>
            <ul className={styles.contactList}>
              <li>
                <a href={phoneHref} className={styles.contactItem}>
                  <Phone size={16} />
                  {SITE_CONTENT.phone}
                </a>
              </li>
              <li>
                <a href={emailHref} className={styles.contactItem}>
                  <Mail size={16} />
                  {SITE_CONTENT.email}
                </a>
              </li>
            </ul>
            <p className={styles.workingHours}>{FOOTER_CONTENT.workingHours}</p>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>{FOOTER_CONTENT.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Create Footer styles**

```css
/* src/components/common/Footer/Footer.module.css */

.footer {
  background: #0f172a;
  color: #e2e8f0;
  padding: 3.5rem 1.25rem 2rem;
}

@media (min-width: 769px) {
  .footer {
    padding: 5rem 2rem 2.5rem;
  }
}

.footerInner {
  max-width: 1080px;
  margin: 0 auto;
}

.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
}

@media (min-width: 769px) {
  .grid {
    grid-template-columns: 2fr 1fr 1fr;
    gap: 4rem;
  }
}

/* Brand column */
.logo {
  width: 8rem;
  height: auto;
  filter: brightness(0) invert(1);
}

.brandDescription {
  margin-top: 1rem;
  font-size: 0.9375rem;
  line-height: 1.6;
  color: #94a3b8;
  max-width: 320px;
}

.social {
  margin-top: 1.25rem;
  display: flex;
  gap: 0.75rem;
}

.socialLink {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  transition: background 0.2s;
}

.socialLink:hover {
  background: rgba(255, 255, 255, 0.2);
}

.socialLink img {
  filter: brightness(0) invert(1);
}

/* Navigation column */
.columnTitle {
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #f8fafc;
  margin: 0 0 1rem;
}

.navList {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
}

.navLink {
  font-size: 0.9375rem;
  color: #94a3b8;
  text-decoration: none;
  transition: color 0.2s;
}

.navLink:hover {
  color: #ffffff;
}

/* Contact column */
.contactList {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.contactItem {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9375rem;
  color: #94a3b8;
  text-decoration: none;
  transition: color 0.2s;
}

.contactItem:hover {
  color: #ffffff;
}

.contactItem svg {
  flex-shrink: 0;
  color: #64748b;
}

.workingHours {
  margin-top: 1.25rem;
  font-size: 0.8125rem;
  color: #64748b;
  line-height: 1.5;
}

/* Bottom bar */
.bottom {
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.copyright {
  font-size: 0.8125rem;
  color: #64748b;
  text-align: center;
}
```

- [ ] **Step 3: Verify it builds**

Run: `cd /Users/marija/lexoria && npm run build 2>&1 | tail -20`

- [ ] **Step 4: Commit**

```bash
git add src/components/common/Footer/Footer.tsx src/components/common/Footer/Footer.module.css
git commit -m "feat: add Footer component with nav links, contact info, and social"
```

---

### Task 6: Recompose Home Page

**Files:**
- Modify: `src/components/home/HomePageContent.tsx`
- Modify: `src/components/home/HomePageContent.module.css`

- [ ] **Step 1: Rewrite HomePageContent to compose new sections**

Replace the entire content of `src/components/home/HomePageContent.tsx`:

```tsx
// src/components/home/HomePageContent.tsx
import { HeroSection } from "./HeroSection";
import { BenefitsSection } from "./BenefitsSection";
import { ProcessSection } from "./ProcessSection";
import { LegalSection } from "./LegalSection";
import { CtaBanner } from "./CtaBanner";
import styles from "./HomePageContent.module.css";

export function HomePageContent() {
  return (
    <div className={styles.page}>
      <HeroSection />
      <BenefitsSection />
      <ProcessSection />
      <LegalSection />
      <CtaBanner />
    </div>
  );
}
```

- [ ] **Step 2: Create BenefitsSection as a separate component**

The benefits cards are redesigned as modern **vertical cards** — white background, centered icon in a soft circle, title + description, subtle border with hover effect. This replaces the old two-tone horizontal split layout.

Create `src/components/home/BenefitsSection.tsx`:

```tsx
// src/components/home/BenefitsSection.tsx
import { HOME_BENEFITS } from "@/lib/constants";
import { Clock, Car, Sparkles, ShieldCheck } from "lucide-react";
import styles from "./BenefitsSection.module.css";

const BENEFIT_ICONS = [Clock, Car, Sparkles, ShieldCheck] as const;

export function BenefitsSection() {
  return (
    <section className={styles.benefits}>
      <div className={styles.benefitsGrid}>
        {HOME_BENEFITS.map((item, index) => {
          const Icon = BENEFIT_ICONS[index];
          return (
            <div key={item.title} className={styles.card}>
              <div className={styles.iconWrap}>
                <Icon size={28} strokeWidth={1.6} />
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDescription}>{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Create BenefitsSection.module.css**

Create `src/components/home/BenefitsSection.module.css` with the modern vertical card design:

```css
/* src/components/home/BenefitsSection.module.css */

.benefits {
  padding: 4rem 1.25rem;
  background: #f8fafc;
}

@media (min-width: 769px) {
  .benefits {
    padding: 5.5rem 2rem;
  }
}

.benefitsGrid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  max-width: 960px;
  margin: 0 auto;
}

@media (min-width: 769px) {
  .benefitsGrid {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
  }
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1.75rem 1rem;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 1rem;
  transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;
}

.card:hover {
  border-color: #bae6fd;
  box-shadow: 0 4px 16px rgba(4, 47, 105, 0.08);
  transform: translateY(-2px);
}

@media (min-width: 769px) {
  .card {
    padding: 2rem 1.25rem;
  }
}

.iconWrap {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: linear-gradient(135deg, #e0f2fe 0%, #f0f7ff 100%);
  color: #042f69;
  margin-bottom: 1rem;
}

@media (min-width: 769px) {
  .iconWrap {
    width: 60px;
    height: 60px;
    margin-bottom: 1.25rem;
  }
}

.cardTitle {
  font-size: 0.9375rem;
  font-weight: 600;
  color: #171717;
  margin: 0;
  line-height: 1.3;
}

@media (min-width: 769px) {
  .cardTitle {
    font-size: 1rem;
  }
}

.cardDescription {
  margin-top: 0.5rem;
  font-size: 0.8125rem;
  line-height: 1.5;
  color: #64748b;
}

@media (min-width: 769px) {
  .cardDescription {
    font-size: 0.875rem;
  }
}
```

- [ ] **Step 4: Create LegalSection as a separate component**

Extract the legal section into `src/components/home/LegalSection.tsx`:

```tsx
// src/components/home/LegalSection.tsx
import { HOME_LEGAL_SECTION, HOME_LEGAL_SERVICES } from "@/lib/constants";
import styles from "./LegalSection.module.css";

export function LegalSection() {
  return (
    <section className={styles.legal}>
      <div className={styles.legalInner}>
        <h2 className={styles.legalTitle}>{HOME_LEGAL_SECTION.title}</h2>
        <p className={styles.legalDescription}>
          {HOME_LEGAL_SECTION.description}
        </p>
        <div className={styles.legalGrid}>
          {HOME_LEGAL_SERVICES.map((title) => (
            <div key={title} className={styles.legalCard}>
              {title}
            </div>
          ))}
        </div>
        <div className={styles.legalCtaWrap}>
          <a href={HOME_LEGAL_SECTION.ctaHref} className={styles.legalCta}>
            {HOME_LEGAL_SECTION.ctaLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 5: Create LegalSection.module.css**

Move legal CSS from `HomePageContent.module.css` into `src/components/home/LegalSection.module.css`:

```css
/* src/components/home/LegalSection.module.css */

.legal {
  background: #f8fafc;
  padding: 4rem 1.25rem;
}

@media (min-width: 769px) {
  .legal {
    padding: 6rem 2rem;
  }
}

.legalInner {
  max-width: 56rem;
  margin: 0 auto;
}

.legalTitle {
  text-align: center;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #042f69;
  margin: 0;
}

@media (min-width: 769px) {
  .legalTitle {
    font-size: 2.25rem;
  }
}

.legalDescription {
  text-align: center;
  font-size: 1rem;
  line-height: 1.6;
  color: #525252;
  margin-top: 0.75rem;
  max-width: 36rem;
  margin-left: auto;
  margin-right: auto;
}

@media (min-width: 769px) {
  .legalDescription {
    font-size: 1.125rem;
  }
}

.legalGrid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-top: 3rem;
}

@media (min-width: 769px) {
  .legalGrid {
    grid-template-columns: 1fr 1fr;
    gap: 1.25rem;
  }
}

.legalCard {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 0.75rem;
  padding: 1.25rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  color: #171717;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
  transition: border-color 0.2s, box-shadow 0.2s;
}

.legalCard:hover {
  border-color: #bae6fd;
  box-shadow: 0 2px 8px rgba(4, 47, 105, 0.08);
}

@media (min-width: 769px) {
  .legalCard {
    font-size: 1.0625rem;
  }
}

.legalCtaWrap {
  display: flex;
  justify-content: center;
  margin-top: 3rem;
}

.legalCta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 3rem;
  padding: 1rem 2rem;
  font-size: 1.0625rem;
  font-weight: 600;
  font-family: inherit;
  color: #fff;
  background: #042f69;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.2s;
}

.legalCta:hover {
  background: #053a7d;
}

@media (min-width: 769px) {
  .legalCta {
    font-size: 1.125rem;
    padding: 1rem 2.5rem;
  }
}
```

- [ ] **Step 6: Simplify HomePageContent.module.css**

Replace the entire content of `src/components/home/HomePageContent.module.css` (now only needs the page wrapper since sections have their own styles):

```css
/* src/components/home/HomePageContent.module.css */

.page {
  min-height: 100vh;
  background: #fff;
  color: #171717;
}
```

- [ ] **Step 7: Verify it builds and renders**

Run: `cd /Users/marija/lexoria && npm run build 2>&1 | tail -20`
Expected: Build succeeds with no errors

- [ ] **Step 8: Commit**

```bash
git add src/components/home/
git commit -m "feat: recompose home page with hero, benefits, process, legal, and CTA sections"
```

---

### Task 7: Add Footer to Shell Layouts

**Files:**
- Modify: `src/components/desktop/DesktopShell/DesktopShell.tsx`
- Modify: `src/components/mobile/MobileShell/MobileShell.tsx`

- [ ] **Step 1: Read current shell files to see exact structure**

Read both shell files before modifying.

- [ ] **Step 2: Add Footer import and render in DesktopShell**

Add the Footer component after the `<main>` content area in `DesktopShell.tsx`:

```tsx
import { Footer } from "@/components/common/Footer/Footer";
```

Then add `<Footer />` after the closing `</main>` tag (but still inside the outer wrapper div).

- [ ] **Step 3: Add Footer import and render in MobileShell**

Same pattern — import Footer and add `<Footer />` after `</main>` in `MobileShell.tsx`.

- [ ] **Step 4: Verify it builds**

Run: `cd /Users/marija/lexoria && npm run build 2>&1 | tail -20`

- [ ] **Step 5: Commit**

```bash
git add src/components/desktop/DesktopShell/DesktopShell.tsx src/components/mobile/MobileShell/MobileShell.tsx
git commit -m "feat: add Footer to desktop and mobile shell layouts"
```

---

### Task 8: Create Contact Form Component (Web3Forms)

**Files:**
- Create: `src/components/contact/ContactForm.tsx`
- Create: `src/components/contact/ContactForm.module.css`

**Important context:** Web3Forms works with static sites. You sign up at https://web3forms.com to get a free access key (250 submissions/month). The form sends a POST request to `https://api.web3forms.com/submit`. For now we'll use a placeholder access key that the site owner replaces with their real one.

- [ ] **Step 1: Add Web3Forms access key to constants**

Add to `src/lib/constants.ts`:

```typescript
/**
 * Web3Forms access key for the contact form.
 * Get your free key at https://web3forms.com
 * Replace this with your actual key.
 */
export const WEB3FORMS_ACCESS_KEY = "YOUR_ACCESS_KEY_HERE";
```

- [ ] **Step 2: Create ContactForm component**

```tsx
// src/components/contact/ContactForm.tsx
"use client";

import { useState, type FormEvent } from "react";
import { CONTACT_PAGE, WEB3FORMS_ACCESS_KEY } from "@/lib/constants";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import styles from "./ContactForm.module.css";

type FormStatus = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const fields = CONTACT_PAGE.formFields;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "Nova poruka sa Lexoria.rs sajta");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className={styles.successState}>
        <CheckCircle size={48} strokeWidth={1.5} />
        <h3 className={styles.successTitle}>{fields.successTitle}</h3>
        <p className={styles.successMessage}>{fields.successMessage}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2 className={styles.formTitle}>{CONTACT_PAGE.formTitle}</h2>

      <div className={styles.fieldGroup}>
        <label htmlFor="contact-name" className={styles.label}>
          {fields.name}
        </label>
        <input
          id="contact-name"
          type="text"
          name="name"
          required
          className={styles.input}
          placeholder={fields.name}
        />
      </div>

      <div className={styles.row}>
        <div className={styles.fieldGroup}>
          <label htmlFor="contact-email" className={styles.label}>
            {fields.email}
          </label>
          <input
            id="contact-email"
            type="email"
            name="email"
            required
            className={styles.input}
            placeholder={fields.email}
          />
        </div>

        <div className={styles.fieldGroup}>
          <label htmlFor="contact-phone" className={styles.label}>
            {fields.phone}
          </label>
          <input
            id="contact-phone"
            type="tel"
            name="phone"
            className={styles.input}
            placeholder={fields.phone}
          />
        </div>
      </div>

      <div className={styles.fieldGroup}>
        <label htmlFor="contact-message" className={styles.label}>
          {fields.message}
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          className={styles.textarea}
          placeholder={fields.message}
        />
      </div>

      {status === "error" && (
        <div className={styles.errorMessage}>
          <AlertCircle size={16} />
          {fields.errorMessage}
        </div>
      )}

      {/* Web3Forms honeypot for spam protection */}
      <input
        type="checkbox"
        name="botcheck"
        className={styles.honeypot}
        tabIndex={-1}
        autoComplete="off"
      />

      <button
        type="submit"
        disabled={status === "sending"}
        className={styles.submitButton}
      >
        {status === "sending" ? (
          fields.sending
        ) : (
          <>
            <Send size={16} strokeWidth={2} />
            {fields.submit}
          </>
        )}
      </button>
    </form>
  );
}
```

- [ ] **Step 3: Create ContactForm styles**

```css
/* src/components/contact/ContactForm.module.css */

.form {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 1rem;
  padding: 2rem 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
}

@media (min-width: 769px) {
  .form {
    padding: 2.5rem;
  }
}

.formTitle {
  font-size: 1.25rem;
  font-weight: 700;
  color: #042f69;
  margin: 0 0 1.75rem;
}

@media (min-width: 769px) {
  .formTitle {
    font-size: 1.5rem;
  }
}

.fieldGroup {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  flex: 1;
}

.fieldGroup + .fieldGroup {
  margin-top: 1.25rem;
}

.row {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
  margin-top: 1.25rem;
}

@media (min-width: 769px) {
  .row {
    grid-template-columns: 1fr 1fr;
  }

  .row .fieldGroup + .fieldGroup {
    margin-top: 0;
  }
}

.label {
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
}

.input,
.textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  font-family: inherit;
  color: #171717;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.input:focus,
.textarea:focus {
  border-color: #042f69;
  box-shadow: 0 0 0 3px rgba(4, 47, 105, 0.1);
}

.input::placeholder,
.textarea::placeholder {
  color: #94a3b8;
}

.textarea {
  resize: vertical;
  min-height: 120px;
}

.honeypot {
  position: absolute;
  opacity: 0;
  pointer-events: none;
  width: 0;
  height: 0;
}

.submitButton {
  margin-top: 1.75rem;
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  min-height: 3rem;
  padding: 0.875rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  font-family: inherit;
  color: #ffffff;
  background: #042f69;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background 0.2s;
}

.submitButton:hover:not(:disabled) {
  background: #053a7d;
}

.submitButton:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

@media (min-width: 769px) {
  .submitButton {
    width: auto;
  }
}

.errorMessage {
  margin-top: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  background: #fef2f2;
  border: 1px solid #fecaca;
  color: #dc2626;
  font-size: 0.875rem;
}

/* Success state */
.successState {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 3rem 2rem;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 1rem;
}

.successState svg {
  color: #16a34a;
  margin-bottom: 1rem;
}

.successTitle {
  font-size: 1.25rem;
  font-weight: 700;
  color: #042f69;
  margin: 0;
}

.successMessage {
  margin-top: 0.5rem;
  font-size: 1rem;
  color: #525252;
  line-height: 1.5;
  max-width: 400px;
}
```

- [ ] **Step 4: Verify it builds**

Run: `cd /Users/marija/lexoria && npm run build 2>&1 | tail -20`

- [ ] **Step 5: Commit**

```bash
git add src/components/contact/ContactForm.tsx src/components/contact/ContactForm.module.css src/lib/constants.ts
git commit -m "feat: add ContactForm component with Web3Forms integration"
```

---

### Task 9: Create Contact Page Content

**Files:**
- Create: `src/components/contact/ContactPageContent.tsx`
- Create: `src/components/contact/ContactPageContent.module.css`
- Modify: `src/app/(site)/kontakt/page.tsx`

- [ ] **Step 1: Create ContactPageContent component**

```tsx
// src/components/contact/ContactPageContent.tsx
import { SITE_CONTENT, CONTACT_PAGE } from "@/lib/constants";
import { getWhatsAppChatUrl, getViberChatUrl } from "@/lib/contact";
import { Phone, Mail } from "lucide-react";
import { Icon } from "@/components/icons/Icon";
import { ContactForm } from "./ContactForm";
import styles from "./ContactPageContent.module.css";

const CONTACT_CARDS = [
  {
    key: "phone" as const,
    icon: <Phone size={24} strokeWidth={1.8} />,
    getHref: () => `tel:${SITE_CONTENT.phone.replace(/\s/g, "")}`,
    getValue: () => SITE_CONTENT.phone,
  },
  {
    key: "email" as const,
    icon: <Mail size={24} strokeWidth={1.8} />,
    getHref: () => `mailto:${SITE_CONTENT.email}`,
    getValue: () => SITE_CONTENT.email,
  },
  {
    key: "whatsapp" as const,
    icon: <Icon name="whatsapp" size={24} />,
    getHref: () => getWhatsAppChatUrl(SITE_CONTENT.phone),
    getValue: () => SITE_CONTENT.phone,
    external: true,
  },
  {
    key: "viber" as const,
    icon: <Icon name="viber" size={24} />,
    getHref: () => getViberChatUrl(SITE_CONTENT.phone),
    getValue: () => SITE_CONTENT.phone,
    external: true,
  },
];

export function ContactPageContent() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>{CONTACT_PAGE.title}</h1>
        <p className={styles.subtitle}>{CONTACT_PAGE.subtitle}</p>
      </div>

      <div className={styles.cardsGrid}>
        {CONTACT_CARDS.map((card) => {
          const info = CONTACT_PAGE.infoCards[card.key];
          return (
            <a
              key={card.key}
              href={card.getHref()}
              className={styles.card}
              {...(card.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              <div className={styles.cardIcon}>{card.icon}</div>
              <div className={styles.cardContent}>
                <div className={styles.cardLabel}>{info.label}</div>
                <div className={styles.cardValue}>{card.getValue()}</div>
                <div className={styles.cardSublabel}>{info.sublabel}</div>
              </div>
            </a>
          );
        })}
      </div>

      <div className={styles.formSection}>
        <ContactForm />
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Create ContactPageContent styles**

```css
/* src/components/contact/ContactPageContent.module.css */

.page {
  padding: 2rem 1.25rem 4rem;
  max-width: 800px;
  margin: 0 auto;
}

@media (min-width: 769px) {
  .page {
    padding: 3.5rem 2rem 6rem;
  }
}

.header {
  text-align: center;
  margin-bottom: 3rem;
}

.title {
  font-size: 1.75rem;
  font-weight: 700;
  color: #042f69;
  letter-spacing: -0.02em;
  margin: 0;
}

@media (min-width: 769px) {
  .title {
    font-size: 2.5rem;
  }
}

.subtitle {
  margin-top: 0.75rem;
  font-size: 1rem;
  line-height: 1.6;
  color: #525252;
  max-width: 520px;
  margin-left: auto;
  margin-right: auto;
}

@media (min-width: 769px) {
  .subtitle {
    font-size: 1.125rem;
  }
}

/* Contact info cards */
.cardsGrid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-bottom: 3rem;
}

@media (min-width: 769px) {
  .cardsGrid {
    grid-template-columns: 1fr 1fr;
    gap: 1.25rem;
  }
}

.card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 0.75rem;
  text-decoration: none;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.card:hover {
  border-color: #bae6fd;
  box-shadow: 0 2px 8px rgba(4, 47, 105, 0.08);
}

.cardIcon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 0.75rem;
  background: #f0f7ff;
  color: #042f69;
  flex-shrink: 0;
}

.cardContent {
  display: flex;
  flex-direction: column;
}

.cardLabel {
  font-size: 0.875rem;
  font-weight: 600;
  color: #042f69;
}

.cardValue {
  font-size: 0.9375rem;
  font-weight: 500;
  color: #171717;
  margin-top: 0.125rem;
}

.cardSublabel {
  font-size: 0.8125rem;
  color: #94a3b8;
  margin-top: 0.125rem;
}

/* Form section */
.formSection {
  max-width: 640px;
  margin: 0 auto;
}
```

- [ ] **Step 3: Update the kontakt page to use ContactPageContent**

Replace `src/app/(site)/kontakt/page.tsx`:

```tsx
// src/app/(site)/kontakt/page.tsx
import { ContactPageContent } from "@/components/contact/ContactPageContent";

export default function Kontakt() {
  return <ContactPageContent />;
}
```

- [ ] **Step 4: Verify it builds**

Run: `cd /Users/marija/lexoria && npm run build 2>&1 | tail -20`
Expected: Build succeeds. Note: the contact form will show a "use client" boundary warning — that's expected and correct for form interactivity in a static export.

- [ ] **Step 5: Commit**

```bash
git add src/components/contact/ src/app/(site)/kontakt/page.tsx
git commit -m "feat: add contact page with info cards and Web3Forms contact form"
```

---

### Task 10: Visual Polish and Final Integration

**Files:**
- Modify: `src/app/globals.css` — Remove dark mode (the site is light-themed)
- Modify: `src/app/(site)/page.tsx` — Simplify (shared content component handles both)

- [ ] **Step 1: Clean up globals.css**

The site is a light-themed business site. Remove the dark mode media query and simplify:

Replace `src/app/globals.css` with:

```css
:root {
  --background: #ffffff;
  --foreground: #171717;
}

html,
body {
  max-width: 100vw;
  overflow-x: hidden;
}

body {
  color: var(--foreground);
  background: var(--background);
  font-family: var(--font-dm-sans), sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

a {
  color: inherit;
  text-decoration: none;
}
```

- [ ] **Step 2: Verify full site builds successfully**

Run: `cd /Users/marija/lexoria && npm run build 2>&1 | tail -30`
Expected: Build succeeds for all pages

- [ ] **Step 3: Run dev server and visually verify**

Run: `cd /Users/marija/lexoria && npm run dev`

Check in browser:
- `http://localhost:3000` — Home page has: hero with headline + trust badge + CTAs, benefit cards, 3-step process, legal services section, CTA banner, footer
- `http://localhost:3000/kontakt` — Contact page has: header, 4 contact info cards, contact form
- Resize to mobile width (<768px) — all sections stack properly
- Footer appears on all pages

- [ ] **Step 4: Commit**

```bash
git add src/app/globals.css
git commit -m "chore: remove dark mode, clean up global styles for light business theme"
```

---

## Post-Implementation Notes

### Web3Forms Setup
After implementing, the site owner needs to:
1. Go to https://web3forms.com
2. Enter the email address where you want to receive messages (e.g., info@lexoria.rs)
3. Copy the access key from the confirmation email
4. Replace `YOUR_ACCESS_KEY_HERE` in `src/lib/constants.ts` with the real key

### Future Enhancements (not in this plan)
- Scroll animations (fade-in on scroll) using Intersection Observer
- Testimonials / real case results section (like naplata-stete.rs)
- FAQ accordion on home page
- Individual service pages content
- SEO meta tags per page
- Google Maps embed on contact page
