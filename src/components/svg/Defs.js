import React from "react";

export default function Defs() {
  return (
    <defs>
      <marker
        id="arrowhead"
        markerWidth="10"
        markerHeight="7"
        refX="8"
        refY="3.5"
        orient="auto"
      >
        <polygon points="0 0, 10 3.5, 0 7" />
      </marker>
    </defs>
  );
}
