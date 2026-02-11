import { Button } from "@/components/common/Button";
import { SITE_CONTENT } from "@/lib/constants";
import styles from "./DesktopHomePage.module.css";

export function DesktopContact() {
  return (
    <section className={styles.contact}>
      <p className={styles.contactIntro}>Kontaktirajte nas:</p>
      <div className={styles.contactLinks}>
        <Button variant="primary" href={`mailto:${SITE_CONTENT.email}`}>
          Pošaljite email
        </Button>
        <Button variant="secondary" href={`tel:${SITE_CONTENT.phone.replace(/\s/g, "")}`}>
          Pozovite nas
        </Button>
      </div>
      <p className={styles.contactText}>
        Email: <a href={`mailto:${SITE_CONTENT.email}`}>{SITE_CONTENT.email}</a>
        <br />
        Telefon: <a href={`tel:${SITE_CONTENT.phone.replace(/\s/g, "")}`}>{SITE_CONTENT.phone}</a>
      </p>
    </section>
  );
}
