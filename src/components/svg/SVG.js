import React, { useContext, Suspense } from "react";
import { MachineContext } from "../../machine/MachineProvider";

import descriptions from "../../machine/descriptions";
import Defs from "./Defs";
import Description from "./Description";
import TypewriterDescription from "./TypewriterDescription";

import Introduction from "./scenes/Introduction";
//import Overview from "./scenes/Overview";
//import Gitignore from "./scenes/Gitignore";
//import CommitsExplained from "./scenes/CommitsExplained";
//import Branches from "./scenes/Branches";
//import ResetCheckoutScene from "./scenes/ResetCheckoutScene";
//import WorkingAlone from "./scenes/WorkingAlone";
const Overview = React.lazy(() => import("./scenes/Overview"));
const Gitignore = React.lazy(() => import("./scenes/Gitignore"));
const CommitsExplained = React.lazy(() => import("./scenes/CommitsExplained"));
const Branches = React.lazy(() => import("./scenes/Branches"));
const ResetCheckoutScene = React.lazy(() =>
  import("./scenes/ResetCheckoutScene")
);
const WorkingAlone = React.lazy(() => import("./scenes/WorkingAlone"));

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
      {machineState.matches("introductionScene") && <Introduction />}
      {machineState.matches("overviewScene") && (
        <Suspense fallback={<div>Loading...</div>}>
          <Overview />
        </Suspense>
      )}
      {machineState.matches("gitignoreScene") && (
        <Suspense fallback={<div>Loading...</div>}>
          <Gitignore />
        </Suspense>
      )}
      {machineState.matches("commitScene") && (
        <Suspense fallback={<div>Loading...</div>}>
          <CommitsExplained />
        </Suspense>
      )}
      {machineState.matches("branchScene") && (
        <Suspense fallback={<div>Loading...</div>}>
          <Branches />
        </Suspense>
      )}
      {machineState.matches("resetCheckoutScene") && (
        <Suspense fallback={<div>Loading...</div>}>
          <ResetCheckoutScene />
        </Suspense>
      )}
      {machineState.matches("workingAloneScene") && (
        <Suspense fallback={<div>Loading...</div>}>
          <WorkingAlone />
        </Suspense>
      )}

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
