import React from 'react'
import './UserDataAdd.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarProduct from '../Navbar Product/NavbarProduct'

const UserDataAdd = () => {
  return (
    <div className='userdata'>
        <NavbarProduct/>
        <h1>Welcome to LifeTime SettlementRaa SignUp page</h1>
        <div className='userdata-body'> 
       
        <form>
            <table className='table-userdata '>
                <tr>
                    <td>First Name:</td>
                    <td><input type="text" name='fname'/></td>
                </tr>
                <tr>
                    <td>Last Name:</td>
                    <td><input type="text" name='lname'/></td>
                </tr>
                <tr>
                    <td>Data of Birth:</td>
                    <td><input type="date" name='birth'/></td>
                </tr>
                <tr>
                    <td>Email Address:</td>
                    <td><input type="email" name='mail'/></td>
                </tr>
                <tr>
                    <td>Gender:</td>
                    <td><input type="radio" name='gender'/>Male
                    <input type='radio' name='gender'/>Female
                    </td>
                </tr>
                <tr>
                    <td>City:</td>
                    <td><select name='city'>
                        <option value="Chennai" >Chennai </option>
                        <option value="Mumbai" >Mumbai </option>
                        <option value="Hyderabad" >Hyderabad </option>
                        <option value="Delhi" >Delhi </option>
                        <option value="Benguluru" >Benguluru </option>
                        </select></td>
                </tr>
                <tr>
                    <td>Address :</td>
                    <td><textarea type="text" name='address'/></td>
                </tr>
                <tr>
                    <td>Pincode :</td>
                    <td><input type="text" name='pincode'/></td>
                </tr>
                <tr>
                    <td>Country:</td>
                    <td><select name='country'>
                        <option value="America" >America </option>
                        <option value="Australia" >Australia </option>
                        <option value="China" >China </option>
                        <option value="India" >India </option>
                        </select></td>
                </tr>
                <tr>
                    <td>State:</td>
                    <td><select name='state'>
                        <option value="Goa" >Goa </option>
                        <option value="Tamil Nadu" >Tamil Nadu </option>
                        <option value="China" >China </option>
                        <option value="Kerala" >Kerala </option>
                        </select></td>
                </tr>
                <tr>
                    <td>Mobile Number:</td>
                    <td><input type="number" name='number'/></td>
                </tr>
                <tr>
                    <td>User Id:</td>
                    <td><input type="text" name='useid'/></td>
                </tr>
                <tr>
                    <td>Password:</td>
                    <td><input type="password" name='password'/></td>
                </tr>
            </table>
            <button className='bg-success text-white m-2' type='submit'>Submit</button>
            <button className='bg-danger text-white m-2' type='reset'>Clear</button>
            <button className='bg-info text-white m-2'>Medical History</button>
            <button className='bg-primary text-white m-2'>Policy Details</button>
        </form>
        </div>
    </div>
  )
}

export default UserDataAdd