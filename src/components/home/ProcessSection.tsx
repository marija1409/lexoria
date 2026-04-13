"use client";

import { HOME_PROCESS } from "@/lib/constants";
import { motion } from "framer-motion";
import styles from "./ProcessSection.module.css";

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
} as const;

const stepsContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
} as const;

const stepVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
} as const;

export function ProcessSection() {
  return (
    <section className={styles.process}>
      <motion.div
        className={styles.processInner}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2 className={styles.title} variants={headerVariants}>
          {HOME_PROCESS.title}
        </motion.h2>
        <motion.p className={styles.subtitle} variants={headerVariants}>
          {HOME_PROCESS.subtitle}
        </motion.p>

        <motion.div className={styles.steps} variants={stepsContainerVariants}>
          {HOME_PROCESS.steps.map((step, index) => (
            <motion.div
              key={step.number}
              className={styles.step}
              variants={stepVariants}
            >
              <div className={styles.stepNumber}>{step.number}</div>
              {index < HOME_PROCESS.steps.length - 1 && (
                <div className={styles.stepConnector} />
              )}
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
