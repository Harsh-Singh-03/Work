import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
// import Profiledata from './Profile.json'

const Profile = () => {
    const { id } = useParams()
    const History = useHistory()
    const [Data, setData] = useState({})
    // const [ProductName, setProductName] = useState("")
    const [ImgSrc, setImgSrc] = useState("")
    const [toggleDisplay, setToggleDisplay] = useState("none")
    const [productDisplay, setproductDisplay] = useState("none")
    const [showprofile, setshowprofile] = useState("none")
    const [inputRange, setinputRange] = useState("80")
    const [iframesrc, setiframesrc] = useState("https://forms.zohopublic.in/ymeducation/form/Add3DPrintable/formperma/aqYCLgeuIFEyUzGNMNHOXStHuaKe6gnNrUknPnvHP8k")
    useEffect(() => {
        console.log(id)
        // if (id !== "") {
            getProfile()
        // }
    }, [])
  
    const getProfile = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_USER_API}/token-verification`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
            })
            const json = await response.json()
            if (json.success === true) {
                setData(json.data)
                console.log(json)
                alert(json.msg)
                setshowprofile("block")
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
    // const setFrame = () => {
    //     setiframesrc(`https://forms.zohopublic.in/ymeducation/form/Add3DPrintable/formperma/aqYCLgeuIFEyUzGNMNHOXStHuaKe6gnNrUknPnvHP8k?SingleLine3=${Data._id}&SingleLine4=${Data.email}`)
    // }
    
    const toggleRange = (e)=>{
        // setinputRange(e.target.value)
        e.target.disabled = true
    }
    const push = ()=>{
        History.push(`/user/settings/${id}`)
    }
    return (
        <div style={{ width: "100vw", maxWidth: "500px", paddingBottom: "100px", display: showprofile }} className="">
            <p>Seller Prodile</p>
            <div className="d-flex" style={{justifyContent: "space-between", alignItems: "center", width: "100%", padding: "10px", position: "fixed", zIndex: "50", bottom: "0px", left: "0px", background: "#808080"}}>
                <a href={`/user/profile/${id}`} style={{fontSize: '12px' , margin: "0px", padding: "0px", color: "#fff"}} >profile</a>
                <a href={`/user/message/${id}`} style={{fontSize: '12px' , margin: "0px", padding: "0px", color: "#fff"}} >Messages</a>
                <a href={`/user/product/${id}`} style={{fontSize: '12px' , margin: "0px", padding: "0px", color: "#fff"}} >Product</a>
                <a href={`/user/sales/${id}`} style={{fontSize: '12px' , margin: "0px", padding: "0px", color: "#fff"}} >Salses</a>
                <a href={`/user/settings/${id}`} style={{fontSize: '12px' , margin: "0px", padding: "0px", color: "#fff"}} >Settings</a>
            </div>
            <div className='user-profiledom' style={{ width: "calc(100% - 40px)", margin: "0px 20px" }} >
                <div className="inputForProcess" style={{marginTop: "2rem"}}>
                    <p>Profile Complition Bar : {inputRange}% complete</p>
                    <input type="range" id="cowbell" name="cowbell"
                        min="0" max="100" value= {inputRange} onChange={toggleRange} step="10" style={{width: "100%"}} />
                </div>
                <div className="profile-section" style={{marginTop: "1rem", display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                    <div className="d-flex" style={{alignItems: "center"}}>
                        <img src="/image/harsh.jpg" alt="" style={{width: "100px" , height: "100px", borderRadius: "50%"}} />
                        <div style={{marginLeft: "1rem"}}>
                            <p style={{marginBottom: "0px", fontSize: "17px", fontWeight: "600"}}>{Data.displayName === undefined ? "H" : Data.displayName}</p>
                            <p style={{marginBottom: "0px", fontSize: "13px", fontWeight: "400"}}>Developer at THE YOUNG MINDS</p>
                            <div className="d-flex">
                            <i className="fa-solid fa-star" style={{color: "rgb(222, 195, 21)", fontSize: "14px", marginRight: "1px" , marginTop: "5px"}}></i>
                            <i className="fa-solid fa-star" style={{color: "rgb(222, 195, 21)", fontSize: "14px", marginRight: "1px" , marginTop: "5px"}}></i>
                            <i className="fa-solid fa-star" style={{color: "rgb(222, 195, 21)", fontSize: "14px", marginRight: "1px" , marginTop: "5px"}}></i>
                            <i className="fa-solid fa-star" style={{color: "rgb(222, 195, 21)", fontSize: "14px", marginRight: "1px" , marginTop: "5px"}}></i>
                            <i className="fa-solid fa-star" style={{color: "rgb(222, 195, 21)", fontSize: "14px", marginRight: "1px" , marginTop: "5px"}}></i>
                            </div>
                        </div>
                    </div>
                    {/* <i className="fa-solid fa-right-from-bracket" onClick={UserLogout} style={{fontSize: "26px", fontWeight: "600", cursor: "pointer"}}></i> */}
                </div>
                <p className='my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, eveniet a. Illum sint, illo quisquam soluta aperiam impedit. Iure tempora quia quaerat sint autem, error aliquid enim perspiciatis quos eligendi?</p>
                <h5>Social Link</h5>
                <a href="https://instagram.com/_harsh_._03?igshid=YmMyMTA2M2Y=" target="_blank" style={{marginBottom: "0px"}}>IG : GO TO </a> <br/>
                <a href="https://instagram.com/_harsh_._03?igshid=YmMyMTA2M2Y=" target="_blank" style={{marginBottom: "0px"}}>IG : GO TO</a><br/>
                <a href="https://instagram.com/_harsh_._03?igshid=YmMyMTA2M2Y=" target="_blank" style={{marginBottom: "0px"}}>IG : GO TO</a><br/>
                <button className='btn btn-dark' onClick={push} style={{width: "50%", marginLeft: "25%", marginBottom: "1rem"}}>Edit Profile Info</button>
                <div className="d-flex" style={{alignItems: "center", justifyContent: "space-between", marginBottom: "1rem"}}>
                <h5>3D Printers</h5>
                     <i className="fa-solid fa-pen-to-square" onClick={push} style={{fontSize: "20px", marginRight: "1rem"}}></i>
                </div>
                <div className="d-flex" style={{alignItems: "center", justifyContent: "space-between"}}>
                    <h5>Education</h5>
                     <i className="fa-solid fa-pen-to-square" onClick={push} style={{fontSize: "20px", marginRight: "1rem"}}></i>
                </div>
                <p style={{marginBottom: "0px"}}>Camellia School Of Engineering and Technology</p>
                <p style={{marginBottom: "0px"}}>B-Tech in C.S.E</p>
                <p style={{marginBottom: "0px"}}>2018-2022</p>
                <div className="d-flex" style={{alignItems: "center", justifyContent: "space-between"}}>
                <h5>Software Using</h5>
                     <i className="fa-solid fa-pen-to-square" onClick={push} style={{fontSize: "20px", marginRight: "1rem"}}></i>
                </div>
                <ul style={{display: "flex", flexWrap: "wrap", paddingLeft: "0px", listStyle: "none", textDecoration: "underline"}}>
                    <li style={{marginRight: "20px"}}>VS Code</li>
                    <li style={{listStyle: "none", marginRight: "20px"}}>Postman</li>
                    <li style={{listStyle: "none", marginRight: "20px"}}>Github</li>
                </ul>
                <div className="d-flex" style={{alignItems: "center", justifyContent: "space-between"}}>
                <h5>Skill</h5>
                     <i className="fa-solid fa-pen-to-square" onClick={push} style={{fontSize: "20px", marginRight: "1rem"}}></i>
                </div>
                <ul style={{display: "flex", flexWrap: "wrap", paddingLeft: "0px", listStyle: "none", textDecoration: "underline"}}>
                    <li style={{listStyle: "none", marginRight: "20px"}}>MERN STACK</li>
                </ul>
                <div className="d-flex" style={{alignItems: "center", justifyContent: "space-between"}}>
                <h5>Certification</h5>
                     <i className="fa-solid fa-pen-to-square" onClick={push} style={{fontSize: "20px", marginRight: "1rem"}}></i>
                </div>
                <ul style={{display: "flex", flexWrap: "wrap", paddingLeft: "0px", listStyle: "none", textDecoration: "underline"}}>
                    <li style={{marginRight: "20px"}}>VS Code</li>
                    <li style={{listStyle: "none", marginRight: "20px"}}>MERN STACK</li>
                    <li style={{listStyle: "none", marginRight: "20px"}}>Postman</li>
                    <li style={{listStyle: "none", marginRight: "20px"}}>Github</li>
                </ul>
                {/* <div className="d-flex" style={{alignItems: "center", justifyContent: "space-between",marginBottom: "1rem"}}>
                <h5>Product List</h5>
                     <i className="fa-solid fa-circle-plus" style={{fontSize: "20px", marginRight: "1rem"}}></i>
                </div> */}
                {/* <div  style={{gridTemplateColumns: "1fr 1fr 1fr", display: "grid", width: "calc(100vw-40px)", overflow: "hidden", gridGap: "4px"}}>
                    <img src="/image/success.png" style={{width: "100%"}} alt="" />
                    <img src="/image/success.png" style={{width: "100%"}} alt="" />
                    <img src="/image/success.png" style={{width: "100%"}} alt="" />
                    <img src="/image/success.png" style={{width: "100%"}} alt="" />
                    <img src="/image/success.png" style={{width: "100%"}} alt="" />
                    <img src="/image/success.png" style={{width: "100%"}} alt="" />
                </div> */}
            </div>
        </div>
    )
}

export default Profile