import React, {useContext, useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import NoteContext from "../context/notes/Notecontext"

const Sidenav = (props) => {
    const context = useContext(NoteContext)
    const [toggleDisplay, settoggleDisplay] = useState("block")
    const {backopacity1, setbackopacity1, Hamtoggle1, setHamtoggle1} = context;
    const toggle = ()=>{
        setHamtoggle1(Hamtoggle1 === "translateX(-300px)" ? "translateX(0px)" : "translateX(-300px)")
        setbackopacity1(backopacity1 === "1" ? "0.9" : "1")
    }
  return (
    <div className='dash-side-nav'  style={{ transform: Hamtoggle1 }}>
        <i className="fa-solid fa-xmark hamburger-menu" onClick={toggle}></i>
    <div className="accordion" id="accordionExample" style={{background: "#f5f5f5"}}>
        <div className="accordion-item my-4" style={{border: "none", boxShadow: "none"}}>
            <h2 className="accordion-header" id="headingOne" >
                <button className="accordion-button" style={{border: "none", fontWeight: "600", outline: "none", background: "#f5f5f5", color: "#000"}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    #3D PRINTABLE
                </button>
            </h2>
            <div id="collapseOne" style={{background: "#f5f5f5"}} className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <ul className="list-group">
                    <a href={`/seller/dashboard`} className="list-group-item" style={{background: "#f5f5f5", border: "none", marginLeft: "20px", cursor: "pointer"}} >All Product</a>
                    <Link to={`/seller/add-product`} className="list-group-item" style={{background: "#f5f5f5", border: "none", marginLeft: "20px", cursor: "pointer"}}>Add Product</Link>
                    <Link to={`/seller/orders`} className="list-group-item" style={{background: "#f5f5f5", border: "none", marginLeft: "20px", cursor: "pointer"}}>Orders</Link>
                </ul>
            </div>
        </div>
        <div className="accordion-item my-4" style={{border: "none", boxShadow: "none"}}>
            <h2 className="accordion-header" id="headingTwo" >
                <button className="accordion-button" style={{border: "none", fontWeight: "600", outline: "none", background: "#f5f5f5", color: "#000"}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                    #Account
                </button>
            </h2>
            <div id="collapseTwo" style={{background: "#f5f5f5"}} className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <ul className="list-group">
                    <Link to={`/reset-pass`} className="list-group-item" style={{background: "#f5f5f5", border: "none", marginLeft: "20px", cursor: "pointer"}}>Reset Password</Link>
                </ul>
            </div>
        </div>
    </div>
</div>
  )
}

export default Sidenav
