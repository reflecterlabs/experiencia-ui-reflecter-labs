"use client";

import Link from "next/link";
import { ArrowLeft, FlaskConical } from "lucide-react";
import { useLocale } from "@/lib/i18n/locale-context";

export default function LaboratoryPage() {
  const { t } = useLocale();

  return (
    <main className="relative min-h-screen flex items-center justify-center pt-20 pb-20 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-[100px] -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full filter blur-[100px] -z-10" />

      <div className="mx-auto max-w-4xl px-6 text-center">
        <div className="inline-flex items-center justify-center p-4 rounded-3xl bg-primary/10 border border-primary/20 mb-8 animate-bounce">
          <FlaskConical className="w-12 h-12 text-primary" />
        </div>
        
        <h1 className="font-mono text-4xl font-bold text-foreground lg:text-7xl tracking-tighter mb-6 uppercase">
          {t.common.nav.research.laboratory}
        </h1>
        
        <p className="mt-6 text-xl leading-relaxed text-muted-foreground font-mono max-w-2xl mx-auto">
          {t.common.nav.solutions.page.subtitle}
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="px-6 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary font-mono text-sm font-bold uppercase tracking-widest">
            {t.common.nav.solutions.page.title}
          </div>
        </div>

        <div className="mt-16">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-full border border-border px-8 py-4 font-mono text-sm font-bold uppercase tracking-widest text-muted-foreground transition-all duration-300 hover:text-foreground hover:border-foreground/20 hover:bg-muted/30"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            {t.common.backHome}
          </Link>
        </div>
      </div>
    </main>
  );
}
