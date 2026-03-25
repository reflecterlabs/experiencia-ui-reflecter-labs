"use client";

import { TextEffect } from "@/components/motion-primitives/text-effect";
import React from "react";
import { transitionVariants } from "@/lib/utils";
import { AnimatedGroup } from "@/components/motion-primitives/animated-group";
import { useLocale } from "@/lib/i18n/locale-context";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

type StepStatus = "completed" | "active" | "upcoming";

interface TimelineStep {
    quarter: string;
    title: string;
    description: string;
    status: StepStatus;
    badge?: React.ReactNode;
    extra?: React.ReactNode;
}

function TimelineDot({ status }: { status: StepStatus }) {
    if (status === "completed") {
        return (
            <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#00FF85] shadow-[0_0_16px_rgba(0,255,133,0.35)]">
                <Check className="h-4 w-4 text-black stroke-[3]" />
            </div>
        );
    }
    if (status === "active") {
        return (
            <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00FF85]/30" />
                <span className="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#00FF85] bg-background">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#00FF85]" />
                </span>
            </div>
        );
    }
    return (
        <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-border bg-background opacity-40">
            <span className="h-2 w-2 rounded-full bg-muted-foreground" />
        </div>
    );
}

export default function Agenda() {
    const { t } = useLocale();

    const steps: TimelineStep[] = [
        {
            quarter: "Q1",
            title: t.roadmap.q1Title,
            description: t.roadmap.q1Desc,
            status: "completed",
            badge: (
                <span className="text-[10px] bg-emerald-500/10 text-emerald-500 px-2 py-0.5 rounded-full border border-emerald-500/20 font-mono uppercase tracking-wider">
                    {t.roadmap.q1Status}
                </span>
            ),
        },
        {
            quarter: "Q2",
            title: t.roadmap.q2Title,
            description: t.roadmap.q2Desc,
            status: "active",
            badge: (
                <span className="flex items-center gap-1.5 text-[10px] bg-[#00FF00]/10 text-[#00FF00] px-2 py-0.5 rounded-full border border-[#00FF00]/20 font-mono uppercase tracking-wider">
                    <span className="size-1.5 rounded-full bg-[#00FF00] animate-pulse" />
                    {t.roadmap.q2Status}
                </span>
            ),
            extra: (
                <div className="mt-4">
                    <Link
                        href="https://grinta.reflecterlabs.xyz/"
                        target="_blank"
                        className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#00FF85] hover:translate-x-1 transition-transform group"
                    >
                        <span>GRINTA PROTOCOL</span>
                        <ArrowRight className="size-3 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                </div>
            ),
        },
        {
            quarter: "Q3",
            title: t.roadmap.q3Title,
            description: t.roadmap.q3Desc,
            status: "upcoming",
        },
        {
            quarter: "Q4",
            title: t.roadmap.q4Title,
            description: t.roadmap.q4Desc,
            status: "upcoming",
        },
    ];

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
                                        staggerChildren: 0.1,
                                        delayChildren: 0.5,
                                    },
                                },
                            },
                            ...transitionVariants,
                        }}
                        className="sm:mx-auto sm:max-w-lg lg:mx-0"
                    >
                        <div className="relative flex flex-col">
                            {/* Vertical line behind dots */}
                            <div
                                className="absolute left-4 top-4 bottom-4 w-px"
                                style={{
                                    background:
                                        "linear-gradient(to bottom, #00FF85 0%, #00FF85 28%, rgba(0,255,133,0.15) 50%, rgba(100,100,100,0.15) 70%, rgba(100,100,100,0.08) 100%)",
                                }}
                            />

                            {steps.map((step, i) => (
                                <div key={step.quarter} className="relative flex gap-6">
                                    {/* Dot */}
                                    <TimelineDot status={step.status} />

                                    {/* Content */}
                                    <div
                                        className={`pb-10 flex-1 ${i === steps.length - 1 ? "pb-0" : ""} ${
                                            step.status === "upcoming" ? "opacity-45" : ""
                                        }`}
                                    >
                                        {step.status === "active" ? (
                                            <div className="rounded-xl border border-emerald-500/15 bg-emerald-500/[0.025] -mx-2 px-4 py-4">
                                                <h3 className="flex flex-wrap items-center gap-2 font-medium">
                                                    <span className="text-primary font-mono">{step.quarter}</span>
                                                    <span className="font-bold">{step.title}</span>
                                                    {step.badge}
                                                </h3>
                                                <p className="text-foreground mt-3 text-sm leading-relaxed">{step.description}</p>
                                                {step.extra}
                                            </div>
                                        ) : (
                                            <>
                                                <h3 className="flex flex-wrap items-center gap-2 font-medium">
                                                    <span
                                                        className={`font-mono ${
                                                            step.status === "completed"
                                                                ? "text-[#00FF85]"
                                                                : "text-muted-foreground"
                                                        }`}
                                                    >
                                                        {step.quarter}
                                                    </span>
                                                    <span
                                                        className={
                                                            step.status === "completed"
                                                                ? "line-through text-muted-foreground"
                                                                : ""
                                                        }
                                                    >
                                                        {step.title}
                                                    </span>
                                                    {step.badge}
                                                </h3>
                                                <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                                                    {step.description}
                                                </p>
                                                {step.extra}
                                            </>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </AnimatedGroup>
                </div>
            </div>
        </section>
    );
}
