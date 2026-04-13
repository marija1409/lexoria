import type { Metadata } from "next";
import { PAGE_METADATA } from "@/lib/seo";
import styles from "../placeholder.module.css";

export const metadata: Metadata = PAGE_METADATA["kasko"];

export default function Kasko() {
  return (
    <>
      <div className={styles.desktopOnly}>
        <h1 className={styles.title}>Kasko</h1>
        <p className={styles.text}>Sadržaj uskoro.</p>
      </div>
      <div className={styles.mobileOnly}>
        <h1 className={styles.title}>Kasko</h1>
        <p className={styles.text}>Sadržaj uskoro.</p>
      </div>
    </>
  );
}
