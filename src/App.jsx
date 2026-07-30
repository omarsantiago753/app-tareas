import React, { useEffect, useState } from "react";
import Button from "./components/Button";

function App() {
  const [tasks, setTasks] = useState([]);

  // Cargar tareas desde localStorage
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  return (
    <div className="App">
      <Button tasks={tasks} setTasks={setTasks} />

      <h2>Mis tareas</h2>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;