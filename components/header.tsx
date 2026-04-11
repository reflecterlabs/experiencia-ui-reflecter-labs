'use client'
import Link from 'next/link'
import { Menu, X, ChevronDown, Database, Building2, Coins, CreditCard, TrendingUp, LineChart, Bot, GraduationCap, FlaskConical } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React from 'react'
import { LanguageSwitcher } from '@/components/language-switcher'
import { useLocale } from '@/lib/i18n/locale-context'

export const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [educationOpen, setEducationOpen] = React.useState(false)
    const [solutionsOpen, setSolutionsOpen] = React.useState(false)
    const [researchOpen, setResearchOpen] = React.useState(false)
    const { t } = useLocale()

    const closeAll = () => {
        setMenuState(false)
        setEducationOpen(false)
        setSolutionsOpen(false)
        setResearchOpen(false)
    }

    const solutions = [
        { key: 'cdp' as const, href: '/soluciones/cdp', icon: Database },
        { key: 'rwa' as const, href: '/soluciones/rwa', icon: Building2 },
        { key: 'tokenizacion' as const, href: '/soluciones/tokenizacion', icon: Coins },
        { key: 'fintech' as const, href: '/soluciones/fintech-y-pagos', icon: CreditCard },
        { key: 'defi' as const, href: '/soluciones/defi', icon: TrendingUp },
        { key: 'trading' as const, href: '/soluciones/trading', icon: LineChart },
        { key: 'agentes' as const, href: '/soluciones/agentes-autonomos', icon: Bot },
    ]

    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="bg-background/50 fixed z-[60] w-full border-b backdrop-blur-3xl">
                <div className="mx-auto max-w-6xl px-6 transition-all duration-300">
                    <div className="relative flex items-center justify-between py-3 lg:py-4">

                        {/* Logo */}
                        <div className="flex items-center">
                            <Link
                                href="/"
                                aria-label="home"
                                className="flex items-center space-x-2 transition-all hover:scale-105 active:scale-95">
                                <span className="font-mono font-bold tracking-tight">REFLECTER LABS</span>
                            </Link>
                        </div>

                        {/* ── Desktop Navigation – Centered ─────────────────────────── */}
                        {/* Order: Inicio → Educación → Comunidad → Investigación       */}
                        <div className="hidden lg:flex flex-1 justify-center items-center gap-8">

                            {/* Inicio */}
                            <Link
                                href="/"
                                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                                {t.common.nav.home}
                            </Link>

                            {/* Soluciones – dropdown */}
                            <div
                                className="relative"
                                onMouseEnter={() => setSolutionsOpen(true)}
                                onMouseLeave={() => setSolutionsOpen(false)}>
                                <button
                                    onClick={() => setSolutionsOpen(!solutionsOpen)}
                                    className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                                    <span className={solutionsOpen ? 'text-primary' : ''}>{t.common.nav.solutions.title}</span>
                                    <ChevronDown className={`size-4 transition-transform duration-300 ${solutionsOpen ? 'rotate-180 text-primary' : ''}`} />
                                </button>

                                <div className={`absolute left-1/2 -translate-x-1/2 top-full pt-4 w-[320px] ${solutionsOpen ? 'block' : 'hidden'} z-50 animate-in fade-in slide-in-from-top-2 duration-200`}>
                                    <div className="bg-background border rounded-2xl p-2 shadow-xl border-border backdrop-blur-3xl">
                                        {solutions.map((sol) => {
                                            const Icon = sol.icon
                                            return (
                                                <Link
                                                    key={sol.key}
                                                    href={sol.href}
                                                    className="flex items-start gap-3 px-4 py-3 rounded-xl hover:bg-muted/30 transition-colors group/item"
                                                    onClick={() => setSolutionsOpen(false)}>
                                                    <Icon className="size-5 mt-0.5 shrink-0 text-muted-foreground group-hover/item:text-foreground transition-colors" />
                                                    <div>
                                                        <span className="text-sm font-medium group-hover/item:text-foreground transition-colors uppercase tracking-tight">
                                                            {t.common.nav.solutions[sol.key].title}
                                                        </span>
                                                        <span className="block text-[10px] text-muted-foreground">
                                                            {t.common.nav.solutions[sol.key].desc}
                                                        </span>
                                                    </div>
                                                </Link>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>

                            {/* Educación – dropdown */}
                            <div
                                className="relative"
                                onMouseEnter={() => setEducationOpen(true)}
                                onMouseLeave={() => setEducationOpen(false)}>
                                <button
                                    onClick={() => setEducationOpen(!educationOpen)}
                                    className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                                    <span className={educationOpen ? 'text-primary' : ''}>{t.common.nav.education}</span>
                                    <ChevronDown className={`size-4 transition-transform duration-300 ${educationOpen ? 'rotate-180 text-primary' : ''}`} />
                                </button>

                                <div className={`absolute left-1/2 -translate-x-1/2 top-full pt-4 w-[280px] ${educationOpen ? 'block' : 'hidden'} z-50 animate-in fade-in slide-in-from-top-2 duration-200`}>
                                    <div className="bg-background border rounded-2xl p-2 shadow-xl border-border backdrop-blur-3xl">
                                        <Link
                                            href="/educacion"
                                            className="flex items-start gap-3 px-4 py-3 rounded-xl hover:bg-muted/30 transition-colors group/item"
                                            onClick={() => setEducationOpen(false)}>
                                            <GraduationCap className="size-5 mt-0.5 shrink-0 text-muted-foreground group-hover/item:text-foreground transition-colors" />
                                            <div>
                                                <span className="text-sm font-medium group-hover/item:text-foreground transition-colors uppercase tracking-tight">{t.common.nav.education_courses}</span>
                                                <span className="block text-[10px] text-muted-foreground">{t.common.nav.education_coursesDesc}</span>
                                            </div>
                                        </Link>
                                        <Link
                                            href="https://lu.ma/user/usr-SPRsZZjS85jSeIH"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-start gap-3 px-4 py-3 rounded-xl hover:bg-muted/30 transition-colors group/item"
                                            onClick={() => setEducationOpen(false)}>
                                            <GraduationCap className="size-5 mt-0.5 shrink-0 text-muted-foreground group-hover/item:text-foreground transition-colors" />
                                            <div>
                                                <span className="text-sm font-medium group-hover/item:text-foreground transition-colors uppercase tracking-tight">{t.common.nav.education_webinars}</span>
                                                <span className="block text-[10px] text-muted-foreground">{t.common.nav.education_webinarsDesc}</span>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Investigación – dropdown, last */}
                            <div
                                className="relative"
                                onMouseEnter={() => setResearchOpen(true)}
                                onMouseLeave={() => setResearchOpen(false)}>
                                <button
                                    onClick={() => setResearchOpen(!researchOpen)}
                                    className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                                    <span className={researchOpen ? 'text-primary' : ''}>{t.common.nav.research.title}</span>
                                    <ChevronDown className={`size-4 transition-transform duration-300 ${researchOpen ? 'rotate-180 text-primary' : ''}`} />
                                </button>

                                <div className={`absolute left-1/2 -translate-x-1/2 top-full pt-4 w-[300px] ${researchOpen ? 'block' : 'hidden'} z-50 animate-in fade-in slide-in-from-top-2 duration-200`}>
                                    <div className="bg-background border rounded-2xl p-2 shadow-xl border-border backdrop-blur-3xl">
                                        <Link
                                            href="/laboratorio"
                                            className="flex items-start gap-3 px-4 py-3 rounded-xl hover:bg-muted/30 transition-colors group/item"
                                            onClick={() => setResearchOpen(false)}>
                                            <FlaskConical className="size-5 mt-0.5 shrink-0 text-muted-foreground group-hover/item:text-foreground transition-colors" />
                                            <div>
                                                <span className="text-sm font-medium group-hover/item:text-foreground transition-colors uppercase tracking-tight">{t.common.nav.research.laboratory}</span>
                                                <span className="block text-[10px] text-muted-foreground">{t.common.nav.research.laboratoryDesc}</span>
                                            </div>
                                        </Link>
                                        <Link
                                            href="https://reflecterlabs-kb.pages.dev/"
                                            target="_blank"
                                            className="flex items-start gap-3 px-4 py-3 rounded-xl hover:bg-muted/30 transition-colors group/item">
                                            <FlaskConical className="size-5 mt-0.5 shrink-0 text-muted-foreground group-hover/item:text-foreground transition-colors" />
                                            <div>
                                                <span className="text-sm font-medium group-hover/item:text-foreground transition-colors uppercase tracking-tight">{t.common.nav.research.kbGraphs}</span>
                                                <span className="block text-[10px] text-muted-foreground">{t.common.nav.research.kbGraphsDesc}</span>
                                            </div>
                                        </Link>
                                        <Link
                                            href="/blog"
                                            className="flex items-start gap-3 px-4 py-3 rounded-xl hover:bg-muted/30 transition-colors group/item"
                                            onClick={() => setResearchOpen(false)}>
                                            <FlaskConical className="size-5 mt-0.5 shrink-0 text-muted-foreground group-hover/item:text-foreground transition-colors" />
                                            <div>
                                                <span className="text-sm font-medium group-hover/item:text-foreground transition-colors uppercase tracking-tight">{t.common.nav.research.blog}</span>
                                                <span className="block text-[10px] text-muted-foreground">{t.common.nav.research.blogDesc}</span>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ── Right side: Lang → CTA → Hamburger ─────────────────────── */}
                        <div className="flex items-center gap-3">
                            <div className="hidden lg:flex items-center gap-3">
                                <LanguageSwitcher />
                                <Button
                                    asChild
                                    size="sm"
                                    className="rounded-full px-5 bg-white text-black font-bold hover:bg-white/90 hover:shadow-md active:scale-95 transition-all">
                                    <Link href="/#reservar-llamada">
                                        {t.cta.button}
                                    </Link>
                                </Button>
                            </div>

                            {/* Mobile hamburger */}
                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 p-2.5 lg:hidden">
                                <Menu className={`size-6 transition-all duration-200 ${menuState ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}`} />
                                <X className={`absolute inset-0 m-auto size-6 transition-all duration-200 ${menuState ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'}`} />
                            </button>
                        </div>
                    </div>

                    {/* ── Mobile Menu ─────────────────────────────────────────────────── */}
                    <div className={`lg:hidden transition-all duration-300 overflow-hidden ${menuState ? 'max-h-[90vh] opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="bg-background/98 border-t py-4 backdrop-blur-3xl">

                            <div className="flex flex-col">
                                {/* Inicio */}
                                <Link
                                    href="/"
                                    className="flex items-center px-6 py-3.5 text-base font-medium text-muted-foreground hover:text-primary hover:bg-muted/30 rounded-xl transition-colors"
                                    onClick={closeAll}>
                                    {t.common.nav.home}
                                </Link>

                                {/* Soluciones – dropdown mobile */}
                                <div>
                                    <button
                                        onClick={() => setSolutionsOpen(!solutionsOpen)}
                                        className="flex items-center justify-between w-full px-6 py-3.5 text-base font-medium text-muted-foreground hover:text-primary hover:bg-muted/30 rounded-xl transition-colors">
                                        <span>{t.common.nav.solutions.title}</span>
                                        <ChevronDown className={`size-4 transition-transform duration-300 ${solutionsOpen ? 'rotate-180 text-primary' : ''}`} />
                                    </button>
                                    <div className={`overflow-hidden transition-all duration-300 ${solutionsOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                        <div className="mx-6 mb-2 flex flex-col gap-1 pl-4 border-l border-primary/20">
                                            {solutions.map((sol) => {
                                                const Icon = sol.icon
                                                return (
                                                    <Link
                                                        key={sol.key}
                                                        href={sol.href}
                                                        className="flex items-center gap-2 py-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                                                        onClick={closeAll}>
                                                        <Icon className="size-4 shrink-0" />
                                                        <span>{t.common.nav.solutions[sol.key].title}</span>
                                                    </Link>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>

                                {/* Educación – dropdown mobile */}
                                <div>
                                    <button
                                        onClick={() => setEducationOpen(!educationOpen)}
                                        className="flex items-center justify-between w-full px-6 py-3.5 text-base font-medium text-muted-foreground hover:text-primary hover:bg-muted/30 rounded-xl transition-colors">
                                        <span>{t.common.nav.education}</span>
                                        <ChevronDown className={`size-4 transition-transform duration-300 ${educationOpen ? 'rotate-180 text-primary' : ''}`} />
                                    </button>
                                    <div className={`overflow-hidden transition-all duration-300 ${educationOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                                        <div className="mx-6 mb-2 flex flex-col gap-1 pl-4 border-l border-primary/20">
                                            <Link
                                                href="/educacion"
                                                className="flex items-center gap-2 py-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                                                onClick={closeAll}>
                                                <GraduationCap className="size-4 shrink-0" />
                                                <span>{t.common.nav.education_courses}</span>
                                            </Link>
                                            <Link
                                                href="https://lu.ma/user/usr-SPRsZZjS85jSeIH"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 py-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                                                onClick={closeAll}>
                                                <GraduationCap className="size-4 shrink-0" />
                                                <span>{t.common.nav.education_webinars}</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                {/* Investigación – dropdown mobile */}
                                <div>
                                    <button
                                        onClick={() => setResearchOpen(!researchOpen)}
                                        className="flex items-center justify-between w-full px-6 py-3.5 text-base font-medium text-muted-foreground hover:text-primary hover:bg-muted/30 rounded-xl transition-colors">
                                        <span>{t.common.nav.research.title}</span>
                                        <ChevronDown className={`size-4 transition-transform duration-300 ${researchOpen ? 'rotate-180 text-primary' : ''}`} />
                                    </button>
                                    <div className={`overflow-hidden transition-all duration-300 ${researchOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                                        <div className="mx-6 mb-2 flex flex-col gap-1 pl-4 border-l border-primary/20">
                                            <Link
                                                href="/laboratorio"
                                                className="flex items-center gap-2 py-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                                                onClick={closeAll}>
                                                <FlaskConical className="size-4 shrink-0" />
                                                <span>{t.common.nav.research.laboratory}</span>
                                            </Link>
                                            <Link
                                                href="https://reflecterlabs-kb.pages.dev/"
                                                target="_blank"
                                                className="flex items-center gap-2 py-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                                                onClick={closeAll}>
                                                <FlaskConical className="size-4 shrink-0" />
                                                <span>{t.common.nav.research.kbGraphs}</span>
                                            </Link>
                                            <Link
                                                href="/blog"
                                                className="flex items-center gap-2 py-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                                                onClick={closeAll}>
                                                <FlaskConical className="size-4 shrink-0" />
                                                <span>{t.common.nav.research.blog}</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom: Language + CTA */}
                            <div className="mx-6 mt-4 pt-4 border-t space-y-4">
                                <div className="flex justify-start">
                                    <LanguageSwitcher />
                                </div>
                                <Button
                                    asChild
                                    className="w-full rounded-full bg-white text-black font-bold hover:bg-white/90 hover:shadow-md active:scale-95 transition-all">
                                    <Link href="/#reservar-llamada" onClick={closeAll}>
                                        {t.cta.button}
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>

                </div>
            </nav>
        </header>
    )
}
