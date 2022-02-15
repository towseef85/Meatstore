using EShop.Application.SliderWidget.Dtos;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EShop.Application.SliderWidget
{
    public class SliderValidation : AbstractValidator<PostSliderDto>
    {
        public SliderValidation()
        {
            RuleFor(x => x.Position).NotEmpty();
            RuleFor(x => x.ImageFile).NotNull();
            RuleFor(x => x.RedirectTo).NotEmpty();
            RuleFor(x => x.RedirectToId).NotEmpty();
        }
    }
}
