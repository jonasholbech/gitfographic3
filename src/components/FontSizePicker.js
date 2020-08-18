import React, { useState } from "react";

export default function FontSizePicker() {
  function handleChange(e) {
    setValue(e.target.value);
    console.log(e.target.value);
    let root = document.documentElement;
    root.style.setProperty("--font-size", e.target.value + "rem");
  }
  const [value, setValue] = useState(1);
  return (
    <div>
      <input
        type="range"
        onChange={handleChange}
        id="fontsize"
        name="fontsize"
        min="0.5"
        step="0.1"
        value={value}
        max="2"
      />
      <label htmlFor="fontsize">Font Size</label>
    </div>
  );
}
