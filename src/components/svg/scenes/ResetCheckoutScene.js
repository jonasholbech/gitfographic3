import React, { useContext } from "react";
import { MachineContext } from "../../../machine/MachineProvider";

import TextBox from "../TextBox";
import FileWithText from "../FileWithText";

const cssTexts = [
  `body {
    background:black;
}`,
  `body {
    background:black;
}
p {
    font-weight: bold
}`,
];
const htmlTexts = [`<p>Hi mom</p>`, `<p>Hi mom</p>`];
export default function ResetCheckoutScene() {
  const [machineState] = useContext(MachineContext);
  console.log(machineState);
  return (
    <g id="sceneResetCheckout">
      <TextBox
        id="workingcopy"
        width={150}
        height={80}
        x={50}
        y={10}
        text="Working Copy"
      />
      <TextBox
        id="stagingarea"
        width={150}
        height={80}
        x={425}
        y={10}
        text="Staging Area"
      />
      <TextBox
        id="localrepository"
        width={150}
        height={80}
        x={800}
        y={10}
        text="Local Repository"
      />
      <FileWithText
        x={60}
        y={100}
        id="cssFile"
        name="style.css"
        texts={cssTexts}
        count={0}
      />
      <FileWithText
        x={60}
        y={160}
        id="htmlFile"
        name="index.html"
        texts={htmlTexts}
        count={0}
      />
      <FileWithText
        x={60}
        y={100}
        id="cssFile2"
        name="style.css"
        texts={cssTexts}
        count={0}
      />
      <FileWithText
        x={60}
        y={160}
        id="htmlFile2"
        name="index.html"
        texts={htmlTexts}
        count={0}
      />
      <circle class="commit" cx={875} cy={120} r={10} />
    </g>
  );
}
