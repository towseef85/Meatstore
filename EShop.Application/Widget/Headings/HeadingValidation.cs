using EShop.Application.Widget.Headings.Dtos;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EShop.Application.Widget.Headings
{
    public class HeadingValidation : AbstractValidator<PostHeadingDto>
    {
        public HeadingValidation()
        {
            RuleFor(x => x.Title).NotEmpty();
        }
    }
}
