"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { 
    ClipboardCheck, 
    ArrowLeft, 
    Send, 
    Loader2, 
    CheckCircle2, 
    Building2, 
    Globe, 
    Users, 
    TrendingUp, 
    AlertTriangle,
    Check
} from "lucide-react";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TechnicalAuditSchema, type TechnicalAuditData } from "@/lib/schemas/contact-schemas";
import { InputField, TextAreaField, CheckboxField } from "@/components/ui/form-fields";
import { insforgeClient } from "@/lib/insforge/client";

export default function AuditoriaPage() {
    const router = useRouter();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [countdown, setCountdown] = useState(10);

    const {
        register,
        handleSubmit,
        control,
        formState: { errors }
    } = useForm<TechnicalAuditData>({
        resolver: zodResolver(TechnicalAuditSchema),
        defaultValues: {
            problem_validated: false,
            market_timing: false,
            team_fit: false,
            scalability: false,
            real_traction: false,
            vision_alignment: false,
        }
    });

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (isSubmitted && countdown > 0) {
            timer = setTimeout(() => setCountdown(countdown - 1), 1000);
        } else if (isSubmitted && countdown === 0) {
            router.push("/");
        }
        return () => clearTimeout(timer);
    }, [isSubmitted, countdown, router]);

    const onSubmit = async (data: TechnicalAuditData) => {
        try {
            const { error } = await insforgeClient.database
                .from("technical_audits")
                .insert([{
                    ...data,
                    status: 'pending'
                }]);

            if (error) throw error;
            setIsSubmitted(true);
        } catch (error: any) {
            console.error("Error al guardar auditoría:", error);
            alert(`No se pudo procesar la auditoría: ${error?.message || "Error desconocido"}`);
        }
    };

    if (isSubmitted) {
        return (
            <div className="min-h-screen flex items-center justify-center px-6">
                <div className="max-w-md w-full text-center space-y-8 animate-in fade-in zoom-in duration-700">
                    <div className="w-24 h-24 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-8">
                        <CheckCircle2 className="w-12 h-12 text-primary" />
                    </div>
                    <div className="space-y-4">
                        <h1 className="text-4xl font-bold tracking-tighter uppercase font-mono">Auditoría Recibida</h1>
                        <p className="text-muted-foreground font-mono text-sm leading-relaxed">
                            Tu evaluación ha sido registrada en nuestro sistema de auditoría. Reflecter Labs revisará los datos estructurales y se pondrá en contacto en las próximas 48 horas.
                        </p>
                    </div>
                    <div className="pt-8 text-muted-foreground font-mono text-xs uppercase tracking-widest">
                        Redirigiendo al inicio en <span className="text-primary font-bold">{countdown}</span> segundos...
                    </div>
                </div>
            </div>
        );
    }

    return (
        <main className="min-h-screen pt-32 pb-24 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10" />

            <div className="mx-auto max-w-4xl px-6">
                <Link 
                    href="/#soluciones" 
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-mono text-xs uppercase tracking-widest mb-12"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Volver a soluciones
                </Link>

                <div className="mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-mono text-[10px] font-bold uppercase tracking-widest mb-6">
                        <ClipboardCheck className="w-3.5 h-3.5" />
                        First Assessment · Uso Interno
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-4 leading-none text-foreground">
                        Reflecter Labs <span className="text-primary">Audit</span>
                    </h1>
                    <p className="text-muted-foreground font-mono text-sm max-w-2xl leading-relaxed">
                        Este documento establece las reglas y lógica de auditoría estratégica. Completa la información estructural del proyecto.
                    </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
                    
                    {/* 1. SNAPSHOT */}
                    <div className="space-y-8 p-8 md:p-12 rounded-[2rem] border border-border bg-background/50 backdrop-blur-xl">
                        <div className="flex items-center gap-4 mb-2">
                            <Building2 className="w-6 h-6 text-primary" />
                            <h2 className="text-xl font-bold font-mono uppercase tracking-tight text-foreground">1. Snapshot</h2>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <InputField label="Empresa / Web" placeholder="Nombre legal — URL" required error={errors.company_name?.message} {...register("company_name")} />
                            <InputField label="País / Mercado" placeholder="HQ y mercados de operación" required error={errors.hq_location?.message} {...register("hq_location")} />
                            <InputField label="Sector" placeholder="Fintech / SaaS / Web3 / etc." required error={errors.sector?.message} {...register("sector")} />
                            <InputField label="Modelo" placeholder="B2B / B2C / B2B2C" required error={errors.business_model?.message} {...register("business_model")} />
                            <InputField label="Fundadores" placeholder="Nombres y Roles" required error={errors.founders?.message} {...register("founders")} />
                            <div className="grid grid-cols-2 gap-4">
                                <InputField label="Año Fundación" placeholder="AAAA" required error={errors.founding_year?.message} {...register("founding_year")} />
                                <InputField label="Stage" placeholder="Pre-seed / Seed..." required error={errors.stage?.message} {...register("stage")} />
                            </div>
                            <InputField label="Ronda Actual" placeholder="$XM — Instrumento" error={errors.investment_round?.message} {...register("investment_round")} />
                            <InputField label="Métrica Clave (North Star)" placeholder="ARR / GMV / Usuarios" required error={errors.north_star_metric?.message} {...register("north_star_metric")} />
                        </div>
                    </div>

                    {/* 2. PROBLEMA Y SOLUCIÓN */}
                    <div className="space-y-8 p-8 md:p-12 rounded-[2rem] border border-border bg-background/50 backdrop-blur-xl">
                        <div className="flex items-center gap-4 mb-2">
                            <Globe className="w-6 h-6 text-primary" />
                            <h2 className="text-xl font-bold font-mono uppercase tracking-tight text-foreground">2. Problema y Solución</h2>
                        </div>
                        <div className="space-y-6">
                            <TextAreaField 
                                label="¿Qué problema resuelve?" 
                                placeholder="Quién sufre el problema, cuánto les duele, cómo lo resuelven hoy y por qué es insuficiente."
                                required
                                error={errors.problem_desc?.message}
                                {...register("problem_desc")}
                            />
                            <TextAreaField 
                                label="¿Cuál es la solución y por qué es mejor?" 
                                placeholder="Qué hace el producto, para quién, qué lo diferencia — must-have o nice-to-have."
                                required
                                error={errors.solution_desc?.message}
                                {...register("solution_desc")}
                            />
                        </div>
                    </div>

                    {/* 3. MERCADO */}
                    <div className="space-y-8 p-8 md:p-12 rounded-[2rem] border border-border bg-background/50 backdrop-blur-xl">
                        <div className="flex items-center gap-4 mb-2">
                            <TrendingUp className="w-6 h-6 text-primary" />
                            <h2 className="text-xl font-bold font-mono uppercase tracking-tight text-foreground">3. Mercado</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <InputField label="TAM (Market size)" placeholder="$XB" required error={errors.tam_size?.message} {...register("tam_size")} />
                            <InputField label="SAM / SOM" placeholder="$XM" required error={errors.sam_som?.message} {...register("sam_som")} />
                            <InputField label="Crecimiento" placeholder="X% CAGR" required error={errors.growth_rate?.message} {...register("growth_rate")} />
                        </div>
                    </div>

                    {/* 4. EQUIPO */}
                    <div className="space-y-8 p-8 md:p-12 rounded-[2rem] border border-border bg-background/50 backdrop-blur-xl">
                        <div className="flex items-center gap-4 mb-2">
                            <Users className="w-6 h-6 text-primary" />
                            <h2 className="text-xl font-bold font-mono uppercase tracking-tight text-foreground">4. Equipo</h2>
                        </div>
                        <div className="space-y-6">
                            <TextAreaField 
                                label="Founder-market fit" 
                                placeholder="¿Por qué estos founders son los indicados para resolver este problema?"
                                required
                                error={errors.founder_market_fit?.message}
                                {...register("founder_market_fit")}
                            />
                            <InputField label="¿Quién falta?" placeholder="Rol crítico que no está en el equipo hoy" error={errors.missing_roles?.message} {...register("missing_roles")} />
                        </div>
                    </div>

                    {/* 5. TRACCIÓN INICIAL */}
                    <div className="space-y-8 p-8 md:p-12 rounded-[2rem] border border-border bg-background/50 backdrop-blur-xl">
                        <div className="flex items-center gap-4 mb-2">
                            <TrendingUp className="w-6 h-6 text-primary" />
                            <h2 className="text-xl font-bold font-mono uppercase tracking-tight text-foreground">5. Tracción Inicial</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <InputField label="Valor North Star" placeholder="$X ARR / $X GMV / X Usuarios" required error={errors.metric_value?.message} {...register("metric_value")} />
                            <InputField label="Crecimiento" placeholder="+X% MoM / YoY" required error={errors.mom_growth?.message} {...register("mom_growth")} />
                            <InputField label="Clientes / Usuarios" placeholder="X Pagos / X Activos" required error={errors.client_count?.message} {...register("client_count")} />
                            <InputField label="Retención" placeholder="Churn X% / NRR X%" error={errors.retention_data?.message} {...register("retention_data")} />
                            <InputField label="Runway" placeholder="X meses — Burn $X/mes" required error={errors.runway?.message} {...register("runway")} />
                        </div>
                    </div>

                    {/* 6. SEÑALES RÁPIDAS */}
                    <div className="space-y-8 p-8 md:p-12 rounded-[2rem] border border-border bg-background/50 backdrop-blur-xl">
                        <div className="flex items-center gap-4 mb-2">
                            <CheckCircle2 className="w-6 h-6 text-primary" />
                            <h2 className="text-xl font-bold font-mono uppercase tracking-tight text-foreground">6. Señales Rápidas</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                            <Controller
                                name="problem_validated"
                                control={control}
                                render={({ field }) => (
                                    <CheckboxField label="¿El problema es real y duele?" value={field.value} onChange={field.onChange} />
                                )}
                            />
                            <Controller
                                name="market_timing"
                                control={control}
                                render={({ field }) => (
                                    <CheckboxField label="¿El timing de mercado es correcto?" value={field.value} onChange={field.onChange} />
                                )}
                            />
                            <Controller
                                name="team_fit"
                                control={control}
                                render={({ field }) => (
                                    <CheckboxField label="¿Hay founder-market fit claro?" value={field.value} onChange={field.onChange} />
                                )}
                            />
                            <Controller
                                name="scalability"
                                control={control}
                                render={({ field }) => (
                                    <CheckboxField label="¿El modelo tiene potencial de escala?" value={field.value} onChange={field.onChange} />
                                )}
                            />
                            <Controller
                                name="real_traction"
                                control={control}
                                render={({ field }) => (
                                    <CheckboxField label="¿Hay tracción inicial real?" value={field.value} onChange={field.onChange} />
                                )}
                            />
                            <Controller
                                name="vision_alignment"
                                control={control}
                                render={({ field }) => (
                                    <CheckboxField label="¿Encaja con la visión de Reflecter Labs?" value={field.value} onChange={field.onChange} />
                                )}
                            />
                        </div>
                    </div>

                    {/* 7. RED FLAGS */}
                    <div className="space-y-8 p-8 md:p-12 rounded-[2rem] border border-border bg-background/50 backdrop-blur-xl">
                        <div className="flex items-center gap-4 mb-2">
                            <AlertTriangle className="w-6 h-6 text-primary" />
                            <h2 className="text-xl font-bold font-mono uppercase tracking-tight text-foreground">7. Observaciones</h2>
                        </div>
                        <TextAreaField 
                            label="Red Flags identificados" 
                            placeholder="Menciona cualquier riesgo o duda crítica identificada."
                            error={errors.red_flags?.message}
                            {...register("red_flags")}
                        />
                    </div>

                    <div className="pt-8">
                        <button
                            disabled={isSubmitting}
                            type="submit"
                            className="w-full group relative flex items-center justify-center gap-3 bg-primary text-primary-foreground font-mono font-bold uppercase tracking-[0.2em] px-8 py-6 rounded-2xl hover:scale-[1.02] transition-all duration-300 disabled:opacity-50"
                        >
                            {isSubmitting ? (
                                <Loader2 className="w-6 h-6 animate-spin" />
                            ) : (
                                <>
                                    Finalizar Auditoría Técnica
                                    <Send className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </>
                            )}
                        </button>
                        <p className="mt-6 text-center text-muted-foreground font-mono text-[10px] uppercase tracking-widest opacity-50">
                            Reflecter Labs · Este documento es el inicio del proceso — no el final.
                        </p>
                    </div>

                </form>
            </div>
        </main>
    );
}
