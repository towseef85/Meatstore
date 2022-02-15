using EShop.Application.Photos.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EShop.Application.Products.Dtos
{
    public class GetProductShortDto
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public decimal Price { get; set; }
        public ICollection<GetPhotosDto> Photos { get; set; }
    }
}
