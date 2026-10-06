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
      updated="6 October 2026"
      intro="Applies to worldproxium.com and the Proxium Services. Effective date: as described in the Terms."
      sections={[
        {
          heading: "1. Scope and seller",
          blocks: [
            `This Policy governs top-ups, Visa and Mastercard payments, EUR, GBP and USD transactions, the internal account balance, invoices and payment disputes. The seller for transactions accepted under this Policy is ${COMPANY.name}, company number ${COMPANY.regNumber}, contact address ${COMPANY.address}. Earlier transactions are treated under the operator transition arrangements and are not retrospectively relabelled as new sales.`,
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
          heading: "4. Nature and treatment of the account balance",
          blocks: [
            "A credited top-up creates a contractual balance usable only to buy Proxium Services. It cannot be transferred between customers, used to pay third-party merchants or earn interest. It is not a bank deposit or a general-purpose payment facility. This Policy does not claim that Proxium is authorised by the Financial Conduct Authority or that a particular regulatory exemption has been granted.",
            "Any expiry must be clearly agreed before the relevant top-up. Without that disclosure, time alone does not cause an open account’s balance to expire. Suspension, closure or a change of operator does not automatically extinguish an unused balance or accrued refund rights. We account for it and any deduction permitted by the contract and law.",
            "Existing balances retain their recorded amount, currency and applicable refund dates on transition. An operator transfer is not a new top-up. Redemption is available through eligible commercial or statutory refunds, subject to applicable legal restrictions.",
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
          heading: "6. Total prices, taxes and optional charges",
          blocks: [
            "Before you confirm, the total payable price includes taxes and unavoidable charges that can reasonably be calculated. If a mandatory amount cannot be calculated in advance, we explain the method of calculation. No optional extra is charged without express agreement.",
            "VAT treatment depends on the actual supply, customer location and status, and any valid tax evidence. We collect and account for taxes where legally required. A VAT number or registration is stated only if it actually applies; UK incorporation does not itself establish VAT registration. You must supply accurate billing information and remain responsible for charges lawfully imposed on you by your bank or authority.",
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
          heading: "8. Invoices, receipts and records",
          blocks: [
            "Electronic receipts or invoices identify the seller for the relevant transaction, its company number, the transaction date, currency, amount and tax information required by law. A new receipt is not issued to recast an earlier sale as having been made by a different company. Historic seller details remain correct for historic transactions.",
            "You may request a billing correction by email. Transaction and accounting records are retained for the applicable legal period and for proportionate dispute or fraud-prevention purposes. This is separate from proxy traffic logging.",
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
            "You may contact us to resolve a disputed payment, but contacting us first is not a condition of a statutory or card-scheme right. We will not penalise a Consumer solely for making a legitimate dispute or exercising a lawful right.",
            "An unauthorised payment, fraud or knowingly unfounded reversal may result in proportionate investigation, restriction and lawful recovery of amounts due. We may provide payment providers with relevant transaction, acceptance, activation and account records. No retained proxy traffic record is represented as available.",
            "If a refund and chargeback concern the same amount, we coordinate them to avoid duplicate reimbursement. An unrelated refund or statutory remedy is not automatically withheld merely because another payment is disputed.",
          ],
        },
        {
          heading: "11. Refunds and closed accounts",
          blocks: [
            "The Refund and Cancellation Policy governs commercial refunds, consumer cancellation and defective service remedies. Statutory rights are considered independently of our 14-day commercial top-up offer. Funds already spent may still be refundable where a statutory service remedy applies.",
            "Refunds are normally made to the original payment method and currency without a refund fee. If a refund relates to a payment made before the transition, the payment provider and relevant operator may need to coordinate its return; the transition does not reduce the entitlement or replace a statutory deadline with an indefinite processing period. Alternative arrangements require lawful handling and agreement where needed.",
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
