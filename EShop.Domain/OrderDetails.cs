using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EShop.Domain
{
    public class OrderDetails
    {
        public Guid Id { get; set; }
        public Guid OrderId { get; set; }
        public virtual Orders Orders { get; set; }
        public Guid ProductId { get; set; }
        public int Quantity { get; set; }
        public ICollection<Product> Products { get; set; }

    }
}
