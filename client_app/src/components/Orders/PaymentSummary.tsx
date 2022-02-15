import { observer } from "mobx-react-lite"
import { useStore } from "../../stores/store"
import StripeCheckout from "react-stripe-checkout"

interface Props{
    step:any,
    submitOrder: any
}

export default observer(function PaymentSummary({step, submitOrder}: Props) {
    const {cartStore:{AddedCartItems, totalAmount}} = useStore()
    const cartTotal = Number(totalAmount.toFixed(2))
    return (
        <div className='col-lg-12 p-4'>
            <h3 className='text-center p-4'>Order Summary</h3>
            <table className='table'>
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Product Name</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
                </tr>
            </thead>
            <tbody>

            {AddedCartItems && AddedCartItems.map((item, index) => (
                
                <tr key={item.productId}>
                    
                    <th scope="row">{index + 1}</th>
                    <td>{item.title}</td>
                    <td>{item.quantity}</td>
                    <td>{item.quantity!* item.price!}</td>
                </tr>
                
            ))}
            </tbody>
                <tfoot>
                    <tr>
                        <td colSpan ={3}>
                            Total
                        </td>
                        <td>
                        $ {totalAmount.toFixed(2)}
                        </td>
                    </tr>
                    
                </tfoot>
            </table>
            <div className="col-lg-12 mt-2 mb-4 p-4">
         <button className='btn btn-primary float-start' onClick={() => step(2)}>
            <i className="fas fa-chevron-left"></i> Previous
           </button>
           <StripeCheckout 
           stripeKey={process.env.REACT_APP_KEY!}
           token={submitOrder}
           name="Make Payment"
           amount={cartTotal}
           currency="USD"
           >

         <button className='btn btn-primary float-end' >
         <i className="fas fa-shopping-bag"></i> Place Order
           </button>
           </StripeCheckout>
         
       </div>
        </div>
    )
})
