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
    [Route("[controller]")]
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

        //public async Task<IActionResult> Search(string option, string search)
        //{
        //    if (option == "Title")
        //    {
        //        return View(_context.Movie.Where(m => m.Title == search || search == null).ToList());
        //    }
        //    else
        //    {
        //        return View(_context.Movie.Where(m => m.Genre == search || search == null).ToList());
        //    }
        //}

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

            //[HttpGet]
            //[Route("ViewEvents")]
            //public async Task<IActionResult> ListEventView()
            //{
            //    var view = new List<EventView>();
            //    var events = await _context.Event.ToListAsync();

            //    foreach (Event e in events)
            //    {
            //        var eventview = new EventView();
            //        eventview.EventNameView = e.EventName.ToString();
            //        eventview.TypeView = e.Type.ToString();
            //        eventview.EventDescription = e.EventDescription.ToString();
            //        eventview.EventPrice = e.EventPrice.ToString();
            //        eventview.EventDate = e.EventDate.ToString();

            //        view.Add(eventview);
            //    }
            //    var result = new OkObjectResult(view);
            //    return result;
            //}

            [HttpGet]
        [Route("ViewLocations")]
        public async Task<IActionResult> ViewLocations()
        {
            var locations = await _context.Location.ToListAsync();

            var result = new OkObjectResult(locations);

            return result;
        }

        [HttpGet]
        [Route("ViewTypes")]
        public async Task<IActionResult> ViewTypes()
        {
            var types = await _context.Type.ToListAsync();

            var result = new OkObjectResult(types);

            return result;
        }

        [HttpGet]
        [Route("ViewTracking")]
        public async Task<IActionResult> ViewTracking()
        {
            var tracking = await _context.Tracking.ToListAsync();

            var result = new OkObjectResult(tracking);

            return result;
        }

        [HttpPost]
        [Route("CreateEvent")]
        public async Task<IActionResult> CreateEvent([Bind("EventID,EventName,Type,EventDescription,EventPrice,EventDate,Location")] CreateEventRequest request)
        {
            var whatever = new Event();
            whatever.EventName = request.EventName;
            whatever.Type = request.Type;
            whatever.EventDescription = request.EventDescription;
            whatever.EventPrice = request.EventPrice;
            whatever.EventDate = request.EventDate;
            whatever.Location = request.Location;
            whatever.UserAdded = true;

            await _context.AddAsync(whatever);
            await _context.SaveChangesAsync();

            var result = new OkObjectResult(whatever);
            return result;
        }
          
    }
        
}
