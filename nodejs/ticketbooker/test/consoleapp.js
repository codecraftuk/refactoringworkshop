'use strict';

var assert = require('assert');
var ConsoleApp = require('../lib/consoleapp');
var newLine = require('os').EOL;

describe('ticketbooker regression tests', function () {
  it('input doggy value, run console, unknown input returned.', function () {
    var actual = runConsoleApp('gobbledygook');
    var expected = 'Unknown Input: gobbledygook';
    assert.equal(actual, expected);
  });

  it('input ticket price and tickets and print summary, run console, summary returned', function () {
    var input = ['set ticket price 10',
      'add standard Fred 30',
      'add standard Sarah 54',
      'add student Bob 19',
      'add student Kate 17',
      'add student Ashleigh 20',
      'print summary'];
    var actual = runConsoleApp(input);
    var expected = '** SALES REPORT **' + newLine + newLine;
    expected += 'Number of Tickets Sold' + newLine;
    expected += '  Standard: 2' + newLine;
    expected += '  Student: 3' + newLine + newLine;
    expected += 'Income' + newLine;
    expected += '  Standard Total = £20' + newLine;
    expected += '  Student Total = £18' + newLine;
    expected += '  Total = £38';
    assert.equal(actual, expected);
  });

  function runConsoleApp(consoleInput) {
    var stdMocks = require('std-mocks');
    var stdin = require('mock-stdin').stdin();
    var consoleApp = new ConsoleApp();
    consoleApp.start();
    stdin.send(consoleInput);
    stdMocks.use();
    stdin.send(newLine);
    stdMocks.restore();
    stdin.send('exit' + newLine);
    stdin.restore();
    var output = stdMocks.flush();
    var outputClean = output.stdout.toString().replace(',', newLine).trim();
    return outputClean;
  }
});
