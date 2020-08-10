import React, { useContext } from "react";
import { MachineContext } from "../models/MachineProvider";

export default function Debugger(props) {
  const [state, send] = useContext(MachineContext);

  return (
    <nav>
      <button>Overview</button>
      <button>.gitignore</button>
      <button>commits</button>
      <h2>currently on: {JSON.stringify(state.value)}</h2>
      {state.nextEvents.map((next) => {
        return (
          <button key={next} onClick={() => send(next)}>
            {next}
          </button>
        );
      })}
    </nav>
  );
}
