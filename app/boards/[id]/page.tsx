import KanbanBoard from "@/components/kanban/kanban-board";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default async function BoardPage({ params }: { params: Promise<{ id: string }> }) {
  const boardId = (await params).id;

  return (
    <div className="relative z-10 flex flex-col pt-24 pb-8 min-h-[90vh]">
      <header className="flex items-center px-6 py-4 mx-6 mb-4 rounded-xl bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 shadow-sm">
        <Link
          href="/dashboard"
          className="flex items-center text-sm font-medium text-zinc-600 hover:text-blue-600 transition-colors mr-4"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Volver
        </Link>
        <h1 className="text-xl font-bold">Tablero Kanban</h1>
      </header>
      
      <main className="flex-1 overflow-hidden">
        <KanbanBoard boardId={boardId} />
      </main>
    </div>
  );
}
