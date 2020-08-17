import React, { useContext } from "react";
import { MachineContext } from "../../../machine/MachineProvider";

import CommitList from "../CommitList";
import FileSystem from "../FileSystem";

import "../../../scss/Commits.scss";

export default function Gitignore() {
  const [machineState] = useContext(MachineContext);
  return (
    <g id="sceneCommitsExplained">
      <FileSystem />
      <CommitList x="100" y="150" step={machineState.context.commitListStep} />
    </g>
  );
}
