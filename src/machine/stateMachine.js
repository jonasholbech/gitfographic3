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
//TODO: when switching scenes the text is misplaced, add initial setBox to all scenes
//topBranchTransitions (in scenes) er nok den rigtige vej at gå, lidt for meget repetition her
//TODO: if the storage.length (ish) does not match the above, staorage is invalid", clear it? merge it?
let storage = localStorage.getItem(unlockStorage);
if (!storage) {
  localStorage.setItem(
    unlockStorage,
    JSON.stringify({
      introductionScene: true,
      overviewScene: true,
      gitignoreScene: true,
      commitScene: true,
      branchScene: true,
      resetCheckoutScene: true,
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
      introductionScene: storage?.introductionScene || true,
      overviewScene: storage?.overviewScene || false,
      gitignoreScene: storage?.gitignoreScene || false,
      commitScene: storage?.commitScene || false,
      branchScene: storage?.branchScene || false,
      resetCheckoutScene: storage?.resetCheckoutScene || false,
    },
    commitListStep: -1,
    branchOverlayStep: 0,
  },
  states: {
    introductionScene,
    overviewScene,
    gitignoreScene,
    commitScene,
    branchScene,
    resetCheckoutScene,
  },
};
const flowMachine = Machine(machine, {
  guards,
  actions,
});

export default flowMachine;
export { machine };
