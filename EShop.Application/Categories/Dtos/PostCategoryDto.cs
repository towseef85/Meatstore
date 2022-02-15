using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EShop.Application.Categories.Dtos
{
    public class PostCategoryDto
    {
       
        public Guid Id { get; set; }
        
        public string Title { get; set; }
        public string ArabicTitle { get; set; }
        public bool ShowInNav { get; set; }
        public string ImageName { get; set; }
        public IFormFile ImageFile { get; set; }
    }
}
