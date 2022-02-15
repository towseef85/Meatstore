using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EShop.Domain
{
   public class ReceipeIngredients
    {
        public Guid Id { get; set; }
        public Guid ReceipeId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        
        public virtual Receipes Receipes { get; set; }
    }
}
