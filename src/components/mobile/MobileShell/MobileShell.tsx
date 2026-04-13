import { MobileNav } from "@/components/mobile/MobileNav";
import { Footer } from "@/components/common/Footer/Footer";
import styles from "./MobileShell.module.css";

type Props = { children: React.ReactNode };

export function MobileShell({ children }: Props) {
  return (
    <div className={styles.page}>
      <MobileNav />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}
