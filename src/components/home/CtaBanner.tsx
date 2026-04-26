"use client";

import { HOME_CTA_BANNER, SITE_CONTENT } from "@/lib/constants";
import { Phone } from "lucide-react";
import { Button } from "@/components/common/Button";
import { motion } from "framer-motion";
import styles from "./CtaBanner.module.css";

const contentVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
} as const;

const imageVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" as const, delay: 0.2 },
  },
} as const;

interface CtaBannerProps {
  background?: "white" | "gray";
}

export function CtaBanner({ background = "white" }: CtaBannerProps) {
  const phoneHref = `tel:${SITE_CONTENT.phone.replace(/\s/g, "")}`;

  return (
    <section className={styles.banner} style={{ background: background === "gray" ? "#f8fafc" : "#ffffff" }}>
      <motion.div
        className={styles.bannerInner}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className={styles.content} variants={contentVariants}>
          <h2 className={styles.title}>{HOME_CTA_BANNER.title}</h2>
          <p className={styles.subtitle}>{HOME_CTA_BANNER.subtitle}</p>
          <Button variant="primary" href={phoneHref}>
            <Phone size={18} strokeWidth={2} />
            {HOME_CTA_BANNER.phoneCta}
          </Button>
        </motion.div>
        <motion.div className={styles.imageWrap} variants={imageVariants}>
          <div
            className={styles.image}
            role="img"
            aria-hidden="true"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
