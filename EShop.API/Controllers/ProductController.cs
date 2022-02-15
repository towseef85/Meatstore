using EShop.Application.Products;
using EShop.Application.Products.Dtos;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace EShop.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : BaseApiController
    {
        [AllowAnonymous]
        [HttpGet("GetProductById/{id}")]
        public async Task<IActionResult> GetProductById(Guid id)
        {
            return HandleResult(await Mediator.Send(new Details.Query { Id = id }));
        }

        [AllowAnonymous]
        [HttpGet("GetProducts")]
        public async Task<IActionResult> GetProducts()
        {
            return HandleResult(await Mediator.Send(new List.Query()));
        }
 
        [HttpPost]
        public async Task<IActionResult> CreateProduct(PostProductDto product)
        {
           
            return HandleResult(await Mediator.Send(new Create.Command { Product = product }));
        }

        [AllowAnonymous]
        [HttpGet("GetProductByCategoryId/{id}")]
        public async Task<IActionResult> GetProductByCategoryId(Guid id)
        {
            return HandleResult(await Mediator.Send(new ListProductByCategory.Query { categoryId = id }));
        }
    }
}
