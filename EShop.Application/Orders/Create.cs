using AutoMapper;
using EShop.Application.Core;
using EShop.Application.Orders.Dtos;
using EShop.Persistence;
using FluentValidation;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace EShop.Application.Orders
{
    public class Create
    {
        public class Command : IRequest<Result<Unit>>
        {
            public PostOrderDto order { get; set; }
        }

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.order).SetValidator(new OrderValidation());
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
                _context.Orders.Add(_mapper.Map<Domain.Orders>(request.order));
                var result = await _context.SaveChangesAsync() > 0;
                
                if (!result) return Result<Unit>.Failure("Unable to add Order");
                    return Result<Unit>.Success(Unit.Value);
            }


        }
    
    }
}
