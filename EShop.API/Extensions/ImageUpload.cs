using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace EShop.API.Extensions
{
    public class ImageUpload
    {

        private readonly IWebHostEnvironment _webHostEnvironment;
        public ImageUpload(IWebHostEnvironment webHostEnvironment)
        {
            _webHostEnvironment = webHostEnvironment;
        }

        public async Task<string> SaveImage(IFormFile imageFile)
        {
            string imageName = Guid.NewGuid().ToString();
            imageName = imageName + Path.GetExtension(imageFile.FileName);
            var imagePath = Path.Combine(_webHostEnvironment.ContentRootPath, "Images", imageName);
            using (var filestream = new FileStream(imagePath, FileMode.Create))
            {
                await imageFile.CopyToAsync(filestream);
            }

            return imageName;

        }
    }
}
