import React, { useContext } from "react";
import { MachineContext } from "../../models/MachineProvider";

import descriptions from "../../models/descriptions";
import Defs from "./Defs";
import Description from "./Description";
import TypewriterDescription from "./TypewriterDescription";
import Overview from "./scenes/Overview";
import Gitignore from "./scenes/Gitignore";
import CommitsExplained from "./scenes/CommitsExplained";
import Branches from "./scenes/Branches";
//context kan nu tilgås og sættes fra react, så store skal dø, og udskiftes med context
export default function SVG({ children }) {
  const [machineState] = useContext(MachineContext);

  const [parent, child] = machineState.toStrings();
  const substate = (child && child.split(".")[1]) || "";

  document.body.dataset.parentstate = parent;
  document.body.dataset.substate = substate || "";
  const text =
    descriptions.states[parent]?.[substate]?.desc ||
    descriptions.states[parent].desc;

  return (
    <svg id="viz" viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg">
      <Defs />
      {machineState.matches("overviewScene") && <Overview />}
      {machineState.matches("gitignoreScene") && <Gitignore />}
      {machineState.matches("commitScene") && <CommitsExplained />}
      {machineState.matches("branchScene") && <Branches />}

      {!machineState.context.description.typewriter && (
        <Description
          x={machineState.context.description.x}
          y={machineState.context.description.y}
          text={text}
        />
      )}
      {machineState.context.description.typewriter && (
        <TypewriterDescription
          x={machineState.context.description.x}
          y={machineState.context.description.y}
          text={text}
          typewriter={machineState.context.description.typewriter}
          startDelay={2000}
          doneCallback={(e) => {}}
        />
      )}
    </svg>
  );
}
