import type { Metadata } from "next";
import { ContactPageContent } from "@/components/contact/ContactPageContent";
import { PAGE_METADATA } from "@/lib/seo";

export const metadata: Metadata = PAGE_METADATA["kontakt"];

export default function Kontakt() {
  return <ContactPageContent />;
}
