"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { Server, Copy, Check, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils/cn";

interface Proxy {
  orderId: string;
  productName: string;
  productType: string;
  country: string;
  ip: string;
  port: number;
  username: string;
  password: string;
  protocol: string;
  expiresAt: string;
}

export default function ProxiesPage() {
  const [proxies, setProxies] = useState<Proxy[]>([]);
  const [copied, setCopied] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const tableRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("/api/dashboard/proxies")
      .then((r) => r.json())
      .then((data) => {
        setProxies(data.proxies || []);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!tableRef.current || proxies.length === 0) return;
    gsap.fromTo(
      tableRef.current.children,
      { opacity: 0, x: -10 },
      { opacity: 1, x: 0, duration: 0.3, stagger: 0.04, ease: "power2.out" },
    );
  }, [proxies]);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 1500);
  };

  const getStatus = (expiresAt: string) => {
    const diff = new Date(expiresAt).getTime() - Date.now();
    if (diff <= 0) return { label: "Expired", color: "bg-red-500/10 text-red-400" };
    if (diff < 3 * 24 * 60 * 60 * 1000) return { label: "Expiring Soon", color: "bg-yellow-500/10 text-yellow-400" };
    return { label: "Active", color: "bg-green-500/10 text-green-400" };
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-zinc-50 text-2xl font-bold">My Proxies</h2>
        <p className="text-zinc-400 text-sm mt-1">View and copy credentials for your active proxies.</p>
      </div>

      {loading ? (
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-20 bg-zinc-900 border border-zinc-800 rounded-2xl animate-pulse" />
          ))}
        </div>
      ) : proxies.length === 0 ? (
        <div className="text-center py-16">
          <div className="w-16 h-16 rounded-2xl bg-zinc-800 flex items-center justify-center mx-auto mb-4">
            <Server className="w-8 h-8 text-zinc-600" />
          </div>
          <p className="text-zinc-400 text-sm">No active proxies yet.</p>
          <p className="text-zinc-600 text-xs mt-1">Purchase proxies from the marketplace to get started.</p>
        </div>
      ) : (
        <div ref={tableRef} className="space-y-3">
          {proxies.map((proxy, i) => {
            const status = getStatus(proxy.expiresAt);
            const connString = `${proxy.ip}:${proxy.port}:${proxy.username}:${proxy.password}`;
            const id = `${proxy.orderId}-${i}`;

            return (
              <div
                key={id}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 hover:border-zinc-700 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center shrink-0">
                      <Server className="w-4 h-4 text-zinc-400" />
                    </div>
                    <div>
                      <p className="text-zinc-50 text-sm font-semibold">{proxy.productName}</p>
                      <p className="text-zinc-500 text-xs">{proxy.country} &middot; {proxy.protocol}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className={cn("text-[10px] font-semibold px-2.5 py-1 rounded-full", status.color)}>
                      {status.label}
                    </span>
                    {status.label === "Expiring Soon" && <AlertCircle className="w-3.5 h-3.5 text-yellow-400" />}
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-1 sm:grid-cols-4 gap-3">
                  <div className="bg-zinc-800/50 rounded-lg px-3 py-2">
                    <p className="text-zinc-600 text-[10px] font-medium">IP</p>
                    <p className="text-zinc-300 text-xs font-mono">{proxy.ip}</p>
                  </div>
                  <div className="bg-zinc-800/50 rounded-lg px-3 py-2">
                    <p className="text-zinc-600 text-[10px] font-medium">PORT</p>
                    <p className="text-zinc-300 text-xs font-mono">{proxy.port}</p>
                  </div>
                  <div className="bg-zinc-800/50 rounded-lg px-3 py-2">
                    <p className="text-zinc-600 text-[10px] font-medium">USER</p>
                    <p className="text-zinc-300 text-xs font-mono">{proxy.username}</p>
                  </div>
                  <div className="bg-zinc-800/50 rounded-lg px-3 py-2">
                    <p className="text-zinc-600 text-[10px] font-medium">PASS</p>
                    <p className="text-zinc-300 text-xs font-mono">{proxy.password}</p>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between">
                  <p className="text-zinc-600 text-[10px]">
                    Expires: {new Date(proxy.expiresAt).toLocaleDateString()}
                  </p>
                  <button
                    onClick={() => copyToClipboard(connString, id)}
                    className="flex items-center gap-1.5 text-xs font-medium text-zinc-500 hover:text-green-400 transition-colors"
                  >
                    {copied === id ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                    {copied === id ? "Copied" : "Copy all"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
