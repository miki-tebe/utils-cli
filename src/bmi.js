const { program } = require("commander");
const { intParser } = require("./helpers/int_parser");

program
  .command("bmi")
  .description("Calculate your BMI")
  .argument("<weight>", "Enter your weight in kg", intParser)
  .argument("<height>", "Enter your height in cm", intParser)
  .action((weight, height) => {
    console.log("Your BMI is: ", weight / (height / 100) ** 2);
  });

module.exports = program;
