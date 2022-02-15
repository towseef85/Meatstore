using AutoMapper;
using EShop.Application.Core;
using EShop.Application.OffersWidget.Dtos;
using EShop.Domain;
using EShop.Persistence;
using FluentValidation;
using MediatR;
using System.Threading;
using System.Threading.Tasks;

namespace EShop.Application.OffersWidget
{
    public class Create
    {
        public class Command : IRequest<Result<Unit>>
        {
            public PostOfferDto OfferDto { get; set; }
        }

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.OfferDto).SetValidator(new OfferValidation());
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
                _context.Offers.Add(_mapper.Map<Offers>(request.OfferDto));
                var result = await _context.SaveChangesAsync() > 0;
                if (!result) return Result<Unit>.Failure("Unable to add Offers");
                return Result<Unit>.Success(Unit.Value);
            }


        }
    }
}
