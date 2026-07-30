import React, { useState, useEffect } from "react";
import "./TaskFilter.css";

const STORAGE_KEY = "taskFilterValue";

const TaskFilter = ({ onFilterChange }) => {
  const [filter, setFilter] = useState("all");

  // Cargar filtro desde localStorage
  useEffect(() => {
    const savedFilter = localStorage.getItem(STORAGE_KEY);
    if (savedFilter) {
      setFilter(savedFilter);
      onFilterChange && onFilterChange(savedFilter);
    }
  }, []);

  // Guardar filtro en localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, filter);
  }, [filter]);

  const handleChange = (newFilter) => {
    setFilter(newFilter);
    onFilterChange && onFilterChange(newFilter);
  };

  return (
    <div className="task-filter">
      <h3>Filtrar tareas</h3>

      <div className="filter-buttons">
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => handleChange("all")}
        >
          Todas
        </button>

        <button
          className={filter === "completed" ? "active" : ""}
          onClick={() => handleChange("completed")}
        >
          Completadas
        </button>

        <button
          className={filter === "pending" ? "active" : ""}
          onClick={() => handleChange("pending")}
        >
          Pendientes
        </button>
      </div>
    </div>
  );
};

export default TaskFilter;