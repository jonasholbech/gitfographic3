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
          target: "#resetCheckoutScene.ending",
          actions: ["setBranchOverlayEnd"],
        },
      },
    },
    countLoop: {
      entry: { type: "setBox", x: 100, y: 40 },
      meta: {
        texts: [
          "Start each day by pulling master",
          "Find a feature to work on",
          "and create a branch for that",
          "try to do one feature per branch",
          "commit and push often",
          "... every time something is working",
          "write meaningfull commit messages",
          "once you're done with your feature, push it",
          "then merge into master",
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
            target: "",
            cond: { type: "hasUnlocked", scene: "workingAloneScene" },
          },
          {
            actions: [
              { type: "fireworks", msg: "Working Alone" },
              { type: "unlockScene", scene: "" },
              send("", { delay: 3000 }),
            ],
          },
        ],
        prev: "countLoop",
      },
    },
  },
};
export default workingAloneScene;
