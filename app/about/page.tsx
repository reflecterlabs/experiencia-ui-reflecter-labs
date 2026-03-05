import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sobre Nosotros - Reflecter Labs",
  description: "Conoce al equipo detrás de Reflecter Labs y nuestra misión de construir infraestructura blockchain de clase mundial.",
};

const values = [
  {
    title: "Innovación",
    description:
      "Exploramos constantemente nuevas tecnologías y paradigmas para ofrecer soluciones que marquen la diferencia en el ecosistema blockchain.",
  },
  {
    title: "Transparencia",
    description:
      "Creemos en la apertura total. Nuestro código, procesos y comunicación reflejan nuestro compromiso con la confianza y la honestidad.",
  },
  {
    title: "Excelencia Técnica",
    description:
      "Cada línea de código que escribimos sigue los más altos estándares de calidad, seguridad y rendimiento.",
  },
  {
    title: "Comunidad",
    description:
      "Construimos para y con la comunidad. La colaboración y el feedback son el motor de nuestra evolución.",
  },
];

export default function AboutPage() {
  return (
    <main className="relative z-10 pt-32 pb-20">
      <div className="mx-auto max-w-5xl px-6">
        {/* Hero */}
        <div className="max-w-3xl">
          <h1 className="font-mono text-4xl font-semibold text-foreground lg:text-5xl">
            Sobre Nosotros
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Reflecter Labs es un laboratorio de tecnología blockchain con sede en Córdoba, Argentina. Diseñamos y desarrollamos infraestructura, smart contracts y soluciones multi-chain para el ecosistema Web3.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Nuestro equipo combina experiencia en ingeniería de software, criptografía y diseño de producto para crear herramientas que impulsen la adopción de la tecnología descentralizada a nivel global.
          </p>
        </div>

        {/* Mission */}
        <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-border p-8">
            <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Misión
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-foreground">
              Acelerar la adopción de blockchain construyendo infraestructura robusta, segura y accesible para desarrolladores y empresas en todo el mundo.
            </p>
          </div>
          <div className="rounded-2xl border border-border p-8">
            <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Visión
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-foreground">
              Un ecosistema descentralizado donde la tecnología blockchain sea tan accesible y confiable como la infraestructura tradicional de internet.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mt-20">
          <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Nuestros Valores
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-border p-6 transition-colors hover:border-foreground/20"
              >
                <h3 className="font-mono text-lg font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team preview */}
        <div className="mt-20 rounded-2xl border border-border p-8 text-center">
          <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Equipo
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Somos un equipo multidisciplinario de ingenieros, diseñadores y estrategas apasionados por la tecnología descentralizada. Conoce a nuestros fundadores en la página principal.
          </p>
        </div>
      </div>
    </main>
  );
}
