import { Machine } from "xstate"; //, send

import introductionScene from "./scenes/introductionScene";
import overviewScene from "./scenes/overviewScene";
import gitignoreScene from "./scenes/gitignoreScene";
import commitScene from "./scenes/commitScene";
import branchScene from "./scenes/branchScene";
import resetCheckoutScene from "./scenes/resetCheckoutScene";

import guards from "./parts/guards";
import actions from "./parts/actions";

import { initialState, unlockStorage } from "./config";

let storage = localStorage.getItem(unlockStorage);
//still needs to be added to topbranchtransitions
const scenes = {
  introductionScene,
  overviewScene,
  gitignoreScene,
  commitScene,
  branchScene,
  resetCheckoutScene,
};
const initialUnlocks = { ...scenes };

Object.keys(initialUnlocks).map(function (key, index) {
  initialUnlocks[key] = storage?.[key] || false;
});
initialUnlocks.introductionScene = true;
//TODO: when switching scenes the text is misplaced, add initial setBox to all scenes
//TODO: if the storage.length (ish) does not match the above, storage is invalid", clear it? merge it?

if (!storage) {
  localStorage.setItem(
    unlockStorage,
    JSON.stringify({
      ...initialUnlocks,
    })
  );
}
//TODO: maybe descriptions should be in meta?
//https://xstate.js.org/docs/guides/states.html#state-meta-data
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
