import React, { useContext } from "react";
import { MachineContext } from "../../../models/MachineProvider";

import BranchList from "../BranchList";

export default function Branches() {
  const [machineState] = useContext(MachineContext);
  return (
    <g id="sceneBranches">
      <BranchList
        x="100"
        y="120"
        step={machineState.context.branchOverlayStep}
      />
    </g>
  );
}
