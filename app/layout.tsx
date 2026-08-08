import type { Metadata } from "next";
import type { ReactNode } from "react";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { educationCenterJsonLd } from "@/lib/structured-data";
import { createMetadata } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = createMetadata({
  verification: { google: "2C2Hx1mnmt3FX4yfrTvfiRAhg7R3p23WqTQxprdmBtw" }
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="tr">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(educationCenterJsonLd()) }}
        />
        <SiteHeader />
        <main>{children}</main>
        <FloatingWhatsApp />
        <SiteFooter />
      </body>
    </html>
  );
}
