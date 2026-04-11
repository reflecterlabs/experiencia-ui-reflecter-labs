"use client";

import { Database } from "lucide-react";
import { useLocale } from "@/lib/i18n/locale-context";
import SolutionContact from "@/components/solution-contact";

export default function CDPPage() {
  const { t } = useLocale();

  return (
    <main className="relative z-10 pt-32 pb-20">
      <div className="mx-auto max-w-5xl px-6">
        {/* Hero */}
        <div className="max-w-3xl">

          <h1 className="font-mono text-4xl font-semibold text-foreground lg:text-5xl">
            {t.common.nav.solutions.cdp.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            {t.common.nav.solutions.cdp.desc}
          </p>
        </div>

        {/* En desarrollo */}
        <div className="mt-20 rounded-2xl border border-border p-12 text-center bg-muted/20 backdrop-blur-sm">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-primary/20 bg-primary/5">
            <Database className="size-8 text-primary/60" />
          </div>
          <h2 className="font-mono text-2xl font-semibold text-foreground">
            {t.common.nav.solutions.page.title}
          </h2>
          <p className="mt-3 mx-auto max-w-lg text-muted-foreground leading-relaxed">
            {t.common.nav.solutions.page.subtitle}
          </p>
        </div>
      </div>
      
      <SolutionContact 
        solutionId="cdp" 
        solutionName={t.common.nav.solutions.cdp.title} 
      />
    </main>
  );
}
