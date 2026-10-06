import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Restricted Countries & Eligibility Policy | Proxium",
  description:
    "Geographic, sanctions and risk restrictions that apply to registration, payment, account access and use of the Proxium Services.",
};

export default function RestrictedCountriesPolicyPage() {
  return (
    <LegalPage
      title="Restricted Countries & Eligibility Policy"
      updated="6 October 2026"
      intro="Applies to worldproxium.com and the Proxium Services. Effective date: as described in the Terms."
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
            "As a commercial service and payment-risk restriction, Proxium is unavailable to persons located, resident, established or ordinarily operating in the following countries, and payments connected with them are not accepted. This service list is not a claim that every listed country is subject to a comprehensive UK sanctions ban:",
            "Afghanistan; Belarus; Central African Republic; Cuba; Democratic Republic of the Congo; Haiti; Iran; Iraq; Mali; Myanmar (Burma); North Korea; Russia; Somalia; South Sudan; Sudan; Syria; Venezuela; Yemen; Zimbabwe.",
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
          heading: "4. UK sanctions and prohibited persons",
          blocks: [
            "Separate from the commercial country list, we comply with UK sanctions applying to the company, including relevant financial and trade restrictions. The UK Sanctions List is the current source of UK designations; applicable regulations determine the actual prohibition. Relevant restrictions may also arise under another law that applies to a transaction.",
            "We do not provide a service or make funds or economic resources available where prohibited, including to a designated person or an entity owned or controlled by a designated person under the applicable legal test. Location in a permitted country does not override a personal, ownership or control restriction. A nationality alone is not treated as proof that a person is sanctioned.",
            "Restrictions, exceptions and licences are applied according to the relevant law. This Policy does not represent that Proxium holds a sanctions licence or that any transaction has been approved by an authority.",
          ],
        },
        {
          heading: "5. No circumvention",
          blocks: [
            "You must not use a VPN, proxy, nominee, false address, third-party card, shell company or inaccurate information to conceal a restricted connection or evade verification. You must not resell or make the Services available to a person you know or should know is ineligible.",
          ],
        },
        {
          heading: "6. Checks, decisions and review",
          blocks: [
            "We and relevant providers may use proportionate manual or automated eligibility and payment checks. We may request information necessary to clarify location, ownership, control, payment ownership or proposed use, and refuse or restrict supply where required by law or where a documented service restriction applies.",
            "We explain the decision and a review route where lawful, without disclosing security-sensitive or prohibited information. A customer may request review at our contact email. Any balance, transaction or refund remains subject to its contractual and statutory treatment; it is not automatically forfeited because screening is incomplete. A legally frozen amount is handled under the applicable prohibition and release process.",
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
