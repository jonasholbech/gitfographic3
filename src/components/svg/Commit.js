import React from "react";
export default function Commit({ number = 0, cx, cy, r = 10, letter = null }) {
  return (
    <>
      <circle className="commit" data-number={number} cx={cx} cy={cy} r={r} />
      {letter != null ? (
        <text
          x={cx}
          y={cy}
          data-number={number}
          dominantBaseline="middle"
          textAnchor="middle"
        >
          {letter}
        </text>
      ) : null}
    </>
  );
}
