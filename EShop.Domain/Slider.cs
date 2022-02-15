using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EShop.Domain
{
    public class Slider
    {
        public Guid Id { get; set; }
        public int Position { get; set; }
        public string ImageName { get; set; }

        [NotMapped]
        public string ImageSrc { get; set; }
        public string RedirectTo { get; set; }
        public Boolean isVisible { get; set; }
        public string RedirectToId { get; set; }
    }
}
