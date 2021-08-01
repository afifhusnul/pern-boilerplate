import React, { useState } from "react";
import { useRouter } from 'next/router'
import * as IconBS from "react-icons/fc"
import Toast from 'react-bootstrap/Toast'
import Layout from '../components/layout/Layout'
import useCustomForm from '../components/hooks/useCustomForm';
import Api from '../components/utils/Service.js'

export default function register() {

  const router = useRouter()
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)
  const [show, setShow] = useState(false);

  const initialValues = {
      username: "",
      email: "",
      password: "",
      passwordConfirm: ""
    };  

  const {
      values,
      errors,      
      handleChange,      
    } = useCustomForm({ initialValues });

  const registerUser = async(event) => {
    event.preventDefault()    

      await Api.post('/auth/register', values )
        .then(res=>{
          setShow(true)          
          router.push('/login') //Once create login success push to Login page          
        })  
        .catch(error=>{            
            setError('Error : '+error.response.data.meta.errorDescription.messages)
        }); 

  }

  let alertSuccess;
  if (show) {
    alertSuccess = (
      <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>        
        <Toast.Body>Create login success!</Toast.Body>
      </Toast>
      )
  }


  let msgError;
  if (error) {
    msgError = (
      <div className="row mt-2">
        <div className="col">
          <label style={{color: 'red'}}>{error}</label>
        </div>                   
      </div>
    )
  }

  return (
    <Layout title="Register">
    <div className="container-fluid mt-4" >
      {alertSuccess}
      <div className="d-flex justify-content-center">
        <div className="card " style={{ width: '40rem' }} >
          <div className="card-header">Create your login</div>
            <div className="card-body">
                <form onSubmit={registerUser}>
                  <div className="row mb-2">
                    <div className="col-3">
                      <label htmlFor="username" className="col-form-label">Username</label>
                    </div>
                    <div className="col input-group">
                      <span className="input-group-text"><IconBS.FcPortraitMode /></span>
                      <input type="text" id="username" name="username" 
                        onChange={handleChange}
                        value={values.username}
                        className="form-control" placeholder="Username" required/>
                    </div>                   
                  </div>
                  <div className="row mb-2">
                    <div className="col-3">
                      <label htmlFor="email" className="col-form-label">Email</label>
                    </div>
                    <div className="col input-group">
                      <span className="input-group-text"><IconBS.FcAddressBook /></span>
                      <input type="text" id="email" name="email" 
                        onChange={handleChange}
                        value={values.email}
                        className="form-control" placeholder="Email" required/>
                    </div>
                  </div>
                  <div className="row mb-2">
                    <div className="col-3">
                      <label htmlFor="password" className="col-form-label">Password</label>
                    </div>
                    <div className="col input-group">
                      <span className="input-group-text"><IconBS.FcKey /></span>
                      <input type="password" id="password" name="password" 
                        onChange={handleChange}
                        value={values.name}
                        className="form-control" placeholder="Password" required/>
                    </div>
                  </div>
                  <div className="row mb-4">
                    <div className="col-3">
                      <label htmlFor="passwordConfirm" className="col-form-label">Confirm Password</label>
                    </div>
                    <div className="col input-group">
                      <span className="input-group-text"><IconBS.FcKey /></span>
                      <input type="password" id="passwordConfirm" name="passwordConfirm" 
                        onChange={handleChange}
                        value={values.passwordConfirm}
                        className="form-control" placeholder="Confirm Password" required/>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-outline-primary btn-sm">Register</button>
                  {msgError}
                </form>
            </div>
          </div>
        </div>       
    </div>
    </Layout>
  )
}