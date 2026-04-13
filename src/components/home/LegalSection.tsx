"use client";

import { HOME_LEGAL_SECTION, HOME_LEGAL_SERVICES } from "@/lib/constants";
import { motion } from "framer-motion";
import styles from "./LegalSection.module.css";

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardFromLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const cardFromRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function LegalSection() {
  return (
    <section className={styles.legal}>
      <motion.div
        className={styles.legalInner}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2 className={styles.legalTitle} variants={headerVariants}>
          {HOME_LEGAL_SECTION.title}
        </motion.h2>
        <motion.p
          className={styles.legalDescription}
          variants={headerVariants}
        >
          {HOME_LEGAL_SECTION.description}
        </motion.p>

        <motion.div className={styles.legalGrid} variants={containerVariants}>
          {HOME_LEGAL_SERVICES.map((title, index) => (
            <motion.div
              key={title}
              className={styles.legalCard}
              variants={index % 2 === 0 ? cardFromLeft : cardFromRight}
            >
              {title}
            </motion.div>
          ))}
        </motion.div>

        <motion.div className={styles.legalCtaWrap} variants={headerVariants}>
          <a href={HOME_LEGAL_SECTION.ctaHref} className={styles.legalCta}>
            {HOME_LEGAL_SECTION.ctaLabel}
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
