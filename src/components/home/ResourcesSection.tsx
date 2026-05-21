"use client";

import Link from "next/link";
import { HOME_RESOURCES } from "@/lib/constants";
import { FileText, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";
import styles from "./ResourcesSection.module.css";

const ICONS = {
  FileText,
  HelpCircle,
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
    transition: { staggerChildren: 0.2 },
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

export function ResourcesSection() {
  return (
    <section className={styles.section}>
      <motion.div
        className={styles.inner}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <motion.h2 className={styles.title} variants={headerVariants}>
          {HOME_RESOURCES.title}
        </motion.h2>
        <motion.p className={styles.subtitle} variants={headerVariants}>
          {HOME_RESOURCES.subtitle}
        </motion.p>
        <motion.div className={styles.grid} variants={containerVariants}>
          {HOME_RESOURCES.items.map((item) => {
            const Icon = ICONS[item.icon as keyof typeof ICONS];
            return (
              <motion.div
                key={item.title}
                className={styles.card}
                variants={cardVariants}
              >
                <div className={styles.iconWrap}>
                  <Icon size={26} strokeWidth={1.6} />
                </div>
                <div className={styles.textWrap}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDescription}>{item.description}</p>
                  <Link href={item.href} className={styles.cardLink}>
                    Saznajte više →
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
