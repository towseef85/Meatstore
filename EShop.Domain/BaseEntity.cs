﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EShop.Domain
{
    public class BaseEntity
    {
        public DateTime CreatedOn { get; set; }
        public bool IsDeleted { get; set; }
        public DateTime UpdatedOn { get; set; }
    }
}
