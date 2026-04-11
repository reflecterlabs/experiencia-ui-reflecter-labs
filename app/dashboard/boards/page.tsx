"use client";

import { useEffect, useState } from "react";
import { insforgeClient } from "@/lib/insforge/client";
import { Board } from "@/types/kanban";
import Link from "next/link";
import { PlusCircle, Trash2 } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export default function BoardsPage() {
  const [boards, setBoards] = useState<Board[]>([]);
  const [loading, setLoading] = useState(true);
  const [newBoardTitle, setNewBoardTitle] = useState("");

  useEffect(() => {
    fetchBoards();
  }, []);

  const fetchBoards = async () => {
    const res = await insforgeClient.auth.getCurrentUser();
    const user = res.data?.user || res.data;
    if (res.error || !user || !user.id) {
      window.location.href = "/login";
      return;
    }

    const { data: boardsData, error } = await insforgeClient.database
      .from("kanban_boards")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && boardsData) {
      setBoards(boardsData as Board[]);
    } else if (error) {
      alert("Error al cargar tableros: " + error.message);
    }
    setLoading(false);
  };

  const handleCreateBoard = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newBoardTitle.trim()) return;

    const userResponse = await insforgeClient.auth.getCurrentUser();
    const user = userResponse.data?.user || userResponse.data;
    if (userResponse.error || !user || !user.id) {
      alert("Tu sesión ha expirado. Por favor, reingresa.");
      window.location.href = "/login";
      return;
    }

    const { data: newBoard, error } = await insforgeClient.database
      .from("kanban_boards")
      .insert([
        {
          title: newBoardTitle,
          user_id: user.id,
        },
      ])
      .select();

    if (!error && newBoard) {
      setBoards([newBoard[0] as Board, ...boards]);
      setNewBoardTitle("");
    } else if (error) {
      alert("Error al crear tablero: " + error.message);
    }
  };

  const handleDeleteBoard = async (e: React.MouseEvent, boardId: string) => {
    e.preventDefault();
    e.stopPropagation();

    if (!confirm("¿Estás seguro de que deseas eliminar este tablero? Esta acción es irreversible.")) {
      return;
    }

    const { error } = await insforgeClient.database
      .from("kanban_boards")
      .delete()
      .eq("id", boardId);

    if (!error) {
      setBoards(boards.filter(b => b.id !== boardId));
    } else {
      alert("Error al eliminar el tablero: " + error.message);
    }
  };

  if (loading) {
    return (
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <Skeleton className="h-10 w-64" />
        </div>
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 rounded-xl mb-8">
          <Skeleton className="h-6 w-32 mb-4" />
          <div className="flex gap-4">
            <Skeleton className="h-10 flex-1" />
            <Skeleton className="h-10 w-32" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-32 rounded-xl" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Mis Tableros Kanban</h1>
      </div>

      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 rounded-xl shadow-sm mb-8">
        <h2 className="text-lg font-semibold mb-4">Crear nuevo tablero</h2>
        <form onSubmit={handleCreateBoard} className="flex gap-4">
          <input
            type="text"
            value={newBoardTitle}
            onChange={(e) => setNewBoardTitle(e.target.value)}
            placeholder="Ej: Proyecto Reflecter"
            className="flex-1 px-4 py-2 border rounded-md dark:bg-zinc-800 dark:border-zinc-700 bg-white dark:bg-zinc-950 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="flex items-center px-4 py-2 bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200 rounded-md font-medium transition-colors"
          >
            <PlusCircle className="w-4 h-4 mr-2" />
            Crear Tablero
          </button>
        </form>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {boards.map((board: Board) => (
          <Link
            key={board.id}
            href={`/dashboard/boards/${board.id}`}
            className="group relative block p-6 bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-800 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-md transition-all"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-semibold text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {board.title}
              </h3>
              <button
                onClick={(e) => handleDeleteBoard(e, board.id)}
                className="p-1.5 opacity-0 group-hover:opacity-100 text-zinc-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md transition-all"
                title="Eliminar Tablero"
              >
                <Trash2 size={16} />
              </button>
            </div>
            <p className="text-xs text-zinc-500">
              Creado el {new Date(board.created_at).toLocaleDateString()}
            </p>
          </Link>
        ))}
        {boards.length === 0 && (
          <div className="col-span-full text-center py-12 text-zinc-500 bg-white dark:bg-zinc-900 border-2 border-dashed rounded-xl border-zinc-200 dark:border-zinc-800">
            No tienes tableros aún. Crea uno para comenzar a visualizar tus proyectos.
          </div>
        )}
      </div>
    </div>
  );
}
