using AutoMapper;
using EShop.Application.Address.Dtos;
using EShop.Application.Core;
using EShop.Domain;
using EShop.Persistence;
using FluentValidation;
using MediatR;
using System.Threading;
using System.Threading.Tasks;

namespace EShop.Application.Address
{
   
        public class Create
        {
            public class Command : IRequest<Result<Unit>>
            {
                public PostUserAddressDto userAddress { get; set; }
            }

            public class CommandValidator : AbstractValidator<Command>
            {
                public CommandValidator()
                {
                    RuleFor(x => x.userAddress).SetValidator(new UserAddressValidation());
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
                    _context.UserAddresses.Add(_mapper.Map<UserAddress>(request.userAddress));
                    var result = await _context.SaveChangesAsync() > 0;
                    if (!result) return Result<Unit>.Failure("Unable to add Address");
                    return Result<Unit>.Success(Unit.Value);
                }


            }
        }
    }

