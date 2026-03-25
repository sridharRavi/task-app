import type { TaskStatus, Priority } from "../types/task";

export const TASK_STATUSES: TaskStatus[] = [
    "backlog",
    "in-progress",
    "done",
]

export const PRIORITIES: Priority[] = [
    "low",
    "medium",
    "high",
]