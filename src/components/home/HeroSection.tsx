import { HOME_HERO, SITE_CONTENT } from "@/lib/constants";
import { Phone, Mail, ShieldCheck } from "lucide-react";
import { Button } from "@/components/common/Button";
import styles from "./HeroSection.module.css";

export function HeroSection() {
  const phoneHref = `tel:${SITE_CONTENT.phone.replace(/\s/g, "")}`;
  const emailHref = `mailto:${SITE_CONTENT.email}`;

  return (
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={styles.trustBadge}>
          <ShieldCheck size={16} strokeWidth={2} />
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
