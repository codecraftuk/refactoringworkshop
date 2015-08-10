namespace TicketBooker
{
    public class Ticket
    {
        public enum CustomerTypes
        {
            Standard,
            Student
        }

        public CustomerTypes CustomerType { get; set; }
        public int Age { get; set; }
        public string Name { get; set; }
    }

}
