using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EShop.Domain
{
    public class WidgetItems
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string ArabicTitle { get; set; }
        public string RedirectTo { get; set; }
        public Boolean isVisible { get; set; }
        public string RedirectToId { get; set; }

        public string ImageName { get; set; }
       
        [NotMapped]
        public string ImageSrc { get; set; }
        public Guid WidgetId { get; set; }
        public virtual WidgetHeading WidgetHeading { get; set; }
    }
}
