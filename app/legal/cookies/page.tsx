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
      updated="20 August 2026"
      intro="Applies to worldproxium.com and the Proxium Services."
      sections={[
        {
          heading: "1. Purpose",
          blocks: [
            `This Cookie Policy explains how ${COMPANY.name} uses cookies and similar technologies on worldproxium.com and the Proxium dashboard. It should be read together with the Privacy Policy.`,
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
            "Required for website operation, security, authentication, session management, fraud prevention, load balancing and saving privacy choices. These cannot be disabled through the consent banner because the requested service would not function correctly without them.",
            { subhead: "Functional" },
            "Remember optional preferences such as language, currency or interface settings. Where required, these are activated only after consent.",
            { subhead: "Analytics" },
            "Help us understand aggregated use, navigation and technical performance so that we can improve the website. These are non-essential and require consent where applicable.",
            { subhead: "Advertising or measurement" },
            "Measure campaigns or support relevant advertising. Proxium will use these technologies only where implemented, disclosed and lawfully consented to.",
          ],
        },
        {
          heading: "4. Specific cookies and duration",
          blocks: [
            `The cookies actually used may change as the website and providers change. A current inventory of cookie names, providers, purposes, categories and lifetimes must be displayed through the cookie consent settings where available. You may also request the current inventory at ${COMPANY.email}.`,
            "Session cookies normally expire when the browser is closed. Persistent cookies remain until their stated expiry or earlier deletion. We do not retain a cookie longer than reasonably necessary for its stated purpose.",
          ],
        },
        {
          heading: "5. Consent and choices",
          blocks: [
            "On a first visit, you may accept all optional cookies or reject non-essential cookies. Optional technologies must not be activated before valid consent where consent is required. Withdrawing consent does not affect processing that occurred lawfully before withdrawal.",
            "Cookie preferences should remain available through a “Cookie Settings” control on the website. You may also delete or block cookies through browser settings. Blocking strictly necessary cookies may prevent login, checkout or other functionality.",
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
