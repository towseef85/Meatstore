import './tabs.css'
import { useState } from "react"
import { IUserAddress } from '../../models/userAddress';
import { observer } from 'mobx-react-lite';
import UserAddress from './UserAddress';
import { IOrder } from '../../models/Order';
import { useStore } from '../../stores/store';
import ProductCartItems from '../Product/ProductCartItems';
import OrderCompleted from '../../Pages/OrderCompleted';

interface Props{
  address: IUserAddress[]
  orders: IOrder[]
}

export default observer(function Tabs({address, orders}: Props) {
  

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index: any) => {
        setToggleState(index);
      };

    return (
        <div className="tabs">
        <div className="tab-header">
          <div className={toggleState === 1 ? "active": ""} onClick={() => toggleTab(1)}>
          <i className="fas fa-sort-amount-up"></i> Orders
          </div>
          <div className={toggleState === 2 ? "active": ""} onClick={() => toggleTab(2)}>
          <i className="fas fa-address-book"></i> Address
          </div>
          <div className={toggleState === 3 ? "active": ""} onClick={() => toggleTab(3)}>
          <i className="fas fa-user"></i> Profile
          </div>
          <div className={toggleState === 4 ? "active": ""} onClick={() => toggleTab(4)}>
          <i className="fas fa-chess-queen"></i> Reviews
          </div>
       
        </div>
      
        {/* <div className="tab-indicator"></div>  */}
   
        <div className="tab-content">
          
          <div className={toggleState === 1 ? "active": ""}>
            <h2 className='text-secondary'>Order List</h2>
            {orders && orders.map(order =>(
              <div className="row" key={order.id}>
                <div className="col-lg-8">
                <h6><span className='text-dark'>Order Placed:</span> <span className='text-secondary'>{order.createdOn}</span> </h6>
                <h6><span className='text-dark'>Order Id: </span> <span className='text-secondary'>{order.id}</span> </h6>
              </div>
              <div className="col-lg-4">
              <h6 className='text-dark text-end d-block w-100'>Time: </h6>
              <h6 className='float-end'>{order.status} </h6>
              </div>
              {order.orderDetails?.map(orderdetails =>(
                
                <ProductCartItems  orderdetails={orderdetails}/>
              ))}
                </div>
            ))}
            
           
          </div>
          
          <div className={toggleState === 2 ? "active": ""} style={{width:'100%'}}>
          
                          <div className="col-lg-12 clearfix mb-2">
                          <a  data-bs-toggle="modal"
                          href="#Address"
                          role='button' className='btn btn-danger float-end rounded-0'>Add New Address</a>
                          
                          </div>
                          {address ? <UserAddress address={address}/> : ""}
                          
           
          </div>
          
          <div className={toggleState === 3 ? "active": ""}>
            <i className="fa fa-bar-chart"></i>
            <h2>Profile</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eum similique quisquam officiis neque, cumque dignissimos architecto nisi totam sapiente eos et illum laborum atque vero ea perferendis consectetur veritatis.</p>
          </div>
          <div className={toggleState === 4 ? "active": ""}>
            <i className="fa fa-bar-chart"></i>
            <h2>Reviews</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eum similique quisquam officiis neque, cumque dignissimos architecto nisi totam sapiente eos et illum laborum atque vero ea perferendis consectetur veritatis.</p>
          </div>
         
          
        </div>
      </div>
    )
})
