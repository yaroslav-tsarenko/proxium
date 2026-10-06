import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { COMPANY } from "@/lib/company";

export const metadata: Metadata = {
  title: "Privacy Policy | Proxium",
  description:
    "How Proxium collects, uses, stores, and protects your personal data, including cookies, data retention, and your rights under the UK GDPR.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="6 October 2026"
      intro="Applies to worldproxium.com and the Proxium Services. Effective date: as described in the Terms."
      sections={[
        {
          heading: "1. Scope, controller and applicable law",
          blocks: [
            `This Privacy Policy explains how ${COMPANY.name} (Proxium, we, us or our), company number ${COMPANY.regNumber}, handles personal information for worldproxium.com, account administration, payment, support, security and the proxy Services. Our contact address is ${COMPANY.address}. Contact: ${COMPANY.email}.`,
            "Our processing is subject to the UK General Data Protection Regulation (UK GDPR), the Data Protection Act 2018 and applicable amendments, including the Data (Use and Access) Act 2025. The EU GDPR also applies to processing within its territorial scope. A person’s applicable rights are not removed by the operator being based in the United Kingdom.",
            "For an existing account, our controller role starts when the relevant information is lawfully transferred or otherwise brought under our control, as explained in the operator notice. The revision date of this Policy is not the date on which that transfer necessarily occurred.",
          ],
        },
        {
          heading: "2. Personal data we collect",
          blocks: [
            "The categories below describe information used for the relevant functions where supplied, generated or reasonably necessary. We collect only what is proportionate for the purpose; they do not mean every category is collected from every customer.",
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
            {
              list: [
                "To create and administer an account, accept top-ups, fulfil purchases, deliver proxies, provide support and process refunds, based on performance of a contract.",
                "To secure accounts and infrastructure, prevent fraud and abuse, improve reliability, enforce policies and defend legal claims, based on our legitimate interests.",
                "To issue invoices, maintain accounting records, respond to lawful requests, apply sanctions restrictions and comply with tax or other legal obligations.",
                "To send optional marketing and use non-essential cookies where you have consented, or where another lawful basis expressly applies.",
                "To establish, exercise or defend legal rights and to protect customers, Proxium and third parties from harm.",
              ],
            },
            "Where processing is based on legitimate interests, we consider the necessity and impact of the processing and implement safeguards appropriate to the risk. You may object as described below.",
          ],
        },
        {
          heading: "6. Customers, controllers and processors",
          blocks: [
            "We act as controller for the account, transaction, website, security, compliance and support information whose purposes and essential means we determine. Customers determine which third-party resources to access and remain responsible for the lawful collection and use of information for their own purposes.",
            "Data protection roles depend on the actual processing, not on whether a document has been signed. Where we process personal information on a customer’s behalf and instructions as a processor, the processing must be covered by a compliant data processing agreement or equivalent binding terms before it begins. Where we determine our own processing purposes, the relevant controller obligations apply. No customer is relieved of its duties merely by routing traffic through a proxy.",
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
            "A provider or recipient may process information outside the United Kingdom. For a restricted transfer under UK GDPR, we rely on applicable adequacy regulations, an appropriate safeguard such as the UK International Data Transfer Agreement or the UK Addendum to EU standard contractual clauses, or a narrowly applicable statutory exception. We assess the protection provided and apply additional measures where required. EU standard contractual clauses alone are not the UK transfer safeguard.",
            "For information subject to EU GDPR transfer rules, the relevant EU adequacy decision, EU standard contractual clauses or another permitted mechanism must separately apply. We do not assume that a safeguard for one regime automatically satisfies the other. You may ask for information about the safeguards applicable to your information and a copy where available, with necessary confidential details redacted.",
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
          heading: "12. Automated checks and safeguards",
          blocks: [
            "Automated signals may identify payment fraud, restricted locations, account abuse or security threats. These signals may involve account, billing, website-access and transaction information; they do not require a retained proxy traffic history.",
            "Where a decision is made solely by automated processing and has legal or similarly significant effects, we apply the safeguards required by the applicable data protection regime, including information about the decision and a route to express your views, contest it and obtain human intervention where required. Special category information is subject to the additional restrictions applicable to it. Send a request for review to our contact email.",
          ],
        },
        {
          heading: "13. Individual rights and requests",
          blocks: [
            "Subject to applicable conditions and exceptions, you may request access, rectification, erasure, restriction or portability of personal information and object to relevant processing. You may withdraw consent without affecting processing that was lawful before withdrawal. You may object at any time to use of your information for direct marketing.",
            `Send requests to ${COMPANY.email} or our contact address. We respond without undue delay and normally within one month, subject to the timing, proportionate identity checks, permitted clarification and extension rules of the applicable regime. If a permitted extension is needed, we explain the reason within the required initial period. Requests are normally free; a charge or refusal is applied only where legally allowed and explained.`,
            "You may complain to the Information Commissioner’s Office (ICO) at https://ico.org.uk/make-a-complaint/. If EU GDPR applies, you may also complain to a competent EEA supervisory authority, including the authority for your habitual residence, workplace or alleged infringement. Our internal complaint route does not remove your right to a regulator or court.",
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
          heading: "16. Personal data complaints",
          blocks: [
            `If you are concerned about our handling of your personal information, email ${COMPANY.email} or write to our contact address. Describe the issue and the outcome sought. You do not have to use a particular form or legal terminology, and you may complain through an authorised representative.`,
            "We acknowledge a data protection complaint within 30 days of receipt, make appropriate enquiries without undue delay, keep you reasonably informed and communicate the outcome and available escalation route without undue delay. This acknowledgement deadline is distinct from the deadline for responding to an individual rights request. We handle complaint information under this Policy and retain only what is necessary for resolution, accountability or a legal obligation.",
          ],
        },
        {
          heading: "17. Operator transition and change of controller",
          blocks: [
            "When account information is transferred to us as part of the operator transition, it is used to continue account administration, recognise balances and service entitlements, deal with payment and support matters, maintain security and meet legal obligations. The relevant categories may include registration, billing, transaction, entitlement, preference, complaint and compliance records. No retained proxy traffic history is transferred because such history is not stored in the ordinary provision of the Services.",
            "We use the lawful basis applicable to each purpose, including contract performance, proportionate legitimate interests in continuity and security, and legal obligations where relevant. Any consent-dependent use requires valid consent covering that use; the transition is not a new marketing consent or permission for unrelated use.",
            "The transition is subject to appropriate due diligence, minimisation, secure transfer and applicable cross-border safeguards. The account notice explains the new controller and the timing. A previous controller may retain information it lawfully needs for its own legal obligations or historic disputes and remains responsible for that processing. Contact us for information about processing after the transition or the appropriate route for an earlier matter.",
          ],
        },
        {
          heading: "18. Changes and contact",
          blocks: [
            `We may update this Policy to reflect changes in law, providers or the Services. The current version will be published with its update date. Questions and rights requests should be sent to ${COMPANY.name} at ${COMPANY.email} or to the contact address stated above.`,
          ],
        },
      ]}
    />
  );
}
