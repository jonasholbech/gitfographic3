import React from "react";

export default function FileWithText({
  x,
  y,
  id,
  name,
  texts,
  count,
  ...rest
}) {
  return (
    <foreignObject
      className="FileWithText"
      id={id}
      x={x}
      y={y}
      width="120"
      height="160"
      {...rest}
    >
      <div xmlns="http://www.w3.org/1999/xhtml">
        <p>{name}</p>
        <pre>{texts[count]}</pre>
      </div>
    </foreignObject>
  );
}
