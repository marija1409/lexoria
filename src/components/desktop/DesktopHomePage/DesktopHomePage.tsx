import { DesktopNav } from "@/components/desktop/DesktopNav";
import { DesktopHero } from "./DesktopHero";
import { DesktopContact } from "./DesktopContact";
import styles from "./DesktopHomePage.module.css";

export function DesktopHomePage() {
  return (
    <div className={styles.page}>
      <DesktopNav />
      <main className={styles.main}>
        <DesktopHero />
        <DesktopContact />
      </main>
    </div>
  );
}
