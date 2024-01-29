import React from 'react'
import './Navbar.css'
import logo_light from '../../assets/dark_logo.png'
import logo_dark from '../../assets/white_logo.png'
import toggle_light from '../../assets/night.png'
import toggle_dark from '../../assets/day.png'
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom'


const Navbar = ({theme,setTheme}) => {
  
    
    const toggle_mode=()=>{
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }
    
    const { loginWithRedirect,logout,isAuthenticated,user } = useAuth0();
  
    
  return (
    <div className='navbar'> 
       <img
       src={theme === 'light' ? logo_light : logo_dark}
       alt=''
       className='logo'
       />
       <ul>
        <Link to='/'>Home</Link>
        <Link to='/adminlogin'>Admin Login</Link>
        <Link to='/about'>About</Link>
         {
          isAuthenticated ? <Link> <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
          User Out
        </button></Link> : <Link><button onClick={() => loginWithRedirect()}>User In</button></Link>
         }   
         <Link to='/contact'>Contact</Link>   
         <Link>{isAuthenticated && (
      <div className='navbar' style={{width:'120%'}}>
        <img src={user.picture} style={{width:'40px',height:'40px',borderRadius:'40px'}} alt={user.name} />
        <h2 >{user.name}</h2>
        
      </div>
    )}</Link>  
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