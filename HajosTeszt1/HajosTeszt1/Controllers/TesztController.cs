using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace HajosTeszt1.Controllers
{
    //[Route("api/[controller]")]
    [ApiController]
    public class TesztController : Controller
    {
        [HttpGet]
        [Route("corvinus/szerverido")]
        public IActionResult M1()
        {
            string pontosIdő = DateTime.Now.ToShortTimeString();

            return new ContentResult
            {
                ContentType = System.Net.Mime.MediaTypeNames.Text.Plain, //"text/plain"
                Content = pontosIdő
            };
        }

    }
}
