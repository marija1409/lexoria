"use client";

import Link from "next/link";
import { HOME_SERVICES } from "@/lib/constants";
import { Car, HeartPulse, ShieldCheck, Scale } from "lucide-react";
import { motion } from "framer-motion";
import styles from "./ServicesSection.module.css";

const ICONS = {
  Car,
  HeartPulse,
  ShieldCheck,
  Scale,
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

export function ServicesSection() {
  return (
    <section className={styles.section}>
      <motion.div
        className={styles.inner}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.h2 className={styles.title} variants={headerVariants}>
          {HOME_SERVICES.title}
        </motion.h2>
        <motion.p className={styles.subtitle} variants={headerVariants}>
          {HOME_SERVICES.subtitle}
        </motion.p>
        <motion.div className={styles.grid} variants={containerVariants}>
          {HOME_SERVICES.items.map((item) => {
            const Icon = ICONS[item.icon as keyof typeof ICONS];
            return (
              <motion.div
                key={item.title}
                className={styles.card}
                variants={cardVariants}
              >
                <div className={styles.iconWrap}>
                  <Icon size={24} strokeWidth={1.6} />
                </div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDescription}>{item.description}</p>
                <Link href={item.href} className={styles.cardLink}>
                  Saznajte više →
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
