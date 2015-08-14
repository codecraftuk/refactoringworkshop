using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Text;

namespace TicketBooker.UnitTests
{
    internal class ConsoleRunner
    {
        internal static string Run(List<string> consoleInput)
        {
            var inputText = String.Join(Environment.NewLine, consoleInput);
            var inputStringReader = new StringReader(inputText);
            Console.SetIn(inputStringReader);
            var output = new StringBuilder();
            var stringWriter = new StringWriter(output);
            Console.SetOut(stringWriter);            
            Program.Main(null);
            return output.ToString();
        }
    }
}