import React, { useContext } from "react";
import { MachineContext } from "../../../machine/MachineProvider";

import TextBox from "../TextBox";
import FileWithText from "../FileWithText";
import Commit from "../Commit";

import "../../../scss/Revert.scss";

const cssTexts = [
  `body {
    background: black;
}`,
  `body {
    background: black;
    color: white;
}`,
  `body {
    background: black;
    color: white;
}
p {
    font-weight: bold
}`,
  `body {
  background: black;
}
p {
  font-weight: bold
}`,
];

export default function RevertScene() {
  const [machineState] = useContext(MachineContext);
  return (
    <g id="sceneRevert">
      <FileWithText
        x={50}
        y={100}
        id="commit1File"
        name="style.css"
        texts={cssTexts}
        count={0}
        data-number={1}
      />
      <FileWithText
        x={180}
        y={100}
        id="commit2File"
        name="style.css"
        texts={cssTexts}
        count={1}
        data-number={2}
      />
      <FileWithText
        x={310}
        y={100}
        id="commit3File"
        name="style.css"
        texts={cssTexts}
        count={2}
        data-number={3}
      />
      <FileWithText
        x={440}
        y={100}
        id="commmit4File"
        name="style.css"
        texts={cssTexts}
        count={3}
        data-number={4}
      />
      <line data-number="2" x1="100" y1="100" x2="230" y2="100" />
      <line data-number="3" x1="230" y1="100" x2="360" y2="100" />
      <line data-number="4" x1="360" y1="100" x2="490" y2="100" />
      <Commit number="1" cx={100} cy={100} r={10} letter="A" />
      <Commit number="2" cx={230} cy={100} r={10} letter="B" />
      <Commit number="3" cx={360} cy={100} r={10} letter="C" />
      <Commit number="4" cx={490} cy={100} r={10} letter="D" />
    </g>
  );
}
