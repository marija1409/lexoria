import { Icon } from "@/components/icons";
import { SITE_CONTENT } from "@/lib/constants";
import { getViberChatUrl, getWhatsAppChatUrl } from "@/lib/contact";
import Link from "next/link";
import styles from "./DesktopNav.module.css";

export function DesktopNavTopBar() {
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
        <a href={`mailto:${SITE_CONTENT.email}`} className={styles.topBarLink}>
          <Icon name="email" alt="" className={styles.topBarIcon} />
          {SITE_CONTENT.email}
        </a>
        <span className={styles.topBarSpacer}> </span>
        <a href={`tel:${SITE_CONTENT.phone}`} className={styles.topBarLink}>
          <Icon name="phone" alt="" className={styles.topBarIcon} />
          {SITE_CONTENT.phone}
        </a>
      </div>
      <div className={styles.topBarRight}>
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
    </div>
  );
}
