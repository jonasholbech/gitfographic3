import { initialState } from "./config";
const descriptions = {
  initial: initialState,
  states: {
    introductionScene: {
      name: "Introduction",
      whatIsThis: {
        desc: `Welcome to Gitfographic<3
        
        This little project is meant to help you get up and running in the crazy world of Git.
        
        It is not meant to teach you how to actually do all the Git stuff, but rather:
        - give you an introduction to what it is,
        - why we use it
        - a vocabulary to make learning it easier
 
        Find the next button, and click it
 
        Btw, for now, Safari is a total NO-GO...
        `,
      },
      navigation: {
        desc: `Well done, you found it, did you click the up-arrow as well?
        
        That one gives you an overview of the "levels" you've completed.
        
        You can always jump between completed levels.
        
        Please read all the texts carefully, I've spent a lot of time making them short and to the point
 
        Go ahead and click next (this is the final time I'm telling you)`,
      },
      whatIsGit: {
        desc: `What is Git?
        
        Git is what is called a "version control system"
        
        In English that means: A system to track changes in documents.
        
        In out case, that means HTML / CSS / JS etc
        
        `,
      },
      whyGit: {
        desc: `Git and why bother.
        
        "I don't need that" is a common objection to Git, "I can just copy my folder" is another.

        And that is true, but soon that's going to be a real mess. 
        So let's take a look at the major selling points for Git:
 
  - Git gives you "incremental backups", meaning you can make a "save game" when you feel like it
 - You can always go back to a "save game" later
 - Did you mess something up? Just go back
 - You can make different versions so you can try out ideas safely
 - You can collaborate with others WITHOUT overwriting each others work
 - With a push on a button, all your work is backed up on a service called GitHub"
        `,
      },
      metaphoresUsed: {
        desc: `I'll be using a few metaphores here and there.
        
        Save Games: Those are the points in time you can go back to
        
        Timelines: Those are the different versions of your site/program etc`,
      },
      isItHard: {
        desc: `Is Git hard?
        
        Well, here's a quote I found somewhere:
        
        Git is "Made by geeks, for geeks"
        
        And that is the sad truth.
        
        BUT. It's just a matter of memorizing a few new workflows. 

        So if you can do that and you can be consistent in using those,
        
        Then the advantages outweigh the disadvantages.... a lot.
        
        Have fun, and ask when you're stuck
         - Jonas`,
      },
    },
    overviewScene: {
      name: "Overview",
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
            Where you gather the files you would like to store in the next "commit".
            
            We'll get back to what a commit is shortly`,
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
      name: ".gitignore",
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
      name: "Commits",
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
      name: "Branches",
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
      (although it will at some point be renamed to main or similar).

      Master should always contain working code`,
      },
      branchToFeature1: {
        desc: `From the master branch, we can "branch out",
or "snap a branch" as it's sometimes called.

The new branch is identical to the master branch at that point in time (commit)`,
      },
      feature1: {
        desc: `We now have two separate timelines.
        Master, that holds our working code.
        And feature1.`,
      },
      feature1MergeToMaster: {
        desc: `When development is complete on the feature1 branch,
        we can "merge" the code from feature1 into master.
        
        Now master and feature1 are identical`,
      },
      branchToFeature2Cards: {
        desc: `Let's add another developer. 
        Each developer makes her own branch.`,
      },
      feature2Cards: {
        desc: `Three timelines!
        
        Master is unchanged. 
        And developer A & B can work on their own features, 
        without risking destroying each other's work!
        
        Bloody Awesome`,
      },
      feature2MergeToMaster: {
        desc: `Dev A is done, and merges his code into master.
        
        Dev B is not done yet, and continues to work on her own branch`,
      },
      branchToNav: {
        desc: `Dev A get's a nother task and immediately branches out.
        
        Dev B, well, her task is a bit bigger`,
      },
      developmentComplete: {
        desc: `The nav branch turns out to be a dead end, 
        and it's never merged into master.
        
        In the meantime, developer B finishes her work
        and merges into master`,
      },
    },
  },
};
export default descriptions;