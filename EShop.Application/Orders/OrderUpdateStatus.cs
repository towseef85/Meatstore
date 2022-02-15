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
    public class OrderUpdateStatus
    {
        public class Command : IRequest<Result<Unit>>
        {
            public PostOrderStatus OrderStatus { get; set; }
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
                var updateData = await _context.Orders.FirstAsync(x => x.Id == request.OrderStatus.Id);
                updateData.Status = request.OrderStatus.Status;
                var result = await _context.SaveChangesAsync() > 0;

                if (!result) return Result<Unit>.Failure("Unable to update the order status");
                return Result<Unit>.Success(Unit.Value);
            }


        }

    }
}
