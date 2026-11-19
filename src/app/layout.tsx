import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://chidiadi-portfolio-seven.vercel.app"),
  title: {
    template: "%s · Chidiadi Oscar",
    default: "Chidiadi Oscar · Writer & AI Automation Engineer",
  },
  description:
    "AI Consultant, Premium Ghostwriter for B2B SaaS & AI founders, and AI Automation Engineer. I turn founder expertise into clear thought leadership and build AI agents that replace manual work.",
  openGraph: {
    title: "Chidiadi Oscar · Writer & AI Automation Engineer",
    description:
      "Premium ghostwriter for B2B SaaS & AI founders. AI agent builder. I turn founder expertise into thought leadership.",
    url: "https://chidiadi-portfolio-seven.vercel.app",
    siteName: "Chidiadi Oscar",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chidiadi Oscar · Writer & AI Automation Engineer",
    description:
      "Premium ghostwriter for B2B SaaS & AI founders. AI agent builder. I turn founder expertise into thought leadership.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} h-full`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('theme');if(t==='dark'){document.documentElement.dataset.theme='dark'}}catch(e){}`,
          }}
        />
      </head>
      <body className="min-h-full bg-canvas text-ink">{children}</body>
    </html>
  );
}
