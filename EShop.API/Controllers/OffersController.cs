using EShop.API.Extensions;
using EShop.Application.OffersWidget;
using EShop.Application.OffersWidget.Dtos;
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
    public class OffersController : BaseApiController
    {
        private readonly ImageUpload _imageUpload;
        public OffersController(ImageUpload imageUpload)
        {
            _imageUpload = imageUpload;
        }
        [AllowAnonymous]
        [HttpGet]
        public async Task<ActionResult> GetOffers()
        {
            return HandleResult(await Mediator.Send(new List.Query()));
        }

        [HttpPost]
        public async Task<IActionResult> CreateOffers([FromForm] PostOfferDto offer)
        {
            if (offer.ImageFile.Length > 0)
            {
                offer.ImageName = await _imageUpload.SaveImage(offer.ImageFile);
            }
            return HandleResult(await Mediator.Send(new Create.Command { OfferDto = offer }));
        }
    }

}
