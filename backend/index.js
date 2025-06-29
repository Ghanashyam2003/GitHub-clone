const yargs = require("yargs");

const { hideBin } = require("yargs/helpers");
const { initRepo } = require("./controllers/init");
const { addRepo } = require("./controllers/add");
const { commitRepo } = require("./controllers/commit");
const { pushRepo } = require("./controllers/push");
const { pullRepo } = require("./controllers/pull");
const { revertRepo } = require("./controllers/revert");


yargs(hideBin(process.argv))
  .command("init", "Initialize a new repository", {}, initRepo)
  .command(
    "add <file>",
    "Add a <file> to the staging area",
    (yargs) => {
      yargs.positional("file", {
        describe: "File to add to the staging area",
        type: "string",
      });
    },
    (argv) => {
        addRepo(argv.file ) // Pass the file argument to addRepo 
    }
  )
  .command(
    "commit <message>",
    "Commit changes with a <message>",
    (yargs) => {
      yargs.positional("message", {
        describe: "commit message",
        type: "string",
      });
    },
    (argv) => {
        commitRepo(argv.message )
    }
  )
  .command("push", "Push changes to the s3", {}, pushRepo)
  .command("pull", "Pull changes to the s3", {}, pullRepo)
.command(
    "revert <commitID>",
    "Revert to a previous commit with <commitID>",
    (yargs) => {
      yargs.positional("commitID", {
        describe: "commit ID to revert to",
        type: "string",
      });
    },
    revertRepo
  )






  .demandCommand(1, "You need at least one command before moving on")
  .help().argv;

