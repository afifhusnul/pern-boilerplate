import React, { useState } from "react"
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'
import * as IconBS from "react-icons/fc"
import Toast from 'react-bootstrap/Toast'
import Layout from '../components/layout/Layout'
import useCustomForm from '../components/hooks/useCustomForm';
import Api from '../components/utils/Service.js'
import useAuth from '../components/hooks/useAuth.js';

export default function login() {

  const router = useRouter()
  const { handleAuth } = useAuth();

  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)
  const [show, setShow] = useState(false);
  const [userData, setUserData] = useState({ username: '', error: '' })

  const initialValues = {
      username: "",      
      password: ""      
    };  

  const {
      values,
      errors,      
      handleChange,      
    } = useCustomForm({ initialValues });

  const loginUser = async(event) => {
    event.preventDefault()    

      await Api.post('/auth/login', values)
        .then(res=>{
          setShow(true)
          handleAuth();
          router.push('/') //Once create login success push to profile
        })  
        .catch(error=>{
          console.log(error.response)
          setError('Error : '+error.response.data.meta.errorDescription)
        }); 
      
    

  }

  let alertSuccess;
  if (show) {
    alertSuccess = (
      <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>        
        <Toast.Body>Have fun!</Toast.Body>
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
    <Layout title="Login">
    <div className="container-fluid mt-4" >
      {alertSuccess}
      <div className="d-flex justify-content-center">
        <div className="card" style={{ width: '30rem' }} >
          <div className="card-header">Please sign in</div>
            <div className="card-body">
                <form onSubmit={loginUser}>
                  <div className="row mb-2">
                    <div className="col-3">
                      <label htmlFor="username" className="col-form-label">Username</label>
                    </div>
                    <div className="col input-group">
                      <span className="input-group-text"><IconBS.FcPortraitMode /></span>
                      <input type="text" id="username" name="username" 
                        onChange={handleChange}
                        value={values.username}
                        className="form-control" placeholder="Username" required />
                    </div>                   
                  </div>
                  <div className="row mb-4">
                    <div className="col-3">
                      <label htmlFor="password" className="col-form-label">Password</label>
                    </div>
                    <div className="col input-group">
                      <span className="input-group-text"><IconBS.FcKey /></span>
                      <input type="password" id="password" name="password" 
                        onChange={handleChange}
                        value={values.password}
                        className="form-control" placeholder="Password" required/>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-outline-primary btn-sm">Login</button>
                  {msgError}
                </form>
            </div>
          </div>
        </div>       
    </div>
    </Layout>
  )
}


// 
// export function getServerSideProps({ req, res }) {
//   return { props: { token: req.cookies.token || "" } };
// }

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   const { req, res } = ctx
//   const {cookies} = req  
//   return { props: {cookies  } }
// }