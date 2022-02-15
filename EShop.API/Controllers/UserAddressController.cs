using EShop.Application.Address;
using EShop.Application.Address.Dtos;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EShop.API.Controllers
{
    
    public class UserAddressController : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult> GetUserAddresses()
        {
            return HandleResult(await Mediator.Send(new List.Query()));
        }

        [HttpPost("CreateAddress")]
        public async Task<IActionResult> CreateAddress(PostUserAddressDto address)
        {

            return HandleResult(await Mediator.Send(new Create.Command { userAddress = address }));
        }

        [HttpGet("GetAddressForUser/{id}")]
        public async Task<ActionResult> GetAddressForUser(string id)
        {
            return HandleResult(await Mediator.Send(new Details.Query { Id = id }));
        }
    }
}
