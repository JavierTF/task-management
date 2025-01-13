# Made by
```bash
Ing. Javier Toussent Fis
javiertoussentfis@gmail.com
https://wa.me/5353913581
```

# Task Management Application

A modern task management application built with React, TypeScript, Vite, Axios and Material-UI. This application allows users to manage their tasks with features like creating, completing, and deleting tasks, along with pagination and local storage persistence.

## Features

- Create new tasks
- Mark tasks as complete/incomplete
- Delete tasks
- Responsive Material Design interface
- Local storage persistence
- Pagination support
- REST API integration
- Loading states and error handling
- TypeScript for type safety

## Technology Stack

- React 18+
- TypeScript 4+
- Vite
- Material-UI (MUI)
- Axios for API calls

## Project Structure

```
task-management/
├── src/
│   ├── components/
│   │   ├── AddTaskForm.tsx
│   │   ├── Layout.tsx
│   │   ├── TaskItem.tsx
│   │   └── TaskList.tsx
│   ├── services/
│   │   └── taskService.ts
│   ├── hooks/
│   │   └── useTasks.ts
│   ├── types/
│   │   └── types.ts
│   ├── theme/
│   │   └── theme.ts
│   ├── App.tsx
│   └── main.tsx
├── public/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── vite-env.d.ts
└── README.md
```

## Installation

1. Clone the repository:
```bash
git clone https://github.com/JavierTF/task-management
cd task-management
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run type-check` - Check TypeScript types

## Component Documentation

### AddTaskForm
A form component for creating new tasks.

Props:
- `onAddTask: (task: TaskFormData) => void` - Callback function when a new task is added

### Layout
The main layout component that wraps the application.

Props:
- `children: ReactNode` - Child components to render within the layout

### TaskList
Displays the list of tasks with pagination.

Props:
- `tasks: Task[]` - Array of tasks to display
- `loading: boolean` - Loading state
- `page: number` - Current page number
- `onToggle: (id: number) => void` - Callback when a task is toggled
- `onDelete: (id: number) => void` - Callback when a task is deleted
- `onPageChange: (page: number) => void` - Callback when page changes

### TaskItem
Individual task item component.

Props:
- `task: Task` - Task data to display
- `onToggle: (id: number) => void` - Callback when task is toggled
- `onDelete: (id: number) => void` - Callback when task is deleted

## Custom Hooks