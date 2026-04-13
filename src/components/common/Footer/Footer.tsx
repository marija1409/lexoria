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
          <div className={styles.brand}>
            <img
              src="/icons/logo-lexoria.svg"
              alt={SITE_CONTENT.title}
              className={styles.logo}
            />
            <p className={styles.brandDescription}>
              {FOOTER_CONTENT.description}
            </p>
          </div>

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
              <li>
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
                  <Icon name="whatsapp" alt="WhatsApp" width={16} height={16} />
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={viberHref} target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
                  <Icon name="viber" alt="Viber" width={16} height={16} />
                  Viber
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>{FOOTER_CONTENT.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
