using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EShop.Application.Orders.Dtos
{
    public class PostOrderStatus
    {
        public Guid Id { get; set; }
        public string Status { get; set; }
    }
}
