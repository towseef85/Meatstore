using EShop.Application.Orders.Dtos;
using EShop.Application.Orders.OrderDetails;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EShop.Application.Orders
{
    public class OrderValidation : AbstractValidator<PostOrderDto>
    {
        public OrderValidation()
        {
            RuleFor(x => x.UserId).NotEmpty();
            RuleFor(x => x.UserAddressId).NotEmpty();
            RuleFor(x => x.Total).NotEmpty();
            RuleFor(x => x.Status).NotEmpty();
            RuleForEach(x => x.OrderDetails).ChildRules(orderdetails =>
            {
                orderdetails.RuleFor(x => x.OrderId).NotEmpty();
                orderdetails.RuleFor(x => x.ProductId).NotEmpty();
                orderdetails.RuleFor(x => x.Quantity).NotEmpty();

            });
        }
    }
}
