import "bootstrap/dist/css/bootstrap.min.css";
import {Formik, Form} from 'formik'
import { useState } from 'react'
import { UserFormValues } from '../models/User'
import MyTextControl from '../components/Controls/MyTextControl'
import { UserValidation } from '../utils/Validations/userValidation'
import { useStore } from "../stores/store";
import { observer } from "mobx-react-lite";



export default observer(function Login() {
    const {userStore} = useStore()
    const [user, setUser] = useState<UserFormValues>({
        email:'',
        password:''
    })
    const handleSubmit=(user: UserFormValues) =>{
        let newUser = {...user, from: "login"}
        //console.log("user", newUser)
        userStore.login(newUser)
    }
    console.log("isloggedin", userStore.isLoggedIn)
    return (
        <div className='container mt-4'>
            <div className="row justify-content-center mt-4">

            <div className="col-lg-4 bg-white shadow p-3 mb-5 bg-body rounded">
            <div className="login_icon d-flex align-items-center justify-content-center">
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
            </div>
            
        </div>
    )
})
