import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { COMPANY } from "@/lib/company";

export const metadata: Metadata = {
  title: "Acceptable Use Policy | Proxium",
  description:
    "The rules governing acceptable use of Proxium proxy services, including prohibited activities and the consequences of violations.",
};

export default function AcceptableUsePage() {
  return (
    <section className="pt-28 pb-20 lg:pt-36 lg:pb-28 bg-zinc-950">
      <Container>
        <div className="max-w-3xl mx-auto">
          <span className="inline-flex items-center bg-green-500/10 text-green-400 border border-green-500/20 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide">
            Legal
          </span>
          <h1 className="text-zinc-50 text-4xl lg:text-5xl font-bold tracking-tight mt-4">
            Acceptable Use Policy
          </h1>
          <p className="text-zinc-500 text-sm mt-4">Last updated: 20 August 2026</p>

          <div className="mt-12 space-y-10 text-zinc-400 leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-zinc-50 text-2xl font-bold tracking-tight">
                1. Purpose
              </h2>
              <p>
                This Acceptable Use Policy (&quot;AUP&quot;) sets out the rules for using the proxy
                services provided by {COMPANY.name} (&quot;we&quot;, &quot;us&quot;, &quot;Proxium&quot;). It applies
                to every user of the Services and forms part of our Terms &amp; Conditions.
                By using any Proxium proxy, you agree to comply with this AUP. We provide
                proxies for legitimate business and personal purposes only.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-zinc-50 text-2xl font-bold tracking-tight">
                2. Prohibited activities
              </h2>
              <p>
                You must not use Proxium proxies, or allow anyone else to use them, for any
                unlawful, harmful, or abusive purpose. Prohibited activities include, but
                are not limited to:
              </p>
              <ul className="list-disc space-y-2 pl-6 marker:text-green-500">
                <li>
                  Sending unsolicited bulk messages, spam, or any form of unauthorized
                  mass communication
                </li>
                <li>
                  Fraud, phishing, identity theft, carding, or any other deceptive or
                  financially harmful activity
                </li>
                <li>
                  Hacking, unauthorized access to systems or accounts, credential
                  stuffing, or circumventing security controls
                </li>
                <li>
                  Launching or facilitating denial-of-service (DoS) or distributed
                  denial-of-service (DDoS) attacks, or any other network abuse
                </li>
                <li>
                  Distributing malware, viruses, ransomware, or other malicious code
                </li>
                <li>
                  Accessing, storing, or distributing content that is illegal in the
                  applicable jurisdiction, including child sexual abuse material, content
                  that promotes terrorism, or other prohibited content
                </li>
                <li>
                  Infringing the intellectual property rights, privacy, or other rights of
                  third parties
                </li>
                <li>
                  Violating the terms of service of any third-party website or platform,
                  or evading lawful access restrictions in a manner that causes harm
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-zinc-50 text-2xl font-bold tracking-tight">
                3. Network integrity
              </h2>
              <p>
                You must not use the Services in a way that impairs, overloads, or
                interferes with our infrastructure, other customers&apos; use of the Services,
                or the networks and systems of third parties. This includes excessive or
                abusive request volumes intended to disrupt a target service.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-zinc-50 text-2xl font-bold tracking-tight">
                4. Compliance with law
              </h2>
              <p>
                You are solely responsible for ensuring that your use of the proxies
                complies with all applicable laws and regulations in your jurisdiction and
                in the jurisdictions you access through the Services. Legality of a
                particular activity may vary by location; it is your responsibility to
                verify this before use.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-zinc-50 text-2xl font-bold tracking-tight">
                5. Reporting abuse
              </h2>
              <p>
                If you become aware of any violation of this AUP, or wish to report abuse
                originating from our network, please contact us at{" "}
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-green-400 transition-colors hover:text-green-300"
                >
                  {COMPANY.email}
                </a>
                . We investigate all reports and take appropriate action.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-zinc-50 text-2xl font-bold tracking-tight">
                6. Consequences of violations
              </h2>
              <p>
                Violation of this AUP may result in immediate suspension or termination of
                your account without refund of your remaining balance, removal of access
                to any active proxies, and forfeiture of any funds spent on the offending
                activity. Where a violation involves unlawful conduct, we may preserve
                relevant records and cooperate with, or make referrals to, law enforcement
                and other competent authorities. We reserve the right to take any other
                action we consider necessary to protect our infrastructure, our customers,
                and third parties.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-zinc-50 text-2xl font-bold tracking-tight">
                7. Changes to this policy
              </h2>
              <p>
                We may update this Acceptable Use Policy from time to time to reflect
                changes in our services or legal requirements. Continued use of the
                Services after any update constitutes acceptance of the revised policy.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-zinc-50 text-2xl font-bold tracking-tight">
                8. Contact
              </h2>
              <p>
                Questions about this Acceptable Use Policy can be directed to {COMPANY.name}
                at{" "}
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
