"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { SITE_CONTENT } from "@/lib/constants";
import { NAV_ITEMS } from "@/lib/nav";
import { MobileNavTopBar } from "./MobileNavTopBar";
import styles from "./MobileNav.module.css";

export function MobileNav() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isMenuOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isMenuOpen, closeMenu]);

  return (
    <>
      <MobileNavTopBar
        isMenuOpen={isMenuOpen}
        onMenuToggle={() => setIsMenuOpen((open) => !open)}
      />
      {isMenuOpen && (
        <>
          <div
            className={styles.menuBackdrop}
            onClick={closeMenu}
            aria-hidden
          />
          <nav className={styles.menuDrawer} aria-label="Glavna navigacija">
            <div className={styles.menuDrawerHeader}>
              <button
                type="button"
                className={styles.closeButton}
                onClick={closeMenu}
                aria-label="Zatvori meni"
              >
                <span className={styles.closeIcon} aria-hidden />
              </button>
            </div>
            <div className={styles.menuDrawerScroll}>
              <ul className={styles.menuList}>
                {NAV_ITEMS.map(({ label, href }) => {
                  const isActive = pathname === href;
                  return (
                    <li key={href} className={styles.menuItem}>
                      <Link
                        href={href}
                        className={`${styles.menuLink} ${isActive ? styles.menuLinkActive : ""}`}
                        onClick={closeMenu}
                      >
                        {label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div className={styles.menuDrawerFooter}>
                <p className={styles.menuDrawerFooterText}>
                  Pozovite za besplatne konsultacije
                </p>
                <a
                  href={`tel:${SITE_CONTENT.phone.replace(/\s/g, "")}`}
                  className={styles.menuDrawerPhone}
                  onClick={closeMenu}
                >
                  {SITE_CONTENT.phone}
                </a>
              </div>
            </div>
          </nav>
        </>
      )}
    </>
  );
}
