import { TaskCard } from "./TaskCard";
import type { Task, TaskStatus } from "../../../types/task";

interface TaskColumnProps {
  title: string;
  tasks: Task[];
}

export const TaskColumn = ({ title, tasks }: TaskColumnProps) => {
  return (
    <div className="flex-1 min-w-[250px]">
      <h2 className="text-lg font-semibold mb-3">{title}</h2>

      <div className="flex flex-col gap-3">
        {tasks.length === 0 ? (
          <p className="text-sm text-gray-400">No tasks</p>
        ) : (
          tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))
        )}
      </div>
    </div>
  );
};