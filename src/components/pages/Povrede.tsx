"use client";

import { ServiceHero } from "./ServiceHero";
import { CtaBanner } from "@/components/home/CtaBanner";
import { motion } from "framer-motion";
import { HeartPulse, Banknote, Brain, Activity, Users, Smile } from "lucide-react";
import styles from "./ServicePage.module.css";

const TYPES = [
  { icon: HeartPulse, title: "Troškovi lečenja i rehabilitacije", text: "Sve medicinske troškove nastale kao posledica nezgode — pregledi, operacije, fizikalna terapija, lekovi — možete naplatiti od osiguranja." },
  { icon: Banknote, title: "Izgubljena zarada", text: "Za svaki dan bolovanja prouzrokovanog povredama u nezgodi, imate pravo na naknadu izgubljene zarade." },
  { icon: Brain, title: "Bol i patnja (nematerijalna šteta)", text: "Fizički i psihički bol, strah i stres nastali usled saobraćajne nezgode predstavljaju nematerijalnu štetu koja se nadoknađuje." },
  { icon: Activity, title: "Trajna nesposobnost za rad", text: "Ako su povrede rezultirale trajnim oštećenjem zdravlja ili smanjenom životnom aktivnošću, pripada vam doživotna mesečna renta ili jednokratna naknada." },
  { icon: Users, title: "Naknada za tuđu negu i pomoć", text: "Ako vam je zbog povreda bila potrebna tuđa nega i pomoć, troškovi za to ulaze u zahtev za naknadu štete." },
  { icon: Smile, title: "Naruženost", text: "Vidljivi ožiljci ili fizičke promene nastale kao posledica nezgode daju pravo na naknadu za estetske posledice." },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
} as const;

export function Povrede() {
  return (
    <>
      <ServiceHero
        label="Telesne povrede"
        title="Naplata štete za povrede u saobraćajnoj nezgodi"
        subtitle="Ako ste pretrpeli telesne povrede u saobraćajnoj nezgodi, imate pravo na naknadu materijalne i nematerijalne štete. Borimo se za sve naknade koje vam po zakonu pripadaju."
      />

      <section className={styles.sectionAlt}>
        <div className={styles.inner}>
          <h2 className={styles.sectionTitle}>Vrste naknade koje možete ostvariti</h2>
          <p className={styles.sectionDesc}>Naknada za telesne povrede obuhvata više vrsta štete — materijalne i nematerijalne. Mnoge žrtve saobraćajnih nezgoda ne znaju za sva svoja prava.</p>
          <motion.div
            className={styles.grid2}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {TYPES.map((item) => {
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
        <div className={styles.innerNarrow}>
          <h2 className={styles.sectionTitle}>Važno — rokovi za podnošenje zahteva</h2>
          <p className={styles.sectionDesc}>Za razliku od materijalne štete na vozilu gde osiguranje ima 45 dana za isplatu, za povrede je zakonski rok 90 dana. Zahtev možete podneti u roku od tri godine od dana saznanja za štetu, a ukupna zastarelost nastupa pet godina od nezgode.</p>
          <div className={styles.infoBox}>
            <strong>Naš savet:</strong> Nemojte čekati. Što pre nam se javite, pre možemo osigurati svu potrebnu medicinsku dokumentaciju i podneti kompletan zahtev.
          </div>
        </div>
      </section>

      <CtaBanner background="gray" />
    </>
  );
}
