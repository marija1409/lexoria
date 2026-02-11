import styles from "../placeholder.module.css";

export default function OstaliPravniPoslovi() {
  return (
    <>
      <div className={styles.desktopOnly}>
        <h1 className={styles.title}>Ostali pravni poslovi</h1>
        <p className={styles.text}>Sadržaj uskoro.</p>
      </div>
      <div className={styles.mobileOnly}>
        <h1 className={styles.title}>Ostali pravni poslovi</h1>
        <p className={styles.text}>Sadržaj uskoro.</p>
      </div>
    </>
  );
}
