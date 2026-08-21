import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { COMPANY } from "@/lib/company";

export const metadata: Metadata = {
  title: "Payment & Account Balance Policy | Proxium",
  description:
    "How Proxium handles top-ups, supported currencies and cards, the prepaid account balance, invoices, payment review, refunds and chargebacks.",
};

export default function PaymentPolicyPage() {
  return (
    <LegalPage
      title="Payment & Account Balance Policy"
      updated="20 August 2026"
      intro="Applies to worldproxium.com and the Proxium Services."
      sections={[
        {
          heading: "1. Scope",
          blocks: [
            "This Payment & Account Balance Policy governs top-ups, currencies, card payments, the Proxium account balance, invoices, payment review and chargebacks. It forms part of the Terms & Conditions.",
          ],
        },
        {
          heading: "2. Supported payment methods and currencies",
          blocks: [
            "Proxium accepts eligible Visa and Mastercard payments through third-party payment providers. Available methods may vary by country, account, currency and risk review.",
            "Top-ups and purchases may be made in EUR, GBP or USD where displayed at checkout. The selected transaction currency and amount are shown before payment confirmation.",
          ],
        },
        {
          heading: "3. Payment processing",
          blocks: [
            "Payment details are entered into systems operated by payment providers. Proxium receives transaction status, references, limited card information such as card type and masked digits where supplied, billing information and fraud signals. We do not intend to store full payment-card numbers or card security codes.",
            "A payment is complete only after authorisation and successful processing. We may delay crediting, request verification or reject a payment because of provider rules, fraud concerns, restricted-country indicators, inconsistent information, legal requirements or technical failure.",
          ],
        },
        {
          heading: "4. Account balance",
          blocks: [
            "A successful top-up creates an internal contractual credit associated with the account. The balance may be used only to buy Proxium Services. It is not transferable between customers, redeemable by a third party, capable of earning interest, or intended as a payment instrument for goods or services supplied by others.",
            "A balance is not a bank deposit, electronic-money account, wallet, investment or stored-value product independent of the Proxium Services. Cash withdrawal is available only through an eligible refund under the Refund & Cancellation Policy.",
            "If a balance expiry applies, it must be clearly disclosed before the relevant top-up. In the absence of such disclosure, the balance will not expire solely because time passes while the account remains open and compliant.",
          ],
        },
        {
          heading: "5. Currency and conversion",
          blocks: [
            "The balance is maintained in the currency credited to the account or shown in the dashboard. Proxium does not guarantee conversion between balances. If conversion is offered, the applicable rate and any fee will be shown before confirmation.",
            "A card issuer or bank may convert the payment independently and charge foreign-exchange or cross-border fees. Those rates and fees are not controlled or refunded by Proxium.",
          ],
        },
        {
          heading: "6. Pricing and taxes",
          blocks: [
            "The price and applicable taxes are shown before an order is confirmed. Tax treatment may depend on customer type, location, billing information and a valid tax number. You are responsible for supplying accurate tax and billing data.",
            "You remain responsible for taxes, duties, withholding and bank fees imposed on you, except taxes that Proxium is legally required to collect and remit.",
          ],
        },
        {
          heading: "7. Balance deductions and corrections",
          blocks: [
            "The displayed purchase amount is deducted when an order is confirmed. If a transaction is duplicated, reversed, refunded or processed incorrectly, we may make a corresponding correction and will keep a record in the account or provide notice.",
            "You must report a suspected balance error promptly with the relevant transaction information. We may request evidence and temporarily restrict the affected amount while investigating.",
          ],
        },
        {
          heading: "8. Invoices and records",
          blocks: [
            "Invoices or transaction receipts are made available electronically or supplied by email where applicable. You must review billing data and request corrections promptly. We retain transaction records as required by tax, accounting, fraud-prevention and dispute obligations.",
          ],
        },
        {
          heading: "9. Fraud prevention and verification",
          blocks: [
            "We and our providers may evaluate billing address, account location, device or IP indicators, transaction history, card signals and other risk information. We may request identity, company, authority, use-case or source-of-funds information where proportionate and lawful.",
            "An attempted payment does not guarantee acceptance. We may cancel or refund a payment rather than provide Services if verification fails or risk is unacceptable.",
          ],
        },
        {
          heading: "10. Chargebacks and payment disputes",
          blocks: [
            `Contact ${COMPANY.email} before initiating a chargeback so that we can investigate. An unjustified chargeback, payment reversal or use of an unauthorised payment instrument may lead to suspension, recovery of amounts and reasonable costs, and restriction of future payments.`,
            "Nothing prevents a consumer from exercising a lawful card or payment right. We may provide transaction, acceptance, activation and account records to payment providers when responding to a dispute.",
          ],
        },
        {
          heading: "11. Refunds",
          blocks: [
            "Refunds are governed by the Refund & Cancellation Policy and are normally returned to the original payment method. A refund reduces the corresponding balance and may be refused where the amount has already been spent, the request is late, or fraud or abuse applies, subject to mandatory law.",
          ],
        },
        {
          heading: "12. Changes and contact",
          blocks: [
            `Supported methods and providers may change. Material changes will not retroactively alter a completed transaction. Payment questions should be sent to ${COMPANY.email}.`,
          ],
        },
      ]}
    />
  );
}
