import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { COMPANY } from "@/lib/company";

export const metadata: Metadata = {
  title: "Privacy Policy | Proxium",
  description:
    "How Proxium collects, uses, stores, and protects your personal data, including cookies, data retention, and your rights under the GDPR.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="20 August 2026"
      intro="Applies to worldproxium.com and the Proxium Services."
      sections={[
        {
          heading: "1. Scope and controller",
          blocks: [
            `This Privacy Policy explains how ${COMPANY.name} (“Proxium”, “we”, “us” or “our”) collects and uses personal data in connection with worldproxium.com, account registration, payments, customer support and the Proxium proxy Services.`,
            `${COMPANY.name}, registry code ${COMPANY.regNumber}, ${COMPANY.address}, is the controller of the personal data described in this Policy. Contact: ${COMPANY.email}.`,
          ],
        },
        {
          heading: "2. Personal data we collect",
          blocks: [
            { subhead: "Registration and identity data" },
            "Name, surname, email address, telephone number, date of birth, password credentials in protected form, country and information supplied to confirm identity, age, authority or eligibility.",
            { subhead: "Address and billing data" },
            "Residential or business address, postal code, city, country, company details, tax information, billing currency, invoice details and payment status. Full card data is handled by payment providers and is not intended to be stored by Proxium.",
            { subhead: "Account and transaction data" },
            "Account identifier, balance, top-ups, purchases, refunds, invoices, payment references, currency, products purchased, service validity, account status and enforcement history.",
            { subhead: "Website and security data" },
            "IP address used to access the website or dashboard, browser and device information, authentication events, security alerts, cookie preferences and logs needed to secure the website and account.",
            { subhead: "Support and communications data" },
            "Messages, tickets, complaints, abuse reports, attachments, call or chat information where applicable, and records of our response.",
            { subhead: "Marketing data" },
            "Subscription status, consent records, campaign interaction and communication preferences.",
            { subhead: "Compliance and fraud data" },
            "Location indicators, payment-risk signals, restricted-country checks, sanctions screening results, use-case information and records of decisions necessary to protect the Services.",
          ],
        },
        {
          heading: "3. Proxy traffic and connection data",
          blocks: [
            "No retained proxy traffic logs. Proxium does not store a connection history identifying source IP addresses, destination domains or URLs, assigned proxy IP addresses, connection timestamps, session duration or traffic content in the ordinary provision of its proxy Services.",
            "Network data technically necessary to route an active connection may be processed transiently in memory or within upstream network infrastructure. Aggregated totals may be calculated where required to apply a traffic allowance or show account-level usage, without retaining a record of individual destinations or connections.",
            "This no-logging statement concerns traffic passing through the proxy Service. It does not mean that Proxium cannot process separate website, dashboard, account, payment, security or support data described elsewhere in this Policy.",
          ],
        },
        {
          heading: "4. Sources of data",
          blocks: [
            "We obtain data directly from you, from your use of the website and dashboard, from payment and fraud-prevention providers, from business representatives, and from lawful compliance or abuse-reporting sources. We may infer country or risk indicators from account, IP, billing and payment information.",
          ],
        },
        {
          heading: "5. Purposes and legal bases",
          blocks: [
            "To create and administer an account, accept top-ups, fulfil purchases, deliver proxies, provide support and process refunds, based on performance of a contract.",
            "To secure accounts and infrastructure, prevent fraud and abuse, improve reliability, enforce policies and defend legal claims, based on our legitimate interests.",
            "To issue invoices, maintain accounting records, respond to lawful requests, apply sanctions restrictions and comply with tax or other legal obligations.",
            "To send optional marketing and use non-essential cookies where you have consented, or where another lawful basis expressly applies.",
            "To establish, exercise or defend legal rights and to protect customers, Proxium and third parties from harm.",
            "Where processing is based on legitimate interests, we consider the necessity and impact of the processing and implement safeguards appropriate to the risk. You may object as described below.",
          ],
        },
        {
          heading: "6. Customer data and roles",
          blocks: [
            "Proxium is the controller of account, transaction, website, security, compliance and support data. A Customer independently determines which third-party sites to access and what data to collect or process using a proxy. The Customer is responsible for its own legal basis, notices, permissions and compliance.",
            "Unless Proxium signs a separate data processing agreement expressly covering a particular managed processing service, Proxium does not act as the Customer’s processor merely because network traffic is routed through a proxy.",
          ],
        },
        {
          heading: "7. Cookies and similar technologies",
          blocks: [
            "Essential cookies are used to operate the website, maintain sessions, secure accounts and remember privacy choices. Analytics, advertising or other non-essential technologies are used only after consent where required. Details and controls are provided in the Cookie Policy and consent interface.",
          ],
        },
        {
          heading: "8. Sharing personal data",
          blocks: [
            "We may share only the data reasonably necessary with service providers supporting payment processing, card fraud prevention, hosting, infrastructure, email delivery, customer support, analytics, security, professional advice and accounting. Providers must act under appropriate confidentiality and data protection obligations.",
            "We may disclose data to authorities, courts, payment networks, rights holders or affected parties where required by law or reasonably necessary to investigate fraud, security incidents, abuse or legal claims. We do not sell personal data.",
            "Data may be transferred in connection with a merger, financing, reorganisation or sale of assets, subject to lawful safeguards and continued protection.",
          ],
        },
        {
          heading: "9. International transfers",
          blocks: [
            "Some providers may process personal data outside Estonia or the European Economic Area. Where required, we use an adequacy decision, standard contractual clauses or another lawful transfer mechanism and apply supplementary safeguards appropriate to the risk.",
          ],
        },
        {
          heading: "10. Retention",
          blocks: [
            "We retain registration and account data while the account is active and thereafter for the period reasonably required to resolve disputes, prevent fraud and comply with law. Transaction, invoice and accounting records are retained for the period required by applicable tax and accounting rules. Support, security and compliance records are retained according to their sensitivity and legal relevance.",
            "Consent and marketing records are kept while needed to demonstrate preferences or compliance. Data is deleted or anonymised when no longer required. Retention may be extended where a legal hold, dispute, chargeback, abuse investigation or lawful authority request applies.",
          ],
        },
        {
          heading: "11. Security",
          blocks: [
            "We use reasonable technical and organisational measures designed to protect personal data, including access controls, authentication safeguards, network protection, provider due diligence and data minimisation. No system is completely secure. You must protect account credentials and notify us of suspected compromise.",
          ],
        },
        {
          heading: "12. Automated checks",
          blocks: [
            "Automated signals may be used to detect payment fraud, restricted locations, account abuse or security threats. Where a decision produces a legal or similarly significant effect and applicable law requires it, you may request human review, express your position and contest the decision.",
          ],
        },
        {
          heading: "13. Your rights",
          blocks: [
            "Subject to GDPR conditions and exceptions, you may request access, correction, deletion, restriction, portability or objection, and may withdraw consent at any time without affecting earlier lawful processing. You may also lodge a complaint with the Estonian data protection supervisory authority or the authority in your EEA country of residence.",
            `Send requests to ${COMPANY.email}. We may verify identity before responding and may retain information needed to document the request or comply with legal obligations.`,
          ],
        },
        {
          heading: "14. Children",
          blocks: [
            "The Services are not intended for persons under 18. We do not knowingly permit a minor to create an account. Contact us if you believe a minor has supplied personal data.",
          ],
        },
        {
          heading: "15. Marketing",
          blocks: [
            "You may receive marketing only where permitted by law. You can unsubscribe using the link in a message or by contacting us. Opting out of marketing does not stop essential account, security, payment or service notices.",
          ],
        },
        {
          heading: "16. Changes and contact",
          blocks: [
            `We may update this Policy to reflect changes in law, providers or the Services. The current version will be published with its update date. Questions and rights requests should be sent to ${COMPANY.name} at ${COMPANY.email} or to the registered address stated above.`,
          ],
        },
      ]}
    />
  );
}
