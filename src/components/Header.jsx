import "./Header.css";

export default function Header({ totalTasks }) {
  return (
    <header className="header">
      <p className="header-title">Task Board</p>
      <p className="task-counter"><span>{totalTasks}</span> tasks</p>
    </header>
  );
}
