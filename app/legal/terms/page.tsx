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
      updated="6 October 2026"
      intro="Applies to worldproxium.com and the Proxium Services. Effective date: as described in the Terms."
      sections={[
        {
          heading: "1. Agreement and contracting party",
          blocks: [
            `These Terms and Conditions (the Terms) govern Proxium Services supplied by ${COMPANY.name}, company number ${COMPANY.regNumber}, with its contact address at ${COMPANY.address} (Proxium, we, us or our). The other party is the individual or organisation contracting with us (Customer, you or your).`,
            "The Services include worldproxium.com, the dashboard, APIs, proxy access, account balance and related support. You accept the applicable Terms when you confirm registration, a top-up or an order after being given access to them. Merely visiting the website does not establish that a consumer has accepted a paid service contract.",
            "A Business Customer contracts mainly for purposes relating to its trade, business, craft or profession. A Consumer is an individual acting wholly or mainly outside those purposes. The consumer provisions apply where the law treats you as a consumer, regardless of the account label.",
            "If you act for an organisation, you must have authority to bind it. Order-specific terms apply to the relevant product, but cannot remove mandatory consumer rights or the consumer protections expressly given by these Terms.",
            "For existing accounts, these Terms apply only from the account’s transition date notified in accordance with the operator transition section below. Revision and transition dates have different purposes; a revision date is not evidence that a contract or personal data has already been transferred.",
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
          heading: "6. Orders and the start of service",
          blocks: [
            "Before confirmation, you are shown the product, price, transaction currency, applicable mandatory charges, service period or allowance, and activation arrangements. A proxy order is accepted when we confirm it or make the agreed access available. A top-up and a later proxy purchase are distinct transactions; their acceptance dates are recorded separately.",
            "An accepted purchase is deducted from your balance. If an order cannot be accepted, the relevant deduction is reversed or refunded as appropriate. We provide an electronic confirmation of the accepted order and its applicable terms in a form that you can retain.",
            "For a Consumer, service starts during an applicable cancellation period only after a separate express request to start early. General acceptance of these Terms does not itself make that request or waive cancellation rights. The Refund and Cancellation Policy explains partial performance and the conditions for loss of the cancellation right after full performance.",
            "Access is normally enabled promptly, subject to the agreed start date, stock, verification and technical availability. Where no valid early-start request has been given, activation is deferred until the applicable cancellation period expires. A delivery estimate does not remove a consumer’s right to performance within an agreed or legally required reasonable time.",
          ],
        },
        {
          heading: "7. Balance, pricing, taxes and payment",
          blocks: [
            "You may add funds in EUR, GBP or USD using eligible Visa or Mastercard payments and spend the internal balance on Proxium Services. This contractual credit is usable only with Proxium, earns no interest and is not transferable between customers or usable to pay third-party merchants. It is not a bank deposit. This description does not claim a regulatory authorisation or exemption.",
            "The total price, including taxes and unavoidable charges that can reasonably be calculated, is disclosed before confirmation. If a charge cannot be calculated in advance, its calculation method is disclosed. Optional extras require your express agreement. A bank or card issuer may independently apply exchange rates or fees.",
            "Payment processing, accounting, balance corrections, refunds and payment disputes are governed by the Payment and Account Balance Policy. Existing balances are handled under the transition provisions; the change of operator does not create a new top-up or a new expiry date.",
          ],
        },
        {
          heading: "8. Refunds and consumer cancellation",
          blocks: [
            "Our commercial refund offer allows a request for the unused portion of a top-up within 14 calendar days after it was credited. It is separate from a Consumer’s statutory cancellation right, which may apply to a top-up contract or an individual proxy service contract and runs from the conclusion of the relevant contract.",
            "Outside applicable statutory rights, amounts used to buy an activated proxy service are not refundable solely because you change your mind. Activation does not by itself remove a Consumer’s cancellation right, establish full performance of an ongoing service, or remove remedies for non-delivery, non-conformity or a failure to use reasonable care and skill.",
            "The Refund and Cancellation Policy explains early performance, proportionate charges, full performance, refund deadlines, mandatory remedies and the optional cancellation form. Mandatory rights take priority over commercial refund exclusions.",
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
          heading: "12. Suspension, termination and account closure",
          blocks: [
            "We may restrict or suspend a service where reasonably necessary to address a material policy breach, unlawful activity, sanctions exposure, security threat, unauthorised payment or significant network harm. Action must be proportionate to the circumstances. A legitimate chargeback, complaint or exercise of a statutory right is not itself a breach.",
            "Where lawful and practicable, we explain the reason, give reasonable notice and allow a non-urgent breach to be remedied. Immediate action may be taken where delay creates material harm or the law prohibits continued supply. We may withhold details where disclosure would compromise an investigation or security.",
            "You may stop using the Services or ask to close an account. Closure does not extinguish accrued refund rights, a cancellation already exercised or our obligations concerning an unused balance. We will account for the balance and any lawful deduction; a breach does not automatically forfeit all unused funds.",
            "If we end a paid service for our convenience, or cannot provide what was agreed, we provide the refund or other remedy required by law, including an appropriate refund for an unused prepaid service where applicable. An account credit is not substituted for a mandatory cash refund without your express agreement. Survival of payment, confidentiality or dispute clauses does not expand liability beyond what the law permits.",
          ],
        },
        {
          heading: "13. Availability and changes to purchased services",
          blocks: [
            "Network conditions and third-party controls may affect speed, availability or access to a particular target. We do not guarantee access to every website or continued availability of a particular IP address unless the order expressly provides that guarantee. Descriptions and representations binding under consumer law remain binding.",
            "We may make proportionate operational changes for security, legal compliance, compatibility or upstream network changes. A material reduction in an existing paid service is not imposed solely through a revised website description. Where a change adversely affects a purchased service, we give notice where practicable and provide an appropriate replacement or remedy; a Consumer may reject a materially different substitute and exercise applicable termination or refund rights.",
          ],
        },
        {
          heading: "14. Intellectual property and permitted use",
          blocks: [
            "Rights in the website, dashboard, software, APIs, documentation, branding and service design remain with their respective owners or licensors. We provide a limited, non-exclusive and non-transferable permission to use the Services for lawful purposes during the purchased period, under the rights available to us. Customer and third-party materials are not assigned to us merely through service use.",
            "You must not copy, resell, sublicense, interfere with or create derivative works from protected service materials beyond that permission. Reverse engineering and other restricted acts remain subject to mandatory statutory exceptions. We may use voluntary feedback to improve the Services without disclosing your identity or confidential information without an appropriate basis. An operator change does not itself establish that every underlying right has been transferred.",
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
          heading: "16. Service standards and remedies",
          blocks: [
            "We provide the Services with reasonable care and skill. For Consumers, information about the service or trader that is binding under the Consumer Rights Act 2015 forms part of the contract. If no time has been agreed, the service is supplied within a reasonable time. Nothing excludes those duties.",
            "If a consumer service does not conform to the contract, you may require repeat performance where available, at our cost and within a reasonable time without significant inconvenience. If repeat performance is impossible or is not provided as legally required, or another statutory ground applies, you may claim an appropriate price reduction, which may be the full price. Other available legal remedies are preserved.",
            "For Business Customers, subject to the Unfair Contract Terms Act 1977 and other applicable law, no additional guarantee is given that a particular target will accept traffic, a commercial result will be achieved, or service will be uninterrupted. Express commitments in an agreed order remain binding. These business provisions do not apply to Consumers.",
          ],
        },
        {
          heading: "17. Liability",
          blocks: [
            "Nothing excludes or limits liability for death or personal injury caused by negligence, fraud or fraudulent misrepresentation, or another liability that the law does not permit us to exclude or limit. Mandatory consumer rights and remedies are preserved.",
            "For Consumers, we are responsible for loss or damage that is a foreseeable result of our breach of contract or failure to use reasonable care and skill. A loss is foreseeable if it is an obvious consequence or was contemplated when the contract was made. We are not responsible for loss caused solely by your breach, or for a business loss arising from use outside a consumer contract, but these exclusions do not remove a loss recoverable under mandatory law. The business liability cap below does not apply to Consumers.",
            "For Business Customers only, and subject to the first paragraph and any statutory reasonableness requirement, we exclude liability for indirect or consequential loss and loss of profit, revenue, business opportunity or goodwill. Our aggregate liability relating to the Services is limited to the amounts paid to Proxium in the three months immediately before the event giving rise to the claim. A separate written enterprise agreement may set a different limit. A limitation applies only to the extent lawful and reasonable.",
          ],
        },
        {
          heading: "18. Business customer indemnity",
          blocks: [
            `A Business Customer must indemnify ${COMPANY.name} against reasonable third-party claims and costs directly resulting from that customer’s unlawful use, material breach of the Acceptable Use Policy, or infringement of third-party rights, to the extent permitted by law. The indemnity does not cover loss caused by our breach, negligence or wilful misconduct, or a fine or liability that cannot lawfully be indemnified.`,
            "We will notify the customer of a claim where practicable, mitigate the loss, allow reasonable participation in the defence and not agree a settlement imposing a non-monetary obligation or admission on the customer without its agreement. This indemnity does not apply to Consumers.",
          ],
        },
        {
          heading: "19. Events outside reasonable control",
          blocks: [
            "A party is not responsible for a delay caused by an event genuinely outside its reasonable control where it takes reasonable steps to prevent or reduce the effect and informs the other party where practicable. This may include widespread network failure, natural disaster, war or government restrictions. It does not excuse payment already due or a failure that reasonable precautions could have prevented.",
            "For Consumers, we will explain a material delay and available remedies. If such an event prevents an agreed service for a substantial period, the Consumer may end the affected service and receive an appropriate refund for the portion not supplied, subject to mandatory law.",
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
          heading: "21. Complaints, applicable law and courts",
          blocks: [
            `Send a complaint to ${COMPANY.email} with the account or transaction reference, the relevant facts and the resolution sought. The Abuse Reporting and Complaints Procedure explains internal review and the separate procedure for personal data complaints. If a consumer complaint remains unresolved, we give information about a competent accredited alternative dispute resolution provider and state whether we are obliged or willing to participate, as required by applicable law. No membership of an ADR scheme is represented by these Terms.`,
            "The contract is governed by the law of England and Wales. For Business Customers, the courts of England and Wales have exclusive jurisdiction. For Consumers, the choice of law does not deprive you of mandatory protections that apply in your habitual country of residence. Consumers may bring a claim in any court available under mandatory jurisdiction rules, including the appropriate courts of Scotland or Northern Ireland where applicable. We may bring a claim against a Consumer only in a court permitted by those rules.",
          ],
        },
        {
          heading: "22. Changes to these Terms",
          blocks: [
            "We may update these Terms for a stated legal, security, technical or operational reason. New terms apply to new transactions after the stated effective date. We give reasonable advance notice of a material change affecting an existing contract unless an urgent legal or security reason prevents this.",
            "A change does not retrospectively remove accrued rights, alter the price of a completed purchase, restart an existing refund period or convert a past order into a new contract. Where a material adverse change is proposed for an existing consumer service, we obtain agreement where required and explain any right to end the affected service with an appropriate refund. Continued website use is not treated as consent where express agreement is legally required.",
          ],
        },
        {
          heading: "23. Transfer of contracts and general provisions",
          blocks: [
            "You must not transfer an account or its rights without our agreement. We may transfer contractual rights and arrange a transfer of obligations only through a legally effective process. Where consent or novation is required, it must be obtained before the relevant obligations are treated as transferred. A change of policy text or a notification alone does not release a previous operator from its obligations.",
            "A business transfer must not reduce a Consumer’s guarantees or accrued rights. An unenforceable provision is severed only to the extent necessary. A failure to enforce a provision is not a waiver. These Terms and the applicable order comprise the agreement, subject to mandatory rights and representations that the law treats as binding.",
          ],
        },
        {
          heading: "24. Transition of existing accounts",
          blocks: [
            `The operator transition date for an existing account is the date notified to that customer through a message that can be retained, following completion of the necessary transfer arrangements. From that date, ${COMPANY.name} supplies the transferred Services and recognises the account balance and active service entitlements covered by those arrangements.`,
            "The transition preserves the amount and currency of the recorded balance, the remaining duration or allowance of active purchases, and accrued cancellation, refund, complaint and other legal rights. It does not create a new top-up, restart or shorten a refund window, introduce an undisclosed expiry date, or reduce a previously agreed service entitlement.",
            "Transactions and liabilities arising before the transition remain governed by the rights applicable to them and by the documented transfer arrangements. These Terms do not declare that every historic liability has been assumed or that a previous operator has been released. Send enquiries about a transferred account or an earlier order to our unchanged contact email; we will explain the applicable handling route.",
            "If customer agreement is required, it will be requested separately with an explanation of the consequence of acceptance or refusal. Merely receiving an operator notice or reading these policies is not that agreement. The Privacy Policy explains the corresponding change of controller.",
          ],
        },
        {
          heading: "25. Contact",
          blocks: [
            `${COMPANY.name}, company number ${COMPANY.regNumber}, ${COMPANY.address}. Email: ${COMPANY.email}. Website: https://www.worldproxium.com/.`,
          ],
        },
      ]}
    />
  );
}
