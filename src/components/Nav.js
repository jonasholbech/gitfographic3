import React, { useContext, useState } from "react";
import {
  ArrowRightCircle,
  ArrowLeftCircle,
  ArrowUpCircle,
} from "react-systemuicons";

import { MachineContext } from "../machine/MachineProvider";
import descriptions from "../machine/descriptions";
import Levels from "./Levels";

export default function Nav(props) {
  const [state, send] = useContext(MachineContext);
  const [levelsOpen, setLevelsOpen] = useState(false);

  const scene = descriptions.states[state.toStrings()[0]].name;

  const classes = (levelsOpen ? "open" : "") + " navWrapper";
  return (
    <div className={classes}>
      <Levels setLevelsOpen={setLevelsOpen} />
      <nav>
        <h2>{scene}</h2>
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
