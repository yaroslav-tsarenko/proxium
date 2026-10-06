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
      updated="6 October 2026"
      intro="Applies to worldproxium.com and the Proxium Services. Effective date: as described in the Terms."
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
            `Send reports to ${COMPANY.email} with the subject line "Abuse Report". For urgent threats to life or immediate serious harm, contact the appropriate emergency or law-enforcement authority first.`,
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
          heading: "9. Customer service complaints",
          blocks: [
            `Send billing, delivery, service-quality or account-enforcement complaints to ${COMPANY.email}. Supply a transaction reference if available, the facts and the resolution sought. We may ask for proportionate identity information, but do not refuse a valid complaint solely because it is not sent from the registered email.`,
            "We investigate and respond within a reasonable time, keeping you informed where further work is needed. A customer may request review of the outcome. If a consumer contract complaint remains unresolved, we explain any applicable alternative dispute resolution route and whether participation is required or offered. This procedure does not claim membership of a particular ADR scheme.",
          ],
        },
        {
          heading: "10. Personal data complaints and rights requests",
          blocks: [
            `A complaint about our handling of personal information may be made by email to ${COMPANY.email} or by post to ${COMPANY.address}. A representative may act with authority. Describe the concern and the requested outcome; a particular form or legal wording is not required.`,
            "We acknowledge a data protection complaint within 30 days of receipt, take appropriate steps to investigate without undue delay, keep the complainant reasonably informed and communicate the outcome without undue delay. A general statement that no response time is guaranteed does not override this duty.",
            "An access, erasure or other individual rights request has its own legal response deadline, normally one month subject to lawful exceptions or extensions. The complaint acknowledgement period does not replace it. You may complain to the ICO at https://ico.org.uk/make-a-complaint/ or a competent EEA authority where applicable; a complaint to us does not remove that right.",
          ],
        },
        {
          heading: "11. Appeals",
          blocks: [
            "A Customer may request review of a suspension or termination by explaining why the decision was incorrect or what remediation has been completed. Review may consider severity, recurrence, cooperation, evidence and ongoing risk. Access need not be restored while review is pending.",
          ],
        },
        {
          heading: "12. Legal requests",
          blocks: [
            `Authorities should identify the issuing authority, legal basis, scope, account or transaction sought, and an official contact. Requests must be properly addressed to ${COMPANY.name} and comply with applicable jurisdiction and procedure. We may seek clarification, challenge an overbroad request and notify an affected person where lawful.`,
          ],
        },
        {
          heading: "13. Response times and outcomes",
          blocks: [
            "Urgent, well-supported abuse reports are assessed promptly according to risk, but no fixed service-support response time is promised. Statutory complaint, individual rights, cancellation and refund deadlines continue to apply and take priority over this general statement. Privacy or legal constraints may limit disclosure of another customer’s information or the enforcement action taken.",
          ],
        },
      ]}
    />
  );
}
