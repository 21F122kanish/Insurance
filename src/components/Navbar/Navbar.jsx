import React from 'react'
import './Navbar.css'
import logo_light from '../../assets/dark_logo.png'
import logo_dark from '../../assets/white_logo.png'
import toggle_light from '../../assets/night.png'
import toggle_dark from '../../assets/day.png'
import { useAuth0 } from "@auth0/auth0-react";


const Navbar = ({theme,setTheme}) => {
  
    
    const toggle_mode=()=>{
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }
    
    const { loginWithRedirect,logout,isAuthenticated } = useAuth0();
  
    
  return (
    <div className='navbar'> 
       <img
       src={theme === 'light' ? logo_light : logo_dark}
       alt=''
       className='logo'
       />
       <ul>
        <li>Home</li>
        <li>Plans</li>
        <li>About</li>
         {
          isAuthenticated ? <li> <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
          Log Out
        </button></li> : <li><button onClick={() => loginWithRedirect()}>Log In</button></li>
         }        
       </ul>
       <div className='search-box'>
      
      <div className='search-list'>
      </div>
    
        <img
        src={theme === 'light' ? toggle_light : toggle_dark}
        alt=''
        className='toggle-icon'
        onClick={()=>{toggle_mode()}}
        />
       </div>
    </div>
  )
}

export default Navbar