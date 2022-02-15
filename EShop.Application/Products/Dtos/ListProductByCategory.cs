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

namespace EShop.Application.Products.Dtos
{
    public class ListProductByCategory
    {
        public class Query: IRequest<Result<List<GetProductDto>>>
        {
            public Guid categoryId { get; set; }

        }

        public class Handler : IRequestHandler<Query, Result<List<GetProductDto>>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }
            public async Task<Result<List<GetProductDto>>> Handle(Query request, CancellationToken cancellationToken)
            {
                var products = await _context.Products.Where(x=>x.CategoryId == request.categoryId).Include(x => x.Category).Include(x => x.Photos).ToListAsync();
                var productList = _mapper.Map<List<GetProductDto>>(products);
                return Result<List<GetProductDto>>.Success(productList);
            }
        }

    }
}
