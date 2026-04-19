import { useState } from "react";
import TaskCard from "./TaskCard";
import "./Column.css";

// Column receives id, title, color, tasks array, and handler functions via props
export default function Column({ id, title, color, tasks, onAddTask, onDeleteTask }) {
  const [inputValue, setInputValue] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  // Handle the form submission to add a new task
  function handleAdd() {
    const trimmed = inputValue.trim();
    if (trimmed === "") return;
    onAddTask(id, trimmed);   // call parent handler with columnId + task title
    setInputValue("");
    setIsAdding(false);
  }

  // Allow pressing Enter to submit the new task
  function handleKeyDown(e) {
    if (e.key === "Enter") handleAdd();
    if (e.key === "Escape") {
      setIsAdding(false);
      setInputValue("");
    }
  }

  return (
    <div className="column">
      {/* Column header with color accent and task counter */}
      <div className="column-header" style={{ borderTopColor: color }}>
        <div className="column-title-row">
          <h2 className="column-title">{title}</h2>
          <span className="column-count" style={{ backgroundColor: color }}>
            {tasks.length}
          </span>
        </div>
      </div>

      {/* Render task cards from the tasks array */}
      <div className="column-tasks">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            title={task.title}
            description={task.description}
            priority={task.priority}
            onDelete={() => onDeleteTask(id, task.id)}
          >
            {/* Children prop usage — renders in card footer */}
            Assigned to: <strong>{task.assignee}</strong>
          </TaskCard>
        ))}
      </div>

      {/* Add Task UI */}
      <div className="column-footer">
        {isAdding ? (
          <div className="add-task-form">
            <input
              className="add-task-input"
              type="text"
              placeholder="Enter task title..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}  // controlled input
              onKeyDown={handleKeyDown}
              autoFocus
            />
            <div className="add-task-actions">
              <button className="btn-confirm" onClick={handleAdd}>Add</button>
              <button
                className="btn-cancel"
                onClick={() => { setIsAdding(false); setInputValue(""); }}
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <button
            className="add-task-btn"
            style={{ color: color }}
            onClick={() => setIsAdding(true)}
          >
            + Add Task
          </button>
        )}
      </div>
    </div>
  );
}
