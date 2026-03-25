import type { Task } from "./task";

export interface TaskStorageV1 {
    SchemaVersion: 1;
    tasks: Task[];
}

export interface TaskStorageV2 {
    SchemaVersion: 2;
    tasks: Task[];
    lastUpdated: string;
}

export type TaskStorage = TaskStorageV1 | TaskStorageV2;
