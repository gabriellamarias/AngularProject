using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AngularPlanning.Data;
using AngularPlanning.Models;

namespace AngularPlanning.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LocationController : ControllerBase
    {
        private readonly AngularPlanningContext _context;

        public LocationController(AngularPlanningContext context)
        {
            _context = context;
        }

        // GET: api/Location
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Location>>> GetLocation()
        {
            return await _context.Location.ToListAsync();
        }


        [HttpGet]
        [Route("Details")]
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var selectLocation = await _context.Location
                .FirstOrDefaultAsync(m => m.LocationID == id);
            if (selectLocation == null)
            {
                return NotFound();
            }

            var result = new OkObjectResult(selectLocation);
            return (result);
        }


    }
}
