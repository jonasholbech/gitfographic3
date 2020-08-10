import React, { useState } from "react";

import { useSpring, animated } from "react-spring";

export default function Description({ x, y, text }) {
  const spring = useSpring({
    from: {
      transform: `translate(100px, 100px)`,
    },
    to: {
      transform: `translate(${x}px, ${y}px)`,
    },
    config: {
      duration: 200,
    },
  });

  if (!text) {
    return <g id="Description" style={spring}></g>;
  }
  //TODO: same animation on typewriter?
  //Remember it as animated, but did delete some transition stuff
  return (
    <animated.g id="Description" style={spring}>
      <text x={0} y={0}>
        {text.split("\n").map((t, i) => {
          return (
            <tspan key={i} x={0} dy="1.2em">
              {t}
            </tspan>
          );
        })}
      </text>
    </animated.g>
  );
}
