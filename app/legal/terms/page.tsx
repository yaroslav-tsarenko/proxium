import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { COMPANY } from "@/lib/company";

export const metadata: Metadata = {
  title: "Terms & Conditions | Proxium",
  description:
    "The terms and conditions governing your use of Proxium proxy services, including our balance-based billing model, refunds, pricing, and jurisdiction.",
};

export default function TermsPage() {
  return (
    <section className="pt-28 pb-20 lg:pt-36 lg:pb-28 bg-zinc-950">
      <Container>
        <div className="max-w-3xl mx-auto">
          <span className="inline-flex items-center bg-green-500/10 text-green-400 border border-green-500/20 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide">
            Legal
          </span>
          <h1 className="text-zinc-50 text-4xl lg:text-5xl font-bold tracking-tight mt-4">
            Terms &amp; Conditions
          </h1>
          <p className="text-zinc-500 text-sm mt-4">Last updated: 20 August 2026</p>

          <div className="mt-12 space-y-10 text-zinc-400 leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-zinc-50 text-2xl font-bold tracking-tight">
                1. Agreement to terms
              </h2>
              <p>
                These Terms &amp; Conditions (&quot;Terms&quot;) constitute a legally binding
                agreement between you (&quot;you&quot;, &quot;the customer&quot;) and {COMPANY.name}
                (&quot;we&quot;, &quot;us&quot;, &quot;Proxium&quot;) governing your access to and use of the
                Proxium website, dashboard, and proxy services (collectively, the
                &quot;Services&quot;). By creating an account, topping up your balance, or using
                any proxy, you confirm that you have read, understood, and agree to be
                bound by these Terms. If you do not agree, you must not use the Services.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-zinc-50 text-2xl font-bold tracking-tight">
                2. The Services
              </h2>
              <p>
                Proxium provides access to datacenter, static residential, rotating
                residential, and dedicated proxy resources. Proxies are made available
                for lawful use only, subject to our Acceptable Use Policy. We do not
                guarantee uninterrupted availability of any specific proxy, IP address,
                or geographic location, though we maintain high uptime across our
                infrastructure.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-zinc-50 text-2xl font-bold tracking-tight">
                3. Balance-based billing
              </h2>
              <p>
                Proxium operates on a prepaid, balance-based model. You add funds to your
                account balance (&quot;top-up&quot;) and spend that balance on the proxies you
                choose to purchase. There are no recurring subscriptions, automatic
                renewals, or hidden periodic charges. Your balance is deducted only when
                you make a purchase, and you retain full control over what you buy and
                when.
              </p>
              <p>
                Account balances are denominated in the currency shown at checkout and
                are non-transferable between accounts. Top-up amounts are credited to your
                balance once payment has been successfully processed.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-zinc-50 text-2xl font-bold tracking-tight">
                4. Pricing and taxes
              </h2>
              <p>
                All prices are displayed before you confirm a purchase. Where applicable,
                prices include Value Added Tax (VAT) at the prevailing rate. If your
                jurisdiction or tax status requires a different treatment, the applicable
                tax will be calculated and shown at checkout. You are responsible for any
                additional local taxes, duties, or bank charges that may apply to your
                payment.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-zinc-50 text-2xl font-bold tracking-tight">
                5. Refunds
              </h2>
              <p>
                Unused account balance may be refunded within fourteen (14) days of the
                corresponding top-up by contacting our support team at{" "}
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-green-400 transition-colors hover:text-green-300"
                >
                  {COMPANY.email}
                </a>
                . Refunds are issued to the original payment method for the unused portion
                of your balance only; funds already spent on activated or delivered
                proxies are non-refundable except where required by applicable consumer
                protection law. We reserve the right to decline refund requests that show
                evidence of abuse or violation of these Terms.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-zinc-50 text-2xl font-bold tracking-tight">
                6. Merchant of Record
              </h2>
              <p>
                {COMPANY.name} acts as the Merchant of Record for all transactions made
                through Proxium. This means {COMPANY.name} is the seller of record
                responsible for processing payments, issuing invoices, and handling
                applicable taxes for your purchases. Payment card details are processed by
                PCI-DSS compliant payment providers and are never stored on our servers.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-zinc-50 text-2xl font-bold tracking-tight">
                7. Acceptable use
              </h2>
              <p>
                Your use of the Services is subject to our Acceptable Use Policy. You must
                not use Proxies for any unlawful, harmful, or abusive activity. Violation
                of the Acceptable Use Policy may result in immediate suspension or
                termination of your account without refund, and where appropriate, referral
                to law enforcement.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-zinc-50 text-2xl font-bold tracking-tight">
                8. Account responsibility
              </h2>
              <p>
                You are responsible for maintaining the confidentiality of your account
                credentials and for all activity that occurs under your account. You must
                notify us immediately of any unauthorized use. We are not liable for losses
                arising from your failure to safeguard your credentials.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-zinc-50 text-2xl font-bold tracking-tight">
                9. Limitation of liability
              </h2>
              <p>
                To the maximum extent permitted by law, Proxium&apos;s total liability arising
                out of or relating to the Services shall not exceed the amount you paid to
                us in the three (3) months preceding the event giving rise to the claim. We
                are not liable for indirect, incidental, or consequential damages, including
                loss of profits or data.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-zinc-50 text-2xl font-bold tracking-tight">
                10. Governing law and jurisdiction
              </h2>
              <p>
                These Terms are governed by the laws applicable at the registered seat of
                {COMPANY.name}, {COMPANY.address}. Any dispute arising from or in connection
                with these Terms shall be subject to the jurisdiction of the competent
                courts at that location, without prejudice to any mandatory consumer rights
                you may have in your country of residence.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-zinc-50 text-2xl font-bold tracking-tight">
                11. Changes to these Terms
              </h2>
              <p>
                We may update these Terms from time to time. Material changes will be
                communicated through the website or by email. Your continued use of the
                Services after changes take effect constitutes acceptance of the revised
                Terms.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-zinc-50 text-2xl font-bold tracking-tight">
                12. Contact
              </h2>
              <p>
                Questions about these Terms can be directed to {COMPANY.name} at{" "}
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-green-400 transition-colors hover:text-green-300"
                >
                  {COMPANY.email}
                </a>
                . Registered address: {COMPANY.address}. Reg. No.: {COMPANY.regNumber}.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </section>
  );
}
