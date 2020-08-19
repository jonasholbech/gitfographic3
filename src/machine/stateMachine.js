import { Machine } from "xstate"; //, send

import introductionScene from "./scenes/introductionScene";
import overviewScene from "./scenes/overviewScene";
import gitignoreScene from "./scenes/gitignoreScene";
import commitScene from "./scenes/commitScene";
import branchScene from "./scenes/branchScene";
import resetCheckoutScene from "./scenes/resetCheckoutScene";
import workingAloneScene from "./scenes/workingAloneScene";
import githubScene from "./scenes/githubScene";

import guards from "./parts/guards";
import actions from "./parts/actions";

import { initialState, unlockStorage } from "./config";

//still needs to be added to topbranchtransitions and Levels.js and SVG.js
const scenes = {
  introductionScene,
  overviewScene,
  gitignoreScene,
  commitScene,
  branchScene,
  resetCheckoutScene,
  workingAloneScene,
  githubScene,
};
const initialUnlocks = { ...scenes };

let storage = JSON.parse(localStorage.getItem(unlockStorage));

Object.keys(initialUnlocks).map(function (key, index) {
  initialUnlocks[key] = storage?.[key] || false;
  return "";
});
initialUnlocks.introductionScene = true;
//TODO: when switching scenes the text is misplaced, add initial setBox to all scenes
//TODO: maybe descriptions should be in meta?
//https://xstate.js.org/docs/guides/states.html#state-meta-data

//if (!storage) {
localStorage.setItem(
  unlockStorage,
  JSON.stringify({
    ...initialUnlocks,
  })
);
//}

storage = JSON.parse(localStorage.getItem(unlockStorage));
const machine = {
  id: "gitMachine",
  strict: true,
  initial: initialState,
  context: {
    description: {
      x: 100,
      y: 100,
      typewriter: false,
    },
    unlocks: {
      ...initialUnlocks,
    },
    commitListStep: -1,
    branchOverlayStep: 0,
    cssFileStep: 0,
    htmlFileStep: 0,
    workingAloneCount: -1,
  },
  states: {
    ...scenes,
  },
};
const flowMachine = Machine(machine, {
  guards,
  actions,
});

export default flowMachine;
export { machine };
