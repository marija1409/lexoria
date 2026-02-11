import { DesktopNav } from "@/components/desktop/DesktopNav";
import styles from "./DesktopShell.module.css";

type Props = { children: React.ReactNode };

export function DesktopShell({ children }: Props) {
  return (
    <div className={styles.page}>
      <DesktopNav />
      <main className={styles.main}>{children}</main>
    </div>
  );
}
