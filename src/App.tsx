import { useState } from 'react'
import { Button } from './components/ui/Button';
import { TextInput } from './components/ui/TextInput/TextInput';
import { TextArea } from './components/ui/TextArea';
import { Select } from './components/ui/Select/Select';
import { Badge } from './components/ui/Badge';
import { Card, CardContent, CardFooter, CardHeader } from './components/ui/Card';
import { TaskCard } from "./features/tasks/components/TaskCard";
import type { Task } from './types/task';


const mockTask: Task = {
  id: "1",
  title: "Build UI components",
  description: "Create reusable components for the app UI system.",
  status: "backlog",
  priority: "high",
  assignee: "Sridhar",
  tags: ["frontend", "react"],
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

function App() {

  return (
    <>
    <div className="p-6 max-w-sm">
      <TaskCard task={mockTask} />
    </div>    
    </>
  );
}

export default App
