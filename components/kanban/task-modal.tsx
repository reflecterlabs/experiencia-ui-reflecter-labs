"use client";

import { useState } from "react";
import { Task, TaskStatus } from "@/types/kanban";
import { insforgeClient } from "@/lib/insforge/client";
import { Sparkles, Trash2, X } from "lucide-react";

export default function TaskModal({ 
  isOpen, 
  onClose, 
  boardId, 
  existingTask, 
  defaultStatus,
  onSuccess
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  boardId: string; 
  existingTask: Task | null; 
  defaultStatus: TaskStatus;
  onSuccess: () => void;
}) {
  const [title, setTitle] = useState(existingTask?.title || "");
  const [description, setDescription] = useState(existingTask?.description || "");
  const [status, setStatus] = useState<TaskStatus>(existingTask?.status || defaultStatus);
  const [loading, setLoading] = useState(false);
  const [aiLoading, setAiLoading] = useState(false);

  const COLUMNS: TaskStatus[] = ["Creada", "Pendiente", "En progreso", "Completada", "Bloqueada"];

  const generateAI = async () => {
    if (!title.trim()) return alert("Ingresa un título para generar una descripción.");
    setAiLoading(true);
    
    try {
      const resp = await insforgeClient.ai.chat.completions.create({
        model: "gpt5-mini",
        messages: [{ role: "user", content: `Escribe una descripción breve, concisa y orientada a la acción para una tarea de Kanban llamada "${title}". Solo incluye el texto de la descripción, sin introducciones ni comillas.` }]
      });
      
      const content = (resp.data as any)?.choices?.[0]?.message?.content;
      if (content) {
        setDescription(content);
      }
    } catch (e) {
      console.error(e);
      alert("Hubo un error al tratar de generar la descripción en IA");
    } finally {
      setAiLoading(false);
    }
  };

  const handleSave = async () => {
    if (!title.trim()) return;
    setLoading(true);

    if (existingTask) {
      await insforgeClient.database.from("kanban_tasks").update({
        title,
        description,
        status
      }).eq("id", existingTask.id);
    } else {
      await insforgeClient.database.from("kanban_tasks").insert([{
        board_id: boardId,
        title,
        description,
        status
      }]);
    }
    
    onSuccess();
    setLoading(false);
    onClose();
  };

  const handleDelete = async () => {
    if (!existingTask) return;
    if (!confirm("¿Seguro que deseas eliminar esta tarea permanentemente?")) return;
    setLoading(true);
    
    await insforgeClient.database.from("kanban_tasks").delete().eq("id", existingTask.id);
    onSuccess();
    setLoading(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white dark:bg-zinc-900 w-full max-w-lg rounded-xl shadow-xl overflow-hidden flex flex-col max-h-[90vh]">
        <div className="flex justify-between items-center p-4 border-b border-zinc-200 dark:border-zinc-800">
          <h2 className="text-lg font-bold">{existingTask ? "Editar Tarea" : "Nueva Tarea"}</h2>
          <button onClick={onClose} className="text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 outline-none">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Título</label>
            <input 
              value={title} 
              onChange={e => setTitle(e.target.value)} 
              className="w-full px-3 py-2 border rounded-md dark:bg-zinc-800 dark:border-zinc-700 outline-none"
              placeholder="Ej: Integrar pasarela de pago"
            />
          </div>
          
          <div className="space-y-2 group">
            <div className="flex justify-between items-end">
              <label className="text-sm font-medium">Descripción</label>
              <button 
                onClick={generateAI}
                disabled={aiLoading}
                className="flex items-center text-xs font-semibold px-3 py-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-md transition-all shadow-sm disabled:opacity-50"
              >
                <Sparkles className="w-3 h-3 mr-1.5" />
                {aiLoading ? "Generando..." : "Generar IA"}
              </button>
            </div>
            <textarea 
              value={description} 
              onChange={e => setDescription(e.target.value)} 
              className="w-full px-3 py-2 min-h-[120px] border rounded-md dark:bg-zinc-800 dark:border-zinc-700 resize-none outline-none"
              placeholder="Elabora mayores detalles de la tarea aquí."
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Estado actual</label>
            <select 
              value={status} 
              onChange={e => setStatus(e.target.value as TaskStatus)} 
              className="w-full px-3 py-2 border rounded-md dark:bg-zinc-800 dark:border-zinc-700 bg-transparent outline-none cursor-pointer"
            >
              {COLUMNS.map(col => (
                <option key={col} value={col} className="dark:bg-zinc-800">{col}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="p-4 border-t border-zinc-200 dark:border-zinc-800 flex justify-between items-center bg-zinc-50 dark:bg-zinc-950/50">
          {existingTask ? (
            <button 
              onClick={handleDelete}
              disabled={loading}
              className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md transition-colors"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          ) : <div></div>}
          
          <div className="flex gap-2">
            <button 
              onClick={onClose}
              disabled={loading}
              className="px-4 py-2 text-sm font-semibold text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md transition-colors"
            >
              Cancelar
            </button>
            <button 
              onClick={handleSave}
              disabled={loading || !title.trim()}
              className="px-5 py-2 text-sm font-semibold bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200 rounded-md transition-colors disabled:opacity-50"
            >
              Guardar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
