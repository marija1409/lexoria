"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/lib/nav";
import styles from "./DesktopNavBar.module.css";

export function DesktopNavBar() {
  const pathname = usePathname();

  return (
    <nav className={styles.bar} aria-label="Glavna navigacija">
      <div className={styles.inner}>
        <ul className={styles.list}>
          {NAV_ITEMS.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <li key={href} className={styles.item}>
                <Link
                  href={href}
                  className={`${styles.link} ${isActive ? styles.linkActive : ""}`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
