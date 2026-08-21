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
      updated="20 August 2026"
      intro="Applies to worldproxium.com and the Proxium Services."
      sections={[
        {
          heading: "1. Nature of delivery",
          blocks: [
            "Proxium supplies digital proxy access. No physical goods are shipped. Delivery occurs electronically through the Proxium dashboard, account interface, API or another electronic method stated in the order.",
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
          heading: "3. Delivery time",
          blocks: [
            "Activation is normally immediate or completed within a short period after purchase. It may take longer because of inventory allocation, payment review, account verification, maintenance, provider delay or a technical incident.",
            "Any estimated activation time is not a guaranteed deadline unless a separate written agreement states otherwise. If delivery is materially delayed, contact support before placing a duplicate order.",
          ],
        },
        {
          heading: "4. Delivery confirmation",
          blocks: [
            "A Service is considered delivered when access information is made available in the Customer’s dashboard, the account is enabled to use the purchased proxy pool, or an activation confirmation is sent. The Customer is responsible for maintaining access to the registered email and dashboard.",
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
            "Proxy credentials are confidential digital access information. The Customer must store them securely, limit access and rotate or replace them where supported after suspected compromise. Use by a person who obtained credentials through the Customer is treated as account use unless Proxium caused the compromise.",
          ],
        },
        {
          heading: "7. Service periods and consumption",
          blocks: [
            "A product’s validity period, traffic allowance or consumption method is displayed before purchase or in the order details. A period normally begins on activation unless stated otherwise. Unused traffic or time does not roll over unless the product description expressly allows it.",
          ],
        },
        {
          heading: "8. Failed or incorrect delivery",
          blocks: [
            "Where Proxium confirms non-delivery or a material mismatch, we may correct the order, replace the Service, restore the deducted balance, issue an account credit or provide a refund as appropriate. Remedies are governed by the Terms and Refund & Cancellation Policy.",
          ],
        },
        {
          heading: "9. Support",
          blocks: [
            `For delivery issues, contact ${COMPANY.email} from the registered account email and include the order reference, approximate purchase time, screenshots or error messages where safe, and troubleshooting already attempted. Never send passwords or full card details.`,
          ],
        },
      ]}
    />
  );
}
