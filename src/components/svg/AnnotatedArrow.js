import React from "react";
import Arrow from "./Arrow";
export default function AnnotatedArrow({
  x1,
  y1,
  x2,
  y2,
  text,
  offsetX = 0,
  offsetY = 0,
  id,
}) {
  return (
    <g className="AnnotatedArrow" id={id}>
      <Arrow x1={x1} y1={y1} x2={x2} y2={y2} />
      <text
        fill="blue"
        x={(x1 + x2) / 2 + offsetX}
        y={(y1 + y2) / 2 + offsetY}
        dominantBaseline="middle"
        textAnchor="middle"
      >
        {text}
      </text>
    </g>
  );
}
