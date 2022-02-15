using EShop.Application.Orders.OrderDetails.Dtos;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EShop.Application.Orders.OrderDetails
{
    public class OrderDetailsValidation : AbstractValidator<PostOrderDetailsDto>
    {
        public OrderDetailsValidation()
        {
            RuleFor(x => x.OrderId).NotEmpty();
            RuleFor(x => x.ProductId).NotEmpty();
            RuleFor(x => x.Quantity).NotEmpty();
        }
    }
}
