"use client";

import { Task } from "@/types/kanban";

export default function TaskCard({ task, onClick }: { task: Task; onClick: () => void }) {
  return (
    <div 
      onClick={onClick}
      className="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-700 cursor-pointer hover:border-blue-500 dark:hover:border-blue-500 transition-colors group"
    >
      <h4 className="font-medium text-sm text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {task.title}
      </h4>
      {task.description && (
        <p className="text-xs text-zinc-500 mt-2 line-clamp-2">
          {task.description}
        </p>
      )}
    </div>
  );
}
