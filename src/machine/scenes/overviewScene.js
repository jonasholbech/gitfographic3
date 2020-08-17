import { send } from "xstate";
import topBranchTransitions from "./topBranchTransitions";

const overviewScene = {
  entry: { type: "setBox", x: 100, y: 100 },
  id: "overviewScene",
  initial: "first",
  on: topBranchTransitions,
  states: {
    first: {
      on: {
        next: "drawLocalBox",
        prev: "#introductionScene.isItHard",
      },
    },
    drawLocalBox: {
      entry: { type: "setBox", x: 100, y: 120 },
      on: {
        next: "drawRemoteBox",
        prev: "first",
      },
    },
    drawRemoteBox: {
      entry: { type: "setBox", x: 750, y: 120 },
      on: {
        next: "workingArea",
        prev: "drawLocalBox",
      },
    },

    workingArea: {
      entry: { type: "setBox", x: 200, y: 200 },
      on: {
        next: "stagingArea",
        prev: "drawRemoteBox",
      },
    },
    stagingArea: {
      entry: { type: "setBox", x: 450, y: 200 },
      on: {
        next: "localRepository",
        prev: "workingArea",
      },
    },
    localRepository: {
      entry: { type: "setBox", x: 130, y: 200 },
      on: {
        next: "remoteRepository",
        prev: "stagingArea",
      },
    },
    remoteRepository: {
      entry: { type: "setBox", x: 450, y: 200 },
      on: {
        next: "addCommand",
        prev: "localRepository",
      },
    },
    addCommand: {
      entry: { type: "setBox", x: 200, y: 100 },
      on: {
        next: "addCommandMoveFile1",
        prev: "remoteRepository",
      },
    },
    addCommandMoveFile1: {
      on: {
        next: "addCommandMoveFile2and3",
        prev: "addCommand",
      },
    },

    addCommandMoveFile2and3: {
      on: {
        next: "addCommandMoveFile3Back",
        prev: "addCommandMoveFile1",
      },
    },
    addCommandMoveFile3Back: {
      on: {
        next: "commitCommand",
        prev: "addCommandMoveFile2and3",
      },
    },
    commitCommand: {
      entry: { type: "setBox", x: 450, y: 100 },
      on: {
        next: "pushCommand",
        prev: "addCommandMoveFile3Back",
      },
    },
    pushCommand: {
      entry: { type: "setBox", x: 650, y: 100 },
      on: {
        next: "pullCommand",
        prev: "commitCommand",
      },
    },
    pullCommand: {
      entry: { type: "setBox", x: 450, y: 100 },
      on: {
        next: "takeAScreenshot",
        prev: "pushCommand",
      },
    },
    takeAScreenshot: {
      entry: { type: "setBox", x: 300, y: 300 },
      on: {
        next: [
          {
            target: "#gitignoreScene",
            cond: { type: "hasUnlocked", scene: "gitignoreScene" },
          },
          {
            actions: [
              { type: "fireworks", msg: "Overview" },
              { type: "unlockScene", scene: "gitignoreScene" },
              send("gitignoreScene", { delay: 3000 }),
            ],
          },
        ],
        prev: "pullCommand",
      },
    },
  },
};
export default overviewScene;
