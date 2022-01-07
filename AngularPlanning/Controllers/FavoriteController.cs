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
    public class FavoriteController : ControllerBase
    {
        private readonly AngularPlanningContext _context;

        public FavoriteController(AngularPlanningContext context)
        {
            _context = context;
        }

        // GET: api/Favorite
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Favorite>>> GetFavorite()
        {
            return await _context.Favorite.ToListAsync();
        }

        [HttpPost]
        [Route("AddFav")]
        public async Task<IActionResult> AddFav([FromBody] int favEventID)
        {
            var newFav = new Favorite();
            newFav.UserID = 369;
            newFav.EventID = favEventID;

            await _context.AddAsync(newFav);
            await _context.SaveChangesAsync();

            var result = new OkObjectResult(newFav);
            return result;

        }

        [HttpGet]
        [Route("SeeFav")]
        public async Task<IActionResult> ViewFavs()
        {
            var favs = new List<int>();
            foreach (Favorite f in _context.Favorite.ToList())
            {
                favs.Add(f.EventID);
            }

            var events = await _context.Event.ToListAsync();
            var eventsID = new List<int>();
            var favEvents = new List<Event>();

            foreach (Event e in events)
            {
                eventsID.Add(e.EventID);
            }
            var favEventsID = favs.Intersect(eventsID);

            foreach (int id in favEventsID)
            {
                var selectEvent = await _context.Event
            .FirstOrDefaultAsync(m => m.EventID == id);
                favEvents.Add(selectEvent);
            }

            var result = new OkObjectResult(favEvents);

            return result;

        }
    }
}
