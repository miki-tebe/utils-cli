const { program } = require("commander");
const sleeboard = require("./libs/sleeboard");

program
  .command("am")
  .description("Transliterate English to Amharic")
  .argument("<input>", "The input to transliterate")
  .action((input) => {
    console.log(sleeboard.getAmharic(input));
  });

module.exports = program;
