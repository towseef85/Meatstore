using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EShop.Application.Widget.Items.Dtos
{
    public class GetWidgetItemDto
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string RedirectTo { get; set; }
        public string RedirectToId { get; set; }
        public string ImageName { get; set; }

        public Boolean isVisible { get; set; }
        public string ImageSrc { get; set; }
        public Guid WidgetId { get; set; }
    }
}
