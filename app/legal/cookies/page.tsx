import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { COMPANY } from "@/lib/company";

export const metadata: Metadata = {
  title: "Cookie Policy | Proxium",
  description:
    "How Proxium uses cookies and similar technologies on worldproxium.com and the dashboard, the categories used, and how to manage your consent.",
};

export default function CookiePolicyPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      updated="6 October 2026"
      intro="Applies to worldproxium.com and the Proxium Services. Effective date: as described in the Terms."
      sections={[
        {
          heading: "1. Purpose and legal framework",
          blocks: [
            `This Cookie Policy explains how ${COMPANY.name} uses cookies and similar storage or access technologies on worldproxium.com and its dashboard. It complements the Privacy Policy. UK use is governed by the Privacy and Electronic Communications Regulations 2003 (PECR), as amended, alongside UK GDPR where personal information is processed. Requirements applicable to visitors elsewhere are also respected.`,
          ],
        },
        {
          heading: "2. What cookies are",
          blocks: [
            "Cookies are small text files stored on a browser or device. Similar technologies include local storage, pixels, tags and software development kit identifiers. They may be set by Proxium or by a service provider operating a feature.",
          ],
        },
        {
          heading: "3. Cookie categories",
          blocks: [
            { subhead: "Strictly necessary" },
            "Technologies needed for a communication or a service you request, such as a login session, checkout security or saving a privacy choice, where the legal exemption actually applies. A technology is not exempt merely because it is useful to the business.",
            { subhead: "Optional preferences" },
            "Technologies for additional interface or preference features. Where these are optional and not demonstrably exempt, they are used only with prior consent.",
            { subhead: "Analytics" },
            "Technologies that measure website navigation or performance, if implemented. Our default is prior consent. A statistical-purpose exception is used only if its legal conditions, transparency and required right to object have been verified for the actual implementation.",
            { subhead: "Advertising and campaign measurement" },
            "Technologies for advertising, profiling or measuring campaigns, if implemented. Consent is requested before they are used where required; they are not treated as necessary for proxy access.",
            "These descriptions are categories, not a statement that every technology is deployed. Actual technologies, providers, purposes and duration must be disclosed in the current inventory made available with the site’s privacy controls.",
          ],
        },
        {
          heading: "4. Inventory, providers and duration",
          blocks: [
            "The current inventory identifies the cookies and similar technologies actually deployed, their provider, purpose, category and duration, and any applicable consent or exemption. It is available with the website’s cookie information or privacy controls. You may also request it by email. Third-party tags and local storage are covered where they store or access information on your device.",
            "Session technologies generally expire when the session ends; persistent technologies have a stated duration. Technologies are kept only as long as reasonably needed for the disclosed purpose. Provider changes or new purposes are assessed before deployment and the disclosures are updated.",
          ],
        },
        {
          heading: "5. Consent, rejection and withdrawal",
          blocks: [
            "Where consent is required, optional technologies remain blocked until you make an informed affirmative choice. You can accept or reject optional categories and change a choice through Cookie Settings. Rejection and withdrawal are as straightforward as acceptance; no pre-ticked choice, continued browsing or acceptance of general Terms is treated as consent.",
            "Rejecting optional technologies does not prevent access to the core paid service. Where a lawful exception requires a right to object instead of consent, an effective objection control is provided and explained. We retain an appropriate record of preferences and apply withdrawal to future use without affecting prior lawful processing.",
            "You can also delete or block technologies through your browser. Blocking a genuinely necessary session or security technology may prevent the requested login or checkout function. The consent interface and Cookie Settings remain the direct controls for choices offered by Proxium.",
          ],
        },
        {
          heading: "6. Third-party technologies",
          blocks: [
            "Where a third-party provider sets or receives data through a cookie, that provider may process data under its own privacy terms. Proxium evaluates providers and limits optional technologies through consent controls, but does not control a provider’s independent processing.",
          ],
        },
        {
          heading: "7. Do Not Track and similar signals",
          blocks: [
            "Browser signals are not interpreted consistently across the industry. We respond to legally required consent choices and any mandatory recognised signal applicable to the Service. Cookie settings remain the primary control.",
          ],
        },
        {
          heading: "8. Changes and contact",
          blocks: [
            `We may update this Policy when technologies, providers or legal requirements change. Questions may be sent to ${COMPANY.name} at ${COMPANY.email}.`,
          ],
        },
      ]}
    />
  );
}
