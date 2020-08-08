import React, { useContext } from "react";
import { MachineContext } from "../models/MachineProvider";

export default function Debugger(props) {
  const [state, send] = useContext(MachineContext);
  console.log(state.nextEvents);
  return (
    <div>
      <h2>currently on: {JSON.stringify(state.value)}</h2>
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
