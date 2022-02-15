import './Modal.css'
import {Formik, Form} from 'formik'
import { useState } from 'react'
import { UserFormValues } from '../../models/User'
import MyTextControl from '../Controls/MyTextControl'
import { UserValidation } from '../../utils/Validations/userValidation'
import { useStore } from '../../stores/store'
import { observer } from 'mobx-react-lite'
import AddUserAddress from '../user/AddUserAddress'

export default observer(function Modal() {
    const {userStore} = useStore()
    const[register, setRegister]=useState(true)
    const [user, setUser] = useState<UserFormValues>({
        email:'',
        password:''
    })
    console.log("from model is logged in", userStore.isLoggedIn)
    const handleSubmit=(user: UserFormValues) =>{
        let newUser = {...user, from: "model"}
        userStore.login(newUser)
    }
    return (
        <>
        <div className="modal fade" id="SignIn"  role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          {register ? (
              <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close d-flex align-items-center justify-content-center" data-bs-dismiss="modal" aria-label="Close">
                <i aria-hidden="true" className="fas fa-times"></i>
                </button>
              </div>
              <div className="modal-body p-4 p-md-5">
                  <div className="icon d-flex align-items-center justify-content-center">
                  <i className="fas fa-user-tie"></i>
                      
                  </div>
                  <h3 className="text-center mb-4">Sign In</h3>
                  <Formik initialValues={user} onSubmit={handleSubmit} validationSchema={UserValidation}>
                      {({isSubmitting, isValid, dirty, handleSubmit})=>(
  
                  <Form action="#" className="login-form" onSubmit={handleSubmit}>
                      <div className="form-group">
                          {/* <input type="text" name='email' className="form-control rounded-left" placeholder="Username"/> */}
                          <MyTextControl name='email' type='text' placeholder='Username' class='form-control rounded-left' />
                      </div>
                <div className="form-group ">
                  {/* <input type="password" name='password' className="form-control rounded-left" placeholder="Password"/> */}
                  <MyTextControl name='password' type='password' placeholder='Password' class='form-control rounded-left'/>
                </div>
                <div className="form-group">
                    <button type="submit" disabled={isSubmitting || !isValid || !dirty} className="form-control btn btn-primary rounded submit px-3">Login</button>
                </div>
                <div className="form-group d-md-flex">
                    <div className="form-check w-50">
                        <label className="custom-control fill-checkbox">
                                        <input type="checkbox" className="fill-control-input"/>
                                        <span className="fill-control-indicator"></span>
                                        <span className="fill-control-description">Remember Me</span>
                                    </label>
                                </div>
                                <div className="w-50 text-md-right">
                                    <a className='text-decoration-none' href="#">Forgot Password</a>
                                </div>
                </div>
              </Form>
                  
                      )}
                  </Formik>
              </div>
              <div className="modal-footer justify-content-center">
                  <p>Not a member? <button className='text-decoration-none border-0' onClick={() => setRegister(false)} >Create an account</button></p>
                 
              </div>
            </div>
          
          ):(
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close d-flex align-items-center justify-content-center" data-bs-dismiss="modal" aria-label="Close">
                <i aria-hidden="true" className="fas fa-times"></i>
                </button>
              </div>
              <div className="modal-body p-4 p-md-5">
                  <div className="icon d-flex align-items-center justify-content-center">
                  <i className="fas fa-user-plus"></i>
                      
                  </div>
                  <h3 className="text-center mb-4">Register</h3>
                  <Formik initialValues={user} onSubmit={handleSubmit} validationSchema={UserValidation}>
                      {({isSubmitting, isValid, dirty, handleSubmit})=>(
  
                  <Form action="#" className="login-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                         
                         <MyTextControl name='displayName' type='text' placeholder='Full Name' class='form-control rounded-left' />
                     </div>
                     <div className="form-group">
                         
                         <MyTextControl name='mobileNumber' type='text' placeholder='Mobile Number' class='form-control rounded-left' />
                     </div>
                      <div className="form-group">
                         
                         <MyTextControl name='email' type='text' placeholder='Username' class='form-control rounded-left' />
                     </div>
                    
                <div className="form-group ">
                 
                  <MyTextControl name='password' type='password' placeholder='Password' class='form-control rounded-left'/>
                </div>
                <div className="form-group">
                    <button type="submit" disabled={isSubmitting || !isValid || !dirty} className="form-control btn btn-primary rounded submit px-3">Register</button>
                </div>
               
                   
              </Form>
                  
                      )}
                  </Formik>
              </div>
              <div className="modal-footer justify-content-center">
                  <p>Already Have Account? <button className='text-decoration-none border-0' onClick={() => setRegister(true)} >Sign In</button></p>
                 
              </div>
            </div>
          
          )}
        </div>
        </div>
        <div className="modal fade" id="Address"  role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close d-flex align-items-center justify-content-center" data-bs-dismiss="modal" aria-label="Close">
                <i aria-hidden="true" className="fas fa-times"></i>
                </button>
              </div>
              <div className="modal-body p-4 p-md-5">
                <div className="icon d-flex align-items-center justify-content-center">
                  <i className="fas fa-map-marked-alt"></i>
                      
                </div>
                  <h3 className="text-center mb-4">Add Address</h3>
                 <AddUserAddress/>
                       
              </div>
              </div>
        </div>
        </div>
      </>
    )
})
