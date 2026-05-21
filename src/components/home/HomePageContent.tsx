import { HeroSection } from "./HeroSection";
import { SimpleCardsSection } from "./SimpleCardsSection";
import { ServicesSection } from "./ServicesSection";
import { ProcessSection } from "./ProcessSection";
import { DocumentsSection } from "./DocumentsSection";
import { WhyUsSection } from "./WhyUsSection";
import { ResourcesSection } from "./ResourcesSection";
import { LegalSection } from "./LegalSection";
import { CtaBanner } from "./CtaBanner";
import styles from "./HomePageContent.module.css";

export function HomePageContent() {
  return (
    <div className={styles.page}>
      <HeroSection />
      <SimpleCardsSection />
      <ServicesSection />
      <ProcessSection />
      <DocumentsSection background="white" />
      <WhyUsSection />
      <ResourcesSection />
      <LegalSection />
      <CtaBanner />
    </div>
  );
}
