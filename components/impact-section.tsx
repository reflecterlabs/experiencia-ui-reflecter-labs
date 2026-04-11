"use client";

import { Trees, Droplet, Orbit, ShieldCheck, Zap } from "lucide-react";
import { useLocale } from "@/lib/i18n/locale-context";
import { TextEffect } from "./motion-primitives/text-effect";
import { AnimatedGroup } from "@/components/motion-primitives/animated-group";
import { transitionVariants } from "@/lib/utils";

const icons = [Trees, Droplet, Orbit, ShieldCheck, Zap];

export default function ImpactSection() {
    const { t } = useLocale();

    return (
        <section className="relative py-24 overflow-hidden bg-muted/10 border-y border-border/50">
            {/* Background noise/grid */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                 style={{ backgroundImage: 'radial-gradient(circle, var(--primary) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
            
            <div className="mx-auto max-w-6xl px-6 relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                    
                    {/* Left Column: Themes */}
                    <div className="relative z-20">
                        <div className="inline-block px-3 py-1 mb-6 text-[10px] font-mono font-bold tracking-[0.2em] uppercase rounded-full border border-primary/20 bg-primary/5 text-primary">
                            {t.impact.heading}
                        </div>
                        <TextEffect
                            triggerOnView
                            preset="fade-in-blur"
                            speedSegment={0.3}
                            as="h2"
                            className="text-3xl font-bold md:text-5xl tracking-tighter uppercase mb-12"
                        >
                            {t.impact.title}
                        </TextEffect>
                        
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
                            className="space-y-2"
                        >
                            {t.impact.items.map((item: any, index: number) => {
                                const Icon = icons[index];
                                return (
                                    <div
                                        key={index}
                                        className="group relative flex gap-6 p-5 rounded-2xl border border-transparent hover:border-primary/10 hover:bg-background/80 transition-all duration-500"
                                    >
                                        {/* Connector Line (The "Cable") */}
                                        <div className="absolute -right-12 lg:-right-24 top-1/2 w-12 lg:w-24 h-px bg-gradient-to-r from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 hidden lg:block" />
                                        <div className="absolute -right-2 lg:-right-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-all duration-500 hidden lg:block" />

                                        <div className="relative shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-primary/5 border border-primary/10 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500 overflow-hidden shadow-inner">
                                            <Icon className="w-5 h-5 transition-transform group-hover:rotate-12" />
                                        </div>
                                        
                                        <div className="flex-1">
                                            <h3 className="text-sm font-bold font-mono uppercase tracking-tight mb-2 group-hover:text-primary transition-colors">
                                                {item.title}
                                            </h3>
                                            <p className="text-muted-foreground text-[11px] font-mono leading-relaxed line-clamp-2 opacity-70 group-hover:opacity-100 transition-opacity">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </AnimatedGroup>
                    </div>

                    {/* Right Column: 10% Commitment (The "Energy Source") */}
                    <div className="relative flex items-center justify-center">
                        {/* Radial cables (Visual connection) */}
                        <div className="absolute inset-0 pointer-events-none hidden lg:block">
                            <svg className="w-full h-full opacity-10" viewBox="0 0 400 400">
                                <circle cx="200" cy="200" r="150" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 8" className="text-primary animate-spin-slow" />
                                <line x1="0" y1="100" x2="160" y2="200" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
                                <line x1="0" y1="150" x2="160" y2="200" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
                                <line x1="0" y1="200" x2="160" y2="200" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
                                <line x1="0" y1="250" x2="160" y2="200" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
                                <line x1="0" y1="300" x2="160" y2="200" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
                            </svg>
                        </div>

                        <div className="relative w-full max-w-[440px] group">
                            {/* The "Power Cell" */}
                            <div className="relative z-10 p-12 md:p-16 rounded-[4rem] border border-primary/20 bg-primary/5 backdrop-blur-xl overflow-hidden text-center shadow-[0_0_50px_-12px_rgba(var(--primary-rgb),0.1)] transition-all duration-700 group-hover:border-primary/40 group-hover:shadow-primary/10">
                                
                                {/* Inner tech ring */}
                                <div className="absolute inset-4 rounded-[3rem] border border-primary/5 pointer-events-none" />
                                
                                {/* Background number */}
                                <span className="absolute -right-8 -bottom-16 text-[22rem] font-bold text-primary/[0.03] select-none pointer-events-none tracking-tighter transition-all duration-700 group-hover:text-primary/[0.06] group-hover:scale-105">
                                    10
                                </span>
                                
                                <div className="relative z-20">
                                    <div className="text-8xl md:text-[11rem] font-bold text-primary tracking-tighter leading-none mb-8 drop-shadow-2xl">
                                        10%
                                    </div>
                                    <div className="inline-block px-5 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 backdrop-blur-md">
                                        <h3 className="text-[10px] font-bold font-mono uppercase tracking-[0.4em] text-primary">
                                            COMPROMISO GLOBAL
                                        </h3>
                                    </div>
                                    <p className="text-muted-foreground font-mono text-[10px] md:text-xs leading-relaxed uppercase tracking-[0.2em] max-w-xs mx-auto opacity-70 group-hover:opacity-100 transition-opacity">
                                        {t.impact.subtitle}
                                    </p>
                                </div>

                                {/* Corner markers */}
                                <div className="absolute top-0 left-0 p-8">
                                    <div className="w-4 h-4 border-t-2 border-l-2 border-primary/30 rounded-tl-lg" />
                                </div>
                                <div className="absolute bottom-0 right-0 p-8">
                                    <div className="w-4 h-4 border-b-2 border-r-2 border-primary/30 rounded-br-lg" />
                                </div>
                            </div>
                            
                            {/* External Glow Pulse */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-primary/5 rounded-full blur-[140px] -z-10 animate-pulse" />
                        </div>
                    </div>

                </div>
            </div>
            
            <style dangerouslySetInnerHTML={{__html: `
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-spin-slow {
                    animation: spin-slow 20s linear infinite;
                    transform-origin: center;
                }
            `}} />
        </section>
    );
}
