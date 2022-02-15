using AutoMapper;
using EShop.Application.Address.Dtos;
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

namespace EShop.Application.Address
{
    public class List
    {
        public class Query : IRequest<Result<List<GetUserAddressesDto>>> { }

        public class Handler : IRequestHandler<Query, Result<List<GetUserAddressesDto>>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }
            public async Task<Result<List<GetUserAddressesDto>>> Handle(Query request, CancellationToken cancellationToken)
            {
                var addresses = await _context.UserAddresses.Include(x=>x.user).ToListAsync();
                var addressList = _mapper.Map<List<GetUserAddressesDto>>(addresses);
                return Result<List<GetUserAddressesDto>>.Success(addressList);
            }
        }
    }
}
