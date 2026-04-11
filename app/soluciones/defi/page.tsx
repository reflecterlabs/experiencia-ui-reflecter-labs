"use client";

import { TrendingUp, Shield, Globe, Clock, Percent, Users, ArrowRight, CheckCircle2, Layers, RefreshCw, Lock } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/lib/i18n/locale-context";
import SolutionContact from "@/components/solution-contact";

const stats = [
  { value: "$100B+", label: "TVL total en DeFi" },
  { value: "1000x", label: "Eficiencia vs finanzas tradicionales" },
  { value: "0%", label: "Comisiones de intermediarios" },
  { value: "24/7", label: "Mercados siempre activos" },
];

const buildingBlocks = [
  {
    icon: Layers,
    title: "Protocolos de Préstamo",
    desc: "Construye mercados de préstamo y endeudamiento permissionless con tasas de interés algorítmicas y sobrecolateralización.",
  },
  {
    icon: RefreshCw,
    title: "Market Makers Automatizados",
    desc: "Crea pools de liquidez y exchanges descentralizados con curvas de vinculación de producto constante o personalizadas.",
  },
  {
    icon: TrendingUp,
    title: "Optimización de Rendimiento",
    desc: "Diseña estrategias de yield farming y sistemas de vault que maximizan automáticamente los retornos para los usuarios.",
  },
  {
    icon: Lock,
    title: "Sistemas de Staking",
    desc: "Implementa staking de tokens, mecanismos de gobernanza y distribución de recompensas con parámetros flexibles.",
  },
  {
    icon: Globe,
    title: "Puentes Cross-Chain",
    desc: "Habilita transferencias de activos fluidas entre diferentes blockchains con infraestructura de puente segura.",
  },
  {
    icon: Shield,
    title: "Seguridad Primero",
    desc: "Contratos inteligentes probados en batalla con auditorías integrales, controles multi-sig y mecanismos de emergencia.",
  },
];

const protocolTypes = [
  {
    icon: Layers,
    title: "Préstamo y Endeudamiento",
    desc: "Crea mercados de dinero descentralizados donde los usuarios pueden prestar activos para ganar intereses o pedir prestado contra colateral.",
    features: ["Tasas de interés algorítmicas", "Soporte de flash loans", "Posiciones multi-colateral", "Mecanismos de liquidación"],
  },
  {
    icon: RefreshCw,
    title: "Exchanges Descentralizados",
    desc: "Lanza DEXs basados en AMM con liquidez concentrada, múltiples niveles de comisiones y funciones avanzadas de trading.",
    features: ["Liquidez concentrada", "Enrutamiento multi-hop", "Órdenes límite", "Protección MEV"],
  },
  {
    icon: TrendingUp,
    title: "Agregadores de Rendimiento",
    desc: "Construye sistemas de vault que automáticamente componen rendimientos a través de múltiples protocolos.",
    features: ["Auto-compounding", "Optimización de estrategias", "Gestión de riesgo", "Eficiencia de gas"],
  },
];

const advantages = [
  {
    icon: Globe,
    title: "Acceso Permissionless",
    desc: "Cualquiera con conexión a internet puede acceder a tu protocolo DeFi. Sin verificaciones de crédito, sin saldos mínimos, sin restricciones geográficas.",
  },
  {
    icon: Layers,
    title: "Componibilidad",
    desc: "Los protocolos DeFi son como legos de dinero. Tu protocolo puede integrarse con todo el ecosistema, creando nuevos productos financieros poderosos.",
  },
  {
    icon: Shield,
    title: "Transparencia",
    desc: "Cada transacción se registra on-chain. Los usuarios pueden verificar la salud del protocolo, auditar contratos inteligentes y rastrear todos los movimientos de fondos en tiempo real.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Diseño del Protocolo",
    desc: "Colaboramos para definir la mecánica de tu protocolo, tokenomics y parámetros de riesgo basados en tus objetivos y usuarios objetivo.",
  },
  {
    step: "02",
    title: "Desarrollo de Contratos Inteligentes",
    desc: "Nuestros ingenieros construyen contratos inteligentes seguros y optimizados en gas usando patrones probados en batalla y mejores prácticas.",
  },
  {
    step: "03",
    title: "Auditorías de Seguridad",
    desc: "Revisiones de seguridad integrales que incluyen auditorías internas, auditorías externas y verificación formal cuando sea apropiado.",
  },
  {
    step: "04",
    title: "Lanzamiento y Monitoreo",
    desc: "Te ayudamos a lanzar con la liquidez adecuada, sistemas de monitoreo y procedimientos de emergencia en su lugar.",
  },
];

const faqs = [
  {
    q: "¿Qué es el desarrollo DeFi?",
    a: "El desarrollo DeFi (finanzas descentralizadas) es el diseño y construcción de aplicaciones financieras que se ejecutan en blockchains usando contratos inteligentes. Incluye protocolos de préstamo, DEXs, productos de rendimiento, sistemas de staking y otra infraestructura financiera permissionless. Reflecter Labs construye protocolos DeFi de grado de producción con auditorías de seguridad y despliegue multi-chain.",
  },
  {
    q: "¿Qué es un protocolo de préstamo?",
    a: "Un protocolo de préstamo es un conjunto de contratos inteligentes que permite a los usuarios suministrar activos para ganar intereses o pedir prestado contra colateral. Las tasas de interés típicamente se establecen algorítmicamente por oferta y demanda. Reflecter Labs construye y audita protocolos de préstamo para casos de uso institucionales y de consumo.",
  },
  {
    q: "¿Qué es un AMM o DEX?",
    a: "Un AMM (market maker automatizado) es un tipo de DEX (exchange descentralizado) que usa pools de liquidez y curvas matemáticas para establecer precios en lugar de un libro de órdenes. Los usuarios operan contra el pool. Reflecter Labs construye AMMs con liquidez concentrada, enrutamiento multi-hop y protección MEV.",
  },
  {
    q: "¿Es DeFi compatible para empresas?",
    a: "DeFi puede construirse con el cumplimiento en mente: pools con puerta KYC, direcciones en lista blanca y acceso basado en jurisdicción. Reflecter Labs diseña DeFi institucional que cumple con las expectativas regulatorias mientras preserva la liquidación on-chain y la transparencia.",
  },
  {
    q: "¿Cuánto tiempo toma construir un protocolo DeFi?",
    a: "Un staking simple o DEX de un solo pool puede lanzarse en 6-10 semanas. Los protocolos de préstamo y DEXs con todas las funciones típicamente toman 3-6 meses incluyendo diseño, desarrollo, auditorías y despliegue en testnet. Los derivados complejos o productos cross-chain pueden tomar 6+ meses.",
  },
  {
    q: "¿En qué blockchains construyen DeFi?",
    a: "Construimos en Ethereum, L2s (Arbitrum, Base, Optimism, zkSync), Polygon, Avalanche, BNB Chain y Solana. La elección depende de la liquidez, el costo y tus usuarios objetivo. También construimos DeFi cross-chain usando puentes y mensajería.",
  },
];

export default function DeFiPage() {
  const { t } = useLocale();

  return (
    <main className="relative z-10 pt-32 pb-20">
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6">
        <div className="max-w-3xl">

          <h1 className="font-mono text-4xl font-semibold text-foreground lg:text-5xl">
            {t.common.nav.solutions.defi.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Crea protocolos financieros permissionless que operan 24/7, sin intermediarios. Reflecter Labs es un estudio de desarrollo Web3 que construye infraestructura DeFi—préstamos, DEXs, agregadores de rendimiento—para la próxima generación de finanzas.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground/70 italic">
            Definición: DeFi (finanzas descentralizadas) son servicios financieros construidos en blockchains usando contratos inteligentes. Incluye préstamos, trading, productos de rendimiento y otros servicios que operan sin un intermediario central.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg" className="rounded-full px-8">
              <Link href="/#reservar-llamada">Empieza a construir</Link>
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
            Por Qué las Finanzas Tradicionales Quedan Cortas
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Los sistemas financieros tradicionales están construidos sobre infraestructura heredada que es lenta, costosa y exclusiva. Los bancos operan en horarios de oficina, cobran comisiones altas y requieren documentación extensa solo para abrir una cuenta.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Las transferencias transfronterizas toman días y cuestan porcentajes significativos. Los préstamos requieren puntajes de crédito, colateral y aprobación humana. Los rendimientos en ahorros apenas mantienen el ritmo de la inflación. Tiene que haber una mejor manera.
          </p>
        </div>
      </section>

      {/* Solution */}
      <section className="mx-auto max-w-5xl px-6 mt-20">
        <h2 className="font-mono text-2xl font-semibold text-foreground">DeFi Cambia Todo</h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Las finanzas descentralizadas reconstruyen los servicios financieros desde primeros principios:
        </p>
        <ul className="mt-6 space-y-3">
          {[
            "Acceso instantáneo, 24/7 desde cualquier parte del mundo",
            "Tasas de interés algorítmicas que responden a las condiciones del mercado",
            "Sin verificaciones de crédito—préstamos basados en colateral para todos",
            "Protocolos componibles que trabajan juntos sin problemas",
            "Código transparente y auditable en lugar de instituciones opacas",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <CheckCircle2 className="size-5 mt-0.5 shrink-0 text-foreground" />
              <span className="text-muted-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Building Blocks */}
      <section className="mx-auto max-w-5xl px-6 mt-20">
        <h2 className="font-mono text-2xl font-semibold text-foreground">Bloques de Construcción DeFi</h2>
        <p className="mt-2 text-muted-foreground">Componentes modulares para construir cualquier protocolo DeFi que puedas imaginar.</p>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {buildingBlocks.map((block) => {
            const Icon = block.icon;
            return (
              <div
                key={block.title}
                className="group rounded-2xl border border-border p-6 bg-background/40 backdrop-blur-sm transition-all duration-300 hover:border-border hover:shadow-xl hover:-translate-y-1"
              >
                <Icon className="size-8 text-foreground mb-4" />
                <h3 className="font-mono text-lg font-semibold text-foreground group-hover:text-foreground transition-colors">
                  {block.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{block.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Protocol Types */}
      <section className="mx-auto max-w-5xl px-6 mt-20">
        <h2 className="font-mono text-2xl font-semibold text-foreground">Tipos de Protocolos que Construimos</h2>
        <p className="mt-2 text-muted-foreground">Experiencia profunda en todo el stack DeFi.</p>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {protocolTypes.map((proto) => {
            const Icon = proto.icon;
            return (
              <div
                key={proto.title}
                className="group rounded-2xl border border-border p-6 bg-background/30 backdrop-blur-sm transition-all duration-300 hover:border-border"
              >
                <Icon className="size-8 text-foreground mb-4" />
                <h3 className="font-mono text-lg font-semibold text-foreground">{proto.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{proto.desc}</p>
                <div className="mt-4 pt-4 border-t border-border/50 space-y-2">
                  {proto.features.map((f) => (
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

      {/* Advantages */}
      <section className="mx-auto max-w-5xl px-6 mt-20">
        <h2 className="font-mono text-2xl font-semibold text-foreground">La Ventaja DeFi</h2>
        <p className="mt-2 text-muted-foreground">Por qué las finanzas descentralizadas son el futuro.</p>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {advantages.map((adv) => {
            const Icon = adv.icon;
            return (
              <div
                key={adv.title}
                className="group rounded-2xl border border-border p-6 bg-background/30 backdrop-blur-sm transition-all duration-300 hover:border-border"
              >
                <Icon className="size-8 text-foreground mb-4" />
                <h3 className="font-mono text-lg font-semibold text-foreground">{adv.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{adv.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-5xl px-6 mt-20">
        <h2 className="font-mono text-2xl font-semibold text-foreground">Nuestro Proceso de Desarrollo</h2>
        <p className="mt-2 text-muted-foreground">Enfoque de seguridad primero para el desarrollo DeFi.</p>
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
              "DeFi son servicios financieros construidos en blockchains usando contratos inteligentes: préstamos, DEXs, productos de rendimiento y staking sin un intermediario central.",
              "Reflecter Labs construye y audita protocolos de préstamo, AMMs, agregadores de rendimiento y sistemas de staking con desarrollo de seguridad primero.",
              "Desplegamos en Ethereum, L2s, Polygon, Avalanche, BNB Chain y Solana, y soportamos requisitos de cumplimiento institucional.",
              "Reflecter Labs es un estudio de desarrollo Web3 especializado en desarrollo de protocolos DeFi de grado de producción y auditorías.",
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
        solutionId="defi" 
        solutionName={t.common.nav.solutions.defi.title} 
      />
    </main>
  );
}
