import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { COMPANY } from "@/lib/company";

export const metadata: Metadata = {
  title: "Legal Notice & Company Information | Proxium",
  description:
    "Company and service-provider information for Proxium, operated by PRONTOWARE OÜ, including registered details, governing law and consumer complaints.",
};

export default function LegalNoticePage() {
  return (
    <LegalPage
      title="Legal Notice & Company Information"
      updated="20 August 2026"
      intro="Applies to worldproxium.com and the Proxium Services."
      sections={[
        {
          heading: "1. Service provider",
          blocks: [
            { subhead: "Legal name" },
            COMPANY.name,
            { subhead: "Registry code" },
            COMPANY.regNumber,
            { subhead: "Registered address" },
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
          heading: "3. Contract documents",
          blocks: [
            "Use of the website and Services is governed by the Terms & Conditions and the policies contained in this consolidated document. Product-specific details shown at checkout or in an order confirmation also apply.",
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
            `The Proxium name, website content, software, interfaces, documentation, graphics and branding are owned by ${COMPANY.name} or its licensors and may not be copied, reproduced or used without permission except as allowed by law or the Terms.`,
          ],
        },
        {
          heading: "6. External links",
          blocks: [
            `Links to third-party websites are provided for convenience. ${COMPANY.name} does not control or endorse third-party content, availability, privacy or terms and is not responsible for them except where mandatory law provides otherwise.`,
          ],
        },
        {
          heading: "7. Consumer complaints",
          blocks: [
            `Consumers should first submit a complaint to ${COMPANY.email}. A consumer may also use any competent alternative dispute resolution body or consumer authority available under mandatory law. Nothing limits a consumer’s right to seek a judicial remedy.`,
          ],
        },
        {
          heading: "8. Governing law",
          blocks: [
            "The contractual relationship is governed by Estonian law, subject to mandatory consumer protections and jurisdiction rights that apply in the consumer’s country of residence.",
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
