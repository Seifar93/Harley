import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

/** Display/body pairing recommended by the ui-ux-pro-max typography database. */
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bespoke Blinds — Made-to-Measure Blinds, Shutters & Curtains",
  description:
    "Made-to-measure blinds, plantation shutters, curtains and motorised systems. Free home measure, made in the UK, fitted by the people who measured.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="grain flex min-h-full flex-col">{children}</body>
    </html>
  );
}
