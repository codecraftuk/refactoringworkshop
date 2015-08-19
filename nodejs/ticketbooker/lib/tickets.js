var method = Tickets.prototype;

function Tickets() {
    this.ticketPrice = 0;
}

method.getReport = function() {
    return "** SALES REPORT **";
};

module.exports = Tickets;