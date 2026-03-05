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

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-background transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                {post.image ? (
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="h-full w-full bg-muted flex items-center justify-center">
                    <span className="font-mono text-xs text-muted-foreground/30">REFLECTER LABS</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/40 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
                  {post.category}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h2 className="font-mono text-xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors duration-300">
                  {post.title}
                </h2>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-border pt-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground font-mono">
                  <span>{post.date}</span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3 w-3" />
                    {post.readTime} {t.blog.minRead}
                  </span>
                </div>

                <div className="mt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1">
                  <span>{t.blog.readMore}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-mono text-sm font-bold uppercase tracking-widest text-muted-foreground transition-all duration-300 hover:text-foreground hover:border-foreground/20 hover:bg-muted/30"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            {t.common.backHome}
          </Link>
        </div>
      </div>
    </main>
  );
}
