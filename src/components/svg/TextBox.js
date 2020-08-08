import React from "react";

export default function TextBox({ width, height, x, y, text, id }) {
  const textX = Number(x) + Number(width) / 2;
  const textY = Number(y) + Number(height) / 2;
  return (
    <g className="TextBox" id={id}>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill="transparent"
        stroke="black"
      />
      <text x={textX} y={textY} dominantBaseline="middle" textAnchor="middle">
        {text}
      </text>
    </g>
  );
}
