using EShop.Application.Products.Dtos;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EShop.Application.Products
{
    public class ProductValidation : AbstractValidator<PostProductDto>
    {
        public ProductValidation()
        {
            RuleFor(x => x.Title).NotEmpty();
            RuleFor(x => x.ArabicTitle).NotEmpty();
            RuleFor(x => x.Price).NotNull();
            RuleFor(x => x.MinQuantity).NotEmpty();
            RuleFor(x => x.UnitId).NotEmpty();
            RuleFor(x => x.Description).NotEmpty();
            RuleFor(x => x.DescriptionArabic).NotEmpty();
            RuleFor(x => x.CategoryId).NotEmpty();
        }
    }
}
