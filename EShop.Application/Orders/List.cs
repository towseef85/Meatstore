using AutoMapper;
using EShop.Application.Core;
using EShop.Application.Orders.Dtos;
using EShop.Persistence;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace EShop.Application.Orders
{
    public class List
    {
        public class Query : IRequest<Result<List<GetOrdersDto>>> { }

        public class Handler : IRequestHandler<Query, Result<List<GetOrdersDto>>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }
            public async Task<Result<List<GetOrdersDto>>> Handle(Query request, CancellationToken cancellationToken)
            {
                var orders = await _context.Orders.Include(x => x.User).Include(x => x.UserAddress).Include(x => x.OrderDetails).ToListAsync();
                var ordersList = _mapper.Map<List<GetOrdersDto>>(orders);
                return Result<List<GetOrdersDto>>.Success(ordersList);
            }
        }
    }
}
