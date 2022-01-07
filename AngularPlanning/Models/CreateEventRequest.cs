using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularPlanning.Models
{
    public class CreateEventRequest
    {
        public string eventName { get; set; }
        public string type { get; set; }
        public string eventDescription { get; set; }
        public string eventPrice { get; set; }
        public string eventDate { get; set; }
        public int location { get; set; }
        public bool userAdded { get; set; }
    }
}
