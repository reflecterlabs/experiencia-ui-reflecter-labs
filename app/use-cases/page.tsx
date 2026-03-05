import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Casos de Uso - Reflecter Labs",
  description: "Descubre cómo Reflecter Labs resuelve problemas reales con tecnología blockchain en diferentes industrias.",
};

const useCases = [
  {
    tag: "DeFi",
    title: "Protocolos de Finanzas Descentralizadas",
    description:
      "Diseñamos e implementamos smart contracts para protocolos DeFi, incluyendo lending, staking, yield farming y AMMs en múltiples cadenas como Starknet, Ethereum y Base.",
    chains: ["Starknet", "Ethereum", "Base"],
  },
  {
    tag: "NFTs",
    title: "Infraestructura para NFTs y Coleccionables Digitales",
    description:
      "Desarrollamos contratos de minteo, marketplaces y herramientas de gestión para colecciones NFT a gran escala con soporte multi-chain.",
    chains: ["Ethereum", "Polygon", "Base"],
  },
  {
    tag: "Supply Chain",
    title: "Trazabilidad y Cadena de Suministro",
    description:
      "Implementamos soluciones de trazabilidad en blockchain para empresas que necesitan verificar la autenticidad y el recorrido de sus productos.",
    chains: ["Polygon", "BNB", "Avalanche"],
  },
  {
    tag: "Identidad",
    title: "Identidad Descentralizada (DID)",
    description:
      "Construimos sistemas de identidad digital soberana que permiten a los usuarios controlar sus datos sin depender de intermediarios centralizados.",
    chains: ["Starknet", "Ethereum"],
  },
  {
    tag: "Gaming",
    title: "Gaming & Metaverso",
    description:
      "Desarrollamos infraestructura on-chain para juegos Web3, economías de tokens in-game y assets interoperables entre plataformas.",
    chains: ["Monad", "BNB", "Avalanche"],
  },
  {
    tag: "Tokenización",
    title: "Tokenización de Activos del Mundo Real (RWA)",
    description:
      "Facilitamos la tokenización de activos reales como inmuebles, arte y commodities, haciendo accesible la inversión fraccionada a través de blockchain.",
    chains: ["Ethereum", "Polygon", "Avalanche"],
  },
];

export default function UseCasesPage() {
  return (
    <main className="relative z-10 pt-32 pb-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="max-w-3xl">
          <h1 className="font-mono text-4xl font-semibold text-foreground lg:text-5xl">
            Casos de Uso
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Aplicamos tecnología blockchain para resolver problemas reales en diferentes industrias. Estos son algunos de los casos donde nuestra infraestructura marca la diferencia.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {useCases.map((useCase) => (
            <div
              key={useCase.title}
              className="group flex flex-col rounded-2xl border border-border p-6 transition-colors hover:border-foreground/20"
            >
              <span className="w-fit rounded-full border border-border px-3 py-1 font-mono text-xs font-medium text-muted-foreground">
                {useCase.tag}
              </span>
              <h2 className="mt-4 font-mono text-lg font-semibold text-foreground">
                {useCase.title}
              </h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {useCase.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {useCase.chains.map((chain) => (
                  <span
                    key={chain}
                    className="rounded-md bg-muted px-2 py-0.5 font-mono text-xs text-muted-foreground"
                  >
                    {chain}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
