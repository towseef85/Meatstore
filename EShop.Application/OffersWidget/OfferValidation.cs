using EShop.Application.OffersWidget.Dtos;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EShop.Application.OffersWidget
{
    public class OfferValidation: AbstractValidator<PostOfferDto>
    {
        public OfferValidation()
        {
            RuleFor(x => x.StartDate).NotEmpty();
            RuleFor(x => x.EndDate).NotEmpty();
            RuleFor(x => x.ImageFile).NotNull();
            RuleFor(x => x.RedirectTo).NotEmpty();
            RuleFor(x => x.RedirectToId).NotEmpty();
        }
    }
}
