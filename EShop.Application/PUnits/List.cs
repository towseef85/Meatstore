using AutoMapper;
using EShop.Application.Core;
using EShop.Persistence;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace EShop.Application.PUnits
{
    public class List
    {
        public class Query : IRequest<Result<List<PieceUnitDto>>> { }

        public class Handler : IRequestHandler<Query, Result<List<PieceUnitDto>>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }
            public async Task<Result<List<PieceUnitDto>>> Handle(Query request, CancellationToken cancellationToken)
            {
                var units = await _context.PieceUnits.ToListAsync();
                var unitList = _mapper.Map<List<PieceUnitDto>>(units);
                return Result<List<PieceUnitDto>>.Success(unitList);
            }

            
        }
    }
}
