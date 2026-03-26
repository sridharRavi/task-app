import { useState } from "react";
import { TextInput } from "../../..//components/ui/TextInput";
import { TextArea } from "../../..//components/ui/TextArea";
import { Select } from "../../..//components/ui/Select";
import { Button } from "../../../components/ui/Button";
import type { Task } from "../../../types/task";

interface TaskFormProps {
  onSubmit: (task: Task) => void;
  onCancel: () => void;
}

export const TaskForm = ({ onSubmit, onCancel }: TaskFormProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("backlog");
  const [priority, setPriority] = useState("medium");
  const [assignee, setAssignee] = useState("");
  const [tags, setTags] = useState("");

  const [errors, setErrors] = useState<{ title?: string }>({});

  const handleSubmit = () => {
    if (!title.trim()) {
      setErrors({ title: "Title is required" });
      return;
    }

    const now = new Date().toISOString();

    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      description,
      status: status as Task["status"],
      priority: priority as Task["priority"],
      assignee,
      tags: tags.split(",").map((t) => t.trim()).filter(Boolean),
      createdAt: now,
      updatedAt: now,
    };

    onSubmit(newTask);
  };

  return (
    <div className="space-y-4">
      <TextInput
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        error={errors.title}
      />

      <TextArea
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <Select
        label="Status"
        value={status}
        onChange={setStatus}
        options={[
          { label: "Backlog", value: "backlog" },
          { label: "In Progress", value: "in-progress" },
          { label: "Done", value: "done" },
        ]}
      />

      <Select
        label="Priority"
        value={priority}
        onChange={setPriority}
        options={[
          { label: "Low", value: "low" },
          { label: "Medium", value: "medium" },
          { label: "High", value: "high" },
        ]}
      />

      <TextInput
        label="Assignee"
        value={assignee}
        onChange={(e) => setAssignee(e.target.value)}
      />

      <TextInput
        label="Tags (comma separated)"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />

      <div className="flex justify-end gap-2">
        <Button variant="secondary" onClick={onCancel}>
          Cancel
        </Button>

        <Button onClick={handleSubmit}>
          Create Task
        </Button>
      </div>
    </div>
  );
};