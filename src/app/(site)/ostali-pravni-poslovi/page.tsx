import type { Metadata } from "next";
import { OstaliPravniPoslovi } from "@/components/pages/OstaliPravniPoslovi";
import { PAGE_METADATA } from "@/lib/seo";

export const metadata: Metadata = PAGE_METADATA["ostali-pravni-poslovi"];

export default function OstaliPravniPosloviPage() {
  return <OstaliPravniPoslovi />;
}
