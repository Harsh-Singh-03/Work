import React, { useState, useEffect } from 'react'

const Reset = () => {
  const [changeType, setchangeType] = useState("password")
  const [changeIcon, setchangeIcon] = useState("eye-slash")
  const [statusDisplay, setstatusDisplay] = useState("none")
  const [Pass, setPass] = useState("")
  const [Email, setEmail] = useState("")
  const toggleVisibility = () => {
    setchangeType(changeType === "password" ? "text" : "password")
    setchangeIcon(changeIcon === "eye" ? "eye-slash" : "eye")
  }
  const getValue = (e) => {
    setPass(e.target.value)
    console.log(e.target.value)
  }
  const emailVal = (e) => {
    setEmail(e.target.value)
    console.log(e.target.value)
  }
  const something = () => {
    console.log(Pass)
    console.log(Email)
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${process.env.REACT_APP_USER_API}/resetpassword`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({ email: Email })
      })
      const json = await response.json()
      alert(json.msg)
      console.log(json)
    } catch (error) {
      console.log(error)
    }


  }
  return (
    <div>
      <div className="signIn_seller">

        <img src="/image/sign-in-banner.png" alt="" />
        <div className="signIn-fields">
          {/* <p className='subP'>Enter passcode that was sent in your gmail</p> */}
          <h2>Reset Password</h2>
          <input type="email" placeholder='Enter your registered email' onChange={emailVal} />
          {/* <p>Enter Password</p>
        <div className="d-flex" style={{flexDirection: "column"}}>
          <div className='tryingSomething' style={{position: "relative"}}>

        <input type={changeType} placeholder='&#x1F512; Enter passcode' onChange={getValue}/>
        <i className={`fa-sharp fa-solid fa-${changeIcon}`} onClick={()=> toggleVisibility()} ></i>
          </div>
          <p className='subP'>Question? Emails us at <span style={{color: "#51D015"}}>connect@theyoungminds.org</span></p>
        </div> */}
          <button style={{marginTop: "0px"}} onClick={handleSubmit}>Submit Request</button>
        </div>
      </div>
    </div>
  )
}

export default Reset