import { MobileNav } from "@/components/mobile/MobileNav";
import { MobileHero } from "./MobileHero";
import { MobileContact } from "./MobileContact";
import styles from "./MobileHomePage.module.css";

export function MobileHomePage() {
  return (
    <div className={styles.page}>
      <MobileNav />
      <main className={styles.main}>
        <MobileHero />
        <MobileContact />
      </main>
    </div>
  );
}
