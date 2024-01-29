import React, { useState } from 'react'
import './Admin_login.css'
import Navbar from '../Navbar/Navbar'
import { useNavigate} from 'react-router-dom'
import axios from 'axios'


const Adminlogin = () => {
    const navigate = useNavigate();
    const [userName,setUserName]=useState('');
    const [passWord,setPassWord]=useState('');

    let submit=async(e)=>{
        e.preventDefault();
        try {
            alert("Submitted")
            GoToProduct()
            console.log("Successfully redirected the page")
            await axios.post("http://localhost:8000/",{
                userName,passWord
                
            })
            
        } catch (e) {
            console.log(e)
        }
       
    }
function GoToProduct(){
    navigate("/product")
}

  return (
    <div className='admin-login'>
        <Navbar/>
        <div className='container'>
<h1>Welcome to LifeTime SettlementRaa Insurance Admin Login Page</h1>
<form >
<table className='container-table'>
    <tr>
        <td>
            <p>User Name:
                <input onChange={(e)=>{setUserName(e.target.value)}} type='text' name='uname'/>
            </p>
        </td>
    </tr>
    <tr>
        <td>
            <p>Password:
                <input onChange={(e)=>setPassWord(e.target.value)} type='password' name='password'/>
            </p>
        </td>
    </tr>
</table>
<a to='/product'><button onClick={submit} type='submit'>Log In</button></a>
<button style={{margin:'10px'}} type='reset'>Clear</button>
</form>
        </div>
    </div>
  )
}

export default Adminlogin