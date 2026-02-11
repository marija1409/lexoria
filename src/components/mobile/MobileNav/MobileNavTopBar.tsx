import { Icon } from "@/components/icons";
import { SITE_CONTENT } from "@/lib/constants";
import { getViberChatUrl, getWhatsAppChatUrl } from "@/lib/contact";
import Link from "next/link";
import styles from "./MobileNav.module.css";

type Props = {
  isMenuOpen: boolean;
  onMenuToggle: () => void;
};

export function MobileNavTopBar({ isMenuOpen, onMenuToggle }: Props) {
  return (
    <div className={styles.topBar}>
      <div className={styles.topBarLeft}>
        <Link href="/" className={styles.topBarLogoLink} aria-label={SITE_CONTENT.title}>
          <img
            src="/icons/logo-lexoria.svg"
            alt=""
            className={styles.topBarLogo}
          />
        </Link>
        <a href={`mailto:${SITE_CONTENT.email}`} className={styles.topBarLink} aria-label="Email">
          <Icon name="email" alt="" className={styles.topBarIcon} />
        </a>
        <a href={`tel:${SITE_CONTENT.phone.replace(/\s/g, "")}`} className={styles.topBarLink} aria-label="Telefon">
          <Icon name="phone" alt="" className={styles.topBarIcon} />
        </a>
        <a
          href={getWhatsAppChatUrl(SITE_CONTENT.phone)}
          className={styles.iconLink}
          aria-label="WhatsApp"
          title="WhatsApp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="whatsapp" alt="" className={styles.icon} />
        </a>
        <a
          href={getViberChatUrl(SITE_CONTENT.phone)}
          className={styles.iconLink}
          aria-label="Viber"
          title="Viber"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="viber" alt="" className={styles.icon} />
        </a>
      </div>
      <button
        type="button"
        className={styles.hamburger}
        onClick={onMenuToggle}
        aria-label={isMenuOpen ? "Zatvori meni" : "Otvori meni"}
        aria-expanded={isMenuOpen}
      >
        <span className={styles.hamburgerBar} />
        <span className={styles.hamburgerBar} />
        <span className={styles.hamburgerBar} />
      </button>
    </div>
  );
}
