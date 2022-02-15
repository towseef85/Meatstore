using AutoMapper;
using EShop.Application.Core;
using EShop.Application.SliderWidget.Dtos;
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

namespace EShop.Application.SliderWidget
{
    public class Create
    {
        public class Command : IRequest<Result<Unit>>
        {
            public PostSliderDto sliderDto { get; set; }
        }

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.sliderDto).SetValidator(new SliderValidation());
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
                var getPosition = _context.Sliders.Any(x=>x.Position == request.sliderDto.Position);
                if(getPosition)
                {
                    var getPositionMaxValue = _context.Sliders.Max(x => x.Position);
                    request.sliderDto.Position = getPositionMaxValue + 1;
                }
                _context.Sliders.Add(_mapper.Map<Slider>(request.sliderDto));
                var result = await _context.SaveChangesAsync() > 0;
                if (!result) return Result<Unit>.Failure("Unable to add Slider");
                return Result<Unit>.Success(Unit.Value);
            }


        }
    }
}
