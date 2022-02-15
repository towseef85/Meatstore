using EShop.Application.Core;
using EShop.Application.Interfaces;
using EShop.Application.Photos.Dtos;
using EShop.Domain;
using EShop.Persistence;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace EShop.Application.Photos
{
    public class Create
    {
        public class Command : IRequest<Result<Photo>>
        {
            public PostPhotoDto photoDto { get; set; }

            public class Handler : IRequestHandler<Command, Result<Photo>>
            {
                private readonly DataContext _context;
                private readonly IPhotoAccessor _photoAccessor;
                //private readonly Product _product;

                public Handler(DataContext context, IPhotoAccessor photoAccessor)
                {
                    _context = context;
                    _photoAccessor = photoAccessor;
                   // _product = product;
                }
                public async Task<Result<Photo>> Handle(Command request, CancellationToken cancellationToken)
                {
                   // var product = await _context.Products.Include(p => p.Photos).FirstOrDefaultAsync(x => x.Id == _product.Id);
                    var photoUploadResult = await _photoAccessor.AddPhoto(request.photoDto.File);

                    var photo = new Photo
                    {
                        Url = photoUploadResult.Url,
                        Id = photoUploadResult.PublicId,
                       ProductId= request.photoDto.ProductId
                    };

                    // if (!product.Photos.Any(x => x.IsMain)) photo.IsMain = true;

                    //product.Photos.Add(photo);
                    _context.Photos.Add(photo);

                    var result = await _context.SaveChangesAsync() > 0;

                    if (result) return Result<Photo>.Success(photo);

                    return Result<Photo>.Failure("Problem adding photo");

                }
            }
        }
    }
}
