import styles from "../placeholder.module.css";

export default function EvropskiIzvestaj() {
  return (
    <>
      <div className={styles.desktopOnly}>
        <h1 className={styles.title}>Evropski izveštaj</h1>
        <p className={styles.text}>Sadržaj uskoro.</p>
      </div>
      <div className={styles.mobileOnly}>
        <h1 className={styles.title}>Evropski izveštaj</h1>
        <p className={styles.text}>Sadržaj uskoro.</p>
      </div>
    </>
  );
}
