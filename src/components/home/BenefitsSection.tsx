import { HOME_BENEFITS } from "@/lib/constants";
import { Clock, Car, TrendingUp, ShieldCheck } from "lucide-react";
import styles from "./BenefitsSection.module.css";

const BENEFIT_ICONS = [Clock, Car, TrendingUp, ShieldCheck] as const;

export function BenefitsSection() {
  return (
    <section className={styles.benefits}>
      <div className={styles.benefitsGrid}>
        {HOME_BENEFITS.map((item, index) => {
          const Icon = BENEFIT_ICONS[index];
          return (
            <div key={item.title} className={styles.card}>
              <div className={styles.iconWrap}>
                <Icon size={28} strokeWidth={1.6} />
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDescription}>{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
