package ticketbooker;

import java.util.ArrayList;

public class Tickets {
    private final String newLine = System.getProperty("line.separator");
    public ArrayList<Ticket> ticketList = new ArrayList<Ticket>();
    public int ticketPrice;

    public String getReport() {
        Double standardTicketTotal = 0.0;
        Double studentTicketTotal = 0.0;
        for (Ticket tickets : ticketList) {
            switch (tickets.CustomerType) {
                case Standard:
                    standardTicketTotal += ticketPrice;
                    break;
                case Student:
                    studentTicketTotal += ticketPrice * 0.6;
                    break;
            }
        }
        Double total = standardTicketTotal + studentTicketTotal;
        String reportOutput = "** SALES REPORT **" + newLine + newLine;
        reportOutput += "Number of Tickets Sold" + newLine;
        long standardTicketCount = ticketList.stream().filter(t -> t.CustomerType == Ticket.CustomerTypes.Standard).count();
        reportOutput += "  Standard: " + standardTicketCount + newLine;
        long studentTicketCount = ticketList.stream().filter(t -> t.CustomerType == Ticket.CustomerTypes.Student).count();
        reportOutput += "  Student: " + studentTicketCount + newLine;
        reportOutput += newLine;
        reportOutput += "Income" + newLine;
        reportOutput += "  Standard Total = £" + standardTicketTotal + newLine;
        reportOutput += "  Student Total = £" + studentTicketTotal + newLine;
        reportOutput += "  Total = £" + total;
        return reportOutput;
    }

    public void add(Ticket ticket) {
        ticketList.add(ticket);
    }
}