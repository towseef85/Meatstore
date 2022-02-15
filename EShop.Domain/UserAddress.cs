using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EShop.Domain
{
    public class UserAddress
    {
        public Guid Id { get; set; }
        public string UserId { get; set; }
        public string Address { get; set; }
        public string Landmark { get; set; }
        public string City { get; set; }
        public string AlternateNumber { get; set; }
        public virtual AppUser user { get; set; }
        public Boolean isDefault { get; set; }
    }
}
