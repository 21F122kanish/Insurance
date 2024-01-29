import React from 'react'
import './Productadd.css'
import NavbarProduct from '../Navbar Product/NavbarProduct'


const ProductAdd = () => {
  return (
    <div>
      <NavbarProduct />
      <div className='product-addition'>
        <h2>**Main Product Page**</h2>
        <form>
          <table className='product-addition-table'>
            <tr>
              <td><p>
                Product Title:
              </p></td>
              <td>
                <input
                  type='text'
                  name='title'
                  placeholder='Product Title'
                />
              </td>
            </tr>
            <tr>
              <td><p>
                Product Description:
              </p></td>
              <td>
                <input
                  type='text'
                  name='description'
                  placeholder='Product description'
                />
              </td>
            </tr>
            <tr>
              <td><p>
                Product Image:
              </p></td>
              <td>
                <input
                  type='file'
                />
              </td>
            </tr>
          </table>
          <div className='product-addition-btn'>
          <input type='button' value='Save' />
          <input type='reset' />
          </div>
         

        </form>
      </div>
    </div>
  )
}

export default ProductAdd