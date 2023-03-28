import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom';
import UID from 'uniquebrowserid';
import "./signin.css"
// You can use provided image shipped by this package or using your own

const Signin = () => {
    const [changeType, setchangeType] = useState("password")
    const [profile, setProfile] = useState([])
    const [changeIcon, setchangeIcon] = useState("eye-slash")
    
    const [Pass, setPass] = useState("")
    const [Email, setEmail] = useState("")
    const History = useHistory();
    // Linkedin login
    const browserID = new UID().completeID()
    useEffect(() => {
        verifyTOken()
    }, [])
    
    const verifyTOken = async ()=>{
        try {
              const response = await fetch(`${process.env.REACT_APP_USER_API}/token-verification`, {
                method: 'POST',
                headers: { "Content-Type": "application/json"},
                credentials: "include",
              })
              const json = await response.json()
              console.log(json)
              if(json.success === true){
                    History.push(`/seller/dashboard`)
              }
              else{
                console.log(json)
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
    //  custom login
    const handleSubmit = async (e) => {
        console.log("h")
        e.preventDefault();
        try {
            const response = await fetch(`${process.env.REACT_APP_USER_API}/login`, {
                method: 'POST',
                credentials: "include",
                headers: {
                    'Content-Type': 'application/json',
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify({ email: Email, password: Pass, returnSecureToken: true })
            })
            const json = await response.json()
            if(json.success === true){
                // alert(json.msg)
                console.log(json)
                alert(json.msg)
                    History.push(`/seller/dashboard`)
            }
            else{
                // alert(json.msg)
                console.log(json)
            }
        } catch (error) {
            alert(error)
            console.log(error)
        }


    }

    const [showlogoutButton, setShowlogoutButton] = useState(false);

    const google = () => {
        window.open(`${process.env.REACT_APP_USER_API}/google-login`, "_self");
      };
    const Linkedin = () => {
        window.open(`${process.env.REACT_APP_USER_API}/linkedin-login`, "_self");
      };
    const Facebook = () => {
        window.open(`${process.env.REACT_APP_USER_API}/facebook-login`, "_self");
      };

    return (
        <div>
            <div className="signIn_seller">
                    <img src="/image/sign-in-banner.png" alt="" />
                <div className="signIn-fields">
                    <h2>Sign In</h2>
                    {/* <p>Enter Email</p> */}
                    {/* <p className='subP'>Enter passcode that was sent in your gmail</p> */}
                    <input type="email" autoComplete='off' placeholder='example@gmail.com' onChange={emailVal} />
                    {/* <p>Enter Password</p> */}
                    <div className="d-flex" style={{ flexDirection: "column" }}>
                        <div className='tryingSomething' style={{ position: "relative" }}>
                            <input autoComplete='off' type={changeType} placeholder='Passcode' onChange={getValue} />
                            <i className={`fa-sharp fa-solid fa-${changeIcon}`} onClick={() => toggleVisibility()} ></i>
                            <Link to="/reset-pass" className='subP'> <span>Forget</span></Link>
                        </div>
                        <button onClick={handleSubmit}>Log In</button>
                        <div className="d-flex" style={{width: "100%", justifyContent: "space-between", alignItems: "center"}}>
                            <p>New to The Young Minds</p>
                            <Link to="/sign-up" style={{marginRight: "20px"}}>Sign Up</Link>
                        </div>
                        <p className='subP' style={{textAlign: "center", marginTop: "20px"}}>Question? Emails us at <span style={{ fontWeight: "500" }}>connect@theyoungminds.org</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin