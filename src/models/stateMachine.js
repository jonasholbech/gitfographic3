import { Machine, assign } from "xstate";

import { initialState } from "./config";
//TODO: when switching scenes the text is misplaced, add initial setBox to all scenes
//TODO: remove console errors from xstate, looks simple
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
      unlocks: {
        overviewScene: false,
        gitignoreScene: false,
        commitScene: false,
      },
      commitListStep: -1,
    },
    states: {
      loaded: {
        id: "loaded",
        on: {
          next: {
            target: "overviewScene",
            actions: { type: "unlockScene", scene: "overviewScene" },
          },
        },
      },
      //scenes
      overviewScene: {
        id: "overviewScene",
        initial: "first",
        on: {
          overviewScene: "overviewScene",
          gitignoreScene: "gitignoreScene",
          commitScene: "commitScene",
        },
        states: {
          first: {
            on: {
              next: "drawLocalBox",
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
              next: {
                target: "#gitignoreScene",
                actions: { type: "unlockScene", scene: "gitignoreScene" },
              },
              prev: "pullCommand",
            },
          },
        },
      },
      gitignoreScene: {
        initial: "opening",
        id: "gitignoreScene",
        on: {
          overviewScene: "overviewScene",
          gitignoreScene: "gitignoreScene",
          commitScene: "commitScene",
        },
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
              next: {
                target: "#commitScene",
                actions: { type: "unlockScene", scene: "overviewScene" },
              },
              prev: "gitIgnoreFile",
            },
          },
        },
      },
      commitScene: {
        id: "commitScene",
        initial: "opening",
        on: {
          overviewScene: "overviewScene",
          gitignoreScene: "gitignoreScene",
          commitScene: "commitScene",
        },
        states: {
          opening: {
            on: {
              "": "beforeCommits",
            },
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
              next: {
                target: "",
                actions: { type: "unlockScene", scene: "commitScene" },
              },
              prev: {
                target: "commits6",
                actions: "countDown",
              },
            },
          },
        },
      },
    },
  },
  {
    actions: {
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
      unlockScene: assign({
        unlocks: (ctx, evt, { action }) => {
          const unlocks = { ...ctx.unlocks };
          unlocks[action.scene] = true;
          return unlocks;
        },
      }),
    },
  }
);

export default flowMachine;
