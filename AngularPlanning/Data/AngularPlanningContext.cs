using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using AngularPlanning.Models;

namespace AngularPlanning.Data
{
    public class AngularPlanningContext : DbContext
    {
        public AngularPlanningContext (DbContextOptions<AngularPlanningContext> options)
            : base(options)
        {
        }

        public DbSet<AngularPlanning.Models.Event> Event { get; set; }
        public DbSet<AngularPlanning.Models.Location> Location { get; set; }
    }
}
