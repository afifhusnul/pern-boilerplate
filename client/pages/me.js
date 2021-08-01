import React, { useState,useContext } from 'react'
import Layout from '../components/layout/Layout'
import { UserContext } from '../components/hooks/useContext.js';
import useLogout from '../components/hooks/useLogout';

export default function Me() {

  const { user } = useContext(UserContext);
  const { logoutUser } = useLogout(); 

  let currentUser;
  (user ? currentUser = user.username :  currentUser = 'Not Authorized' )

  return (
    <Layout title="About Me">
      <div className="container-fluid">
        id User : {user.iduser}<br></br>
        UserName : {user.username.toUpperCase()}<br></br>
        Status : {user.isactive}
      </div>
    </Layout>
  )
}