'use strict';

module.exports = {};
var Ticket = require('./ticket.js');
var Tickets = require('./tickets.js');
var readline = require('readline');
var tickets = new Tickets();

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
  if (consoleInput.indexOf("print summary") > -1)
  {
    console.log(tickets.getReport());
  }
  else if (consoleInput.indexOf("set ticket price") > -1)
  {
    var enteredTextArray = consoleInput.split(" ");
    tickets.ticketPrice = enteredTextArray[3];
  }
      /*else if (consoleInput.Contains("add standard"))
      {
          var enteredTextArray = consoleInput.Split(' ');
          Tickets.Add(new Ticket
          {
              CustomerType = Ticket.CustomerTypes.Standard,
              Name = enteredTextArray[2],
              Age = Convert.ToInt32(enteredTextArray[3])
          });
      }
      else if (consoleInput.Contains("add student"))
      {
          var enteredTextArray = consoleInput.Split(' ');
          Tickets.Add(new Ticket
          {
              CustomerType = Ticket.CustomerTypes.Student,
              Name = enteredTextArray[2],
              Age = Convert.ToInt32(enteredTextArray[3])
          });
      }
      else if (consoleInput.Contains("exit"))
      {
          break;
      }
      else
      {
          console.log("Unknown Input: " + consoleInput);
      }*/
});