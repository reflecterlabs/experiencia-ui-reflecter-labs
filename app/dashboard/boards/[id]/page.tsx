import KanbanBoard from "@/components/kanban/kanban-board";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default async function BoardPage({ params }: { params: Promise<{ id: string }> }) {
  const boardId = (await params).id;

  return (
    <div className="flex flex-col h-full">
      <header className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Link
            href="/dashboard/boards"
            className="p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-2xl font-bold tracking-tight">Tablero Kanban</h1>
        </div>
      </header>
      
      <main className="flex-1 min-h-0">
        <KanbanBoard boardId={boardId} />
      </main>
    </div>
  );
}
