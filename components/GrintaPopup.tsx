"use client";

import { motion, AnimatePresence } from "motion/react";
import { X, CheckCircle, ArrowRight, Zap } from "lucide-react";
import { useState, useEffect } from "react";
import { useLocale } from "@/lib/i18n/locale-context";

interface GrintaPopupProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function GrintaPopup({ isOpen, onClose }: GrintaPopupProps) {
    const { t } = useLocale();
    const [email, setEmail] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setIsSubmitted(true);
            // Simulate API call
            setTimeout(() => {
                // Reset or close after some time if needed, but let user see success
            }, 3000);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-background/80 backdrop-blur-md"
                    />

                    {/* Modal Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-lg overflow-hidden rounded-[2.5rem] border border-border bg-card shadow-2xl"
                    >
                        {/* Grinta Green Accent Bar */}
                        <div className="absolute top-0 left-0 right-0 h-2 bg-[#00FF85]" />

                        <button
                            onClick={onClose}
                            className="absolute right-6 top-6 rounded-full border border-border bg-muted/50 p-2 text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
                        >
                            <X className="h-4 w-4" />
                        </button>

                        <div className="p-8 sm:p-12">
                            {!isSubmitted ? (
                                <>
                                    <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#00FF85]/10 text-[#00FF85]">
                                        <Zap className="h-8 w-8" />
                                    </div>

                                    <h2 className="font-mono text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                                        {t.grintaPopup.title}
                                    </h2>

                                    <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                                        {t.grintaPopup.description}
                                    </p>

                                    <div className="mt-10">
                                        <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-[#00FF85]">
                                            {t.grintaPopup.waitlistTitle}
                                        </h3>

                                        <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3 sm:flex-row">
                                            <input
                                                type="email"
                                                required
                                                placeholder={t.grintaPopup.waitlistPlaceholder}
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className="h-12 flex-1 rounded-xl border border-border bg-muted/30 px-4 font-mono text-sm text-foreground focus:border-[#00FF85]/50 focus:outline-none focus:ring-1 focus:ring-[#00FF85]/50"
                                            />
                                            <button
                                                type="submit"
                                                className="group flex h-12 items-center justify-center gap-2 rounded-xl bg-[#00FF85] px-6 font-mono text-sm font-bold uppercase tracking-widest text-black transition-all hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(0,255,133,0.3)] active:scale-[0.98]"
                                            >
                                                {t.grintaPopup.button}
                                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                            </button>
                                        </form>
                                    </div>
                                </>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex flex-col items-center py-10 text-center"
                                >
                                    <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#00FF85]/10 text-[#00FF85]">
                                        <CheckCircle className="h-10 w-10" />
                                    </div>
                                    <h2 className="font-mono text-2xl font-bold text-foreground">
                                        {t.grintaPopup.success}
                                    </h2>
                                    <p className="mt-4 max-w-xs text-muted-foreground">
                                        {email}
                                    </p>
                                    <button
                                        onClick={onClose}
                                        className="mt-10 font-mono text-sm font-bold uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground underline underline-offset-8"
                                    >
                                        {t.common.backHome}
                                    </button>
                                </motion.div>
                            )}
                        </div>

                        {/* Decorative background element */}
                        <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-[#00FF85]/5 blur-3xl" />
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
