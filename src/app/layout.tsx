import type { Metadata } from "next";
import { DM_Sans, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { BASE_METADATA } from "@/lib/seo";
import { StructuredData } from "@/components/common/StructuredData";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  ...BASE_METADATA,
  icons: {
    icon: "/logo-lexoria.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr" className={cn("font-sans", geist.variable)}>
      <body className={dmSans.variable}>
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
