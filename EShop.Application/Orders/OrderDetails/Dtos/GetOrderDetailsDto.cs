using EShop.Application.Products.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EShop.Application.Orders.OrderDetails.Dtos
{
    public class GetOrderDetailsDto
    {
        public Guid Id { get; set; }
        public Guid OrderId { get; set; }
        public Guid ProductId { get; set; }
        public ICollection<GetProductShortDto> Products { get; set; }
        public int Quantity { get; set; }
    }
}
