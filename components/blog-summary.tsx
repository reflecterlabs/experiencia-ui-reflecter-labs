"use client";

import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { useLocale } from "@/lib/i18n/locale-context";
import { TextEffect } from "./motion-primitives/text-effect";
import { AnimatedGroup } from "@/components/motion-primitives/animated-group";
import { transitionVariants } from "@/lib/utils";

export default function BlogSummary() {
    const { t } = useLocale();
    // Take only the first 3 posts for the summary
    const posts = t.blogPosts.slice(0, 3);
    if (posts.length === 0) return null;

    return (
        <section className="py-16 md:py-32 bg-muted/30">
            <div className="mx-auto max-w-5xl px-6">
                <div className="mb-12">
                    <div className="inline-block px-3 py-1 mb-4 text-xs font-mono font-medium tracking-wider uppercase rounded-full border border-border bg-background text-muted-foreground">
                        {t.blog.heading}
                    </div>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div className="max-w-2xl">
                            <TextEffect
                                triggerOnView
                                preset="fade-in-blur"
                                speedSegment={0.3}
                                as="h2"
                                className="text-3xl font-semibold md:text-4xl"
                            >
                                {t.blog.homeHeading}
                            </TextEffect>
                            <p className="mt-4 text-muted-foreground leading-relaxed">
                                {t.blog.homeSubtitle}
                            </p>
                        </div>
                        <Link
                            href="/blog"
                            className="group inline-flex items-center gap-2 font-mono text-sm font-medium text-foreground transition-colors hover:text-foreground/70"
                        >
                            {t.blog.goToBlog}
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>

                <AnimatedGroup
                    triggerOnView
                    variants={{
                        container: {
                            visible: {
                                transition: {
                                    staggerChildren: 0.1,
                                    delayChildren: 0.5,
                                },
                            },
                        },
                        ...transitionVariants,
                    }}
                    className="grid grid-cols-1 gap-6 md:grid-cols-3"
                >
                    {posts.map((post) => (
                        <Link
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            className="group flex flex-col rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:border-foreground/20 hover:shadow-lg"
                        >
                            <span className="w-fit rounded-full border border-border bg-muted/50 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                                {post.category}
                            </span>
                            <h3 className="mt-4 font-mono text-lg font-semibold text-foreground leading-snug line-clamp-2 group-hover:text-foreground/80 transition-colors">
                                {post.title}
                            </h3>
                            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                                {post.excerpt}
                            </p>
                            <div className="mt-6 flex items-center justify-between text-xs text-muted-foreground font-mono">
                                <span>{post.date}</span>
                                <span className="flex items-center gap-1">
                                    <Clock className="h-3 w-3" />
                                    {post.readTime} {t.blog.minRead}
                                </span>
                            </div>
                        </Link>
                    ))}
                </AnimatedGroup>
            </div>
        </section>
    );
}
