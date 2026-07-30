import React from "react";
import "./TaskActions.css";

function TaskActions({ tasks, setTasks }) {
  // Marcar todas como completadas
  const completeAll = () => {
    const updatedTasks = tasks.map((task) => ({
      ...task,
      completed: true,
    }));

    setTasks(updatedTasks);
  };

  // Marcar todas como pendientes
  const pendingAll = () => {
    const updatedTasks = tasks.map((task) => ({
      ...task,
      completed: false,
    }));

    setTasks(updatedTasks);
  };

  // Eliminar todas las tareas
  const deleteAll = () => {
    const confirmDelete = window.confirm(
      "¿Deseas eliminar todas las tareas?"
    );

    if (confirmDelete) {
      setTasks([]);
    }
  };

  return (
    <div className="task-actions">
      <button className="complete-all" onClick={completeAll}>
        Completar todas
      </button>

      <button className="pending-all" onClick={pendingAll}>
        Marcar pendientes
      </button>

      <button className="delete-all" onClick={deleteAll}>
        Eliminar todas
      </button>
    </div>
  );
}

export default TaskActions;
