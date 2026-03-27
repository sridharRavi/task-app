import { useEffect, useState } from 'react'
import { Button } from './components/ui/Button';
import type { Task } from './types/task';
import { TaskBoard } from './features/tasks/components/TaskBoard';
import { Modal } from './components/ui/Modal';
import { TaskForm } from './features/tasks/components/TaskForm';
import { loadTasks, saveTasks } from './features/tasks/lib/Storage';

function App() {

  const { tasks: initialTasks, migrated } = loadTasks();
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
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

useEffect(()=> {
  saveTasks(tasks);
}, [tasks])

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
