using Microsoft.AspNetCore.Http;
using System;


namespace EShop.Application.OffersWidget.Dtos
{
    public class PostOfferDto
    {
        public Guid Id { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string ImageName { get; set; }
        public string Position { get; set; }
        public IFormFile ImageFile { get; set; }
        public string RedirectTo { get; set; }
        public Boolean isVisible { get; set; }
        public string RedirectToId { get; set; }
    }
}
