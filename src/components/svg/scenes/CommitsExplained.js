import React, { useContext } from "react";
import { MachineContext } from "../../../machine/MachineProvider";

import CommitList from "../CommitList";

export default function Gitignore() {
  const [machineState] = useContext(MachineContext);
  return (
    <g id="sceneCommitsExplained">
      <CommitList x="100" y="100" step={machineState.context.commitListStep} />
    </g>
  );
}
