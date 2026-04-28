"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

export type Currency = "USD" | "EUR" | "GBP";

export const currencySymbols: Record<Currency, string> = {
  USD: "$",
  EUR: "€",
  GBP: "£",
};

type CurrencyContextValue = {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  symbol: string;
};

const CurrencyContext = createContext<CurrencyContextValue>({
  currency: "USD",
  setCurrency: () => {},
  symbol: "$",
});

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrency] = useState<Currency>("USD");

  return (
    <CurrencyContext.Provider
      value={{ currency, setCurrency, symbol: currencySymbols[currency] }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  return useContext(CurrencyContext);
}
