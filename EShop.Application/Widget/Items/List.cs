using AutoMapper;
using EShop.Application.Core;
using EShop.Application.Widget.Items.Dtos;
using EShop.Persistence;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace EShop.Application.Widget.Items
{
    public class List
    {
        public class Query : IRequest<Result<List<GetWidgetItemDto>>> { }

        public class Handler : IRequestHandler<Query, Result<List<GetWidgetItemDto>>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }
            public async Task<Result<List<GetWidgetItemDto>>> Handle(Query request, CancellationToken cancellationToken)
            {
                var widgetItems = await _context.WidgetItems.ToListAsync();
                var widgetItemsList = _mapper.Map<List<GetWidgetItemDto>>(widgetItems);
                return Result<List<GetWidgetItemDto>>.Success(widgetItemsList);
            }
        }
    }
}
