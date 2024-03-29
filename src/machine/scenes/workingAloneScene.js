import { send } from "xstate";
import topBranchTransitions from "./topBranchTransitions";
const workingAloneScene = {
  id: "workingAloneScene",
  initial: "opening",
  on: topBranchTransitions,
  states: {
    opening: {
      entry: [{ type: "setBox", x: 100, y: 120 }, "resetWorkingAloneCount"],
      on: {
        next: { target: "countLoop", actions: "incrementWorkingAloneCount" },
        prev: {
          target: "#revertScene.ending",
          actions: ["setBranchOverlayEnd"],
        },
      },
    },
    countLoop: {
      entry: { type: "setBox", x: 100, y: 40 },
      meta: {
        texts: [
          "Start each day by pulling main",
          "Find a feature to work on",
          "and create a branch for that",
          "try to do one feature per branch",
          "commit and push often",
          "... every time something is working",
          "write meaningfull commit messages",
          "once you're done with your feature, push it",
          "then merge into main",
          "repeat the process",
        ],
      },
      on: {
        next: [
          {
            target: "countLoop",
            actions: "incrementWorkingAloneCount",
            cond: "hasMoreTexts",
          },
          { target: "ending" },
        ],
        prev: [
          {
            target: "countLoop",
            actions: "decrementWorkingAloneCount",
            cond: { type: "greaterThanZero", prop: "workingAloneCount" },
          },
          { target: "opening" },
        ],
      },
    },
    ending: {
      entry: { type: "setBox", x: 100, y: 40 },
      on: {
        next: [
          {
            target: "#githubScene",
            cond: { type: "hasUnlocked", scene: "githubScene" },
          },
          {
            actions: [
              { type: "fireworks", msg: "Working Alone" },
              { type: "unlockScene", scene: "githubScene" },
              send("githubScene", { delay: 3000 }),
            ],
          },
        ],
        prev: "countLoop",
      },
    },
  },
};
export default workingAloneScene;
