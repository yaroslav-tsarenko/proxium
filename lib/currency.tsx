"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

export type Currency = "USD" | "EUR" | "GBP";

export const currencySymbols: Record<Currency, string> = {
  USD: "$",
  EUR: "€",
  GBP: "£",
};

// Exchange rates relative to USD (the base currency amounts are stored in).
export const exchangeRates: Record<Currency, number> = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.79,
};

type CurrencyContextValue = {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  symbol: string;
  /** Convert a USD amount into the selected currency (numeric). */
  convert: (amountUsd: number) => number;
  /** Format an amount stored in USD cents into the selected currency string. */
  format: (amountUsdCents: number) => string;
};

const CurrencyContext = createContext<CurrencyContextValue>({
  currency: "USD",
  setCurrency: () => {},
  symbol: "$",
  convert: (a) => a,
  format: (a) => `$${(a / 100).toFixed(2)}`,
});

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrency] = useState<Currency>("USD");

  const convert = useCallback(
    (amountUsd: number) => amountUsd * exchangeRates[currency],
    [currency],
  );

  const format = useCallback(
    (amountUsdCents: number) =>
      `${currencySymbols[currency]}${((amountUsdCents / 100) * exchangeRates[currency]).toFixed(2)}`,
    [currency],
  );

  return (
    <CurrencyContext.Provider
      value={{ currency, setCurrency, symbol: currencySymbols[currency], convert, format }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  return useContext(CurrencyContext);
}
