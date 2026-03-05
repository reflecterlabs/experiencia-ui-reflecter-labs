"use client";

import { TextEffect } from "@/components/motion-primitives/text-effect";
import React from "react";
import { transitionVariants } from "@/lib/utils";
import { AnimatedGroup } from "@/components/motion-primitives/animated-group";
import { useLocale } from "@/lib/i18n/locale-context";

export default function Agenda() {
    const { t } = useLocale();

    return (
        <section className="scroll-py-16 py-16 md:scroll-py-32 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid gap-y-12 px-2 lg:grid-cols-[1fr_auto]">
                    <div className="text-center lg:text-left">
                        <TextEffect
                            triggerOnView
                            preset="fade-in-blur"
                            speedSegment={0.3}
                            as="h2"
                            className="mb-4 text-3xl font-semibold md:text-4xl">
                            {t.roadmap.heading}
                        </TextEffect>
                    </div>

                    <AnimatedGroup
                        triggerOnView
                        variants={{
                            container: {
                                visible: {
                                    transition: {
                                        staggerChildren: 0.05,
                                        delayChildren: 0.75,
                                    },
                                },
                            },
                            ...transitionVariants,
                        }}
                        className="divide-y divide-dashed sm:mx-auto sm:max-w-lg lg:mx-0"
                    >
                        <div className="pb-6">
                            <h3 className="font-medium space-x-2">
                                <span className='text-muted-foreground font-mono '>Q1</span>
                                <span>{t.roadmap.q1Title}</span>
                            </h3>
                            <p className="text-muted-foreground mt-4">{t.roadmap.q1Desc}</p>
                        </div>
                        <div className="py-6">
                            <h3 className="font-medium space-x-2">
                                <span className='text-muted-foreground font-mono '>Q2</span>
                                <span>{t.roadmap.q2Title}</span>
                            </h3>
                            <p className="text-muted-foreground mt-4">{t.roadmap.q2Desc}</p>
                        </div>
                        <div className="py-6">
                            <h3 className="font-medium space-x-2">
                                <span className='text-muted-foreground font-mono '>Q3</span>
                                <span>{t.roadmap.q3Title}</span>
                            </h3>
                            <p className="text-muted-foreground mt-4">{t.roadmap.q3Desc}</p>
                        </div>
                        <div className="py-6">
                            <h3 className="font-medium space-x-2">
                                <span className='text-muted-foreground font-mono '>Q4</span>
                                <span>{t.roadmap.q4Title}</span>
                            </h3>
                            <p className="text-muted-foreground mt-4">{t.roadmap.q4Desc}</p>
                        </div>
                    </AnimatedGroup>
                </div>
            </div>
        </section>
    )
}
