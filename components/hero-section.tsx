"use client";

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import { TextEffect } from "@/components/motion-primitives/text-effect";
import { AnimatedGroup } from "@/components/motion-primitives/animated-group";
import GlobantLogoIcon from "@/components/icons/globant-logo-icon";
import DecryptedText from "@/components/DecryptedText";
import { transitionVariants } from "@/lib/utils";
import LanyardWithControls from "@/components/lanyard-with-controls";
import { useLocale } from "@/lib/i18n/locale-context";

export default function HeroSection() {
    const { t, locale } = useLocale();

    return (
        <main className="overflow-x-hidden">
            <section className='lg:h-screen'>
                <div
                    className="pb-24 pt-12 md:pb-32 lg:pb-56 lg:pt-44 lg:grid lg:grid-cols-2 lg:grid-rows-1 grid-cols-1 grid-rows-2">
                    <div className="relative mx-auto flex max-w-xl flex-col px-6 lg:block">
                        <div className="mx-auto max-w-2xl text-center lg:ml-0 lg:text-left">
                            <div className='mt-8 lg:mt-16'>
                                <DecryptedText
                                    key={locale + '-subtitle'}
                                    text={t.hero.subtitle}
                                    animateOn="view"
                                    revealDirection="start"
                                    sequential
                                    useOriginalCharsOnly={false}
                                    speed={70}
                                    className={`font-mono text-muted-foreground bg-black rounded-md ${locale === 'zh' ? '' : 'uppercase'}`}
                                />
                            </div>
                            <h1 className="max-w-2xl text-balance text-6xl font-semibold md:text-7xl xl:text-8xl tracking-tighter">
                                <TextEffect
                                    key={locale + '-title1'}
                                    preset="fade-in-blur"
                                    speedSegment={0.3}
                                    as="span"
                                    className="block">
                                    {t.hero.title1}
                                </TextEffect>
                                <TextEffect
                                    key={locale + '-title2'}
                                    preset="fade-in-blur"
                                    speedSegment={0.3}
                                    as="span"
                                    className="block">
                                    {t.hero.title2}
                                </TextEffect>
                            </h1>
                            <TextEffect
                                key={locale + '-desc'}
                                per="line"
                                preset="fade-in-blur"
                                speedSegment={0.3}
                                delay={0.5}
                                as="p"
                                className="mt-8 max-w-2xl text-pretty text-lg text-muted-foreground bg-black p-1 rounded-md">
                                {t.hero.description}
                            </TextEffect>
                            <AnimatedGroup
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
                                className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start"
                            >
                                <Button
                                    asChild
                                    size="lg"
                                    className="px-8 text-base rounded-full shadow-lg shadow-white/10 hover:shadow-white/20 active:scale-95 transition-all">
                                    <Link href="/#reservar-llamada">
                                        <span className="text-nowrap">{t.cta.button}</span>
                                    </Link>
                                </Button>
                            </AnimatedGroup>
                        </div>
                    </div>
                    <LanyardWithControls
                        position={[0, 0, 20]}
                        containerClassName='lg:absolute lg:top-0 lg:right-0 lg:w-1/2 relative w-full h-screen bg-radial lg:from-transparent lg:to-transparent from-muted to-background select-none'
                        defaultName="" />
                </div>
            </section>

            {/* Destacado section */}
            <section className="bg-background pb-16 md:pb-32">
                <AnimatedGroup
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
                    className="group relative m-auto max-w-6xl px-6"
                >
                    <div className="flex flex-col items-center md:flex-row">
                        <div className="md:max-w-44 md:border-r md:pr-6 mb-4 md:mb-0 w-full">
                            <p className="text-center md:text-end text-sm font-mono uppercase text-muted-foreground">{t.hero.featuredIn}</p>
                        </div>
                        <div className="relative py-2 md:py-6 md:w-[calc(100%-11rem)] md:pl-6 w-full">
                            <Link href="/shanghai" target="_blank" rel="noopener noreferrer" className="block p-5 border border-primary/20 rounded-2xl bg-muted/10 hover:bg-muted/30 transition-all duration-300 text-center shadow-sm hover:shadow-primary/10 group/link">
                                <div 
                                    className="text-base md:text-lg font-medium text-foreground/90 inline-block"
                                    dangerouslySetInnerHTML={{ __html: t.hero.shanghaiBanner }} 
                                />
                                <p className="text-xs md:text-sm text-primary mt-2 font-medium">{t.common.readMore} &rarr;</p>
                            </Link>
                        </div>
                    </div>
                </AnimatedGroup>
            </section>
        </main>
    )
}
