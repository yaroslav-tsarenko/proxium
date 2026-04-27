import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Proxium — Premium Proxy Infrastructure",
  description:
    "Enterprise-grade residential, datacenter, mobile & ISP proxies. 85M+ IPs across 195+ countries.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
