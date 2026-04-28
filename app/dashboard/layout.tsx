"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import gsap from "gsap";
import {
  LayoutDashboard,
  ShoppingCart,
  Server,
  Receipt,
  Settings,
  LogOut,
  Menu,
  X,
  Wallet,
  ChevronDown,
} from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { useCurrency, type Currency } from "@/lib/currency";

const currencies: Currency[] = ["USD", "EUR", "GBP"];

const navItems = [
  { href: "/dashboard", icon: LayoutDashboard, label: "Overview" },
  { href: "/dashboard/marketplace", icon: ShoppingCart, label: "Marketplace" },
  { href: "/dashboard/proxies", icon: Server, label: "My Proxies" },
  { href: "/dashboard/top-ups", icon: Receipt, label: "Top-Up History" },
  { href: "/dashboard/settings", icon: Settings, label: "Settings" },
];

interface UserData {
  name: string;
  surname: string;
  email: string;
  balance: number;
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { currency, setCurrency, symbol } = useCurrency();

  const [user, setUser] = useState<UserData | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("/api/auth/me")
      .then((r) => r.json())
      .then((data) => {
        if (data.user) setUser(data.user);
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (!contentRef.current) return;
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
    );
  }, [pathname]);

  useEffect(() => {
    if (!sidebarOpen || !sidebarRef.current) return;
    gsap.fromTo(
      sidebarRef.current,
      { x: -280 },
      { x: 0, duration: 0.3, ease: "power3.out" },
    );
  }, [sidebarOpen]);

  const handleSignOut = useCallback(async () => {
    await fetch("/api/auth/sign-out", { method: "POST" });
    router.push("/");
  }, [router]);

  useEffect(() => {
    if (!currencyOpen) return;
    const close = () => setCurrencyOpen(false);
    window.addEventListener("click", close);
    return () => window.removeEventListener("click", close);
  }, [currencyOpen]);

  const formatBalance = (cents: number) => {
    return `${symbol}${(cents / 100).toFixed(2)}`;
  };

  const sidebar = (
    <nav className="flex flex-col h-full">
      <div className="p-6 border-b border-zinc-800">
        <Link href="/" className="text-xl font-extrabold text-zinc-50 tracking-tight hover:text-green-400 transition-colors">
          proxium
        </Link>
      </div>

      <div className="flex-1 p-4 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setSidebarOpen(false)}
              className={cn(
                "flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200",
                active
                  ? "bg-green-500/10 text-green-400"
                  : "text-zinc-400 hover:text-zinc-50 hover:bg-zinc-800/50",
              )}
            >
              <Icon className="w-4 h-4" />
              {item.label}
            </Link>
          );
        })}
      </div>

      <div className="p-4 border-t border-zinc-800">
        <button
          onClick={handleSignOut}
          className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-zinc-400 hover:text-red-400 hover:bg-red-500/5 transition-all duration-200 w-full"
        >
          <LogOut className="w-4 h-4" />
          Sign Out
        </button>
      </div>
    </nav>
  );

  return (
    <div className="flex h-screen bg-zinc-950 overflow-hidden">
      <aside className="hidden lg:flex w-64 bg-zinc-900 border-r border-zinc-800 flex-col shrink-0">
        {sidebar}
      </aside>

      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/60" onClick={() => setSidebarOpen(false)} />
          <aside ref={sidebarRef} className="absolute left-0 top-0 bottom-0 w-64 bg-zinc-900 border-r border-zinc-800">
            <div className="absolute right-3 top-4">
              <button onClick={() => setSidebarOpen(false)} className="text-zinc-400 hover:text-zinc-50 transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            {sidebar}
          </aside>
        </div>
      )}

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 bg-zinc-900/50 border-b border-zinc-800 flex items-center justify-between px-4 lg:px-8 shrink-0 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="text-zinc-400 hover:text-zinc-50 transition-colors lg:hidden"
            >
              <Menu className="w-5 h-5" />
            </button>
            <h1 className="text-zinc-50 text-sm font-semibold hidden sm:block">
              {navItems.find((n) => n.href === pathname)?.label ?? "Dashboard"}
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <button
                onClick={(e) => { e.stopPropagation(); setCurrencyOpen(!currencyOpen); }}
                className="flex items-center gap-1 text-xs font-medium text-zinc-400 hover:text-zinc-50 transition-colors"
              >
                {currency}
                <ChevronDown className="w-3 h-3" />
              </button>
              {currencyOpen && (
                <div className="absolute right-0 top-full mt-2 min-w-[80px] rounded-xl border border-zinc-800 bg-zinc-900 py-1 shadow-lg z-50">
                  {currencies.map((c) => (
                    <button
                      key={c}
                      onClick={() => { setCurrency(c); setCurrencyOpen(false); }}
                      className={cn(
                        "flex w-full px-3 py-1.5 text-left text-xs transition-colors hover:bg-zinc-800",
                        c === currency ? "text-green-400 font-medium" : "text-zinc-400",
                      )}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-green-500/10 border border-green-500/20">
              <Wallet className="w-3.5 h-3.5 text-green-400" />
              <span className="text-green-400 text-sm font-bold">
                {user ? formatBalance(user.balance) : "—"}
              </span>
            </div>

            {user && (
              <div className="hidden sm:flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-50 text-xs font-bold">
                  {user.name[0]}{user.surname[0]}
                </div>
                <span className="text-zinc-300 text-sm font-medium">{user.name}</span>
              </div>
            )}
          </div>
        </header>

        <main ref={contentRef} className="flex-1 overflow-y-auto p-4 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
