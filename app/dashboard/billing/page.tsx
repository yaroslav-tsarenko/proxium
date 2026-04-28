"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { CreditCard, ArrowDownLeft, ArrowUpRight, Filter } from "lucide-react";
import { useCurrency } from "@/lib/currency";
import { useDashboard } from "@/lib/dashboard-context";
import { cn } from "@/lib/utils/cn";

type TxnType = "all" | "purchase" | "topup";

interface Transaction {
  id: string;
  type: "purchase" | "topup";
  label: string;
  amount: number;
  date: string;
  status: string;
  reference?: string;
}

export default function BillingPage() {
  const { symbol } = useCurrency();
  const { user } = useDashboard();
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<TxnType>("all");
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    Promise.all([
      fetch("/api/dashboard/orders").then((r) => r.json()),
      fetch("/api/dashboard/balance").then((r) => r.json()),
    ]).then(([ordersData, balanceData]) => {
      const purchases: Transaction[] = (ordersData.orders || []).map((o: Record<string, unknown>) => ({
        id: o._id as string,
        type: "purchase" as const,
        label: o.productName as string,
        amount: -(o.totalPrice as number),
        date: o.createdAt as string,
        status: o.status as string,
      }));

      const topups: Transaction[] = (balanceData.topups || []).map((t: Record<string, unknown>) => ({
        id: t._id as string,
        type: "topup" as const,
        label: `Top-up (${(t.method as string) || "card"})`,
        amount: t.amount as number,
        date: t.createdAt as string,
        status: t.status as string,
        reference: t.reference as string,
      }));

      const merged = [...purchases, ...topups].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
      );
      setTransactions(merged);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (!listRef.current || transactions.length === 0) return;
    gsap.fromTo(
      listRef.current.children,
      { opacity: 0, x: -10 },
      { opacity: 1, x: 0, duration: 0.3, stagger: 0.03, ease: "power2.out" },
    );
  }, [transactions, filter]);

  const filtered = filter === "all" ? transactions : transactions.filter((t) => t.type === filter);

  const totalSpent = transactions.filter((t) => t.type === "purchase").reduce((s, t) => s + Math.abs(t.amount), 0);
  const totalAdded = transactions.filter((t) => t.type === "topup" && t.status === "completed").reduce((s, t) => s + t.amount, 0);

  const statusColors: Record<string, string> = {
    active: "bg-green-500/10 text-green-400",
    completed: "bg-green-500/10 text-green-400",
    expired: "bg-zinc-700/30 text-zinc-400",
    pending: "bg-yellow-500/10 text-yellow-400",
    failed: "bg-red-500/10 text-red-400",
    cancelled: "bg-red-500/10 text-red-400",
  };

  const filterButtons: { value: TxnType; label: string }[] = [
    { value: "all", label: "All" },
    { value: "purchase", label: "Purchases" },
    { value: "topup", label: "Top-Ups" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-zinc-50 text-2xl font-bold">Billing</h2>
        <p className="text-zinc-400 text-sm mt-1">Overview of all financial activity on your account.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
          <p className="text-zinc-500 text-xs font-medium">Current Balance</p>
          <p className="text-green-400 text-2xl font-bold mt-1">
            {user ? `${symbol}${(user.balance / 100).toFixed(2)}` : "—"}
          </p>
        </div>
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
          <p className="text-zinc-500 text-xs font-medium">Total Added</p>
          <p className="text-cyan-400 text-2xl font-bold mt-1">{symbol}{(totalAdded / 100).toFixed(2)}</p>
        </div>
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
          <p className="text-zinc-500 text-xs font-medium">Total Spent</p>
          <p className="text-zinc-50 text-2xl font-bold mt-1">{symbol}{(totalSpent / 100).toFixed(2)}</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Filter className="w-3.5 h-3.5 text-zinc-500" />
        {filterButtons.map((btn) => (
          <button
            key={btn.value}
            onClick={() => setFilter(btn.value)}
            className={cn(
              "px-3 py-1.5 rounded-lg text-xs font-medium transition-colors",
              filter === btn.value
                ? "bg-green-500/10 text-green-400"
                : "text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800",
            )}
          >
            {btn.label}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="space-y-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-14 bg-zinc-900 border border-zinc-800 rounded-xl animate-pulse" />
          ))}
        </div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-16">
          <div className="w-16 h-16 rounded-2xl bg-zinc-800 flex items-center justify-center mx-auto mb-4">
            <CreditCard className="w-8 h-8 text-zinc-600" />
          </div>
          <p className="text-zinc-400 text-sm">No transactions yet.</p>
        </div>
      ) : (
        <div ref={listRef} className="space-y-2">
          {filtered.map((txn) => (
            <div
              key={txn.id}
              className="bg-zinc-900 border border-zinc-800 rounded-xl px-5 py-3 flex items-center justify-between hover:border-zinc-700 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className={cn(
                  "w-8 h-8 rounded-lg flex items-center justify-center",
                  txn.type === "topup" ? "bg-cyan-500/10" : "bg-zinc-800",
                )}>
                  {txn.type === "topup" ? (
                    <ArrowDownLeft className="w-4 h-4 text-cyan-400" />
                  ) : (
                    <ArrowUpRight className="w-4 h-4 text-zinc-400" />
                  )}
                </div>
                <div>
                  <p className="text-zinc-50 text-sm font-medium">{txn.label}</p>
                  <p className="text-zinc-600 text-[10px]">
                    {new Date(txn.date).toLocaleDateString()} &middot; {new Date(txn.date).toLocaleTimeString()}
                    {txn.reference && <span className="ml-1 font-mono">&middot; {txn.reference}</span>}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className={cn("text-sm font-bold", txn.amount > 0 ? "text-green-400" : "text-zinc-50")}>
                  {txn.amount > 0 ? "+" : ""}
                  {symbol}{(Math.abs(txn.amount) / 100).toFixed(2)}
                </span>
                <span className={cn("text-[10px] font-semibold px-2 py-0.5 rounded-full", statusColors[txn.status] || statusColors.completed)}>
                  {txn.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
