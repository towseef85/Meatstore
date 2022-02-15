using AutoMapper;
using EShop.Application.Core;
using EShop.Application.Widget.Headings.Dtos;
using EShop.Domain;
using EShop.Persistence;
using FluentValidation;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace EShop.Application.Widget.Headings
{
    public class Create
    {
        public class Command : IRequest<Result<Unit>>
        {
            public PostHeadingDto Heading { get; set; }
        }

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.Heading).SetValidator(new HeadingValidation());
            }
        }

        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                _context.WidgetHeadings.Add(_mapper.Map<WidgetHeading>(request.Heading));
                var result = await _context.SaveChangesAsync() > 0;
                if (!result) return Result<Unit>.Failure("Unable to add Heading");
                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}
