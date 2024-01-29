import React from 'react'
import './Contact.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarProduct from '../Navbar Product/NavbarProduct'

const Contact = () => {
  return (
    <div className='contact-main'>
        <NavbarProduct/>
        <div className='contact-body'>
<h1>Contact Us Page</h1>
<div className='contact-cont'>
    <form>
<table className='table table-striped bg-dark table-hover' >
    <tr>
        <td>Name:</td>
        <td><input className='bg-info' type="text" name='name'/></td>
    </tr>
    <tr>
        <td>City:</td>
        <td><input className='bg-info' type="text" name='name'/></td>
    </tr>
    <tr>
        <td>Mobile:</td>
        <td><input className='bg-info' type="text" name='name'/></td>
    </tr>
    <tr>
        <td>Email Id:</td>
        <td><input className='bg-info' type="text" name='name'/></td>
    </tr>
    <tr>
        <td>Product:</td>
        <td><select className='bg-info' name='plans'> 
            <option value='Term Plan'>Term Plan</option>
            <option value='Saving Plan'>Saving Plan</option>
            </select></td>
    </tr>
</table>
<button className='button p-1 me-2 bg-success text-white'>Submit</button>
<input type="reset" className='button p-1 ms-2 bg-danger text-white' value='Clear'/>
</form>
</div>
        </div>
    </div>
  )
}

export default Contact