using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace AngularPlanning.Models
{
    public class Favorite
    {
        [Key]
        public int FavID { get; set; }
        public int UserID { get; set; }
        public int EventID { get; set; }
    }
}
