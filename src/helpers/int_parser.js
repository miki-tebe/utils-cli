const commander = require("commander");

function intParser(value) {
  const parsedValue = parseInt(value, 10);
  if (isNaN(parsedValue)) {
    throw new commander.InvalidArgumentError("Not a number.");
  }
  return parsedValue;
}

module.exports = { intParser };
