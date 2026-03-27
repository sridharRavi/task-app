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

function App() {

   const [tasks, setTasks] = useState<Task[]>([]);
  const [open, setOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null)

  const handleEdit = (task: Task) => {
    setSelectedTask(task);
    setOpen(true)
  }

  const handleSave = (task: Task) => {
  setTasks((prev) => {
    const exists = prev.find((t) => t.id === task.id);

    if (exists) {
      return prev.map((t) => (t.id === task.id ? task : t));
    }

    return [...prev, task];
  });

  setOpen(false);
  setSelectedTask(null);
};

  return (
    <>
    <div className="p-6">
      <Button onClick={() => setOpen(true)}>New Task</Button>

      <TaskBoard tasks={tasks} onTaskClick={handleEdit} />

      <Modal
        open={open}
        onClose={() => {
        setOpen(false);
        setSelectedTask(null);
      }}
      title={selectedTask ? "Edit Task" : "Create Task"}
      >
    <TaskForm
      initialTask={selectedTask || undefined} 
      onSubmit={handleSave}
      onCancel={() => {
        setOpen(false);
        setSelectedTask(null);
      }}
    />
    </Modal>
    </div>    
    </>
  );
}

export default App
