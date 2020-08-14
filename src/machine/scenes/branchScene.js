//import { send } from "xstate";
import topBranchTransitions from "./topBranchTransitions";
const branchScene = {
  id: "branchScene",
  initial: "opening",
  on: topBranchTransitions,
  states: {
    opening: {
      entry: ["resetBranchOverlay", { type: "setBox", x: 100, y: 50 }],
      on: {
        next: { target: "master", actions: "incrementBranchOverlay" },
        prev: { target: "#commitScene.commits7", actions: "setCountEnd" },
      },
    },
    master: {
      entry: [{ type: "setBox", x: 100, y: 0 }],
      on: {
        next: {
          target: "branchToFeature1",
          actions: "incrementBranchOverlay",
        },
        prev: { target: "opening", actions: "decrementBranchOverlay" },
      },
    },
    branchToFeature1: {
      on: {
        next: { target: "feature1", actions: "incrementBranchOverlay" },
        prev: { target: "master", actions: "decrementBranchOverlay" },
      },
    },
    feature1: {
      on: {
        next: {
          target: "feature1MergeToMaster",
          actions: "incrementBranchOverlay",
        },
        prev: {
          target: "branchToFeature1",
          actions: "decrementBranchOverlay",
        },
      },
    },
    feature1MergeToMaster: {
      entry: [{ type: "setBox", x: 100, y: 150 }],
      on: {
        next: {
          target: "branchToFeature2Cards",
          actions: "incrementBranchOverlay",
        },
        prev: {
          target: "feature1",
          actions: "decrementBranchOverlay",
        },
      },
    },
    branchToFeature2Cards: {
      on: {
        next: {
          target: "feature2Cards",
          actions: "incrementBranchOverlay",
        },
        prev: {
          target: "feature1MergeToMaster",
          actions: "decrementBranchOverlay",
        },
      },
    },
    feature2Cards: {
      on: {
        next: {
          target: "feature2MergeToMaster",
          actions: "incrementBranchOverlay",
        },
        prev: {
          target: "branchToFeature2Cards",
          actions: "decrementBranchOverlay",
        },
      },
    },
    feature2MergeToMaster: {
      entry: [{ type: "setBox", x: 100, y: 220 }],
      on: {
        next: {
          target: "branchToNav",
          actions: "incrementBranchOverlay",
        },
        prev: {
          target: "feature2Cards",
          actions: "decrementBranchOverlay",
        },
      },
    },
    branchToNav: {
      on: {
        next: {
          target: "developmentComplete",
          actions: "incrementBranchOverlay",
        },
        prev: {
          target: "feature2MergeToMaster",
          actions: "decrementBranchOverlay",
        },
      },
    },
    developmentComplete: {
      //TODO: fireworks etc
      on: {
        //next: { target: "", actions: "incrementBranchOverlay" },
        prev: {
          target: "branchToNav",
          actions: "decrementBranchOverlay",
        },
      },
    },
  },
};
export default branchScene;
