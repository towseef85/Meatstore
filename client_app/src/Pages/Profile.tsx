import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import user_img from '../assets/images/user_default.png'
import Tabs from '../components/user/Tabs'
import { useStore } from '../stores/store'

export default observer(function Profile() {
    const{userStore:{user, userAddress, getAddress}, orderStore:{GetOrdersForUser, loadOrders, orderRegistery}}= useStore()
    useEffect(() =>{
        getAddress(user?.userId!)
        if(orderRegistery.size <1) loadOrders(user?.userId!)
    },[getAddress])
    return (
        <>
        <div className='p-4 bg-secondary'>
            <div className="container">
                <h4 className='text-center text-white p-4'>Profile</h4>
            </div>
        </div>
        <div className="container gx-5 mt-4">
            <div className="col-lg-10 offset-lg-1 bg-white">

            <div className="row p-1">
            <div className="col-lg-2">
                <img src={user_img} className='mx-auto d-block mt-3 rounded-circle img-fluid h-75' alt="" />
            </div>
                <div className="col-lg-6 border-right border-secondary">
                   <ul className='list-group list-group-flush w-75 float-start'>
                       <li className='list-group-item text-secondary'>Name: {user?.displayName}</li>
                       
                       <li className='list-group-item text-secondary'>Email: {user?.username}</li>
                       <li className='list-group-item text-secondary'>Mobile:</li>
                   </ul>
                   <button className='btn btn-danger mt-2 float-end'>Edit</button>
                </div>
                <div className="col-lg-4">
                        <h1 className='text-center text-danger mt-4 d-block'>{orderRegistery.size}</h1>
                        <h3 className="text-center">Orders</h3>
                        </div>
               
            </div>
            </div>
        </div>
        
        <div className="container gx-5 mt-4">
            <div className="col-lg-10 offset-lg-1 bg-white" style={{position:'relative'}}>
                <div className="row" >
                  <Tabs address ={userAddress} orders={GetOrdersForUser}/>
                </div>
            </div>
        </div>
        </>
    )
})
