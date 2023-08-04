const { program } = require("commander");
require("./src/am");
require("./src/bmi");
require("./src/echo");
require("./src/electric");

program
  .name("A collection of utilities")
  .description("A collection of utilities for everyday use in the terminal.")
  .version("0.0.1");

program.parse();
