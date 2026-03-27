# Team Workflow Board (React + TypeScript)

A mini **Trello/Jira-style task management app** built with React and TypeScript.
This project demonstrates component design, state management, UI architecture, and persistence — all without a backend.

## Features

### Task Board

* Tasks grouped into:

  * **Backlog**
  * **In Progress**
  * **Done**
* Responsive column layout
* Clean card-based UI

### Task Management

* Create new tasks via modal form
* Edit existing tasks (click on any task card)
* Form validation (required fields, etc.)
* Dirty state protection (warns before losing unsaved changes)

### Component Library (Reusable UI System)

Located in: `src/components/ui`

Includes:

* `Button` (variants + sizes)
* `TextInput`, `TextArea`
* `Select`
* `Badge` (tags, priority)
* `Card` (composable layout)
* `Modal`
* (Extensible for Toast/Alert)

Built with **composition-first design** and consistent styling.

### Persistence (Local Storage)

* Tasks saved automatically in browser storage
* Data persists across refreshes
* Versioned schema with **migration support**

### Architecture Highlights

* **Domain-driven components** (`TaskCard`, `TaskBoard`)
* **Reusable UI primitives**
* **Controlled forms**
* **Type-safe models with TypeScript**
* **Separation of concerns**:

  * UI → components/ui
  * Features → features/tasks
  * Logic → lib/storage


## Project Structure

```bash
src/
  components/
    ui/
      Button/
      TextInput/
      TextArea/
      Select/
      Badge/
      Card/
      Modal/

  features/
    tasks/
      components/
        TaskBoard.tsx
        TaskColumn.tsx
        TaskCard.tsx
        TaskForm.tsx
      lib/
        storage.ts

  types/
    task.ts

  App.tsx
  main.tsx
```

---

## Task Model

```ts
type Task = {
  id: string;
  title: string;
  description: string;
  status: "backlog" | "in-progress" | "done";
  priority: "low" | "medium" | "high";
  assignee: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
};
```

---

## Getting Started

### Clone the repository

```bash
git clone https://github.com/your-username/task-app.git
cd task-app
```

---

### Install dependencies

```bash
npm install
```

---

### Run the development server

```bash
npm run dev
```

---

### Open in browser

```
http://localhost:5173
```

## Styling

* Built with **Tailwind CSS**
* Utility-first approach
* Consistent spacing, typography, and colors

##  Key Concepts Demonstrated

* React component composition
* TypeScript strict typing (union types, props)
* Controlled vs uncontrolled components
* State lifting and prop drilling
* LocalStorage persistence patterns
* Schema versioning + migration
* UX patterns (modals, dirty state warnings)


## Author

Built as part of a frontend system design + React architecture exercise.

## License

MIT License

