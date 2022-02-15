using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EShop.Application.Recepies.Dtos
{
    public class PostRecepieIngredientsDto
    {
        public Guid Id { get; set; }
        public Guid ReceipeId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
    }
}
