"use client";

import { SITE_CONTENT } from "@/lib/constants";
import { Phone } from "lucide-react";
import { Button } from "@/components/common/Button";
import { motion } from "framer-motion";
import styles from "./ServiceHero.module.css";

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const, delay: i * 0.1 },
  }),
};

interface ServiceHeroProps {
  label?: string;
  title: string;
  subtitle: string;
}

export function ServiceHero({ label, title, subtitle }: ServiceHeroProps) {
  const phoneHref = `tel:${SITE_CONTENT.phone.replace(/\s/g, "")}`;

  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        {label && (
          <motion.span
            className={styles.label}
            custom={0}
            initial="hidden"
            animate="visible"
            variants={variants}
          >
            {label}
          </motion.span>
        )}
        <motion.h1
          className={styles.title}
          custom={1}
          initial="hidden"
          animate="visible"
          variants={variants}
        >
          {title}
        </motion.h1>
        <motion.p
          className={styles.subtitle}
          custom={2}
          initial="hidden"
          animate="visible"
          variants={variants}
        >
          {subtitle}
        </motion.p>
        <motion.div
          className={styles.cta}
          custom={3}
          initial="hidden"
          animate="visible"
          variants={variants}
        >
          <Button variant="primary" href={phoneHref}>
            <Phone size={18} strokeWidth={2} />
            Pozovite nas
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
