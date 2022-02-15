using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EShop.Domain
{
    public class Receipes
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
        [NotMapped]
        public IFormFile ImageFile { get; set; }
        [NotMapped]
        public string ImageSrc { get; set; }
        public virtual Product Product { get; set; }
        public ICollection<ReceipeIngredients> Ingredients { get; set; }

    }
}
