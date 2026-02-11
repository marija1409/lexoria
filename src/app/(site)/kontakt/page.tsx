import styles from "../placeholder.module.css";

export default function Kontakt() {
  return (
    <>
      <div className={styles.desktopOnly}>
        <h1 className={styles.title}>Kontakt</h1>
        <p className={styles.text}>Sadržaj uskoro.</p>
      </div>
      <div className={styles.mobileOnly}>
        <h1 className={styles.title}>Kontakt</h1>
        <p className={styles.text}>Sadržaj uskoro.</p>
      </div>
    </>
  );
}
