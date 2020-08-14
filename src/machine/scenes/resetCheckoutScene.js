//import { send } from "xstate";
import topBranchTransitions from "./topBranchTransitions";
const resetCheckoutScene = {
  id: "resetCheckoutScene",
  initial: "opening",
  on: topBranchTransitions,
  states: {
    opening: {},
  },
};
export default resetCheckoutScene;
