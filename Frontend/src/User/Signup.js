import React, { useState, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom';
import UID from 'uniquebrowserid';

const SignUp = () => {
  const [changeType, setchangeType] = useState("password")
  const [changeIcon, setchangeIcon] = useState("eye-slash")
  const [statusDisplay, setstatusDisplay] = useState("none")
  const [Pass, setPass] = useState("")
  const [Email, setEmail] = useState("")
  const [Phone, setPhone] = useState("")

  const History = useHistory()
  const browserID = new UID().completeID()
  useEffect(() => {
    verifyTOken()
  }, [])

  const verifyTOken = async () => {
    try {
      // var data = JSON.stringify({
      //   "Browser_Code": browserID,
      // });
      const response = await fetch(`${process.env.REACT_APP_USER_API}/token-verification`, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        // body: data
      })
      const json = await response.json()
      console.log(json)
      if (json.success === true) {
        History.push(`/seller/dashboard`)

      }
    } catch (error) {
      console.log("Some error occures")
    }
  }

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
  const phoneVal = (e) => {
    setPhone(e.target.value)
    console.log(e.target.value)
  }
  const google = () => {
    window.open(`${process.env.REACT_APP_USER_API}/google-login`, "_self");
  };
  const Linkedin = () => {
    window.open(`${process.env.REACT_APP_USER_API}/linkedin-login`, "_self");
  };
  const Facebook = () => {
    window.open(`${process.env.REACT_APP_USER_API}/facebook-login`, "_self");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${process.env.REACT_APP_USER_API}/sign-up`, {
        method: 'POST',
        credentials: "include",
        headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({ email: Email, password: Pass, displayName: Phone, returnSecureToken: true })
      })
      const json = await response.json()
      console.log(json)
      if (json.success === true) {
        alert(json.msg)
        History.push(`/verification/${json.email}`)
      }
      // alert(json.msg)
    } catch (error) {
      console.log(error)
    }


  }
  return (
    <div>
      <button onClick={google}>google</button>
      <div className="signIn_seller">
        <img src="/image/sign-up-banner.png" alt="" />
        <div className="signIn-fields">
          <h2>SIGN UP</h2>
          {/* <p>Name</p> */}
          {/* <p className='subP'>Enter passcode that was sent in your gmail</p> */}
          <input type="text" placeholder='Enter your name' onChange={phoneVal} />
          {/* <p>Enter Email</p> */}
          {/* <p className='subP'>Enter passcode that was sent in your gmail</p> */}
          <input type="email" placeholder='Enter Email' onChange={emailVal} />
          {/* <p>Enter Password</p> */}
          <div className="d-flex" style={{ flexDirection: "column" }}>
            <div className='tryingSomething' style={{ position: "relative" }}>

              <input type={changeType} placeholder='&#x1F512; Enter passcode' onChange={getValue} />
              <i className={`fa-sharp fa-solid fa-${changeIcon}`} onClick={() => toggleVisibility()} ></i>
            </div>
            <button style={{marginTop: "10px"}} onClick={handleSubmit}>Sign Up</button>
            <div className="d-flex" style={{ width: "100%", justifyContent: "space-between", alignItems: "center" }}>
              <p>Already Signed In</p>
              <Link to="/sign-in" style={{ marginRight: "20px" }}>Sign In</Link>
            </div>
            <p className='subP' style={{ textAlign: "center", marginTop: "20px" }}>Question? Emails us at <span style={{ fontWeight: "500" }}>connect@theyoungminds.org</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp