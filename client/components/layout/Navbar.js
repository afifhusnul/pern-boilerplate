import React, { useState,useContext } from 'react'
import * as IconBS from "react-icons/fc";
import Link from 'next/link'
import {useRouter} from "next/router"
import Api from '../utils/Service.js'
import { UserContext } from '../hooks/useContext.js'
import useLogout from '../hooks/useLogout'

export default function Navbar() {
  const router = useRouter();

  const { user } = useContext(UserContext);
  
  const { logoutUser } = useLogout(); 

  const [isMenuActive, setMenuActive] = useState(true)
  const handleMenuActive = () => setMenuActive(!isMenuActive)


  let menuNavBar, menuLoginOut;
  if(user) {
    menuNavBar = (
      <>
        <li className='nav-item'>
          <Link href='/me'>
            <a className='nav-link hover:text-white' onClick={handleMenuActive} >About Me</a>
          </Link>
        </li>
        <li className='nav-item'>
          <Link href='/todo'>
            <a className='nav-link hover:text-white' onClick={handleMenuActive} >Todo</a>
          </Link>
        </li>
      </>
     )
    menuLoginOut = (
      <>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="true">
            <IconBS.FcMenu />  {user.username.toUpperCase()}
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li>
              <Link href="/logout">
                <a className="dropdown-item" onClick={logoutUser}>Logout</a>  
              </Link>              
            </li>
          </ul>
        </li>
      
      </>
      )

  } else {

    menuLoginOut = (
      <>
      <li className='nav-item'>
          <Link href='/login'>
            <a className='nav-link hover:text-white' onClick={handleMenuActive}>Login</a>
          </Link>
        </li>

        <li className='nav-item active'>
          <Link href='/register'>
            <a className='nav-link hover:text-white' onClick={handleMenuActive} >Register</a>
          </Link>
        </li>
        </>
      )
  }



  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-light bg-light mb-2">
        <div className="container-fluid">
          <Link href='/'>
            <a className='navbar-brand' aria-current='page'>Train Me</a>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">              
              {menuNavBar}
            </ul>
            <ul className="navbar-nav mr-auto mb-2 mb-md-0">
              {menuLoginOut}
              
            </ul>              
              
            
          </div>
        </div>
      </nav>
    </div>
  )
}