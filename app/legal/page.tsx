import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { COMPANY } from "@/lib/company";

export const metadata: Metadata = {
  title: "Legal Policies | Proxium",
  description:
    "The legal and operational policies governing Proxium: terms, privacy, cookies, acceptable use, payments, refunds, delivery, eligibility and abuse reporting.",
};

const policies = [
  {
    href: "/legal/terms",
    title: "Terms & Conditions",
    description:
      "The agreement governing your account, orders, balance, and use of the Proxium Services.",
  },
  {
    href: "/legal/privacy",
    title: "Privacy Policy",
    description:
      "How we collect, use, share and protect personal data, and your rights under the GDPR.",
  },
  {
    href: "/legal/cookies",
    title: "Cookie Policy",
    description:
      "Cookies and similar technologies we use, their categories, and how to manage consent.",
  },
  {
    href: "/legal/acceptable-use",
    title: "Acceptable Use Policy",
    description:
      "Prohibited activity and the rules that protect customers, third parties and the network.",
  },
  {
    href: "/legal/payment",
    title: "Payment & Account Balance Policy",
    description:
      "Top-ups, currencies, the prepaid balance, invoices, payment review and chargebacks.",
  },
  {
    href: "/legal/refund",
    title: "Refund & Cancellation Policy",
    description:
      "When a top-up or purchased proxy may be refunded, and how to request a refund.",
  },
  {
    href: "/legal/delivery",
    title: "Digital Delivery & Service Fulfilment Policy",
    description:
      "How proxy access is delivered electronically, delivery timing, and credential security.",
  },
  {
    href: "/legal/restricted-countries",
    title: "Restricted Countries & Eligibility Policy",
    description:
      "Geographic, sanctions and risk restrictions that apply to accounts and payments.",
  },
  {
    href: "/legal/abuse",
    title: "Abuse Reporting & Complaints Procedure",
    description:
      "How to report misuse, and how customers may complain or appeal an enforcement action.",
  },
  {
    href: "/legal/legal-notice",
    title: "Legal Notice & Company Information",
    description:
      "Service-provider details, governing law, and how to reach us for legal matters.",
  },
] as const;

export default function LegalIndexPage() {
  return (
    <section className="pt-28 pb-20 lg:pt-36 lg:pb-28 bg-zinc-950">
      <Container>
        <div className="max-w-3xl mx-auto">
          <span className="inline-flex items-center bg-green-500/10 text-green-400 border border-green-500/20 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide">
            Legal
          </span>
          <h1 className="text-zinc-50 text-4xl lg:text-5xl font-bold tracking-tight mt-4">
            Legal Policies
          </h1>
          <p className="text-zinc-400 leading-relaxed mt-6">
            The public legal and operational policies governing Proxium. Each policy
            operates as a distinct document, while the Terms &amp; Conditions incorporate
            the others by reference.
          </p>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {policies.map(({ href, title, description }) => (
              <Link
                key={href}
                href={href}
                className="group rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 transition-colors hover:border-green-500/40 hover:bg-zinc-900"
              >
                <h2 className="text-zinc-50 text-lg font-semibold tracking-tight group-hover:text-green-400 transition-colors">
                  {title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {description}
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 text-sm leading-relaxed text-zinc-400">
            <p className="font-medium text-zinc-300">{COMPANY.name}</p>
            <p>Registry code {COMPANY.regNumber}</p>
            <p>{COMPANY.address}</p>
            <p>
              <a
                href={`mailto:${COMPANY.email}`}
                className="text-green-400 transition-colors hover:text-green-300"
              >
                {COMPANY.email}
              </a>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
