using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EShop.Domain
{
    public class AppUser: IdentityUser
    {
        public string DisplayName { get; set; }
        public string MobileNumber { get; set; }
       // public string userName { get; set; }
        public string Gender { get; set; }
        public virtual ICollection<UserAddress> UserAddresses { get; set; }
        public virtual ICollection<Orders>  Orders { get; set; }

    }
}
