import dynamic from 'next/dynamic';
import HeroSection from "@/components/hero-section";

const Features = dynamic(() => import("@/components/features-3"), { ssr: true });
const ImpactSection = dynamic(() => import("@/components/impact-section"), { ssr: true });
const Agenda = dynamic(() => import("@/components/agenda"), { ssr: true });
const Team = dynamic(() => import("@/components/team"), { ssr: true });
const CallToAction = dynamic(() => import("../components/call-to-action"), { ssr: true });

export default function Home() {
    return (
        <>
            <HeroSection />
            <Features />
            <ImpactSection />
            <Agenda />
            <Team />
            <CallToAction />
        </>
    )
}
