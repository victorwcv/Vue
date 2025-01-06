export interface Project {
  id: string;
  name: string;
  tasks: Task[];
}

export interface Task {
  id: number;
  name: string;
  completedAt: Date | null;
}
