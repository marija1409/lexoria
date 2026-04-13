# Home Page Animations Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add Framer Motion scroll-triggered animations to all five home page sections for a dynamic, engaging feel.

**Architecture:** Install Framer Motion, convert each section component to a client component with `motion` wrappers. Each section animates into view on scroll using `whileInView`. Hero animates on page load. All existing CSS Module styling remains untouched — animations are additive via Framer Motion props.

**Tech Stack:** Framer Motion, React 19, Next.js 16 (App Router, static export), CSS Modules

---

### Task 1: Install Framer Motion

**Files:**
- Modify: `package.json`

- [ ] **Step 1: Install framer-motion**

```bash
npm install framer-motion
```

- [ ] **Step 2: Verify installation**

```bash
npm ls framer-motion
```

Expected: `framer-motion@<version>` listed

- [ ] **Step 3: Verify dev server starts**

```bash
npm run dev
```

Expected: No errors, site loads normally

- [ ] **Step 4: Commit**

```bash
git add package.json package-lock.json
git commit -m "feat: install framer-motion for home page animations"
```

---

### Task 2: Animate HeroSection (fade-in on load with stagger)

**Files:**
- Modify: `src/components/home/HeroSection.tsx`

The hero is above the fold so it animates on page load (not scroll-triggered). Use staggered children: trust badge first, then headline, subheadline, CTAs, and contact links fade-in + slide-up with 0.15s delay between each.

- [ ] **Step 1: Convert to client component and add motion wrappers**

Replace the full content of `src/components/home/HeroSection.tsx` with:

```tsx
"use client";

import { HOME_HERO, SITE_CONTENT } from "@/lib/constants";
import { Phone, Mail, ShieldCheck } from "lucide-react";
import { Button } from "@/components/common/Button";
import { motion } from "framer-motion";
import styles from "./HeroSection.module.css";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function HeroSection() {
  const phoneHref = `tel:${SITE_CONTENT.phone.replace(/\s/g, "")}`;
  const emailHref = `mailto:${SITE_CONTENT.email}`;

  return (
    <section className={styles.hero}>
      <motion.div
        className={styles.heroInner}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className={styles.trustBadge} variants={itemVariants}>
          <ShieldCheck size={16} strokeWidth={2} />
          {HOME_HERO.trustBadge}
        </motion.div>

        <motion.h1 className={styles.headline} variants={itemVariants}>
          {HOME_HERO.headline}
        </motion.h1>
        <motion.p className={styles.subheadline} variants={itemVariants}>
          {HOME_HERO.subheadline}
        </motion.p>

        <motion.div className={styles.ctas} variants={itemVariants}>
          <Button variant="primary" href={phoneHref}>
            <Phone size={18} strokeWidth={2} />
            {HOME_HERO.phoneCta}
          </Button>
          <Button variant="secondary" href={emailHref}>
            <Mail size={18} strokeWidth={2} />
            {HOME_HERO.emailCta}
          </Button>
        </motion.div>

        <motion.div className={styles.contactDirect} variants={itemVariants}>
          <a href={phoneHref} className={styles.contactLink}>
            {SITE_CONTENT.phone}
          </a>
          <span className={styles.contactDivider}>|</span>
          <a href={emailHref} className={styles.contactLink}>
            {SITE_CONTENT.email}
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
```

- [ ] **Step 2: Verify in browser**

Open `http://localhost:3000`. The hero should animate in with a staggered cascade: trust badge, headline, subheadline, CTAs, then contact info — each fading up with ~0.15s delay between them.

- [ ] **Step 3: Commit**

```bash
git add src/components/home/HeroSection.tsx
git commit -m "feat: add staggered fade-in animation to HeroSection"
```

---

### Task 3: Animate BenefitsSection (staggered card reveal on scroll)

**Files:**
- Modify: `src/components/home/BenefitsSection.tsx`

Cards stagger in from below when the section scrolls into view. Use `whileInView` with `once: true` so animations only play once.

- [ ] **Step 1: Convert to client component and add motion wrappers**

Replace the full content of `src/components/home/BenefitsSection.tsx` with:

```tsx
"use client";

import { HOME_BENEFITS } from "@/lib/constants";
import { Clock, Car, TrendingUp, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import styles from "./BenefitsSection.module.css";

const BENEFIT_ICONS = [Clock, Car, TrendingUp, ShieldCheck] as const;

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function BenefitsSection() {
  return (
    <section className={styles.benefits}>
      <motion.div
        className={styles.benefitsGrid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {HOME_BENEFITS.map((item, index) => {
          const Icon = BENEFIT_ICONS[index];
          return (
            <motion.div
              key={item.title}
              className={styles.card}
              variants={cardVariants}
            >
              <div className={styles.iconWrap}>
                <Icon size={28} strokeWidth={1.6} />
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDescription}>{item.description}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
```

- [ ] **Step 2: Verify in browser**

Scroll down to the benefits section. Cards should stagger in from below with ~0.12s delay between each. Animation plays once.

- [ ] **Step 3: Commit**

```bash
git add src/components/home/BenefitsSection.tsx
git commit -m "feat: add staggered scroll-reveal animation to BenefitsSection"
```

---

### Task 4: Animate ProcessSection (staggered left-to-right reveal on scroll)

**Files:**
- Modify: `src/components/home/ProcessSection.tsx`

Title and subtitle fade up first, then steps stagger in left-to-right with a fade-up + slight scale effect.

- [ ] **Step 1: Convert to client component and add motion wrappers**

Replace the full content of `src/components/home/ProcessSection.tsx` with:

```tsx
"use client";

import { HOME_PROCESS } from "@/lib/constants";
import { motion } from "framer-motion";
import styles from "./ProcessSection.module.css";

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const stepsContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function ProcessSection() {
  return (
    <section className={styles.process}>
      <motion.div
        className={styles.processInner}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2 className={styles.title} variants={headerVariants}>
          {HOME_PROCESS.title}
        </motion.h2>
        <motion.p className={styles.subtitle} variants={headerVariants}>
          {HOME_PROCESS.subtitle}
        </motion.p>

        <motion.div className={styles.steps} variants={stepsContainerVariants}>
          {HOME_PROCESS.steps.map((step, index) => (
            <motion.div
              key={step.number}
              className={styles.step}
              variants={stepVariants}
            >
              <div className={styles.stepNumber}>{step.number}</div>
              {index < HOME_PROCESS.steps.length - 1 && (
                <div className={styles.stepConnector} />
              )}
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
```

- [ ] **Step 2: Verify in browser**

Scroll to the process section. Title and subtitle fade up, then the three steps stagger in left-to-right with a subtle scale-up. Animation plays once.

- [ ] **Step 3: Commit**

```bash
git add src/components/home/ProcessSection.tsx
git commit -m "feat: add staggered scroll-reveal animation to ProcessSection"
```

---

### Task 5: Animate LegalSection (cards fly in from sides)

**Files:**
- Modify: `src/components/home/LegalSection.tsx`

Title and description fade up. Cards fly in from alternating sides — odd cards from left, even cards from right. The CTA button fades up last.

- [ ] **Step 1: Convert to client component and add motion wrappers**

Replace the full content of `src/components/home/LegalSection.tsx` with:

```tsx
"use client";

import { HOME_LEGAL_SECTION, HOME_LEGAL_SERVICES } from "@/lib/constants";
import { motion } from "framer-motion";
import styles from "./LegalSection.module.css";

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardFromLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const cardFromRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function LegalSection() {
  return (
    <section className={styles.legal}>
      <motion.div
        className={styles.legalInner}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2 className={styles.legalTitle} variants={headerVariants}>
          {HOME_LEGAL_SECTION.title}
        </motion.h2>
        <motion.p
          className={styles.legalDescription}
          variants={headerVariants}
        >
          {HOME_LEGAL_SECTION.description}
        </motion.p>

        <motion.div className={styles.legalGrid} variants={containerVariants}>
          {HOME_LEGAL_SERVICES.map((title, index) => (
            <motion.div
              key={title}
              className={styles.legalCard}
              variants={index % 2 === 0 ? cardFromLeft : cardFromRight}
            >
              {title}
            </motion.div>
          ))}
        </motion.div>

        <motion.div className={styles.legalCtaWrap} variants={headerVariants}>
          <a href={HOME_LEGAL_SECTION.ctaHref} className={styles.legalCta}>
            {HOME_LEGAL_SECTION.ctaLabel}
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
```

- [ ] **Step 2: Verify in browser**

Scroll to legal section. Title and description fade up, then cards fly in alternating left/right with stagger. CTA fades up last. Animation plays once.

- [ ] **Step 3: Commit**

```bash
git add src/components/home/LegalSection.tsx
git commit -m "feat: add fly-in-from-sides animation to LegalSection"
```

---

### Task 6: Rewrite CtaBanner with Framer Motion (replace IntersectionObserver)

**Files:**
- Modify: `src/components/home/CtaBanner.tsx`
- Modify: `src/components/home/CtaBanner.module.css`

Replace the manual IntersectionObserver + CSS transition approach with Framer Motion. Content slides in from left, image slides in from right. Remove the `imageWrap`/`imageVisible` opacity/transform CSS since Framer Motion handles it.

- [ ] **Step 1: Update CtaBanner.module.css — remove animation CSS from imageWrap**

In `src/components/home/CtaBanner.module.css`, replace the `.imageWrap` rule:

```css
.imageWrap {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transform: translateX(40px);
  transition: opacity 1.2s ease-out, transform 1.2s ease-out;
}
```

with:

```css
.imageWrap {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

And delete the `.imageVisible` rule entirely:

```css
.imageVisible {
  opacity: 1;
  transform: translateX(0);
}
```

- [ ] **Step 2: Rewrite CtaBanner.tsx with Framer Motion**

Replace the full content of `src/components/home/CtaBanner.tsx` with:

```tsx
"use client";

import { HOME_CTA_BANNER, SITE_CONTENT } from "@/lib/constants";
import { Phone } from "lucide-react";
import { Button } from "@/components/common/Button";
import { motion } from "framer-motion";
import styles from "./CtaBanner.module.css";

const contentVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut", delay: 0.2 },
  },
};

export function CtaBanner() {
  const phoneHref = `tel:${SITE_CONTENT.phone.replace(/\s/g, "")}`;

  return (
    <section className={styles.banner}>
      <motion.div
        className={styles.bannerInner}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className={styles.content} variants={contentVariants}>
          <h2 className={styles.title}>{HOME_CTA_BANNER.title}</h2>
          <p className={styles.subtitle}>{HOME_CTA_BANNER.subtitle}</p>
          <Button variant="primary" href={phoneHref}>
            <Phone size={18} strokeWidth={2} />
            {HOME_CTA_BANNER.phoneCta}
          </Button>
        </motion.div>
        <motion.div className={styles.imageWrap} variants={imageVariants}>
          <img
            src="/icons/Lexoria carousel.png"
            alt=""
            className={styles.image}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
```

- [ ] **Step 3: Verify in browser**

Scroll to CTA banner. Content slides in from left, image slides in from right with a slight delay. No more manual IntersectionObserver code.

- [ ] **Step 4: Commit**

```bash
git add src/components/home/CtaBanner.tsx src/components/home/CtaBanner.module.css
git commit -m "feat: replace IntersectionObserver with Framer Motion in CtaBanner"
```

---

### Task 7: Final verification and cleanup

**Files:**
- Review all modified components

- [ ] **Step 1: Run the build to ensure static export works**

```bash
npm run build
```

Expected: Build succeeds with no errors. Framer Motion is compatible with Next.js static export since all animated components are client components.

- [ ] **Step 2: Full browser walkthrough**

Open `http://localhost:3000` and scroll through the entire page:
1. Hero: staggered fade-in on load
2. Benefits: cards stagger up on scroll
3. Process: title fades up, steps stagger left-to-right
4. Legal: cards fly in from alternating sides
5. CTA Banner: content from left, image from right

Verify animations only play once (scroll back up and down — they should not re-trigger).

- [ ] **Step 3: Test mobile viewport**

Resize to 375px width or use DevTools mobile view. Verify:
- Animations still work and look good on mobile
- No horizontal overflow caused by `x` translations (the sections use `overflow: hidden` or the page handles it)

- [ ] **Step 4: Commit any final adjustments**

If any tweaks were needed, commit them:

```bash
git add -A
git commit -m "fix: animation adjustments from final review"
```
