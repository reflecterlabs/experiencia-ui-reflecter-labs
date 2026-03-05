"use client";

import { useLocale } from "@/lib/i18n/locale-context";

export default function UseCasesPage() {
  const { t } = useLocale();

  return (
    <main className="relative z-10 pt-32 pb-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="max-w-3xl">
          <h1 className="font-mono text-4xl font-semibold text-foreground lg:text-5xl">
            {t.useCases.title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {t.useCases.intro}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {t.useCases.cases.map((useCase) => (
            <div
              key={useCase.title}
              className="group flex flex-col rounded-2xl border border-border p-8 bg-background/40 backdrop-blur-sm transition-all duration-300 hover:border-primary/20 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="w-fit rounded-full border border-primary/20 bg-primary/5 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-primary">
                  {useCase.tag}
                </span>
              </div>
              <h2 className="font-mono text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                {useCase.title}
              </h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {useCase.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2 pt-6 border-t border-border/50">
                {useCase.chains.map((chain) => (
                  <span
                    key={chain}
                    className="rounded-md bg-muted px-2 py-0.5 font-mono text-[10px] text-muted-foreground border border-border"
                  >
                    {chain}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
