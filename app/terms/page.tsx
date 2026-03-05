import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Reflecter Labs",
  description: "Terms of Service for Reflecter Labs. Read our terms and conditions.",
};

export default function TermsOfServicePage() {
  return (
    <main className="relative z-10 pt-32 pb-20">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="font-mono text-4xl font-semibold text-foreground">
          Terms of Service
        </h1>
        <p className="mt-2 text-sm text-muted-foreground font-mono">
          Last updated: March 5, 2026
        </p>

        <div className="mt-12 flex flex-col gap-10 text-sm leading-relaxed text-muted-foreground">
          <section>
            <h2 className="mb-4 font-mono text-lg font-semibold text-foreground">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using the services provided by Reflecter Labs (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-mono text-lg font-semibold text-foreground">
              2. Description of Services
            </h2>
            <p>
              Reflecter Labs provides blockchain infrastructure, smart contract development, and related technology services across multiple chains including Starknet, Ethereum, Base, Polygon, BNB, Avalanche, and Monad. Our services are subject to change without prior notice.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-mono text-lg font-semibold text-foreground">
              3. User Obligations
            </h2>
            <ul className="ml-4 flex flex-col gap-2 list-disc">
              <li>You must be at least 18 years old to use our services</li>
              <li>You are responsible for maintaining the security of your account and wallet credentials</li>
              <li>You agree not to use our services for any unlawful or prohibited purpose</li>
              <li>You will not attempt to reverse-engineer, decompile, or disassemble our software</li>
              <li>You are solely responsible for all activity that occurs under your account</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 font-mono text-lg font-semibold text-foreground">
              4. Intellectual Property
            </h2>
            <p>
              All content, code, designs, trademarks, and intellectual property on this platform are owned by Reflecter Labs or its licensors. You may not copy, modify, distribute, or create derivative works without our explicit written consent.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-mono text-lg font-semibold text-foreground">
              5. Blockchain & Smart Contracts
            </h2>
            <p>
              You acknowledge that blockchain transactions are irreversible. Reflecter Labs is not responsible for any losses resulting from smart contract interactions, network failures, or user error. You use blockchain services at your own risk.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-mono text-lg font-semibold text-foreground">
              6. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by law, Reflecter Labs shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or digital assets, arising from your use of our services.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-mono text-lg font-semibold text-foreground">
              7. Termination
            </h2>
            <p>
              We reserve the right to suspend or terminate your access to our services at any time, with or without cause, and with or without notice. Upon termination, your right to use our services will immediately cease.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-mono text-lg font-semibold text-foreground">
              8. Governing Law
            </h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the Argentine Republic, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-mono text-lg font-semibold text-foreground">
              9. Contact Us
            </h2>
            <p>
              For any questions regarding these Terms, please contact us at:{" "}
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
