import React from "react";

export default function Description({ x, y, text }) {
  if (!text) {
    return <g transform={`translate(${x} ${y})`}></g>;
  }
  return (
    <g id="Description" transform={`translate(${x} ${y})`}>
      <text x={x} y={y}>
        {text.split("\n").map((t, i) => {
          return (
            <tspan key={i} x={0} dy="1.2em">
              {t}
            </tspan>
          );
        })}
      </text>
    </g>
  );
}
