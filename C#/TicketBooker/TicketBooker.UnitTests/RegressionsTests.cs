using System;
using System.Linq;
using NUnit.Framework;

namespace TicketBooker.UnitTests
{
    public class RegressionsTests
    {
        [Test]
        public void NoInput_RunConsoleApp_NothingReturned()
        {
            var consoleInput = new string [] { };
            var expected = string.Empty;
            var actual = RunConsoleAppAddingExitToInput(consoleInput);
            Assert.AreEqual(expected, actual);
        }

        [Test]
        public void InputDodgyValue_RunConsoleApp_UnknownInputReturned()
        {
            var consoleInput = new[] { "dfgsdfgsdfg" };
            var expected = "Unknown Input: dfgsdfgsdfg";
            var actual = RunConsoleAppAddingExitToInput(consoleInput);
            Assert.AreEqual(expected, actual);
        }

        [Test]
        public void InputTicketPriceAndTicketsAndPrintSummary_RunConsoleApp_SalesReportReturned()
        {
            var consoleInput = new[] {
                "set ticket price 10",
                "add standard Fred 30",
                "add standard Sarah 54",
                "add student Bob 19",
                "add student Kate 17",
                "add student Ashleigh 20",
                "print summary" };
            var expected = "** SALES REPORT **" + Environment.NewLine + Environment.NewLine;
            expected += "Number of Tickets Sold" + Environment.NewLine;
            expected += "  Standard: 2" + Environment.NewLine;
            expected += "  Student: 3" + Environment.NewLine + Environment.NewLine;
            expected += "Income" + Environment.NewLine;
            expected += "  Standard Total = £20" + Environment.NewLine;
            expected += "  Student Total = £18" + Environment.NewLine;
            expected += "  Total = £38";
            var actual = RunConsoleAppAddingExitToInput(consoleInput);
            Assert.AreEqual(expected, actual);
        }

        private string RunConsoleAppAddingExitToInput(string[] consoleInput)
        {
            var inputWithExit = consoleInput.Concat(new[] {"exit"}).ToList();
            return ConsoleRunner.Run(inputWithExit).Trim();
        }
    }
}
