"use client";

import { ServiceHero } from "./ServiceHero";
import { CtaBanner } from "@/components/home/CtaBanner";
import { motion } from "framer-motion";
import { ShieldOff, Trees, Construction, Package } from "lucide-react";
import styles from "./ServicePage.module.css";

const SCENARIOS = [
  {
    icon: ShieldOff,
    title: "Neosigurano vozilo",
    text: "Ako vas je udario vozač koji nema obavezno osiguranje, ne ostajete bez naknade. Zahtev se podnosi Garantnom fondu Udruženja osiguravača Srbije, koji je dužan da isplati naknadu umesto neosiguranog vozača.",
  },
  {
    icon: Trees,
    title: "Palo drvo",
    text: "Stablo koje je palo na vaše vozilo, bilo zbog oluje ili lošeg stanja, odgovornost je vlasnika ili upravljača zelenila (komunalno preduzeće, opština, privatni vlasnik). Oni uglavnom imaju osiguranje koje pokriva ovakve slučajeve.",
  },
  {
    icon: Construction,
    title: "Rupa ili neravnina na putu",
    text: "Oštećenje gume, felne ili ovjesa zbog rupe na putu može se naplatiti od komunalnog preduzeća ili JP koje održava tu saobraćajnicu. Ključno je dokumentovati oštećenje fotografijama i policijskim zapisnikom odmah na licu mesta.",
  },
  {
    icon: Package,
    title: "Predmeti koji padnu s drugog vozila",
    text: "Predmet koji padne s drugog vozila u pokretu pravno se smatra delom tog vozila. Šteta nastala na vaše vozilo pokrivena je obaveznim osiguranjem odgovornog vozača.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
} as const;

export function OstaleStete() {
  return (
    <>
      <ServiceHero
        label="Ostale štete"
        title="Naplata štete u posebnim situacijama"
        subtitle="Saobraćajna nezgoda nije jedini slučaj u kom možete naplatiti štetu od osiguranja. Pomažemo vam i u situacijama koje mnogi vozači smatraju bezizlaznim."
      />

      <section className={styles.sectionAlt}>
        <div className={styles.inner}>
          <h2 className={styles.sectionTitle}>Situacije u kojima možemo pomoći</h2>
          <p className={styles.sectionDesc}>Svaka od sledećih situacija ima zakonski osnov za naknadu — čak i kada to na prvi pogled nije očigledno.</p>
          <motion.div
            className={styles.grid2}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {SCENARIOS.map((item) => {
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
          <div className={styles.infoBox}>
            <strong>Niste sigurni da li imate osnov za naknadu?</strong> Pozovite nas za besplatnu procenu — analiziramo vaš slučaj bez ikakvih obaveza.
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
