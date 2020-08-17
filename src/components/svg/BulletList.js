import React from "react";

export default function BulletList({
  x,
  y,
  id,
  bullets,
  width = 120,
  height = 160,
}) {
  return (
    <foreignObject
      className="FileWithText"
      id={id}
      x={x}
      y={y}
      width={width}
      height={height}
    >
      <ul xmlns="http://www.w3.org/1999/xhtml">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </foreignObject>
  );
}
