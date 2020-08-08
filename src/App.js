import React from "react";
import { useMachine } from "@xstate/react";

import { MachineProvider } from "./models/MachineProvider";
import flowMachine from "./models/stateMachine";

import Test from "./components/Test";
import SVG from "./components/svg/SVG";

import "./App.scss";

function App() {
  const machineInstance = useMachine(flowMachine);
  return (
    <div className="App">
      <MachineProvider machineInstance={machineInstance}>
        <Test />
        <SVG></SVG>
      </MachineProvider>
    </div>
  );
}

export default App;
