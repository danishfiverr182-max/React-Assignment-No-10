import "./TaskCard.css";

const priorityClass = {
  High: "priority-high",
  Medium: "priority-medium",
  Low: "priority-low",
};

export default function TaskCard({ title, description, priority, onDelete, children }) {
  return (
    <div className="task-card">
      <div className="task-card-top">
        <span className={`priority-badge ${priorityClass[priority] || "priority-medium"}`}>
          {priority}
        </span>
        <button className="delete-btn" onClick={onDelete}>✕</button>
      </div>
      <p className="task-title">{title}</p>
      <p className="task-description">{description}</p>
      {children && <div className="task-footer">{children}</div>}
    </div>
  );
}
