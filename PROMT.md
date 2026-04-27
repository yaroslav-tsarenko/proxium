# FULL PROJECT PROMPT — Proxium: Premium Proxy Service Website

> **Purpose**: This is a complete, self-contained prompt for building a production-grade proxy service website from scratch. Hand this entire file to Claude Code or any AI coding agent — it covers architecture, folder structure, design system, every section's layout, animations, i18n, database, and SEO.

---

## 1. PROJECT OVERVIEW

**Brand**: Proxium
**Tagline**: "Route smarter. Scale faster."
**Domain concept**: proxium.io
**Industry**: Premium proxy service provider — residential, datacenter, mobile, and ISP proxies for web scraping, ad verification, social media management, SEO monitoring, and multi-account operations.

**Competitors for design reference**: Decodo (Smartproxy), Bright Data, Oxylabs, NetNut, SOAX — but Proxium should look **more modern and developer-oriented** than all of them, closer to Vercel/Linear/Raycast aesthetic.

### Tech Stack
- **Framework**: Next.js 14+ (App Router, Server Components by default)
- **Styling**: Tailwind CSS 3+ with custom design tokens
- **UI Library**: shadcn/ui (Radix-based, fully customizable)
- **Typography**: JetBrains Mono as the PRIMARY font (monospace-first design)
- **Animations**: GSAP 3 + ScrollTrigger for scroll reveals, parallax, micro-interactions
- **3D / Visual**: Three.js (react-three-fiber + drei) for hero globe/network scene
- **Database**: MongoDB (Mongoose ODM) — waitlist, contact, blog
- **i18n**: next-intl for full internationalization (default: English)
- **SEO**: Full metadata, JSON-LD, sitemap, robots.txt, Open Graph
- **Icons**: Lucide React (consistent with shadcn/ui)
- **Responsive**: Mobile-first, all breakpoints 320px → 2560px

---

## 2. FOLDER STRUCTURE

```
proxium/
├── public/
│   ├── images/
│   │   ├── logo.svg                   # Proxium logo (monospaced wordmark)
│   │   ├── logo-icon.svg              # Icon-only version (P monogram)
│   │   ├── og-image.png               # 1200×630 Open Graph
│   │   └── favicon.ico
│   ├── fonts/
│   │   ├── JetBrainsMono-Regular.woff2
│   │   ├── JetBrainsMono-Medium.woff2
│   │   ├── JetBrainsMono-SemiBold.woff2
│   │   ├── JetBrainsMono-Bold.woff2
│   │   └── JetBrainsMono-ExtraBold.woff2
│   └── models/
│       └── globe-points.json          # Pre-computed globe point data
│
├── src/
│   ├── app/
│   │   ├── [locale]/
│   │   │   ├── layout.tsx             # Root layout: fonts, providers, metadata, Header + Footer
│   │   │   ├── page.tsx               # Homepage — assembles all landing sections
│   │   │   ├── pricing/
│   │   │   │   └── page.tsx           # Full pricing page
│   │   │   ├── products/
│   │   │   │   ├── page.tsx           # Products overview
│   │   │   │   ├── residential/
│   │   │   │   │   └── page.tsx       # Residential proxies detail
│   │   │   │   ├── datacenter/
│   │   │   │   │   └── page.tsx       # Datacenter proxies detail
│   │   │   │   ├── mobile/
│   │   │   │   │   └── page.tsx       # Mobile proxies detail
│   │   │   │   └── isp/
│   │   │   │       └── page.tsx       # ISP proxies detail
│   │   │   ├── use-cases/
│   │   │   │   └── page.tsx           # Use cases grid
│   │   │   ├── docs/
│   │   │   │   └── page.tsx           # API docs / getting started
│   │   │   ├── about/
│   │   │   │   └── page.tsx           # About page
│   │   │   ├── contact/
│   │   │   │   └── page.tsx           # Contact form → MongoDB
│   │   │   ├── blog/
│   │   │   │   ├── page.tsx           # Blog listing
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx       # Individual post
│   │   │   └── not-found.tsx          # Custom 404
│   │   │
│   │   ├── api/
│   │   │   ├── contact/
│   │   │   │   └── route.ts           # POST → save to MongoDB
│   │   │   ├── waitlist/
│   │   │   │   └── route.ts           # POST → save email
│   │   │   └── blog/
│   │   │       └── route.ts           # GET → fetch posts
│   │   │
│   │   ├── layout.tsx                 # Top-level redirect to /en
│   │   └── globals.css                # Tailwind directives + CSS vars + shadcn theme
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx             # Sticky navbar with mega-menu
│   │   │   ├── Footer.tsx             # Dark footer with grid links
│   │   │   ├── MobileMenu.tsx         # Full-screen mobile nav overlay
│   │   │   └── Container.tsx          # Max-width wrapper
│   │   │
│   │   ├── sections/                  # Homepage sections (each = viewport block)
│   │   │   ├── HeroSection.tsx        # 3D globe + headline + terminal widget
│   │   │   ├── LogoBanner.tsx         # Trusted-by logo ticker
│   │   │   ├── ProductsGrid.tsx       # 4 proxy types as interactive cards
│   │   │   ├── StatsSection.tsx       # Animated counters (IPs, countries, uptime, speed)
│   │   │   ├── FeaturesSection.tsx    # Bento-grid features with code snippets
│   │   │   ├── HowItWorks.tsx         # 3-step onboarding flow
│   │   │   ├── PricingPreview.tsx     # Pricing tables preview
│   │   │   ├── UseCasesSection.tsx    # Use case cards (scraping, SEO, ads, social)
│   │   │   ├── TestimonialsSection.tsx# Client reviews
│   │   │   ├── IntegrationsSection.tsx# Integration logos + code example
│   │   │   ├── FAQSection.tsx         # Accordion FAQ
│   │   │   └── CTASection.tsx         # Final CTA banner
│   │   │
│   │   ├── ui/                        # shadcn/ui components (generated via CLI)
│   │   │   ├── button.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   ├── accordion.tsx
│   │   │   ├── tabs.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── tooltip.tsx
│   │   │   ├── dropdown-menu.tsx
│   │   │   ├── navigation-menu.tsx
│   │   │   ├── separator.tsx
│   │   │   ├── skeleton.tsx
│   │   │   ├── switch.tsx
│   │   │   ├── slider.tsx
│   │   │   ├── table.tsx
│   │   │   └── select.tsx
│   │   │
│   │   ├── custom/                    # Custom components built on top of shadcn
│   │   │   ├── TerminalBlock.tsx      # Fake terminal/code block with typing animation
│   │   │   ├── CodeSnippet.tsx        # Syntax-highlighted code with copy button
│   │   │   ├── GradientBorder.tsx     # Card with animated gradient border
│   │   │   ├── AnimatedCounter.tsx    # Number count-up on scroll
│   │   │   ├── GlowCard.tsx           # Card with colored glow on hover
│   │   │   ├── PricingCalculator.tsx  # Interactive bandwidth/cost calculator
│   │   │   ├── IPRotationDemo.tsx     # Live-looking IP rotation animation
│   │   │   ├── SpeedMeter.tsx         # Animated response time gauge
│   │   │   └── GlobeTooltip.tsx       # Tooltip showing location on 3D globe
│   │   │
│   │   ├── three/                     # Three.js / R3F components
│   │   │   ├── NetworkGlobe.tsx       # Interactive 3D globe with connection arcs
│   │   │   ├── DataFlowLines.tsx      # Animated data flow particle lines
│   │   │   ├── GridBackground.tsx     # Subtle 3D perspective grid background
│   │   │   └── SceneWrapper.tsx       # Canvas + Suspense + mobile fallback + lazy load
│   │   │
│   │   └── animations/               # GSAP wrappers
│   │       ├── ScrollReveal.tsx       # Fade/slide on scroll
│   │       ├── TextReveal.tsx         # Character-by-character text reveal
│   │       ├── TypeWriter.tsx         # Typewriter effect for terminal
│   │       ├── CountUp.tsx            # Number counting animation
│   │       ├── ParallaxLayer.tsx      # Scroll parallax wrapper
│   │       └── StaggerChildren.tsx    # Staggered child element reveal
│   │
│   ├── lib/
│   │   ├── db/
│   │   │   ├── mongoose.ts            # MongoDB connection singleton
│   │   │   └── models/
│   │   │       ├── Contact.ts
│   │   │       ├── Waitlist.ts
│   │   │       └── BlogPost.ts
│   │   │
│   │   ├── utils/
│   │   │   ├── cn.ts                  # clsx + tailwind-merge
│   │   │   ├── constants.ts           # Site-wide constants
│   │   │   └── metadata.ts            # SEO helper
│   │   │
│   │   └── hooks/
│   │       ├── useGsap.ts             # GSAP with cleanup
│   │       ├── useMediaQuery.ts       # Responsive hook
│   │       └── useInView.ts           # Intersection Observer
│   │
│   ├── i18n/
│   │   ├── config.ts                  # Locales list, default locale
│   │   ├── request.ts                 # next-intl request config
│   │   └── routing.ts                 # next-intl routing config
│   │
│   ├── messages/
│   │   ├── en.json                    # English (default)
│   │   ├── uk.json                    # Ukrainian
│   │   └── es.json                    # Spanish
│   │
│   └── styles/
│       └── fonts.ts                   # Next.js local font loader for JetBrains Mono
│
├── components.json                    # shadcn/ui configuration
├── .env.local                         # MONGODB_URI, NEXT_PUBLIC_SITE_URL
├── .env.example
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## 3. DESIGN SYSTEM — DARK, TECHNICAL, DEVELOPER-FIRST

### 3.1 Design Philosophy
Proxium looks like a **developer tool**, not a marketing site. Think: Vercel's dashboard meets Linear's landing page meets a hacker's terminal. Monospaced typography everywhere. Dark mode. Neon accents. Code blocks as design elements. The site should feel like you're looking at a premium CLI interface wrapped in glass.

### 3.2 Color Palette

```
── BACKGROUNDS ──────────────────────────────────────
Page Background:        #09090B   (zinc-950 — near-black)
Surface Level 1:        #0F0F12   (slightly lighter — cards, sections)
Surface Level 2:        #18181B   (zinc-900 — elevated cards, modals)
Surface Level 3:        #27272A   (zinc-800 — inputs, hover states)
Surface Hover:          #1A1A2E   (dark with subtle blue undertone)

── PRIMARY (Electric Green — speed, uptime, active) ─
Primary 500:            #22C55E   (green-500 — main accent)
Primary 400:            #4ADE80   (green-400 — hover/lighter)
Primary 600:            #16A34A   (green-600 — pressed)
Primary 300:            #86EFAC   (green-300 — subtle tints)
Primary 900:            #052E16   (green-900 — dark green for bg tints)
Primary Glow:           rgba(34, 197, 94, 0.15)  (for box-shadow glows)

── SECONDARY (Cyan/Blue — data, network, connectivity) ─
Cyan 500:               #06B6D4   (cyan-500)
Cyan 400:               #22D3EE   (cyan-400)
Blue 500:               #3B82F6   (blue-500 — links, secondary actions)
Blue 400:               #60A5FA   (blue-400)

── ACCENT (Violet — premium, pro features) ──────────
Violet 500:             #8B5CF6
Violet 400:             #A78BFA

── STATUS ───────────────────────────────────────────
Success:                #22C55E   (same as primary — green)
Warning:                #EAB308   (yellow-500)
Error:                  #EF4444   (red-500)
Info:                   #06B6D4   (cyan-500)

── TEXT ─────────────────────────────────────────────
Text Primary:           #FAFAFA   (zinc-50 — near-white)
Text Secondary:         #A1A1AA   (zinc-400)
Text Tertiary:          #71717A   (zinc-500 — captions, dimmed)
Text Muted:             #52525B   (zinc-600 — very dim, decorative)
Text On Primary:        #052E16   (dark green text on green buttons)

── BORDERS ──────────────────────────────────────────
Border Default:         #27272A   (zinc-800)
Border Subtle:          #1C1C1F   (barely visible)
Border Hover:           #3F3F46   (zinc-700)
Border Focus:           #22C55E   (primary green ring)
Border Glow:            0 0 0 1px rgba(34,197,94,0.3)  (green glow border)

── GRADIENTS ────────────────────────────────────────
Hero Gradient:          linear-gradient(135deg, #22C55E 0%, #06B6D4 50%, #8B5CF6 100%)
Card Glow Gradient:     linear-gradient(135deg, rgba(34,197,94,0.1), rgba(6,182,212,0.1))
CTA Gradient:           linear-gradient(90deg, #22C55E, #06B6D4)
Terminal Gradient:       linear-gradient(180deg, #0F0F12 0%, #09090B 100%)
Mesh Background:        Soft blurred orbs of green-900/20, cyan-900/20, violet-900/10 on #09090B
```

### 3.3 shadcn/ui Theme Integration
Configure shadcn/ui CSS variables in `globals.css`:

```css
@layer base {
  :root {
    --background: 240 6% 4%;        /* #09090B */
    --foreground: 0 0% 98%;          /* #FAFAFA */
    --card: 240 5% 6%;               /* #0F0F12 */
    --card-foreground: 0 0% 98%;
    --popover: 240 5% 8%;            /* #18181B */
    --popover-foreground: 0 0% 98%;
    --primary: 142 71% 45%;          /* #22C55E */
    --primary-foreground: 144 80% 10%;
    --secondary: 240 4% 16%;         /* #27272A */
    --secondary-foreground: 0 0% 98%;
    --muted: 240 4% 16%;
    --muted-foreground: 240 5% 65%;  /* #A1A1AA */
    --accent: 240 4% 16%;
    --accent-foreground: 0 0% 98%;
    --destructive: 0 84% 60%;       /* #EF4444 */
    --destructive-foreground: 0 0% 98%;
    --border: 240 4% 16%;           /* #27272A */
    --input: 240 4% 16%;
    --ring: 142 71% 45%;            /* #22C55E */
    --radius: 0.75rem;
  }
}
```

---

## 4. TYPOGRAPHY — JetBrains Mono First

### 4.1 Font Configuration
JetBrains Mono is the **primary and only font** for the entire site. This is a bold choice that reinforces the developer/technical identity.

Load via `next/font/local` in `src/styles/fonts.ts`:
```ts
import localFont from "next/font/local";

export const jetbrainsMono = localFont({
  src: [
    { path: "../../public/fonts/JetBrainsMono-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/JetBrainsMono-Medium.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/JetBrainsMono-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "../../public/fonts/JetBrainsMono-Bold.woff2", weight: "700", style: "normal" },
    { path: "../../public/fonts/JetBrainsMono-ExtraBold.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-mono",
  display: "swap",
});
```

### 4.2 Type Scale
```
Hero H1:         56px / 64px line-height / weight 800 / tracking -0.04em    (mobile: 36px / 42px)
Section H2:      40px / 48px / weight 700 / tracking -0.03em                (mobile: 28px / 34px)
Card H3:         22px / 30px / weight 600 / tracking -0.02em                (mobile: 18px / 26px)
Body Large:      17px / 28px / weight 400 / tracking -0.01em                (mobile: 16px)
Body:            15px / 26px / weight 400 / tracking -0.005em
Body Small:      13px / 20px / weight 400
Caption:         11px / 16px / weight 500 / tracking 0.08em / uppercase
Stat Number:     48px / 52px / weight 700                                   (mobile: 32px)
Price:           36px / 40px / weight 700
Code Inline:     14px / 22px / weight 400 (same font, just styled differently with bg)
Terminal:        14px / 22px / weight 400
```

### 4.3 Typography Rules
- **Everything** is JetBrains Mono — headings, body, navigation, buttons, prices, everything
- Headlines: `text-zinc-50` (#FAFAFA) — maximum contrast
- Body text: `text-zinc-400` (#A1A1AA) — softer, comfortable reading on dark
- Section labels: `text-primary-500 uppercase tracking-[0.2em] text-[11px] font-semibold` — tiny green tags
- Code blocks: Same font, but with `bg-zinc-900 border border-zinc-800 rounded-lg` styling
- Numbers / stats: weight 700, slightly larger, `text-zinc-50`
- Max body text width: `max-w-xl` (576px) — tighter for monospace readability
- Line-height is generous (1.7x for body) since monospace is denser

---

## 5. i18n ARCHITECTURE (next-intl)

### 5.1 Config
```ts
// src/i18n/config.ts
export const locales = ["en", "uk", "es"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";
export const localeNames: Record<Locale, string> = {
  en: "English",
  uk: "Українська",
  es: "Español",
};
```

### 5.2 Translation File — `src/messages/en.json`
```json
{
  "metadata": {
    "title": "Proxium — Premium Proxy Infrastructure",
    "description": "Enterprise-grade residential, datacenter, mobile & ISP proxies. 85M+ IPs across 195+ countries. Built for developers, trusted by teams."
  },
  "nav": {
    "products": "Products",
    "pricing": "Pricing",
    "useCases": "Use Cases",
    "docs": "Docs",
    "blog": "Blog",
    "contact": "Contact",
    "signIn": "Sign In",
    "getStarted": "Get Started"
  },
  "hero": {
    "badge": "Now with 85M+ residential IPs",
    "titleLine1": "Proxy infrastructure",
    "titleLine2": "for the modern web",
    "subtitle": "Residential, datacenter, mobile & ISP proxies with 99.9% uptime and sub-second response times. One API, 195+ countries, unlimited scale.",
    "cta": "Start Free Trial",
    "ctaSecondary": "View Docs",
    "terminal": {
      "comment": "# Quick start with Proxium API",
      "line1": "curl -x proxy.proxium.io:7777 \\",
      "line2": "  -U \"user:pass\" \\",
      "line3": "  https://httpbin.org/ip",
      "response": "{ \"origin\": \"185.xxx.xxx.42\" }"
    }
  },
  "stats": {
    "ips": { "value": "85M+", "label": "Residential IPs" },
    "countries": { "value": "195+", "label": "Countries" },
    "uptime": { "value": "99.9%", "label": "Uptime SLA" },
    "response": { "value": "<0.6s", "label": "Avg Response" }
  },
  "products": {
    "sectionTag": "Products",
    "title": "The right proxy for every task",
    "subtitle": "Four proxy types engineered for different workloads. Mix and match as needed.",
    "residential": {
      "title": "Residential Proxies",
      "description": "85M+ real-user IPs from ISPs worldwide. Highest anonymity, lowest block rates. Perfect for scraping, ad verification, and market research.",
      "badge": "Most Popular",
      "startingAt": "From $2.80/GB"
    },
    "datacenter": {
      "title": "Datacenter Proxies",
      "description": "500K+ high-speed IPs from global data centers. Maximum throughput for bulk operations. Shared or dedicated options.",
      "startingAt": "From $0.80/IP"
    },
    "mobile": {
      "title": "Mobile Proxies",
      "description": "10M+ 4G/5G IPs from real mobile carriers in 160+ countries. Bypass mobile-first anti-bot systems with genuine device fingerprints.",
      "badge": "Premium",
      "startingAt": "From $6.00/GB"
    },
    "isp": {
      "title": "ISP Proxies",
      "description": "Static residential IPs with datacenter speed. Persistent sessions for account management, social media, and long-running tasks.",
      "startingAt": "From $2.00/IP"
    }
  },
  "features": {
    "sectionTag": "Built for Developers",
    "title": "Infrastructure that scales",
    "subtitle": "Everything you need to integrate, monitor, and scale your proxy operations.",
    "items": {
      "api": {
        "title": "One Unified API",
        "description": "Single endpoint for all proxy types. RESTful, well-documented, with SDKs for Python, Node.js, Go, and Java."
      },
      "rotation": {
        "title": "Smart Rotation",
        "description": "Automatic IP rotation with configurable intervals. Sticky sessions up to 30 minutes for stateful workflows."
      },
      "targeting": {
        "title": "Geo-Targeting",
        "description": "Country, state, city, and ASN-level targeting. Target specific carriers for mobile proxies."
      },
      "dashboard": {
        "title": "Real-Time Dashboard",
        "description": "Monitor bandwidth, success rates, response times, and costs. Set alerts and export reports."
      },
      "protocols": {
        "title": "HTTP(S) & SOCKS5",
        "description": "Full protocol support including HTTPS CONNECT and SOCKS5 with authentication."
      },
      "webhooks": {
        "title": "Webhooks & Alerts",
        "description": "Get notified on usage thresholds, errors, or anomalies. Integrate with Slack, Discord, or email."
      }
    }
  },
  "howItWorks": {
    "sectionTag": "Getting Started",
    "title": "Three commands to go live",
    "steps": {
      "signup": {
        "title": "Create Account",
        "description": "Sign up in 30 seconds. No credit card required for the free trial.",
        "code": "$ proxium auth login"
      },
      "configure": {
        "title": "Configure",
        "description": "Choose proxy type, location, rotation. Get your credentials instantly.",
        "code": "$ proxium config set --type residential --country US"
      },
      "deploy": {
        "title": "Start Routing",
        "description": "Send your first request. Auto-scaling handles the rest.",
        "code": "$ curl -x gate.proxium.io:7777 https://target.com"
      }
    }
  },
  "useCases": {
    "sectionTag": "Use Cases",
    "title": "Built for your workflow",
    "items": {
      "scraping": { "title": "Web Scraping", "description": "Collect data at scale without blocks or CAPTCHAs." },
      "seo": { "title": "SEO Monitoring", "description": "Track rankings from any location with real user IPs." },
      "adVerification": { "title": "Ad Verification", "description": "Verify ad placements and detect fraud globally." },
      "socialMedia": { "title": "Social Media", "description": "Manage multiple accounts safely with unique IPs." },
      "ecommerce": { "title": "Price Monitoring", "description": "Monitor competitor pricing across regions in real-time." },
      "market": { "title": "Market Research", "description": "Access geo-restricted content for competitive analysis." }
    }
  },
  "pricing": {
    "sectionTag": "Pricing",
    "title": "Pay only for what you use",
    "subtitle": "No hidden fees. No commitments. Scale up or down anytime.",
    "cta": "See Full Pricing",
    "plans": {
      "starter": {
        "name": "Starter",
        "price": "$50",
        "period": "/month",
        "description": "For individuals and small projects",
        "features": ["5 GB residential bandwidth", "Shared datacenter IPs", "3 geo-locations", "Email support", "API access"]
      },
      "pro": {
        "name": "Pro",
        "price": "$249",
        "period": "/month",
        "badge": "Most Popular",
        "description": "For growing teams and businesses",
        "features": ["50 GB residential bandwidth", "Dedicated datacenter IPs", "All geo-locations", "Priority support", "Advanced dashboard", "Webhooks & alerts", "Team seats (5)"]
      },
      "enterprise": {
        "name": "Enterprise",
        "price": "Custom",
        "period": "",
        "description": "For large-scale operations",
        "features": ["Unlimited bandwidth", "Custom IP pools", "Dedicated account manager", "SLA guarantee", "Custom integrations", "On-premise options", "SSO & audit logs"]
      }
    }
  },
  "testimonials": {
    "sectionTag": "Testimonials",
    "title": "Trusted by engineering teams"
  },
  "faq": {
    "sectionTag": "FAQ",
    "title": "Frequently asked questions",
    "items": {
      "q1": {
        "question": "What types of proxies does Proxium offer?",
        "answer": "We offer four types: residential (85M+ IPs), datacenter (500K+ IPs), mobile (10M+ 4G/5G IPs), and ISP (static residential) proxies across 195+ countries."
      },
      "q2": {
        "question": "How fast are the proxies?",
        "answer": "Our average response time is under 0.6 seconds for residential proxies and under 0.3 seconds for datacenter proxies. We guarantee 99.9% uptime SLA."
      },
      "q3": {
        "question": "Do you support SOCKS5?",
        "answer": "Yes. All proxy types support HTTP, HTTPS, and SOCKS5 protocols with username/password or IP whitelisting authentication."
      },
      "q4": {
        "question": "Can I try before I buy?",
        "answer": "Absolutely. We offer a free trial with real residential IPs — no credit card required. Start in under 60 seconds."
      },
      "q5": {
        "question": "Are the IPs ethically sourced?",
        "answer": "Yes. All residential and mobile IPs come from opt-in networks with full user consent. We comply with GDPR and CCPA."
      }
    }
  },
  "cta": {
    "title": "Ready to route smarter?",
    "subtitle": "Start your free trial today. No credit card required.",
    "button": "Get Started Free",
    "note": "Free 1GB trial · No credit card · Setup in 60 seconds"
  },
  "footer": {
    "description": "Enterprise-grade proxy infrastructure for the modern web.",
    "products": "Products",
    "resources": "Resources",
    "company": "Company",
    "legal": "Legal",
    "terms": "Terms of Service",
    "privacy": "Privacy Policy",
    "acceptable": "Acceptable Use Policy",
    "newsletter": "Stay updated",
    "emailPlaceholder": "you@company.com",
    "subscribe": "Subscribe",
    "rights": "All rights reserved.",
    "status": "System Status"
  }
}
```

### 5.3 Adding a New Language
1. Create `src/messages/fr.json` — copy `en.json`, translate values
2. Add `"fr"` to `locales` array in `src/i18n/config.ts`
3. Add display name: `fr: "Français"` in `localeNames`
4. Done — auto-detected, routing works

---

## 6. PAGE LAYOUT — SECTION-BY-SECTION DESIGN

### 6.1 HEADER / NAVBAR
- **Height**: 64px
- **Background**: `bg-transparent` → `bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800/50` on scroll
- **Logo**: "Proxium" in JetBrains Mono ExtraBold, 20px, `text-zinc-50`. Prefix with a small green dot indicator (`●`) or terminal cursor block (`▌`)
- **Nav Links**: `text-zinc-400 hover:text-zinc-50 transition-colors text-[14px] font-medium`
- **Products dropdown**: Mega-menu with 4 proxy types, each with icon + title + one-liner
- **Right side**: Language dropdown (compact `EN ▼`) + "Sign In" ghost link + "Get Started" green button
- **CTA Button**: `bg-primary-500 text-zinc-950 font-semibold rounded-lg px-5 py-2 text-[13px] hover:bg-primary-400`
- **Mobile**: Hamburger icon → full-screen dark overlay with staggered GSAP reveals, large links

### 6.2 HERO SECTION
**Layout**: Two columns — text left (55%), visual right (45%)
**Min-height**: `min-h-screen`
**Background**: `bg-zinc-950` with gradient mesh orbs (green-900/15, cyan-900/10) + subtle dot grid pattern (`radial-gradient(circle, #27272A 1px, transparent 1px)` size 32px)

**Left Side** (top to bottom):
1. **Badge**: `bg-primary-500/10 text-primary-400 border border-primary-500/20 rounded-full px-4 py-1.5 text-[12px] font-medium tracking-wide` — "✦ Now with 85M+ residential IPs"
2. **H1**: Two lines, 56px, weight 800:
    - "Proxy infrastructure" — `text-zinc-50`
    - "for the modern web" — gradient text: `bg-gradient-to-r from-primary-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent`
3. **Subtitle**: `text-zinc-400 text-[17px] max-w-md leading-relaxed mt-6`
4. **CTA Row** (mt-8): Two buttons:
    - Primary: "Start Free Trial →" — `bg-primary-500 text-zinc-950 font-semibold rounded-lg px-8 py-3.5 text-[15px] shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.4)] hover:bg-primary-400 transition-all`
    - Secondary: "View Docs" — `border border-zinc-700 text-zinc-300 rounded-lg px-8 py-3.5 hover:bg-zinc-800 hover:border-zinc-600`
5. **Trust line** (mt-6): Small text — "Free 1GB trial · No credit card · Setup in 60s" — `text-zinc-500 text-[13px]`

**Right Side** — TWO layers:
- **Background**: Three.js `NetworkGlobe` — slowly rotating wire-frame globe with green connection arcs between major cities (GSAP-animated arcs lighting up). Disable on mobile, show static SVG illustration instead.
- **Foreground**: `TerminalBlock` — a fake terminal overlay floating on the right:
  ```
  ┌─ proxium — ~/ ──────────────────────┐
  │ $ curl -x gate.proxium.io:7777 \    │
  │     -U "user:pass" \                │
  │     https://httpbin.org/ip          │
  │                                      │
  │ { "origin": "185.xxx.xxx.42" }      │
  │ ✓ 200 OK — 0.34s — US/New York      │
  └──────────────────────────────────────┘
  ```
    - Terminal styling: `bg-zinc-900/90 backdrop-blur-md border border-zinc-800 rounded-xl p-6 shadow-2xl`
    - Header dots: 3 circles (red/yellow/green, `w-3 h-3 rounded-full`)
    - Typewriter animation: Lines type out one-by-one using GSAP/TypeWriter component
    - Response line: green text `text-primary-400` with checkmark

**GSAP Hero Timeline**:
1. Badge slides up + fade (0.3s)
2. H1 words reveal with stagger (0.04s per word)
3. Subtitle fades up (0.4s after h1)
4. Buttons slide up stagger (0.1s between)
5. Trust line fades in
6. Terminal types out commands (starts 0.5s after buttons, 0.03s per char)
7. Globe fades in with scale (1.2 → 1, 1s, power3.out)

### 6.3 STATS BAR
- **Layout**: Full-width bar, 4 columns
- **Background**: `bg-zinc-900/50 border-y border-zinc-800/50`
- **Each stat**: centered — big number (`text-zinc-50 text-5xl font-bold`) + label (`text-zinc-500 text-[13px] uppercase tracking-[0.15em] mt-1`)
- **Numbers**: 85M+ / 195+ / 99.9% / <0.6s
- **GSAP**: CountUp animation when scrolled into view (2s, power2.out)
- **Dividers**: Vertical `border-r border-zinc-800` between stats

### 6.4 PRODUCTS GRID
- **Background**: `bg-zinc-950`
- **Section tag**: Green pill — "◆ Products"
- **Title**: "The right proxy for every task" — `text-zinc-50`
- **Subtitle**: `text-zinc-400`

**Layout**: 2×2 grid on desktop, single column on mobile

**Product Card** (GlowCard):
- `bg-zinc-900 border border-zinc-800 rounded-2xl p-8 relative overflow-hidden group`
- **Glow on hover**: Radial gradient glow in card's accent color, positioned at cursor location (via GSAP/mouse tracking):
    - Residential: green glow
    - Datacenter: cyan glow
    - Mobile: violet glow
    - ISP: blue glow
- **Top**: Icon (custom SVG or Lucide) + Badge (if applicable, e.g., "Most Popular")
- **Title**: `text-zinc-50 text-xl font-semibold mt-4`
- **Description**: `text-zinc-400 text-[15px] mt-3 leading-relaxed`
- **Bottom**: Price starting at — `text-primary-400 text-[13px] font-medium mt-4` + arrow link "Learn more →"
- **Hover**: `border-zinc-700 transform -translate-y-1 transition-all duration-300`

### 6.5 FEATURES SECTION — Bento Grid
- **Background**: `bg-zinc-950`
- **Layout**: Bento grid — 2 large cards on top row (spanning 2+1), 3 equal cards on bottom row

**Feature Card**:
- `bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8`
- **Large cards** (top row): Include a small code snippet or mini-illustration
- Top-left: Lucide icon inside `w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center text-primary-400`
- Title: `text-zinc-50 text-lg font-semibold mt-4`
- Description: `text-zinc-400 text-[15px] mt-2`
- **Code snippet** (in "One Unified API" card): Styled CodeSnippet showing 4-5 lines of Python/curl usage
- **GSAP**: Staggered reveal, 0.12s between cards

### 6.6 HOW IT WORKS — Terminal Steps
- **Background**: `bg-zinc-900/30`
- **Design**: 3 steps, each with a terminal code line

**Step Card**:
- Step number: `text-[80px] font-bold text-zinc-800/30` (watermark)
- Title: `text-zinc-50 text-xl font-semibold`
- Description: `text-zinc-400 text-[15px]`
- Code line: Styled as a mini terminal one-liner: `bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-[14px] text-primary-400 mt-4`
- **Connecting line**: Horizontal dashed line `border-dashed border-zinc-800` between steps

### 6.7 PRICING PREVIEW
- **Background**: `bg-zinc-950`
- **Layout**: 3 pricing cards

**Card Design**:
- Standard: `bg-zinc-900 border border-zinc-800 rounded-2xl p-8`
- **Featured (Pro)**: `border-primary-500/30 shadow-[0_0_30px_rgba(34,197,94,0.08)]` + "Most Popular" green badge
- Tier name: `text-zinc-50 text-lg font-semibold`
- Price: `text-4xl font-bold text-zinc-50` + period in `text-zinc-500 text-base`
- Description: `text-zinc-400 text-[14px]`
- Feature list: Green checkmarks `text-primary-500` + feature text `text-zinc-300 text-[14px]`
- CTA button: Primary gradient for featured, outline for others

### 6.8 USE CASES
- **Layout**: 3×2 grid of cards with icons
- Clean `bg-zinc-900 border border-zinc-800 rounded-xl p-6` cards
- Each: Lucide icon + title + one-liner

### 6.9 TESTIMONIALS
- Horizontal carousel, dark cards
- Quote in `text-zinc-300 italic`, large decorative `"` in `text-zinc-800`
- Avatar + name `text-zinc-50` + role `text-zinc-500`

### 6.10 FAQ
- shadcn/ui `Accordion` with custom styling
- `border-b border-zinc-800`, no outer border
- Question: `text-zinc-100 text-[16px] font-medium`
- Answer: `text-zinc-400 text-[15px]`
- ChevronDown icon rotates on toggle

### 6.11 CTA SECTION
- **Background**: Gradient — `bg-gradient-to-r from-primary-600/20 via-cyan-600/10 to-violet-600/10` on `bg-zinc-950`
- **Border**: `border border-zinc-800 rounded-3xl mx-4 lg:mx-auto max-w-5xl p-16`
- Centered: Title + subtitle + big green CTA + trust note
- **Floating elements**: Semi-transparent code brackets `{ }` floating in background (GSAP)

### 6.12 FOOTER
- **Background**: `bg-zinc-950 border-t border-zinc-800`
- **Top**: 2px gradient line (green → cyan) at the very top
- **Layout**: 4-column grid — About (logo + description) / Products / Resources / Company
- **Links**: `text-zinc-500 hover:text-zinc-300 text-[14px]`
- **Newsletter**: Dark input (`bg-zinc-900 border-zinc-800`) + green subscribe button
- **Bottom bar**: Copyright + legal links + "Status: ● Operational" (green dot)

---

## 7. ANIMATIONS SPECIFICATION

### 7.1 GSAP + ScrollTrigger
| Element | Animation | Trigger | Duration |
|---|---|---|---|
| Section tags | Fade up + scale 0.9→1 | `top 90%` | 0.5s |
| Section titles | Word-by-word reveal | `top 85%` | 0.8s |
| Product cards | Stagger fade-up (0.12s) | `top 80%` | 0.6s |
| Stats numbers | CountUp to value | `top 75%` | 2s |
| Feature bento cards | Stagger from center | `top 80%` | 0.5s |
| How-it-works steps | Sequential left→right | `top 80%` | 0.5s |
| Terminal code | Typewriter per character | `top 85%` | 0.03s/char |
| Pricing cards | Scale 0.95→1 + fade | `top 80%` | 0.7s |
| FAQ items | Stagger fade-up | `top 85%` | 0.3s |
| CTA section | Parallax bg + fade text | `top 90%` | 1s |

### 7.2 Micro-Interactions
- **GlowCard**: Radial gradient follows mouse position inside card (GSAP onMouseMove)
- **Terminal cursor**: Blinking block cursor (`▌`) with CSS animation, 1s interval
- **Green dot**: Pulse animation on "System Status" indicator
- **Links**: Underline slides in from left on hover (CSS `::after` with `scaleX(0) → scaleX(1)`)
- **Buttons**: Primary buttons have a subtle green glow pulse on idle (2s infinite)
- **IP Rotation Demo**: Numbers cycling to simulate IP rotation (in features section)

### 7.3 Three.js
- **NetworkGlobe**: Wire-frame sphere with dots at major cities, green arcs animate between random city pairs every 3s. Slow auto-rotation. Mouse parallax tilt.
- **GridBackground** (optional): Perspective grid fading into the distance, subtle, behind content
- **Performance**: `<Suspense>` + `dynamic(import, { ssr: false })`, disable on mobile, `frameloop="demand"`, low poly (<5k verts)

---

## 8. UNIQUE COMPONENTS

### 8.1 TerminalBlock
A realistic terminal window that appears in hero and how-it-works:
- Window chrome: 3 dots (red/yellow/green), title bar with `proxium — ~/`
- Dark background: `bg-zinc-900 border border-zinc-800 rounded-xl`
- Monospace text (already monospace since JetBrains Mono is the site font)
- Prompt character: `$` in `text-zinc-500`, command in `text-zinc-50`, output in `text-primary-400`
- Blinking cursor at the end of current line
- Copy button in top-right: `text-zinc-500 hover:text-zinc-300`

### 8.2 IPRotationDemo
A small widget showing IPs cycling rapidly:
- Box showing current IP, country flag, city, response time
- Every 1.5s, the IP "rotates" — old slides up/fades out, new slides in from below
- Green checkmark + "200 OK" status
- Used in hero or features section

### 8.3 PricingCalculator
Interactive slider on the pricing page:
- Slider for GB of bandwidth needed
- Price auto-calculates per proxy type
- Comparison table updates in real-time
- shadcn/ui `Slider` component

### 8.4 CodeSnippet
Styled code block with:
- Language tabs (curl, Python, Node.js, Go)
- Syntax highlighting via CSS classes (not a heavy library — just manual span coloring)
- Copy button with "Copied ✓" feedback
- `bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden`

---

## 9. SHADOWS & EFFECTS

```
shadow-card:       0 1px 2px rgba(0,0,0,0.3), 0 4px 12px rgba(0,0,0,0.2)
shadow-card-hover: 0 8px 25px rgba(0,0,0,0.3), 0 0 0 1px rgba(63,63,70,0.5)
shadow-glow-green: 0 0 20px rgba(34,197,94,0.3), 0 0 60px rgba(34,197,94,0.1)
shadow-glow-cyan:  0 0 20px rgba(6,182,212,0.3), 0 0 60px rgba(6,182,212,0.1)
shadow-button:     0 0 20px rgba(34,197,94,0.3)
shadow-terminal:   0 25px 50px rgba(0,0,0,0.5)
```

**Grain overlay**: Subtle noise texture on `body::before` — `opacity: 0.015`, fixed position, for premium texture.

---

## 10. MONGODB MODELS

Same pattern as Cardium:

**Contact**: `{ name, email, company, message, proxyType, locale, createdAt }`
**Waitlist**: `{ email, source, locale, createdAt }` (email unique)
**BlogPost**: `{ slug, locale, title, excerpt, content, coverImage, author, tags, published, publishedAt, createdAt }`

---

## 11. SEO

- `generateMetadata()` on every page with title, description, OG, Twitter cards
- JSON-LD: Organization, WebSite, FAQPage, Product schemas
- `sitemap.ts` and `robots.ts` in app root
- Semantic HTML: single `<h1>` per page, proper `<nav>`, `<main>`, `<section>`
- All images with `alt`, all links descriptive
- `<html lang={locale}>` dynamic

---

## 12. DEPENDENCIES

```json
{
  "dependencies": {
    "next": "^14.2.0",
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "next-intl": "^3.20.0",
    "mongoose": "^8.5.0",
    "@react-three/fiber": "^8.16.0",
    "@react-three/drei": "^9.105.0",
    "three": "^0.164.0",
    "gsap": "^3.12.5",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.3.0",
    "lucide-react": "^0.383.0",
    "@radix-ui/react-accordion": "^1.2.0",
    "@radix-ui/react-dialog": "^1.1.0",
    "@radix-ui/react-dropdown-menu": "^2.1.0",
    "@radix-ui/react-navigation-menu": "^1.2.0",
    "@radix-ui/react-tabs": "^1.1.0",
    "@radix-ui/react-tooltip": "^1.1.0",
    "@radix-ui/react-separator": "^1.1.0",
    "@radix-ui/react-slider": "^1.2.0",
    "@radix-ui/react-select": "^2.1.0",
    "@radix-ui/react-switch": "^1.1.0",
    "class-variance-authority": "^0.7.0"
  },
  "devDependencies": {
    "typescript": "^5.4.0",
    "@types/react": "^18.3.0",
    "@types/three": "^0.164.0",
    "tailwindcss": "^3.4.0",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.4.0",
    "eslint": "^8.57.0",
    "eslint-config-next": "^14.2.0"
  }
}
```

---

## 13. IMPLEMENTATION ORDER

### Phase 1 — Scaffold
1. `npx create-next-app@latest proxium --typescript --tailwind --eslint --app --src-dir`
2. Install dependencies
3. Init shadcn/ui: `npx shadcn@latest init` → configure dark theme, zinc base, green primary
4. Add shadcn components: `npx shadcn@latest add button card badge input accordion tabs dialog tooltip dropdown-menu navigation-menu separator skeleton switch slider select table`
5. Create folder structure (all dirs + placeholder files)
6. Configure `tailwind.config.ts` with design tokens
7. Set up fonts (download JetBrains Mono woff2, configure loader)
8. Set up i18n: config, request, routing, middleware
9. Create `en.json`

### Phase 2 — Layout & Core UI
10. Build `globals.css` with shadcn vars, grain overlay, custom utilities
11. Build `Container.tsx`
12. Build `Header.tsx` with mega-menu, locale switcher, mobile menu
13. Build `Footer.tsx`
14. Build `[locale]/layout.tsx`

### Phase 3 — Animation System
15. Build `useGsap.ts` hook
16. Build `ScrollReveal.tsx`, `TextReveal.tsx`, `TypeWriter.tsx`, `CountUp.tsx`, `StaggerChildren.tsx`, `ParallaxLayer.tsx`

### Phase 4 — Custom Components
17. Build `TerminalBlock.tsx` with typewriter animation
18. Build `CodeSnippet.tsx` with language tabs + copy
19. Build `GlowCard.tsx` with mouse-following glow
20. Build `AnimatedCounter.tsx`
21. Build `IPRotationDemo.tsx`

### Phase 5 — Three.js
22. Build `SceneWrapper.tsx`
23. Build `NetworkGlobe.tsx`
24. Build `DataFlowLines.tsx`

### Phase 6 — Sections (Homepage)
25. `HeroSection.tsx` — globe + terminal + text
26. `StatsSection.tsx` — counter bar
27. `ProductsGrid.tsx` — 4 glow cards
28. `FeaturesSection.tsx` — bento grid
29. `HowItWorks.tsx` — terminal steps
30. `PricingPreview.tsx` — 3 cards
31. `UseCasesSection.tsx` — grid
32. `TestimonialsSection.tsx` — carousel
33. `FAQSection.tsx` — accordion
34. `CTASection.tsx` — gradient banner
35. Assemble in `[locale]/page.tsx`

### Phase 7 — Backend
36. MongoDB connection + models
37. API routes (contact, waitlist, blog)
38. Wire forms to API

### Phase 8 — SEO & Polish
39. `generateMetadata()` on all pages
40. JSON-LD structured data
41. sitemap.ts, robots.ts
42. Lighthouse audit — target 95+
43. Cross-browser + responsive QA

---

## 14. DESIGN CHECKLIST

- [ ] Dark theme throughout (zinc-950 base)
- [ ] JetBrains Mono as the ONLY font everywhere
- [ ] Primary green (#22C55E) as the main accent
- [ ] Green glow effects on CTAs and featured elements
- [ ] Terminal/code blocks as first-class design elements
- [ ] shadcn/ui components styled with zinc + green theme
- [ ] GlowCard hover effect with mouse-following radial gradient
- [ ] 3D globe renders on desktop, static SVG on mobile
- [ ] Typewriter animation on terminal blocks
- [ ] Grain texture overlay on body (opacity 0.015)
- [ ] Dot grid pattern in hero background
- [ ] GSAP scroll animations on all sections
- [ ] All text from i18n translation files
- [ ] Responsive on all breakpoints
- [ ] Section spacing: `py-24 lg:py-32`
- [ ] Max content width constrained
- [ ] Color contrast WCAG AA compliant
- [ ] The site feels like a developer tool, not a marketing brochure

---

**END OF PROMPT — Hand this to an AI coding agent to build the complete Proxium project from scratch.**