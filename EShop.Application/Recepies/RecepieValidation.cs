using EShop.Application.Recepies.Dtos;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EShop.Application.Recepies
{
    public class RecepieValidation : AbstractValidator<PostRecepiesDto>
    {
        public RecepieValidation()
        {
            RuleFor(x => x.ProductId).NotEmpty();
            RuleFor(x => x.Title).NotEmpty();
            RuleFor(x => x.Status).NotEmpty();
            RuleForEach(x => x.RecepieIngredients).ChildRules(orderdetails =>
            {
                orderdetails.RuleFor(x => x.Title).NotEmpty();
            });
        }
    }
}
