import { send } from "xstate";
import topBranchTransitions from "./topBranchTransitions";
const gitignoreScene = {
  initial: "opening",
  id: "gitignoreScene",
  on: topBranchTransitions,
  states: {
    opening: {
      always: "gitIgnoreSceneSet",
    },
    gitIgnoreSceneSet: {
      entry: { type: "setBox", x: 200, y: 0 },
      on: {
        next: "gitIgnoreSceneSet2",
        prev: "#overviewScene.pullCommand",
      },
    },
    gitIgnoreSceneSet2: {
      entry: { type: "setBox", x: 200, y: 0 },
      on: {
        next: "gitIgnoreFile",
        prev: "gitIgnoreSceneSet",
      },
    },
    gitIgnoreFile: {
      entry: [{ type: "setBox", x: 435, y: 50 }, "toggleTypewriter"],
      on: {
        next: "gitIgnoreFileMovedBack",
        prev: "gitIgnoreSceneSet2",
      },
      exit: "toggleTypewriter",
    },
    gitIgnoreFileMovedBack: {
      entry: { type: "setBox", x: 200, y: 0 },
      on: {
        next: [
          {
            target: "#commitScene",
            cond: { type: "hasUnlocked", scene: "commitScene" },
          },
          {
            actions: [
              { type: "fireworks", msg: ".gitignore" },
              { type: "unlockScene", scene: "commitScene" },
              send("commitScene", { delay: 3000 }),
            ],
          },
        ],

        prev: "gitIgnoreFile",
      },
    },
  },
};
export default gitignoreScene;
