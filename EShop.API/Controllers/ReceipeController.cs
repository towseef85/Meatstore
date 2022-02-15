using EShop.API.Extensions;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EShop.Application.Recepies;
using EShop.Application.Recepies.Dtos;

namespace EShop.API.Controllers
{
    
    public class ReceipeController : BaseApiController
    {
        private readonly ImageUpload _imageUpload;
        public ReceipeController(ImageUpload imageUpload)
        {
            _imageUpload = imageUpload;
        }

        [HttpPost]
        public async Task<IActionResult> CreateRecepie([FromForm] PostRecepiesDto recepie)
        {
            if (recepie.ImageFile.Length > 0)
            {
                recepie.ImageName = await _imageUpload.SaveImage(recepie.ImageFile);
            }
            return HandleResult(await Mediator.Send(new Create.Command { Receipe = recepie }));
        }
    }

}
