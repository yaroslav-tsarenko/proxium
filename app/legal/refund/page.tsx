import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { COMPANY } from "@/lib/company";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy | Proxium",
  description:
    "When a Proxium top-up or purchased proxy may be refunded, consumer withdrawal rights, how to request a refund, and the applicable exclusions.",
};

export default function RefundPolicyPage() {
  return (
    <LegalPage
      title="Refund & Cancellation Policy"
      updated="6 October 2026"
      intro="Applies to worldproxium.com and the Proxium Services. Effective date: as described in the Terms."
      sections={[
        {
          heading: "1. Scope and priority of legal rights",
          blocks: [
            `This Policy governs refunds and cancellation for Proxium top-ups and proxy services supplied by ${COMPANY.name}. It applies to Business Customers and Consumers as defined in the Terms. Commercial refunds, statutory cancellation and remedies for a defective service are separate routes.`,
            "The commercial limitations below do not exclude a mandatory right. UK consumer service rights are governed principally by the Consumer Contracts (Information, Cancellation and Additional Charges) Regulations 2013 and the Consumer Rights Act 2015. Mandatory protections applying in another country of residence are also preserved.",
          ],
        },
        {
          heading: "2. Commercial refund of unused top-ups",
          blocks: [
            "You may request a refund of the unused portion of a top-up within 14 calendar days after that top-up was successfully credited. This commercial offer applies to Business Customers and Consumers. The refundable amount is the portion of that top-up that is unspent and available, subject to correction of a mistaken or duplicate payment.",
            "For several top-ups, we identify the relevant unused amount from the actual transaction history and explain the calculation. We do not apply a new allocation method retrospectively to defeat a valid request. The operator transition does not restart or shorten the original top-up period.",
          ],
        },
        {
          heading: "3. Purchased proxies and change of mind",
          blocks: [
            "Outside a statutory cancellation or remedy, an activated proxy purchase is not refunded merely because you no longer want it, chose an unsuitable location or configuration, or a target blocks traffic. A refund may nevertheless be due for non-delivery, non-conformity, a contractual promise or another legal ground.",
            "Proxy access is an ongoing service for the agreed period or allowance. Provision of credentials or activation alone does not establish that it has been fully performed, and is not treated as a digital-content waiver of consumer service cancellation rights.",
          ],
        },
        {
          heading: "4. Consumer cancellation period",
          blocks: [
            "If you are a Consumer with a cancellation right under the UK Regulations, you may cancel the relevant distance service contract without giving a reason within 14 days after the day the contract is concluded. A top-up and a subsequent proxy purchase have their own contract dates; a top-up is not used to shorten the cancellation period for a later order.",
            "You exercise cancellation by sending a clear statement before the deadline to our email or contact address. You may use the form at the end of this Policy, but it is optional. We do not require the word cancellation, a support ticket format or a reason. Missing cancellation information may extend the period as provided by law, potentially by up to 12 months; later provision of that information starts the further period required by the Regulations.",
            "If the service has not started, we refund the amount due under the cancellation rules. If it has started, the early-performance rules below determine whether any charge may be deducted. B2B orders do not acquire a statutory consumer cooling-off period solely through this Policy.",
          ],
        },
        {
          heading: "5. Express request to start early",
          blocks: [
            "We start a Consumer’s service during the cancellation period only after the Consumer separately and expressly requests this. Before that request, we explain the cancellation right, any proportionate charge for performance and the conditions for loss of the right after full performance. Acceptance of general Terms or a pre-ticked box is not the required request.",
            "If the Consumer cancels after a valid early-start request, we may charge only a reasonable amount proportionate to the service actually supplied up to the cancellation notice. The basis is the agreed total price, or the market value if that price is excessive. Time and allowance consumption are assessed against the actual product and disclosed charging structure without charging twice for the same service or treating mere allocation as complete performance.",
            "No charge for service within that period is imposed where the express request or the required cancellation and cost information was not given, or where another legal condition for charging is absent. The right to cancel is lost after full performance only if performance began after the required express request and acknowledgement that the right would be lost once the service was fully performed. An ongoing period or remaining allowance is not declared fully performed merely because credentials were delivered.",
          ],
        },
        {
          heading: "6. Non-delivery, defects and service remedies",
          blocks: [
            "Report non-delivery, an order mismatch or a service problem with the order reference and safe technical details. We may help troubleshoot, correct access or replace an affected resource. A target’s block is not by itself proof of a defect, but a disclaimer does not override a binding description or guarantee for that order.",
            "Consumers may require repeat performance where the service fails to conform and that remedy is available. It is provided at our cost, within a reasonable time and without significant inconvenience. Where repeat performance is impossible or is not provided as legally required, or another statutory ground applies, a Consumer may claim an appropriate price reduction, up to the full price. The original 14-day commercial top-up deadline does not limit these remedies.",
            "A statutory monetary refund is not replaced with an account credit or substitute service without the Consumer’s express agreement. Business remedies follow the agreed order and Terms, including remedies for a material breach or non-delivery.",
          ],
        },
        {
          heading: "7. How to contact us and required information",
          blocks: [
            `Send requests to ${COMPANY.email} or ${COMPANY.name}, ${COMPANY.address}. Include an account or order reference where available, the transaction concerned and the amount sought. A statutory cancellation need only be a clear cancellation statement; additional information is requested only where reasonably necessary to identify the transaction or protect payment ownership.`,
            "Do not send a full card number, security code or password. A request from the registered email helps verification, but it is not the only permitted way to exercise a statutory right. We provide an acknowledgement and explain the outcome or further information needed.",
          ],
        },
        {
          heading: "8. Refund method, timing and fees",
          blocks: [
            "For a UK statutory cancellation, we reimburse the refundable amount without undue delay and no later than 14 days after being informed of the cancellation, subject to any lawful proportionate service charge. For a Consumer Rights Act price reduction, any refund is paid without undue delay and within 14 days beginning with the day we agree that the Consumer is entitled to it.",
            "Refunds use the same means of payment unless you expressly agree otherwise, and no fee is imposed for a statutory refund. Where an order was paid from a top-up balance, we trace the funding to arrange the monetary repayment owed, coordinating with the payment provider where necessary. Restoring an internal balance alone is not substituted for a mandatory monetary refund without agreement.",
            "For the commercial top-up offer, we assess a sufficiently identified request promptly and instruct an approved refund without undue delay. Bank or card settlement time is separate from our instruction and does not displace a mandatory deadline. Original transaction currency is used where practicable; issuer conversion differences or independently charged bank fees are not reimbursed unless law requires this.",
          ],
        },
        {
          heading: "9. Fraud, disputes, sanctions and exclusions",
          blocks: [
            "We may refuse a purely commercial refund where the relevant top-up amount has been spent or the commercial request is late. We may carry out proportionate identity and ownership checks, correct a duplicate reimbursement and make a deduction actually permitted by the contract and law.",
            "Fraud allegations, an account restriction or a policy breach do not automatically remove statutory rights or forfeit all unused funds. A payment dispute is coordinated to avoid refunding the same amount twice. If sanctions or another legal prohibition prevent a repayment, we comply with that restriction and any applicable licence or release process; this does not create a discretionary right to keep the funds.",
          ],
        },
        {
          heading: "10. Cancellation, closure and operator transition",
          blocks: [
            "Closing an account does not by itself cancel every order or extinguish a valid refund. Tell us which service you wish to cancel. The balance and active services are accounted for under the Terms, including any entitlement due when we end a service or cannot supply it.",
            "Existing refund requests, original top-up and order dates, and accrued remedies are preserved on transition. The applicable operator and payment provider handle earlier transactions through the documented transfer arrangements. Contact information remains unchanged and we explain the handling route; these policies do not assert an automatic release of the previous operator.",
          ],
        },
        {
          heading: "11. Optional cancellation form",
          blocks: [
            "Complete and send this form only if you wish to cancel. Any other clear cancellation statement is equally valid.",
            `To: ${COMPANY.name}, ${COMPANY.address}; email: ${COMPANY.email}.`,
            "I/We hereby give notice that I/We cancel my/our contract for the supply of the following service:",
            "Service and order or account reference: ________________________________________",
            "Ordered on: ______________________________________________________________",
            "Name of consumer(s): _____________________________________________________",
            "Address of consumer(s): ___________________________________________________",
            "Signature of consumer(s), only if sent on paper: ______________________________",
            "Date: ____________________________________________________________________",
            "Delete whichever of I/We, my/our and consumer(s) does not apply.",
          ],
        },
      ]}
    />
  );
}
