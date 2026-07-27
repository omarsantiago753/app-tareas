import React from "react";
import "./TaskItem.css";

function TaskItem({ task, tasks, setTasks }) {
  // Cambiar estado de la tarea
  const toggleComplete = () => {
    const updatedTasks = tasks.map((t) =>
      t.id === task.id
        ? { ...t, completed: !t.completed }
        : t
    );

    setTasks(updatedTasks);
  };

  // Eliminar tarea
  const deleteTask = () => {
    const updatedTasks = tasks.filter((t) => t.id !== task.id);
    setTasks(updatedTasks);
  };

  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <span>{task.text}</span>

      <div className="buttons">
        <button className="btn-complete" onClick={toggleComplete}>
          {task.completed ? "Pendiente" : "Completar"}
        </button>

        <button className="btn-delete" onClick={deleteTask}>
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
