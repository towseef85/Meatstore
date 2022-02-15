using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace EShop.API.DTOs
{
    public class RegisterDto
    {
        [Required]
        public string DisplayName { get; set; }
        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [RegularExpression("(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$", ErrorMessage ="Password must contain one uppercase letter and a numaric")]
        public string Password { get; set; }
        [Required]
        public string MobileNumber { get; set; }
        public string Gender { get; set; }
        [Required]
        public string Username { get; set; }
    }
}
