'use strict';

module.exports = {};

var readline = require('readline');

var readLineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

readLineInterface.on('line', function (inputCommand) {
  console.log('You just typed: ' + inputCommand);
  if (inputCommand === 'exit') {
    readLineInterface.close();
  }
});

