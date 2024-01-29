import React from 'react'

const MedicalHistory = () => {
  return (
    <div>
        <div className='Medical-History'>
            <h1>Medical History</h1>
            <form action="">
                <table>
                    <tr>
                        <td>S.No:</td>
                        <td><input type="number" name='sno'/></td>
                    </tr>
                    <tr>
                        <td>User Id:</td>
                        <td><input type="number" name='useid'/></td>
                    </tr>
                    <tr>
                        <td>Date:</td>
                        <td><input type="date" name='date'/></td>
                    </tr>
                    <tr>
                        <td>Disease:</td>
                        <td><input type="text" name='disease'/></td>
                    </tr>
                </table>
                <button type="submit">Submit</button>
                <button type="reset">Clear</button>
                <button>Register Insured</button>
                <button>Policy Details</button>
            </form>
        </div>
    </div>
  )
}

export default MedicalHistory