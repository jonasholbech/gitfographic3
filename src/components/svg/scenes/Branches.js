import React, { useContext } from "react";
import { MachineContext } from "../../../machine/MachineProvider";

import FileSystem from "../FileSystem";
import BranchList from "../BranchList";
import "../../../scss/Branches.scss";
export default function Branches() {
  const [machineState] = useContext(MachineContext);
  return (
    <g id="sceneBranches">
      <FileSystem />
      <BranchList
        x="100"
        y="230"
        step={machineState.context.branchOverlayStep}
      />
    </g>
  );
}
