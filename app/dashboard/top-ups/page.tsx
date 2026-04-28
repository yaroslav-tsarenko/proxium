"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { Receipt, Wallet, Plus, Loader2, Check, X } from "lucide-react";
import { useCurrency } from "@/lib/currency";
import { useDashboard } from "@/lib/dashboard-context";
import { cn } from "@/lib/utils/cn";

interface TopUpRecord {
  _id: string;
  amount: number;
  currency: string;
  method: string;
  status: string;
  reference: string;
  createdAt: string;
}

const presetAmounts = [500, 1000, 2500, 5000, 10000, 25000];

export default function TopUpsPage() {
  const { symbol, currency } = useCurrency();
  const { refreshUser } = useDashboard();
  const [topups, setTopups] = useState<TopUpRecord[]>([]);
  const [balance, setBalance] = useState(0);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [amount, setAmount] = useState(1000);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const tableRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const fetchData = () => {
    fetch("/api/dashboard/balance")
      .then((r) => r.json())
      .then((data) => {
        setBalance(data.balance ?? 0);
        setTopups(data.topups || []);
        setLoading(false);
      });
  };

  useEffect(() => { fetchData(); }, []);

  useEffect(() => {
    if (!tableRef.current || topups.length === 0) return;
    gsap.fromTo(
      tableRef.current.children,
      { opacity: 0, x: -10 },
      { opacity: 1, x: 0, duration: 0.3, stagger: 0.04, ease: "power2.out" },
    );
  }, [topups]);

  useEffect(() => {
    if (!showModal || !modalRef.current) return;
    gsap.fromTo(
      modalRef.current,
      { opacity: 0, scale: 0.95, y: 20 },
      { opacity: 1, scale: 1, y: 0, duration: 0.3, ease: "power3.out" },
    );
  }, [showModal]);

  const handleTopUp = async () => {
    setSubmitting(true);
    try {
      const res = await fetch("/api/dashboard/balance", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount, currency, method: "card" }),
      });
      if (res.ok) {
        setSuccess(true);
        setTimeout(() => {
          setShowModal(false);
          setSuccess(false);
          setSubmitting(false);
          fetchData();
          refreshUser();
        }, 1500);
      } else {
        setSubmitting(false);
      }
    } catch {
      setSubmitting(false);
    }
  };

  const statusColors: Record<string, string> = {
    completed: "bg-green-500/10 text-green-400",
    pending: "bg-yellow-500/10 text-yellow-400",
    failed: "bg-red-500/10 text-red-400",
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-zinc-50 text-2xl font-bold">Top-Up History</h2>
          <p className="text-zinc-400 text-sm mt-1">
            Current balance: <span className="text-green-400 font-bold">{symbol}{(balance / 100).toFixed(2)}</span>
          </p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-green-500 text-zinc-950 text-sm font-semibold hover:bg-green-400 transition-colors shadow-[0_0_20px_rgba(34,197,94,0.3)]"
        >
          <Plus className="w-4 h-4" />
          Top Up
        </button>
      </div>

      {loading ? (
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-16 bg-zinc-900 border border-zinc-800 rounded-2xl animate-pulse" />
          ))}
        </div>
      ) : topups.length === 0 ? (
        <div className="text-center py-16">
          <div className="w-16 h-16 rounded-2xl bg-zinc-800 flex items-center justify-center mx-auto mb-4">
            <Receipt className="w-8 h-8 text-zinc-600" />
          </div>
          <p className="text-zinc-400 text-sm">No top-ups yet.</p>
          <p className="text-zinc-600 text-xs mt-1">Add funds to start purchasing proxies.</p>
        </div>
      ) : (
        <div ref={tableRef} className="space-y-2">
          <div className="hidden sm:grid grid-cols-5 gap-4 px-5 py-2 text-zinc-600 text-[10px] font-semibold uppercase tracking-wider">
            <span>Date</span>
            <span>Amount</span>
            <span>Method</span>
            <span>Reference</span>
            <span>Status</span>
          </div>
          {topups.map((t) => (
            <div key={t._id} className="bg-zinc-900 border border-zinc-800 rounded-xl px-5 py-3 grid grid-cols-1 sm:grid-cols-5 gap-2 sm:gap-4 items-center hover:border-zinc-700 transition-colors">
              <span className="text-zinc-400 text-xs">
                {new Date(t.createdAt).toLocaleDateString()}
              </span>
              <span className="text-zinc-50 text-sm font-bold">
                +{symbol}{(t.amount / 100).toFixed(2)}
              </span>
              <span className="text-zinc-400 text-xs capitalize">{t.method}</span>
              <span className="text-zinc-500 text-[10px] font-mono">{t.reference}</span>
              <span className={cn("text-[10px] font-semibold px-2.5 py-1 rounded-full w-fit", statusColors[t.status] || statusColors.pending)}>
                {t.status}
              </span>
            </div>
          ))}
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div ref={modalRef} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 w-full max-w-md">
            {success ? (
              <div className="flex flex-col items-center py-6">
                <div className="w-14 h-14 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                  <Check className="w-7 h-7 text-green-400" />
                </div>
                <p className="text-zinc-50 font-bold text-lg">Top-up successful!</p>
                <p className="text-zinc-400 text-sm mt-1">{symbol}{(amount / 100).toFixed(2)} added</p>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-zinc-50 text-lg font-bold flex items-center gap-2">
                    <Wallet className="w-5 h-5 text-green-400" />
                    Add Funds
                  </h3>
                  <button onClick={() => setShowModal(false)} className="text-zinc-500 hover:text-zinc-300 transition-colors">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-2 mb-4">
                  {presetAmounts.map((a) => (
                    <button
                      key={a}
                      onClick={() => setAmount(a)}
                      className={cn(
                        "py-2.5 rounded-xl text-sm font-semibold transition-all duration-200",
                        amount === a
                          ? "bg-green-500 text-zinc-950"
                          : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700",
                      )}
                    >
                      {symbol}{(a / 100).toFixed(0)}
                    </button>
                  ))}
                </div>

                <div className="mb-6">
                  <label className="block text-zinc-400 text-xs mb-2">Custom amount (cents)</label>
                  <input
                    type="number"
                    min={500}
                    step={100}
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-zinc-50 text-sm focus:outline-none focus:border-green-500 transition-colors"
                  />
                </div>

                <button
                  onClick={handleTopUp}
                  disabled={submitting || amount < 500}
                  className="w-full py-3.5 rounded-xl bg-green-500 text-zinc-950 font-semibold text-sm hover:bg-green-400 transition-colors shadow-[0_0_20px_rgba(34,197,94,0.3)] disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
                  Add {symbol}{(amount / 100).toFixed(2)}
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
