using AutoMapper;
using EShop.Application.Core;
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

namespace EShop.Application.PUnits
{
    public class Create
    {
        public class Command : IRequest<Result<Unit>>
        {
            public PieceUnitDto PieceUnits { get; set; }
        }

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.PieceUnits).SetValidator(new PieceUnitValidation());
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
                _context.PieceUnits.Add(_mapper.Map<PieceUnit>(request.PieceUnits));
                var result = await _context.SaveChangesAsync() > 0;
                if (!result) return Result<Unit>.Failure("Unable to add PieceUnit");
                return Result<Unit>.Success(Unit.Value);
            }

          
        }
    }
}
