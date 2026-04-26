import type { Metadata } from "next";
import { StetaNaVozilu } from "@/components/pages/StetaNaVozilu";
import { PAGE_METADATA } from "@/lib/seo";

export const metadata: Metadata = PAGE_METADATA["steta-na-vozilu"];

export default function StetaNaVoziluPage() {
  return <StetaNaVozilu />;
}
