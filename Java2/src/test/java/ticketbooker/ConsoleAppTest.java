package ticketbooker;

import org.junit.Test;

import java.io.*;

import static org.junit.Assert.assertEquals;

public class ConsoleAppTest {
    private final String newline = System.getProperty("line.separator");

    @Test
    public void noInput_RunConsoleApp_NothingReturned() {
        String consoleInput = "";
        String expected = "";
        String actual = runConsoleAppAddingExitToInput(consoleInput);
        assertEquals(expected, actual);
    }

    @Test
    public void inputDodgyValue_RunConsoleApp_UnknownInputReturned() {
        String consoleInput = "dfgsdfgsdfg" + newline;
        String expected = "Unknown Input: dfgsdfgsdfg";
        String actual = runConsoleAppAddingExitToInput(consoleInput);
        assertEquals(expected, actual);
    }

    @Test
    public void inputTicketPriceAndTicketsAndPrintSummary_RunConsoleApp_SalesReportReturned() {
        String consoleInput =
                "set ticket price 10" + newline +
                        "add standard Fred 30" + newline +
                        "add standard Sarah 54" + newline +
                        "add student Bob 19" + newline +
                        "add student Kate 17" + newline +
                        "add student Ashleigh 20" + newline +
                        "print summary" + newline;
        String expected = "** SALES REPORT **" + newline + newline;
        expected += "Number of Tickets Sold" + newline;
        expected += "  Standard: 2" + newline;
        expected += "  Student: 3" + newline + newline;
        expected += "Income" + newline;
        expected += "  Standard Total = £20.0" + newline;
        expected += "  Student Total = £18.0" + newline;
        expected += "  Total = £38.0";
        String actual = runConsoleAppAddingExitToInput(consoleInput);
        assertEquals(expected, actual);
    }

    private String runConsoleAppAddingExitToInput(String consoleInput) {
        String consoleInputWithExit = consoleInput + "exit" + newline;
        return runConsolApp(consoleInputWithExit).trim();
    }

    private String runConsolApp(String consoleInput) {
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
