package codecraft.ticketbooker;

import static java.lang.System.*;
import java.util.Scanner;

public class ConsoleApp
{
    private static Tickets Tickets = new Tickets();
    public static void main(String[] args)
    {
        String consoleInput;
        Scanner scanner = new Scanner(System.in);
        do
        {
            consoleInput = scanner.nextLine();
            if (consoleInput.contains("print summary"))
            {
                out.println();
                out.println(Tickets.GetReport());
            }
            else if (consoleInput.contains("set ticket price"))
            {
                String[] enteredTextArray = consoleInput.split(" ");
                Tickets.TicketPrice = Integer.parseInt(enteredTextArray[3]);
            }
            else if (consoleInput.contains("add standard"))
            {
                String[] enteredTextArray = consoleInput.split(" ");
                Ticket ticket = new Ticket();
                ticket.CustomerType = Ticket.CustomerTypes.Standard;
                ticket.Name = enteredTextArray[2];
                ticket.Age = Integer.parseInt(enteredTextArray[3]);
                Tickets.Add(ticket);
            }
            else if (consoleInput.contains("add student"))
            {
                String[] enteredTextArray = consoleInput.split(" ");
                Ticket ticket = new Ticket();
                ticket.CustomerType = Ticket.CustomerTypes.Student;
                ticket.Name = enteredTextArray[2];
                ticket.Age = Integer.parseInt(enteredTextArray[3]);
                Tickets.Add(ticket);
            }
            else if (consoleInput.startsWith("exit"))
                continue;
            else
                out.println("Unknown Input: " + consoleInput);
        } while (!consoleInput.startsWith("exit"));
    }
}
