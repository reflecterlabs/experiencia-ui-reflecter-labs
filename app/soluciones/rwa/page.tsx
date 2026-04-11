"use client";

import { Building2, Globe, Clock, Percent, Layers, Scale, TrendingUp, Shield, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/lib/i18n/locale-context";
import SolutionContact from "@/components/solution-contact";

const stats = [
  { value: "$16T+", label: "Mercado RWA proyectado para 2030" },
  { value: "24/7", label: "Acceso global al mercado" },
  { value: "90%", label: "Reducción en tiempo de liquidación" },
  { value: "100+", label: "Tipos de activos tokenizables" },
];

const tokenizableAssets = [
  {
    icon: Globe,
    title: "Bienes Raíces",
    desc: "Tokeniza propiedades comerciales y residenciales, permitiendo propiedad fraccionada y acceso global a la inversión.",
  },
  {
    icon: Layers,
    title: "Arte y Coleccionables",
    desc: "Lleva arte de alto valor, coleccionables raros y bienes de lujo a la blockchain para propiedad compartida.",
  },
  {
    icon: Scale,
    title: "Commodities",
    desc: "Crea representaciones digitales de oro, plata, productos agrícolas y otros commodities físicos.",
  },
  {
    icon: Shield,
    title: "Cumplimiento Regulatorio",
    desc: "Marcos de cumplimiento integrados para regulaciones de valores en múltiples jurisdicciones.",
  },
  {
    icon: TrendingUp,
    title: "Mercados Secundarios",
    desc: "Habilita el trading 24/7 de activos tokenizados en plataformas de mercado secundario compatibles.",
  },
  {
    icon: Globe,
    title: "Acceso Global",
    desc: "Abre oportunidades de inversión a una audiencia mundial sin restricciones geográficas.",
  },
];

const benefits = [
  {
    icon: Layers,
    title: "Propiedad Fraccionada",
    desc: "Divide activos de alto valor en fracciones accesibles, democratizando el acceso a inversiones premium antes reservadas para los más ricos.",
  },
  {
    icon: TrendingUp,
    title: "Mayor Liquidez",
    desc: "Transforma activos tradicionalmente ilíquidos en tokens negociables, permitiendo a los inversores entrar y salir de posiciones con facilidad.",
  },
  {
    icon: Clock,
    title: "Liquidación Más Rápida",
    desc: "Reduce los tiempos de liquidación de días o semanas a minutos con transacciones basadas en blockchain y automatización de contratos inteligentes.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Análisis del Activo",
    desc: "Evaluamos tu activo, analizamos su potencial de tokenización y diseñamos la estructura de token óptima para tus objetivos.",
  },
  {
    step: "02",
    title: "Asesoramiento y Marco Legal",
    desc: "Nuestro equipo establece el marco de cumplimiento regulatorio, asegurando que tu activo tokenizado cumpla con todos los requisitos legales.",
  },
  {
    step: "03",
    title: "Desarrollo del Token",
    desc: "Construimos contratos inteligentes seguros, creamos la infraestructura del token e implementamos todos los mecanismos de cumplimiento necesarios.",
  },
  {
    step: "04",
    title: "Lanzamiento y Soporte",
    desc: "Te ayudamos a lanzar tu activo tokenizado, integrar con marketplaces y brindar soporte técnico continuo.",
  },
];

const faqs = [
  {
    q: "¿Qué es la tokenización RWA?",
    a: "La tokenización de Activos del Mundo Real (RWA) es el proceso de emitir tokens basados en blockchain que representan propiedad o derechos en activos físicos o financieros tradicionales, como bienes raíces, commodities o flujos de ingresos. Cada token está respaldado por el activo subyacente y permite propiedad fraccionada y reglas de transferencia programables.",
  },
  {
    q: "¿Qué tipos de activos se pueden tokenizar?",
    a: "Casi cualquier activo con valor verificable puede ser tokenizado, incluyendo bienes raíces, arte, commodities, propiedad intelectual, flujos de ingresos y más. Trabajamos contigo para evaluar la viabilidad y diseñar la estructura óptima para tu clase de activo.",
  },
  {
    q: "¿Cómo funciona la propiedad fraccionada on-chain?",
    a: "La propiedad fraccionada on-chain es reforzada por contratos inteligentes que acuñan tokens que representan participaciones de un activo. Los inversores mantienen tokens en sus wallets; la propiedad es transparente y transferible. Los dividendos o ingresos pueden distribuirse automáticamente a través de los mismos contratos.",
  },
  {
    q: "¿Qué marcos regulatorios aplican a bienes raíces tokenizados?",
    a: "Los bienes raíces tokenizados están típicamente sujetos a regulaciones de valores en la jurisdicción del activo y los inversores. Construimos el cumplimiento en el diseño del token desde el primer día, incluyendo KYC/AML, restricciones de transferencia y verificaciones de acreditación cuando sea necesario.",
  },
  {
    q: "¿Es legalmente compatible la tokenización de activos?",
    a: "Sí, cuando se hace correctamente. Construimos el cumplimiento en el proceso de tokenización desde el primer día, asegurando la adhesión a las regulaciones de valores, requisitos KYC/AML y reglas jurisdiccionales.",
  },
  {
    q: "¿Cuánto tiempo toma el proceso de tokenización?",
    a: "El tiempo varía según la complejidad del activo y los requisitos regulatorios. Tokenizaciones simples pueden completarse en 4-6 semanas, mientras que proyectos más complejos pueden tomar 3-6 meses.",
  },
  {
    q: "¿Qué blockchain usan para RWA?",
    a: "Somos agnósticos a la blockchain y recomendamos la mejor cadena para tus necesidades específicas. Las opciones comunes incluyen Ethereum, Polygon, Avalanche, BNB Chain y cadenas empresariales personalizadas según los requisitos de cumplimiento y rendimiento.",
  },
];

export default function RWAPage() {
  const { t } = useLocale();

  return (
    <main className="relative z-10 pt-32 pb-20">
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6">
        <div className="max-w-3xl">
          <h1 className="font-mono text-4xl font-semibold text-foreground lg:text-5xl">
            {t.common.nav.solutions.rwa.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Tokeniza activos del mundo real. Habilita propiedad fraccionada, aumenta la liquidez y proporciona acceso global a inversiones tradicionalmente exclusivas.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground/70 italic">
            Reflecter Labs es un estudio de desarrollo Web3 que construye infraestructura RWA y de tokenización lista para producción para empresas y propietarios de activos.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg" className="rounded-full px-8">
              <Link href="/#reservar-llamada">Agendar consulta</Link>
            </Button>

          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-5xl px-6 mt-20">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-border p-6 text-center bg-background/40 backdrop-blur-sm"
            >
              <div className="font-mono text-3xl font-bold text-white">{stat.value}</div>
              <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Problem */}
      <section className="mx-auto max-w-5xl px-6 mt-20">
        <div className="rounded-2xl border border-border p-8 lg:p-12 bg-background/30 backdrop-blur-sm">
          <h2 className="font-mono text-2xl font-semibold text-foreground">
            El Problema con la Propiedad Tradicional de Activos
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Activos de alto valor como bienes raíces, arte y commodities han sido tradicionalmente accesibles solo para individuos e instituciones adineradas. Las barreras son significativas: altas inversiones mínimas, restricciones geográficas, procesos de liquidación prolongados y liquidez limitada.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Para los propietarios de activos, vender o transferir la propiedad involucra procesos legales complejos, intermediarios y costos significativos. Esto crea ineficiencias que perjudican tanto a compradores como a vendedores.
          </p>
        </div>
      </section>

      {/* Solution */}
      <section className="mx-auto max-w-5xl px-6 mt-20">
        <h2 className="font-mono text-2xl font-semibold text-foreground">Nuestra Solución</h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          La tokenización transforma estos activos en tokens digitales en la blockchain, habilitando:
        </p>
        <ul className="mt-6 space-y-3">
          {[
            "Propiedad fraccionada desde montos pequeños",
            "Transferencias instantáneas y sin fronteras 24/7",
            "Registros de propiedad transparentes on-chain",
            "Cumplimiento automatizado a través de contratos inteligentes",
            "Liquidez de mercado secundario para activos tradicionalmente ilíquidos",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <CheckCircle2 className="size-5 mt-0.5 shrink-0 text-foreground" />
              <span className="text-muted-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Tokenizable Assets */}
      <section className="mx-auto max-w-5xl px-6 mt-20">
        <h2 className="font-mono text-2xl font-semibold text-foreground">Qué Tokenizamos</h2>
        <p className="mt-2 text-muted-foreground">
          Desde bienes raíces hasta arte fino, tenemos la experiencia para tokenizar virtualmente cualquier clase de activo.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tokenizableAssets.map((asset) => {
            const Icon = asset.icon;
            return (
              <div
                key={asset.title}
                className="group rounded-2xl border border-border p-6 bg-background/40 backdrop-blur-sm transition-all duration-300 hover:border-border hover:shadow-xl hover:-translate-y-1"
              >
                <Icon className="size-8 text-foreground mb-4" />
                <h3 className="font-mono text-lg font-semibold text-foreground group-hover:text-foreground transition-colors">
                  {asset.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{asset.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-5xl px-6 mt-20">
        <h2 className="font-mono text-2xl font-semibold text-foreground">¿Por Qué Tokenizar Tus Activos?</h2>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="group rounded-2xl border border-border p-6 bg-background/30 backdrop-blur-sm transition-all duration-300 hover:border-border"
              >
                <Icon className="size-8 text-foreground mb-4" />
                <h3 className="font-mono text-lg font-semibold text-foreground">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{benefit.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-5xl px-6 mt-20">
        <h2 className="font-mono text-2xl font-semibold text-foreground">Nuestro Proceso</h2>
        <p className="mt-2 text-muted-foreground">Una metodología probada para llevar tu activo del concepto a la realidad tokenizada.</p>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <div
              key={step.step}
              className="group rounded-2xl border border-border p-6 bg-background/30 backdrop-blur-sm transition-all duration-300 hover:border-border"
            >
              <div className="font-mono text-4xl font-bold text-foreground/30">{step.step}</div>
              <h3 className="mt-3 font-mono text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Summary */}
      <section className="mx-auto max-w-5xl px-6 mt-20">
        <div className="rounded-2xl border border-border p-8 lg:p-12 bg-muted/20 backdrop-blur-sm">
          <h2 className="font-mono text-xl font-semibold text-foreground">En Resumen</h2>
          <ul className="mt-4 space-y-3">
            {[
              "La tokenización RWA convierte activos físicos o financieros tradicionales en tokens basados en blockchain que permiten propiedad fraccionada y reglas de transferencia programables.",
              "Reflecter Labs construye infraestructura RWA de extremo a extremo: análisis de activos, marco legal, contratos inteligentes y soporte de lanzamiento.",
              "Soportamos bienes raíces, arte, commodities y otras clases de activos con cumplimiento integrado para múltiples jurisdicciones.",
              "Reflecter Labs es un estudio de desarrollo Web3 especializado en infraestructura RWA y de tokenización de grado empresarial.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="size-5 mt-0.5 shrink-0 text-foreground" />
                <span className="text-sm text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      
      <SolutionContact 
        solutionId="rwa" 
        solutionName={t.common.nav.solutions.rwa.title} 
      />
    </main>
  );
}
