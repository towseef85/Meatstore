using EShop.Application.Orders;
using EShop.Application.Orders.Dtos;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Stripe;
using Stripe.Checkout;

namespace EShop.API.Controllers
{
  
    public class OrdersController : BaseApiController
    {
        public OrdersController()
        {
            StripeConfiguration.ApiKey = "sk_test_51GtXyCCo5Msio4Yo4yberb4rW66JaGY6qPRSYM6ETD9Zi3LZgkwEjo6x2OrIkSIzfcF7PD3DcKRXj65a4JyUkhPu00EeTdg30P";
        }
        
        [HttpGet("GetOrders")]
        public async Task<ActionResult> GetOrders()
        {
            return HandleResult(await Mediator.Send(new List.Query()));
        }

        [HttpGet("GetOrderById/{id}")]
        public async Task<ActionResult> GetOrderById(string id)
        {
            return HandleResult(await Mediator.Send(new ListOrdersById.Query { userId = id }));
        }

        [HttpPost("CreateOrder")]
        public async Task<IActionResult> CreateOrder(PostOrderDto orders)
        { 
            return HandleResult(await Mediator.Send(new Create.Command { order = orders }));
        }

        [HttpPut("UpdateStatus")]
        public async Task<IActionResult> UpdateOrderStatus(PostOrderStatus status)
        {
            return HandleResult(await Mediator.Send(new OrderUpdateStatus.Command { OrderStatus = status }));
        }
    }
}
