package codecraft.ticketbooker;

import codecraft.ticketbooker.*;
import java.io.*;
import java.util.Scanner;
import static org.junit.Assert.assertEquals;
import org.junit.Test;

public class ConsoleAppTest
{
		private final String NewLine = System.getProperty("line.separator");

  	@Test
	  public void NoInput_RunConsoleApp_NothingReturned()
    {
        String consoleInput = "";
        String expected = "";
        String actual = RunConsoleAppAddingExitToInput(consoleInput);
        assertEquals(expected, actual);
    }

  	@Test
    public void InputDodgyValue_RunConsoleApp_UnknownInputReturned()
    {
        String consoleInput = "dfgsdfgsdfg" + NewLine;
        String expected = "Unknown Input: dfgsdfgsdfg";
        String actual = RunConsoleAppAddingExitToInput(consoleInput);
        assertEquals(expected, actual);
    }

    @Test
    public void InputTicketPriceAndTicketsAndPrintSummary_RunConsoleApp_SalesReportReturned()
    {
    		String consoleInput =
            "set ticket price 10" + NewLine +
            "add standard Fred 30" + NewLine +
            "add standard Sarah 54" + NewLine +
            "add student Bob 19" + NewLine +
            "add student Kate 17" + NewLine +
            "add student Ashleigh 20" + NewLine +
            "print summary" + NewLine;
        String expected = "** SALES REPORT **" + NewLine + NewLine;
        expected += "Number of Tickets Sold" + NewLine;
        expected += "  Standard: 2" + NewLine;
        expected += "  Student: 3" + NewLine + NewLine;
        expected += "Income" + NewLine;
        expected += "  Standard Total = £20.0" + NewLine;
        expected += "  Student Total = £18.0" + NewLine;
        expected += "  Total = £38.0";
        String actual = RunConsoleAppAddingExitToInput(consoleInput);
        assertEquals(expected, actual);
    }

    private String RunConsoleAppAddingExitToInput(String consoleInput)
    {
	    	String consoleInputWithExit = consoleInput + "exit" + NewLine;
	    	return RunConsolApp(consoleInputWithExit).trim();
    }

	  private String RunConsolApp(String consoleInput)
    {
	    	PrintStream originalOutputStream = System.out;
	    	InputStream originalInputStream = System.in;

		  	System.setIn(new ByteArrayInputStream(consoleInput.getBytes()));

	    	OutputStream outputStream = new ByteArrayOutputStream();
	    	System.setOut(new PrintStream(outputStream));

    		ConsoleApp.main(null);

	    	System.setIn(originalInputStream);
	    	System.setOut(originalOutputStream);
	    	return outputStream.toString();
    }
}
