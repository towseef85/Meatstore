using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EShop.Application.Photos.Dtos
{
    public class PostPhotoDto
    {
        public IFormFile File { get; set; }
        public Guid ProductId { get; set; }
    }
}
