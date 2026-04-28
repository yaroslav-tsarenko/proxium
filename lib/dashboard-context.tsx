"use client";

import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react";

interface UserData {
  name: string;
  surname: string;
  email: string;
  balance: number;
  phone: string;
  address: { street: string; city: string; country: string; postCode: string };
}

interface DashboardContextValue {
  user: UserData | null;
  refreshUser: () => Promise<void>;
}

const DashboardContext = createContext<DashboardContextValue>({
  user: null,
  refreshUser: async () => {},
});

export function DashboardProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserData | null>(null);

  const refreshUser = useCallback(async () => {
    try {
      const res = await fetch("/api/auth/me");
      const data = await res.json();
      if (data.user) setUser(data.user);
    } catch { /* ignore */ }
  }, []);

  useEffect(() => { refreshUser(); }, [refreshUser]);

  return (
    <DashboardContext.Provider value={{ user, refreshUser }}>
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboard() {
  return useContext(DashboardContext);
}
