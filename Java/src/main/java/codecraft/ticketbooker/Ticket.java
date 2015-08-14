package codecraft.ticketbooker;

public class Ticket
{
    public enum CustomerTypes
    {
        Standard,
        Student
    }

    public CustomerTypes CustomerType;
    public int Age;
    public String Name;
}