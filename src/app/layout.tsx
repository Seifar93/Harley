import type { Metadata } from "next";
import { Cormorant, Montserrat } from "next/font/google";
import "./globals.css";

/** Display/body pairing recommended by the ui-ux-pro-max typography database. */
const cormorant = Cormorant({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Star Executive Travel — Luxury Car Hire & Chauffeur Services",
  description:
    "Chauffeur-driven executive travel, wedding cars, and self-drive luxury hire across Bradford and West Yorkshire. Fixed quotes, freephone booking.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${cormorant.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
