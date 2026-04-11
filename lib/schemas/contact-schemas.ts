import { z } from "zod";

// Schema para el formulario de contacto de soluciones
export const SolutionContactSchema = z.object({
  name: z.string().min(2, "Identidad requerida (mín. 2 caracteres)"),
  email: z.string().email("Formato de comunicación inválido"),
  company: z.string().min(2, "Entidad organizacional requerida"),
  role: z.string().optional(),
  area: z.string(), // ID de la solución (agentes, defi, etc)
  budget: z.enum(["low", "medium", "high", "enterprise"]).optional(),
  message: z.string().min(10, "Descripción técnica insuficiente para análisis inicial"),
});

export type SolutionContactData = z.infer<typeof SolutionContactSchema>;

// Schema para el formulario de auditoría técnica profunda
export const TechnicalAuditSchema = z.object({
  // Section 1: Snapshot
  company_name: z.string().min(2, "Identificador de entidad requerido"),
  hq_location: z.string().min(2, "Jurisdicción operativa requerida"),
  sector: z.string().min(2, "Mapeo de sector requerido"),
  business_model: z.string().min(2, "Lógica de negocio requerida"),
  founders: z.string().min(2, "Identificación de fundadores requerida"),
  founding_year: z.string().regex(/^\d{4}$/, "Año cronológicamente inválido"),
  stage: z.string().min(2, "Estado de maduración requerido"),
  investment_round: z.string().optional(),
  north_star_metric: z.string().min(2, "KPi estructural (North Star) requerido"),

  // Section 2: Problem & Solution
  problem_desc: z.string().min(20, "Análisis de problema insuficiente"),
  solution_desc: z.string().min(20, "Definición de solución insuficiente"),

  // Section 3: Market
  tam_size: z.string().min(2, "Cálculo de TAM requerido"),
  sam_som: z.string().min(2, "Cálculo de SAM/SOM requerido"),
  growth_rate: z.string().min(2, "Proyección de crecimiento requerida"),

  // Section 4: Team
  founder_market_fit: z.string().min(20, "Validación de Founder-Market fit insuficiente"),
  missing_roles: z.string().optional(),

  // Section 5: Traction
  metric_value: z.string().min(2, "Cuantificación de métrica requerida"),
  mom_growth: z.string().min(2, "Registro de crecimiento MoM requerido"),
  client_count: z.string().min(1, "Volumen de clientes/usuarios requerido"),
  retention_data: z.string().optional(),
  runway: z.string().min(2, "Cálculo de supervivencia (Runway) requerido"),

  // Section 6: Signals (Checkboxes)
  problem_validated: z.boolean().default(false),
  market_timing: z.boolean().default(false),
  team_fit: z.boolean().default(false),
  scalability: z.boolean().default(false),
  real_traction: z.boolean().default(false),
  vision_alignment: z.boolean().default(false),

  // Section 7: Red Flags
  red_flags: z.string().optional(),
});

export type TechnicalAuditData = z.infer<typeof TechnicalAuditSchema>;
