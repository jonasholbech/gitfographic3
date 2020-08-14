import React, { useState } from "react";

export default function FileWithText({ x, y, id, name, texts, count }) {
  return (
    <foreignObject
      className="FileWithText"
      id={id}
      x={x}
      y={y}
      width="120"
      height="160"
    >
      <div xmlns="http://www.w3.org/1999/xhtml">
        <p>{name}</p>
        <pre>{texts[count]}</pre>
      </div>
    </foreignObject>
  );
}
/*
M20,95V5h44v12.5c0,0.829,0.672,1.5,1.5,1.5H80v76H20z
<path d="M69,31H31c-0.552,0-1-0.448-1-1s0.448-1,1-1h38c0.553,0,1,0.448,1,1S69.553,31,69,31z" />
      <path d="M69,45H31c-0.552,0-1-0.448-1-1s0.448-1,1-1h38c0.553,0,1,0.448,1,1S69.553,45,69,45z" />
      <path d="M69,57H31c-0.552,0-1-0.447-1-1s0.448-1,1-1h38c0.553,0,1,0.447,1,1S69.553,57,69,57z" />
      <path d="M69,71H31c-0.552,0-1-0.447-1-1s0.448-1,1-1h38c0.553,0,1,0.447,1,1S69.553,71,69,71z" />
      */
