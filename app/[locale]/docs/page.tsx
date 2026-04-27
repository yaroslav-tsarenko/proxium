"use client";

import { Container } from "@/components/layout/Container";
import CodeSnippet from "@/components/custom/CodeSnippet";
import ScrollReveal from "@/components/animations/ScrollReveal";

const quickStartTabs = [
  {
    label: "cURL",
    language: "bash",
    code: `# 1. Get your API credentials from the dashboard
# 2. Make your first request:

curl -x proxy.proxium.io:7777 \\
  -U "YOUR_USER:YOUR_PASS" \\
  "https://httpbin.org/ip"

# Response:
# { "origin": "185.xxx.xxx.42" }`,
  },
  {
    label: "Python",
    language: "python",
    code: `import requests

# Your Proxium credentials
PROXY_USER = "YOUR_USER"
PROXY_PASS = "YOUR_PASS"

proxies = {
    "http": f"http://{PROXY_USER}:{PROXY_PASS}@proxy.proxium.io:7777",
    "https": f"http://{PROXY_USER}:{PROXY_PASS}@proxy.proxium.io:7777",
}

# Make a request through the proxy
response = requests.get("https://httpbin.org/ip", proxies=proxies)
print(response.json())

# With session (sticky IP):
session = requests.Session()
session.proxies = proxies
for i in range(5):
    r = session.get("https://httpbin.org/ip")
    print(r.json())  # Same IP each time`,
  },
  {
    label: "Node.js",
    language: "javascript",
    code: `const HttpsProxyAgent = require("https-proxy-agent");

const PROXY_USER = "YOUR_USER";
const PROXY_PASS = "YOUR_PASS";

const agent = new HttpsProxyAgent(
  \`http://\${PROXY_USER}:\${PROXY_PASS}@proxy.proxium.io:7777\`
);

// Make a request through the proxy
const res = await fetch("https://httpbin.org/ip", { agent });
const data = await res.json();
console.log(data);`,
  },
];

const geoTargetingTabs = [
  {
    label: "Country",
    language: "bash",
    code: `# Target a specific country (US)
curl -x proxy.proxium.io:7777 \\
  -U "user-country-us:pass" \\
  "https://httpbin.org/ip"

# Target Germany
curl -x proxy.proxium.io:7777 \\
  -U "user-country-de:pass" \\
  "https://httpbin.org/ip"`,
  },
  {
    label: "City",
    language: "bash",
    code: `# Target a specific city
curl -x proxy.proxium.io:7777 \\
  -U "user-country-us-city-newyork:pass" \\
  "https://httpbin.org/ip"

# Target London
curl -x proxy.proxium.io:7777 \\
  -U "user-country-gb-city-london:pass" \\
  "https://httpbin.org/ip"`,
  },
  {
    label: "Session",
    language: "bash",
    code: `# Sticky session (same IP for 30 min)
curl -x proxy.proxium.io:7777 \\
  -U "user-session-abc123:pass" \\
  "https://httpbin.org/ip"

# Each unique session ID gets a fixed IP
curl -x proxy.proxium.io:7777 \\
  -U "user-session-xyz789:pass" \\
  "https://httpbin.org/ip"`,
  },
];

const authTabs = [
  {
    label: "User/Pass",
    language: "bash",
    code: `# Username & password authentication
curl -x proxy.proxium.io:7777 \\
  -U "your_username:your_password" \\
  "https://httpbin.org/ip"

# With proxy type prefix
curl -x proxy.proxium.io:7777 \\
  -U "user-residential:your_password" \\
  "https://httpbin.org/ip"`,
  },
  {
    label: "IP Whitelist",
    language: "bash",
    code: `# Step 1: Whitelist your IP in the dashboard
# Dashboard > Settings > IP Whitelist > Add IP

# Step 2: Connect without credentials
curl -x proxy.proxium.io:7777 \\
  "https://httpbin.org/ip"

# Your IP is automatically authenticated`,
  },
  {
    label: "API Token",
    language: "bash",
    code: `# Use API token for management endpoints

# List your proxy configurations
curl -H "Authorization: Bearer YOUR_API_TOKEN" \\
  "https://api.proxium.io/v1/proxies"

# Check usage stats
curl -H "Authorization: Bearer YOUR_API_TOKEN" \\
  "https://api.proxium.io/v1/usage"`,
  },
];

const sections = [
  { id: "quickstart", label: "Quick Start" },
  { id: "auth", label: "Authentication" },
  { id: "geotargeting", label: "Geo-Targeting" },
  { id: "protocols", label: "Protocols" },
  { id: "errors", label: "Error Codes" },
];

export default function DocsPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 lg:py-32 bg-zinc-950">
        <Container>
          <ScrollReveal>
            <div className="flex flex-col items-center text-center">
              <span className="inline-flex items-center bg-green-500/10 text-green-400 border border-green-500/20 rounded-full px-3 py-1 text-xs uppercase tracking-[0.2em] font-semibold">
                &#9670; Documentation
              </span>
              <h1 className="text-zinc-50 text-4xl lg:text-5xl font-bold tracking-tight mt-4">
                API Documentation
              </h1>
              <p className="text-zinc-400 text-lg mt-4 max-w-2xl">
                Everything you need to integrate Proxium into your application.
                From quick start to advanced configuration.
              </p>
            </div>
          </ScrollReveal>

          {/* Navigation */}
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-2 mt-12">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="px-4 py-2 text-sm text-zinc-400 bg-zinc-900 border border-zinc-800 rounded-lg hover:text-zinc-200 hover:border-zinc-700 transition-colors"
                >
                  {section.label}
                </a>
              ))}
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Quick Start */}
      <section id="quickstart" className="py-24 lg:py-32 bg-zinc-900/50">
        <Container>
          <ScrollReveal>
            <h2 className="text-zinc-50 text-3xl font-bold tracking-tight">
              Quick Start
            </h2>
            <p className="text-zinc-400 text-lg mt-4 max-w-2xl">
              Get your first proxied request running in under 60 seconds.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <span className="w-8 h-8 rounded-full bg-green-500/10 text-green-400 flex items-center justify-center text-sm font-bold shrink-0">
                  1
                </span>
                <div>
                  <h3 className="text-zinc-50 font-semibold">
                    Create an account
                  </h3>
                  <p className="text-zinc-400 text-sm mt-1">
                    Sign up at proxium.io/signup. No credit card required for
                    the free trial.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="w-8 h-8 rounded-full bg-green-500/10 text-green-400 flex items-center justify-center text-sm font-bold shrink-0">
                  2
                </span>
                <div>
                  <h3 className="text-zinc-50 font-semibold">
                    Get your credentials
                  </h3>
                  <p className="text-zinc-400 text-sm mt-1">
                    Find your username and password in the dashboard under
                    Settings &gt; API Credentials.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="w-8 h-8 rounded-full bg-green-500/10 text-green-400 flex items-center justify-center text-sm font-bold shrink-0">
                  3
                </span>
                <div>
                  <h3 className="text-zinc-50 font-semibold">
                    Send your first request
                  </h3>
                  <p className="text-zinc-400 text-sm mt-1">
                    Use any HTTP client with our proxy endpoint.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mt-8">
              <CodeSnippet tabs={quickStartTabs} />
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Authentication */}
      <section id="auth" className="py-24 lg:py-32 bg-zinc-950">
        <Container>
          <ScrollReveal>
            <h2 className="text-zinc-50 text-3xl font-bold tracking-tight">
              Authentication
            </h2>
            <p className="text-zinc-400 text-lg mt-4 max-w-2xl">
              Three ways to authenticate with the Proxium proxy network.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mt-8">
              <CodeSnippet tabs={authTabs} />
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Geo-Targeting */}
      <section id="geotargeting" className="py-24 lg:py-32 bg-zinc-900/50">
        <Container>
          <ScrollReveal>
            <h2 className="text-zinc-50 text-3xl font-bold tracking-tight">
              Geo-Targeting
            </h2>
            <p className="text-zinc-400 text-lg mt-4 max-w-2xl">
              Target specific countries, cities, or maintain sticky sessions
              through the username string.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mt-8">
              <CodeSnippet tabs={geoTargetingTabs} />
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mt-8 bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-zinc-50 font-semibold mb-4">
                Username format reference
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-zinc-800">
                      <th className="text-left py-2 text-zinc-400 font-medium">
                        Parameter
                      </th>
                      <th className="text-left py-2 text-zinc-400 font-medium">
                        Format
                      </th>
                      <th className="text-left py-2 text-zinc-400 font-medium">
                        Example
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Proxy Type", "user-{type}", "user-residential"],
                      ["Country", "user-country-{cc}", "user-country-us"],
                      [
                        "City",
                        "user-country-{cc}-city-{city}",
                        "user-country-us-city-newyork",
                      ],
                      ["Session", "user-session-{id}", "user-session-abc123"],
                      [
                        "Combined",
                        "user-country-{cc}-session-{id}",
                        "user-country-de-session-xyz",
                      ],
                    ].map(([param, format, example]) => (
                      <tr key={param} className="border-b border-zinc-800/50">
                        <td className="py-2 text-zinc-300">{param}</td>
                        <td className="py-2 font-mono text-green-400 text-xs">
                          {format}
                        </td>
                        <td className="py-2 font-mono text-zinc-400 text-xs">
                          {example}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Protocols */}
      <section id="protocols" className="py-24 lg:py-32 bg-zinc-950">
        <Container>
          <ScrollReveal>
            <h2 className="text-zinc-50 text-3xl font-bold tracking-tight">
              Supported Protocols
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {[
                {
                  protocol: "HTTP",
                  port: "7777",
                  description: "Standard HTTP proxy for unencrypted traffic.",
                },
                {
                  protocol: "HTTPS (CONNECT)",
                  port: "7777",
                  description:
                    "Tunneled HTTPS via CONNECT method. End-to-end encrypted.",
                },
                {
                  protocol: "SOCKS5",
                  port: "7778",
                  description:
                    "Full SOCKS5 support with user/pass authentication.",
                },
              ].map((item) => (
                <div
                  key={item.protocol}
                  className="bg-zinc-900 border border-zinc-800 rounded-xl p-6"
                >
                  <h3 className="text-zinc-50 font-semibold">
                    {item.protocol}
                  </h3>
                  <p className="text-green-400 font-mono text-sm mt-1">
                    Port: {item.port}
                  </p>
                  <p className="text-zinc-400 text-sm mt-2">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Error Codes */}
      <section id="errors" className="py-24 lg:py-32 bg-zinc-900/50">
        <Container>
          <ScrollReveal>
            <h2 className="text-zinc-50 text-3xl font-bold tracking-tight">
              Error Codes
            </h2>
            <p className="text-zinc-400 text-lg mt-4 max-w-2xl">
              Common error codes returned by the proxy gateway.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mt-8 bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-zinc-800 bg-zinc-900/50">
                    <th className="text-left py-3 px-4 text-zinc-400 font-medium">
                      Code
                    </th>
                    <th className="text-left py-3 px-4 text-zinc-400 font-medium">
                      Meaning
                    </th>
                    <th className="text-left py-3 px-4 text-zinc-400 font-medium">
                      Solution
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    [
                      "407",
                      "Proxy Auth Required",
                      "Check your username and password.",
                    ],
                    [
                      "429",
                      "Too Many Requests",
                      "Reduce concurrent connections or upgrade plan.",
                    ],
                    [
                      "502",
                      "Bad Gateway",
                      "Target site unreachable. Retry with a different IP.",
                    ],
                    [
                      "503",
                      "Service Unavailable",
                      "Temporary overload. Retry after a short delay.",
                    ],
                    [
                      "521",
                      "Blocked by Target",
                      "IP was blocked. Request will auto-rotate to new IP.",
                    ],
                  ].map(([code, meaning, solution]) => (
                    <tr key={code} className="border-b border-zinc-800/50">
                      <td className="py-3 px-4 font-mono text-red-400">
                        {code}
                      </td>
                      <td className="py-3 px-4 text-zinc-300">{meaning}</td>
                      <td className="py-3 px-4 text-zinc-400">{solution}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}
