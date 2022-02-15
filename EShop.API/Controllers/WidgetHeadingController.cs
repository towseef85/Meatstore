using EShop.API.Extensions;
using EShop.Application.Widget.Headings;
using EShop.Application.Widget.Headings.Dtos;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EShop.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WidgetHeadingController : BaseApiController
    {

        [AllowAnonymous]
        [HttpGet]
        public async Task<ActionResult> GetHeadings()
        {
            return HandleResult(await Mediator.Send(new List.Query()));
        }

        [HttpPost]
        public async Task<IActionResult> CreateWidgetHeading(PostHeadingDto heading)
        {
            return HandleResult(await Mediator.Send(new Create.Command { Heading = heading }));
        }
     }
}
