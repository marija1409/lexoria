import { HeroSection } from "./HeroSection";
import { SimpleCardsSection } from "./SimpleCardsSection";
import { ProcessSection } from "./ProcessSection";
import { DocumentsSection } from "./DocumentsSection";
import { WhyUsSection } from "./WhyUsSection";
import { LegalSection } from "./LegalSection";
import { CtaBanner } from "./CtaBanner";
import styles from "./HomePageContent.module.css";

export function HomePageContent() {
  return (
    <div className={styles.page}>
      <HeroSection />
      <SimpleCardsSection />
      <ProcessSection />
      <DocumentsSection />
      <WhyUsSection background="white" />
      <LegalSection />
      <CtaBanner />
    </div>
  );
}
