using AutoMapper;
using EShop.Application.Core;
using EShop.Application.Recepies.Dtos;
using EShop.Persistence;
using FluentValidation;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace EShop.Application.Recepies
{
    public class Create
    {
        public class Command : IRequest<Result<Unit>>
        {
            public PostRecepiesDto Receipe { get; set; }
        }

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.Receipe).SetValidator(new RecepieValidation());
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
                _context.Receipes.Add(_mapper.Map<Domain.Receipes>(request.Receipe));
                var result = await _context.SaveChangesAsync() > 0;

                if (!result) return Result<Unit>.Failure("Unable to add Recepie");
                return Result<Unit>.Success(Unit.Value);
            }


        }
    }
}
