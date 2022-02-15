import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { ICart } from '../../models/cart'
import { IProduct } from '../../models/Product'
import { useStore } from '../../stores/store'
import Card from './Card'

export default observer(function BestSellers() {
    const{
      productStore:{products, loadProducts, ProductRegistry}} = useStore()
    useEffect(() => {
      if(ProductRegistry.size<1) loadProducts()
    }, [ProductRegistry.size, loadProducts])

   
    
    return (
        <div className="container mt-4 gx-5">
        <h3 className='text-secondary pt-4'>Best Sellers</h3>
        <div className='col-lg-12'>
          <div className='row'>

        {products && products.filter(item => item.showAsBestSeller == true).map(p =>(
            <div className='col-lg-4' key={p.id}>
              <Card product={p} />
             
           </div>
        ))}
          </div>
        </div>
       
      </div>
    )
})
