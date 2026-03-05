"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Clock } from "lucide-react";
import { useLocale } from "@/lib/i18n/locale-context";
import { useParams } from "next/navigation";

export default function BlogPostPage() {
  const { t } = useLocale();
  const params = useParams();
  const slug = params.slug as string;
  const post = t.blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="relative z-10 pt-32 pb-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h1 className="font-mono text-9xl font-bold text-muted-foreground/20">
            404
          </h1>
          <p className="mt-4 text-xl font-medium text-foreground">
            {t.blog.noPostFound}
          </p>
          <Link
            href="/blog"
            className="mt-8 inline-flex items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            {t.common.backHome}
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="relative z-10 pt-32 pb-20">
      <article className="mx-auto max-w-3xl px-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          {t.blog.heading}
        </Link>

        {post.image && (
          <div className="relative mt-8 aspect-video w-full overflow-hidden rounded-3xl border border-border shadow-2xl">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <div className="mt-12">
          <span className="w-fit rounded-full border border-primary/20 bg-primary/5 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-primary">
            {post.category}
          </span>
          <h1 className="mt-6 font-mono text-3xl font-bold text-foreground lg:text-5xl leading-tight">
            {post.title}
          </h1>
          <div className="mt-6 flex items-center gap-6 text-sm text-muted-foreground font-mono">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>
                {post.readTime} {t.blog.minRead}
              </span>
            </div>
            <span>{post.date}</span>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-8">
          <p className="text-xl leading-relaxed text-foreground/90 font-medium">
            {post.excerpt}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center rounded-3xl border border-dashed border-border p-16 text-center bg-muted/5">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted/10">
              <Clock className="h-8 w-8 text-muted-foreground/30" />
            </div>
            <p className="max-w-xs font-mono text-sm text-muted-foreground leading-relaxed">
              {t.blog.comingSoon}
            </p>
          </div>
        </div>
      </article>
    </main>
  );
}
