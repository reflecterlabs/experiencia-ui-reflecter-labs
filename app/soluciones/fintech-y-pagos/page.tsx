"use client";

import { CreditCard, Globe, Clock, Percent, Shield, ArrowRight, CheckCircle2, Wallet, Smartphone, Building2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/lib/i18n/locale-context";
import SolutionContact from "@/components/solution-contact";

const stats = [
  { value: "$5T+", label: "Volumen anual en cripto" },
  { value: "<1%", label: "Comisiones por transacción" },
  { value: "180+", label: "Países soportados" },
  { value: "Instant", label: "Tiempo de liquidación" },
];

const infrastructure = [
  {
    icon: CreditCard,
    title: "Pasarela de Pagos Cripto",
    desc: "Acepta Bitcoin, Ethereum, stablecoins y más de 100 criptomonedas. Conversión automática a fiat, liquidación instantánea e integración simple.",
  },
  {
    icon: Globe,
    title: "Rampas Fiat On/Off",
    desc: "Permite a los usuarios comprar cripto con tarjetas, transferencias bancarias o métodos de pago locales. KYC sin fricción y transacciones instantáneas en más de 180 países.",
  },
  {
    icon: Wallet,
    title: "Wallets Multi-Moneda",
    desc: "Soluciones de billetera no custodiales y custodiales que soportan múltiples cadenas. Funcionalidad integrada de swap, envío y recepción.",
  },
  {
    icon: ArrowRight,
    title: "Pagos Transfronterizos",
    desc: "Envía dinero a cualquier parte en minutos, no días. Los rieles de stablecoins eliminan las comisiones y demoras de la banca corresponsal.",
  },
  {
    icon: Building2,
    title: "Banca Digital",
    desc: "Construye experiencias neobanc con funciones nativas de cripto. Tarjetas virtuales, cuentas y depósitos en stablecoins que generan rendimiento.",
  },
  {
    icon: Shield,
    title: "Cumplimiento y KYC",
    desc: "Verificación de identidad automatizada, monitoreo de transacciones y reportes regulatorios. Mantente cumplido sin fricción.",
  },
];

const paymentSolutions = [
  {
    icon: CreditCard,
    title: "Pagos para Comercios",
    desc: "Habilita a los negocios a aceptar pagos cripto online y en tienda. Nuestra pasarela se integra con plataformas de e-commerce y POS existentes, con conversión automática a fiat si se desea.",
    features: ["100+ criptomonedas", "Conversión fiat instantánea", "Protección contra chargebacks", "Integración API simple"],
  },
  {
    icon: Globe,
    title: "Remesas",
    desc: "Construye corredores de remesas usando stablecoins. Envía dinero a través de fronteras en minutos con comisiones menores al 1%, comparado con el 7% promedio de las remesas tradicionales.",
    features: ["Comisiones <1%", "Minutos no días", "Opciones de pago local", "Experiencia mobile-first"],
  },
  {
    icon: Building2,
    title: "Pagos B2B",
    desc: "Agiliza los pagos empresariales con dinero programable. Facturación automatizada, liberaciones basadas en hitos y liquidación instantánea para el comercio internacional.",
    features: ["Gestión de facturas", "Aprobación multi-firma", "Reconciliación automatizada", "Integración ERP"],
  },
];

const complianceFeatures = [
  {
    title: "KYC/KYB",
    desc: "Verificación de identidad automatizada para individuos y empresas con soporte global de documentos.",
  },
  {
    title: "Monitoreo de Transacciones",
    desc: "Screening en tiempo real contra listas de sanciones y detección de actividad sospechosa.",
  },
  {
    title: "Travel Rule",
    desc: "Intercambio de información VASP-a-VASP compatible con requisitos regulatorios.",
  },
  {
    title: "Reportes",
    desc: "Reportes regulatorios automatizados y auditorías para todas las jurisdicciones.",
  },
];

const integrations = ["Shopify", "WooCommerce", "Stripe", "QuickBooks", "Xero", "SAP"];

const processSteps = [
  {
    step: "01",
    title: "Descubrimiento",
    desc: "Analizamos tus necesidades de pago, mercados objetivo y requisitos de cumplimiento para diseñar la solución óptima.",
  },
  {
    step: "02",
    title: "Integración",
    desc: "Nuestro equipo construye integraciones personalizadas con tus sistemas existentes, procesadores de pago y socios bancarios.",
  },
  {
    step: "03",
    title: "Configuración de Cumplimiento",
    desc: "Implementamos procedimientos KYC/AML, obtenemos las licencias necesarias y configuramos los reportes regulatorios.",
  },
  {
    step: "04",
    title: "Lanzamiento y Soporte",
    desc: "Activa con monitoreo completo, soporte y optimización continua de tu infraestructura de pagos.",
  },
];

const faqs = [
  {
    q: "¿Cómo funcionan los rieles de pago con stablecoins?",
    a: "Los rieles de pago con stablecoins usan redes blockchain para transferir stablecoins (ej. USDC, USDT) entre partes. Las transacciones se liquidan en minutos, las comisiones son típicamente menores al 1%, y los fondos pueden moverse 24/7 sin intermediarios bancarios tradicionales. Reflecter Labs construye las pasarelas, wallets y capa de cumplimiento que conectan tu negocio a estos rieles.",
  },
  {
    q: "¿Qué es una pasarela de pagos cripto?",
    a: "Una pasarela de pagos cripto permite a los comercios aceptar criptomonedas de los clientes. Maneja la conversión a fiat si se desea, la liquidación y a menudo KYC. Reflecter Labs construye pasarelas personalizadas que se integran con tu e-commerce, POS o sistemas B2B y soportan más de 100 criptomonedas y stablecoins.",
  },
  {
    q: "¿Cómo se integran las rampas fiat on/off con blockchain?",
    a: "Las rampas fiat on permiten a los usuarios comprar cripto con tarjetas o transferencias bancarias; las off permiten retirar. La integración implica conectar con proveedores licenciados (ej. Circle, Stripe), flujos KYC y acreditación de wallets. Construimos el frontend y backend para que los usuarios puedan moverse entre fiat y cripto sin problemas.",
  },
  {
    q: "¿Es legal aceptar pagos cripto para mi negocio?",
    a: "La legalidad depende de la jurisdicción y cómo estructures el servicio. Muchos países permiten a los negocios aceptar cripto; algunos requieren licencias de transmisor de dinero o pago. Reflecter Labs diseña infraestructura de pago con el cumplimiento en mente y puede trabajar con tu equipo legal en licencias y reportes.",
  },
  {
    q: "¿Qué blockchains soportan para pagos?",
    a: "Soportamos Ethereum, Polygon, Base, Solana, BNB Chain y otras redes principales. Para pagos, a menudo recomendamos cadenas con comisiones bajas y finalidad rápida, y podemos soportar multi-chain para que los usuarios paguen en la cadena que prefieran.",
  },
  {
    q: "¿Cuánto tiempo toma construir una solución de pagos cripto?",
    a: "Una pasarela o integración de wallet básica puede estar activa en 4-8 semanas. Productos fintech completos con KYC, multi-moneda e integraciones bancarias típicamente toman 3-6 meses. El tiempo depende del alcance de cumplimiento e integraciones de terceros.",
  },
];

export default function FintechPagosPage() {
  const { t } = useLocale();

  return (
    <main className="relative z-10 pt-32 pb-20">
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6">
        <div className="max-w-3xl">

          <h1 className="font-mono text-4xl font-semibold text-foreground lg:text-5xl">
            {t.common.nav.solutions.fintech.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Construye infraestructura de pagos que mueve dinero a cualquier parte, instantáneamente, con comisiones mínimas. Reflecter Labs es un estudio de desarrollo Web3 que construye pasarelas de pago cripto, rieles de stablecoins e infraestructura fintech para la próxima generación de comercio.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground/70 italic">
            Definición: La infraestructura de pagos cripto se refiere a sistemas que permiten a negocios y usuarios enviar, recibir y liquidar valor usando activos basados en blockchain como stablecoins, con conversión opcional desde y hacia moneda fiduciaria.
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
            Los Pagos Tradicionales Están Rotos
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Los pagos internacionales toman 3-5 días y cuestan 3-7% en comisiones. Los chargebacks de tarjetas de crédito perjudican a los comercios. Los horarios bancarios limitan cuándo se puede mover dinero. Miles de millones de personas permanecen sin acceso bancario o con acceso insuficiente.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Estas ineficiencias le cuestan a la economía global billones anuales. Tiene que haber una mejor manera—y la hay.
          </p>
        </div>
      </section>

      {/* Solution */}
      <section className="mx-auto max-w-5xl px-6 mt-20">
        <h2 className="font-mono text-2xl font-semibold text-foreground">La Solución Cripto</h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Los pagos basados en blockchain solucionan estos problemas:
        </p>
        <ul className="mt-6 space-y-3">
          {[
            "Liquidación en minutos, no días",
            "Comisiones menores al 1%, no 3-7%",
            "Operación 24/7/365, sin horarios bancarios",
            "Sin chargebacks ni reversiones de pago",
            "Acceso para los no bancarizados vía teléfonos móviles",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <CheckCircle2 className="size-5 mt-0.5 shrink-0 text-foreground" />
              <span className="text-muted-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Infrastructure */}
      <section className="mx-auto max-w-5xl px-6 mt-20">
        <h2 className="font-mono text-2xl font-semibold text-foreground">Infraestructura de Pagos</h2>
        <p className="mt-2 text-muted-foreground">Todo lo que necesitas para construir experiencias de pago modernas.</p>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {infrastructure.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group rounded-2xl border border-border p-6 bg-background/40 backdrop-blur-sm transition-all duration-300 hover:border-border hover:shadow-xl hover:-translate-y-1"
              >
                <Icon className="size-8 text-foreground mb-4" />
                <h3 className="font-mono text-lg font-semibold text-foreground group-hover:text-foreground transition-colors">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Payment Solutions */}
      <section className="mx-auto max-w-5xl px-6 mt-20">
        <h2 className="font-mono text-2xl font-semibold text-foreground">Soluciones de Pago</h2>
        <p className="mt-2 text-muted-foreground">Construidas a medida para tu caso de uso específico.</p>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {paymentSolutions.map((sol) => {
            const Icon = sol.icon;
            return (
              <div
                key={sol.title}
                className="group rounded-2xl border border-border p-6 bg-background/30 backdrop-blur-sm transition-all duration-300 hover:border-border"
              >
                <Icon className="size-8 text-foreground mb-4" />
                <h3 className="font-mono text-lg font-semibold text-foreground">{sol.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{sol.desc}</p>
                <ul className="mt-4 space-y-2">
                  {sol.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <CheckCircle2 className="size-4 shrink-0 text-foreground" />
                      <span className="text-xs text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* Compliance */}
      <section className="mx-auto max-w-5xl px-6 mt-20">
        <div className="rounded-2xl border border-border p-8 lg:p-12 bg-muted/10 backdrop-blur-sm">
          <h2 className="font-mono text-2xl font-semibold text-foreground">Cumplimiento Sin Fricción</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Los servicios de pago requieren cumplimiento regulatorio. Construimos KYC, AML y monitoreo de transacciones en tu plataforma desde el primer día, para que puedas enfocarte en el crecimiento mientras mantienes el cumplimiento.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            {complianceFeatures.map((cf) => (
              <div
                key={cf.title}
                className="rounded-xl border border-border/50 p-4 bg-background/30"
              >
                <h3 className="font-mono text-sm font-semibold text-foreground">{cf.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{cf.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="mx-auto max-w-5xl px-6 mt-20">
        <h2 className="font-mono text-2xl font-semibold text-foreground">Integraciones Populares</h2>
        <div className="mt-8 flex flex-wrap gap-4">
          {integrations.map((name) => (
            <div
              key={name}
              className="rounded-xl border border-border px-5 py-3 bg-background/30 backdrop-blur-sm"
            >
              <span className="font-mono text-sm font-medium text-muted-foreground">{name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-5xl px-6 mt-20">
        <h2 className="font-mono text-2xl font-semibold text-foreground">Nuestro Proceso</h2>
        <p className="mt-2 text-muted-foreground">Del concepto a pagos activos.</p>
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
              "La infraestructura de pagos cripto permite enviar, recibir y liquidar valor usando stablecoins y otros activos digitales, con rampas fiat on/off opcionales.",
              "Reflecter Labs construye pasarelas de pago, rampas fiat, wallets multi-moneda y capas de cumplimiento para fintech y comercio.",
              "Soportamos más de 180 países, comisiones menores al 1%, e integración con los principales sistemas de e-commerce y banca.",
              "Reflecter Labs es un estudio de desarrollo Web3 especializado en pagos con stablecoins e infraestructura fintech empresarial.",
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
        solutionId="fintech-y-pagos" 
        solutionName={t.common.nav.solutions.fintech.title} 
      />
    </main>
  );
}
