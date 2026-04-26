import type { Metadata } from "next";
import { Kasko } from "@/components/pages/Kasko";
import { PAGE_METADATA } from "@/lib/seo";

export const metadata: Metadata = PAGE_METADATA["kasko"];

export default function KaskoPage() {
  return <Kasko />;
}
