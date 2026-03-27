import { useState } from "react";
import { TextInput } from "../../..//components/ui/TextInput";
import { TextArea } from "../../..//components/ui/TextArea";
import { Select } from "../../..//components/ui/Select";
import { Button } from "../../../components/ui/Button";
import type { Task } from "../../../types/task";

interface TaskFormProps {
  initialTask?: Task;
  onSubmit: (task: Task) => void;
  onCancel: () => void;
}

export const TaskForm = ({ onSubmit, onCancel, initialTask }: TaskFormProps) => {
  const [title, setTitle] = useState(initialTask?.title || "");
const [description, setDescription] = useState(initialTask?.description || "");
const [status, setStatus] = useState(initialTask?.status || "backlog");
const [priority, setPriority] = useState(initialTask?.priority || "medium");
const [assignee, setAssignee] = useState(initialTask?.assignee || "");
const [tags, setTags] = useState(
  initialTask?.tags.join(", ") || ""
);

  const [errors, setErrors] = useState<{ title?: string }>({});
  const [isDirty, setIsDirty] = useState(false);

  const handleSubmit = () => {
    if (!title.trim()) {
      setErrors({ title: "Title is required" });
      return;
    }

  const now = new Date().toISOString();

  
  const newTask: Task = {
    id: initialTask?.id || crypto.randomUUID(),
    title,
    description,
    status: status as Task["status"],
    priority: priority as Task["priority"],
    assignee,
    tags: tags.split(",").map((t) => t.trim()).filter(Boolean),
    createdAt: initialTask?.createdAt || now,   
    updatedAt: now,                               
  };
    onSubmit(newTask);
  };

  const handleCancel = () => {
  if (isDirty) {
    const confirmLeave = window.confirm(
      "You have unsaved changes. Are you sure you want to leave?"
    );

    if (!confirmLeave) return;
  }

  onCancel();
};

  return (
    <div className="space-y-4">
      <TextInput
        label="Title"
        value={title}
        onChange={(e) => 
          {
            setTitle(e.target.value);
            setIsDirty(true);
          }}
        error={errors.title}
      />

      <TextArea
        label="Description"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
          setIsDirty(true);
        }}
      />

      <Select
        label="Status"
        value={status}
        onChange={(value) => {
          setStatus(value as Task["status"])
          setIsDirty(true);
        }}
        options={[
          { label: "Backlog", value: "backlog" },
          { label: "In Progress", value: "in-progress" },
          { label: "Done", value: "done" },
        ]}
      />

      <Select
        label="Priority"
        value={priority}
        onChange={(value) => { 
          setPriority(value as Task["priority"]);
          setIsDirty(true);
        }}
        options={[
          { label: "Low", value: "low" },
          { label: "Medium", value: "medium" },
          { label: "High", value: "high" },
        ]}
      />

      <TextInput
        label="Assignee"
        value={assignee}
        onChange={(e) => {
          setAssignee(e.target.value);
          setIsDirty(true);
        }}
      />

      <TextInput
        label="Tags (comma separated)"
        value={tags}
        onChange={(e) => {
          setTags(e.target.value)
          setIsDirty(true);
        }}
      />

      <div className="flex justify-end gap-2">
        <Button variant="secondary" onClick={handleCancel}>
          Cancel
        </Button>

        <Button onClick={handleSubmit}>
          Create Task
        </Button>
      </div>
    </div>
  );
};