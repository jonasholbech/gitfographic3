import React, { useContext } from "react";
import { MachineContext } from "../../../machine/MachineProvider";
import FileSystem from "../FileSystem";
import "../../../scss/Github.scss";

export default function Github() {
  const [machineState] = useContext(MachineContext);

  return (
    <g id="sceneGithub">
      <FileSystem />
    </g>
  );
}
