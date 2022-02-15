using EShop.Application.Photos;
using EShop.Application.Photos.Dtos;
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
    public class PhotoController : BaseApiController
    {
        [HttpPost]
        public async Task<IActionResult> Add([FromForm] PostPhotoDto photoDto)
        {
            return HandleResult(await Mediator.Send(new Create.Command { photoDto = photoDto }));
        }
    }
}
