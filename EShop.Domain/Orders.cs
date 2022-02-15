using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EShop.Domain
{
    public class Orders : BaseEntity
    {
        public Guid Id { get; set; }
        public string UserId { get; set; }
        public virtual AppUser User { get; set; }
        public Guid UserAddressId { get; set; }
        public virtual UserAddress UserAddress { get; set; }
        public string Status { get; set; }
        public string Total { get; set; }
        public virtual ICollection<OrderDetails> OrderDetails { get; set; }
        

    }
}
