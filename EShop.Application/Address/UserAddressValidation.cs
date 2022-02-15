using EShop.Application.Address.Dtos;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EShop.Application.Address
{
    public class UserAddressValidation : AbstractValidator<PostUserAddressDto>
    {
        public UserAddressValidation()
        {
            RuleFor(x => x.Address).NotEmpty();
            RuleFor(x => x.Landmark).NotEmpty();
            RuleFor(x => x.City).NotEmpty();
            RuleFor(x => x.UserId).NotEmpty();
        }

    }
}
