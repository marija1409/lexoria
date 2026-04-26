"use client";

import { ServiceHero } from "./ServiceHero";
import { CtaBanner } from "@/components/home/CtaBanner";
import { ProcessSection } from "@/components/home/ProcessSection";
import { DocumentsSection } from "@/components/home/DocumentsSection";
import { motion } from "framer-motion";
import { Car, Wrench, Banknote, HeartPulse, TrendingDown } from "lucide-react";
import styles from "./ServicePage.module.css";

const RECOVERABLE = [
  { icon: Wrench, title: "Popravka ili zamena vozila", text: "Nadoknada troškova popravke oštećenog vozila ili nabavna vrednost ako je vozilo totalna šteta." },
  { icon: Car, title: "Prenos vozila", text: "Troškovi vučne službe s mesta nezgode do servisa ili parkinga mogu biti pokriveni od strane osiguranja." },
  { icon: HeartPulse, title: "Troškovi lečenja", text: "Ako ste pretrpeli povrede u nezgodi, troškovi lečenja i rehabilitacije ulaze u zahtev za naknadu." },
  { icon: Banknote, title: "Izgubljena zarada", text: "Naknada za izgubljenu zaradu za vreme bolovanja usled povreda nastalih u nezgodi." },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
} as const;

export function StetaNaVozilu() {
  return (
    <>
      <ServiceHero
        label="Šteta na vozilu"
        title="Naplatite maksimalnu naknadu za štetu na vozilu"
        subtitle="Doživeli ste saobraćajnu nezgodu i vaše vozilo je oštećeno? Lexoria procenjuje štetu i zastupa vas u naplati od osiguravajućeg društva, bez troškova unapred."
      />

      <section className={styles.sectionAlt}>
        <div className={styles.inner}>
          <h2 className={styles.sectionTitle}>Šta možete naplatiti</h2>
          <p className={styles.sectionDesc}>Pored popravke vozila, postoji niz troškova i šteta koje imate pravo da naplatite od osiguranja, a o kojima mnogi vozači nisu svesni.</p>
          <motion.div
            className={styles.grid2}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {RECOVERABLE.map((item) => {
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

      <ProcessSection />

      <DocumentsSection />

      <CtaBanner />
    </>
  );
}
