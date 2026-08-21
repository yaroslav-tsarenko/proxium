import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { COMPANY } from "@/lib/company";

export const metadata: Metadata = {
  title: "Terms & Conditions | Proxium",
  description:
    "The terms and conditions governing your use of Proxium proxy services, including our balance-based billing model, refunds, pricing, and jurisdiction.",
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      updated="20 August 2026"
      intro="Applies to worldproxium.com and the Proxium Services."
      sections={[
        {
          heading: "1. Agreement and contracting party",
          blocks: [
            `These Terms & Conditions (the “Terms”) form a legally binding agreement between ${COMPANY.name}, registry code ${COMPANY.regNumber}, registered at ${COMPANY.address} (“${COMPANY.name}”, “Proxium”, “we”, “us” or “our”), and the person or entity using the Services (“Customer”, “you” or “your”).`,
            "The Terms govern access to worldproxium.com, the Proxium dashboard, APIs, proxy credentials, account balance and all proxy products or related support supplied by us (collectively, the “Services”). By creating an account, topping up a balance, placing an order or using any Service, you confirm that you have read and accepted these Terms and the policies incorporated into them.",
            "If you use the Services for an organisation, you represent that you have authority to bind that organisation. In that case, “you” includes the organisation. If you do not accept these Terms, do not create an account, purchase or use the Services.",
          ],
        },
        {
          heading: "2. Incorporated policies and order terms",
          blocks: [
            "The Privacy Policy, Cookie Policy, Acceptable Use Policy, Payment & Account Balance Policy, Refund & Cancellation Policy, Digital Delivery & Service Fulfilment Policy, Restricted Countries & Eligibility Policy, and Abuse Reporting & Complaints Procedure form part of these Terms.",
            "A product description, checkout page, order confirmation or written enterprise order may contain service-specific terms, including location, proxy type, quantity, traffic allowance, validity period and price. Those specific terms apply to the relevant order. If they conflict with these Terms, the order-specific terms prevail only for that conflict.",
          ],
        },
        {
          heading: "3. Eligibility",
          blocks: [
            "The Services are available to companies and to individual customers. An individual must be at least 18 years old and have legal capacity to enter into a contract. A person acting for a company must be duly authorised.",
            "You may use the Services only if you satisfy our Restricted Countries & Eligibility Policy, are not subject to applicable sanctions or export restrictions, and may lawfully receive and use proxy services. We may request information reasonably required to verify identity, authority, billing details, location, use case or compliance.",
            "We may refuse registration, payment or service where required by law, by a payment provider, by our risk controls, or where the proposed use presents an unacceptable legal, security, operational or reputational risk.",
          ],
        },
        {
          heading: "4. Accounts",
          blocks: [
            "You must provide accurate, current and complete registration and billing information and keep it updated. You must not create accounts using false, misleading, stolen or third-party information without lawful authority.",
            `You are responsible for protecting passwords, API keys, whitelisted IP addresses and proxy credentials, and for all activity performed through your account. Credentials must not be sold, published, transferred or shared with unauthorised persons. Notify us promptly at ${COMPANY.email} if you suspect unauthorised access.`,
            "We may apply reasonable account, payment, location, concurrency, traffic or security limits. You must not create multiple accounts to evade a restriction, suspension, price condition, verification requirement or enforcement action.",
          ],
        },
        {
          heading: "5. Description of the Services",
          blocks: [
            "Proxium provides access to datacenter, static residential, rotating residential, private or dedicated, and other proxy resources displayed on the website or dashboard. Availability varies by product, country, network conditions and supply.",
            "A proxy permits network traffic to be routed through an assigned IP address. The Service does not grant ownership of any IP address, underlying network, third-party content or data accessed through the Service. IP addresses may change, rotate, be withdrawn, reassigned or become unavailable.",
            "Product features, protocols, authentication methods, locations, traffic allowances, session behaviour and validity periods are those displayed before purchase or in the order confirmation. Any estimate of speed, success rate, coverage or uptime is informational unless expressly stated as a binding service level in a separate written agreement.",
          ],
        },
        {
          heading: "6. Orders, activation and delivery",
          blocks: [
            "An order is submitted when you confirm a purchase in the dashboard. The order price is deducted from your available balance. An order is accepted when the relevant proxy access or credentials are made available in the dashboard or we otherwise confirm activation.",
            "Services are normally activated promptly after a successful purchase, but activation may be delayed by payment review, compliance checks, technical maintenance, inventory availability or circumstances beyond our reasonable control. Digital delivery is governed by the Digital Delivery & Service Fulfilment Policy.",
            "You must review order details before confirmation. Country, proxy type, quantity, traffic allowance or validity selections generally cannot be changed after activation unless the dashboard expressly offers that option or support agrees otherwise.",
          ],
        },
        {
          heading: "7. Balance, pricing, taxes and payment",
          blocks: [
            "Proxium uses a prepaid balance model. You add funds in EUR, GBP or USD using a supported payment method and use the credited balance to purchase Services. A balance is an internal contractual credit usable only for Proxium Services; it is not a bank account, deposit, electronic-money account, investment or interest-bearing product.",
            "Prices, currency and applicable taxes are displayed before confirmation. Your bank, card issuer or payment provider may apply exchange rates or fees that we do not control. Payment, balance corrections, invoices, failed payments, fraud review and chargebacks are governed by the Payment & Account Balance Policy.",
          ],
        },
        {
          heading: "8. Refunds and consumer withdrawal rights",
          blocks: [
            "The unused portion of a balance may be requested for refund within 14 days after the corresponding top-up. Amounts already spent on activated or delivered proxies are non-refundable unless the Service is materially defective, we expressly agree otherwise, or applicable law requires a remedy.",
            "If you are a consumer and request immediate activation during a statutory withdrawal period, you expressly request performance to begin before that period expires. Your withdrawal right may be reduced or lost only to the extent permitted by applicable consumer law and after any legally required consent or acknowledgement. Nothing in these Terms limits mandatory consumer rights.",
            "Detailed eligibility, method, timing and exclusions are stated in the Refund & Cancellation Policy.",
          ],
        },
        {
          heading: "9. Customer responsibilities",
          blocks: [
            "You are responsible for selecting a suitable product, configuring your software, securing credentials, maintaining adequate systems, and determining whether your intended activity is lawful and permitted by third-party services.",
            "You must comply with all applicable laws, the Acceptable Use Policy, data protection requirements, intellectual property rights, contractual restrictions and reasonable technical instructions. You must obtain every consent, permission and lawful basis required for data you collect, access or process through the Services.",
            "You are responsible for employees, contractors, affiliates, end users and applications using the Services through your account. You must implement controls appropriate to the sensitivity and scale of your use.",
          ],
        },
        {
          heading: "10. Third-party websites and data",
          blocks: [
            "The Services may enable access to third-party websites, platforms, systems or content. Proxium does not control, endorse or grant rights to those resources. Their availability, accuracy, legality and terms are the responsibility of their operators and of the Customer using them.",
            "You must not use Proxium to bypass authentication, paywalls, digital rights management, access controls, rate limits or other restrictions without lawful authorisation. Access through a proxy does not remove an obligation to comply with law or third-party rights.",
          ],
        },
        {
          heading: "11. Monitoring, network protection and cooperation",
          blocks: [
            "Proxium does not retain proxy traffic logs identifying source IP addresses, destinations, URLs, assigned proxy IPs, connection timestamps or traffic content in the ordinary provision of the proxy Service. Data strictly required to route a live connection may be processed transiently and aggregated usage may be calculated for product operation or billing without creating a retained connection history.",
            "We may use account, payment, support, security and aggregated operational information to prevent fraud, investigate abuse and protect the network. We may restrict particular destinations, protocols, ports, request patterns or traffic categories where reasonably necessary for security, compliance or network integrity.",
            "We may preserve information already lawfully held when required by law, a valid legal process, or a documented abuse investigation. We cannot produce proxy traffic logs that were never retained.",
          ],
        },
        {
          heading: "12. Suspension and termination",
          blocks: [
            "We may suspend, restrict or terminate an account or specific Service immediately where we reasonably believe that you have violated these Terms or the Acceptable Use Policy, created a security or fraud risk, supplied false information, initiated an unjustified chargeback, failed a compliance check, used a restricted location, or exposed Proxium or another person to material harm.",
            "Where reasonably practicable and lawful, we will provide notice and an opportunity to remedy a non-urgent violation. Immediate action may be taken for suspected crime, sanctions exposure, abuse, compromised credentials, threats to network integrity or urgent third-party harm.",
            "You may stop using the Services at any time. Closing an account does not automatically cancel completed purchases or create a refund right. Provisions intended by their nature to survive termination, including payment obligations, intellectual property, disclaimers, liability, indemnity and dispute terms, remain effective.",
          ],
        },
        {
          heading: "13. Service availability and changes",
          blocks: [
            "The Services are provided over networks and third-party infrastructure that may experience interruption, congestion, blocking, maintenance, provider failure or regulatory change. We do not guarantee that any specific IP, location, target or success rate will remain available.",
            "We may modify, replace or discontinue a feature or proxy resource. Where a material change adversely affects a prepaid but not yet delivered Service, we will provide an appropriate replacement, account credit or refund where required by law or agreed in writing.",
          ],
        },
        {
          heading: "14. Intellectual property",
          blocks: [
            "Proxium and its licensors own all rights in the website, dashboard, software, APIs, documentation, branding, databases and service design, excluding Customer content and third-party materials. Subject to these Terms, we grant you a limited, non-exclusive, non-transferable and revocable right to use the Services for your lawful internal purposes during the purchased service period.",
            "You must not copy, resell, sublicense, reverse engineer, interfere with or create derivative works from the Service except where expressly permitted by us or by mandatory law. Feedback may be used by us without restriction or compensation, provided it does not identify you publicly without permission.",
          ],
        },
        {
          heading: "15. Confidentiality and security",
          blocks: [
            "Each party must protect non-public information received from the other party using reasonable care and use it only for the contractual relationship. This obligation does not apply to information that is public without breach, already lawfully known, independently developed or lawfully received from another source.",
            "A party may disclose confidential information where legally required, provided it gives notice where lawful and limits disclosure to what is required. Account credentials and non-public service configuration are Proxium confidential information.",
          ],
        },
        {
          heading: "16. Warranties and disclaimers",
          blocks: [
            "We warrant that we will provide the Services with reasonable care and skill. Except for that warranty and any mandatory consumer guarantee, the Services are provided “as is” and “as available”.",
            "To the maximum extent permitted by law, we disclaim implied warranties of merchantability, fitness for a particular purpose, non-infringement, uninterrupted availability and achievement of a particular result. We do not warrant access to any specific third-party website or that a target will not detect, block or challenge proxy traffic.",
          ],
        },
        {
          heading: "17. Limitation of liability",
          blocks: [
            "Nothing in these Terms excludes or limits liability that cannot lawfully be excluded, including liability for fraud, fraudulent misrepresentation, death or personal injury caused by negligence, or mandatory consumer rights.",
            "To the maximum extent permitted by law, neither party is liable for indirect, incidental, special, punitive or consequential loss, or for loss of profit, revenue, business opportunity, goodwill or data, arising from the Services.",
            "To the maximum extent permitted by law, Proxium’s aggregate liability arising from or relating to the Services is limited to the amount paid by you to Proxium during the three months immediately preceding the event giving rise to the claim. For a consumer, this limitation applies only to the extent fair and enforceable under mandatory law.",
          ],
        },
        {
          heading: "18. Business-customer indemnity",
          blocks: [
            `If you use the Services for business purposes, you will indemnify ${COMPANY.name} and its personnel against third-party claims, losses, penalties and reasonable costs arising from your unlawful use, your breach of the Acceptable Use Policy, your infringement of third-party rights, or data collected or processed through your account. This obligation does not apply to the extent the claim was caused by our breach or negligence.`,
          ],
        },
        {
          heading: "19. Force majeure",
          blocks: [
            "Neither party is liable for delay or failure caused by events beyond its reasonable control, including widespread network or hosting failure, cyberattack, power failure, labour dispute, natural disaster, war, civil disorder, government action, sanctions, carrier failure or failure of upstream proxy supply. Payment obligations already due are not excused.",
          ],
        },
        {
          heading: "20. Privacy and communications",
          blocks: [
            "Personal data is handled under the Privacy Policy. Service notices may be sent to the account email or displayed in the dashboard. You must maintain a valid email address.",
            "Marketing communications are sent only where permitted by law and may be withdrawn using the unsubscribe method provided. Service, security, billing and legal notices are not marketing and may continue while an account or legal obligation remains.",
          ],
        },
        {
          heading: "21. Complaints and disputes",
          blocks: [
            `Please send complaints to ${COMPANY.email} with the account email, relevant order or transaction, a clear description and the requested resolution. We will investigate and respond within a reasonable period.`,
            "These Terms are governed by the laws of Estonia, excluding conflict-of-law rules. Courts competent for Tallinn, Estonia have jurisdiction, subject to any mandatory right of a consumer to bring a claim in the courts of the consumer’s residence or to use an applicable alternative dispute resolution body.",
          ],
        },
        {
          heading: "22. Changes to the Terms",
          blocks: [
            "We may update these Terms to reflect changes in law, risk, security, technology or the Services. The updated version will state its effective date. We will provide reasonable notice of material changes where required. Changes do not retroactively remove rights already accrued.",
          ],
        },
        {
          heading: "23. General provisions",
          blocks: [
            "You may not assign or transfer your account or rights without our written consent. We may assign the agreement as part of a reorganisation, financing or transfer of the relevant business, provided mandatory rights are not reduced.",
            "If a provision is unenforceable, it will be limited or removed only to the extent necessary and the remainder continues. A failure to enforce a provision is not a waiver. These Terms and incorporated documents form the entire agreement concerning the Services, except for a separately signed agreement.",
          ],
        },
        {
          heading: "24. Contact",
          blocks: [
            `${COMPANY.name}, registry code ${COMPANY.regNumber}, ${COMPANY.address}. Email: ${COMPANY.email}. Website: https://www.worldproxium.com/.`,
          ],
        },
      ]}
    />
  );
}
