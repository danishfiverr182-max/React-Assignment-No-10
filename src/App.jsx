import { useState } from "react";
import Header from "./components/Header";
import Board from "./components/Board";
import "./App.css";

const initialColumns = [
  {
    id: "todo",
    title: "To Do",
    color: "#6c63ff",
    tasks: [
      { id: 1, title: "Design Login Page", description: "Create a responsive login UI with form validation", priority: "High", assignee: "Ayesha" },
      { id: 2, title: "Set Up Database", description: "Configure PostgreSQL and define initial schema", priority: "High", assignee: "Bilal" },
      { id: 3, title: "Write API Docs", description: "Document all REST endpoints using Swagger", priority: "Low", assignee: "Usman" },
    ],
  },
  {
    id: "inprogress",
    title: "In Progress",
    color: "#f59e0b",
    tasks: [
      { id: 4, title: "Build Navbar Component", description: "Reusable nav with mobile hamburger menu support", priority: "Medium", assignee: "Sara" },
      { id: 5, title: "Fix Cart Bug", description: "Items not persisting on page refresh in the cart", priority: "High", assignee: "Ali" },
    ],
  },
  {
    id: "done",
    title: "Done",
    color: "#10b981",
    tasks: [
      { id: 6, title: "Project Setup", description: "Initialized Vite + React with folder structure", priority: "Low", assignee: "Danish" },
      { id: 7, title: "Create Color Palette", description: "Defined brand colors and typography system", priority: "Medium", assignee: "Fatima" },
    ],
  },
];

let nextId = 8;

export default function App() {
  const [columns, setColumns] = useState(initialColumns);

  function handleAddTask(columnId, taskTitle) {
    const newTask = {
      id: nextId++,
      title: taskTitle,
      description: "New task — add details here",
      priority: "Medium",
      assignee: "Unassigned",
    };
    setColumns((prev) =>
      prev.map((col) =>
        col.id === columnId ? { ...col, tasks: [...col.tasks, newTask] } : col
      )
    );
  }

  function handleDeleteTask(columnId, taskId) {
    setColumns((prev) =>
      prev.map((col) =>
        col.id === columnId
          ? { ...col, tasks: col.tasks.filter((t) => t.id !== taskId) }
          : col
      )
    );
  }

  return (
    <div className="app">
      <Header totalTasks={columns.reduce((sum, c) => sum + c.tasks.length, 0)} />
      <Board columns={columns} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} />
    </div>
  );
}
