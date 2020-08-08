import React, { useContext } from "react";
import { MachineContext } from "../../models/MachineProvider";
import { store } from "../../models/store.js";

import descriptions from "../../models/descriptions";
import Defs from "./Defs";
import TextBox from "./TextBox";
import AnnotatedArrow from "./AnnotatedArrow";
import File from "./File";
import DrawBox from "./DrawBox";
import Description from "./Description";
import TypewriterDescription from "./TypewriterDescription";
import CommitList from "./CommitList";

//context kan nu tilgås og sættes fra react, så store skal dø, og udskiftes med context
export default function SVG({ children }) {
  const [machineState, send] = useContext(MachineContext); //Løsningen
  console.log(machineState);
  document.body.dataset.state = machineState.value;

  const { globalState, dispatch } = useContext(store); //DØ
  //dispatch("SET_TEXT")
  return (
    <svg viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg">
      <Defs />
      <g id="sceneOverview">
        <DrawBox id="localDrawBox" x={0} y={0} width={660} height={100} />
        <DrawBox id="remoteDrawBox" x={740} y={0} width={170} height={100} />
        <DrawBox id="workingAreaDrawBox" x={0} y={0} width={170} height={300} />

        <DrawBox
          id="stagingAreaDrawBox"
          x={240}
          y={0}
          width={170}
          height={300}
        />
        <DrawBox
          id="localRepositoryDrawBox"
          x={490}
          y={0}
          width={170}
          height={300}
        />
        <DrawBox
          id="remoteRepositoryDrawBox"
          x={740}
          y={0}
          width={170}
          height={300}
        />
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
        <File x={20} y={100} id="addCommandFileLeftBehind1" />
        <File x={20} y={100} id="addCommandFile1" />
        <File x={30} y={115} id="addCommandFileLeftBehind2" />
        <File x={30} y={115} id="addCommandFile2" />
        <File x={40} y={130} id="addCommandFileLeftBehind3" />
        <File x={40} y={130} id="addCommandFile3" />

        <File x={110} y={115} id="pushCommandFile1" />
        <File x={120} y={130} id="pushCommandFile2" />

        <File x={90} y={115} id="pullCommandFile1" />
        <File x={90} y={130} id="pullCommandFile2" />
        <AnnotatedArrow
          id="addCommand"
          x1={160}
          y1={45}
          x2={246}
          y2={45}
          offsetY={-10}
          text="add"
        />
        <AnnotatedArrow
          id="resetCommand1"
          x2={164}
          y2={65}
          x1={250}
          y1={65}
          offsetY={-10}
          text="reset"
        />

        <AnnotatedArrow
          id="commitCommand"
          x1={400}
          y1={45}
          x2={496}
          y2={45}
          offsetY={-10}
          text="commit"
        />
        <AnnotatedArrow
          id="pushCommand"
          x1={650}
          y1={45}
          x2={746}
          y2={45}
          offsetY={-10}
          text="push"
        />
        <AnnotatedArrow
          id="pullCommand"
          x2={654}
          y2={65}
          x1={750}
          y1={65}
          offsetY={-10}
          text="pull"
        />
      </g>
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
        <CommitList x="100" y="100" step={globalState.commitListStep} />
      </g>
      {!globalState.typewriter && (
        <Description
          x={globalState.x}
          y={globalState.y}
          text={globalState.text}
        />
      )}
      {globalState.typewriter && (
        <TypewriterDescription
          x={globalState.x}
          y={globalState.y}
          text={globalState.text}
          typewriter={globalState.typewriter}
          startDelay={2000}
          doneCallback={(e) => dispatch("DISABLE_TYPEWRITER")}
        />
      )}
    </svg>
  );
}
