import React, { useState } from 'react'
import NavbarProduct from '../Navbar Product/NavbarProduct'
import { useNavigate} from 'react-router-dom'
import axios from 'axios'
import './SubProduct.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const SubProduct = () => {
    const navigate=useNavigate()
    const [catagery,setCatagery]= useState('')
    const [productTitle,setProductTitle]= useState('')
    const [productDescriptions,setProductDescriptions]= useState('')

    let submit=async(e)=>{
        e.preventDefault();
        try {
            alert("Submitted")
            GoToProduct()
            console.log("Successfully redirected the page")
            await axios.post("http://localhost:8000/",{
                catagery,productTitle,productDescriptions
                
            })
            
        } catch (e) {
            console.log(e)
        }
       
    }
function GoToProduct(){
    navigate("/")
}
    
  return (
    <div className='subproduct-main'>
        <NavbarProduct/>
        <h1>Product SubCatagery Page</h1>
        <div className='sub-product'>
           
            <form action="">
                <table className='table w-50'>
                    <tr>
                        <td>Insurance Catagery:</td>
                        <td><input  onChange={(e)=>{setCatagery(e.target.value)}} type="text" /></td>
                    </tr>
                    <tr>
                        <td>Sub Product Title:</td>
                        <td><input  onChange={(e)=>{setProductTitle(e.target.value)}} type="text" /></td>
                    </tr>
                    <tr>
                        <td>Sub Product Descriptions:</td>
                        <td><textarea onChange={(e)=>{setProductDescriptions(e.target.value)}} type="text" /></td>
                    </tr>
                    <tr>
                        <td>Sub Product Image:</td>
                        <td><input type="file" /></td>
                    </tr>
                </table>
                <button type="submit" className='m-2 button bg-success text-white' onClick={submit}>Save</button>
                <button type="reset" className='m-2 button bg-danger text-white'>Clear</button>
            </form>
        </div>
    </div>
  )
}

export default SubProduct