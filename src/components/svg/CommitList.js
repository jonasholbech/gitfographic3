import React from "react";

export default function CommitList({ x, y, step }) {
  return (
    <g id="CommitList" transform={`translate(${x} ${y})`}>
      <line
        x1="0"
        y1="0"
        x2="100"
        y2="0"
        className={step > 0 ? "stroke0" : ""}
      />

      <line
        x1="100"
        y1="0"
        x2="200"
        y2="0"
        className={step > 2 ? "stroke0" : ""}
      />
      <circle cx={0} cy={0} r={10} className="drawCircle" />
      <circle cx={100} cy={0} r={10} className={step > 1 ? "drawCircle" : ""} />
      <circle cx={200} cy={0} r={10} className={step > 3 ? "drawCircle" : ""} />
    </g>
  );
}
