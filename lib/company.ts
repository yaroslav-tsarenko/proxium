// Central company / legal-entity details, sourced from env with fallbacks.
// NEXT_PUBLIC_ vars are inlined at build time so they work in client components too.
export const COMPANY = {
  name: process.env.NEXT_PUBLIC_COMPANY_NAME ?? "PRONTOWARE OÜ",
  regNumber: process.env.NEXT_PUBLIC_COMPANY_REG ?? "17578967",
  vat: process.env.NEXT_PUBLIC_COMPANY_VAT ?? "",
  phone: process.env.NEXT_PUBLIC_COMPANY_PHONE ?? "",
  address:
    process.env.NEXT_PUBLIC_COMPANY_ADDRESS ??
    "Tornimäe tn 7, 10145, Kesklinna linnaosa, Tallinn, Harju maakond, Estonia",
  email: process.env.NEXT_PUBLIC_COMPANY_EMAIL ?? "info@worldproxium.com",
} as const;
