import React, { useContext, useState, useEffect } from "react";
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

  useEffect(() => {
    function handleKeyUp(e) {
      if (
        !document.body.dataset.fireworks ||
        document.body.dataset.fireworks === "false"
      ) {
        if (e.key === " " || e.key === "ArrowRight") {
          send("next");
        } else if (e.key === "ArrowLeft") {
          send("prev");
        } else if (e.key === "ArrowUp") {
          setLevelsOpen(true);
        } else if (e.key === "ArrowDown") {
          setLevelsOpen(false);
        }
      }
    }
    function handleKeyDown(e) {
      if (e.key === " ") {
        e.preventDefault();
      } else if (e.key === "ArrowDown" && levelsOpen) {
        e.preventDefault();
      }
    }
    window.addEventListener("keyup", handleKeyUp);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keyup", handleKeyUp);
      window.removeEventListener("keydown", handleKeyDown);
    };
  });
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
          <ArrowLeftCircle className="prev" size={50} />
        </button>
        <button
          disabled={!state.nextEvents.includes("next")}
          onClick={() => send("next")}
        >
          <ArrowRightCircle className="next" size={50} />
        </button>
      </nav>
    </div>
  );
}
//state.nextEvents
