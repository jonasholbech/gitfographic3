import React from "react";
import { useMachine } from "@xstate/react";

import { MachineProvider } from "./machine/MachineProvider";
import flowMachine from "./machine/stateMachine";

import Nav from "./components/Nav";
import SVG from "./components/svg/SVG";
import DarkModeSwitch from "./components/DarkModeSwitch";

import "./App.scss";
import "./scss/DarkMode.scss";
function App() {
  const machineInstance = useMachine(flowMachine);
  return (
    <div className="App">
      <MachineProvider machineInstance={machineInstance}>
        <Nav />
        <SVG></SVG>
        <footer>
          <DarkModeSwitch /> Dark mode (experimental, stuff might be missing)
        </footer>
      </MachineProvider>
    </div>
  );
}

export default App;
