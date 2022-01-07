using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using AngularPlanning.Data;
using AngularPlanning.Models;

namespace AngularPlanning.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventController : Controller
    {
        private readonly AngularPlanningContext _context;

        public EventController(AngularPlanningContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> ViewEvents()
        {
            var events = await _context.Event.ToListAsync();

            var result = new OkObjectResult(events);

            return result;
        }

        [HttpGet]
        [Route("Details")]
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var selectEvent = await _context.Event
                .FirstOrDefaultAsync(m => m.EventID == id);
            if (selectEvent == null)
            {
                return NotFound();
            }

            var result = new OkObjectResult(selectEvent);
            return (result);
        }

        [HttpPost]
        [Route("CreateEvent")]
        public async Task<IActionResult> CreateEvent([Bind("eventID,eventName,type,eventDescription,eventPrice,eventDate,location")] CreateEventRequest request)
        {
            var whatever = new Event();
            whatever.EventName = request.eventName;
            whatever.EventDescription = request.eventDescription;
            whatever.Type = request.type;
            whatever.EventPrice = Decimal.Parse(request.eventPrice);
            whatever.EventDate = DateTime.Parse(request.eventDate);
            whatever.Location = request.location;
            whatever.UserAdded = true;

            await _context.AddAsync(whatever);
            await _context.SaveChangesAsync();

            var result = new OkObjectResult(whatever);
            return result;
        }

        [HttpDelete]
        [Route("Delete")]
        public async Task<ActionResult<Location>> DeleteEvent(int id)
        {
            var selectEvent = await _context.Event
                .FirstOrDefaultAsync(m => m.EventID == id);

            if (selectEvent == null)
            {
                return NotFound();
            }

            _context.Event.Remove(selectEvent);
            await _context.SaveChangesAsync();

            var result = new OkObjectResult(selectEvent);
            return (result);
        }

        [HttpPatch]
        [Route("EditEvent")]
        public async Task<IActionResult> EditEvent(int ID, [Bind("eventID,eventName,type,eventDescription,eventPrice,eventDate,location")] CreateEventRequest update)
        {
            var selectEvent = await _context.Event
            .FirstOrDefaultAsync(m => m.EventID == ID);
            selectEvent.EventName = update.eventName;
            selectEvent.EventDescription = update.eventDescription;
            selectEvent.Type = update.type;
            selectEvent.EventPrice = Decimal.Parse(update.eventPrice);
            selectEvent.EventDate = DateTime.Parse(update.eventDate);
            selectEvent.Location = update.location;

            await _context.SaveChangesAsync();

            var result = new OkObjectResult(selectEvent);
            return result;
        }
    }
}
     