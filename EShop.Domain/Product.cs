using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EShop.Domain
{
    public class Product
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string SubTitle { get; set; }
        public string ArabicSubTitle { get; set; }
        public string ArabicTitle { get; set; }
        public string Description { get; set; }
        public string DescriptionArabic { get; set; }
        public Boolean ShowAsBestSeller { get; set; }
        
        public string MinQuantity { get; set; }
        public Guid UnitId { get; set; }
        [Column(TypeName = "decimal(18,4)")]
        public decimal Price { get; set; }

        [ForeignKey("UnitId")]
        public PieceUnit PieceUnits { get; set; }
        public Guid CategoryId { get; set; }

        public virtual Category Category { get; set; }
       public virtual OrderDetails OrderDetail { get; set; }

        public virtual ICollection<Photo> Photos { get; set; }
        public virtual ICollection<Receipes> Receipes { get; set; }
    }
}
