"use client";

import { LineChart, Shield, Globe, Clock, Zap, ArrowRight, CheckCircle2, BarChart3, Activity, Target, Layers, TrendingUp } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/lib/i18n/locale-context";
import SolutionContact from "@/components/solution-contact";

const stats = [
  { value: "<10ms", label: "Latencia de ejecución" },
  { value: "1M+", label: "Órdenes por segundo" },
  { value: "99.99%", label: "Garantía de uptime" },
  { value: "50+", label: "Pares de trading soportados" },
];

const capabilities = [
  {
    icon: Zap,
    title: "Matching de Alto Rendimiento",
    desc: "Motores de matching de órdenes ultra-baja latencia capaces de procesar millones de órdenes por segundo con ejecución sub-milisegundo.",
  },
  {
    icon: Activity,
    title: "Datos de Mercado en Tiempo Real",
    desc: "Feeds de datos de mercado basados en WebSocket que entregan actualizaciones tick-a-tick, profundidad del libro de órdenes e historial de trades en tiempo real.",
  },
  {
    icon: BarChart3,
    title: "Charting Avanzado",
    desc: "Charting de grado profesional con más de 100 indicadores técnicos, timeframes personalizados y herramientas de dibujo para análisis técnico.",
  },
  {
    icon: Target,
    title: "Enrutamiento Inteligente de Órdenes",
    desc: "Enrutamiento inteligente de órdenes a través de múltiples venues para encontrar el mejor precio de ejecución y minimizar el impacto de mercado.",
  },
  {
    icon: Shield,
    title: "Gestión de Riesgo",
    desc: "Monitoreo de posiciones en tiempo real, cálculos de margen y sistemas de liquidación automatizados para proteger traders y la plataforma.",
  },
  {
    icon: Layers,
    title: "Agregación Multi-Exchange",
    desc: "Agrega liquidez de múltiples exchanges y DEXs para proporcionar libros de órdenes más profundos y mejor pricing.",
  },
];

const tradingProducts = [
  {
    icon: LineChart,
    title: "Trading Spot",
    desc: "Construye plataformas de trading spot con ejecución instantánea, libros de órdenes profundos y tipos de órdenes avanzados.",
    features: ["Liquidación instantánea", "Múltiples tipos de órdenes", "Profundidad del libro", "Historial de trades"],
  },
  {
    icon: TrendingUp,
    title: "Futuros Perpetuos",
    desc: "Lanza mercados de futuros perpetuos con apalancamiento de hasta 100x. Nuestra infraestructura de derivados incluye cálculos de funding rate, fondos de seguro y motores de liquidación.",
    features: ["Hasta 100x leverage", "Sistema de funding rate", "Oráculo de mark price", "Auto-deleveraging"],
  },
  {
    icon: Target,
    title: "Trading de Opciones",
    desc: "Crea mercados de opciones con contratos de estilo europeo o americano. Construimos los modelos de pricing, cálculos de Greeks y mecanismos de liquidación.",
    features: ["Múltiples strike prices", "Cálculos de Greeks", "Superficies de volatilidad", "Ejercicio y liquidación"],
  },
];

const techStack = [
  { label: "Matching Engine", desc: "Motor personalizado de alto rendimiento" },
  { label: "Market Data", desc: "APIs WebSocket y REST" },
  { label: "Risk Engine", desc: "Gestión de posiciones en tiempo real" },
  { label: "Price Feeds", desc: "Agregación de oráculos multi-fuente" },
  { label: "Settlement", desc: "Híbrido on-chain y off-chain" },
  { label: "Analytics", desc: "Analíticas de trading en tiempo real" },
];

const whyChoose = [
  {
    icon: Shield,
    title: "Grado Institucional",
    desc: "Infraestructura construida con estándares institucionales con alta disponibilidad, recuperación ante desastres y características de seguridad empresarial.",
  },
  {
    icon: Globe,
    title: "Alcance Global",
    desc: "Despliega infraestructura de trading en múltiples regiones con conexiones de baja latencia a los principales centros financieros del mundo.",
  },
  {
    icon: Clock,
    title: "Siempre Activo",
    desc: "Los mercados cripto nunca duermen. Nuestra infraestructura está diseñada para operación 24/7 con cero downtime planificado.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Análisis de Requisitos",
    desc: "Analizamos tus requisitos de trading, mercados objetivo y necesidades de usuarios para diseñar la arquitectura óptima.",
  },
  {
    step: "02",
    title: "Diseño de Infraestructura",
    desc: "Diseñamos motores de matching, feeds de datos y sistemas de riesgo adaptados a tus productos de trading específicos.",
  },
  {
    step: "03",
    title: "Desarrollo y Testing",
    desc: "Construimos y probamos rigurosamente todos los componentes incluyendo pruebas de carga, auditorías de seguridad y pruebas de integración.",
  },
  {
    step: "04",
    title: "Lanzamiento y Escala",
    desc: "Despliega a producción con monitoreo, alertas y soporte. Escala la infraestructura a medida que tu plataforma crece.",
  },
];

const faqs = [
  {
    q: "¿Qué es una plataforma de trading cripto?",
    a: "Una plataforma de trading cripto es software que permite a los usuarios comprar, vender y negociar criptomonedas. Típicamente incluye un motor de matching de órdenes, feeds de datos de mercado, wallets y controles de riesgo. Reflecter Labs construye exchanges spot, plataformas de derivados y APIs de trading para instituciones y apps de consumo.",
  },
  {
    q: "¿Qué es un motor de matching de órdenes?",
    a: "Un motor de matching de órdenes es el componente central que empareja órdenes de compra y venta basadas en precio y prioridad de tiempo. Los motores de alto rendimiento procesan miles de órdenes por segundo con latencia sub-milisegundo. Reflecter Labs construye motores de matching personalizados para spot, futuros y opciones.",
  },
  {
    q: "¿Cuánto tiempo toma construir una plataforma de trading?",
    a: "Un MVP mínimo de trading spot puede entregarse en 3-4 meses. Plataformas con todas las funciones con derivados, múltiples tipos de órdenes y herramientas institucionales típicamente toman 6-12 meses. El tiempo depende del alcance del producto, cumplimiento e integración con venues de liquidez.",
  },
  {
    q: "¿Construyen infraestructura de trading DEX o CEX?",
    a: "Construimos ambas. Para plataformas tipo CEX entregamos motores de matching, integración de custodia y rampas fiat. Para DEX construimos AMMs, DEXs de libro de órdenes y agregadores. También construimos sistemas híbridos que combinan liquidación on-chain con matching de órdenes off-chain.",
  },
  {
    q: "¿Qué pares de trading y activos soportan?",
    a: "Diseñamos plataformas para soportar cualquier número de pares y activos. La integración con oráculos de precios y fuentes de liquidez (CEXs, DEXs, market makers) es parte de la arquitectura. Soportamos spot, perpetuos, opciones y productos estructurados.",
  },
  {
    q: "¿Cómo manejan los datos de mercado y la baja latencia?",
    a: "Usamos feeds WebSocket para libros de órdenes y trades en tiempo real, co-locación cuando es necesario, y estructuras de datos optimizadas. Los objetivos de latencia dependen del caso de uso: sub-10ms para retail, sub-milisegundo para trading profesional. Diseñamos el stack para cumplir tu SLA.",
  },
];

export default function TradingPage() {
  const { t } = useLocale();

  return (
    <main className="relative z-10 pt-32 pb-20">
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6">
        <div className="max-w-3xl">

          <h1 className="font-mono text-4xl font-semibold text-foreground lg:text-5xl">
            {t.common.nav.solutions.trading.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Construye plataformas de trading que compiten con las mejores. Reflecter Labs es un estudio de desarrollo Web3 que construye infraestructura de trading—motores de matching, datos de mercado y APIs—para los traders más exigentes.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground/70 italic">
            Definición: Una plataforma de trading cripto es software que permite a los usuarios comprar, vender y negociar activos digitales. Típicamente incluye un motor de matching de órdenes, datos de mercado en tiempo real y controles de riesgo.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg" className="rounded-full px-8">
              <Link href="/#reservar-llamada">Construye tu plataforma</Link>
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
            Infraestructura de Trading que Escala
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Construir una plataforma de trading es uno de los desafíos técnicamente más desafiantes en software. Necesitas latencia sub-milisegundo, uptime 24/7 y la capacidad de manejar picos de tráfico durante condiciones volátiles del mercado.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            La mayoría de los equipos subestiman la complejidad: motores de matching, sistemas de riesgo, feeds de datos de mercado, gestión de órdenes e interfaces de usuario necesitan trabajar juntos sin problemas bajo carga extrema.
          </p>
        </div>
      </section>

      {/* What We Deliver */}
      <section className="mx-auto max-w-5xl px-6 mt-20">
        <h2 className="font-mono text-2xl font-semibold text-foreground">Lo Que Entregamos</h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Infraestructura de trading probada en batalla construida por ingenieros que entienden los mercados:
        </p>
        <ul className="mt-6 space-y-3">
          {[
            "Motores de matching de alto rendimiento con tipos de órdenes configurables",
            "APIs WebSocket en tiempo real para datos de mercado y actualizaciones de órdenes",
            "Charting profesional con herramientas de análisis técnico",
            "Sistemas de gestión de riesgo con monitoreo en tiempo real",
            "Arquitectura escalable que crece con tu plataforma",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <CheckCircle2 className="size-5 mt-0.5 shrink-0 text-foreground" />
              <span className="text-muted-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Core Capabilities */}
      <section className="mx-auto max-w-5xl px-6 mt-20">
        <h2 className="font-mono text-2xl font-semibold text-foreground">Capacidades Core</h2>
        <p className="mt-2 text-muted-foreground">Todo lo que necesitas para construir una plataforma de trading de clase mundial.</p>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <div
                key={cap.title}
                className="group rounded-2xl border border-border p-6 bg-background/40 backdrop-blur-sm transition-all duration-300 hover:border-border hover:shadow-xl hover:-translate-y-1"
              >
                <Icon className="size-8 text-foreground mb-4" />
                <h3 className="font-mono text-lg font-semibold text-foreground group-hover:text-foreground transition-colors">
                  {cap.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{cap.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Trading Products */}
      <section className="mx-auto max-w-5xl px-6 mt-20">
        <h2 className="font-mono text-2xl font-semibold text-foreground">Productos de Trading que Construimos</h2>
        <p className="mt-2 text-muted-foreground">Desde mercados spot hasta derivados complejos.</p>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {tradingProducts.map((product) => {
            const Icon = product.icon;
            return (
              <div
                key={product.title}
                className="group rounded-2xl border border-border p-6 bg-background/30 backdrop-blur-sm transition-all duration-300 hover:border-border"
              >
                <Icon className="size-8 text-foreground mb-4" />
                <h3 className="font-mono text-lg font-semibold text-foreground">{product.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{product.desc}</p>
                <div className="mt-4 pt-4 border-t border-border/50 space-y-2">
                  {product.features.map((f) => (
                    <div key={f} className="flex items-center gap-2">
                      <CheckCircle2 className="size-3 shrink-0 text-foreground" />
                      <span className="text-xs text-muted-foreground">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="mx-auto max-w-5xl px-6 mt-20">
        <h2 className="font-mono text-2xl font-semibold text-foreground">Stack Tecnológico</h2>
        <p className="mt-2 text-muted-foreground">Construido con las últimas tecnologías para rendimiento y confiabilidad.</p>
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {techStack.map((tech) => (
            <div
              key={tech.label}
              className="rounded-2xl border border-border p-5 bg-background/30 backdrop-blur-sm"
            >
              <h3 className="font-mono text-sm font-semibold text-foreground">{tech.label}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{tech.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose */}
      <section className="mx-auto max-w-5xl px-6 mt-20">
        <h2 className="font-mono text-2xl font-semibold text-foreground">¿Por Qué Elegirnos?</h2>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {whyChoose.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group rounded-2xl border border-border p-6 bg-background/30 backdrop-blur-sm transition-all duration-300 hover:border-border"
              >
                <Icon className="size-8 text-foreground mb-4" />
                <h3 className="font-mono text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-5xl px-6 mt-20">
        <h2 className="font-mono text-2xl font-semibold text-foreground">Nuestro Proceso</h2>
        <p className="mt-2 text-muted-foreground">Del concepto a la plataforma de trading activa.</p>
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

      {/* FAQ */}
      <section className="mx-auto max-w-5xl px-6 mt-20">
        <h2 className="font-mono text-2xl font-semibold text-foreground">Preguntas Frecuentes</h2>
        <div className="mt-10 space-y-6">
          {faqs.map((faq) => (
            <div
              key={faq.q}
              className="rounded-2xl border border-border p-6 bg-background/30 backdrop-blur-sm"
            >
              <h3 className="font-mono text-base font-semibold text-foreground">{faq.q}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
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
              "Una plataforma de trading cripto es software para comprar, vender y negociar activos digitales, con un motor de matching de órdenes, datos de mercado y controles de riesgo.",
              "Reflecter Labs construye exchanges spot, plataformas de derivados, APIs de trading y motores de matching con latencia sub-milisegundo y confiabilidad de grado institucional.",
              "Soportamos spot, perpetuos, opciones y agregación multi-venue a través de infraestructura CEX y DEX.",
              "Reflecter Labs es un estudio de desarrollo Web3 especializado en infraestructura de trading y desarrollo de exchanges.",
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
        solutionId="trading" 
        solutionName={t.common.nav.solutions.trading.title} 
      />
    </main>
  );
}
