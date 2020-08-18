import React, { useContext, useRef } from "react";
import { MachineContext } from "../../machine/MachineProvider";
import useGestures from "../../hooks/useGestures";

import descriptions from "../../machine/descriptions";
import Defs from "./Defs";
import Description from "./Description";
import TypewriterDescription from "./TypewriterDescription";
import Introduction from "./scenes/Introduction";
import Overview from "./scenes/Overview";
import Gitignore from "./scenes/Gitignore";
import CommitsExplained from "./scenes/CommitsExplained";
import Branches from "./scenes/Branches";
import ResetCheckoutScene from "./scenes/ResetCheckoutScene";
import WorkingAlone from "./scenes/WorkingAlone";

//context kan nu tilgås og sættes fra react, så store skal dø, og udskiftes med context
export default function SVG({ children }) {
  const [machineState, send] = useContext(MachineContext);
  const [parent, child] = machineState.toStrings();
  const substate = (child && child.split(".")[1]) || "";

  document.body.dataset.parentstate = parent;
  document.body.dataset.substate = substate || "";
  const text =
    descriptions.states[parent]?.[substate]?.desc ||
    descriptions.states[parent].desc;
  const swipeContainerRef = useRef(null);
  useGestures(swipeContainerRef, {
    onSwipeLeft: (event) => {
      //setImageRotation(event.angleDeg);
      console.log(event);
    },
    onSwipeRight: (event) => {
      //setImageRotation(1);
      console.log(event);
    },
  });

  return (
    <svg
      id="viz"
      ref={swipeContainerRef}
      viewBox="0 0 1000 500"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Defs />
      {machineState.matches("introductionScene") && <Introduction />}
      {machineState.matches("overviewScene") && <Overview />}
      {machineState.matches("gitignoreScene") && <Gitignore />}
      {machineState.matches("commitScene") && <CommitsExplained />}
      {machineState.matches("branchScene") && <Branches />}
      {machineState.matches("resetCheckoutScene") && <ResetCheckoutScene />}
      {machineState.matches("workingAloneScene") && <WorkingAlone />}

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
