import React, { useContext, useState } from "react";
import {
  ArrowRightCircle,
  ArrowLeftCircle,
  ArrowUpCircle,
} from "react-systemuicons";

import { MachineContext } from "../models/MachineProvider";

export default function Nav(props) {
  const [state, send] = useContext(MachineContext);
  const [levelsOpen, setLevelsOpen] = useState(false);
  const classes = (levelsOpen ? "open" : "") + " navWrapper";
  return (
    <div className={classes}>
      <ol className="levels">
        <li>
          <button
            disabled={!state.context.unlocks.overviewScene}
            onClick={() => send("overviewScene")}
          >
            {state.context.unlocks.overviewScene ? "Overview" : "Locked"}
          </button>
        </li>
        <li>
          <button
            disabled={!state.context.unlocks.gitignoreScene}
            onClick={() => send("gitignoreScene")}
          >
            {state.context.unlocks.gitignoreScene ? ".gitignore" : "Locked"}
          </button>
        </li>
        <li>
          <button
            disabled={!state.context.unlocks.commitScene}
            onClick={() => send("commitScene")}
          >
            {state.context.unlocks.commitScene ? ".Commits" : "Locked"}
          </button>
        </li>
      </ol>
      <nav>
        <button onClick={() => setLevelsOpen(!levelsOpen)}>
          <ArrowUpCircle className="up" size={50} />
        </button>
        <button
          disabled={!state.nextEvents.includes("prev")}
          onClick={() => send("prev")}
        >
          <ArrowLeftCircle size={50} />
        </button>
        <button
          disabled={!state.nextEvents.includes("next")}
          onClick={() => send("next")}
        >
          <ArrowRightCircle size={50} />
        </button>
      </nav>
    </div>
  );
}
//state.nextEvents
