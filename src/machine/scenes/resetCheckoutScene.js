//import { send } from "xstate";
import topBranchTransitions from "./topBranchTransitions";
const resetCheckoutScene = {
  id: "resetCheckoutScene",
  initial: "opening",
  on: topBranchTransitions,
  states: {
    opening: {
      entry: [{ type: "setBox", x: 100, y: 120 }],
      on: {
        next: "spreadOut",
        prev: {
          target: "#branchScene.developmentComplete",
          actions: ["setBranchOverlayEnd"],
        },
      },
    },
    spreadOut: {
      entry: [{ type: "setBox", x: 100, y: 120 }],
      on: {
        next: "filesAddedToProject",
        prev: "opening",
      },
    },
    filesAddedToProject: {
      entry: [{ type: "setBox", x: 250, y: 120 }],
      on: {
        next: "firstAddCommand",
        prev: "spreadOut",
      },
    },
    firstAddCommand: {
      entry: [{ type: "setBox", x: 600, y: 120 }],
      on: { next: "firstCommitCommand", prev: "filesAddedToProject" },
    },
    firstCommitCommand: {
      on: { next: "", prev: "firstAddCommand" },
    },
  },
};
export default resetCheckoutScene;
