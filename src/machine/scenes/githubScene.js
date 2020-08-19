import { send } from "xstate";
import topBranchTransitions from "./topBranchTransitions";
const githubScene = {
  id: "githubScene",
  initial: "opening",
  on: topBranchTransitions,
  states: {
    opening: {
      entry: [{ type: "setBox", x: 100, y: 120 }],
      on: {
        next: { target: "github" },
        prev: {
          target: "#workingAloneScene.ending",
          actions: [],
        },
      },
    },
    github: {
      on: {
        next: "pushing",
        prev: "opening",
      },
    },
    pushing: {
      on: {
        next: "pulling",
        prev: "github",
      },
    },
    pulling: {
      on: {
        next: "cloning",
        prev: "pushing",
      },
    },
    cloning: {
      on: {
        next: "",
        prev: "pulling",
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
        prev: "",
      },
    },
  },
};
export default githubScene;
