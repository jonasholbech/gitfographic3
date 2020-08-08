import React, { useContext } from "react";
import { MachineContext } from "../models/MachineProvider";

export default function Debugger(props) {
  const [state, send] = useContext(MachineContext);
  return (
    <div>
      <h2>currently on: {state.value}</h2>
      {state.nextEvents.map((next) => {
        return (
          <button key={next} onClick={() => send(next)}>
            {next}
          </button>
        );
      })}
    </div>
  );
}
