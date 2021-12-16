using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularPlanning.Models
{
    public class Tracking
    {
        public int TrackingID { get; set; }
        public int EventID { get; set; }
        public int EventTicketsSold { get; set; }
        public int EventFavorites { get; set; }
    }
}
