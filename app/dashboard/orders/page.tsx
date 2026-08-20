"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { FileText, ChevronDown, ChevronUp, Server } from "lucide-react";
import { useCurrency } from "@/lib/currency";
import { cn } from "@/lib/utils/cn";

interface ProxyDetail {
  ip: string;
  port: number;
  username: string;
  password: string;
  protocol: string;
  expiresAt: string;
}

interface OrderRecord {
  _id: string;
  productName: string;
  productType: string;
  country: string;
  quantity: number;
  totalPrice: number;
  currency: string;
  status: string;
  proxyDetails: ProxyDetail[];
  createdAt: string;
}

export default function OrdersPage() {
  const { format } = useCurrency();
  const [orders, setOrders] = useState<OrderRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState<string | null>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("/api/dashboard/orders")
      .then((r) => r.json())
      .then((data) => {
        setOrders(data.orders || []);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!listRef.current || orders.length === 0) return;
    gsap.fromTo(
      listRef.current.children,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.3, stagger: 0.04, ease: "power2.out" },
    );
  }, [orders]);

  const statusColors: Record<string, string> = {
    active: "bg-green-500/10 text-green-400",
    expired: "bg-zinc-700/30 text-zinc-400",
    cancelled: "bg-red-500/10 text-red-400",
  };

  const typeColors: Record<string, string> = {
    datacenter: "text-cyan-400",
    residential: "text-green-400",
    rotating: "text-violet-400",
    dedicated: "text-amber-400",
    mobile: "text-pink-400",
    isp: "text-blue-400",
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-zinc-50 text-2xl font-bold">Order History</h2>
        <p className="text-zinc-400 text-sm mt-1">All your proxy purchases in one place.</p>
      </div>

      {loading ? (
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-20 bg-zinc-900 border border-zinc-800 rounded-2xl animate-pulse" />
          ))}
        </div>
      ) : orders.length === 0 ? (
        <div className="text-center py-16">
          <div className="w-16 h-16 rounded-2xl bg-zinc-800 flex items-center justify-center mx-auto mb-4">
            <FileText className="w-8 h-8 text-zinc-600" />
          </div>
          <p className="text-zinc-400 text-sm">No orders yet.</p>
          <p className="text-zinc-600 text-xs mt-1">Purchase proxies from the marketplace to see them here.</p>
        </div>
      ) : (
        <div ref={listRef} className="space-y-3">
          {orders.map((order) => {
            const isOpen = expanded === order._id;
            return (
              <div
                key={order._id}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-700 transition-colors"
              >
                <button
                  onClick={() => setExpanded(isOpen ? null : order._id)}
                  className="w-full px-5 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-left"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center shrink-0">
                      <Server className={cn("w-4 h-4", typeColors[order.productType] || "text-zinc-400")} />
                    </div>
                    <div>
                      <p className="text-zinc-50 text-sm font-semibold">{order.productName}</p>
                      <p className="text-zinc-500 text-xs">
                        {order.country} &middot; Qty: {order.quantity} &middot;{" "}
                        {new Date(order.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-zinc-50 text-sm font-bold">
                      {format(order.totalPrice)}
                    </span>
                    <span className={cn("text-[10px] font-semibold px-2.5 py-1 rounded-full", statusColors[order.status] || statusColors.active)}>
                      {order.status}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-zinc-500" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-zinc-500" />
                    )}
                  </div>
                </button>

                {isOpen && order.proxyDetails.length > 0 && (
                  <div className="px-5 pb-4 border-t border-zinc-800 pt-3 space-y-2">
                    <p className="text-zinc-500 text-[10px] font-semibold uppercase tracking-wider mb-2">
                      Proxy Credentials ({order.proxyDetails.length})
                    </p>
                    {order.proxyDetails.map((p, i) => (
                      <div key={i} className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                        <div className="bg-zinc-800/50 rounded-lg px-3 py-2">
                          <p className="text-zinc-600 text-[10px] font-medium">IP</p>
                          <p className="text-zinc-300 text-xs font-mono">{p.ip}</p>
                        </div>
                        <div className="bg-zinc-800/50 rounded-lg px-3 py-2">
                          <p className="text-zinc-600 text-[10px] font-medium">PORT</p>
                          <p className="text-zinc-300 text-xs font-mono">{p.port}</p>
                        </div>
                        <div className="bg-zinc-800/50 rounded-lg px-3 py-2">
                          <p className="text-zinc-600 text-[10px] font-medium">USER</p>
                          <p className="text-zinc-300 text-xs font-mono">{p.username}</p>
                        </div>
                        <div className="bg-zinc-800/50 rounded-lg px-3 py-2">
                          <p className="text-zinc-600 text-[10px] font-medium">PASS</p>
                          <p className="text-zinc-300 text-xs font-mono">{p.password}</p>
                        </div>
                        <div className="bg-zinc-800/50 rounded-lg px-3 py-2">
                          <p className="text-zinc-600 text-[10px] font-medium">EXPIRES</p>
                          <p className="text-zinc-300 text-xs">{new Date(p.expiresAt).toLocaleDateString()}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
