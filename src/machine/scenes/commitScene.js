import { send } from "xstate";
import topBranchTransitions from "./topBranchTransitions";

const commitScene = {
  //TODO: show that it's the local repo
  id: "commitScene",
  initial: "opening",
  on: topBranchTransitions,
  states: {
    opening: {
      entry: ["resetCount"],
      always: "beforeCommits",
    },
    beforeCommits: {
      entry: { type: "setBox", x: 50, y: 50 },
      on: {
        next: {
          target: "commits1",
          actions: "countUp",
        },
        prev: {
          target: "#gitignoreScene.gitIgnoreFileMovedBack",
          actions: "countDown",
        },
      },
    },
    commits1: {
      entry: { type: "setBox", x: 50, y: 120 },
      on: {
        next: {
          target: "commits2",
          actions: "countUp",
        },
        prev: {
          target: "beforeCommits",
          actions: "countDown",
        },
      },
    },
    commits2: {
      on: {
        next: {
          target: "commits3",
          actions: "countUp",
        },
        prev: {
          target: "commits1",
          actions: "countDown",
        },
      },
    },
    commits3: {
      on: {
        next: {
          target: "commits4",
          actions: "countUp",
        },
        prev: {
          target: "commits2",
          actions: "countDown",
        },
      },
    },
    commits4: {
      on: {
        next: {
          target: "commits5",
          actions: "countUp",
        },
        prev: {
          target: "commits3",
          actions: "countDown",
        },
      },
    },
    commits5: {
      on: {
        next: {
          target: "commits6",
          actions: "countUp",
        },
        prev: {
          target: "commits4",
          actions: "countDown",
        },
      },
    },
    commits6: {
      entry: { type: "setBox", x: 50, y: 120 },
      on: {
        next: {
          target: "commits7",
          actions: "countUp",
        },
        prev: {
          target: "commits5",
          actions: "countDown",
        },
      },
    },
    commits7: {
      on: {
        next: [
          {
            target: "#branchScene",
            cond: { type: "hasUnlocked", scene: "branchScene" },
          },
          {
            actions: [
              { type: "fireworks", msg: "Commits" },
              { type: "unlockScene", scene: "branchScene" },
              send("branchScene", { delay: 3000 }),
            ],
          },
        ],

        prev: {
          target: "commits6",
          actions: "countDown",
        },
      },
    },
  },
};
export default commitScene;
