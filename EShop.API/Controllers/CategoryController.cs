using EShop.Application.Categories.Dtos;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EShop.API.Extensions;
using EShop.Application.Categories;
using Microsoft.AspNetCore.Authorization;

namespace EShop.API.Controllers
{

    public class CategoryController : BaseApiController
    {
        private readonly ImageUpload _imageUpload;
        public CategoryController(ImageUpload imageUpload)
        {
            _imageUpload = imageUpload;
        }

        [AllowAnonymous]
        [HttpGet]
        public async Task<IActionResult> GetCategories()
        {
            return HandleResult(await Mediator.Send(new List.Query()));
        }

      [HttpPost]
      public async Task<IActionResult> CreateCategory([FromForm]PostCategoryDto category)
        {
            if(category.ImageFile.Length > 0)
            {
                category.ImageName = await _imageUpload.SaveImage(category.ImageFile);
            }
            return HandleResult(await Mediator.Send(new Create.Command { Category = category }));
        }
    }
}
