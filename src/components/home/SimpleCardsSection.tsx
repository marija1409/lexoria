"use client";

import { HOME_SIMPLE_CARDS } from "@/lib/constants";
import { Clock, MapPin, TrendingUp, CircleDollarSign } from "lucide-react";
import { motion } from "framer-motion";
import styles from "./SimpleCardsSection.module.css";

const ICONS = {
  Clock,
  MapPin,
  TrendingUp,
  CircleDollarSign,
} as const;

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" as const },
  },
} as const;

export function SimpleCardsSection() {
  return (
    <section className={styles.section}>
      <motion.div
        className={styles.grid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {HOME_SIMPLE_CARDS.map((item) => {
          const Icon = ICONS[item.icon as keyof typeof ICONS];
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
