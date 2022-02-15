using EShop.API.Extensions;
using EShop.Application.Widget.Items.Dtos;
using EShop.Application.Widget.Items;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;

namespace EShop.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WidgetItemController : BaseApiController
    {
        private readonly ImageUpload _imageUpload;
        public WidgetItemController(ImageUpload imageUpload)
        {
            _imageUpload = imageUpload;
        }

        [AllowAnonymous]
        [HttpGet]
        public async Task<ActionResult> GetWedgetItems()
        {
            return HandleResult(await Mediator.Send(new List.Query()));
        }

        [HttpPost]
        public async Task<IActionResult> CreateWidgetItem([FromForm]PostWidgetItemDto widgetItem)
        {
            if (widgetItem.ImageFile.Length > 0)
            {
                widgetItem.ImageName = await _imageUpload.SaveImage(widgetItem.ImageFile);
            }

            return HandleResult(await Mediator.Send(new Create.Command { WidgetItem = widgetItem }));
        }
    }
}
