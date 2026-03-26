import { useState } from 'react'
import { Button } from './components/ui/Button';

function App() {

  return (
    <div className="p-6 space-x-4">
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Delete</Button>
      <Button size="lg">Large</Button>
      <Button isLoading>Saving...</Button>
    </div>
  );
}

export default App
