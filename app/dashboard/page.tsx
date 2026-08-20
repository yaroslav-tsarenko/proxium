"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { Wallet, Server, ShoppingCart, TrendingUp, ArrowRight } from "lucide-react";
import { useCurrency } from "@/lib/currency";
import { useDashboard } from "@/lib/dashboard-context";

interface ExtraStats {
  activeProxies: number;
  totalOrders: number;
  totalTopUps: number;
}

export default function DashboardOverview() {
  const { format } = useCurrency();
  const { user } = useDashboard();
  const [extra, setExtra] = useState<ExtraStats>({ activeProxies: 0, totalOrders: 0, totalTopUps: 0 });
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    Promise.all([
      fetch("/api/dashboard/balance").then((r) => r.json()),
      fetch("/api/dashboard/proxies").then((r) => r.json()),
      fetch("/api/dashboard/orders").then((r) => r.json()),
    ]).then(([balanceData, proxiesData, ordersData]) => {
      setExtra({
        activeProxies: proxiesData.proxies?.length ?? 0,
        totalOrders: ordersData.orders?.length ?? 0,
        totalTopUps: balanceData.topups?.length ?? 0,
      });
    });
  }, []);

  useEffect(() => {
    if (!cardsRef.current) return;
    gsap.fromTo(
      cardsRef.current.children,
      { opacity: 0, y: 20, scale: 0.97 },
      { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.08, ease: "power3.out" },
    );
  }, []);

  const statCards = [
    { label: "Balance", value: format(user?.balance ?? 0), icon: Wallet, color: "text-green-400", bg: "bg-green-500/10" },
    { label: "Active Proxies", value: extra.activeProxies.toString(), icon: Server, color: "text-cyan-400", bg: "bg-cyan-500/10" },
    { label: "Total Orders", value: extra.totalOrders.toString(), icon: ShoppingCart, color: "text-blue-400", bg: "bg-blue-500/10" },
    { label: "Top-Ups", value: extra.totalTopUps.toString(), icon: TrendingUp, color: "text-violet-400", bg: "bg-violet-500/10" },
  ];

  const quickLinks = [
    { href: "/dashboard/marketplace", label: "Browse Marketplace", desc: "Find and buy proxies" },
    { href: "/dashboard/proxies", label: "My Proxies", desc: "View active proxy credentials" },
    { href: "/dashboard/top-ups", label: "Top Up Balance", desc: "Add funds to your account" },
    { href: "/dashboard/settings", label: "Account Settings", desc: "Update your profile" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-zinc-50 text-2xl font-bold">Welcome back</h2>
        <p className="text-zinc-400 text-sm mt-1">Here&apos;s an overview of your account.</p>
      </div>

      <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {statCards.map((card) => {
          const Icon = card.icon;
          return (
            <div key={card.label} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-700 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-10 h-10 rounded-xl ${card.bg} flex items-center justify-center`}>
                  <Icon className={`w-5 h-5 ${card.color}`} />
                </div>
              </div>
              <p className="text-zinc-500 text-xs font-medium">{card.label}</p>
              <p className="text-zinc-50 text-2xl font-bold mt-1">{card.value}</p>
            </div>
          );
        })}
      </div>

      <div>
        <h3 className="text-zinc-50 text-lg font-semibold mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 hover:border-zinc-700 hover:-translate-y-0.5 transition-all duration-200 group flex items-center justify-between"
            >
              <div>
                <p className="text-zinc-50 text-sm font-semibold group-hover:text-green-400 transition-colors">{link.label}</p>
                <p className="text-zinc-500 text-xs mt-1">{link.desc}</p>
              </div>
              <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-green-400 transition-colors" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
