export type TaskStatus = "backlog"|"in-progress"|"done";

export type Priority = "low"|"medium"|"high"

export interface Task {
    id: string;
    title: string;
    description: string;
    status: TaskStatus;
    priority: Priority;
    assignee: string;
    tags: string[];
    createdAt: string;
    updatedAt: string;
}

export type TaskInput = Omit<
  Task,
  "id" | "createdAt" | "updatedAt"
>;