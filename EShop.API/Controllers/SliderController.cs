using EShop.API.Extensions;
using EShop.Application.SliderWidget;
using EShop.Application.SliderWidget.Dtos;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace EShop.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SliderController : BaseApiController
    {
        private readonly ImageUpload _imageUpload;
        public SliderController(ImageUpload imageUpload)
        {
            _imageUpload = imageUpload;
        }
        [AllowAnonymous]
        [HttpGet]
        public async Task<ActionResult> GetSliders()
        {
            return HandleResult(await Mediator.Send(new List.Query()));
        }

        [HttpPost]
        public async Task<IActionResult> CreateSlider([FromForm] PostSliderDto slider)
        {
            if (slider.ImageFile.Length > 0)
            {
                slider.ImageName = await _imageUpload.SaveImage(slider.ImageFile);
            }
            return HandleResult(await Mediator.Send(new Create.Command { sliderDto = slider }));
        }
    }
}
