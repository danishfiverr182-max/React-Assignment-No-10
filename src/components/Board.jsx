import Column from "./Column";
import "./Board.css";

// Board receives columns array and handler functions as props
export default function Board({ columns, onAddTask, onDeleteTask }) {
  return (
    <main className="board">
      {columns.map((column) => (
        <Column
          key={column.id}
          id={column.id}
          title={column.title}
          color={column.color}
          tasks={column.tasks}
          onAddTask={onAddTask}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </main>
  );
}
