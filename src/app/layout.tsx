import type { Metadata } from "next";
import { Space_Grotesk, Syne } from "next/font/google";
import "./globals.css";

const display = Syne({ subsets: ["latin"], variable: "--font-display" });
const sans = Space_Grotesk({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Club Atlético Welcome | Sitio Oficial",
  description: "Sitio oficial del Club Atlético Welcome.",
  metadataBase: new URL("https://cawelcome.com.uy"),
  openGraph: { title: "Club Atlético Welcome | Sitio Oficial", type: "website" },
  twitter: { card: "summary_large_image", title: "Club Atlético Welcome | Sitio Oficial" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${display.variable} ${sans.variable}`}>{children}</body>
    </html>
  );
}
