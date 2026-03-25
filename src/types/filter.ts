import type { TaskStatus, Priority } from "./task";

export interface TaskFilters {
    status: TaskStatus[];
    priority?: Priority;
    search?: string;
}

export type SortBy = "createdAt" | "updatedAt" | "priority";

export interface TaskSort {
    sortBy: SortBy;
    order: "asc" | "desc";
}
