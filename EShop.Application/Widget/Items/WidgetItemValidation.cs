using EShop.Application.Widget.Items.Dtos;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EShop.Application.Widget.Items
{
    public class WidgetItemValidation : AbstractValidator<PostWidgetItemDto>
    {
        public WidgetItemValidation()
        {
            RuleFor(x => x.Title).NotEmpty();
            RuleFor(x => x.RedirectTo).NotEmpty();
            RuleFor(x => x.RedirectToId).NotEmpty();
            RuleFor(x => x.WidgetId).NotEmpty();
        }
    }
}
