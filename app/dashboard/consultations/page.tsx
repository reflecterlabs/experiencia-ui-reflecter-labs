"use client";

import { useEffect, useState } from "react";
import { insforgeClient } from "@/lib/insforge/client";
import { Mail, Clock, Trash2, ArrowRightCircle, CheckCircle2 } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Board } from "@/types/kanban";

export default function ConsultationsPage() {
  const [consultations, setConsultations] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [boards, setBoards] = useState<Board[]>([]);
  const [convertingId, setConvertingId] = useState<string | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    const [consRes, boardsRes] = await Promise.all([
      insforgeClient.database.from("consultations").select("*").order("created_at", { ascending: false }),
      insforgeClient.database.from("kanban_boards").select("*")
    ]);

    if (!consRes.error) setConsultations(consRes.data || []);
    if (!boardsRes.error) setBoards(boardsRes.data as Board[] || []);
    setLoading(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("¿Eliminar esta consulta permanentemente?")) return;
    const { error } = await insforgeClient.database.from("consultations").delete().eq("id", id);
    if (!error) setConsultations(prev => prev.filter(c => c.id !== id));
  };

  const convertToTask = async (consultation: any, boardId: string) => {
    setConvertingId(consultation.id);
    try {
      // 1. Create task
      const { error: taskError } = await insforgeClient.database.from("kanban_tasks").insert([{
        board_id: boardId,
        title: `CONSULTA: ${consultation.name} (${consultation.area})`,
        description: `Email: ${consultation.email}\nEmpresa: ${consultation.company}\nPresupuesto: ${consultation.budget}\n\nMENSAJE:\n${consultation.message}`,
        status: 'Creada'
      }]);

      if (taskError) throw taskError;

      // 2. Update consultation status
      await insforgeClient.database.from("consultations").update({ status: 'converted' }).eq("id", consultation.id);
      
      setConsultations(prev => prev.map(c => c.id === consultation.id ? { ...c, status: 'converted' } : c));
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
      <div className="flex justify-between items-center mb-8">
        <div>
           <h1 className="text-3xl font-bold tracking-tight">Consultas de Clientes</h1>
           <p className="text-muted-foreground text-sm font-mono mt-1">Leads entrantes desde el portal de soluciones</p>
        </div>
      </div>

      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-zinc-50 dark:bg-zinc-800/50 border-b border-zinc-200 dark:border-zinc-800">
              <th className="p-4 text-xs font-bold font-mono uppercase tracking-widest text-muted-foreground">Fecha</th>
              <th className="p-4 text-xs font-bold font-mono uppercase tracking-widest text-muted-foreground">Cliente</th>
              <th className="p-4 text-xs font-bold font-mono uppercase tracking-widest text-muted-foreground">Área / Solución</th>
              <th className="p-4 text-xs font-bold font-mono uppercase tracking-widest text-muted-foreground">Estado</th>
              <th className="p-4 text-xs font-bold font-mono uppercase tracking-widest text-muted-foreground text-right">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
            {consultations.map((c) => (
              <tr key={c.id} className="group hover:bg-zinc-50/50 dark:hover:bg-zinc-800/30 transition-colors">
                <td className="p-4 text-xs font-mono text-muted-foreground">
                  {new Date(c.created_at).toLocaleDateString()}
                </td>
                <td className="p-4">
                  <div className="font-semibold text-sm">{c.name}</div>
                  <div className="text-xs text-muted-foreground font-mono">{c.email}</div>
                  {c.company && <div className="text-[10px] text-blue-600 dark:text-blue-400 font-bold uppercase mt-1">{c.company}</div>}
                </td>
                <td className="p-4">
                   <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold font-mono uppercase bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
                     {c.area}
                   </span>
                </td>
                <td className="p-4">
                   {c.status === 'converted' ? (
                     <span className="inline-flex items-center gap-1.5 text-green-600 dark:text-green-400 text-xs font-bold uppercase">
                       <CheckCircle2 size={14} /> Convertido
                     </span>
                   ) : (
                     <span className="inline-flex items-center gap-1.5 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase">
                       <Clock size={14} /> Pendiente
                     </span>
                   )}
                </td>
                <td className="p-4 text-right space-x-2">
                   {c.status !== 'converted' && boards.length > 0 && (
                     <div className="inline-flex items-center gap-2">
                        <select 
                          disabled={convertingId === c.id}
                          className="text-[10px] bg-background border border-border rounded px-2 py-1 focus:outline-none"
                          onChange={(e) => e.target.value && convertToTask(c, e.target.value)}
                          value=""
                        >
                          <option value="">Añadir a Tablero...</option>
                          {boards.map(b => (
                            <option key={b.id} value={b.id}>{b.title}</option>
                          ))}
                        </select>
                     </div>
                   )}
                   <button 
                     onClick={() => handleDelete(c.id)}
                     className="p-1.5 text-muted-foreground hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md transition-all"
                   >
                     <Trash2 size={16} />
                   </button>
                </td>
              </tr>
            ))}
            {consultations.length === 0 && (
              <tr>
                <td colSpan={5} className="p-12 text-center text-zinc-500 font-mono text-sm">
                  No se han recibido consultas todavía.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
