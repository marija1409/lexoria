import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/logo-lexoria.png"
          alt="Lexoria logo"
          width={300}
          height={100}
          priority
          style={{ objectFit: "contain" }}
        />
        <div className={styles.intro}>
          <h1>Uskoro ćemo biti dostupni</h1>
          <p>
            U međuvremenu nas možete kontaktirati putem emaila:{" "}
            <a href="mailto:info@lexoria.rs">info@lexoria.rs</a>
          </p>
          <p>
            ili telefona:{" "}
            <a href="tel:+381653731935">+381653731935</a>
          </p>
        </div>
      </main>
    </div>
  );
}
