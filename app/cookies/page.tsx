import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy - Reflecter Labs",
  description: "Cookie Policy for Reflecter Labs. Understand how we use cookies and tracking technologies.",
};

export default function CookiePolicyPage() {
  return (
    <main className="relative z-10 pt-32 pb-20">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="font-mono text-4xl font-semibold text-foreground">
          Cookie Policy
        </h1>
        <p className="mt-2 text-sm text-muted-foreground font-mono">
          Last updated: March 5, 2026
        </p>

        <div className="mt-12 flex flex-col gap-10 text-sm leading-relaxed text-muted-foreground">
          <section>
            <h2 className="mb-4 font-mono text-lg font-semibold text-foreground">
              1. What Are Cookies
            </h2>
            <p>
              Cookies are small text files stored on your device when you visit a website. They help us recognize your browser, remember your preferences, and understand how you interact with our platform.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-mono text-lg font-semibold text-foreground">
              2. Types of Cookies We Use
            </h2>
            <div className="flex flex-col gap-4">
              <div className="rounded-xl border border-border p-4">
                <h3 className="font-mono text-sm font-semibold text-foreground">Essential Cookies</h3>
                <p className="mt-1">Required for the website to function properly. These cannot be disabled. They include session management and security features.</p>
              </div>
              <div className="rounded-xl border border-border p-4">
                <h3 className="font-mono text-sm font-semibold text-foreground">Analytics Cookies</h3>
                <p className="mt-1">Help us understand how visitors interact with our website by collecting anonymous usage data. We use tools like Vercel Analytics to measure performance.</p>
              </div>
              <div className="rounded-xl border border-border p-4">
                <h3 className="font-mono text-sm font-semibold text-foreground">Functional Cookies</h3>
                <p className="mt-1">Remember your preferences such as language, theme (dark/light mode), and display settings to enhance your experience.</p>
              </div>
              <div className="rounded-xl border border-border p-4">
                <h3 className="font-mono text-sm font-semibold text-foreground">Marketing Cookies</h3>
                <p className="mt-1">Used to track visitors across websites to display relevant advertisements. We currently do not use marketing cookies.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4 font-mono text-lg font-semibold text-foreground">
              3. Third-Party Cookies
            </h2>
            <p>
              Some cookies may be placed by third-party services that appear on our pages, such as analytics providers. We do not control these cookies and recommend reviewing the respective third-party privacy policies.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-mono text-lg font-semibold text-foreground">
              4. Managing Cookies
            </h2>
            <p>
              You can control and manage cookies through your browser settings. Most browsers allow you to block or delete cookies. Please note that disabling certain cookies may affect the functionality of our website.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-mono text-lg font-semibold text-foreground">
              5. Updates to This Policy
            </h2>
            <p>
              We may update this Cookie Policy from time to time. Changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-mono text-lg font-semibold text-foreground">
              6. Contact Us
            </h2>
            <p>
              If you have any questions about our use of cookies, contact us at:{" "}
              <a href="mailto:contact@reflecterlabs.xyz" className="text-foreground underline hover:text-foreground/80">
                contact@reflecterlabs.xyz
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
