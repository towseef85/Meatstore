using AutoMapper;
using EShop.Application.Categories.Dtos;
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

namespace EShop.Application.Categories
{
    public class List
    {
        public class Query : IRequest<Result<List<GetCategoryDto>>> { }

        public class Handler : IRequestHandler<Query, Result<List<GetCategoryDto>>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }
            public async Task<Result<List<GetCategoryDto>>> Handle(Query request, CancellationToken cancellationToken)
            {
                var categories = await _context.Categories.ToListAsync();
                var categoryList = _mapper.Map<List<GetCategoryDto>>(categories);
                return Result<List<GetCategoryDto>>.Success(categoryList);
            }
        }
    }
}
