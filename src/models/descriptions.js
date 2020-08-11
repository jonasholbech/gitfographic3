import { initialState } from "./config";
const descriptions = {
  initial: initialState,
  states: {
    loaded: {
      desc: `Everything is loaded
      And I just need you to press the "next" button`,
    },
    overviewScene: {
      first: {
        desc: `From a top view, git is just
        moving stuff between four boxes`,
      },
      drawLocalBox: {
        desc: `Boxes on our own computer`,
      },
      drawRemoteBox: {
        desc: `and a box up in the cloud.
Usually GitHub`,
      },
      workingArea: {
        desc: `The folder where we have our development files
        is called the "working area"`,
      },
      stagingArea: {
        desc: `The staging area is a temporary "folder"
            Where you gather the files you would like to store in the next commit`,
      },
      localRepository: {
        desc: `The Local Repository, or local repo,
      is where all your local 
      commits, branches etc are stored.
    This is where your "save games" are located`,
      },
      remoteRepository: {
        desc: `This is your online backup,
        it's a copy of your local repository.
        This is also where team members
        gets your code`,
      },
      addCommand: {
        desc: `Files are marked to be staged using the "add" command`,
      },
      addCommandMoveFile1: {
        desc: `You can mark individual files`,
      },
      addCommandMoveFile2and3: {
        desc: `or multiple`,
      },
      addCommandMoveFile3Back: {
        desc: `If you are not satisfied with your choices
        you can "unstage" a file with the "reset" command`,
      },
      commitCommand: {
        desc: `When you have staged all the files you need to
        You can make a "save game" containing
        - all your previous code
        - everything you've staged
        Once commited, the staged files becomes "unstaged"`,
      },
      pushCommand: {
        desc: `To back up your work,
        or share it with your team,
        use the "push" command to put 
        everything online.
        Usually on GitHub.
        Now it's available for your team.
        AND you have a copy online`,
      },
      pullCommand: {
        desc: `To get back your code (when you've messed up)
        or when a team mate has pushed something you need,
        issue a "pull" command`,
      },
      takeAScreenshot: {
        desc: `NOW would be a good time to take a screenshot or some notes :-)`,
      },
    },
    gitignoreScene: {
      gitIgnoreSceneSet: {
        desc: `Let's explore our working copy a bit more
        It's the files as they are on our computer.
        
        All files you add to the folder is waiting to be either 
        - tracked
        - excluded from tracking`,
      },
      gitIgnoreSceneSet2: {
        desc: `Tracking was done by "adding" the file. Thereby telling git to keep track of it.
          Excluding a file is done by
          - not adding it (which is error prone, I have added files by accident countless times)
          - or writing the file name in a special file called ".gitignore"
          Let's take a look at this file`,
      },
      gitIgnoreFile: {
        desc: `#in this file we list the
        #files/folders that should
        # never be tracked, like:
        notes.txt
        *.psd
        wireframes/
        node_modules/
        myWeekendPlans.*
        
        #once written here, they
        #can no longer be added 
        #to staging`,
      },
      gitIgnoreFileMovedBack: {
        desc: `In general, add files to .gitignore that are
          - not needed for the project to run
          - is generated by the code
          - not needed by other team members`,
      },
    },
    commitScene: {
      beforeCommits: {
        desc: `That was the overview. Let's take a look at what happens inside the repository`,
      },
      commits1: {
        desc: `Inside our repository, we have commits.
          Commits are usually visualized as a circle`,
      },
      commits2: {
        desc: `Everytime we do another commit, we're modifying a timeline`,
      },
      commits3: {
        desc: `After two commits, our timeline looks like this`,
      },
      commits4: {
        desc: `We can keep doing this forever`,
      },
      commits5: {
        desc: `Don't worry, that was the last one.
          
          Now for the beautiful part. We can travel in time!`,
      },
      commits6: {
        desc: `Using the reset command, we can go back to any commit we've made.
          
          Undoing all changes after that commit!
          That is why I call them save games. 
          - Save before you enter the boss-fight. 
          - Save before something dangerous`,
      },
      commits7: {
        desc: `ready to dive a bit deeper? Take a break, I'm not going anywhere!`,
      },
    },
    branchScene: {
      opening: {
        desc: `Branches allows us to make multiple timelines
(those things with the commits)
 

This provides us with a lot of benefits:
- When working together we can have our own timelines (no overwriting each other)
- If a timeline fails, we can just go back, ignoring that timeline
- We can "merge" two timelines, combining the work of developer A & B`,
      },
      master: {
        desc: `Our initial branch is called "master"
(although it will at some point be renamed to main or similar)`,
      },
    },
  },
};
export default descriptions;
