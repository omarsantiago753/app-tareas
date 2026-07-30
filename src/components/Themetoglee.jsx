import React, { useEffect, useState } from "react";
import "./ThemeToggle.css";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  // Aplicar el tema cuando cambie
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Cambiar entre claro y oscuro
  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === "light" ? "dark" : "light"
    );
  };

  return (
    <div className="theme-toggle">
      <button onClick={toggleTheme} className="theme-btn">
        {theme === "light" ? "🌙 Modo Oscuro" : "☀️ Modo Claro"}
      </button>
    </div>
  );
};

export default ThemeToggle;