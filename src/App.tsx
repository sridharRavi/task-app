import { useState } from 'react'
import { Button } from './components/ui/Button';
import { TextInput } from './components/ui/TextInput/TextInput';

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
    </>
  );
}

export default App
