import type { Metadata } from "next";
import { HomePageContent } from "@/components/home/HomePageContent";
import { PAGE_METADATA } from "@/lib/seo";
import styles from "./layout.module.css";

export const metadata: Metadata = PAGE_METADATA[""];

export default function Home() {
  return (
    <>
      <div className={styles.desktopOnly}>
        <HomePageContent />
      </div>
      <div className={styles.mobileOnly}>
        <HomePageContent />
      </div>
    </>
  );
}
