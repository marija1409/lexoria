import { HeroSection } from "./HeroSection";
import { BenefitsSection } from "./BenefitsSection";
import { ProcessSection } from "./ProcessSection";
import { LegalSection } from "./LegalSection";
import { CtaBanner } from "./CtaBanner";
import styles from "./HomePageContent.module.css";

export function HomePageContent() {
  return (
    <div className={styles.page}>
      <HeroSection />
      <BenefitsSection />
      <ProcessSection />
      <LegalSection />
      <CtaBanner />
    </div>
  );
}
