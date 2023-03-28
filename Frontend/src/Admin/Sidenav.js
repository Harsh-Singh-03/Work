import React, {useContext, useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import NoteContext from "../context/notes/Notecontext"

const Sidenav = (props) => {
    const context = useContext(NoteContext)
    const [toggleDisplay, settoggleDisplay] = useState("block")
    
    const {backopacity, setbackopacity, Hamtoggle, setHamtoggle} = context;
    const toggle = ()=>{
        setHamtoggle(Hamtoggle === "translateX(-300px)" ? "translateX(0px)" : "translateX(-300px)")
        setbackopacity(backopacity === "1" ? "0.9" : "1")
    }
  return (
    <div className='dash-side-nav' style={{ transform: Hamtoggle }}>
        {/* <i className="fa-solid fa-bars hamburger-menu" onClick={toggle}></i> */}
        <i className="fa-solid fa-xmark hamburger-menu" onClick={toggle}></i>
    <div class="accordion" id="accordionExample" style={{background: "#f5f5f5", display: toggleDisplay}}>
        <div class="accordion-item my-4" style={{border: "none", boxShadow: "none"}}>
            <h2 class="accordion-header" id="headingOne" >
                <button class="accordion-button" style={{border: "none", fontWeight: "600", outline: "none", background: "#f5f5f5", color: "#000"}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    #3D PRINTABLE
                </button>
            </h2>
            <div id="collapseOne" style={{background: "#f5f5f5"}} class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <ul class="list-group">
                    <a href={`/admin-dashboard`} class="list-group-item" style={{background: "#f5f5f5", border: "none", marginLeft: "20px", cursor: "pointer"}} >All Product</a>
                    <Link to={`/admin-dashboard/add-product`} class="list-group-item" style={{background: "#f5f5f5", border: "none", marginLeft: "20px", cursor: "pointer"}}>Add Product</Link>
                    <a href={`/admin-dashboard/seller-request`} style={{background: "#f5f5f5", border: "none", marginLeft: "20px", cursor: "pointer"}} class="list-group-item" >Seller Request</a>
                    <Link  to={`/admin-dashboard/orders`} style={{background: "#f5f5f5", border: "none", marginLeft: "20px", cursor: "pointer"}} class="list-group-item" >Orders</Link>
                </ul>
            </div>
        </div>
        <div className="accordion-item my-4" style={{border: "none", boxShadow: "none"}}>
            <h2 className="accordion-header" id="headingTwo" >
                <button className="accordion-button" style={{border: "none", fontWeight: "600", outline: "none", background: "#f5f5f5", color: "#000"}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                    #SKU
                </button>
            </h2>
            <div id="collapseTwo" style={{background: "#f5f5f5"}} className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <ul className="list-group">
                    <li className="list-group-item" style={{background: "#f5f5f5", border: "none", marginLeft: "20px", cursor: "pointer"}}>Prefix Y & Suffix M</li>
                    <li className="list-group-item" style={{background: "#f5f5f5", border: "none", marginLeft: "20px", cursor: "pointer"}}>First Two Word= Product Name</li>
                    <li className="list-group-item" style={{background: "#f5f5f5", border: "none", marginLeft: "20px", cursor: "pointer"}}>Second Two Word= Seller Email</li>
                    <li className="list-group-item" style={{background: "#f5f5f5", border: "none", marginLeft: "20px", cursor: "pointer"}}>CO Something = Collection + 1st Word of collection</li>
                    <li className="list-group-item" style={{background: "#f5f5f5", border: "none", marginLeft: "20px", cursor: "pointer"}}>T1 = 3D Printable</li>
                    <li className="list-group-item" style={{background: "#f5f5f5", border: "none", marginLeft: "20px", cursor: "pointer"}}>CA Something = category + 1st Word of category</li>
                    <li className="list-group-item" style={{background: "#f5f5f5", border: "none", marginLeft: "20px", cursor: "pointer"}}>4 random number</li>
                </ul>
            </div>
        </div>
    </div>
</div>
  )
}

export default Sidenav
