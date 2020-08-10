import React, { useContext } from "react";
import { MachineContext } from "../models/MachineProvider";

export default function Nav(props) {
  const [state, send] = useContext(MachineContext);
  return (
    <nav>
      <button
        disabled={!state.context.unlocks.overviewScene}
        onClick={() => send("overviewScene")}
      >
        Overview
      </button>
      <button
        disabled={!state.context.unlocks.gitignoreScene}
        onClick={() => send("gitignoreScene")}
      >
        .gitignore
      </button>
      <button
        disabled={!state.context.unlocks.commitScene}
        onClick={() => send("commitScene")}
      >
        commits
      </button>
      <button
        disabled={!state.nextEvents.includes("prev")}
        onClick={() => send("prev")}
      >
        Previous
      </button>
      <button
        disabled={!state.nextEvents.includes("next")}
        onClick={() => send("next")}
      >
        Next
      </button>
    </nav>
  );
}
//state.nextEvents
