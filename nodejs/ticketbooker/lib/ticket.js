'use strict';

function Ticket(age, name, customerType) {
  this.Age = age;
  this.Name = name;
  this.CustomerType = customerType;
}

var customerTypes = {
  Standard: 'Standard',
  Student: 'Student'
};

Ticket.CustomerTypes = customerTypes;

module.exports = Ticket;
