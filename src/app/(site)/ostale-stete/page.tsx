import styles from "../placeholder.module.css";

export default function OstaleStete() {
  return (
    <>
      <div className={styles.desktopOnly}>
        <h1 className={styles.title}>Ostale štete</h1>
        <p className={styles.text}>Sadržaj uskoro.</p>
      </div>
      <div className={styles.mobileOnly}>
        <h1 className={styles.title}>Ostale štete</h1>
        <p className={styles.text}>Sadržaj uskoro.</p>
      </div>
    </>
  );
}
