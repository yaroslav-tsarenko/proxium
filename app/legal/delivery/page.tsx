import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { COMPANY } from "@/lib/company";

export const metadata: Metadata = {
  title: "Digital Delivery & Service Fulfilment Policy | Proxium",
  description:
    "How Proxium delivers digital proxy access electronically, delivery timing and confirmation, credential security, service periods, and support.",
};

export default function DeliveryPolicyPage() {
  return (
    <LegalPage
      title="Digital Delivery & Service Fulfilment Policy"
      updated="6 October 2026"
      intro="Applies to worldproxium.com and the Proxium Services. Effective date: as described in the Terms."
      sections={[
        {
          heading: "1. Digital access as a service",
          blocks: [
            "Proxium supplies proxy access as a service for the agreed duration or allowance. Access information is delivered through the dashboard, API or another electronic method in the order. There are no physical goods to ship. Calling this digital delivery does not classify ongoing proxy access as a download or extinguish consumer service rights.",
          ],
        },
        {
          heading: "2. Delivery process",
          blocks: [
            {
              list: [
                "The Customer creates and verifies an account where required.",
                "The Customer adds funds and confirms a proxy purchase.",
                "The order amount is deducted from the available balance.",
                "Proxy credentials, endpoint information or access controls are generated and displayed in the dashboard.",
                "The Customer may then configure the proxy in compatible software or systems.",
              ],
            },
          ],
        },
        {
          heading: "3. Start date and activation",
          blocks: [
            "The agreed service start date and any activation estimate are disclosed before purchase. Access is normally enabled promptly after acceptance and necessary checks, subject to the consumer early-start requirements. Inventory, payment review or a technical incident may delay activation; we explain a material delay and available remedies.",
            "For a Consumer’s contract with a cancellation period, an early start requires the separate express request described in the Refund and Cancellation Policy. Without a valid request, performance is deferred until the period expires. If no time is agreed, the service is supplied within a reasonable time as required by law.",
          ],
        },
        {
          heading: "4. Access delivery and completion",
          blocks: [
            "Access information is delivered when usable credentials or the agreed account access become available and any required confirmation is provided. You should keep the order confirmation and protect the credentials.",
            "Delivery of access is the start of the agreed service, not automatic completion of it. Ongoing availability and allowances remain due according to the order. Full performance for cancellation purposes is assessed against the entire purchased service and the law; issuing credentials alone does not establish it.",
          ],
        },
        {
          heading: "5. Customer review",
          blocks: [
            "After delivery, review the proxy type, location, quantity, traffic allowance and validity period. Report an apparent mismatch or inability to access the delivered Service promptly, with the order reference and technical details.",
          ],
        },
        {
          heading: "6. Credential security",
          blocks: [
            "Store credentials securely and limit access to authorised users. Notify us promptly if they may be compromised and rotate them where supported. Responsibility for unauthorised use depends on the circumstances, the parties’ conduct and applicable law; a Consumer is not automatically made liable for all use regardless of fault.",
          ],
        },
        {
          heading: "7. Service periods and consumption",
          blocks: [
            "A product’s validity period, traffic allowance or consumption method is displayed before purchase or in the order details. A period normally begins on activation unless stated otherwise. Unused traffic or time does not roll over unless the product description expressly allows it.",
          ],
        },
        {
          heading: "8. Failed, incorrect or defective service",
          blocks: [
            "Contact us if access is not supplied, does not match the order or is materially defective. We investigate and provide the contractual or statutory remedy applicable to the failure. For Consumers, this includes repeat performance or an appropriate price reduction where legally available, including a monetary refund when required.",
            "A replacement, credit or balance restoration is offered only on terms consistent with the applicable right. It is not an automatic substitute for a mandatory refund. Statutory cancellation during a cooling-off period is assessed separately from technical support and does not require proof of a defect.",
          ],
        },
        {
          heading: "9. Support",
          blocks: [
            `For delivery issues, contact ${COMPANY.email} from the registered account email and include the order reference, approximate purchase time, screenshots or error messages where safe, and troubleshooting already attempted. Never send passwords or full card details.`,
          ],
        },
        {
          heading: "10. Existing purchases on transition",
          blocks: [
            "An active service covered by the transition retains its remaining validity, traffic allowance and agreed product entitlements. Its original purchase and activation records are preserved. The operator transition does not mark it as delivered again, restart its term or convert it into a fresh purchase. Changes to an existing paid entitlement require the applicable contractual and consumer protections.",
          ],
        },
      ]}
    />
  );
}
