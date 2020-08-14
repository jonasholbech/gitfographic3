import React, { useContext } from "react";

import { MachineContext } from "../machine/MachineProvider";

export default function Levels({ setLevelsOpen }) {
  const [state, send] = useContext(MachineContext);

  return (
    <ol className="levels">
      <li>
        <button
          disabled={!state.context.unlocks.introductionScene}
          onClick={() => {
            setLevelsOpen(false);
            send("introductionScene");
          }}
        >
          {state.context.unlocks.introductionScene ? "Introduction" : "Locked"}
        </button>
      </li>
      <li>
        <button
          disabled={!state.context.unlocks.overviewScene}
          onClick={() => {
            setLevelsOpen(false);
            send("overviewScene");
          }}
        >
          {state.context.unlocks.overviewScene ? "Overview" : "Locked"}
        </button>
      </li>
      <li>
        <button
          disabled={!state.context.unlocks.gitignoreScene}
          onClick={() => {
            setLevelsOpen(false);
            send("gitignoreScene");
          }}
        >
          {state.context.unlocks.gitignoreScene ? ".gitignore" : "Locked"}
        </button>
      </li>
      <li>
        <button
          disabled={!state.context.unlocks.commitScene}
          onClick={() => {
            setLevelsOpen(false);
            send("commitScene");
          }}
        >
          {state.context.unlocks.commitScene ? "Commits" : "Locked"}
        </button>
      </li>
      <li>
        <button
          disabled={!state.context.unlocks.branchScene}
          onClick={() => {
            setLevelsOpen(false);
            send("branchScene");
          }}
        >
          {state.context.unlocks.branchScene ? "Branches" : "Locked"}
        </button>
      </li>
      <li>
        <button
          disabled={!state.context.unlocks.resetCheckoutScene}
          onClick={() => {
            setLevelsOpen(false);
            send("resetCheckoutScene");
          }}
        >
          {state.context.unlocks.resetCheckoutScene
            ? "Reset / Checkout"
            : "Locked"}
        </button>
      </li>
      <li className="close">
        <button onClick={() => setLevelsOpen(false)}>X</button>
      </li>
    </ol>
  );
}
