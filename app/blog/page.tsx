"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Clock, ArrowRight } from "lucide-react";
import { useLocale } from "@/lib/i18n/locale-context";

export default function BlogPage() {
  const { t } = useLocale();
  const posts = t.blogPosts;

  return (
    <main className="relative z-10 pt-32 pb-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <div className="inline-block px-3 py-1 mb-4 text-xs font-mono font-bold uppercase tracking-widest rounded-full border border-primary/20 bg-primary/5 text-primary">
            {t.blog.heading}
          </div>
          <h1 className="font-mono text-4xl font-bold text-foreground lg:text-6xl tracking-tight">
            {t.blog.homeHeading}
          </h1>
          <p className="mt-6 text-xl leading-relaxed text-muted-foreground">
            {t.blog.homeSubtitle}
          </p>
        </div>

        <div className="mt-20 flex flex-col items-center justify-center text-center py-20 border border-border/50 rounded-3xl bg-muted/5">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-8 rounded-full border border-primary/20 bg-primary/5 text-primary font-mono text-xs font-bold uppercase tracking-widest animate-pulse">
            {t.common.nav.solutions.page.title}
          </div>
          <h2 className="font-mono text-3xl font-bold mb-4 uppercase tracking-tight">
            Blog Reflecter Labs
          </h2>
          <p className="max-w-md text-muted-foreground font-mono text-sm leading-relaxed">
            {t.common.nav.solutions.page.subtitle}
          </p>
        </div>

        <div className="mt-16 flex justify-center">
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
