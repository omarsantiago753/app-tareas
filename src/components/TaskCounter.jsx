import React, { useState, useEffect } from "react";
import "./TaskCounter.css";

const STORAGE_KEY = "taskCounterValue";

const TaskCounter = ({ initialValue = 0, label = "Tareas completadas" }) => {
  const [count, setCount] = useState(initialValue);

  // Cargar valor desde localStorage al iniciar
  useEffect(() => {
    const storedValue = localStorage.getItem(STORAGE_KEY);
    if (storedValue !== null) {
      setCount(parseInt(storedValue, 10));
    }
  }, []);

  // Guardar en localStorage cada vez que cambia
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, count);
  }, [count]);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => (prev > 0 ? prev - 1 : 0));
  const reset = () => setCount(0);

  return (
    <div className="task-counter">
      <h2>{label}</h2>
      <p className="count">{count}</p>

      <div className="buttons">
        <button onClick={increment}>➕</button>
        <button onClick={decrement}>➖</button>
        <button onClick={reset}>🔄</button>
      </div>
    </div>
  );
};

export default TaskCounter;