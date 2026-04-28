"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { Server, Globe, RefreshCw, Shield, Smartphone, Wifi, ShoppingCart, Loader2, Check } from "lucide-react";
import { useCurrency } from "@/lib/currency";
import { cn } from "@/lib/utils/cn";

interface Product {
  _id: string;
  name: string;
  type: string;
  country: string;
  countryCode: string;
  pricePerUnit: number;
  unit: string;
  duration: number;
  description: string;
  features: string[];
}

const typeConfig: Record<string, { icon: typeof Server; color: string; bg: string }> = {
  datacenter: { icon: Server, color: "text-blue-400", bg: "bg-blue-500/10" },
  residential: { icon: Globe, color: "text-green-400", bg: "bg-green-500/10" },
  rotating: { icon: RefreshCw, color: "text-cyan-400", bg: "bg-cyan-500/10" },
  dedicated: { icon: Shield, color: "text-violet-400", bg: "bg-violet-500/10" },
  mobile: { icon: Smartphone, color: "text-orange-400", bg: "bg-orange-500/10" },
  isp: { icon: Wifi, color: "text-pink-400", bg: "bg-pink-500/10" },
};

const typeLabels: Record<string, string> = {
  all: "All",
  datacenter: "Datacenter",
  residential: "Residential",
  rotating: "Rotating",
  dedicated: "Dedicated",
  mobile: "Mobile",
};

export default function MarketplacePage() {
  const { symbol } = useCurrency();
  const [products, setProducts] = useState<Product[]>([]);
  const [filter, setFilter] = useState("all");
  const [buying, setBuying] = useState<string | null>(null);
  const [bought, setBought] = useState<string | null>(null);
  const [error, setError] = useState("");
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("/api/marketplace/products")
      .then((r) => r.json())
      .then((data) => setProducts(data.products || []));
  }, []);

  useEffect(() => {
    if (!gridRef.current || products.length === 0) return;
    gsap.fromTo(
      gridRef.current.children,
      { opacity: 0, y: 20, scale: 0.97 },
      { opacity: 1, y: 0, scale: 1, duration: 0.4, stagger: 0.05, ease: "power3.out" },
    );
  }, [products, filter]);

  const handleBuy = async (productId: string) => {
    setBuying(productId);
    setError("");
    try {
      const res = await fetch("/api/dashboard/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId, quantity: 1 }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Purchase failed.");
        setBuying(null);
        return;
      }
      setBought(productId);
      setBuying(null);
      setTimeout(() => setBought(null), 2000);
    } catch {
      setError("Network error.");
      setBuying(null);
    }
  };

  const filtered = filter === "all" ? products : products.filter((p) => p.type === filter);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-zinc-50 text-2xl font-bold">Marketplace</h2>
        <p className="text-zinc-400 text-sm mt-1">Browse and purchase proxies with your balance.</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {Object.entries(typeLabels).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setFilter(key)}
            className={cn(
              "px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200",
              filter === key
                ? "bg-green-500/10 text-green-400 border border-green-500/20"
                : "bg-zinc-900 text-zinc-400 border border-zinc-800 hover:border-zinc-700",
            )}
          >
            {label}
          </button>
        ))}
      </div>

      {error && (
        <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
          {error}
        </div>
      )}

      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {filtered.map((product) => {
          const config = typeConfig[product.type] || typeConfig.datacenter;
          const Icon = config.icon;
          return (
            <div
              key={product._id}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-700 transition-all duration-200 flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-10 h-10 rounded-xl ${config.bg} flex items-center justify-center`}>
                  <Icon className={`w-5 h-5 ${config.color}`} />
                </div>
                <span className="text-xs font-semibold text-zinc-500 bg-zinc-800 px-2.5 py-1 rounded-lg">
                  {product.type}
                </span>
              </div>

              <h3 className="text-zinc-50 font-bold">{product.name}</h3>
              <p className="text-zinc-500 text-xs mt-1">{product.description}</p>

              <div className="flex flex-wrap gap-1.5 mt-3">
                {product.features.map((f) => (
                  <span key={f} className="bg-zinc-800 text-zinc-400 text-[10px] font-medium px-2 py-0.5 rounded-md">
                    {f}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-5 flex items-end justify-between">
                <div>
                  <span className="text-zinc-50 text-2xl font-bold">
                    {symbol}{(product.pricePerUnit / 100).toFixed(2)}
                  </span>
                  <span className="text-zinc-500 text-xs ml-1">/ {product.unit}</span>
                  <p className="text-zinc-600 text-[10px]">{product.duration} days</p>
                </div>
                <button
                  onClick={() => handleBuy(product._id)}
                  disabled={buying === product._id || bought === product._id}
                  className={cn(
                    "flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200",
                    bought === product._id
                      ? "bg-green-500 text-zinc-950"
                      : "bg-green-500/10 text-green-400 border border-green-500/20 hover:bg-green-500 hover:text-zinc-950",
                    "disabled:opacity-50",
                  )}
                >
                  {bought === product._id ? (
                    <><Check className="w-3.5 h-3.5" /> Bought</>
                  ) : buying === product._id ? (
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  ) : (
                    <><ShoppingCart className="w-3.5 h-3.5" /> Buy</>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {filtered.length === 0 && products.length > 0 && (
        <div className="text-center py-12 text-zinc-500 text-sm">
          No products found for this filter.
        </div>
      )}
    </div>
  );
}
