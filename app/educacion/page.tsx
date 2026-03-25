"use client";

import { useLocale } from "@/lib/i18n/locale-context";
import BlogSummary from "@/components/blog-summary";
import CallToAction from "@/components/call-to-action";
import { motion } from "motion/react";

export default function EducacionPage() {
  const { t } = useLocale();

  return (
    <main className="relative z-10 pt-32 min-h-screen flex flex-col">
      <div className="mx-auto max-w-5xl px-6 flex-grow">
        {/* Hero */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
            <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-500">
              {t.education.status}
            </span>
          </div>
          <h1 className="font-mono text-4xl font-semibold text-foreground lg:text-5xl">
            {t.education.title}
          </h1>
          <p className="mt-8 text-xl leading-relaxed text-muted-foreground italic border-l-2 border-emerald-500/30 pl-6">
            {t.education.description}
          </p>
        </motion.div>

        {/* Content Placeholder */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-20 p-12 rounded-3xl border border-dashed border-border flex flex-col items-center text-center bg-muted/5"
        >
          <div className="size-16 rounded-2xl bg-muted/10 flex items-center justify-center mb-6">
            <svg className="size-8 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold mb-4">Academy Coming Soon</h2>
          <p className="max-w-md text-muted-foreground">
            Estamos preparando un currículum de vanguardia que cubrirá desde los fundamentos de la criptografía hasta la orquestación avanzada de agentes de IA.
          </p>
        </motion.div>
      </div>

      <div className="mt-32">
        <BlogSummary />
      </div>
      <CallToAction />
    </main>
  );
}
