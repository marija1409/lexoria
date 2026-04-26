"use client";

import { useState } from "react";
import { ServiceHero } from "./ServiceHero";
import { CtaBanner } from "@/components/home/CtaBanner";
import { ChevronDown } from "lucide-react";
import styles from "./ServicePage.module.css";

const FAQS = [
  {
    q: "Kada se isplaćuje naknada štete od osiguranja?",
    a: "Po zakonu, osiguravajuće društvo je dužno da reši zahtev za materijalnu štetu na vozilu u roku od 45 dana, a za telesne povrede u roku od 90 dana od dana podnošenja kompletne dokumentacije. U praksi, uz urednu dokumentaciju, isplata se često realizuje i za 2–3 nedelje.",
  },
  {
    q: "Kako funkcioniše naplata štete uz vašu pomoć?",
    a: "Kontaktiramo vas, procenjujemo štetu na licu mesta, prikupljamo svu potrebnu dokumentaciju i podnosimo zahtev osiguravajućem društvu. Pratimo predmet do isplate i o svakom koraku vas redovno obaveštavamo. Naknadu za naše usluge naplaćujemo tek nakon uspešne isplate — bez ikakvih troškova unapred.",
  },
  {
    q: "Gde mogu dobiti policijski zapisnik (službenu belešku MUP-a)?",
    a: "Zahtev za policijski zapisnik u Beogradu možete poslati na email saobracajnenezgode.bg@mup.gov.rs. Za ostatak Srbije, obratite se najbližoj policijskoj stanici. Napomena: pre slanja zahteva potrebno je platiti administrativnu taksu putem eUprava portala.",
  },
  {
    q: "Šta ako me je udario nepoznati vozač koji je pobegao?",
    a: "Odmah pozovite policiju kako bi se sačinio zapisnik koji potvrđuje vreme i mesto nezgode. Nakon toga kontaktirajte nas — možemo podneti zahtev i pratiti predmet. Ukoliko vozač ostane neidentifikovan, zahtev se podnosi Garantnom fondu Udruženja osiguravača Srbije.",
  },
  {
    q: "Mogu li da naplatim štetu ako vozač nije imao osiguranje?",
    a: "Da. Ukoliko vas je udario vozač bez obaveznog osiguranja, zahtev se podnosi Garantnom fondu Udruženja osiguravača Srbije, koji je zakonski obavezan da isplati naknadu umesto neosiguranog vozača.",
  },
  {
    q: "Da li mogu da naplatim štetu ako je drvo palo na moje vozilo?",
    a: "Da. Vlasnik ili upravljač zelenila (opština, komunalno preduzeće ili privatni vlasnik) odgovoran je za stanje stabala. Oni najčešće imaju osiguranje koje pokriva ovakve slučajeve. Ključno je dokumentovati štetu fotografijama i pribaviti odgovarajuće izveštaje.",
  },
  {
    q: "Da li mogu da naplatim štetu nastalu zbog rupe na putu?",
    a: "Da. Preduzeće ili organ nadležan za održavanje te saobraćajnice odgovorno je za štetu nastalu zbog lošeg stanja puta. Obavezno dokumentujte oštećenje fotografijama na licu mesta i sačinite policijski zapisnik.",
  },
  {
    q: "Da li predmeti koji padnu s drugog vozila pokrivaju obaveznim osiguranjem?",
    a: "Da. Predmet koji padne s vozila u pokretu pravno se smatra delom tog vozila. Šteta nastala na vaše vozilo pokrivena je obaveznim osiguranjem odgovornog vozača.",
  },
  {
    q: "Koliko dugo imam vremena da podnesem zahtev za naknadu štete?",
    a: "Zahtev za naknadu štete možete podneti u roku od tri godine od dana kada ste saznali za štetu i štetnika. Apsolutna zastarelost nastupa pet godina od dana kada se nezgoda dogodila. Ne preporučujemo čekanje — što pre prijavite, to je dokumentacija svežija i kompletna.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.faqItem}>
      <button className={styles.faqQuestion} onClick={() => setOpen((v) => !v)} aria-expanded={open}>
        {q}
        <ChevronDown
          size={18}
          strokeWidth={2}
          className={`${styles.faqChevron} ${open ? styles.faqChevronOpen : ""}`}
        />
      </button>
      {open && <p className={styles.faqAnswer}>{a}</p>}
    </div>
  );
}

export function CestaPitanja() {
  return (
    <>
      <ServiceHero
        label="Česta pitanja"
        title="Odgovori na najčešća pitanja"
        subtitle="Sve što želite da znate o naplati štete od osiguranja — postupak, troškovi, rokovi i vaša zakonska prava."
      />

      <section className={styles.sectionAlt}>
        <div className={styles.innerNarrow}>
          <div className={styles.faqList}>
            {FAQS.map((item) => (
              <FaqItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
