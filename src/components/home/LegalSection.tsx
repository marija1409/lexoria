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
