using System;
using System.Collections.Generic;
using System.Linq;

namespace TicketBooker
{
    public class Program
    {
        private static readonly Tickets Tickets = new Tickets();

        public static void Main(string[] args)
        {
            string consoleInput;
            do
            {
                consoleInput = Console.ReadLine() ?? "";                
                if (consoleInput.Contains("print summary"))
                {
                    Console.WriteLine();
                    Console.WriteLine(Tickets.GetReport());
                }
                else if (consoleInput.Contains("set ticket price"))
                {
                    var enteredTextArray = consoleInput.Split(' ');
                    Tickets.TicketPrice = Convert.ToInt32(enteredTextArray[3]);
                }
                else if (consoleInput.Contains("add standard"))
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
                    Console.WriteLine("Unknown Input: " + consoleInput);
                }
            } while (consoleInput != "exit");
        }
    }
}
