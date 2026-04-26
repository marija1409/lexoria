import type { Metadata } from "next";
import { EvropskiIzvestaj } from "@/components/pages/EvropskiIzvestaj";
import { PAGE_METADATA } from "@/lib/seo";

export const metadata: Metadata = PAGE_METADATA["evropski-izvestaj"];

export default function EvropskiIzvestajPage() {
  return <EvropskiIzvestaj />;
}
