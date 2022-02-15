import { Form, Formik } from "formik";
import { useState } from "react";
import { IUserAddress } from "../../models/userAddress";
import { UserAddressValidation } from "../../utils/Validations/userAddressValidation";
import MyTextControl from "../Controls/MyTextControl";
import { v4 as uuid } from 'uuid';
import { useStore } from "../../stores/store";

export default function AddUserAddress() {
    const {userStore:{user, addAddress}} = useStore()
    const [isDefault, setIsDefault] = useState(false)
    const [address, setAddress] = useState<IUserAddress>({
        id: '',
        userId: '',
        address: '',
        landmark: '',
        city: '',
        alternateNumber: '',
        isDefault: false

    })
    const handleSubmit=(userAddress : IUserAddress)=>{
        userAddress={...userAddress, id: uuid(), userId: user?.userId!, isDefault:isDefault}
        addAddress(userAddress)
        //console.log("new Address", useraddress)
    }
    return (
        <Formik initialValues={address} onSubmit={handleSubmit} validationSchema={UserAddressValidation}>
        {({isSubmitting, isValid, dirty, handleSubmit})=>(

    <Form action="#" className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
           
           <MyTextControl name='address' type='text' placeholder='Enter Address' class='form-control rounded-left' />
       </div>
       <div className="form-group">
           
           <MyTextControl name='landmark' type='text' placeholder='Enter Landmark' class='form-control rounded-left' />
       </div>
        <div className="form-group">
           
           <MyTextControl name='city' type='text' placeholder='Enter City' class='form-control rounded-left' />
       </div>
       <div className="form-group">
           
           <MyTextControl name='alternateNumber' type='text' placeholder='Enter Alternate Number' class='form-control rounded-left' />
       </div>
       <div className='form-group'>
       <div className="form-check">
  <input className="form-check-input" name="isDefault" type="checkbox" value={String(isDefault)} onChange={() => setIsDefault(!isDefault)} id="flexCheckDefault"/>
  <label className="form-check-label" htmlFor="flexCheckDefault">
    Set as Default
  </label>
</div>
       </div>

  <div className="form-group">
      <button type="submit" disabled={isSubmitting || !isValid || !dirty} className="form-control btn btn-primary rounded submit px-3">Add Address</button>
  </div>
 
     
</Form>
    
        )}
    </Formik>
    )
}
