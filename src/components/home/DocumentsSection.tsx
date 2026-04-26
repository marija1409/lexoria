"use client";

import { HOME_DOCUMENTS } from "@/lib/constants";
import { motion } from "framer-motion";
import styles from "./DocumentsSection.module.css";

const headerVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
} as const;

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
} as const;

const BG = { white: "#ffffff", gray: "#f8fafc" } as const;

interface DocumentsSectionProps {
  background?: keyof typeof BG;
}

export function DocumentsSection({ background = "gray" }: DocumentsSectionProps) {
  const cardBg = background === "gray" ? "#ffffff" : "#f8fafc";
  return (
    <section className={styles.documents} style={{ background: BG[background] }}>
      <div className={styles.inner}>
        <motion.div
          className={styles.header}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2 className={styles.title} variants={headerVariants}>
            {HOME_DOCUMENTS.title}
          </motion.h2>
          <motion.p className={styles.subtitle} variants={headerVariants}>
            {HOME_DOCUMENTS.subtitle}
          </motion.p>
        </motion.div>

        <motion.div
          className={styles.list}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {HOME_DOCUMENTS.items.map((item, index) => (
            <motion.div
              key={item.text}
              className={styles.item}
              style={{ background: cardBg }}
              variants={itemVariants}
            >
              <div className={styles.number}>
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className={styles.textWrap}>
                <span className={styles.text}>{item.text}</span>
                {"note" in item && item.note && (
                  <span className={styles.note}>{item.note}</span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
