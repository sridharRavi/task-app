import type { Task } from "../../../types/task";
import { TaskColumn } from "./TaskColumn";

interface TaskBoardProps {
  tasks: Task[];
}

export const TaskBoard = ({ tasks }: TaskBoardProps) => {
  const backlogTasks = tasks.filter((t) => t.status === "backlog");
  const inProgressTasks = tasks.filter((t) => t.status === "in-progress");
  const doneTasks = tasks.filter((t) => t.status === "done");

  return (
    <div className="flex gap-6 overflow-x-auto p-4">
      <TaskColumn
        title="Backlog"
        status="backlog"
        tasks={backlogTasks}
      />

      <TaskColumn
        title="In Progress"
        status="in-progress"
        tasks={inProgressTasks}
      />

      <TaskColumn
        title="Done"
        status="done"
        tasks={doneTasks}
      />
    </div>
  );
};