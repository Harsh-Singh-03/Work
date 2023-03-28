import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const Adminlogin = () => {
    const [loginDisplay, setloginDisplay] = useState("block")

    const [changeType, setchangeType] = useState("password")
    const [changeIcon, setchangeIcon] = useState("eye-slash")

    const History = useHistory()

    useEffect(() => {
        verify()
    }, [])

    const verify = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API}/admin-verify`, {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                credentials: "include"
            })
            const json = await response.json()
            console.log(json)
            if (json.success === true) {
                History.push('/admin-dashboard')
            }
            else {
            }
            // console.log(first)
        } catch (error) {
            // setWarning("Sorry! Some error occured !!")
            // History.push('/admin-login')
            console.log(error)
            // document.getElementById("n").click();
        }
    }

    

    const [Pass, setPass] = useState("")
    const [Email, setEmail] = useState("")
    const getValue = (e) => {
        setPass(e.target.value)
        console.log(e.target.value)
    }
    const emailVal = (e) => {
        setEmail(e.target.value)
        console.log(e.target.value)
    }
    //  custom login
    const toggleVisibility = () => {
        setchangeType(changeType === "password" ? "text" : "password")
        setchangeIcon(changeIcon === "eye" ? "eye-slash" : "eye")
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${process.env.REACT_APP_API}/admin-login`, {
                method: 'POST',
                credentials: "include",
                headers: {
                    'Content-Type': 'application/json',
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify({ email: Email, password: Pass })
            })
            const json = await response.json()
            if (json.success === true) {
                History.push(`/admin-dashboard`)
            }
            console.log(json)
        } catch (error) {
            alert(error)
            console.log(error)
        }


    }

    return (
        <div className="signIn_seller">
            <img src="/image/sign-in-banner.png" alt="" />
            <div className="signIn-fields">
                <h2>ADMIN LOGIN</h2>
                {/* <p className='subP'>Enter passcode that was sent in your gmail</p> */}
                <input type="email" placeholder='Enter Email' onChange={emailVal} />
                <div className="d-flex" style={{ flexDirection: "column" }}>
                    <div className='tryingSomething' style={{ position: "relative" }}>

                        <input type={changeType} placeholder='&#x1F512; Enter passcode' onChange={getValue} />
                        <i className={`fa-sharp fa-solid fa-${changeIcon}`} onClick={() => toggleVisibility()} ></i>
                    </div>
                    <button onClick={handleSubmit}>Log In</button>
                </div>
            </div>
        </div>

    )
}

export default Adminlogin
