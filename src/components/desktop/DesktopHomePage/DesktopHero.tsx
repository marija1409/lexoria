import { SITE_CONTENT } from "@/lib/constants";
import styles from "./DesktopHomePage.module.css";

export function DesktopHero() {
  return (
    <section className={styles.hero}>
      <img
        src="/icons/logo-lexoria.svg"
        alt={SITE_CONTENT.title}
        className={styles.heroLogo}
      />
      <h1 className={styles.heroTitle}>{SITE_CONTENT.tagline}</h1>
      <p className={styles.heroDescription}>{SITE_CONTENT.description}</p>
    </section>
  );
}
