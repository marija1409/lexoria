"use client";

import Link from "next/link";
import { HOME_LEGAL_SECTION, HOME_LEGAL_SERVICES } from "@/lib/constants";
import { FileText, MessageSquare, Building2, Gavel } from "lucide-react";
import { motion } from "framer-motion";
import styles from "./LegalSection.module.css";

const ICONS = {
  FileText,
  MessageSquare,
  Building2,
  Gavel,
} as const;

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
} as const;

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
} as const;

export function LegalSection() {
  return (
    <section className={styles.legal}>
      <motion.div
        className={styles.legalInner}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.h2 className={styles.legalTitle} variants={headerVariants}>
          {HOME_LEGAL_SECTION.title}
        </motion.h2>
        <motion.p className={styles.legalDescription} variants={headerVariants}>
          {HOME_LEGAL_SECTION.description}
        </motion.p>

        <motion.div className={styles.legalGrid} variants={containerVariants}>
          {HOME_LEGAL_SERVICES.map((item) => {
            const Icon = ICONS[item.icon as keyof typeof ICONS];
            return (
              <motion.div
                key={item.title}
                className={styles.legalCard}
                variants={cardVariants}
              >
                <div className={styles.iconWrap}>
                  <Icon size={24} strokeWidth={1.6} />
                </div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDescription}>{item.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div className={styles.legalCtaWrap} variants={headerVariants}>
          <Link href={HOME_LEGAL_SECTION.ctaHref} className={styles.legalCta}>
            {HOME_LEGAL_SECTION.ctaLabel}
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
