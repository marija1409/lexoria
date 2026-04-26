"use client";

import { HOME_WHY_US } from "@/lib/constants";
import { Eye, TrendingUp, BadgeCheck, Handshake } from "lucide-react";
import { motion } from "framer-motion";
import styles from "./WhyUsSection.module.css";

const CARD_ICONS = {
  Eye,
  TrendingUp,
  BadgeCheck,
  Handshake,
} as const;

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
    transition: { staggerChildren: 0.15 },
  },
} as const;

const rowFromLeft = {
  hidden: { opacity: 0, x: -70 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
} as const;

const rowFromRight = {
  hidden: { opacity: 0, x: 70 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
} as const;

const BG = { white: "#ffffff", gray: "#f8fafc" } as const;

interface WhyUsSectionProps {
  background?: keyof typeof BG;
}

export function WhyUsSection({ background = "gray" }: WhyUsSectionProps) {
  const cardBg = background === "gray" ? "#ffffff" : "#f8fafc";
  return (
    <section className={styles.whyUs} style={{ background: BG[background] }}>
      <div className={styles.inner}>
        <motion.div
          className={styles.header}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2 className={styles.title} variants={headerVariants}>
            {HOME_WHY_US.title}
          </motion.h2>
          <motion.p className={styles.subtitle} variants={headerVariants}>
            {HOME_WHY_US.subtitle}
          </motion.p>
        </motion.div>

        <motion.div
          className={styles.rows}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {HOME_WHY_US.items.map((item, index) => {
            const Icon = CARD_ICONS[item.icon as keyof typeof CARD_ICONS];
            return (
              <motion.div
                key={item.title}
                className={styles.row}
                style={{ background: cardBg }}
                variants={index % 2 === 0 ? rowFromLeft : rowFromRight}
              >
                <div className={styles.iconWrap}>
                  <Icon size={26} strokeWidth={1.6} />
                </div>
                <div className={styles.textWrap}>
                  <h3 className={styles.rowTitle}>{item.title}</h3>
                  <p className={styles.rowDescription}>{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
