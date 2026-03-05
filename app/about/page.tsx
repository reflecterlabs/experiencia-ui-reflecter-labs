"use client";

import Image from "next/image";
import { useLocale } from "@/lib/i18n/locale-context";
import BlogSummary from "@/components/blog-summary";
import CallToAction from "@/components/call-to-action";

export default function AboutPage() {
  const { t } = useLocale();

  return (
    <main className="relative z-10 pt-32">
      <div className="mx-auto max-w-5xl px-6">
        {/* Hero */}
        <div className="max-w-3xl">
          <h1 className="font-mono text-4xl font-semibold text-foreground lg:text-5xl">
            {t.about.title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {t.about.intro}
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            {t.about.intro2}
          </p>
        </div>

        {/* Mission */}
        <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-border p-8 backdrop-blur-sm bg-background/30 transition-all duration-300 hover:border-primary/20">
            <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {t.about.mission}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-foreground">
              {t.about.missionDesc}
            </p>
          </div>
          <div className="rounded-2xl border border-border p-8 backdrop-blur-sm bg-background/30 transition-all duration-300 hover:border-primary/20">
            <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {t.about.vision}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-foreground">
              {t.about.visionDesc}
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mt-20">
          <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {t.about.valuesTitle}
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {t.about.values.map((value) => (
              <div
                key={value.title}
                className="group rounded-2xl border border-border p-6 transition-all duration-300 hover:border-primary/20 hover:bg-muted/30"
              >
                <h3 className="font-mono text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team preview */}
        <div className="mt-20 rounded-2xl border border-border p-12 text-center bg-muted/20 backdrop-blur-sm">
          <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
            {t.about.teamTitle}
          </h2>
          <p className="mx-auto max-w-lg text-muted-foreground text-lg italic leading-relaxed">
            {t.about.teamDesc}
          </p>
        </div>
      </div>

      <div className="mt-32">
        <BlogSummary />
      </div>
      <CallToAction />
    </main>
  );
}
