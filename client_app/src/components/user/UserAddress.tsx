import { observer } from "mobx-react-lite"
import { IUserAddress } from "../../models/userAddress"
import { useStore } from "../../stores/store"

interface Props{
    address: IUserAddress[]
}

export default observer(function UserAddress({address}: Props) {

    return (
        <>
        {address && address.map(u =>(
        <div className='col-lg-12 clearfix mb-3' key={u.id}>
            <div className="row">
                <div className="col-lg-1">
                <i className="fas fa-home fs-1"></i>
                </div>
                <div className="col-lg-9">
                    
                        <>
                        <h6 className='p-0 mb-0'>{u.address}</h6>
                        <p className='text-secondary m-0'>Landmark: {u.landmark}</p>
                        <p className='text-secondary m-0'>City: {u.city}</p>
                        </>
                   
                    
                </div>
                <div className="col-lg-2 mt-3">
                <i className="fas fa-edit rounded-circle border p-3 mr-2 text-center d-inline-block border-2"></i>
                <i className="fas fa-trash-alt rounded-circle border p-3 text-center d-inline-block border-2"></i>
                </div>
            </div>
        </div>
         ))}
         </>
    )
})
