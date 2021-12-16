using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularPlanning.Models
{
    public class Event
    {
        public int EventID { get; set; }
        public string EventName { get; set; }
        public int Type { get; set; }
        public string EventDescription { get; set; }
        public decimal EventPrice { get; set; }
        public DateTime EventDate { get; set; }
        public int Location { get; set; }
        public bool UserAdded { get; set; }

    }
}
