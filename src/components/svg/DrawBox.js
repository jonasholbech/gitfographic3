import React from "react";

export default function DrawBox({ x, y, width, height, id }) {
  return (
    <path
      id={id}
      className="DrawBox"
      d={`M ${x},${y} l ${width},0 l 0,${height} l ${-width},0 l 0,${-height}`}
      pathLength={1}
    />
  );
}
