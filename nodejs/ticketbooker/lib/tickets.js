'use strict';

var method = Tickets.prototype;
var newLine = require('os').EOL;
var Ticket = require('./ticket.js');

function Tickets() {
  this.ticketPrice = 0;
  this.ticketArray = [];
}

method.getReport = function () {
  var standardTicketTotal = 0.0;
  var studentTicketTotal = 0.0;
  for (var i = 0; i < this.ticketArray.length; i++) {
    var t1 = this.ticketArray[i];
    switch (t1.CustomerType) {
      case Ticket.CustomerTypes.Standard:
        standardTicketTotal += this.ticketPrice;
        break;
      case Ticket.CustomerTypes.Student:
        studentTicketTotal += this.ticketPrice * 0.6;
        break;
      }
  }
  var total = standardTicketTotal + studentTicketTotal;

  var reportOutput = '** SALES REPORT **' + newLine + newLine;
  reportOutput += 'Number of Tickets Sold' + newLine;
  var standardTicketCount = 0;
  for (var i = 0; i < this.ticketArray.length; i++) {
    var t2 = this.ticketArray[i];
    if (t2.CustomerType === Ticket.CustomerTypes.Standard) {
      standardTicketCount++;
    }
  }
  reportOutput += '  Standard: ' + standardTicketCount + newLine;
  var studentTicketCount = 0;
  for (var i = 0; i < this.ticketArray.length; i++) {
    var t3 = this.ticketArray[i];
    if (t3.CustomerType === Ticket.CustomerTypes.Student) {
      studentTicketCount++;
    }
  }
  reportOutput += '  Student: ' + studentTicketCount + newLine + newLine;
  reportOutput += "Income" + newLine;
  reportOutput += "  Standard Total = £" + standardTicketTotal + newLine;
  reportOutput += "  Student Total = £" + studentTicketTotal + newLine;
  reportOutput += "  Total = £" + total;
  return reportOutput;
};

method.add = function (ticket) {
  this.ticketArray.push(ticket);
};

module.exports = Tickets;
