  import React, { useState, useEffect } from "react";
import "./TaskList.css";

const STORAGE_KEY = "taskList";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // Cargar tareas
  useEffect(() => {
    const storedTasks = localStorage.getItem(STORAGE_KEY);

    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  // Guardar tareas
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

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

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="task-container">
      <h2>Lista de Tareas</h2>

      <div className="task-input">
        <input
          type="text"
          placeholder="Nueva tarea..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />

        <button onClick={addTask}>
          Agregar
        </button>
      </div>

      <ul className="task-list">
        {tasks.length === 0 ? (
          <p>No hay tareas.</p>
        ) : (
          tasks.map((task) => (
            <li key={task.id}>
              <span
                className={task.completed ? "completed" : ""}
                onClick={() => toggleTask(task.id)}
              >
                {task.text}
              </span>

              <button
                className="delete-btn"
                onClick={() => deleteTask(task.id)}
              >
                Eliminar
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default TaskList;