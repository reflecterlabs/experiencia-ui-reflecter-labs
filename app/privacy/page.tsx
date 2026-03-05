"use client";

import { useLocale } from "@/lib/i18n/locale-context";

export default function PrivacyPolicyPage() {
  const { t } = useLocale();

  return (
    <main className="relative z-10 pt-32 pb-20">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="font-mono text-4xl font-semibold text-foreground lg:text-5xl">
          {t.privacy.title}
        </h1>
        <p className="mt-4 text-sm text-muted-foreground font-mono">
          {t.common.lastUpdated}: March 5, 2026
        </p>

        <div className="mt-16 flex flex-col gap-12 text-sm leading-relaxed text-muted-foreground">
          {t.privacy.sections.map((section, index) => (
            <section
              key={index}
              className="group rounded-2xl border border-transparent p-6 -mx-6 transition-all duration-300 hover:border-border hover:bg-muted/10"
            >
              <h2 className="mb-4 font-mono text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                {section.title}
              </h2>
              <p className="text-base leading-relaxed">
                {section.content}
              </p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
