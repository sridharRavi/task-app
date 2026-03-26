import { useState } from 'react'
import { Button } from './components/ui/Button';
import { TextInput } from './components/ui/TextInput/TextInput';
import { TextArea } from './components/ui/TextArea';
import { Select } from './components/ui/Select/Select';
import { Badge } from './components/ui/Badge';
import { Card, CardContent, CardFooter, CardHeader } from './components/ui/Card';
import { TaskCard } from "./features/tasks/components/TaskCard";
import type { Task } from './types/task';
import { TaskBoard } from './features/tasks/components/TaskBoard';
import { Modal } from './components/ui/Modal';
import { TaskForm } from './features/tasks/components/TaskForm';

const tasks: Task[] = [
  {
    id: "1",
    title: "Setup project",
    description: "Initialize Vite + React",
    status: "backlog",
    priority: "high",
    assignee: "Sridhar",
    tags: ["setup"],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Build UI components",
    description: "Button, Input, Select",
    status: "in-progress",
    priority: "medium",
    assignee: "Sridhar",
    tags: ["frontend"],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "3",
    title: "Finish board UI",
    description: "TaskBoard + TaskCard",
    status: "done",
    priority: "low",
    assignee: "Sridhar",
    tags: ["ui"],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

function App() {

   const [tasks, setTasks] = useState<Task[]>([]);
  const [open, setOpen] = useState(false);

  const handleCreate = (task: Task) => {
    setTasks((prev) => [...prev, task]);
    setOpen(false);
  };

  return (
    <>
    <div className="p-6">
      <Button onClick={() => setOpen(true)}>New Task</Button>

      <TaskBoard tasks={tasks} />

      <Modal open={open} onClose={() => setOpen(false)} title="Create Task">
        <TaskForm
          onSubmit={handleCreate}
          onCancel={() => setOpen(false)}
        />
      </Modal>
    </div>    
    </>
  );
}

export default App
