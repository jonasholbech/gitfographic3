import React, { useContext } from "react";
import { MachineContext } from "../../../machine/MachineProvider";

import BulletList from "../BulletList";

import "../../../scss/WorkingAlone.scss";

export default function WorkingAlone() {
  const [machineState] = useContext(MachineContext);
  console.log(machineState.toStrings(), machineState.meta);
  let bullets = [];
  if (
    machineState.context.workingAloneCount > -1 &&
    machineState.meta["gitMachine.workingAloneScene.countLoop"]
  ) {
    bullets = machineState.meta[
      "gitMachine.workingAloneScene.countLoop"
    ].texts.slice(0, machineState.context.workingAloneCount + 1);
  }
  return (
    <g id="sceneWorkingAlone">
      <BulletList
        x={100}
        y={60}
        width={400}
        height={300}
        bullets={bullets}
        id="workingAloneText"
      />
    </g>
  );
}
