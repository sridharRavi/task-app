import type { Task } from "../../../types/task";
import { TaskColumn } from "./TaskColumn";

interface TaskBoardProps {
  tasks: Task[];
  onTaskClick?: (task: Task) => void;
}

export const TaskBoard = ({ tasks, onTaskClick }: TaskBoardProps) => {
  const backlogTasks = tasks.filter((t) => t.status === "backlog");
  const inProgressTasks = tasks.filter((t) => t.status === "in-progress");
  const doneTasks = tasks.filter((t) => t.status === "done");

  return (
    <div className="flex gap-6 overflow-x-auto p-4">
      <TaskColumn
        title="Backlog"
        onTaskClick={onTaskClick}
        tasks={backlogTasks}
      />

      <TaskColumn
        title="In Progress"
        tasks={inProgressTasks}
        onTaskClick={onTaskClick}
      />

      <TaskColumn
        title="Done"
        tasks={doneTasks}
        onTaskClick={onTaskClick}
      />
    </div>
  );
};