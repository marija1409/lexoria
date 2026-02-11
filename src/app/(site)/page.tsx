import { DesktopContact } from "@/components/desktop/DesktopHomePage/DesktopContact";
import { DesktopHero } from "@/components/desktop/DesktopHomePage/DesktopHero";
import homeStyles from "@/components/desktop/DesktopHomePage/DesktopHomePage.module.css";
import { MobileContact } from "@/components/mobile/MobileHomePage/MobileContact";
import { MobileHero } from "@/components/mobile/MobileHomePage/MobileHero";
import mobileHomeStyles from "@/components/mobile/MobileHomePage/MobileHomePage.module.css";
import styles from "./layout.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.desktopOnly}>
        <div className={homeStyles.main}>
          <DesktopHero />
          <DesktopContact />
        </div>
      </div>
      <div className={styles.mobileOnly}>
        <div className={mobileHomeStyles.mainContent}>
          <MobileHero />
          <MobileContact />
        </div>
      </div>
    </>
  );
}
