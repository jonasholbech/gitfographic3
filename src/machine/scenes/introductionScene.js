import { send } from "xstate";
import topBranchTransitions from "./topBranchTransitions";
const introductionScene = {
  id: "introductionScene",
  initial: "whatIsThis",
  on: topBranchTransitions,
  states: {
    whatIsThis: {
      on: {
        next: "navigation",
      },
    },
    navigation: {
      on: {
        next: "whatIsGit",
        prev: "whatIsThis",
      },
    },
    whatIsGit: {
      on: {
        next: "whyGit",
        prev: "navigation",
      },
    },
    whyGit: {
      on: {
        next: "metaphoresUsed",
        prev: "navigation",
      },
    },
    metaphoresUsed: {
      on: {
        next: "isItHard",
        prev: "whyGit",
      },
    },
    isItHard: {
      on: {
        next: [
          {
            target: "#overviewScene",
            cond: { type: "hasUnlocked", scene: "overviewScene" },
          },
          {
            actions: [
              { type: "fireworks", msg: "introduction" },
              { type: "unlockScene", scene: "overviewScene" },
              send("overviewScene", { delay: 3000 }),
            ],
          },
        ],
        prev: "whyGit",
      },
    },
  },
};

export default introductionScene;
