import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { COMPANY } from "@/lib/company";

export const metadata: Metadata = {
  title: "Privacy Policy | Proxium",
  description:
    "How Proxium collects, uses, stores, and protects your personal data, including cookies, data retention, and your rights under the GDPR.",
};

export default function PrivacyPage() {
  return (
    <section className="pt-28 pb-20 lg:pt-36 lg:pb-28 bg-zinc-950">
      <Container>
        <div className="max-w-3xl mx-auto">
          <span className="inline-flex items-center bg-green-500/10 text-green-400 border border-green-500/20 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide">
            Legal
          </span>
          <h1 className="text-zinc-50 text-4xl lg:text-5xl font-bold tracking-tight mt-4">
            Privacy Policy
          </h1>
          <p className="text-zinc-500 text-sm mt-4">Last updated: 20 August 2026</p>

          <div className="mt-12 space-y-10 text-zinc-400 leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-zinc-50 text-2xl font-bold tracking-tight">
                1. Who we are
              </h2>
              <p>
                This Privacy Policy explains how {COMPANY.name} (&quot;we&quot;, &quot;us&quot;,
                &quot;Proxium&quot;) collects, uses, and protects your personal data when you use
                the Proxium website and services. {COMPANY.name} is the data controller
                responsible for your personal data. Registered address: {COMPANY.address}.
                Reg. No.: {COMPANY.regNumber}.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-zinc-50 text-2xl font-bold tracking-tight">
                2. Data we collect
              </h2>
              <p>
                When you register for an account and use our services, we collect the
                following categories of personal data:
              </p>
              <ul className="list-disc space-y-2 pl-6 marker:text-green-500">
                <li>First name and last name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Date of birth</li>
                <li>Billing and residential address</li>
                <li>
                  Account and transaction data, such as your balance, top-up history, and
                  proxy purchases
                </li>
                <li>
                  Technical data, such as IP address, browser type, and device
                  information collected automatically when you use the site
                </li>
              </ul>
              <p>
                Payment card details are processed directly by our PCI-DSS compliant
                payment providers and are not stored on our servers.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-zinc-50 text-2xl font-bold tracking-tight">
                3. How we use your data
              </h2>
              <p>We process your personal data to:</p>
              <ul className="list-disc space-y-2 pl-6 marker:text-green-500">
                <li>Create and manage your account and verify your identity</li>
                <li>Process top-ups, purchases, refunds, and issue invoices</li>
                <li>Provide, maintain, and improve our proxy services</li>
                <li>Provide customer support and respond to your enquiries</li>
                <li>Detect, prevent, and address fraud, abuse, and security issues</li>
                <li>Comply with legal, tax, and regulatory obligations</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-zinc-50 text-2xl font-bold tracking-tight">
                4. Legal basis for processing
              </h2>
              <p>
                We process your data on the basis of contractual necessity (to provide the
                services you request), our legitimate interests (to secure and improve our
                services), your consent (for optional cookies and marketing), and
                compliance with legal obligations (such as tax and anti-fraud requirements).
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-zinc-50 text-2xl font-bold tracking-tight">
                5. Cookies
              </h2>
              <p>
                We use cookies and similar technologies to operate the website and improve
                your experience. Essential cookies are required for core functionality such
                as authentication and maintaining your session, and cannot be disabled.
                Non-essential cookies (for example, analytics) are only set with your
                consent, which you can give or decline through our cookie banner on your
                first visit. You can also manage cookies through your browser settings.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-zinc-50 text-2xl font-bold tracking-tight">
                6. Data retention
              </h2>
              <p>
                We retain your personal data only for as long as necessary to provide the
                services and fulfil the purposes described in this policy, including
                meeting legal, accounting, and tax obligations. Transaction and invoicing
                records are typically retained for the period required by applicable law.
                When data is no longer needed, we securely delete or anonymize it.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-zinc-50 text-2xl font-bold tracking-tight">
                7. Sharing your data
              </h2>
              <p>
                We do not sell your personal data. We share it only with trusted service
                providers who help us operate our business, such as payment processors,
                infrastructure providers, and support tools, all of whom are bound by
                confidentiality and data protection obligations. We may also disclose data
                where required by law or to protect our legal rights.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-zinc-50 text-2xl font-bold tracking-tight">
                8. Your rights under the GDPR
              </h2>
              <p>
                If you are located in the European Economic Area, you have the following
                rights regarding your personal data:
              </p>
              <ul className="list-disc space-y-2 pl-6 marker:text-green-500">
                <li>The right to access the personal data we hold about you</li>
                <li>The right to rectification of inaccurate or incomplete data</li>
                <li>The right to erasure (&quot;the right to be forgotten&quot;)</li>
                <li>The right to restrict or object to processing</li>
                <li>The right to data portability</li>
                <li>The right to withdraw consent at any time</li>
                <li>The right to lodge a complaint with a supervisory authority</li>
              </ul>
              <p>
                To exercise any of these rights, contact us at{" "}
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-green-400 transition-colors hover:text-green-300"
                >
                  {COMPANY.email}
                </a>
                .
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-zinc-50 text-2xl font-bold tracking-tight">
                9. Data security
              </h2>
              <p>
                We implement appropriate technical and organizational measures to protect
                your personal data against unauthorized access, loss, or misuse. However,
                no method of transmission or storage is completely secure, and we cannot
                guarantee absolute security.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-zinc-50 text-2xl font-bold tracking-tight">
                10. Contact
              </h2>
              <p>
                If you have questions about this Privacy Policy or how we handle your data,
                please contact {COMPANY.name} at{" "}
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-green-400 transition-colors hover:text-green-300"
                >
                  {COMPANY.email}
                </a>
                . Registered address: {COMPANY.address}.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </section>
  );
}
