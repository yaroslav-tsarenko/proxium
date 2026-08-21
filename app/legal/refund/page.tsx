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
      updated="20 August 2026"
      intro="Applies to worldproxium.com and the Proxium Services."
      sections={[
        {
          heading: "1. Scope",
          blocks: [
            "This Refund & Cancellation Policy explains when a Proxium top-up or purchased proxy may be refunded. It forms part of the Terms & Conditions and applies to company and individual customers.",
          ],
        },
        {
          heading: "2. Refund of unused balance",
          blocks: [
            "You may request a refund of the unused portion of a top-up within 14 calendar days after that top-up was successfully credited. Only the amount from that top-up that remains unspent and available may be refunded.",
            "If an account contains multiple top-ups and purchases, Proxium may apply a reasonable transaction-order method to identify the unused portion attributable to the refund request.",
          ],
        },
        {
          heading: "3. Purchased or activated proxies",
          blocks: [
            "Amounts spent on proxies that have been activated or digitally delivered are non-refundable because the purchased access has been provisioned for the Customer. This applies even if the Customer later changes its intended use, configuration, location choice or target website.",
            "A refund, replacement or account credit may be available where a Service is materially defective, materially different from the confirmed order, not delivered, or where mandatory law requires a remedy.",
          ],
        },
        {
          heading: "4. Technical issues",
          blocks: [
            "Before requesting a remedy, contact support and provide the product, order, configuration, error and reasonable troubleshooting information. We may test the Service, provide corrected credentials, replace an IP, correct configuration or offer an equivalent Service.",
            "A target website’s decision to block, rate-limit or challenge a proxy is not by itself proof that the Service is defective. Speed and accessibility can vary because of customer configuration, internet conditions, target controls and factors outside Proxium’s control.",
          ],
        },
        {
          heading: "5. Consumer withdrawal",
          blocks: [
            "An EEA consumer may have a statutory right to withdraw from a distance contract. An unused balance refund requested within 14 days is handled under this Policy.",
            "Where the consumer expressly requests immediate activation of a digital Service during the withdrawal period, the consumer requests performance before the period ends. The withdrawal right may be reduced or lost only as permitted by applicable law and after any required consent or acknowledgement. Mandatory consumer remedies remain unaffected.",
          ],
        },
        {
          heading: "6. How to request a refund",
          blocks: [
            `Send the request from the registered account email to ${COMPANY.email}. Include the account name, transaction or invoice reference, top-up date and amount, requested amount and reason. We may request information reasonably necessary to verify identity, payment ownership and eligibility.`,
          ],
        },
        {
          heading: "7. Refund method and timing",
          blocks: [
            "Approved refunds are normally returned to the original payment method and in the original transaction currency. Processing time depends on the payment provider, card network and bank. We will confirm our decision and, if approved, when the refund instruction has been submitted.",
            "Exchange-rate differences, issuer fees and bank charges are not controlled by Proxium and are not reimbursed unless required by law.",
          ],
        },
        {
          heading: "8. Exclusions",
          blocks: [
            "To the extent permitted by law, we may refuse or suspend a refund where the relevant amount has been spent, the request is submitted after the 14-day period, payment ownership cannot be verified, a chargeback is pending, information is false, or the account is connected to fraud, abuse, sanctions evasion or a material policy violation.",
            "A policy violation does not remove a consumer right that cannot legally be waived, but we may deduct lawful amounts, preserve claims and report unlawful activity.",
          ],
        },
        {
          heading: "9. Account closure and cancellation",
          blocks: [
            "Closing an account does not automatically refund the balance. An eligible refund must be requested under this Policy before or promptly after closure. Completed proxy purchases cannot be cancelled after activation unless a remedy applies.",
          ],
        },
        {
          heading: "10. Contact",
          blocks: [
            `Refund and cancellation requests: ${COMPANY.email}. ${COMPANY.name}, registry code ${COMPANY.regNumber}, ${COMPANY.address}.`,
          ],
        },
      ]}
    />
  );
}
