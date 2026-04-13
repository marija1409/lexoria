"use client";

import { useRef, useEffect, useState } from "react";
import { HOME_CTA_BANNER, SITE_CONTENT } from "@/lib/constants";
import { Phone } from "lucide-react";
import { Button } from "@/components/common/Button";
import styles from "./CtaBanner.module.css";

export function CtaBanner() {
  const phoneHref = `tel:${SITE_CONTENT.phone.replace(/\s/g, "")}`;
  const imageRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = imageRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.banner}>
      <div className={styles.bannerInner}>
        <div className={styles.content}>
          <h2 className={styles.title}>{HOME_CTA_BANNER.title}</h2>
          <p className={styles.subtitle}>{HOME_CTA_BANNER.subtitle}</p>
          <Button variant="primary" href={phoneHref}>
            <Phone size={18} strokeWidth={2} />
            {HOME_CTA_BANNER.phoneCta}
          </Button>
        </div>
        <div
          ref={imageRef}
          className={`${styles.imageWrap} ${visible ? styles.imageVisible : ""}`}
        >
          <img
            src="/icons/Lexoria carousel.png"
            alt=""
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}
