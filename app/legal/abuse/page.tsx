import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { COMPANY } from "@/lib/company";

export const metadata: Metadata = {
  title: "Abuse Reporting & Complaints Procedure | Proxium",
  description:
    "How to report suspected misuse of Proxium Services, what information to include, how reports are handled, and how customers may complain or appeal.",
};

export default function AbusePolicyPage() {
  return (
    <LegalPage
      title="Abuse Reporting & Complaints Procedure"
      updated="20 August 2026"
      intro="Applies to worldproxium.com and the Proxium Services."
      sections={[
        {
          heading: "1. Purpose",
          blocks: [
            "This procedure explains how customers, website operators, rights holders, security researchers, public authorities and other affected persons may report suspected misuse of Proxium Services, and how customers may complain or appeal an enforcement action.",
          ],
        },
        {
          heading: "2. Reporting channel",
          blocks: [
            `Send reports to ${COMPANY.email} with the subject line “Abuse Report”. For urgent threats to life or immediate serious harm, contact the appropriate emergency or law-enforcement authority first.`,
          ],
        },
        {
          heading: "3. Information to include",
          blocks: [
            {
              list: [
                "Your name, organisation and a reliable reply address.",
                "A clear description of the suspected activity and why it is unlawful or harmful.",
                "The affected domain, system, account, IP address or resource.",
                "Accurate timestamps with time zone, relevant request identifiers and concise technical evidence.",
                "Steps already taken and any continuing urgency or safety risk.",
                "For intellectual-property reports, identification of the protected work or right and your authority to act.",
              ],
            },
            "Do not send passwords, full payment-card data, unnecessary identity documents, child sexual abuse material, malware or other unlawful content. Describe such material and request a secure submission method if evidence is necessary.",
          ],
        },
        {
          heading: "4. Acknowledgement and triage",
          blocks: [
            "We review reports according to severity, credibility, available evidence and potential harm. We may acknowledge receipt, request clarification, correlate the report with account and transaction information lawfully held, apply preventive controls or refer the matter to an appropriate provider or authority.",
          ],
        },
        {
          heading: "5. Possible action",
          blocks: [
            {
              list: [
                "Block or limit a destination, port, protocol, credential or traffic pattern.",
                "Require a customer explanation, remediation or additional verification.",
                "Rotate, disable or withdraw proxy access.",
                "Suspend or terminate an account under the Terms and Acceptable Use Policy.",
                "Preserve information already held where legally justified.",
                "Notify an affected party, provider, payment network or authority where lawful and proportionate.",
              ],
            },
          ],
        },
        {
          heading: "6. No retained proxy traffic logs",
          blocks: [
            "Proxium does not retain connection logs identifying proxy source, destination, URL, assigned proxy IP, timestamps or traffic content in the ordinary provision of the Service. An investigation is therefore based on evidence supplied by the reporter and on account, payment, security, support or aggregated operational information lawfully available. Proxium cannot provide records that were never retained.",
          ],
        },
        {
          heading: "7. Confidentiality and data protection",
          blocks: [
            "Reports are handled on a need-to-know basis. Information may be shared with the relevant customer or third party where necessary to investigate, but we may withhold reporter identity or sensitive details where lawful and appropriate. Personal data is processed under the Privacy Policy.",
          ],
        },
        {
          heading: "8. Reporter responsibilities",
          blocks: [
            "A report must be accurate, made in good faith and limited to what is relevant. Knowingly false, abusive, retaliatory or misleading reports may be rejected and may expose the reporter to legal responsibility.",
          ],
        },
        {
          heading: "9. Customer complaints",
          blocks: [
            `A Customer may complain about billing, delivery, service quality, privacy or account enforcement by emailing ${COMPANY.email} from the registered address. Include the order or account reference, facts, supporting material and requested resolution.`,
          ],
        },
        {
          heading: "10. Appeals",
          blocks: [
            "A Customer may request review of a suspension or termination by explaining why the decision was incorrect or what remediation has been completed. Review may consider severity, recurrence, cooperation, evidence and ongoing risk. Access need not be restored while review is pending.",
          ],
        },
        {
          heading: "11. Legal requests",
          blocks: [
            `Authorities should identify the issuing authority, legal basis, scope, account or transaction sought, and an official contact. Requests must be properly addressed to ${COMPANY.name} and comply with applicable jurisdiction and procedure. We may seek clarification, challenge an overbroad request and notify an affected person where lawful.`,
          ],
        },
        {
          heading: "12. Response times and outcomes",
          blocks: [
            "We aim to address urgent, well-supported reports promptly, but do not guarantee a fixed response or resolution time. Privacy, security and legal constraints may prevent us from disclosing the customer, evidence reviewed or action taken.",
          ],
        },
      ]}
    />
  );
}
