import { observer } from "mobx-react-lite";
import { ICart } from "../../models/cart";
import { IProduct } from "../../models/Product";
import { useStore } from "../../stores/store";

interface Props{
    orderdetails: ICart
}

export default observer(function ProductCartItems({orderdetails}: Props) {
    const {productStore:{getProductsbyId}} = useStore()
        const product = getProductsbyId(orderdetails.productId!)
    return (
        
        <div className="col-lg-12 border p-2 rounded" key={orderdetails.productId}>
                
        <div className="row">
        <div className="col-lg-2">
            {product?.photos?.map(photo =>(

           <img src={photo.url} key={photo.id} className='img-fluid rounded text-center w-75 h-100' alt="" />
            ))}
         </div>
         <div className="col-lg-10">
           <h3 className='text-secondary'>{product?.title}</h3>
           <p className='text-start float-start'>500 gms | $ {product?.price}</p> 
           <p className='text-end float-end'>Qty : {orderdetails.quantity}</p> 
         </div>
         <hr className='m-3 text-secondary col-lg-11 '/>
         <div className="col-lg-4 offset-lg-8 mb-1">

         <button className='btn btn-danger float-end'>Cancel Order</button>
         </div>
          </div>
          </div>
    )
})
