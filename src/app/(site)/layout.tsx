import { DesktopShell } from "@/components/desktop/DesktopShell";
import { MobileShell } from "@/components/mobile/MobileShell";
import styles from "./layout.module.css";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className={styles.desktopOnly}>
        <DesktopShell>{children}</DesktopShell>
      </div>
      <div className={styles.mobileOnly}>
        <MobileShell>{children}</MobileShell>
      </div>
    </>
  );
}
