import { send } from "xstate";
import topBranchTransitions from "./topBranchTransitions";
const workingAloneScene = {
  id: "workingAloneScene",
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
      entry: [
        { type: "setCssFileStep", value: 0 },
        { type: "setBox", x: 600, y: 120 },
      ],
      on: { next: "firstChangeToFiles", prev: "firstAddCommand" },
    },
    firstChangeToFiles: {
      entry: [
        { type: "setCssFileStep", value: 1 },
        { type: "setBox", x: 200, y: 120 },
      ],
      on: {
        next: "secondAddCommand",
        prev: "firstCommitCommand",
      },
    },
    secondAddCommand: {
      entry: { type: "setBox", x: 600, y: 220 },
      on: {
        next: "secondCommitCommand",
        prev: "firstChangeToFiles",
      },
    },
    secondCommitCommand: {
      entry: { type: "setBox", x: 600, y: 220 },
      on: {
        next: "resetIntro",
        prev: "secondAddCommand",
      },
    },
    resetIntro: {
      entry: { type: "setBox", x: 200, y: 120 },
      on: { next: "reset", prev: "secondCommitCommand" },
    },
    reset: {
      entry: { type: "setCssFileStep", value: 0 },
      on: { next: "restored", prev: "resetIntro" },
    },
    restored: {
      entry: { type: "setCssFileStep", value: 1 },
      on: {
        next: "checkout",
        prev: "reset",
      },
    },
    checkout: {
      entry: { type: "setCssFileStep", value: 0 },
      on: {
        next: "ending",
        prev: "restored",
      },
    },
    ending: {
      on: {
        next: {
          /*{
            target: "#resetCheckoutScene",
            cond: { type: "hasUnlocked", scene: "resetCheckoutScene" },
          },
          {*/
          actions: [
            { type: "fireworks", msg: "Reset/Checkout" },
            send("resetCheckoutScene", { delay: 3000 }),
          ],
          //},
        },
        prev: {
          target: "checkout",
        },
      },
    },
  },
};
export default workingAloneScene;
