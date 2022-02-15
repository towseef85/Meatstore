using AutoMapper;
using EShop.Application.Core;
using EShop.Application.Widget.Headings.Dtos;
using EShop.Persistence;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace EShop.Application.Widget.Headings
{
    public class List
    {
        public class Query : IRequest<Result<List<GetWidgetHeadingsDto>>> { }

        public class Handler : IRequestHandler<Query, Result<List<GetWidgetHeadingsDto>>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }
            public async Task<Result<List<GetWidgetHeadingsDto>>> Handle(Query request, CancellationToken cancellationToken)
            {
                var headings = await _context.WidgetHeadings.Include(x => x.WidgetItems).ToListAsync();
                var headingList = _mapper.Map<List<GetWidgetHeadingsDto>>(headings);
                return Result<List<GetWidgetHeadingsDto>>.Success(headingList);
            }
        }
    }
}
