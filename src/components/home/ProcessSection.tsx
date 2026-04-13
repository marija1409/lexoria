import { HOME_PROCESS } from "@/lib/constants";
import styles from "./ProcessSection.module.css";

export function ProcessSection() {
  return (
    <section className={styles.process}>
      <div className={styles.processInner}>
        <h2 className={styles.title}>{HOME_PROCESS.title}</h2>
        <p className={styles.subtitle}>{HOME_PROCESS.subtitle}</p>

        <div className={styles.steps}>
          {HOME_PROCESS.steps.map((step, index) => (
            <div key={step.number} className={styles.step}>
              <div className={styles.stepNumber}>{step.number}</div>
              {index < HOME_PROCESS.steps.length - 1 && (
                <div className={styles.stepConnector} />
              )}
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
