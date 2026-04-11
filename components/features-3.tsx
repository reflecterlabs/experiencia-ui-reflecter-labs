"use client";

import { CircleDollarSignIcon, EarthIcon, UsersIcon } from 'lucide-react'
import React from 'react'
import { TextEffect } from "@/components/motion-primitives/text-effect";
import { transitionVariants } from "@/lib/utils";
import { AnimatedGroup } from "@/components/motion-primitives/animated-group";
import { useLocale } from "@/lib/i18n/locale-context";

export default function Features() {
    const { t } = useLocale();

    const features = [
        {
            title: t.features.codeIsLaw,
            desc: t.features.codeIsLawDesc,
            icon: CircleDollarSignIcon,
            bgNumber: "01"
        },
        {
            title: t.features.noStatusQuo,
            desc: t.features.noStatusQuoDesc,
            icon: EarthIcon,
            bgNumber: "02"
        },
        {
            title: t.features.capitalism,
            desc: t.features.capitalismDesc,
            icon: UsersIcon,
            bgNumber: "03"
        }
    ];

    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-6xl px-6">
                <div className="text-center mb-16 md:mb-24">
                    <TextEffect
                        triggerOnView
                        preset="fade-in-blur"
                        speedSegment={0.3}
                        as="h2"
                        className="text-balance text-4xl font-bold lg:text-5xl uppercase tracking-tighter">
                        {t.features.heading}
                    </TextEffect>
                </div>
                
                <AnimatedGroup
                    triggerOnView
                    variants={{
                        container: {
                            visible: {
                                transition: {
                                    staggerChildren: 0.1,
                                },
                            },
                        },
                        ...transitionVariants,
                    }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div 
                                key={index}
                                className="relative group p-8 md:p-10 rounded-[2.5rem] border border-primary/20 bg-primary/5 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-primary/40 hover:shadow-2xl hover:-translate-y-1"
                            >
                                {/* Decorative background number */}
                                <span className="absolute -right-4 -bottom-10 text-[12rem] font-bold text-primary/5 select-none pointer-events-none tracking-tighter transition-all duration-700 group-hover:text-primary/10 group-hover:scale-110">
                                    {feature.bgNumber}
                                </span>
                                
                                <div className="relative z-20">
                                    <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-primary/10 border border-primary/20 mb-8 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    
                                    <h3 className="text-2xl font-bold font-mono uppercase tracking-tight text-foreground mb-6 group-hover:text-primary transition-colors">
                                        {feature.title}
                                    </h3>
                                    
                                    <p className="text-muted-foreground font-mono text-sm leading-relaxed uppercase tracking-wider">
                                        {feature.desc}
                                    </p>
                                </div>

                                {/* Accent line */}
                                <div className="absolute top-0 left-0 w-1 h-0 bg-gradient-to-b from-primary/50 via-primary to-transparent group-hover:h-full transition-all duration-700" />
                                
                                {/* Glow effect */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/10 rounded-full blur-[80px] -z-10 opacity-0 group-hover:opacity-40 transition-opacity duration-700" />
                            </div>
                        );
                    })}
                </AnimatedGroup>
            </div>
        </section>
    );
}
