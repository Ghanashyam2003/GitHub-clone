const yargs = require("yargs");

const { hideBin } = require("yargs/helpers");
const { initRepo } = require("./controllers/init");

yargs(hideBin(process.argv))
  .command(
    "init",
    "Initialize a new repository",
    {},
    initRepo
  )
  .command(
    "add <file>",
    "Add a <file> to the staging area",
    (yargs) => {
      yargs.positional("file", {
        describe: "File to add to the staging area",
        type: "string",
      });
    },
    initRepo // Replace with the correct handler for 'add' if needed
  )
  .demandCommand(1, "You need at least one command before moving on")
  .help()
  .argv;

