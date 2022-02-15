using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EShop.Application.Products.Dtos
{
    public class PostProductDto
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string SubTitle { get; set; }
        public string ArabicSubTitle { get; set; }
        public string ArabicTitle { get; set; }
        public string Description { get; set; }
        public string DescriptionArabic { get; set; }
        public Boolean ShowAsBestSeller { get; set; }
        public string MinQuantity { get; set; }
        public Guid UnitId { get; set; }
        public decimal Price { get; set; }
        public Guid CategoryId { get; set; }
    }
}
