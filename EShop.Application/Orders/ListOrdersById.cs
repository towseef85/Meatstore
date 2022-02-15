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
    public class ListOrdersById
    {
        public class Query : IRequest<Result<List<GetOrdersDto>>>
        {
            public string userId { get; set; }

        }

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
                var orders = await _context.Orders.Where(x => x.UserId == request.userId).Include(x => x.UserAddress).Include(x => x.OrderDetails).Include(x=>x.User).ToListAsync();
                var ordersList = _mapper.Map<List<GetOrdersDto>>(orders);
                return Result<List<GetOrdersDto>>.Success(ordersList);
            }
        }
    }
}
