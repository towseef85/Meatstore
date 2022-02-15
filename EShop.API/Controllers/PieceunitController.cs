using EShop.Application.PUnits;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EShop.API.Controllers
{
  
    public class PieceunitController : BaseApiController
    {
        [AllowAnonymous]
        [HttpGet]
        public async Task<ActionResult> GetUnits()
        {
            return HandleResult(await Mediator.Send(new List.Query()));
        }

        [HttpPost]
        public async Task<IActionResult> CreateCategory( PieceUnitDto units)
        {
           
            return HandleResult(await Mediator.Send(new Create.Command { PieceUnits = units }));
        }
    }
}
