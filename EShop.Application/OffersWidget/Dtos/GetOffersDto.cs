using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EShop.Application.OffersWidget.Dtos
{
    public class GetOffersDto
    {
        public Guid Id { get; set; }

        [DisplayFormat(DataFormatString = "{dd/MM/yyyy:0}")]
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string ImageName { get; set; }
        public string Position { get; set; }
        public string ImageSrc { get; set; }
        public string RedirectTo { get; set; }
        public Boolean isVisible { get; set; }
        public string RedirectToId { get; set; }
    }
}
