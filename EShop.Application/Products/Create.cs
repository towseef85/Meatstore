using AutoMapper;
using EShop.Application.Core;
using EShop.Application.Products.Dtos;
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

namespace EShop.Application.Products
{
    public class Create
    {
        public class Command : IRequest<Result<Unit>>
        {
            public PostProductDto Product { get; set; }
        }

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.Product).SetValidator(new ProductValidation());
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
                _context.Products.Add(_mapper.Map<Product>(request.Product));
                var result = await _context.SaveChangesAsync() > 0;
                if (!result) return Result<Unit>.Failure("Unable to add Product");
                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}
