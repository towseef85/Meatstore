import { observer } from "mobx-react-lite"
import { useEffect } from "react"
import { useState } from "react"
import { ICart } from "../../models/cart"
import { IProduct } from "../../models/Product"
import { useStore } from "../../stores/store"

interface Props{
    product: IProduct
}

 function AddToCartButton({product}: Props) {

  
    const{cartStore:{cartRegistry, handleAddToCart, AddedCartItems}} = useStore()
    const addToCart=(product: IProduct)=>{
        const cartItem: ICart ={
          productId: product.id,
          title: product.title,
          price: product.price,
          quantity:1
        }
        handleAddToCart(cartItem)
    }
    return (
        <button onClick={() =>addToCart(product)}   disabled={cartRegistry.get(product.id) ? true : false} className="btn btn-danger float-end">
          {cartRegistry.get(product.id) ?<><i className="fas fa-thumbs-up"></i> Added to Cart </> :<> <i className="fas fa-cart-plus"></i> Add to Cart</>}
        
      </button>
    )
}

export default observer(AddToCartButton)
