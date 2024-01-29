import React from 'react'
import './PolicyDetails.css'
import NavbarProduct from '../Navbar Product/NavbarProduct'

const PolicyDetails = () => {
    return (
        <div>
            <NavbarProduct />
            <div className='policy-details'>
                <form action="">
                    <div className='policy-flex'>
                        <table>
                            <tr>
                                <td>Policy Number:</td>
                                <td><input type="text" /></td>
                            </tr>
                            <tr>
                                <td>Insurance:</td>
                                <td><input type="text" /></td>
                            </tr>
                            <tr>
                                <td>Type of Cover:</td>
                                <td><input type="text" /></td>
                            </tr>
                            <tr>
                                <td>Expiry Date:</td>
                                <td><input type="text" /></td>
                            </tr>
                            <tr>
                                <td>Premium Mode:</td>
                                <td><input type="text" /></td>
                            </tr>
                            <tr>
                                <td>BabyCover:</td>
                                <td><input type="text" /></td>
                            </tr>
                            <tr>
                                <td>Policy Max:</td>
                                <td><input type="text" /></td>
                            </tr>
                            <tr>
                                <td>User ID:</td>
                                <td><input type="text" /></td>
                            </tr>
                            <tr>
                                <td>TPA:</td>
                                <td><input type="text" /></td>
                            </tr>
                            <tr>
                                <td>Effective Date:</td>
                                <td><input type="text" /></td>
                            </tr>
                            <tr>
                                <td>PremiumRate:</td>
                                <td><input type="text" /></td>
                            </tr>
                            <tr>
                                <td>Maternity:</td>
                                <td><input type="text" /></td>
                            </tr>
                            <tr>
                                <td>BabyCoverDays Start:</td>
                                <td><input type="text" /></td>
                            </tr>
                            <tr>
                                <td>Policy Deductible:</td>
                                <td><input type="text" /></td>
                            </tr>
                        </table>
                    </div>
                    <div className='policy-btn'>
                    <button type="submit">Submit</button>
                    <button type='reset'>Clear</button>
                    <button>Register Insured</button>
                    <button>Medical History</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PolicyDetails