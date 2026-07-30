import React, { useState, useEffect } from "react";
import TaskItem from "./TaskItem";
import "./App.css";

function App() {
  // Cargar tareas desde localStorage
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks
      ? JSON.parse(savedTasks)
      : [
          {
            id: 1,
            text: "Aprender React",
            completed: false,
          },
          {
            id: 2,
            text: "Crear componente TaskItem",
            completed: true,
          },
        ];
  });

  const [newTask, setNewTask] = useState("");

  // Guardar tareas en localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Agregar tarea
  const addTask = () => {
    if (newTask.trim() === "") return;

    const task = {
      id: Date.now(),
      text: newTask,
      completed: false,
    };

    setTasks([...tasks, task]);
    setNewTask("");
  };

  return (
    <div className="App">
      <h1>Lista de Tareas</h1>

      <div className="add-task">
        <input
          type="text"
          placeholder="Nueva tarea"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />

        <button onClick={addTask}>
          Agregar
        </button>
      </div>

      {tasks.length === 0 ? (
        <p>No hay tareas.</p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            tasks={tasks}
            setTasks={setTasks}
          />
        ))
      )}
    </div>
  );
}

export default App;
