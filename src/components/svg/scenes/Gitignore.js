import React from "react";

import TextBox from "../TextBox";

import File from "../File";

export default function Gitignore() {
  return (
    <g id="sceneGitignore">
      <TextBox
        id="workingcopyGitignore"
        width={150}
        height={80}
        x={10}
        y={10}
        text="Working Copy"
      />
      <g id="gitignoreFileSmall">
        <File x={10} y={100} id="" />
        <text x={30} y={220}>
          .gitignore
        </text>
      </g>
    </g>
  );
}
