"use client";

import React from 'react';
import Link from 'next/link';
import { Bot, LineChart, ShieldCheck, Zap, ArrowLeft, Trophy, Server, Cpu, Download, PlaneTakeoff, Hexagon, Box, Database, Network, Activity, Triangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LogoLoop from '@/components/LogoLoop';
import { useLocale } from '@/lib/i18n/locale-context';

const sponsorLogos = [
  { node: <div className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"><Hexagon className="size-8" /><span className="text-2xl font-bold">Starknet</span></div> },
  { node: <div className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"><Box className="size-8" /><span className="text-2xl font-bold">Ekubo</span></div> },
  { node: <div className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"><Database className="size-8" /><span className="text-2xl font-bold">Herodotus</span></div> },
  { node: <div className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"><Network className="size-8" /><span className="text-2xl font-bold">Pragma</span></div> },
  { node: <div className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"><Activity className="size-8" /><span className="text-2xl font-bold">Argent</span></div> },
  { node: <div className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"><Triangle className="size-8" /><span className="text-2xl font-bold">Braavos</span></div> },
];

export default function ShanghaiContent() {
  const { t } = useLocale();
  const shanghai = t.shanghai;

  return (
    <div className="max-w-4xl mx-auto px-6 relative z-20">
      <Link href="/" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8 group">
        <ArrowLeft className="mr-2 size-4 transition-transform group-hover:-translate-x-1" />
        {shanghai.backHome}
      </Link>
      
      <div className="space-y-6 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium">
          <Trophy className="size-4" />
          <span>{shanghai.badge}</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-foreground uppercase">
          {shanghai.title1} <span className="text-primary">{shanghai.title2}</span> {shanghai.title3}
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl text-pretty">
          {shanghai.subtitle}
        </p>
      </div>

      <div className="prose prose-neutral dark:prose-invert max-w-none space-y-12">
        
        <section className="bg-muted/10 border border-border rounded-3xl p-8 md:p-12 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <Bot className="size-6 text-primary" />
            {shanghai.section1.title}
          </h2>
          <p 
            className="text-muted-foreground text-lg mb-6 leading-relaxed text-pretty"
            dangerouslySetInnerHTML={{ __html: shanghai.section1.desc }}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <div className="bg-background border border-border p-5 rounded-2xl">
              <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2"><Zap className="size-4 text-yellow-500" /> {shanghai.section1.card1Title}</h3>
              <p className="text-sm text-muted-foreground">{shanghai.section1.card1Desc}</p>
            </div>
            <div className="bg-background border border-border p-5 rounded-2xl">
              <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2"><LineChart className="size-4 text-green-500" /> {shanghai.section1.card2Title}</h3>
              <p className="text-sm text-muted-foreground">{shanghai.section1.card2Desc}</p>
            </div>
            <div className="bg-background border border-border p-5 rounded-2xl">
              <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2"><Server className="size-4 text-blue-500" /> {shanghai.section1.card3Title}</h3>
              <p className="text-sm text-muted-foreground">{shanghai.section1.card3Desc}</p>
            </div>
            <div className="bg-background border border-border p-5 rounded-2xl">
              <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2"><ShieldCheck className="size-4 text-purple-500" /> {shanghai.section1.card4Title}</h3>
              <p className="text-sm text-muted-foreground">{shanghai.section1.card4Desc}</p>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-bold flex items-center gap-3 border-b pb-4">
            <Cpu className="size-8 text-primary" />
            {shanghai.section2.title}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed text-pretty">
            {shanghai.section2.desc1}
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed text-pretty">
            {shanghai.section2.desc2}
          </p>
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mt-6">
            <h3 className="font-bold text-foreground mb-3 text-lg">{shanghai.section2.whyWonTitle}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {shanghai.section2.whyWonDesc}
            </p>
          </div>
        </section>

        <section className="bg-gradient-to-br from-primary/20 via-background to-background border border-primary/30 rounded-3xl p-8 md:p-12 shadow-lg relative overflow-hidden mt-12 mb-12">
          <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
            <PlaneTakeoff className="size-48" />
          </div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-black mb-4 uppercase tracking-tight text-foreground">
              {shanghai.sponsors.title1} <span className="text-primary">{shanghai.sponsors.title2}</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-6 text-pretty max-w-2xl font-medium">
              {shanghai.sponsors.desc1}
            </p>
            <p 
              className="text-lg text-muted-foreground mb-8 text-pretty max-w-3xl"
              dangerouslySetInnerHTML={{ __html: shanghai.sponsors.desc2 }}
            />
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="rounded-xl bg-primary text-primary-foreground font-bold hover:shadow-lg hover:shadow-primary/20 transition-all h-auto py-4">
                <a href="/Alianza%20Estrat%C3%A9gica%20-%20Expedici%C3%B3n%20a%20China%202026.pdf" download target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-left">
                  <Download className="size-6 shrink-0" />
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider opacity-80">{shanghai.sponsors.btn1Subtitle}</span>
                    <span className="block text-base">{shanghai.sponsors.btn1Title}</span>
                  </div>
                </a>
              </Button>
              
              <Button asChild size="lg" variant="outline" className="rounded-xl border-primary/50 hover:bg-primary/10 transition-all h-auto py-4">
                <a href="/Collaboration%20Proposal%20%E2%80%93%20Agentic%20Loop%20House%20Hackathon%20Shanghai%202026.pdf" download target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-left">
                  <Download className="size-6 shrink-0" />
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider opacity-80">{shanghai.sponsors.btn2Subtitle}</span>
                    <span className="block text-base">{shanghai.sponsors.btn2Title}</span>
                  </div>
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section className="mb-16 -mt-4">
          <h3 className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-8">
            {shanghai.partners.title}
          </h3>
          <div className="relative overflow-hidden w-full h-32 flex items-center rounded-2xl bg-muted/5 border border-border/50">
            <LogoLoop
              logos={sponsorLogos}
              speed={80}
              direction="left"
              logoHeight={48}
              gap={60}
              hoverSpeed={20}
              scaleOnHover
              fadeOut
              ariaLabel={shanghai.partners.ariaLabel}
            />
          </div>
        </section>

        <section className="pt-10 border-t flex flex-col items-center text-center">
          <h2 className="text-2xl font-bold mb-4">{shanghai.cta.title}</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl text-pretty">
            {shanghai.cta.desc}
          </p>
          <Button asChild size="lg" className="rounded-full px-8 bg-primary text-primary-foreground font-bold hover:shadow-lg hover:shadow-primary/20 transition-all">
            <Link href="/#reservar-llamada">
              {shanghai.cta.button}
            </Link>
          </Button>
        </section>

      </div>
    </div>
  );
}
