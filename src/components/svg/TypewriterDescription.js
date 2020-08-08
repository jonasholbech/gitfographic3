import React, { useState, useEffect } from "react";
import useInterval from "../../hooks/useInterval";
export default function TypewriterDescription({
  x,
  y,
  text,
  startDelay,
  doneCallback,
}) {
  let [count, setCount] = useState(0);
  let [currentText, setCurrentText] = useState("");
  let [delayCompleted, setDelayCompleted] = useState(false);
  let delay = 15;
  useEffect(() => {
    setTimeout(() => {
      setDelayCompleted(true);
    }, startDelay);
  }, [startDelay]);
  useInterval(() => {
    if (delayCompleted) {
      setCount(count + 1);
      setCurrentText(text.slice(0, count));
      if (count > text.length) {
        delay = null;
        doneCallback();
      }
    }
  }, delay);

  if (!text) {
    return <g transform={`translate(${x} ${y})`}></g>;
  }
  //TODO: use Description as a child component
  return (
    <g id="TypewriterDescription" transform={`translate(${x} ${y})`}>
      <text x={x} y={y}>
        {currentText.split("\n").map((t, i) => {
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
