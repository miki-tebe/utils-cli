const { program } = require("commander");

program
  .command("echo")
  .description("Echo the input")
  .argument("<input>", "The input to echo back")
  .action((input) => {
    console.log(input);
  });

module.exports = program;
