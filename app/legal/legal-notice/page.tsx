import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { COMPANY } from "@/lib/company";

export const metadata: Metadata = {
  title: "Legal Notice & Company Information | Proxium",
  description:
    "Company and service-provider information for Proxium, operated by PRIME OAK VENTURES LIMITED, including registered details, governing law and consumer complaints.",
};

export default function LegalNoticePage() {
  return (
    <LegalPage
      title="Legal Notice & Company Information"
      updated="6 October 2026"
      intro="Applies to worldproxium.com and the Proxium Services. Effective date: as described in the Terms."
      sections={[
        {
          heading: "1. Service provider",
          blocks: [
            { subhead: "Legal name" },
            COMPANY.name,
            { subhead: "Company number" },
            COMPANY.regNumber,
            { subhead: "Contact address" },
            COMPANY.address,
            { subhead: "Website" },
            "https://www.worldproxium.com/",
            { subhead: "Email" },
            COMPANY.email,
          ],
        },
        {
          heading: "2. Service description",
          blocks: [
            "Proxium is a digital proxy service for lawful business, automation, research and personal use. Customers add funds to an internal account balance and purchase available proxy products electronically.",
          ],
        },
        {
          heading: "3. Contract documents and effective dates",
          blocks: [
            "The Terms and Conditions and incorporated policies govern transactions made with Proxium under the applicable version. The order confirmation records service-specific terms. The revision date identifies the text version; the applicable effective date is separately stated when the terms are offered or in an operator change notice for an existing account.",
            "Existing account balances, active purchases and accrued rights are preserved under the documented transition arrangements. Publication of a new operator’s details does not retrospectively change a completed transaction’s seller, release a previous operator or itself transfer contractual obligations.",
          ],
        },
        {
          heading: "4. Electronic communications",
          blocks: [
            "Official customer communications may be sent to the registered email address or displayed in the dashboard. Customers are responsible for maintaining accurate contact information and reviewing service and legal notices.",
          ],
        },
        {
          heading: "5. Intellectual property",
          blocks: [
            "Rights in Proxium materials remain with their respective owners or licensors. We provide the permissions needed for authorised service use. A change of operator does not itself establish that every intellectual property right has transferred. Copying or reuse outside the permissions granted by the Terms requires the relevant owner’s consent unless the law permits it.",
          ],
        },
        {
          heading: "6. External links",
          blocks: [
            `Links to third-party websites are provided for convenience. ${COMPANY.name} does not control or endorse third-party content, availability, privacy or terms and is not responsible for them except where mandatory law provides otherwise.`,
          ],
        },
        {
          heading: "7. Consumer and personal data complaints",
          blocks: [
            "First contact our email or contact address to seek resolution. We explain the outcome and any applicable alternative dispute resolution route for an unresolved consumer contract complaint, without representing a membership or commitment that has not been agreed. Your right to use a competent court is preserved.",
            "For personal data matters, the Privacy Policy and Abuse Reporting and Complaints Procedure provide a separate complaints route, acknowledgement within 30 days, appropriate investigation and communication of the outcome without undue delay. You may also complain to the ICO or another competent authority where applicable.",
          ],
        },
        {
          heading: "8. Applicable law and courts",
          blocks: [
            "Contracts under these policies are governed by the law of England and Wales. Business disputes are subject to the exclusive jurisdiction of its courts, unless a separately agreed enterprise contract provides otherwise. A Consumer retains mandatory protections and jurisdiction rights applicable in the country of habitual residence; no exclusive business jurisdiction clause is imposed on Consumers.",
          ],
        },
        {
          heading: "9. Accuracy and updates",
          blocks: [
            "We aim to keep website and legal information accurate. Product availability, prices, locations and technical details may change. The version shown at confirmation applies to an order, together with the applicable Terms.",
          ],
        },
        {
          heading: "10. Contact",
          blocks: [
            `General, legal, privacy, refund, support and abuse enquiries may be sent to ${COMPANY.email}. Do not send passwords, full card numbers or unnecessary sensitive information by email.`,
          ],
        },
      ]}
    />
  );
}
