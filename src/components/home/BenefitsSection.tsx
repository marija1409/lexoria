"use client";

import { HOME_BENEFITS } from "@/lib/constants";
import { Clock, Car, TrendingUp, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import styles from "./BenefitsSection.module.css";

const BENEFIT_ICONS = [Clock, Car, TrendingUp, ShieldCheck] as const;

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
} as const;

export function BenefitsSection() {
  return (
    <section className={styles.benefits}>
      <motion.div
        className={styles.benefitsGrid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {HOME_BENEFITS.map((item, index) => {
          const Icon = BENEFIT_ICONS[index];
          return (
            <motion.div
              key={item.title}
              className={styles.card}
              variants={cardVariants}
            >
              <div className={styles.iconWrap}>
                <Icon size={28} strokeWidth={1.6} />
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDescription}>{item.description}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
