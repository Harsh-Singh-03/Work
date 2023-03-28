import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'

const Settings = () => {
    const { id } = useParams()
    const History = useHistory()
    const [Data, setData] = useState({})
    useEffect(() => {
        console.log(id)
        if (id !== "") {
            getProfile()
        }
    }, [])
    const getProfile = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_USER_API}/user-profile`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify({ id: id })
            })
            const json = await response.json()
            if (json.success === true) {
                setData(json.data)
                console.log(json)
            } else {
                History.push('/sign-in')
            }
            // alert(json.msg)
        } catch (error) {
            console.log(error)
        }
    }
    const UserLogout = () => {
        if (Data.usertype === "google" || Data.usertype === "linkedin" || Data.usertype === "facebook") {
            window.open(`${process.env.REACT_APP_USER_API}/logout`, "_self");
        }
        else {
            customLogout()
        }
    };
    const customLogout = async () =>{
        try {
            const response = await fetch(`${process.env.REACT_APP_USER_API}/logout`, {
                method: 'POST',
                credentials: "include",
                headers: {
                    'Content-Type': 'application/json',
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
            })
            const json = await response.json()
            if(json.success === true){
                History.push('/sign-in')
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div style={{width: "100vw", maxWidth: "500px"}}>
            <p>Setting page</p>
              <div className="d-flex" style={{justifyContent: "space-between", alignItems: "center", width: "100%", padding: "10px", position: "fixed", zIndex: "50", bottom: "0px", left: "0px", background: "#808080"}}>
                <a href={`/user/profile/${id}`} style={{fontSize: '12px' , margin: "0px", padding: "0px", color: "#fff"}} >profile</a>
                <a href={`/user/message/${id}`} style={{fontSize: '12px' , margin: "0px", padding: "0px", color: "#fff"}} >Messages</a>
                <a href={`/user/product/${id}`} style={{fontSize: '12px' , margin: "0px", padding: "0px", color: "#fff"}} >Product</a>
                <a href={`/user/sales/${id}`} style={{fontSize: '12px' , margin: "0px", padding: "0px", color: "#fff"}} >Salses</a>
                <a href={`/user/settings/${id}`} style={{fontSize: '12px' , margin: "0px", padding: "0px", color: "#fff"}} >Settings</a>
            </div>
            <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Account Setting
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <ul>
                                <li>
                                    Update Basic Profile
                                </li>
                                <li>Add Education</li>
                                <li>Add Certification</li>
                                <li>Add Skill</li>
                                <li>Add Software</li>
                                <li>Verify Mail</li>
                                <li>Verify Phone</li>
                                <li>Reset Pass</li>
                                <li>change Primary mail</li>
                                <li>change Primary phone</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Product/Printer Setting
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <ul>
                                <li>Add product</li>
                                <li>Live Product</li>
                                <li>All Product</li>
                                <li>For Printer</li>
                                <li>Add Printer</li>
                                <li>Printer List</li>
                                <li>Printed Product </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Sales
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <ul>
                                <li>Total Payouts</li>
                                <li>Next payout</li>
                                <li>Payment History</li>
                                <li>Fullfilled product/</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingFour">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                            Privacy Policy
                        </button>
                    </h2>
                    <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample" >
                        <div className="accordion-body">
                          
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingFive">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                            Terms & Condition
                        </button>
                    </h2>
                    <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample" >
                        <div className="accordion-body">
                          
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingSix">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                            Add Payment
                        </button>
                    </h2>
                    <div id="flush-collapseSix" className="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample" >
                        <div className="accordion-body">
                          <ul>
                            <li>
                                Your Payment accout (Delete)
                            </li>
                            <li>Add payment account</li>
                            <li>Instruction.</li>
                          </ul>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingSeven">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                           Review & Rating
                        </button>
                    </h2>
                    <div id="flush-collapseSeven" className="accordion-collapse collapse" aria-labelledby="flush-headingSeven" data-bs-parent="#accordionFlushExample" >
                        <div className="accordion-body">
                        
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingEight">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight" aria-expanded="false" aria-controls="flush-collapseEight">
                           Review & Rating
                        </button>
                    </h2>
                    <div id="flush-collapseEight" className="accordion-collapse collapse" aria-labelledby="flush-headingEight" data-bs-parent="#accordionFlushExample" >
                        <div className="accordion-body">
                        
                        </div>
                    </div>
                </div>
              
            </div>
            <button className='btn btn-danger' onClick={UserLogout}>Logout</button>
        </div>
    )
}

export default Settings