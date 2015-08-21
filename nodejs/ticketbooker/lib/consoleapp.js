'use strict';

var method = ConsoleApp.prototype;

var Ticket = require('./ticket.js');
var Tickets = require('./tickets.js');
var readline = require('readline');
var tickets = new Tickets();

function ConsoleApp() {
}

method.start = function () {
  var readLineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  readLineInterface.on('line', function (consoleInput) {
    if (consoleInput === 'exit' || consoleInput === 'e') {
      readLineInterface.close();
    }
    /*var t = new Ticket(10, consoleInput, Ticket.CustomerTypes.Student);
    console.log(t.Name);
    console.log(t.CustomerType);
    console.log(tickets.ticketPrice);*/
    if (consoleInput.indexOf('print summary') > -1) {
      console.log(tickets.getReport());
    } else if (consoleInput.indexOf('set ticket price') > -1) {
      var enteredTextArray = consoleInput.split(' ');
      tickets.ticketPrice = parseFloat(enteredTextArray[3]);
    } else if (consoleInput.indexOf('add standard') > -1) {
      var enteredTextArray1 = consoleInput.split(' ');
      var name = enteredTextArray1[2];
      var age = enteredTextArray1[3];
      var ticket1 = new Ticket(age, name, Ticket.CustomerTypes.Standard);
      tickets.add(ticket1);
    } else if (consoleInput.indexOf('add student') > -1) {
      var enteredTextArray2 = consoleInput.split(' ');
      var name2 = enteredTextArray2[2];
      var age2 = enteredTextArray2[3];
      var ticket2 = new Ticket(age2, name2, Ticket.CustomerTypes.Student);
      tickets.add(ticket2);
    } else if (consoleInput.indexOf('exit') > -1) {
      console.log('Exiting...');
    } else {
      console.log('Unknown Input: ' + consoleInput);
    }
  });
};

module.exports = ConsoleApp;
