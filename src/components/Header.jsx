import React, { useState } from "react";
import "./Header.css";

const Header = ({ tasks, setTasks }) => {
  const [task, setTask] = useState("");

  const addTask = (e) => {
    e.preventDefault();

    // Validar que no esté vacío
    if (task.trim() === "") {
      alert("Por favor ingresa una tarea.");
      return;
    }

    const newTask = {
      id: Date.now(),
      text: task.trim(),
      completed: false,
    };

    const updatedTasks = [...tasks, newTask];

    setTasks(updatedTasks);

    // Guardar en localStorage
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    // Limpiar el input
    setTask("");
  };

  return (
    <header className="header">
      <h1>📋 Lista de Tareas</h1>

      <form className="task-form" onSubmit={addTask}>
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
    </header>
  );
};

export default Header;