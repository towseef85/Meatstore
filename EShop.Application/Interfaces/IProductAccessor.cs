﻿using EShop.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EShop.Application.Interfaces
{
    public interface IProductAccessor
    {
        Product GetProduct();

    }
}
