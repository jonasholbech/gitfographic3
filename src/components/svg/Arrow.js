import React from "react";

export default function Arrow({ x1, y1, x2, y2 }) {
  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke="#000"
      strokeWidth="2"
      markerEnd="url(#arrowhead)"
    />
  );
}
