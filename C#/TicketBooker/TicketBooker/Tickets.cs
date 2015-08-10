using System;
using System.Collections.Generic;
using System.Linq;

namespace TicketBooker
{
    public class Tickets
    {
        public List<Ticket> TicketList = new List<Ticket>();
        public int TicketPrice;

        public string GetReport()
        {
            var standardTicketTotal = 0.0;
            var studentTicketTotal = 0.0;
            foreach (var tickets in TicketList)
            {
                switch (tickets.CustomerType)
                {
                    case Ticket.CustomerTypes.Standard:
                        standardTicketTotal += TicketPrice;
                        break;
                    case Ticket.CustomerTypes.Student:
                        studentTicketTotal += TicketPrice * 0.6;
                        break;
                }
            }

            var total = standardTicketTotal + studentTicketTotal;
            var reportOutput = "** SALES REPORT **" + Environment.NewLine + Environment.NewLine;
            reportOutput += "Number of Tickets Sold" + Environment.NewLine;
            reportOutput += "  Standard: " + TicketList.Count(t => t.CustomerType == Ticket.CustomerTypes.Standard) + Environment.NewLine;
            reportOutput += "  Student: " + TicketList.Count(t => t.CustomerType == Ticket.CustomerTypes.Student) + Environment.NewLine;
            reportOutput += Environment.NewLine;
            reportOutput += "Income" + Environment.NewLine;
            reportOutput += "  Standard Total = £" + standardTicketTotal + Environment.NewLine;
            reportOutput += "  Student Total = £" + studentTicketTotal + Environment.NewLine;
            reportOutput += "  Total = £" + total;
            return reportOutput;
        }

        public void Add(Ticket ticket)
        {
            TicketList.Add(ticket);
        }
    }
}
