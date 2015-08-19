var method = Ticket.prototype;

function Ticket(age, name, customerTypes) {
    this.Age = age;
    this.Name = name;
    this.CustomerType = customerTypes;
}

var customerTypes = {
    Standard : "Standard",
    Student : "Student"
}

Ticket.CustomerTypes = customerTypes

module.exports = Ticket; 