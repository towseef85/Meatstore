import { observer } from "mobx-react-lite"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import CartSummary from "../components/Orders/CartSummary"
import DeliverySummary from "../components/Orders/DeliverySummary"
import PaymentSummary from "../components/Orders/PaymentSummary"
import { v4 as uuid } from 'uuid';
import { IOrder } from "../models/Order"
import { useStore } from "../stores/store"
import { ICart } from "../models/cart"

export default observer(function Checkout() {
    const {cartStore:{AddedCartItems, totalAmount, addOrder}, userStore:{userAddress, getAddress, user}} = useStore()
    useEffect(() =>{
      
        getAddress(user?.userId!)
        setCart(AddedCartItems.map(c=> ({productId: c.productId, quantity: c.quantity, price: c.price})))
    },[getAddress])
   
    const [step, setStep] = useState(1)
    const [userAddressId, setUserAddressId] = useState()
    const [cart, setCart] = useState<ICart[]>([{
        productId:'',
        quantity:0,
        title:'',
        price:0
    }])
    const [order, setOrder] = useState<IOrder>()
    const date = new Date().toDateString()
    const cartTotal = totalAmount.toFixed(2).toString() 
     

      const initialOrder ={
        id: uuid(),
        userId : user?.userId!,
        userAddressId: userAddressId!,
        status:'In-Progress',
        total: cartTotal,
        createdOn:date,
        orderDetails:cart,
        
      }
    const submitOrder =(token: any)=>{
      
      let newOrderDetails ={...initialOrder, token: token}
     // console.log("New order", newOrderDetails)
        addOrder(newOrderDetails)
       
    }
    const showStep =(step : any) =>{
        switch(step){
            case 1:
                return <CartSummary step={setStep}/>
            case 2:
                return <DeliverySummary step={setStep} address={userAddress} addressId={setUserAddressId} initialUserAddressId={userAddressId}/>
            case 3:
                return <PaymentSummary step={setStep} submitOrder={submitOrder}/>
        }
        
    }
    return (
        <>
        <div className='p-4 bg-secondary'>
            <div className="container">
                <h4 className='text-center text-white p-4'>Checkout</h4>
            </div>
        </div>
        <div className='container mt-4'>
            <div className="row mt-4">
                <div className="col-lg-8 shadow">
                    {showStep(step)}
                </div>
                <div className="col-lg-3 offset-lg-1 shadow position-relative bg-white" style={{height:'350px'}}>
                    <h6 className='text-secondary p-3 border-bottom'>PRICE DETAILS</h6>
                    <p className='p-2 text-secondary text-start float-start'>Price ({AddedCartItems.reduce((sum, current)=> sum + current.quantity!, 0)} items) </p> <p className='text-end p-2 fw-bold'>$ {totalAmount}</p>
                    <p className='p-2 text-secondary text-start float-start'>Delivery Charges</p>
                    <p className='text-success text-end p-2'>FREE</p>

                    <div className="col-lg-12 position-absolute bottom-0 start-0 p-4 border-top">
              <h6 className="float-start">Total: ${totalAmount.toFixed(2)}</h6>
             
            </div>
                </div>
            </div>
           
        </div>
        </>
    )
})
