import React from 'react'
import './Navbarproduct.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/dark_logo.png'
import { useAuth0 } from "@auth0/auth0-react";

const NavbarProduct = () => {
    const { loginWithRedirect,logout,isAuthenticated } = useAuth0();
  return (
    <div className='nav'>
        <div className='logo'>
            <img
            src={logo}
            alt=''
            />
        </div>
        <ul>
            <Link to='/product'>Product</Link>
            <Link to='/subproduct'>Sub Product</Link>
            <Link to='/userdata'>User Data</Link>
            <Link to='/feedback'>FeedBack</Link>
            {
          isAuthenticated ? <Link> <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
          User Out
        </button></Link> : <Link><button onClick={() => loginWithRedirect()}>User In</button></Link>
         } 
        </ul>
    </div>
  )
}

export default NavbarProduct