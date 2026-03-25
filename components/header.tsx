'use client'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React from 'react'
import { LanguageSwitcher } from '@/components/language-switcher'
import { useLocale } from '@/lib/i18n/locale-context'

export const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [educationOpen, setEducationOpen] = React.useState(false)
    const [researchOpen, setResearchOpen] = React.useState(false)
    const { t } = useLocale()

    const closeAll = () => {
        setMenuState(false)
        setEducationOpen(false)
        setResearchOpen(false)
    }

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

                                <div className={`absolute left-1/2 -translate-x-1/2 top-full pt-4 w-[240px] ${educationOpen ? 'block' : 'hidden'} z-50 animate-in fade-in slide-in-from-top-2 duration-200`}>
                                    <div className="bg-background border rounded-2xl p-2 shadow-xl border-emerald-500/10 backdrop-blur-3xl">
                                        <Link
                                            href="/educacion"
                                            className="flex flex-col px-4 py-3 rounded-xl hover:bg-emerald-500/[0.03] transition-colors group/item"
                                            onClick={() => setEducationOpen(false)}>
                                            <span className="text-sm font-medium group-hover/item:text-emerald-500 transition-colors uppercase tracking-tight">{t.common.nav.education_courses}</span>
                                            <span className="text-[10px] text-muted-foreground">{t.common.nav.education_coursesDesc}</span>
                                        </Link>
                                        <Link
                                            href="https://lu.ma/user/usr-SPRsZZjS85jSeIH"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex flex-col px-4 py-3 rounded-xl hover:bg-emerald-500/[0.03] transition-colors group/item"
                                            onClick={() => setEducationOpen(false)}>
                                            <span className="text-sm font-medium group-hover/item:text-emerald-500 transition-colors uppercase tracking-tight">{t.common.nav.education_webinars}</span>
                                            <span className="text-[10px] text-muted-foreground">{t.common.nav.education_webinarsDesc}</span>
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

                                <div className={`absolute left-1/2 -translate-x-1/2 top-full pt-4 w-[260px] ${researchOpen ? 'block' : 'hidden'} z-50 animate-in fade-in slide-in-from-top-2 duration-200`}>
                                    <div className="bg-background border rounded-2xl p-2 shadow-xl border-emerald-500/10 backdrop-blur-3xl">
                                        <Link
                                            href="https://reflecterlabs-kb.pages.dev/"
                                            target="_blank"
                                            className="flex flex-col px-4 py-3 rounded-xl hover:bg-emerald-500/[0.03] transition-colors group/item">
                                            <span className="text-sm font-medium group-hover/item:text-emerald-500 transition-colors uppercase tracking-tight">{t.common.nav.research.kbGraphs}</span>
                                            <span className="text-[10px] text-muted-foreground">{t.common.nav.research.kbGraphsDesc}</span>
                                        </Link>
                                        <Link
                                            href="/blog"
                                            className="flex flex-col px-4 py-3 rounded-xl hover:bg-emerald-500/[0.03] transition-colors group/item"
                                            onClick={() => setResearchOpen(false)}>
                                            <span className="text-sm font-medium group-hover/item:text-emerald-500 transition-colors uppercase tracking-tight">{t.common.nav.research.blog}</span>
                                            <span className="text-[10px] text-muted-foreground">{t.common.nav.research.blogDesc}</span>
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

                                {/* Educación – dropdown mobile */}
                                <div>
                                    <button
                                        onClick={() => setEducationOpen(!educationOpen)}
                                        className="flex items-center justify-between w-full px-6 py-3.5 text-base font-medium text-muted-foreground hover:text-primary hover:bg-muted/30 rounded-xl transition-colors">
                                        <span>{t.common.nav.education}</span>
                                        <ChevronDown className={`size-4 transition-transform duration-300 ${educationOpen ? 'rotate-180 text-primary' : ''}`} />
                                    </button>
                                    <div className={`overflow-hidden transition-all duration-300 ${educationOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                                        <div className="mx-6 mb-2 flex flex-col gap-1 pl-4 border-l border-emerald-500/20">
                                            <Link
                                                href="/educacion"
                                                className="py-2.5 text-sm text-muted-foreground hover:text-emerald-500 transition-colors"
                                                onClick={closeAll}>
                                                {t.common.nav.education_courses}
                                            </Link>
                                            <Link
                                                href="https://lu.ma/user/usr-SPRsZZjS85jSeIH"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="py-2.5 text-sm text-muted-foreground hover:text-emerald-500 transition-colors"
                                                onClick={closeAll}>
                                                {t.common.nav.education_webinars}
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
                                        <div className="mx-6 mb-2 flex flex-col gap-1 pl-4 border-l border-emerald-500/20">
                                            <Link
                                                href="https://reflecterlabs-kb.pages.dev/"
                                                target="_blank"
                                                className="py-2.5 text-sm text-muted-foreground hover:text-emerald-500 transition-colors"
                                                onClick={closeAll}>
                                                {t.common.nav.research.kbGraphs}
                                            </Link>
                                            <Link
                                                href="/blog"
                                                className="py-2.5 text-sm text-muted-foreground hover:text-emerald-500 transition-colors"
                                                onClick={closeAll}>
                                                {t.common.nav.research.blog}
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
