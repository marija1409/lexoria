"use client";

import { ServiceHero } from "./ServiceHero";
import { CtaBanner } from "@/components/home/CtaBanner";
import { motion } from "framer-motion";
import { FileSignature, MessageSquare, Building2, Scale } from "lucide-react";
import styles from "./ServicePage.module.css";

const SERVICES = [
  {
    icon: FileSignature,
    title: "Sastavljanje ugovora",
    text: "Kupoprodajni ugovori, ugovori o zakupu, ugovori o delu, poklonu, pozajmici i svi ostali ugovori u skladu s važećim zakonskim propisima. Svaki ugovor prilagođavamo vašim potrebama i štitimo vaše interese.",
  },
  {
    icon: MessageSquare,
    title: "Pravne konsultacije",
    text: "Besplatna procena vaše pravne situacije i savet o najboljim koracima. Odgovaramo na pitanja iz oblasti građanskog, porodičnog, naslednog i imovinskog prava.",
  },
  {
    icon: Building2,
    title: "Građevinske i upotrebne dozvole",
    text: "Pomoć pri legalizaciji bespravno izgrađenih objekata, ishođenju građevinskih dozvola za novu gradnju i pribavljanju upotrebnih dozvola. Vodimo vas kroz svu birokratiju.",
  },
  {
    icon: Scale,
    title: "Upravni postupci i žalbe",
    text: "Zastupanje u upravnim postupcima pred državnim organima, opštinskim i gradskim upravama. Sastavljamo žalbe na prvostepene odluke i pratimo predmet do konačnog rešenja.",
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

export function OstaliPravniPoslovi() {
  return (
    <>
      <ServiceHero
        label="Pravne usluge"
        title="Ostali pravni poslovi"
        subtitle="Pored naplate štete od osiguranja, pružamo širok spektar pravnih usluga. Naš tim vam pomaže sa ugovorima, dozvolama i upravnim postupcima."
      />

      <section className={styles.sectionAlt}>
        <div className={styles.inner}>
          <h2 className={styles.sectionTitle}>Šta nudimo</h2>
          <p className={styles.sectionDesc}>Svaka usluga je prilagođena vašim potrebama — bez nepotrebne komplikacije i birokratije.</p>
          <motion.div
            className={styles.grid2}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {SERVICES.map((item) => {
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
            <strong>Besplatna prva konsultacija.</strong> Pozovite nas ili pošaljite email — procenićemo vaš slučaj bez ikakvih obaveza.
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
