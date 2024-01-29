import React from 'react'
import './product.css'
import NavbarProduct from '../Navbar Product/NavbarProduct'
import car_insur from '../../assets/car-insurance.png'
const Product = () => {
  return (
    <div className='product'>
      <NavbarProduct/>
      <div className='product-body'>
        <h1>Insurance Artical Page</h1>
        <div className='product-table'>
          <table className='product-tab'>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Description</th>
            </tr>
            <tr>
              
              <td><img src={car_insur} style={{width:'50px'}} alt="" /></td>
              <td>Car Insuarnce</td>
              <td>Insured your car with our excited plans</td>
            </tr>
            <tr>
              <td><img src={car_insur} style={{width:'50px'}} alt="" /></td>
              <td>Child Insuarnce</td>
              <td>Insured your child with our excited plans</td>
            </tr>
            <tr>
              <td><img src={car_insur} style={{width:'50px'}} alt="" /></td>
              <td>Home Insuarnce</td>
              <td>Insured your home with our excited plans</td>
            </tr>
            <tr>
              <td><img src={car_insur} style={{width:'50px'}} alt="" /></td>
              <td>Health Insuarnce</td>
              <td>You an choose best healthcare plans and products from our product page</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Product