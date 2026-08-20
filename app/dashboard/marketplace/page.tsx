"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import gsap from "gsap";
import {
  Server, Globe, RefreshCw, Shield, Smartphone, Wifi,
  ShoppingCart, Loader2, Check, Search, SlidersHorizontal, X,
} from "lucide-react";
import { useCurrency } from "@/lib/currency";
import { useDashboard } from "@/lib/dashboard-context";
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
  bandwidth: string;
  speed: string;
  protocol: string;
  authentication: string;
}

const typeConfig: Record<string, { icon: typeof Server; color: string; bg: string; label: string }> = {
  datacenter: { icon: Server, color: "text-blue-400", bg: "bg-blue-500/10", label: "Datacenter" },
  residential: { icon: Globe, color: "text-green-400", bg: "bg-green-500/10", label: "Residential" },
  rotating: { icon: RefreshCw, color: "text-cyan-400", bg: "bg-cyan-500/10", label: "Rotating" },
  dedicated: { icon: Shield, color: "text-violet-400", bg: "bg-violet-500/10", label: "Dedicated" },
  mobile: { icon: Smartphone, color: "text-orange-400", bg: "bg-orange-500/10", label: "Mobile" },
  isp: { icon: Wifi, color: "text-pink-400", bg: "bg-pink-500/10", label: "ISP" },
};

export default function MarketplacePage() {
  const { format } = useCurrency();
  const { refreshUser } = useDashboard();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const [filterType, setFilterType] = useState("all");
  const [filterCountry, setFilterCountry] = useState("all");
  const [filterProtocol, setFilterProtocol] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"price-asc" | "price-desc" | "name">("price-asc");
  const [showFilters, setShowFilters] = useState(false);

  const [buying, setBuying] = useState<string | null>(null);
  const [bought, setBought] = useState<string | null>(null);
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [error, setError] = useState("");

  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("/api/marketplace/products")
      .then((r) => r.json())
      .then((data) => { setProducts(data.products || []); setLoading(false); });
  }, []);

  const countries = useMemo(() => {
    const set = new Set(products.map((p) => p.country));
    return Array.from(set).sort();
  }, [products]);

  const protocols = useMemo(() => {
    const set = new Set(products.map((p) => p.protocol).filter(Boolean));
    return Array.from(set).sort();
  }, [products]);

  const filtered = useMemo(() => {
    let list = products;
    if (filterType !== "all") list = list.filter((p) => p.type === filterType);
    if (filterCountry !== "all") list = list.filter((p) => p.country === filterCountry);
    if (filterProtocol !== "all") list = list.filter((p) => p.protocol?.includes(filterProtocol));
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      list = list.filter((p) => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || p.country.toLowerCase().includes(q));
    }
    list = [...list].sort((a, b) => {
      if (sortBy === "price-asc") return a.pricePerUnit - b.pricePerUnit;
      if (sortBy === "price-desc") return b.pricePerUnit - a.pricePerUnit;
      return a.name.localeCompare(b.name);
    });
    return list;
  }, [products, filterType, filterCountry, filterProtocol, searchQuery, sortBy]);

  useEffect(() => {
    if (!gridRef.current || filtered.length === 0) return;
    gsap.fromTo(gridRef.current.children, { opacity: 0, y: 20, scale: 0.97 }, { opacity: 1, y: 0, scale: 1, duration: 0.35, stagger: 0.04, ease: "power3.out" });
  }, [filtered]);

  const getQty = (id: string) => quantities[id] || 1;
  const setQty = (id: string, v: number) => setQuantities((prev) => ({ ...prev, [id]: Math.max(1, Math.min(50, v)) }));

  const handleBuy = async (productId: string) => {
    setBuying(productId);
    setError("");
    try {
      const res = await fetch("/api/dashboard/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId, quantity: getQty(productId) }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error); setBuying(null); return; }
      setBought(productId);
      setBuying(null);
      await refreshUser();
      setTimeout(() => setBought(null), 2000);
    } catch {
      setError("Network error.");
      setBuying(null);
    }
  };

  const activeFilterCount = [filterType !== "all", filterCountry !== "all", filterProtocol !== "all", searchQuery !== ""].filter(Boolean).length;

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-zinc-50 text-2xl font-bold">Proxy Marketplace</h2>
          <p className="text-zinc-400 text-sm mt-1">{filtered.length} product{filtered.length !== 1 ? "s" : ""} available</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative flex-1 sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search proxies..."
              className="w-full pl-9 pr-4 py-2 bg-zinc-900 border border-zinc-800 rounded-xl text-sm text-zinc-50 placeholder:text-zinc-600 focus:outline-none focus:border-green-500 transition-colors"
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={cn("flex items-center gap-1.5 px-3 py-2 rounded-xl border text-xs font-semibold transition-all", showFilters ? "bg-green-500/10 border-green-500/20 text-green-400" : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:border-zinc-700")}
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            Filters
            {activeFilterCount > 0 && <span className="w-4 h-4 rounded-full bg-green-500 text-zinc-950 text-[10px] font-bold flex items-center justify-center">{activeFilterCount}</span>}
          </button>
        </div>
      </div>

      {showFilters && (
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-zinc-500 text-[10px] font-semibold uppercase tracking-wider mb-1.5">Type</label>
            <select value={filterType} onChange={(e) => setFilterType(e.target.value)} className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-xl text-sm text-zinc-50 focus:outline-none focus:border-green-500 transition-colors">
              <option value="all">All Types</option>
              {Object.entries(typeConfig).map(([k, v]) => <option key={k} value={k}>{v.label}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-zinc-500 text-[10px] font-semibold uppercase tracking-wider mb-1.5">Country</label>
            <select value={filterCountry} onChange={(e) => setFilterCountry(e.target.value)} className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-xl text-sm text-zinc-50 focus:outline-none focus:border-green-500 transition-colors">
              <option value="all">All Countries</option>
              {countries.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-zinc-500 text-[10px] font-semibold uppercase tracking-wider mb-1.5">Protocol</label>
            <select value={filterProtocol} onChange={(e) => setFilterProtocol(e.target.value)} className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-xl text-sm text-zinc-50 focus:outline-none focus:border-green-500 transition-colors">
              <option value="all">All Protocols</option>
              {protocols.map((p) => <option key={p} value={p}>{p}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-zinc-500 text-[10px] font-semibold uppercase tracking-wider mb-1.5">Sort By</label>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value as typeof sortBy)} className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-xl text-sm text-zinc-50 focus:outline-none focus:border-green-500 transition-colors">
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name">Name A-Z</option>
            </select>
          </div>
          {activeFilterCount > 0 && (
            <button onClick={() => { setFilterType("all"); setFilterCountry("all"); setFilterProtocol("all"); setSearchQuery(""); }} className="text-xs text-zinc-500 hover:text-red-400 flex items-center gap-1 transition-colors">
              <X className="w-3 h-3" /> Clear all filters
            </button>
          )}
        </div>
      )}

      <div className="flex flex-wrap gap-2">
        {Object.entries(typeConfig).map(([key, cfg]) => (
          <button key={key} onClick={() => setFilterType(filterType === key ? "all" : key)} className={cn("px-3 py-1.5 rounded-lg text-[11px] font-semibold transition-all duration-200 flex items-center gap-1.5", filterType === key ? `${cfg.bg} ${cfg.color} border border-current/20` : "bg-zinc-900 text-zinc-500 border border-zinc-800 hover:border-zinc-700")}>
            <cfg.icon className="w-3 h-3" />{cfg.label}
          </button>
        ))}
      </div>

      {error && <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">{error}</div>}

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {[1,2,3,4,5,6].map((i) => <div key={i} className="h-64 bg-zinc-900 border border-zinc-800 rounded-2xl animate-pulse" />)}
        </div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-16">
          <ShoppingCart className="w-10 h-10 text-zinc-700 mx-auto mb-3" />
          <p className="text-zinc-400 text-sm">No products match your filters.</p>
        </div>
      ) : (
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {filtered.map((product) => {
            const config = typeConfig[product.type] || typeConfig.datacenter;
            const Icon = config.icon;
            const qty = getQty(product._id);
            const total = product.pricePerUnit * qty;

            return (
              <div key={product._id} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 hover:border-zinc-700 transition-all duration-200 flex flex-col group">
                <div className="flex items-start justify-between mb-3">
                  <div className={`w-9 h-9 rounded-lg ${config.bg} flex items-center justify-center`}>
                    <Icon className={`w-4 h-4 ${config.color}`} />
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className={cn("text-[10px] font-bold px-2 py-0.5 rounded-md", config.bg, config.color)}>{config.label}</span>
                    <span className="text-[10px] text-zinc-600 bg-zinc-800 px-2 py-0.5 rounded-md">{product.countryCode}</span>
                  </div>
                </div>

                <h3 className="text-zinc-50 text-sm font-bold">{product.name}</h3>
                <p className="text-zinc-500 text-xs mt-1 leading-relaxed line-clamp-2">{product.description}</p>

                <div className="grid grid-cols-2 gap-2 mt-3">
                  <div className="bg-zinc-800/50 rounded-lg px-2.5 py-1.5">
                    <p className="text-zinc-600 text-[9px] font-semibold uppercase">Bandwidth</p>
                    <p className="text-zinc-300 text-[11px] font-medium">{product.bandwidth || "Unlimited"}</p>
                  </div>
                  <div className="bg-zinc-800/50 rounded-lg px-2.5 py-1.5">
                    <p className="text-zinc-600 text-[9px] font-semibold uppercase">Speed</p>
                    <p className="text-zinc-300 text-[11px] font-medium">{product.speed || "1 Gbps"}</p>
                  </div>
                  <div className="bg-zinc-800/50 rounded-lg px-2.5 py-1.5">
                    <p className="text-zinc-600 text-[9px] font-semibold uppercase">Protocol</p>
                    <p className="text-zinc-300 text-[11px] font-medium">{product.protocol || "HTTP"}</p>
                  </div>
                  <div className="bg-zinc-800/50 rounded-lg px-2.5 py-1.5">
                    <p className="text-zinc-600 text-[9px] font-semibold uppercase">Duration</p>
                    <p className="text-zinc-300 text-[11px] font-medium">{product.duration} days</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mt-3">
                  {product.features.map((f) => (
                    <span key={f} className="bg-zinc-800 text-zinc-400 text-[9px] font-medium px-1.5 py-0.5 rounded">{f}</span>
                  ))}
                </div>

                <div className="mt-auto pt-4 border-t border-zinc-800/50 flex items-end justify-between gap-3">
                  <div>
                    <span className="text-zinc-50 text-xl font-bold">{format(product.pricePerUnit)}</span>
                    <span className="text-zinc-600 text-[10px] ml-1">/ {product.unit}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex items-center bg-zinc-800 rounded-lg">
                      <button onClick={() => setQty(product._id, qty - 1)} className="px-2 py-1 text-zinc-400 hover:text-zinc-50 text-sm transition-colors">-</button>
                      <span className="text-zinc-50 text-xs font-bold w-6 text-center">{qty}</span>
                      <button onClick={() => setQty(product._id, qty + 1)} className="px-2 py-1 text-zinc-400 hover:text-zinc-50 text-sm transition-colors">+</button>
                    </div>

                    <button
                      onClick={() => handleBuy(product._id)}
                      disabled={buying === product._id || bought === product._id}
                      className={cn(
                        "flex items-center gap-1 px-3 py-1.5 rounded-lg text-[11px] font-semibold transition-all duration-200",
                        bought === product._id ? "bg-green-500 text-zinc-950" : "bg-green-500/10 text-green-400 border border-green-500/20 hover:bg-green-500 hover:text-zinc-950",
                        "disabled:opacity-50",
                      )}
                    >
                      {bought === product._id ? <><Check className="w-3 h-3" /> Done</> : buying === product._id ? <Loader2 className="w-3 h-3 animate-spin" /> : <><ShoppingCart className="w-3 h-3" /> {format(total)}</>}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
