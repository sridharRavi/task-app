import type { Task } from "../../../types/task";

const STORAGE_KEY = "task-app-data";
const CURRENT_VERSION = 2;

interface StoredDataV1 {
  tasks: Task[];
}

interface StoredDataV2 {
  version: number;
  tasks: Task[];
}

export const loadTasks = (): {
  tasks: Task[];
  migrated: boolean;
} => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);

    if (!raw) {
      return { tasks: [], migrated: false };
    }

    const parsed = JSON.parse(raw);

    if (!parsed.version) {
      const oldData = parsed as StoredDataV1;

      const migratedData: StoredDataV2 = {
        version: CURRENT_VERSION,
        tasks: oldData.tasks.map((task) => ({
          ...task,
          priority: task.priority || "medium",
        })),
      };

      localStorage.setItem(STORAGE_KEY, JSON.stringify(migratedData));

      return { tasks: migratedData.tasks, migrated: true };
    }

    return { tasks: parsed.tasks, migrated: false };

  } catch (err) {
    console.error("Storage load failed", err);
    return { tasks: [], migrated: false };
  }
};

export const saveTasks = (tasks: Task[]) => {
  try {
    const data: StoredDataV2 = {
      version: CURRENT_VERSION,
      tasks,
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (err) {
    console.error("Storage save failed", err);
  }
};