using AutoMapper;
using EShop.Application.Core;
using EShop.Application.OffersWidget.Dtos;
using EShop.Persistence;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace EShop.Application.OffersWidget
{
    public class List
    {
        public class Query : IRequest<Result<List<GetOffersDto>>> { }

        public class Handler : IRequestHandler<Query, Result<List<GetOffersDto>>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }
            public async Task<Result<List<GetOffersDto>>> Handle(Query request, CancellationToken cancellationToken)
            {
                var offers = await _context.Offers.ToListAsync();
                var offersList = _mapper.Map<List<GetOffersDto>>(offers);
                return Result<List<GetOffersDto>>.Success(offersList);
            }


        }
    }
}
