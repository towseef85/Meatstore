using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EShop.Application.Widget.Headings.Dtos
{
    public class PostHeadingDto
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string ArabicTitle { get; set; }
        public int Rows { get; set; }
        public Boolean isVisible { get; set; }
    }
}
