import React, { useState } from "react";
import "./TaskForm.css";

const TaskForm = ({ tasks, setTasks }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar que el campo no esté vacío
    if (task.trim() === "") {
      alert("La tarea no puede estar vacía.");
      return;
    }

    const newTask = {
      id: Date.now(),
      text: task.trim(),
      completed: false,
    };

    const updatedTasks = [...tasks, newTask];

    // Actualizar estado
    setTasks(updatedTasks);

    // Guardar en localStorage
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    // Limpiar el campo
    setTask("");
  };

  return (
    <div className="task-form-container">
      <h1>📋 Lista de Tareas</h1>

      <form className="task-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Escribe una nueva tarea..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button type="submit">
          Agregar
        </button>
      </form>
    </div>
  );
};

export default TaskForm;