'use strict';

var method = Tickets.prototype;
var newLine = require('os').EOL;
var Ticket = require('./ticket.js');

function Tickets() {
  this.ticketPrice = 0;
  this.ticketArray = new Array();
}

method.getReport = function () {
    var standardTicketTotal = 0.0;
    var studentTicketTotal = 0.0;
    /*for (var tickets : ticketList) {
        switch (tickets.CustomerType) {
            case Standard:
                standardTicketTotal += ticketPrice;
                break;
            case Student:
                studentTicketTotal += ticketPrice * 0.6;
                break;
        }
    }
    Double total = standardTicketTotal + studentTicketTotal;*/

  var reportOutput = "** SALES REPORT **" + newLine + newLine;
  reportOutput += "Number of Tickets Sold";
  var standardTicketCount = 0;
  /*for (t in ticketArray) {
    if(t.CustomerType == Ticket.CustomerTypes.Standard)
      standardTicketCount++;
    }*/
  reportOutput += "  Standard: " + standardTicketCount + newLine;
  return reportOutput;
};

module.add = function(ticket) {
  ticketList.push(ticket);
};

module.exports = Tickets;
