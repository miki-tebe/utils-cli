const { program } = require("commander");
const { intParser } = require("./helpers/int_parser");

program
  .command("electric")
  .description("Calculate your electric usage")
  .argument("<bill>", "Enter your bill amount", intParser)
  .action((bill) => {
    console.log("Your electric usage is: ", bill / 0.349, "kWh");
  });

module.exports = program;
