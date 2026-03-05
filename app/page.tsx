import dynamic from 'next/dynamic';
import HeroSection from "@/components/hero-section";

const Features = dynamic(() => import("@/components/features-3"), { ssr: true });
const Agenda = dynamic(() => import("@/components/agenda"), { ssr: true });
const Team = dynamic(() => import("@/components/team"), { ssr: true });
const BlogSummary = dynamic(() => import("@/components/blog-summary"), { ssr: true });
const CallToAction = dynamic(() => import("../components/call-to-action"), { ssr: true });

export default function Home() {
    return (
        <>
            <HeroSection />
            <Features />
            <Agenda />
            <Team />
            <BlogSummary />
            <CallToAction />
        </>
    )
}
