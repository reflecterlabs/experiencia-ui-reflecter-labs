"use client";

import { useLocale } from "@/lib/i18n/locale-context";
import { TextEffect } from "./motion-primitives/text-effect";
import { AnimatedGroup } from "@/components/motion-primitives/animated-group";
import { transitionVariants } from "@/lib/utils";
import { Calendar } from "lucide-react";

export default function CallToAction() {
    const { t } = useLocale();

    return (
        <section className="py-24 md:py-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/5 -z-10" />
            <div className="mx-auto max-w-5xl px-6 text-center">
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
                    className="flex flex-col items-center"
                >
                    <div className="inline-block px-3 py-1 mb-6 text-xs font-mono font-medium tracking-wider uppercase rounded-full border border-primary/20 bg-primary/10 text-primary">
                        {t.common.bookCall}
                    </div>
                    <TextEffect
                        triggerOnView
                        preset="fade-in-blur"
                        speedSegment={0.3}
                        as="h2"
                        className="text-4xl font-semibold md:text-5xl lg:text-6xl mb-6 max-w-4xl"
                    >
                        {t.cta.heading}
                    </TextEffect>
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl">
                        {t.cta.description}
                    </p>
                    <a
                        href={t.common.calendarLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background font-mono text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:bg-foreground/90 hover:scale-105 shadow-xl hover:shadow-2xl"
                    >
                        <Calendar className="h-5 w-5" />
                        {t.cta.button}
                        <span className="absolute inset-0 bg-white/10 opacity-0 transition-opacity group-hover:opacity-100" />
                    </a>
                </AnimatedGroup>
            </div>
        </section>
    );
}
