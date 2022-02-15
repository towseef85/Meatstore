import { observer } from "mobx-react-lite"
import { useEffect } from "react"
import { IUserAddress } from "../../models/userAddress"
import { useStore } from "../../stores/store"
import UserAddress from "../user/UserAddress"

interface Props{
    address: IUserAddress[]
    step:any
    addressId: any
    initialUserAddressId: any
}


export default observer(function DeliverySummary({step, address, addressId, initialUserAddressId}:Props) {
        const {userStore:{user}} = useStore()
    return (
        <>
        <div className='col-lg-12'>
            <h4 className='text-center p-4'>Select Delivery Address</h4>
            {address ? address.map(a => (
                <div className='col-lg-12 border p-4 m-1 bg-white' key={a.id}>
                   
                    <div className="row">
                        <div className="col-lg-6">
                        <p className='float-start w-100 m-0'>{user?.displayName} <span className="badge bg-success">Home</span> {a.alternateNumber}</p>
                        <p className='p-0 m-0 float-start'>{a.address}, {a.landmark}</p>
                        <p className='float-start'>{a.city}</p>
                        </div>
                        <div className="col-lg-6">
                        <p className='float-end'><i className="fas fa-edit rounded-circle border p-3 mr-2 text-center d-inline-block border-2"></i></p>
                        </div>
                    </div>
                    <button className='btn btn-primary' disabled={initialUserAddressId } onClick={() => addressId(a.id)}><i className="far fa-truck"></i> Delivery Here</button>
                </div>
               
            )): ""}
        </div>
         <div className="col-lg-12 mt-2 mb-4 p-4">
         <button className='btn btn-primary float-start' onClick={() => step(1)}>
            <i className="fas fa-chevron-left"></i> Previous
           </button>
         <button disabled={initialUserAddressId == undefined} className='btn btn-primary float-end' onClick={() => step(3)}>
           Next <i className="fas fa-chevron-right"></i>
           </button>
         
       </div>
       </>
    )
})
