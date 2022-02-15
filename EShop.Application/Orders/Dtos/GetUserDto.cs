using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EShop.Application.Orders.Dtos
{
    public class GetUserDto
    {
        public string DisplayName { get; set; }
        public string MobileNumber { get; set; }
        public string userName { get; set; }
        public string Gender { get; set; }
    }
}
