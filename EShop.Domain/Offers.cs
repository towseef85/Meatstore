using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EShop.Domain
{
    public class Offers
    {
        public Guid Id { get; set; }
       
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string ImageName { get; set; }
        public string Position { get; set; }

        [NotMapped]
        public string ImageSrc { get; set; }
        public string RedirectTo { get; set; }
        public Boolean isVisible { get; set; }
        public string RedirectToId { get; set; }
    }
}
