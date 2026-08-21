import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { COMPANY } from "@/lib/company";

export const metadata: Metadata = {
  title: "Acceptable Use Policy | Proxium",
  description:
    "The rules that protect customers, third parties and the Proxium network, covering prohibited activity, network integrity, scraping and enforcement.",
};

export default function AcceptableUsePage() {
  return (
    <LegalPage
      title="Acceptable Use Policy"
      updated="20 August 2026"
      intro="Applies to worldproxium.com and the Proxium Services."
      sections={[
        {
          heading: "1. Purpose and application",
          blocks: [
            "This Acceptable Use Policy (“AUP”) protects customers, third parties and the Proxium network. It applies to every person, device, application and end user accessing a Proxium Service through your account. It forms part of the Terms & Conditions.",
            "You may use the Services only for lawful purposes and in a manner that respects security, privacy, intellectual property, network integrity and third-party rights. A use not expressly listed below may still be prohibited if it creates comparable harm or risk.",
          ],
        },
        {
          heading: "2. Illegal and harmful activity",
          blocks: [
            {
              list: [
                "Committing, facilitating, concealing or preparing any crime, fraud or violation of applicable law.",
                "Phishing, carding, identity theft, impersonation, money laundering, sanctions evasion or deceptive financial activity.",
                "Accessing, acquiring, hosting, transmitting or distributing child sexual abuse material, terrorist content where unlawful, or other content whose possession or distribution is illegal.",
                "Threatening, harassing, stalking, exploiting or unlawfully surveilling another person.",
                "Using the Service to trade controlled goods, stolen property, unlawfully obtained credentials or personal data.",
              ],
            },
          ],
        },
        {
          heading: "3. Security abuse",
          blocks: [
            {
              list: [
                "Unauthorised access to an account, device, system, network, database or restricted resource.",
                "Credential stuffing, password spraying, brute-force authentication, session hijacking or testing stolen credentials.",
                "Distribution, control or operation of malware, ransomware, spyware, botnets, malicious payloads or command-and-control infrastructure.",
                "Denial-of-service or distributed denial-of-service activity, traffic amplification, destructive load generation or intentional resource exhaustion.",
                "Port scanning, vulnerability scanning, exploitation or penetration testing without documented authorisation from the system owner.",
                "Circumventing security controls, authentication, paywalls, rate limits, CAPTCHAs, digital rights management or technical restrictions without lawful authorisation.",
              ],
            },
          ],
        },
        {
          heading: "4. Messaging and platform abuse",
          blocks: [
            {
              list: [
                "Sending spam, unsolicited bulk email, messages, comments, calls or other mass communications.",
                "Creating, farming, buying, selling or operating accounts in violation of law or in a manner intended to deceive a platform or other users.",
                "Manipulating advertising, reviews, votes, rankings, metrics, engagement, referral programmes or marketplace activity through inauthentic behaviour.",
                "Evading a lawful platform suspension or restriction where doing so causes harm, facilitates abuse or violates a binding legal obligation.",
              ],
            },
          ],
        },
        {
          heading: "5. Data collection and scraping",
          blocks: [
            "Automated data collection must be lawful, proportionate and configured to avoid disruption. You are responsible for determining whether a target permits access and whether personal data, copyrighted material, database rights, confidentiality or contractual restrictions are involved.",
            {
              list: [
                "Do not access non-public data without authorisation or use credentials not lawfully issued to you.",
                "Do not collect sensitive personal data, authentication data or payment data without a clear lawful basis and appropriate safeguards.",
                "Do not ignore clear technical restrictions in a way that damages or materially overloads a target.",
                "Do not republish or commercially exploit third-party content unless you hold the required rights.",
              ],
            },
          ],
        },
        {
          heading: "6. Network integrity",
          blocks: [
            {
              list: [
                "Do not overload, degrade, probe or interfere with Proxium, upstream providers, another customer or a third-party network.",
                "Do not generate abnormal concurrency, request volume, bandwidth or error patterns intended to evade product limits or disrupt a target.",
                "Do not resell, sublicense, publish or openly share proxy credentials unless Proxium has expressly authorised the arrangement.",
                "Do not forge headers, obscure attribution for abuse, tamper with authentication or bypass account and traffic controls.",
              ],
            },
          ],
        },
        {
          heading: "7. Intellectual property and privacy",
          blocks: [
            "You must respect copyright, trademarks, database rights, trade secrets, confidentiality, publicity, privacy and data protection rights. A proxy does not confer permission to collect, copy, use or distribute third-party information.",
          ],
        },
        {
          heading: "8. High-risk uses",
          blocks: [
            "You must not use the Services to make decisions producing legal or similarly significant effects about a person in employment, credit, insurance, housing, education, healthcare or another high-impact context unless the activity is lawful, appropriately supervised and supported by required safeguards.",
            "Automated access to banking, payment, ticketing, gambling, government, healthcare or other sensitive systems may be restricted or require prior approval.",
          ],
        },
        {
          heading: "9. Restricted locations and persons",
          blocks: [
            "You must not access or use the Services from a prohibited country, on behalf of a prohibited or sanctioned person, or through information intended to conceal an ineligible location. The Restricted Countries & Eligibility Policy applies.",
          ],
        },
        {
          heading: "10. Customer controls",
          blocks: [
            "Business customers must take reasonable steps to supervise personnel and end users, restrict credentials, set appropriate request limits, investigate alerts and stop prohibited activity. You must cooperate with reasonable abuse and security inquiries.",
          ],
        },
        {
          heading: "11. Enforcement",
          blocks: [
            "We may block destinations, ports, protocols or request patterns and may suspend or terminate a Service or account where we reasonably suspect a violation. Urgent action may occur without advance notice. We may request use-case information, preserve data already held, notify affected providers or authorities where lawful, and refuse a refund where the Terms and Refund Policy permit.",
            `Enforcement is risk-based and may consider severity, intent, recurrence, customer cooperation and harm. A customer may submit a reasoned appeal through ${COMPANY.email}.`,
          ],
        },
        {
          heading: "12. Reporting violations",
          blocks: [
            `Report suspected abuse to ${COMPANY.email} using the Abuse Reporting & Complaints Procedure. Include sufficient technical and factual information for investigation. Do not send unlawful content unless specifically requested through a secure channel.`,
          ],
        },
        {
          heading: "13. Changes",
          blocks: [
            "We may update this AUP as risks, law or technology change. Material updates will be published with a new date and notified where required.",
          ],
        },
      ]}
    />
  );
}
