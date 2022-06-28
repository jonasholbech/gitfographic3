import { send } from "xstate";
import topBranchTransitions from "./topBranchTransitions";
const revertScene = {
  id: "revertScene",
  initial: "opening",
  on: topBranchTransitions,
  states: {
    opening: {
      entry: [],
      on: {
        next: "commit1File",
        prev: {
          /* target: "#branchScene.developmentComplete",
          actions: ["setBranchOverlayEnd"], */
        },
      },
    },
    commit1File: {
      entry: [],
      on: {
        next: "commit2File",
        prev: "opening",
      },
    },
    commit2File: {
      entry: [],
      on: {
        next: "commit3File",
        prev: "commit1File",
      },
    },
    commit3File: {
      entry: [],
      on: { next: "taskExplained1", prev: "commit2File" },
    },
    taskExplained1: {
      entry: [{ type: "setBox", x: 200, y: 220 }],
      on: { next: "taskExplained2", prev: "commit3File" },
    },
    taskExplained2: {
      entry: [],
      on: { next: "taskExplained3", prev: "taskExplained1" },
    },
    taskExplained3: {
      entry: [],
      on: { next: "taskExplained4", prev: "taskExplained2" },
    },
    taskExplained4: {
      entry: [],
      on: { next: "taskExplained5", prev: "taskExplained3" },
    },
    taskExplained5: {
      entry: [{ type: "setBox", x: 200, y: 220 }],
      on: { next: "commit4File", prev: "taskExplained4" },
    },
    commit4File: {
      entry: [],
      on: { next: "firstChangeToFiles", prev: "taskExplained5" },
    },
    firstChangeToFiles: {
      entry: [
        { type: "setCssFileStep", value: 1 },
        { type: "setBox", x: 200, y: 120 },
      ],
      on: {
        next: "secondAddCommand",
        prev: "taskExplained1",
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
        next: [
          {
            target: "#workingAloneScene",
            cond: { type: "hasUnlocked", scene: "workingAloneScene" },
          },
          {
            actions: [
              { type: "fireworks", msg: "Reset/Checkout" },
              { type: "unlockScene", scene: "workingAloneScene" },
              send("workingAloneScene", { delay: 3000 }),
            ],
          },
        ],
        prev: {
          target: "checkout",
        },
      },
    },
  },
};
export default revertScene;
