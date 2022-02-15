using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;


namespace EShop.Domain
{
    public class Category : BaseEntity
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string ArabicTitle { get; set; }
        public bool ShowInNav { get; set; }
        public string ImageName { get; set; }
        [NotMapped]
        public IFormFile ImageFile { get; set; }
        [NotMapped]
        public string ImageSrc { get; set; }
        public virtual ICollection<Product> Products { get; set; }
    }
}
