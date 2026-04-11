"use client";

import React, { useEffect, useState } from "react";
import { insforgeClient } from "@/lib/insforge/client";
import { ClipboardCheck, Clock, Trash2, CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Board } from "@/types/kanban";

export default function AuditsPage() {
  const [audits, setAudits] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [boards, setBoards] = useState<Board[]>([]);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [convertingId, setConvertingId] = useState<string | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    const [auditRes, boardsRes] = await Promise.all([
      insforgeClient.database.from("technical_audits").select("*").order("created_at", { ascending: false }),
      insforgeClient.database.from("kanban_boards").select("*")
    ]);

    if (!auditRes.error) setAudits(auditRes.data || []);
    if (!boardsRes.error) setBoards(boardsRes.data as Board[] || []);
    setLoading(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("¿Eliminar esta auditoría?")) return;
    const { error } = await insforgeClient.database.from("technical_audits").delete().eq("id", id);
    if (!error) setAudits(prev => prev.filter(a => a.id !== id));
  };

  const convertToTask = async (audit: any, boardId: string) => {
    setConvertingId(audit.id);
    try {
      const { error: taskError } = await insforgeClient.database.from("kanban_tasks").insert([{
        board_id: boardId,
        title: `AUDITORÍA: ${audit.company_name} (${audit.stage})`,
        description: `Fundadores: ${audit.founders}\nSector: ${audit.sector}\n\nPROBLEMA:\n${audit.problem_desc}\n\nSOLUCIÓN:\n${audit.solution_desc}\n\nNORTH STAR: ${audit.north_star_metric}`,
        status: 'Creada'
      }]);

      if (taskError) throw taskError;

      await insforgeClient.database.from("technical_audits").update({ status: 'converted' }).eq("id", audit.id);
      setAudits(prev => prev.map(a => a.id === audit.id ? { ...a, status: 'converted' } : a));
    } catch (err: any) {
      alert("Error al convertir: " + err.message);
    } finally {
      setConvertingId(null);
    }
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-10 w-64" />
        <Skeleton className="h-64 w-full rounded-xl" />
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
         <h1 className="text-3xl font-bold tracking-tight">Auditorías Técnicas</h1>
         <p className="text-muted-foreground text-sm font-mono mt-1">Evaluaciones profundas generadas por startups</p>
      </div>

      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-zinc-50 dark:bg-zinc-800/50 border-b border-zinc-200 dark:border-zinc-800">
                <th className="p-4 w-10"></th>
                <th className="p-4 text-xs font-bold font-mono uppercase tracking-widest text-muted-foreground">Fecha</th>
                <th className="p-4 text-xs font-bold font-mono uppercase tracking-widest text-muted-foreground">Startup / Empresa</th>
                <th className="p-4 text-xs font-bold font-mono uppercase tracking-widest text-muted-foreground">Stage / Sector</th>
                <th className="p-4 text-xs font-bold font-mono uppercase tracking-widest text-muted-foreground">Estado</th>
                <th className="p-4 text-xs font-bold font-mono uppercase tracking-widest text-muted-foreground text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
              {audits.map((a) => (
                <React.Fragment key={a.id}>
                  <tr className={`group transition-colors ${expandedId === a.id ? 'bg-zinc-50 dark:bg-zinc-800/30' : 'hover:bg-zinc-50/50 dark:hover:bg-zinc-800/30'}`}>
                    <td className="p-4">
                      <button 
                        onClick={() => setExpandedId(expandedId === a.id ? null : a.id)}
                        className="text-muted-foreground hover:text-foreground"
                      >
                        {expandedId === a.id ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </button>
                    </td>
                    <td className="p-4 text-xs font-mono text-muted-foreground">
                      {new Date(a.created_at).toLocaleDateString()}
                    </td>
                    <td className="p-4">
                      <div className="font-semibold text-sm">{a.company_name}</div>
                      <div className="text-[10px] text-muted-foreground font-mono uppercase">{a.hq_location}</div>
                    </td>
                    <td className="p-4">
                       <div className="flex flex-wrap gap-1">
                          <span className="px-1.5 py-0.5 rounded text-[10px] font-bold font-mono uppercase bg-blue-100/50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border border-blue-200/50 dark:border-blue-800/50">
                            {a.stage}
                          </span>
                          <span className="px-1.5 py-0.5 rounded text-[10px] font-bold font-mono uppercase bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
                            {a.sector}
                          </span>
                       </div>
                    </td>
                    <td className="p-4">
                       {a.status === 'converted' ? (
                         <span className="inline-flex items-center gap-1.5 text-green-600 dark:text-green-400 text-xs font-bold uppercase">
                           <CheckCircle2 size={14} /> Convertido
                         </span>
                       ) : (
                         <span className="inline-flex items-center gap-1.5 text-zinc-500 text-xs font-bold uppercase">
                           <Clock size={14} /> Pendiente
                         </span>
                       )}
                    </td>
                    <td className="p-4 text-right space-x-2">
                       {a.status !== 'converted' && boards.length > 0 && (
                          <select 
                            disabled={convertingId === a.id}
                            className="text-[10px] bg-background border border-border rounded px-2 py-1 focus:outline-none"
                            onChange={(e) => e.target.value && convertToTask(a, e.target.value)}
                            value=""
                          >
                            <option value="">Añadir a Tablero...</option>
                            {boards.map(b => (
                              <option key={b.id} value={b.id}>{b.title}</option>
                            ))}
                          </select>
                       )}
                       <button 
                         onClick={() => handleDelete(a.id)}
                         className="p-1.5 text-muted-foreground hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md transition-all"
                       >
                         <Trash2 size={16} />
                       </button>
                    </td>
                  </tr>
                  {expandedId === a.id && (
                    <tr className="bg-zinc-50/50 dark:bg-zinc-800/10">
                      <td colSpan={6} className="p-8 border-t border-zinc-200 dark:border-zinc-800">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
                           <div className="space-y-4">
                              <div>
                                 <h4 className="text-[10px] font-bold font-mono uppercase tracking-widest text-muted-foreground mb-1">Fundadores</h4>
                                 <p className="font-mono">{a.founders}</p>
                              </div>
                              <div>
                                 <h4 className="text-[10px] font-bold font-mono uppercase tracking-widest text-muted-foreground mb-1">Problema</h4>
                                 <p className="leading-relaxed">{a.problem_desc}</p>
                              </div>
                              <div>
                                 <h4 className="text-[10px] font-bold font-mono uppercase tracking-widest text-muted-foreground mb-1">Solución</h4>
                                 <p className="leading-relaxed">{a.solution_desc}</p>
                              </div>
                           </div>
                           <div className="space-y-4">
                              <div className="grid grid-cols-2 gap-4">
                                 <div>
                                    <h4 className="text-[10px] font-bold font-mono uppercase tracking-widest text-muted-foreground mb-1">Runway</h4>
                                    <p className="font-mono">{a.runway}</p>
                                 </div>
                                 <div>
                                    <h4 className="text-[10px] font-bold font-mono uppercase tracking-widest text-muted-foreground mb-1">North Star</h4>
                                    <p className="font-mono text-blue-600 dark:text-blue-400">{a.north_star_metric}</p>
                                 </div>
                              </div>
                              <div>
                                 <h4 className="text-[10px] font-bold font-mono uppercase tracking-widest text-muted-foreground mb-1">Señales Técnicas</h4>
                                 <div className="flex flex-wrap gap-2 mt-1">
                                    {a.problem_validated && <span className="text-[10px] bg-green-500/10 text-green-600 px-2 py-0.5 rounded-full border border-green-500/20 font-bold uppercase">Prob. Validado</span>}
                                    {a.scalability && <span className="text-[10px] bg-blue-500/10 text-blue-600 px-2 py-0.5 rounded-full border border-blue-500/20 font-bold uppercase">Escalable</span>}
                                    {a.real_traction && <span className="text-[10px] bg-purple-500/10 text-purple-600 px-2 py-0.5 rounded-full border border-purple-500/20 font-bold uppercase">Tracción</span>}
                                 </div>
                              </div>
                              {a.red_flags && (
                                <div>
                                   <h4 className="text-[10px] font-bold font-mono uppercase tracking-widest text-red-500 mb-1">Riesgos Identificados</h4>
                                   <p className="text-red-500/80 italic">{a.red_flags}</p>
                                </div>
                              )}
                           </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
              {audits.length === 0 && (
                <tr>
                  <td colSpan={6} className="p-12 text-center text-zinc-500 font-mono text-sm">
                    No hay auditorías registradas.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

