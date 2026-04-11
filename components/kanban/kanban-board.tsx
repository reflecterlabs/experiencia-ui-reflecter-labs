"use client";

import { useEffect, useState } from "react";
import { insforgeClient } from "@/lib/insforge/client";
import { Task, TaskStatus } from "@/types/kanban";
import TaskCard from "./task-card";
import TaskModal from "./task-modal";
import { Plus } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export default function KanbanBoard({ boardId }: { boardId: string }) {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [defaultStatusForNew, setDefaultStatusForNew] = useState<TaskStatus>("Creada");

  const COLUMNS: TaskStatus[] = ["Creada", "Pendiente", "En progreso", "Completada", "Bloqueada"];

  useEffect(() => {
    fetchTasks();

    const setupRealtime = async () => {
      try {
        await insforgeClient.realtime.connect();
        await insforgeClient.realtime.subscribe(`board:${boardId}`);

        // Listen for standard generic broadcasts coming from the target board
        insforgeClient.realtime.on("broadcast", (msg: any) => {
          if (msg.channel !== `board:${boardId}`) return;
          
          const event = msg.event || msg.payload?.event;
          const data = msg.payload?.payload || msg.payload;

          if (event === "INSERT_task") {
            setTasks((prev: Task[]) => [...prev, data as Task]);
          } else if (event === "UPDATE_task") {
            setTasks((prev: Task[]) => prev.map((t: Task) => t.id === data.id ? data as Task : t));
          } else if (event === "DELETE_task") {
            setTasks((prev: Task[]) => prev.filter((t: Task) => t.id !== data.id));
          }
        });
        
        // Listen for direct named events just in case they are emitted independently
        insforgeClient.realtime.on("INSERT_task", (msg: any) => {
           if (msg.channel === `board:${boardId}`) setTasks((prev: Task[]) => [...prev, msg.payload as Task]);
        });
        insforgeClient.realtime.on("UPDATE_task", (msg: any) => {
           if (msg.channel === `board:${boardId}`) setTasks((prev: Task[]) => prev.map((t: Task) => t.id === msg.payload.id ? msg.payload as Task : t));
        });
        insforgeClient.realtime.on("DELETE_task", (msg: any) => {
           if (msg.channel === `board:${boardId}`) setTasks((prev: Task[]) => prev.filter((t: Task) => t.id !== msg.payload.id));
        });
        
      } catch (e) {
        console.error("Realtime SDK Error:", e);
      }
    };

    setupRealtime();

    return () => {
      insforgeClient.realtime.unsubscribe(`board:${boardId}`);
    };
  }, [boardId]);

  const fetchTasks = async () => {
    const { data, error } = await insforgeClient.database
      .from("kanban_tasks")
      .select("*")
      .eq("board_id", boardId)
      .order("created_at", { ascending: true });

    if (!error && data) {
      setTasks(data as Task[]);
    }
    setLoading(false);
  };

  const openNewTaskModal = (status: TaskStatus) => {
    setDefaultStatusForNew(status);
    setSelectedTask(null);
    setIsModalOpen(true);
  };

  const openEditTaskModal = (task: Task) => {
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  if (loading) {
    return (
      <div className="flex h-[calc(100vh-65px)] w-full p-6 space-x-6 overflow-x-auto bg-transparent items-start">
        {COLUMNS.map((col) => (
          <div key={col} className="flex flex-col min-w-[300px] max-w-[300px] bg-zinc-100/50 dark:bg-zinc-900/30 rounded-xl p-4 space-y-4">
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-24 w-full" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex h-[calc(100vh-65px)] w-full p-6 space-x-6 overflow-x-auto bg-transparent items-start">
      {COLUMNS.map((colStatus) => {
        const columnTasks = tasks.filter((t: Task) => t.status === colStatus);
        
        return (
          <div key={colStatus} className="flex flex-col min-w-[300px] max-w-[300px] max-h-full bg-zinc-100 dark:bg-zinc-900/50 rounded-xl">
            <div className="p-4 flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800">
              <h3 className="font-semibold text-sm">{colStatus} <span className="ml-2 bg-zinc-200 dark:bg-zinc-800 text-xs px-2 py-1 rounded-full">{columnTasks.length}</span></h3>
              <button onClick={() => openNewTaskModal(colStatus)} className="p-1 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-md transition-colors">
                <Plus className="w-4 h-4 text-zinc-500" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-2 space-y-2">
              {columnTasks.map((task: Task) => (
                <TaskCard key={task.id} task={task} onClick={() => openEditTaskModal(task)} />
              ))}
              {columnTasks.length === 0 && <div className="h-4"></div>}
            </div>
          </div>
        );
      })}

      {(isModalOpen) && (
        <TaskModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          boardId={boardId} 
          existingTask={selectedTask} 
          defaultStatus={defaultStatusForNew}
          onSuccess={fetchTasks}
        />
      )}
    </div>
  );
}
