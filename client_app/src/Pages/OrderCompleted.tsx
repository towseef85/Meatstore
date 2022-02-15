import { Link } from "react-router-dom";
import { useStore } from "../stores/store";

export default function OrderCompleted() {
    const {userStore:{user}} = useStore()
    const names = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const deliveryDate = new Date()
    deliveryDate.setDate(deliveryDate.getDate() + 5)
    let dd= names[deliveryDate.getDay()]
    let mm = deliveryDate.getMonth()

    const formatedDate = dd + " " + mm 
    
    return (
      
       <div className="container mt-4  p-4">
           <div className="row">
               <div className="col-lg-8 offset-lg-2 bg-white shadow pb-4" style={{marginTop:'40px'}}>
               <h2 className='text-center d-block p-4'>Order Confirmation</h2>
               <i className="far fa-check-circle text-center text-danger d-block" style={{fontSize:'64px'}}></i>
               <h5 className=' text-center pt-4'>Thanks for shopping with us</h5>
               <p className='text-center text-secondary'>You'll receive a confirmation email form us soon</p>
               <hr className='w-75 m-auto'/>
               <div className="w-75 m-auto">

               <h4 className='pt-3'>Delivery within {formatedDate} between 8:00 am - 10:00 pm</h4>
               <p className='text-secondary'>You can update your order until next 2 days</p>
               <hr/>
               <h5>What happens next</h5>
               <p className='text-secondary'>Once you've received your order confirmation email, we'll send you another email when your order has left our warehouse. we'll also confirm the name of the carrier that will be delivering your order
                   <br />
                   Please allow up to 5 working days for your order to arrive
               </p>
               <hr />
                <Link to={`/profile/${user?.userId}`} className='btn btn-outline-primary float-start'>View your orders</Link>
                <Link to='/' className='btn btn-primary float-end'>Continue shopping</Link>
               </div>
               </div>

           </div>
       </div>
    )
}
