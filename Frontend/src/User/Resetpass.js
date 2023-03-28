import React, { useState, useEffect } from 'react'
import { useHistory, Link, useParams } from 'react-router-dom';

const Resetpass = () => {
  const [changeType, setchangeType] = useState("password")
  const [changeIcon, setchangeIcon] = useState("eye-slash")
  const [statusDisplay, setstatusDisplay] = useState("none")
  const [VerifyDisplay, setVerifyDisplay] = useState("none")
  const [restPassd, setrestPassd] = useState("none")
  const [Pass, setPass] = useState("")
  const [Email, setEmail] = useState("")
  const { id, token } = useParams()
  const History = useHistory()
  const toggleVisibility = () => {
    setchangeType(changeType === "password" ? "text" : "password")
    setchangeIcon(changeIcon === "eye" ? "eye-slash" : "eye")
  }
  const getValue = (e) => {
    setPass(e.target.value)
    console.log(e.target.value)
  }

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const code = queryParams.get('oobCode');
    const mode = queryParams.get('mode')
    if (mode !== "" && mode !== undefined) {
      if (mode === "verifyEmail") {
        setVerifyDisplay("block")
      }
      if (mode === "resetPassword") {
        setrestPassd("block")
      }
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const queryParams = new URLSearchParams(window.location.search);
    const code = queryParams.get('oobCode');
    if (code !== "" && code !== undefined) {
      try {
        const response = await fetch(`${process.env.REACT_APP_USER_API}/new-password`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify({ password: Pass, code: code })//token: token, id: id
        })
        const json = await response.json()
        if (json.success === true) {
          alert(json.msg)
          History.push('/sign-in')
        }
      } catch (error) {
        console.log(error)
      }
    } else {
      History.push('/reset-pass')
    }
  }
  const verifyEmail = async () => {
    const queryParams = new URLSearchParams(window.location.search);
    const code = queryParams.get('oobCode');
    if (code !== "" && code !== undefined) {
      try {
        const response = await fetch(`${process.env.REACT_APP_USER_API}/verify-email`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify({ code: code })//token: token, id: id
        })
        const json = await response.json()
        if (json.success === true) {
          alert(json.msg)
          History.push('/seller/dashboard')
        }
      } catch (error) {
        console.log(error)
      }
    } else {
      History.push('/sign-in')
    }
  }
  return (
    <div>
      <div className="signIn_seller">
        <img src="/image/sign-in-banner.png" alt="" />
        {/* <div className="imageContainer">
    </div> */}
        <div className="signIn-fields" style={{display: restPassd}}>
          <h2>Enter New Password</h2>
          <div className="d-flex" style={{ flexDirection: "column" }}>
            <div className='tryingSomething' style={{ position: "relative" }}>

              <input type={changeType} placeholder='&#x1F512; Enter passcode' onChange={getValue} />
              <i className={`fa-sharp fa-solid fa-${changeIcon}`} onClick={() => toggleVisibility()} ></i>
            </div>
            <button style={{marginTop: "0px", marginBottom: "0px"}} onClick={handleSubmit}>Submit</button>
            <p className='subP' style={{ textAlign: "center", marginTop: "20px" }}>Question? Emails us at <span style={{ fontWeight: "500" }}>connect@theyoungminds.org</span></p>
          </div>
        </div>
        <div className="signIn-fields" style={{display: VerifyDisplay}}>
          <button onClick={verifyEmail}>Verify</button>
        </div>
      </div>
    </div>
  )
}

export default Resetpass