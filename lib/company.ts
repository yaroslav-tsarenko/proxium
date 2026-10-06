// Central company / legal-entity details, sourced from env with fallbacks.
// NEXT_PUBLIC_ vars are inlined at build time so they work in client components too.
export const COMPANY = {
  name: process.env.NEXT_PUBLIC_COMPANY_NAME ?? "PRIME OAK VENTURES LIMITED",
  regNumber: process.env.NEXT_PUBLIC_COMPANY_REG ?? "17474169",
  vat: process.env.NEXT_PUBLIC_COMPANY_VAT ?? "",
  phone: process.env.NEXT_PUBLIC_COMPANY_PHONE ?? "",
  address:
    process.env.NEXT_PUBLIC_COMPANY_ADDRESS ??
    "Office 448 Unit 5 399-405 Oxford Street, Mayfair, London, United Kingdom, W1C 2BU",
  email: process.env.NEXT_PUBLIC_COMPANY_EMAIL ?? "info@worldproxium.com",
} as const;
