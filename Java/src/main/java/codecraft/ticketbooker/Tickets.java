package codecraft.ticketbooker;

import java.util.*;
import java.util.stream.Stream;
import codecraft.ticketbooker.*;

public class Tickets
{
    private final String NewLine = System.getProperty("line.separator");
    public ArrayList<Ticket> TicketList = new ArrayList<Ticket>();
    public int TicketPrice;

    public String GetReport()
    {
        Double standardTicketTotal = 0.0;
        Double studentTicketTotal = 0.0;
        for (Ticket tickets : TicketList)
        {
            switch (tickets.CustomerType)
            {
                case Standard:
                    standardTicketTotal += TicketPrice;
                    break;
                case Student:
                    studentTicketTotal += TicketPrice * 0.6;
                    break;
            }
        }
        Double total = standardTicketTotal + studentTicketTotal;
        String reportOutput = "** SALES REPORT **" + NewLine + NewLine;
        reportOutput += "Number of Tickets Sold" + NewLine;
        long standardTicketCount = TicketList.stream().filter(t -> t.CustomerType == Ticket.CustomerTypes.Standard).count();
        reportOutput += "  Standard: " + standardTicketCount + NewLine;
        long studentTicketCount = TicketList.stream().filter(t -> t.CustomerType == Ticket.CustomerTypes.Student).count();
        reportOutput += "  Student: " + studentTicketCount + NewLine;
        reportOutput += NewLine;
        reportOutput += "Income" + NewLine;
        reportOutput += "  Standard Total = £" + standardTicketTotal + NewLine;
        reportOutput += "  Student Total = £" + studentTicketTotal + NewLine;
        reportOutput += "  Total = £" + total;
        return reportOutput;
    }

    public void Add(Ticket ticket)
    {
        TicketList.add(ticket);
    }
}