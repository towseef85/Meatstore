using EShop.Application.Address.Dtos;
using EShop.Application.Orders.OrderDetails.Dtos;
using EShop.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EShop.Application.Orders.Dtos
{
    public class GetOrdersDto
    {
        public Guid Id { get; set; }
        public Guid UserId { get; set; }
        public Guid UserAddressId { get; set; }
        public GetUserDto User { get; set; }
        public DateTime CreatedOn { get; set; }
        public GetUserAddressesDto UserAddress { get; set; }
        public string Status { get; set; }
        public string Total { get; set; }
        public virtual ICollection<GetOrderDetailsDto> OrderDetails { get; set; }
    }
}
