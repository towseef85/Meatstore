using AutoMapper;
using EShop.Application.Core;
using EShop.Application.Products.Dtos;
using EShop.Persistence;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace EShop.Application.Products
{
    public class Details 
    {
        public class Query : IRequest<Result<GetProductDto>>
        {
            public Guid Id { get; set; }

        }

        public class Handler : IRequestHandler<Query, Result<GetProductDto>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<Result<GetProductDto>> Handle(Query request, CancellationToken cancellationToken)
            {
                var product = await _context.Products.Include(x => x.Category).Include(x => x.Photos).FirstOrDefaultAsync(x => x.Id == request.Id);
                var productList = _mapper.Map<GetProductDto>(product);
                return Result<GetProductDto>.Success(productList);
            }
        }
        

    }
}
