import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Reflecter Labs",
  description: "Privacy Policy for Reflecter Labs. Learn how we collect, use, and protect your data.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="relative z-10 pt-32 pb-20">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="font-mono text-4xl font-semibold text-foreground">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-muted-foreground font-mono">
          Last updated: March 5, 2026
        </p>

        <div className="mt-12 flex flex-col gap-10 text-sm leading-relaxed text-muted-foreground">
          <section>
            <h2 className="mb-4 font-mono text-lg font-semibold text-foreground">
              1. Introduction
            </h2>
            <p>
              Reflecter Labs (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-mono text-lg font-semibold text-foreground">
              2. Information We Collect
            </h2>
            <p className="mb-3">We may collect the following types of information:</p>
            <ul className="ml-4 flex flex-col gap-2 list-disc">
              <li><strong className="text-foreground">Personal Data:</strong> Name, email address, phone number, and other contact details you provide voluntarily.</li>
              <li><strong className="text-foreground">Usage Data:</strong> Information about how you interact with our website, including IP address, browser type, pages visited, and time spent.</li>
              <li><strong className="text-foreground">Blockchain Data:</strong> Public wallet addresses and on-chain transaction data relevant to our services.</li>
              <li><strong className="text-foreground">Cookies & Tracking:</strong> Data collected through cookies and similar technologies as described in our Cookie Policy.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 font-mono text-lg font-semibold text-foreground">
              3. How We Use Your Information
            </h2>
            <ul className="ml-4 flex flex-col gap-2 list-disc">
              <li>To provide, operate, and maintain our services</li>
              <li>To improve and personalize user experience</li>
              <li>To communicate with you, including customer support and updates</li>
              <li>To comply with legal obligations</li>
              <li>To detect and prevent fraud or abuse</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 font-mono text-lg font-semibold text-foreground">
              4. Data Sharing & Disclosure
            </h2>
            <p>
              We do not sell your personal information. We may share data with trusted third-party service providers who assist in operating our platform, subject to strict confidentiality agreements. We may also disclose information if required by law or to protect our rights.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-mono text-lg font-semibold text-foreground">
              5. Data Security
            </h2>
            <p>
              We implement industry-standard security measures to protect your data, including encryption, access controls, and regular security audits. However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-mono text-lg font-semibold text-foreground">
              6. Your Rights
            </h2>
            <p>
              Depending on your jurisdiction, you may have the right to access, correct, delete, or port your personal data. To exercise these rights, please contact us at{" "}
              <a href="mailto:contact@reflecterlabs.xyz" className="text-foreground underline hover:text-foreground/80">
                contact@reflecterlabs.xyz
              </a>.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-mono text-lg font-semibold text-foreground">
              7. Contact Us
            </h2>
            <p>
              If you have questions about this Privacy Policy, contact us at:{" "}
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
