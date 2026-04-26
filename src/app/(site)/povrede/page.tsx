import type { Metadata } from "next";
import { Povrede } from "@/components/pages/Povrede";
import { PAGE_METADATA } from "@/lib/seo";

export const metadata: Metadata = PAGE_METADATA["povrede"];

export default function PovedePage() {
  return <Povrede />;
}
