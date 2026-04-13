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
    icon: <Icon name="whatsapp" alt="WhatsApp" width={24} height={24} />,
    getHref: () => getWhatsAppChatUrl(SITE_CONTENT.phone),
    getValue: () => SITE_CONTENT.phone,
    external: true,
  },
  {
    key: "viber" as const,
    icon: <Icon name="viber" alt="Viber" width={24} height={24} />,
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
