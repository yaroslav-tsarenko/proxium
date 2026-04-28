import type { Metadata } from "next";
import { jetbrainsMono } from "@/styles/fonts";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CurrencyProvider } from "@/lib/currency";
import "./globals.css";

export const metadata: Metadata = {
  title: "Proxium — Reliable Proxy Service for Business & Automation",
  description:
    "Buy datacenter, residential, and rotating proxies with a simple balance-based model. Top up your account and choose exactly the proxies you need. Global locations, flexible spending, no subscriptions.",
  keywords: [
    "proxy service",
    "buy proxies",
    "datacenter proxies",
    "residential proxies",
    "rotating proxies",
    "private proxies",
    "proxy locations",
    "proxy balance",
    "web scraping proxies",
    "social media proxies",
  ],
  openGraph: {
    title: "Proxium — Reliable Proxy Service",
    description:
      "Top up your balance and buy exactly the proxies you need. Datacenter, residential, rotating, and dedicated proxies with global coverage.",
    siteName: "Proxium",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-background text-foreground font-mono antialiased">
        <CurrencyProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </CurrencyProvider>
      </body>
    </html>
  );
}
