import React from "react";

export default function AnnotatedPolyArrow({
  points,
  text,
  offsetX = 0,
  offsetY = 0,
  id,
}) {
  const pointsAsArray = points.split(" ");
  const first = pointsAsArray[0].split(",");
  const last = pointsAsArray[pointsAsArray.length - 1].split(",");
  first[0] = Number(first[0]);
  first[1] = Number(first[1]);
  last[0] = Number(last[0]);
  last[1] = Number(last[1]);
  return (
    <g className="AnnotatedPolyArrow" id={id}>
      <polyline
        points={points}
        strokeWidth={2}
        fill="none"
        markerEnd="url(#arrowhead)"
        stroke="#000"
      />
      <text
        fill="blue"
        x={(first[0] + last[0]) / 2 + offsetX}
        y={(first[1] + last[1]) / 2 + offsetY}
        dominantBaseline="middle"
        textAnchor="middle"
      >
        {text}
      </text>
    </g>
  );
}
