import type { Metadata } from "next";
import { OstaleStete } from "@/components/pages/OstaleStete";
import { PAGE_METADATA } from "@/lib/seo";

export const metadata: Metadata = PAGE_METADATA["ostale-stete"];

export default function OstaleStетePage() {
  return <OstaleStete />;
}
