using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EShop.Application.PUnits
{
    public class PieceUnitValidation : AbstractValidator<PieceUnitDto>
    {
        public PieceUnitValidation()
        {
            RuleFor(x => x.Title).NotEmpty();
            RuleFor(x => x.ArabicTitle).NotEmpty();
            RuleFor(x => x.Symbol).NotEmpty();
        }

    }
}
