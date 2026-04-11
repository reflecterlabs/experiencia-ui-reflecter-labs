"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n/locale-context";
import { Send, CheckCircle2, Loader2, MessageSquare, ClipboardCheck, ArrowRight, Briefcase, DollarSign } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SolutionContactSchema, type SolutionContactData } from "@/lib/schemas/contact-schemas";
import { InputField, TextAreaField } from "@/components/ui/form-fields";
import { insforgeClient } from "@/lib/insforge/client";

interface SolutionContactProps {
    solutionId: string;
    solutionName: string;
}

export default function SolutionContact({ solutionId, solutionName }: SolutionContactProps) {
    const { t } = useLocale();
    const [isSent, setIsSent] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm<SolutionContactData>({
        resolver: zodResolver(SolutionContactSchema),
        defaultValues: {
            area: solutionId
        }
    });

    const onSubmit = async (data: SolutionContactData) => {
        try {
            const { error } = await insforgeClient.database
                .from("consultations")
                .insert([{
                    name: data.name,
                    email: data.email,
                    company: data.company,
                    budget: data.budget,
                    message: data.message,
                    area: data.area,
                    status: 'pending'
                }]);

            if (error) throw error;
            setIsSent(true);
        } catch (error: any) {
            console.error("Error al enviar consulta:", error);
            alert(`No se pudo enviar la consulta: ${error?.message || "Error desconocido"}`);
        }
    };

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            
            <div className="mx-auto max-w-6xl px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    
                    {/* Left Side: Audit Option */}
                    <div className="lg:col-span-4 space-y-8">
                        <div className="flex flex-col items-start text-left">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-mono text-[10px] font-bold uppercase tracking-widest mb-6">
                                <ClipboardCheck className="w-3.5 h-3.5" />
                                BUSINESS AUDIT
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter uppercase mb-6 leading-tight">
                                ¿Negocio en marcha? <br />
                                <span className="text-primary text-2xl md:text-3xl">Pide una auditoría técnica profunda</span>
                            </h2>
                            <p className="text-muted-foreground font-mono text-sm leading-relaxed mb-8">
                                Si ya tienes un ecosistema operativo de <span className="text-foreground">{solutionName}</span> rindiendo, realizamos una evaluación técnica y de negocio integral para identificar ineficiencias y puntos de escala.
                            </p>
                            
                            <Link 
                                href={`/auditoria?solution=${solutionId}`}
                                className="group relative inline-flex items-center gap-4 bg-muted/20 border border-primary/20 hover:border-primary/50 px-8 py-5 rounded-2xl transition-all duration-300 overflow-hidden"
                            >
                                <div className="relative z-10 flex flex-col items-start translate-x-0 group-hover:translate-x-1 transition-transform">
                                    <span className="text-[10px] font-bold font-mono opacity-50 uppercase tracking-widest leading-none mb-1">AUDITORIA / FIRST ASSESSMENT</span>
                                    <span className="text-sm font-bold font-mono uppercase tracking-widest">INICIAR EVALUACIÓN</span>
                                </div>
                                <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-2 transition-transform" />
                                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </Link>
                        </div>
                    </div>

                    {/* Right Side: Contact Form */}
                    <div className="lg:col-span-8">
                        <div className="relative group">
                            <div className="absolute inset-0 bg-primary/5 rounded-[2.5rem] blur-2xl -z-10 group-hover:bg-primary/10 transition-colors duration-700" />
                            
                            <div className="bg-background/40 backdrop-blur-xl border border-border/50 rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-primary/5">
                                <div className="mb-8">
                                    <div className="flex items-center gap-3 text-muted-foreground mb-2">
                                        <MessageSquare className="w-4 h-4" />
                                        <span className="text-[10px] font-bold font-mono uppercase tracking-widest">{t.contact.subjectProject}</span>
                                    </div>
                                    <h3 className="text-xl font-bold font-mono uppercase tracking-tight">SOLICITAR CONSULTORÍA</h3>
                                </div>

                                {isSent ? (
                                    <div className="flex flex-col items-center justify-center py-10 text-center animate-in fade-in zoom-in duration-500">
                                        <div className="w-20 h-20 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                                            <CheckCircle2 className="w-10 h-10 text-primary" />
                                        </div>
                                        <h3 className="text-2xl font-bold uppercase tracking-tight mb-2">{t.contact.thankYou}</h3>
                                        <p className="text-muted-foreground font-mono text-sm">{t.common.messageSent}</p>
                                        <button 
                                            onClick={() => setIsSent(false)}
                                            className="mt-8 text-xs font-bold font-mono uppercase tracking-[0.2em] text-primary hover:underline"
                                        >
                                            {t.common.sendAnother}
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                        <input type="hidden" {...register("area")} />
                                        
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <InputField 
                                                label={t.contact.name}
                                                placeholder={t.contact.namePlaceholder}
                                                error={errors.name?.message}
                                                {...register("name")}
                                            />
                                            
                                            <InputField 
                                                label={t.contact.email}
                                                type="email"
                                                placeholder={t.contact.emailPlaceholder}
                                                error={errors.email?.message}
                                                {...register("email")}
                                            />

                                            <InputField 
                                                label="EMPRESA"
                                                placeholder="Nombre de tu organización"
                                                error={errors.company?.message}
                                                {...register("company")}
                                            />

                                            <div className="space-y-2">
                                                <label className="text-[10px] font-bold font-mono uppercase tracking-widest text-muted-foreground/60 ml-1 flex items-center gap-2">
                                                    <DollarSign className="w-3 h-3" />
                                                    PRESUPUESTO ESTIMADO
                                                </label>
                                                <select
                                                    {...register("budget")}
                                                    className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 font-mono text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all text-foreground"
                                                >
                                                    <option value="low">&lt; $5,000</option>
                                                    <option value="medium">$5,000 - $20,000</option>
                                                    <option value="high">$20,000 - $50,000</option>
                                                    <option value="enterprise">$50,000+</option>
                                                </select>
                                            </div>
                                        </div>

                                        <TextAreaField 
                                            label={t.contact.message}
                                            placeholder={t.contact.messagePlaceholder}
                                            error={errors.message?.message}
                                            {...register("message")}
                                        />

                                        <div className="mt-4">
                                            <button
                                                disabled={isSubmitting}
                                                type="submit"
                                                className="w-full group relative flex items-center justify-center gap-3 bg-foreground text-background font-mono font-bold uppercase tracking-widest px-8 py-4 rounded-xl hover:bg-primary hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                            >
                                                {isSubmitting ? (
                                                    <Loader2 className="w-5 h-5 animate-spin" />
                                                ) : (
                                                    <>
                                                        {t.common.sendMessage}
                                                        <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
