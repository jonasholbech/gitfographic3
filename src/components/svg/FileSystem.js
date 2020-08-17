import React from "react";

import TextBox from "./TextBox";

export default function FileSystem() {
  return (
    <>
      <TextBox
        id="workingcopy"
        width={150}
        height={80}
        x={10}
        y={10}
        text="Working Copy"
      />
      <TextBox
        id="stagingarea"
        width={150}
        height={80}
        x={250}
        y={10}
        text="Staging Area"
      />
      <TextBox
        id="localrepository"
        width={150}
        height={80}
        x={500}
        y={10}
        text="Local Repository"
      />
      <TextBox
        id="remoterepository"
        width={150}
        height={80}
        x={750}
        y={10}
        text="Remote Repository"
      />
    </>
  );
}
