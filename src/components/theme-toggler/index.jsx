import React from "react";
import useLocalStorage from "./useLocalStorage";
import "./theme.css";

const ThemeToggler = () => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  function handleThemeToggle() {
    setTheme(theme === "light" ? "dark" : "light");
  }
  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <h1>{theme} mode</h1>
        <button type="button" onClick={handleThemeToggle}>
          Toggle Theme
        </button>
      </div>
    </div>
  );
};

export default ThemeToggler;
