import "./globals.css";
import { Outfit, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-outfit",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-jakarta",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  title: {
    default: "AffiliateAI — Affiliate Ecosystem Platform",
    template: "%s | AffiliateAI",
  },
  description:
    "The AI-powered affiliate ecosystem. Launch campaigns, automate commissions, and pay out affiliates globally.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <meta name="theme-color" content="#030712" />
      </head>
      <body>{children}</body>
    </html>
  );
}
