"use client";

import { ServiceHero } from "./ServiceHero";
import { CtaBanner } from "@/components/home/CtaBanner";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Button } from "@/components/common/Button";
import styles from "./ServicePage.module.css";

const WHEN_YES = [
  "Nema povređenih lica u nezgodi",
  "Oba vozača su saglasna oko okolnosti i krivice",
  "Materijalna šteta je manja i jasna",
  "Nezgoda je jednostavna — dva vozila, jasan uzrok",
];

const WHEN_NO = [
  "Ima povređenih — obavezno pozvati policiju i hitnu pomoć",
  "Vozači se ne slažu oko krivice ili okolnosti nezgode",
  "Šteta je velika ili teško procenljiva na licu mesta",
  "Učestvovalo je više od dva vozila",
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
} as const;

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
} as const;

export function EvropskiIzvestaj() {
  return (
    <>
      <ServiceHero
        label="Evropski izveštaj"
        title="Sve što trebate znati o evropskom izveštaju"
        subtitle="Evropski izveštaj o saobraćajnoj nezgodi je standardni formular koji se koristi širom Evrope za evidentiranje manjih saobraćajnih nezgoda bez pozivanja policije. Pravilno popunjen, može biti dovoljan za naplatu štete."
      />

      <section className={styles.sectionAlt}>
        <div className={styles.inner}>
          <div className={styles.grid2}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
            >
              <h2 className={styles.sectionTitle}>Kada ga koristiti ✓</h2>
              <ul className={styles.list}>
                {WHEN_YES.map((item) => (
                  <motion.li key={item} className={styles.listItem} variants={itemVariants}>
                    <span className={styles.listDot} />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
            >
              <h2 className={styles.sectionTitle}>Kada ga NE koristiti ✗</h2>
              <ul className={styles.list}>
                {WHEN_NO.map((item) => (
                  <motion.li key={item} className={styles.listItem} variants={itemVariants}>
                    <span className={styles.listDot} style={{ background: "#dc2626" }} />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.innerNarrow}>
          <h2 className={styles.sectionTitle}>Kako se pravilno popunjava</h2>
          <p className={styles.sectionDesc}>Jedan formular važi za oba vozila — svaki vozač popunjava svoju stranu.</p>
          <ul className={styles.list}>
            {[
              "Koristite hemijsku olovku — pritisak mora proći na kopiju ispod originala",
              "Svaki vozač popunjava svoju stranu formulara na licu mesta",
              "U polju za opis, jasno navedite kako se nezgoda odigrala",
              "Ako preuzimate krivicu, to eksplicitno navedite — ne pretpostavljajte da se podrazumeva",
              "Oba vozača moraju potpisati formular pre razdvajanja",
              "Odvojite original od kopije tek nakon potpisivanja",
            ].map((item) => (
              <li key={item} className={styles.listItem}>
                <span className={styles.listDot} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.innerNarrow}>
          <h2 className={styles.sectionTitle}>Preuzmite formular</h2>
          <p className={styles.sectionDesc}>Formular možete nabaviti u osiguravajućim kućama i na stanicama tehničkog pregleda, ili ga preuzmite direktno sa našeg sajta, odštampajte i držite u vozilu.</p>
          <div className={styles.infoBox}>
            <strong>Kazna za neposedovanje:</strong> Prema važećim propisima, kazna za neposedovanje evropskog izveštaja iznosi od 10.000 do 50.000 dinara.
          </div>
          <div style={{ marginTop: "1.25rem", display: "flex", justifyContent: "center" }}>
            <Button
              variant="primary"
              href="/Evropski izvestaj o saobracajnoj nezgodi.pdf"
              download
            >
              <Download size={17} strokeWidth={2} />
              Preuzmite Evropski izveštaj (PDF)
            </Button>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
