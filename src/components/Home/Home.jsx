import React from 'react'
import './Home.css'
import Navbar from '../Navbar/Navbar'

const Home = () => {
  return (
    <>
    <Navbar/>
    <div className='warrper'>  
        <div className='container-body'>
           <div className='container-list-one'>
                 <h3 style={{padding:'10px'}}>Get Rs 1 Core Cover @Rs 16/Day</h3>
                 <p>Protection againts all forms of death, disease & disability</p>
                 <span>Get an online discount of upto 10%</span>
                 <div className='container-list-cont'>
                    <h2> We are reated</h2>
                    <table>
                        <tr>
                            <td>6.7 <span>Crore</span></td>
                            <td>6.7 <span>Crore</span></td>
                            <td>6.7 <span>Crore</span></td>
                        </tr>
                    </table>
                    <p>Policybazaar is one of India's leading digital insurance marketplace</p>
                 </div>
           </div>
           <div className='container-list-tow'>
<form action="">
  <div className='gender-cont'>   <input 
    type="radio" 
    value='Male'
    name='gender'
    />Male
      <input 
    type="radio" 
    value='Female'
    name='gender'
    />Female</div>
 
    <div className='name-cont'> <label>Your Name</label>
    <input
    type='text'
    placeholder='Enter Your Name'
    name='name'
    /></div>
   
    <div className='birth-cont'><label>Date of Birth</label>
    <input
    type='date'
    placeholder='DD/MM/YYYY'
    name='birth'
    /></div>
    
    <div className='number-cont'><label>Number</label>
    <input
    type='number'
    placeholder='Enter Mobile Number'
    name='number'
    /></div>
    
    <div className='btn-cont'><button>View Free Quotes</button></div>
    <div className='root-cont'><p>By clicking you agree to our <span>Privacy policy Terms of use Disclaimers</span></p>
</div>
</form>

           </div>
        </div>
    </div>
    </>
  )
}

export default Home