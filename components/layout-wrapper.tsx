"use client";

import { usePathname } from "next/navigation";
import { HeroHeader } from "@/components/header";
import FooterSection from "@/components/footer";
import Dither from "@/components/Dither";
import React from "react";

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isDashboard = pathname?.startsWith("/dashboard");

  if (isDashboard) {
    // Si estamos en el dashboard, no mostramos el layout de la pagina web (nav, dither, footer)
    return <>{children}</>;
  }

  return (
    <>
      <div className='absolute w-full h-dvh max-h-155 sm:max-h-115 md:max-h-125 lg:max-h-190 xl:max-h-195'>
        <Dither
            waveColor={[0.30980392156862746, 0.30980392156862746, 0.30980392156862746]}
            disableAnimation={false}
            enableMouseInteraction
            mouseRadius={0.3}
            colorNum={4}
            pixelSize={2}
            waveAmplitude={0.3}
            waveFrequency={3}
            waveSpeed={0.05}
        />
      </div>
      <HeroHeader />
      {children}
      <FooterSection />
    </>
  );
}
