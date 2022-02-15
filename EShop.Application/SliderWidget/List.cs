using AutoMapper;
using EShop.Application.Core;
using EShop.Application.SliderWidget.Dtos;
using EShop.Persistence;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace EShop.Application.SliderWidget
{
    public class List
    {
        public class Query : IRequest<Result<List<GetSlidersDto>>> { }

        public class Handler : IRequestHandler<Query, Result<List<GetSlidersDto>>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }
            public async Task<Result<List<GetSlidersDto>>> Handle(Query request, CancellationToken cancellationToken)
            {
                var sliders = await _context.Sliders.OrderBy(x=>x.Position).ToListAsync();
                var sliderList = _mapper.Map<List<GetSlidersDto>>(sliders);
                return Result<List<GetSlidersDto>>.Success(sliderList);
            }


        }
    }
}
