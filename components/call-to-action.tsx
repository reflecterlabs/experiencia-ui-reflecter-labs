"use client";

import { useLocale } from "@/lib/i18n/locale-context";
import { TextEffect } from "./motion-primitives/text-effect";
import { AnimatedGroup } from "@/components/motion-primitives/animated-group";
import { transitionVariants } from "@/lib/utils";
import Script from "next/script";

export default function CallToAction() {
    const { t } = useLocale();

    return (
        <section id="reservar-llamada" className="py-24 md:py-32 relative overflow-hidden">
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
                </AnimatedGroup>
            </div>

            {/* Calendly inline widget — full width */}
            <div className="w-full mt-4">
                <div
                    className="calendly-inline-widget"
                    data-url="https://calendly.com/reflecterlabs/30min"
                    style={{ minWidth: "320px", height: "700px" }}
                />
            </div>

            {/* Calendly script */}
            <Script
                src="https://assets.calendly.com/assets/external/widget.js"
                strategy="lazyOnload"
            />
        </section>
    );
}
