import React, { useContext } from "react";
import { Machine, send, interpret, assign } from "xstate";
//import { store } from "./store.js";
import { initialState } from "./config";

const flowMachine = Machine(
  {
    id: "gitMachine",
    initial: initialState,
    context: {
      description: {
        x: 100,
        y: 100,
        typewriter: false,
      },
      commitListStep: -1,
    },
    states: {
      loaded: {
        id: "loaded",
        on: { next: "overviewScene" },
      },
      //scenes
      overviewScene: {
        id: "overviewScene",
        initial: "first",
        states: {
          first: {
            on: {
              next: "drawLocalBox",
              prev: {
                actions: ["placeholder"],
                target: "#loaded",
              },
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
            entry: { type: "setBox", x: 140, y: 200 },
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
              next: "#gitignoreScene",
              prev: "pullCommand",
            },
          },
        },
      },
      gitignoreScene: {
        initial: "opening",
        id: "gitignoreScene",
        states: {
          opening: {
            on: {
              "": "gitIgnoreSceneSet",
            },
          },
          gitIgnoreSceneSet: {
            entry: { type: "setBox", x: 200, y: 0 },
            on: {
              next: "gitIgnoreSceneSet2",
              prev: "#overviewScene.pullCommand",
            },
          },
          gitIgnoreSceneSet2: {
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
              next: "#commitScene",
              prev: "gitIgnoreFile",
            },
          },
        },
      },
      commitScene: {
        id: "commitScene",
        initial: "opening",
        states: {
          opening: {
            on: {
              "": "beforeCommits",
            },
          },
          beforeCommits: {
            on: {
              next: "commits1",
              prev: "#gitignoreScene.gitIgnoreFileMovedBack",
            },
          },
          commits1: {
            on: {
              next: "commits2",
              prev: "beforeCommits",
            },
          },
          commits2: {
            on: {
              next: "commits3",
              prev: "commits1",
            },
          },
          commits3: {
            on: {
              next: "commits4",
              prev: "commits2",
            },
          },
          commits4: {
            on: {
              next: "commits5",
              prev: "commits3",
            },
          },
          commits5: {
            on: {
              next: "commits6",
              prev: "commits4",
            },
          },
          commits6: {
            on: {
              next: "commits7",
              prev: "commits5",
            },
          },
          commits7: {
            on: {
              next: "",
              prev: "commits6",
            },
          },
        },
      },
    },
  },
  {
    actions: {
      // action implementations
      addStartOfTurnUnitsTest: (context, event) => {
        //
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
    },
  }
);

export default flowMachine;
