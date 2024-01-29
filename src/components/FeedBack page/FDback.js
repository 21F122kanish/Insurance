import React from 'react'
import NavbarProduct from '../Navbar Product/NavbarProduct'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Feedback.css'

const FDback = () => {
  return (
    <div className='fd-main'>
        <NavbarProduct/>
        <h1>User FeedBack Page</h1>
        <div className='feedback '>
            <form action="">
                <table className='w-25 table'>
                    <tr>
                        <td>Name:</td>
                        <td><input type="text" name='name' /></td>
                    </tr>
                    <tr>
                        <td>Email Id:</td>
                        <td><input type="email" name='mail' /></td>
                    </tr>
                    <tr>
                        <td>Message:</td>
                        <td><textarea type="text" /></td>
                    </tr>
                </table>
              <button className='m-2 bg-success text-white' type='submit'>Send</button>
              <button className='m-2 bg-danger text-white' type='reset'>Clear</button>
            </form>
        </div>
    </div>
  )
}

export default FDback