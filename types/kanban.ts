export type Board = {
  id: string;
  title: string;
  user_id: string;
  created_at: string;
};

export type TaskStatus = 'Creada' | 'Pendiente' | 'En progreso' | 'Completada' | 'Bloqueada';

export type Task = {
  id: string;
  board_id: string;
  title: string;
  description: string;
  status: TaskStatus;
  created_at: string;
};
