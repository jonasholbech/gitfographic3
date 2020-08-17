import React, { useContext } from "react";
import { MachineContext } from "../../../machine/MachineProvider";

import CommitList from "../CommitList";
import TextBox from "../TextBox";

import "../../../scss/Commits.scss";

export default function Gitignore() {
  const [machineState] = useContext(MachineContext);
  return (
    <g id="sceneCommitsExplained">
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
      <CommitList x="100" y="150" step={machineState.context.commitListStep} />
    </g>
  );
}
