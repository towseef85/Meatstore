using Microsoft.AspNetCore.Http;
using System;


namespace EShop.Application.SliderWidget.Dtos
{
    public class PostSliderDto
    {
        public Guid Id { get; set; }
        public int Position { get; set; }
        public string ImageName { get; set; }
        public string ImageSrc { get; set; }
        public IFormFile ImageFile { get; set; }
        public string RedirectTo { get; set; }
        public Boolean isVisible { get; set; }
        public string RedirectToId { get; set; }
    }
}
