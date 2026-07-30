 import React from "react";
import "./TaskItem.css";

const TaskItem = ({ task, onToggle, onDelete }) => {
  return (
    <li className="task-item">
      <span
        className={task.completed ? "completed" : ""}
        onClick={() => onToggle(task.id)}
      >
        {task.text}
      </span>

      <button
        className="delete-btn"
        onClick={() => onDelete(task.id)}
      >
        Eliminar
      </button>
    </li>
  );
};

export default TaskItem;