import React, {useState, useEffect} from 'react'
import { useParams, useHistory } from 'react-router-dom'

const Verification = () => {
    const { id } = useParams()
    const History = useHistory()
    const verify = async (e) => {     
        console.log("hello")
        try {
            const response = await fetch(`${process.env.REACT_APP_USER_API}/user-type`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify({ email: id, usertype: e.target.innerHTML })
            })
            const json = await response.json()
            if (json.success === true) {
                History.push(`/seller/dashboard`)
                console.log(json.data)
                // pushToCrm(json.data);
            } else {
                History.push('/sign-in')
                // console.log(json)
            }
            // alert(json.msg)
        } catch (error) {
            History.push('/sign-in')
            console.log(error)
        }
    }
    const showAlert = (e) =>{
        alert("Sorry ! We are working on that service currently, You can check out 3d Printables for now")
    }

  return (
    <div className='d-flex my-4 mx-3'>
        <button className='mx-3 btn btn-success' onClick={verify}>Printable</button>
        <button className='mx-3 btn btn-success' onClick={showAlert}>Modeller</button>
        <button className='mx-3 btn btn-success' onClick={showAlert}>Printer</button>
    </div>
  )
}

export default Verification