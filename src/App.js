import React from "react";
import { useMachine } from "@xstate/react";

import { MachineProvider } from "./machine/MachineProvider";
import flowMachine from "./machine/stateMachine";

import Nav from "./components/Nav";
import SVG from "./components/svg/SVG";
import FontSizePicker from "./components/FontSizePicker";

import "./App.scss";
//import "./scss/Introduction.scss";
//import "./scss/Overview.scss";
//import "./scss/Gitignore.scss";
//import "./scss/Commits.scss";
//import "./scss/Branches.scss";
//import "./scss/ResetCheckout.scss";

function App() {
  const machineInstance = useMachine(flowMachine);
  return (
    <div className="App">
      <MachineProvider machineInstance={machineInstance}>
        <Nav />
        <SVG></SVG>
        <FontSizePicker />
      </MachineProvider>
    </div>
  );
}

export default App;
