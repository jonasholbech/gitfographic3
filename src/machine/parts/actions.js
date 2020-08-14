import { assign } from "xstate";
import fx from "fireworks";
import { unlockStorage } from "../config";
const actions = {
  fireworks: (ctx, evt, { action }) => {
    function fireOff(count = 6) {
      for (let i = 0; i < count; i++) {
        fx({
          x: window.innerWidth / 2 + Math.random() * 200 - 100,
          y: window.innerHeight / 2 + Math.random() * 200 - 100,
        });
      }
    }
    fireOff();
    setTimeout(fireOff, 1000);
    setTimeout(fireOff, 2000);
    document.body.dataset.fireworks = "true";
    const h1 = document.createElement("h1");
    h1.textContent = `Congratulations, you've completed the ${action.msg} scene`;
    h1.style.position = "absolute";
    h1.style.textAlign = "center";
    h1.style.top = "45vh";
    document.body.appendChild(h1);
    setTimeout(() => {
      h1.remove();
      document.body.dataset.fireworks = "false";
    }, 3000);
  },
  toggleTypewriter: assign({
    description: (ctx, evt) => {
      const description = { ...ctx.description };
      description.typewriter = !description.typewriter;
      return description;
    },
  }),
  setBox: assign({
    description: (ctx, evt, { action }) => {
      const description = { ...ctx.description };
      description.x = action.x;
      description.y = action.y;
      return description;
    },
  }),
  setCountEnd: assign({
    commitListStep: (ctx, evt) => {
      return 6;
    },
  }),
  countUp: assign({
    commitListStep: (ctx, evt) => {
      return ctx.commitListStep + 1;
    },
  }),
  countDown: assign({
    commitListStep: (ctx, evt) => {
      return ctx.commitListStep - 1;
    },
  }),
  resetCount: assign({
    commitListStep: (ctx, evt) => {
      return -1;
    },
  }),
  resetBranchOverlay: assign({
    branchOverlayStep: (ctx, evt) => {
      return 0;
    },
  }),
  setBranchOverlayEnd: assign({
    branchOverlayStep: (ctx, evt) => {
      return 9;
    },
  }),
  incrementBranchOverlay: assign({
    branchOverlayStep: (ctx, evt) => {
      return ctx.branchOverlayStep + 1;
    },
  }),
  decrementBranchOverlay: assign({
    branchOverlayStep: (ctx, evt) => {
      return ctx.branchOverlayStep - 1;
    },
  }),
  setBranchOverlay: assign({
    branchOverlayStep: (ctx, evt, { action }) => {
      return action.x;
    },
  }),
  unlockScene: assign({
    unlocks: (ctx, evt, { action }) => {
      const unlocks = { ...ctx.unlocks };
      unlocks[action.scene] = true;
      let storage = JSON.parse(localStorage.getItem(unlockStorage));
      storage[action.scene] = true;
      localStorage.setItem(unlockStorage, JSON.stringify(storage));
      return unlocks;
    },
  }),
};
export default actions;
