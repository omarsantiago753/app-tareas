import React, { useEffect } from "react";
import Footer from "./components/Footer";

function App() {

  useEffect(() => {
    // Datos de ejemplo
    const tasks = [
      {
        id: 1,
        text: "Aprender React",
        completed: true,
      },
      {
        id: 2,
        text: "Practicar JavaScript",
        completed: false,
      },
      {
        id: 3,
        text: "Crear aplicación de tareas",
        completed: false,
      },
    ];

    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, []);

  return (
    <div>
      <h1>Mi Aplicación de Tareas</h1>

      {/* Aquí iría el resto de la aplicación */}

      <Footer />
    </div>
  );
}

export default App;