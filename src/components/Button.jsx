import React, { useState } from "react";
import "./Button.css";

const Button = ({ tasks, setTasks }) => {
  const [task, setTask] = useState("");

  const addTask = (e) => {
    e.preventDefault();

    // Validar que el campo no esté vacío
    if (task.trim() === "") {
      alert("Por favor, ingresa una tarea.");
      return;
    }

    const newTask = {
      id: Date.now(),
      text: task.trim(),
      completed: false,
    };

    const updatedTasks = [...tasks, newTask];

    // Actualizar el estado
    setTasks(updatedTasks);

    // Guardar en localStorage
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    // Limpiar el campo
    setTask("");
  };

  return (
    <div className="button-container">
      <header className="header">
        <h1>📋 Lista de Tareas</h1>
      </header>

      <form className="task-form" onSubmit={addTask}>
        <input
          type="text"
          placeholder="Escribe una nueva tarea..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button type="submit" className="btn-add">
          Agregar
        </button>
      </form>
    </div>
  );
};

export default Button;