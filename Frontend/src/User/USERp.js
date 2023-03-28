import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'

const USERp = () => {
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
            <p>Users Profile</p>
            <div className='user-profiledom' style={{ width: "calc(100% - 40px)", margin: "0px 20px" }} >
                <div className="profile-section" style={{marginTop: "1rem", display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                    <div className="d-flex" style={{alignItems: "center"}}>
                        <img src="/image/harsh.jpg" alt="" style={{width: "100px" , height: "100px", borderRadius: "50%"}} />
                        <div style={{marginLeft: "1rem"}}>
                            <p style={{marginBottom: "0px", fontSize: "17px", fontWeight: "600"}}>Harsh</p>
                            <p>harshnov802@gmail.com</p>
                            {/* <div className="d-flex">  <p style={{marginBottom: "0px", fontSize: "13px", fontWeight: "400"}}>Developer at THE YOUNG MINDS</p>
                            <i className="fa-solid fa-star" style={{color: "rgb(222, 195, 21)", fontSize: "14px", marginRight: "1px" , marginTop: "5px"}}></i>
                            <i className="fa-solid fa-star" style={{color: "rgb(222, 195, 21)", fontSize: "14px", marginRight: "1px" , marginTop: "5px"}}></i>
                            <i className="fa-solid fa-star" style={{color: "rgb(222, 195, 21)", fontSize: "14px", marginRight: "1px" , marginTop: "5px"}}></i>
                            <i className="fa-solid fa-star" style={{color: "rgb(222, 195, 21)", fontSize: "14px", marginRight: "1px" , marginTop: "5px"}}></i>
                            <i className="fa-solid fa-star" style={{color: "rgb(222, 195, 21)", fontSize: "14px", marginRight: "1px" , marginTop: "5px"}}></i>
                            </div> */}
                        </div>
                    </div>
                </div>
                {/* <p className='my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, eveniet a. Illum sint, illo quisquam soluta aperiam impedit. Iure tempora quia quaerat sint autem, error aliquid enim perspiciatis quos eligendi?</p> */}
                
                <button className='btn btn-dark my-2' style={{width: "50%", marginLeft: "25%", marginBottom: "1rem"}}>Edit Profile</button>
                <button className='btn btn-dark my-2' style={{width: "50%", marginLeft: "25%", marginBottom: "1rem"}}>Browse Store</button>
                <button className='btn btn-dark my-2' style={{width: "50%", marginLeft: "25%", marginBottom: "1rem"}}>check Message</button>
            </div>

        </div>
    )
}

export default USERp
