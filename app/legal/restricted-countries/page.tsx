import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { COMPANY } from "@/lib/company";

export const metadata: Metadata = {
  title: "Restricted Countries & Eligibility Policy | Proxium",
  description:
    "Geographic, sanctions and risk restrictions that apply to registration, payment, account access and use of the Proxium Services.",
};

export default function RestrictedCountriesPolicyPage() {
  return (
    <LegalPage
      title="Restricted Countries & Eligibility Policy"
      updated="20 August 2026"
      intro="Applies to worldproxium.com and the Proxium Services."
      sections={[
        {
          heading: "1. Purpose",
          blocks: [
            "This Restricted Countries & Eligibility Policy describes geographic, sanctions and risk restrictions for Proxium. It forms part of the Terms & Conditions and applies to registration, payment, account access and use of the Services.",
          ],
        },
        {
          heading: "2. Restricted countries",
          blocks: [
            "Proxium is not available to persons located, resident, established or ordinarily operating in the following countries or territories, and payments connected to them are not accepted:",
            {
              list: [
                "Afghanistan",
                "Belarus",
                "Central African Republic",
                "Cuba",
                "Democratic Republic of the Congo",
                "Haiti",
                "Iran",
                "Iraq",
                "Mali",
                "Myanmar (Burma)",
                "North Korea",
                "Russia",
                "Somalia",
                "South Sudan",
                "Sudan",
                "Syria",
                "Venezuela",
                "Yemen",
                "Zimbabwe",
              ],
            },
          ],
        },
        {
          heading: "3. Combined eligibility assessment",
          blocks: [
            "Eligibility is assessed from the circumstances as a whole. We may consider current physical location, residence, nationality where legally relevant, company registration and operations, billing and residential address, payment instrument and issuer country, account-access IP, telephone country code, documents, beneficial ownership, sanctions matches, use case and other risk indicators.",
            "A single apparently permitted data point does not override other information showing a restricted connection. Proxium may request clarification or supporting evidence.",
          ],
        },
        {
          heading: "4. Sanctioned and prohibited persons",
          blocks: [
            "The Services are not available to any person or entity subject to applicable asset-freeze, blocking, export-control or similar restrictions, or to a person acting for or owned or controlled by such a person, regardless of country.",
          ],
        },
        {
          heading: "5. No circumvention",
          blocks: [
            "You must not use a VPN, proxy, nominee, false address, third-party card, shell company or inaccurate information to conceal a restricted connection or evade verification. You must not resell or make the Services available to a person you know or should know is ineligible.",
          ],
        },
        {
          heading: "6. Screening and decisions",
          blocks: [
            "We and our payment or compliance providers may perform automated and manual checks at registration, payment and during the account relationship. We may refuse, suspend, terminate, hold or refund a transaction where eligibility cannot be established or risk is unacceptable.",
            `Where legally permitted, a person may request review by contacting ${COMPANY.email} and supplying accurate supporting information. Proxium is not required to disclose confidential screening rules or information whose disclosure would undermine security or legal compliance.`,
          ],
        },
        {
          heading: "7. Changes to restrictions",
          blocks: [
            "The list and criteria may change because of law, sanctions, payment-network rules, provider availability or risk. A country not listed is not guaranteed access if another eligibility restriction applies. The current published version controls new registrations and transactions.",
          ],
        },
        {
          heading: "8. Customer obligation",
          blocks: [
            "You must notify us if location, residence, company ownership, sanctions status or other material eligibility information changes. Continued use after becoming ineligible is prohibited.",
          ],
        },
      ]}
    />
  );
}
