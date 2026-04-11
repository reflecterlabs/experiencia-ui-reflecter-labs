"use client";

import { Coins, Shield, Globe, TrendingUp, Users, Wallet, Scale, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/lib/i18n/locale-context";
import SolutionContact from "@/components/solution-contact";

const stats = [
  { value: "$10B+", label: "Activos tokenizados" },
  { value: "15+", label: "Blockchains soportadas" },
  { value: "100%", label: "Cumplimiento regulatorio" },
  { value: "24/7", label: "Trading global" },
];

const tokenTypes = [
  {
    icon: Shield,
    title: "Tokens de Seguridad",
    desc: "Emite tokens de seguridad compatibles que representan acciones, deuda, participación en ingresos u otros instrumentos financieros regulados con restricciones de transferencia integradas.",
  },
  {
    icon: Coins,
    title: "Tokens de Utilidad",
    desc: "Crea tokens que proporcionan acceso a tu plataforma, servicios o características del ecosistema. Diseña tokenomics que alineen los incentivos de los usuarios con el crecimiento del protocolo.",
  },
  {
    icon: Wallet,
    title: "Tokens Respaldados por Activos",
    desc: "Tokeniza activos físicos como bienes raíces, commodities o inventario. Cada token representa propiedad verificable del activo subyacente.",
  },
  {
    icon: Users,
    title: "Tokens de Gobernanza",
    desc: "Lanza tokens de gobernanza que otorgan a los titulares derechos de voto sobre decisiones del protocolo, gestión del tesoro y desarrollo futuro.",
  },
  {
    icon: Globe,
    title: "Tokens de Membresía",
    desc: "Crea tokens que otorgan acceso a comunidades exclusivas, contenido o servicios. Perfecto para DAOs, clubes y organizaciones de membresía.",
  },
  {
    icon: TrendingUp,
    title: "Tokens de Participación en Ingresos",
    desc: "Construye tokens que distribuyen ingresos del protocolo o dividendos a los titulares automáticamente a través de mecanismos de contratos inteligentes.",
  },
];

const platformCapabilities = [
  {
    icon: Globe,
    title: "Despliegue Multi-Chain",
    desc: "Despliega tus tokens en Ethereum, Polygon, Avalanche, Solana o cualquier cadena compatible con EVM. Te ayudamos a elegir la blockchain adecuada para tus necesidades.",
  },
  {
    icon: Shield,
    title: "Cumplimiento Integrado",
    desc: "Verificación automatizada KYC/AML, restricciones de transferencia y reportes regulatorios. Mantente cumplido en múltiples jurisdicciones sin sobrecarga manual.",
  },
  {
    icon: TrendingUp,
    title: "Listo para Mercado Secundario",
    desc: "Integra con DEXs, CEXs y mesas OTC desde el primer día. Construimos la infraestructura para un trading fluido en el mercado secundario.",
  },
];

const jurisdictions = [
  { country: "Estados Unidos", framework: "SEC Reg D, Reg S, Reg A+" },
  { country: "Unión Europea", framework: "MiCA, Prospectus Regulation" },
  { country: "Reino Unido", framework: "Regulaciones FCA" },
  { country: "Singapur", framework: "Directrices MAS" },
  { country: "Suiza", framework: "Marco FINMA" },
  { country: "EAU", framework: "ADGM, DFSA" },
];

const applications = [
  {
    icon: Scale,
    title: "Equity de Startups",
    desc: "Tokeniza acciones de la empresa para una gestión más fácil del cap table, vesting automatizado y potencial liquidez secundaria para empleados.",
  },
  {
    icon: TrendingUp,
    title: "Tokens de Fondos",
    desc: "Crea unidades de fondos tokenizados para venture capital, private equity o hedge funds con cálculos automatizados de NAV y distribuciones.",
  },
  {
    icon: Users,
    title: "Programas de Lealtad",
    desc: "Construye programas de lealtad tokenizados donde los puntos son transferibles, negociables e interoperables entre redes de socios.",
  },
  {
    icon: Globe,
    title: "Créditos de Carbono",
    desc: "Tokeniza créditos de carbono y activos ambientales para seguimiento transparente, trading y retiro on-chain.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Diseño del Token",
    desc: "Trabajamos contigo para diseñar la estructura del token, la economía y los requisitos de cumplimiento basados en tus objetivos de negocio.",
  },
  {
    step: "02",
    title: "Desarrollo de Contratos Inteligentes",
    desc: "Nuestros ingenieros construyen contratos inteligentes seguros y auditados con todos los mecanismos de cumplimiento necesarios y características personalizadas.",
  },
  {
    step: "03",
    title: "Legal y Cumplimiento",
    desc: "Te ayudamos a navegar los requisitos regulatorios e integrar herramientas de cumplimiento para la verificación de inversores.",
  },
  {
    step: "04",
    title: "Lanzamiento y Distribución",
    desc: "Despliega tu token, gestiona la distribución inicial e integra con marketplaces para el trading secundario.",
  },
];

const faqs = [
  {
    q: "¿Qué es la tokenización?",
    a: "La tokenización es el proceso de crear tokens digitales en una blockchain que representan propiedad, derechos o valor. Los tokens pueden representar valores, acceso de utilidad, derechos de gobernanza o activos físicos. Reflecter Labs construye los contratos inteligentes y la infraestructura para crear y gestionar estos tokens.",
  },
  {
    q: "¿Cuál es la diferencia entre tokens de seguridad y tokens de utilidad?",
    a: "Los tokens de seguridad representan instrumentos financieros regulados como acciones o deuda y están sujetos a leyes de valores. Los tokens de utilidad proporcionan acceso a un producto o servicio y no están diseñados como inversiones. La clasificación legal depende de la jurisdicción y el diseño del token.",
  },
  {
    q: "¿Qué blockchains soportan la tokenización?",
    a: "Reflecter Labs despliega tokens en Ethereum, Polygon, Avalanche, Solana, BNB Chain y otras cadenas compatibles con EVM o personalizadas. Recomendamos la cadena que mejor se adapte a tus requisitos de cumplimiento, costo y base de usuarios.",
  },
  {
    q: "¿Cómo aseguran el cumplimiento regulatorio para valores tokenizados?",
    a: "Construimos el cumplimiento en la capa de contrato inteligente: integración KYC/AML, restricciones de transferencia, períodos de tenencia, verificaciones de acreditación y reglas basadas en jurisdicción. Trabajamos con socios legales para alinear el diseño del token con los marcos SEC, MiCA, FCA y otros.",
  },
  {
    q: "¿Cuánto tiempo toma lanzar un token?",
    a: "Los tokens de utilidad o gobernanza simples pueden lanzarse en 2-4 semanas. Los tokens de seguridad y respaldados por activos típicamente requieren 4-12 semanas dependiendo de la estructura legal, integración de cumplimiento y requisitos de auditoría.",
  },
  {
    q: "¿Los activos tokenizados pueden negociarse en mercados secundarios?",
    a: "Sí. Diseñamos tokens para estar listos para el mercado secundario, con integración opcional a DEXs, ATSs o mesas OTC. Las reglas de cumplimiento en el contrato inteligente hacen cumplir quién puede negociar y bajo qué condiciones.",
  },
];

export default function TokenizacionPage() {
  const { t } = useLocale();

  return (
    <main className="relative z-10 pt-32 pb-20">
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6">
        <div className="max-w-3xl">

          <h1 className="font-mono text-4xl font-semibold text-foreground lg:text-5xl">
            {t.common.nav.solutions.tokenizacion.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Transforma cualquier valor en tokens programables. Desde tokens de seguridad hasta tokens de utilidad, Reflecter Labs proporciona soluciones de tokenización de extremo a extremo para crear, gestionar y negociar activos digitales en la blockchain.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground/70 italic">
            Definición: La tokenización es el proceso de crear tokens digitales en una blockchain que representan propiedad, derechos o valor. Los tokens pueden representar valores, acceso de utilidad, derechos de gobernanza o activos físicos.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg" className="rounded-full px-8">
              <Link href="/#reservar-llamada">Lanza tu token</Link>
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

      {/* Why Tokenize */}
      <section className="mx-auto max-w-5xl px-6 mt-20">
        <div className="rounded-2xl border border-border p-8 lg:p-12 bg-background/30 backdrop-blur-sm">
          <h2 className="font-mono text-2xl font-semibold text-foreground">¿Por Qué Tokenizar?</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Los activos y derechos tradicionales están atrapados en sistemas heredados—certificados en papel, bases de datos centralizadas y procesos manuales. Esto crea fricción, costos y limita quién puede participar.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            La tokenización transforma los activos en representaciones digitales programables, transferibles y verificables. Los contratos inteligentes automatizan el cumplimiento, la distribución y la gobernanza. La blockchain proporciona una única fuente de verdad.
          </p>
        </div>
      </section>

      {/* Token Advantage */}
      <section className="mx-auto max-w-5xl px-6 mt-20">
        <h2 className="font-mono text-2xl font-semibold text-foreground">La Ventaja de los Tokens</h2>
        <p className="mt-2 text-muted-foreground">Los tokens desbloquean capacidades imposibles con activos tradicionales:</p>
        <ul className="mt-6 space-y-3">
          {[
            "Reglas programables aplicadas por contratos inteligentes",
            "Propiedad fraccionada hasta cantidades mínimas",
            "Transferibilidad global instantánea, 24/7",
            "Historial transparente de propiedad y transacciones",
            "Componibilidad con todo el ecosistema DeFi",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <CheckCircle2 className="size-5 mt-0.5 shrink-0 text-foreground" />
              <span className="text-muted-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Token Types */}
      <section className="mx-auto max-w-5xl px-6 mt-20">
        <h2 className="font-mono text-2xl font-semibold text-foreground">Tipos de Tokens que Creamos</h2>
        <p className="mt-2 text-muted-foreground">Desde valores regulados hasta tokens de utilidad—los construimos todos.</p>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tokenTypes.map((type) => {
            const Icon = type.icon;
            return (
              <div
                key={type.title}
                className="group rounded-2xl border border-border p-6 bg-background/40 backdrop-blur-sm transition-all duration-300 hover:border-border hover:shadow-xl hover:-translate-y-1"
              >
                <Icon className="size-8 text-foreground mb-4" />
                <h3 className="font-mono text-lg font-semibold text-foreground group-hover:text-foreground transition-colors">
                  {type.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{type.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Platform Capabilities */}
      <section className="mx-auto max-w-5xl px-6 mt-20">
        <h2 className="font-mono text-2xl font-semibold text-foreground">Capacidades de la Plataforma</h2>
        <p className="mt-2 text-muted-foreground">Todo lo que necesitas para lanzar y gestionar activos tokenizados.</p>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {platformCapabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <div
                key={cap.title}
                className="group rounded-2xl border border-border p-6 bg-background/30 backdrop-blur-sm transition-all duration-300 hover:border-border"
              >
                <Icon className="size-8 text-foreground mb-4" />
                <h3 className="font-mono text-lg font-semibold text-foreground">{cap.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{cap.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Compliance */}
      <section className="mx-auto max-w-5xl px-6 mt-20">
        <div className="rounded-2xl border border-border p-8 lg:p-12 bg-muted/10 backdrop-blur-sm">
          <h2 className="font-mono text-2xl font-semibold text-foreground">Cumplimiento Regulatorio Integrado</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Los tokens de seguridad requieren cumplimiento con las regulaciones de valores. Nuestra plataforma automatiza las verificaciones de cumplimiento, las restricciones de transferencia y los reportes para que puedas enfocarte en tu negocio mientras mantienes el cumplimiento total.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            {[
              "Verificación automatizada de acreditación de inversores",
              "Restricciones de transferencia basadas en jurisdicción",
              "Períodos de tenencia y bloqueos configurables",
              "Gestión de cap table en tiempo real",
              "Generación automatizada de documentos fiscales",
              "Marcos regulatorios SEC/MiCA/FCA",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 className="size-4 shrink-0 text-foreground" />
                <span className="text-sm text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jurisdictions */}
      <section className="mx-auto max-w-5xl px-6 mt-20">
        <h2 className="font-mono text-2xl font-semibold text-foreground">Jurisdicciones Soportadas</h2>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {jurisdictions.map((j) => (
            <div
              key={j.country}
              className="rounded-2xl border border-border p-5 bg-background/30 backdrop-blur-sm"
            >
              <h3 className="font-mono text-base font-semibold text-foreground">{j.country}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{j.framework}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Real-World Applications */}
      <section className="mx-auto max-w-5xl px-6 mt-20">
        <h2 className="font-mono text-2xl font-semibold text-foreground">Aplicaciones del Mundo Real</h2>
        <p className="mt-2 text-muted-foreground">Mira cómo las organizaciones están usando la tokenización hoy.</p>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {applications.map((app) => {
            const Icon = app.icon;
            return (
              <div
                key={app.title}
                className="group rounded-2xl border border-border p-6 bg-background/40 backdrop-blur-sm transition-all duration-300 hover:border-border"
              >
                <Icon className="size-8 text-foreground mb-4" />
                <h3 className="font-mono text-lg font-semibold text-foreground">{app.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{app.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-5xl px-6 mt-20">
        <h2 className="font-mono text-2xl font-semibold text-foreground">Nuestro Proceso</h2>
        <p className="mt-2 text-muted-foreground">Del concepto al token activo en semanas, no meses.</p>
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
              "La tokenización es la creación de tokens digitales en una blockchain que representan propiedad, derechos o valor—desde tokens de seguridad hasta tokens de utilidad y gobernanza.",
              "Reflecter Labs ofrece servicios completos de tokenización: diseño de tokens, desarrollo de contratos inteligentes, integración de cumplimiento y despliegue multi-chain.",
              "Soportamos ERC-20, ERC-721, ERC-1155 y estándares personalizados en Ethereum, Polygon, Solana y otras cadenas.",
              "Reflecter Labs es un estudio de desarrollo Web3 especializado en tokenización de activos digitales e infraestructura de tokens compatible.",
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
        solutionId="tokenizacion" 
        solutionName={t.common.nav.solutions.tokenizacion.title} 
      />
    </main>
  );
}
