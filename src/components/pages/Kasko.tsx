"use client";

import { ServiceHero } from "./ServiceHero";
import { CtaBanner } from "@/components/home/CtaBanner";
import { motion } from "framer-motion";
import { ShieldCheck, Car, Flame, CloudLightning, Lock, FileCheck } from "lucide-react";
import styles from "./ServicePage.module.css";

const COVERAGE = [
  { icon: Car, title: "Saobraćajne nezgode", text: "Šteta nastala u sudaru ili prevrtanju vozila, bez obzira na krivicu." },
  { icon: Flame, title: "Požar", text: "Šteta nastala usled požara ili eksplozije na vozilu." },
  { icon: CloudLightning, title: "Prirodne nepogode", text: "Grad, oluja, poplava i ostale elementarne nepogode." },
  { icon: Lock, title: "Krađa", text: "Krađa celokupnog vozila ili njegovih delova." },
  { icon: FileCheck, title: "Delimična i totalna šteta", text: "Kasko pokriva i delimično oštećenje i totalnu štetu vozila." },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
} as const;

export function Kasko() {
  return (
    <>
      <ServiceHero
        label="Kasko osiguranje"
        title="Naplata kasko štete od osiguravajućeg društva"
        subtitle="Kasko osiguranje pokriva vaše vozilo bez obzira na krivicu. Pomažemo vam da procenite štetu po cenama originalnih delova i naplatite maksimalni iznos na koji imate pravo."
      />

      <section className={styles.sectionAlt}>
        <div className={styles.inner}>
          <h2 className={styles.sectionTitle}>Šta pokriva kasko osiguranje</h2>
          <p className={styles.sectionDesc}>Za razliku od obaveznog osiguranja (koje pokriva štetu koju vi prouzrokujete drugima), kasko pokriva štetu na vašem sopstvenom vozilu.</p>
          <motion.div
            className={styles.grid2}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {COVERAGE.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} className={styles.card} variants={itemVariants}>
                  <div className={styles.cardIcon}>
                    <Icon size={22} strokeWidth={1.6} />
                  </div>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardText}>{item.text}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.inner}>
          <h2 className={styles.sectionTitle}>Puni ili delimični kasko?</h2>
          <p className={styles.sectionDesc}>Postoje dve vrste kasko osiguranja — izbor zavisi od starosti i vrednosti vozila.</p>
          <motion.div
            className={styles.grid2}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div className={styles.cardAlt} variants={itemVariants}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                <ShieldCheck size={24} strokeWidth={1.6} color="#042f69" />
                <h3 className={styles.cardTitle} style={{ margin: 0 }}>Puni kasko</h3>
              </div>
              <p className={styles.cardText}>Sveobuhvatna zaštita preporučena za novija i vrednija vozila. Pokriva sve rizike i daje maksimalnu sigurnost.</p>
            </motion.div>
            <motion.div className={styles.cardAlt} variants={itemVariants}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                <ShieldCheck size={24} strokeWidth={1.6} color="#042f69" />
                <h3 className={styles.cardTitle} style={{ margin: 0 }}>Delimični kasko</h3>
              </div>
              <p className={styles.cardText}>Osnovna zaštita s užim opsegom pokrića, obično pogodnija za starija vozila manje tržišne vrednosti.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.innerNarrow}>
          <h2 className={styles.sectionTitle}>Bonus i malus sistem</h2>
          <p className={styles.sectionDesc}>Svake godine bez prijavljene kasko štete, vaša premija se smanjuje — to je bonus. Suprotno, prijava štete povećava premiju sledeće godine (malus). Mnogi vozači zbog toga okleva da prijave manje štete, gubeći pravo na naknadu na koje imaju pravo.</p>
          <div className={styles.infoBox}>
            <strong>Naš savet:</strong> Pre odluke da li da prijavite kasko štetu, konsultujte se s nama. Procenićemo isplativost u vašem konkretnom slučaju — besplatno.
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
