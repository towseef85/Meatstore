using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EShop.Application.Recepies.Dtos
{
    public class GetReceipesDto
    {
        public Guid Id { get; set; }
        public Guid ProductId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Type { get; set; }
        public string CookingTime { get; set; }
        public int Serves { get; set; }
        public string Method { get; set; }
        public bool Status { get; set; }
        public string ImageName { get; set; }
        public string ImageSrc { get; set; }
        public ICollection<GetReceipeIngredients> Ingredients { get; set; }
    }
}
