using EShop.Application.Categories.Dtos;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EShop.Application.Categories
{
    public class CategoryValidation : AbstractValidator<PostCategoryDto>
    {
        public CategoryValidation()
        {
            RuleFor(x => x.Title).NotEmpty();
            RuleFor(x => x.ArabicTitle).NotEmpty();
            RuleFor(x => x.ImageFile).NotNull();
        }
    }
}
