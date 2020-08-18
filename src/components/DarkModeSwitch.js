import React, { useState } from "react";

export default function DarkMode() {
  const [darkMode, setDarkMode] = useState(false);
  function handleChange(e) {
    setDarkMode(e.target.checked);
    if (e.target.checked) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }
  return (
    <label className="switch">
      <input type="checkbox" checked={darkMode} onChange={handleChange} />
      <span className="slider round"></span>
    </label>
  );
}
