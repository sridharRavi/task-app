import { useState } from 'react'
import { Button } from './components/ui/Button';
import { TextInput } from './components/ui/TextInput/TextInput';
import { TextArea } from './components/ui/TextArea';
import { Select } from './components/ui/Select/Select';
import { Badge } from './components/ui/Badge';

function App() {

  return (
    <>
    <div className="p-6 space-x-4">
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Delete</Button>
      <Button size="lg">Large</Button>
      <Button isLoading>Saving...</Button>
    </div>
    <div className="p-6 space-y-4">
      <TextInput label="Title" placeholder="Enter task..." />

      <TextInput
        label="Title"
        error="Title is required"
      />
    </div>
      <TextArea label="Description" placeholder="Enter details..." />

      <TextArea
        label="Description"
        error="Description is required"
      />
    <div className="p-6 space-y-4">
      <Select
        label="Priority"
        options={[
          { label: "Low", value: "low" },
          { label: "Medium", value: "medium" },
          { label: "High", value: "high" },
        ]}
        value="medium"
        onChange={(val) => console.log(val)}
      />

      <Select
        label="Status"
        error="Status required"
        options={[
          { label: "Backlog", value: "backlog" },
          { label: "In Progress", value: "in-progress" },
          { label: "Done", value: "done" },
        ]}
      />
    </div>
    <div className="p-6 flex gap-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Info</Badge>
      <Badge variant="success">Done</Badge>
      <Badge variant="destructive">High</Badge>
    </div>
    </>
  );
}

export default App
