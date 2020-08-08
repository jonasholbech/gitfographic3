import React, { useContext } from "react";
import { MachineContext } from "../../models/MachineProvider";

import descriptions from "../../models/descriptions";
import Defs from "./Defs";
import TextBox from "./TextBox";
import AnnotatedArrow from "./AnnotatedArrow";
import File from "./File";
import DrawBox from "./DrawBox";
import Description from "./Description";
import TypewriterDescription from "./TypewriterDescription";
import CommitList from "./CommitList";
import Overview from "./scenes/Overview";
//context kan nu tilgås og sættes fra react, så store skal dø, og udskiftes med context
export default function SVG({ children }) {
  const [machineState, send] = useContext(MachineContext);
  console.log(machineState);
  //document.body.dataset.state = machineState.value;

  return (
    <svg viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg">
      <Defs />
      {machineState.matches("overviewScene") && <Overview />}
      <g id="sceneGitignore">
        <TextBox
          id="workingcopyGitignore"
          width={150}
          height={80}
          x={10}
          y={10}
          text="Working Copy"
        />
        <g id="gitignoreFileSmall">
          <File x={10} y={100} id="" />
          <text x={30} y={220}>
            .gitignore
          </text>
        </g>
      </g>
      <g id="sceneCommitsExplained">
        <CommitList
          x="100"
          y="100"
          step={machineState.context.commitListStep}
        />
      </g>
      {!machineState.context.description.typewriter && (
        <Description
          x={machineState.context.description.x}
          y={machineState.context.description.y}
          text={machineState.context.description.text}
        />
      )}
      {machineState.context.description.typewriter && (
        <TypewriterDescription
          x={machineState.context.description.x}
          y={machineState.context.description.y}
          text={machineState.context.description.text}
          typewriter={machineState.context.description.typewriter}
          startDelay={2000}
          doneCallback={(e) => {}}
        />
      )}
    </svg>
  );
}
