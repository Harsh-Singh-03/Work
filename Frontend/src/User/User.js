import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
// import Profiledata from './Profile.json'

const User = () => {
    const History = useHistory()
    const [Data, setData] = useState({})
    const [toggle, setToggle] = useState("none")
    // const [ProductName, setProductName] = useState("")
    const [ImgSrc, setImgSrc] = useState("")
    const [toggleDisplay, setToggleDisplay] = useState("none")
    const [productDisplay, setproductDisplay] = useState("none")
    const [showprofile, setshowprofile] = useState("none")
    const [inputRange, setinputRange] = useState("80")
    const [iframesrc, setiframesrc] = useState("https://forms.zohopublic.in/ymeducation/form/Add3DPrintable/formperma/aqYCLgeuIFEyUzGNMNHOXStHuaKe6gnNrUknPnvHP8k")
  
    // const setFrame = () => {
    //     setiframesrc(`https://forms.zohopublic.in/ymeducation/form/Add3DPrintable/formperma/aqYCLgeuIFEyUzGNMNHOXStHuaKe6gnNrUknPnvHP8k?SingleLine3=${Data._id}&SingleLine4=${Data.email}`)
    // }
    
    const toggleRange = (e)=>{
        // setinputRange(e.target.value)
        e.target.disabled = true
    }
    const toggledisc = ()=>{
        setToggle(toggle === "none" ? "grid" : "none")
    }
    return (
        <div style={{ width: "100vw", maxWidth: "500px", paddingBottom: "100px" }} className="">
            <p>Users view seller profile page</p>
            <div className='user-profiledom' style={{ width: "calc(100% - 40px)", margin: "0px 20px" }} >
                <div className="profile-section" style={{marginTop: "1rem", display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                    <div className="d-flex" style={{alignItems: "center"}}>
                        <img src="/image/harsh.jpg" alt="" style={{width: "100px" , height: "100px", borderRadius: "50%"}} />
                        <div style={{marginLeft: "1rem"}}>
                            <p style={{marginBottom: "0px", fontSize: "17px", fontWeight: "600"}}>Harsh</p>
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
                </div>
                <p className='my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, eveniet a. Illum sint, illo quisquam soluta aperiam impedit. Iure tempora quia quaerat sint autem, error aliquid enim perspiciatis quos eligendi?</p>
                <h5>Social Link</h5>
                <a href="https://instagram.com/_harsh_._03?igshid=YmMyMTA2M2Y=" className='mx-2' target="_blank" style={{marginBottom: "0px"}}>IG : GO TO </a>
                <a href="https://instagram.com/_harsh_._03?igshid=YmMyMTA2M2Y=" className='mx-2' target="_blank" style={{marginBottom: "0px"}}>IG : GO TO</a>
                <a href="https://instagram.com/_harsh_._03?igshid=YmMyMTA2M2Y=" className='mx-2' target="_blank" style={{marginBottom: "0px"}}>IG : GO TO</a>
                <button className='btn btn-dark my-2' style={{width: "50%", marginLeft: "25%", marginBottom: "1rem"}}>Send Message</button>
                <div className="d-flex">
                    <button className="btn btn-primery mx-2" onClick={toggledisc} style={{fontSize: "12px"}}>Brand Product</button>
                    <button className="btn btn-primery mx-2" onClick={toggledisc} style={{fontSize: "12px"}}>Printers</button>
                    <button className="btn btn-primery mx-2" onClick={toggledisc} style={{fontSize: "12px"}}>3D Design</button>
                </div>
                    <div  style={{gridTemplateColumns: "1fr 1fr 1fr", display: toggle, width: "calc(100vw-40px)", overflow: "hidden", gridGap: "4px"}}>
                    <img src="/image/success.png" style={{width: "100%"}} alt="" />
                    <img src="/image/success.png" style={{width: "100%"}} alt="" />
                    <img src="/image/success.png" style={{width: "100%"}} alt="" />
                    <img src="/image/success.png" style={{width: "100%"}} alt="" />
                    <img src="/image/success.png" style={{width: "100%"}} alt="" />
                    <img src="/image/success.png" style={{width: "100%"}} alt="" />
                </div>
                <div className="d-flex" style={{alignItems: "center", justifyContent: "space-between"}}>
                    <h5>Education</h5>
                    
                </div>
                <p style={{marginBottom: "0px"}}>Camellia School Of Engineering and Technology</p>
                <p style={{marginBottom: "0px"}}>B-Tech in C.S.E</p>
                <p style={{marginBottom: "0px"}}>2018-2022</p>
                <div className="d-flex" style={{alignItems: "center", justifyContent: "space-between"}}>
                <h5>Software Using</h5>
                    
                </div>
                <ul style={{display: "flex", flexWrap: "wrap", paddingLeft: "0px", listStyle: "none", textDecoration: "underline"}}>
                    <li style={{marginRight: "20px"}}>VS Code</li>
                    <li style={{listStyle: "none", marginRight: "20px"}}>Postman</li>
                    <li style={{listStyle: "none", marginRight: "20px"}}>Github</li>
                </ul>
                <div className="d-flex" style={{alignItems: "center", justifyContent: "space-between"}}>
                <h5>Skill</h5>
                </div>
                <ul style={{display: "flex", flexWrap: "wrap", paddingLeft: "0px", listStyle: "none", textDecoration: "underline"}}>
                    <li style={{listStyle: "none", marginRight: "20px"}}>MERN STACK</li>
                </ul>
                <div className="d-flex" style={{alignItems: "center", justifyContent: "space-between"}}>
                <h5>Certification</h5>
                </div>
                <ul style={{display: "flex", flexWrap: "wrap", paddingLeft: "0px", listStyle: "none", textDecoration: "underline"}}>
                    <li style={{marginRight: "20px"}}>VS Code</li>
                    <li style={{listStyle: "none", marginRight: "20px"}}>MERN STACK</li>
                    <li style={{listStyle: "none", marginRight: "20px"}}>Postman</li>
                    <li style={{listStyle: "none", marginRight: "20px"}}>Github</li>
                </ul>
                <div className="d-flex" style={{alignItems: "center", justifyContent: "space-between"}}>
                    <h5>User Review</h5>
                    <button className='btn btn-primery'>Add Review</button>
                </div>
                <p>HERE LIST OF USER REVIEW CAN BE SORTED BY STARS</p>
            </div>

        </div>
    )
}

export default User