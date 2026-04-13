"use client";

import { HOME_HERO, SITE_CONTENT } from "@/lib/constants";
import { Phone, Mail, ShieldCheck } from "lucide-react";
import { Button } from "@/components/common/Button";
import { motion } from "framer-motion";
import styles from "./HeroSection.module.css";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function HeroSection() {
  const phoneHref = `tel:${SITE_CONTENT.phone.replace(/\s/g, "")}`;
  const emailHref = `mailto:${SITE_CONTENT.email}`;

  return (
    <section className={styles.hero}>
      <motion.div
        className={styles.heroInner}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className={styles.trustBadge} variants={itemVariants}>
          <ShieldCheck size={16} strokeWidth={2} />
          {HOME_HERO.trustBadge}
        </motion.div>

        <motion.h1 className={styles.headline} variants={itemVariants}>
          {HOME_HERO.headline}
        </motion.h1>
        <motion.p className={styles.subheadline} variants={itemVariants}>
          {HOME_HERO.subheadline}
        </motion.p>

        <motion.div className={styles.ctas} variants={itemVariants}>
          <Button variant="primary" href={phoneHref}>
            <Phone size={18} strokeWidth={2} />
            {HOME_HERO.phoneCta}
          </Button>
          <Button variant="secondary" href={emailHref}>
            <Mail size={18} strokeWidth={2} />
            {HOME_HERO.emailCta}
          </Button>
        </motion.div>

        <motion.div className={styles.contactDirect} variants={itemVariants}>
          <a href={phoneHref} className={styles.contactLink}>
            {SITE_CONTENT.phone}
          </a>
          <span className={styles.contactDivider}>|</span>
          <a href={emailHref} className={styles.contactLink}>
            {SITE_CONTENT.email}
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
