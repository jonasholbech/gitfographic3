import React from "react";
import { useMachine } from "@xstate/react";

import { MachineProvider } from "./models/MachineProvider";
import flowMachine from "./models/stateMachine";

import Test from "./components/Test";
import Nav from "./components/Nav";
import SVG from "./components/svg/SVG";

import "./App.scss";
import "./scss/Overview.scss";
import "./scss/Gitignore.scss";
import "./scss/Commits.scss";

function App() {
  const machineInstance = useMachine(flowMachine);
  return (
    <div className="App">
      <MachineProvider machineInstance={machineInstance}>
        <Test />
        <Nav />
        <SVG></SVG>
      </MachineProvider>
    </div>
  );
}

export default App;
