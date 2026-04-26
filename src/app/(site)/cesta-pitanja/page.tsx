import type { Metadata } from "next";
import { CestaPitanja } from "@/components/pages/CestaPitanja";
import { PAGE_METADATA } from "@/lib/seo";

export const metadata: Metadata = PAGE_METADATA["cesta-pitanja"];

export default function CestaPitanjaPage() {
  return <CestaPitanja />;
}
