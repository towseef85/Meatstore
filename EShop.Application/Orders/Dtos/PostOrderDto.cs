using EShop.Application.Orders.OrderDetails.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EShop.Application.Orders.Dtos
{
    public class PostOrderDto
    {
        public Guid Id { get; set; }
        public Guid UserId { get; set; }
        public Guid UserAddressId { get; set; }
        public string Status { get; set; }
        public string Total { get; set; }
        public DateTime CreatedOn { get; set; }
        public virtual ICollection<PostOrderDetailsDto> OrderDetails { get; set; }
    }
}
