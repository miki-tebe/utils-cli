# utils

A collection of utilities for everyday use in the terminal.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Commands](#commands)
- [Technologies](#technologies)

## Installation

```bash
git clone https://github.com/miki-tebe/utils-cli.git
cd utils-cli
npm install
```

## Usage
 
Usage: A collection of utilities [options] [command]

```bash
node index.js [command]
```

## Commands

Options:
```
  -v, --version          output the version number
  -h, --help             display help for command
```

Commands:
```
  am <input>             Transliterate English to Amharic
  bmi <weight> <height>  Calculate your BMI
  echo <input>           Echo the input
  electric <bill>        Calculate your electric usage
  help [command]         display help for command
```

## Technologies

- [Commander.js](https://github.com/tj/commander.js)
- [Sleeboard](https://github.com/sleeboard/sleeboard)