import type { Metadata } from "next";
import { PAGE_METADATA } from "@/lib/seo";
import styles from "../placeholder.module.css";

export const metadata: Metadata = PAGE_METADATA["ostale-stete"];

export default function OstaleStete() {
  return (
    <>
      <div className={styles.desktopOnly}>
        <h1 className={styles.title}>Ostale štete</h1>
        <p className={styles.text}>Sadržaj uskoro.</p>
      </div>
      <div className={styles.mobileOnly}>
        <h1 className={styles.title}>Ostale štete</h1>
        <p className={styles.text}>Sadržaj uskoro.</p>
      </div>
    </>
  );
}
