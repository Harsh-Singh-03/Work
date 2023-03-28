import React, { useState, useEffect, useContext } from 'react'
import "./Nav.css"
import { useHistory } from 'react-router-dom'
import Logo from '../image/TYMLOGO.png'
import { NavLink, useLocation, Link } from "react-router-dom"
import NoteContext from "../context/notes/Notecontext"
function Nav() {
    const History = useHistory();
    const [transform, settransform] = useState("translateY(0px)")
    const [background, setbackground] = useState("none")
    const [classicon, setclassicon] = useState("fal")
    const [opacity, setopacity] = useState(0)
    const [transform1, settransform1] = useState("translateY(0px)")
    const [background1, setbackground1] = useState("none")
    const [classicon1, setclassicon1] = useState("fal")
    const [opacity1, setopacity1] = useState(0)
    const [transform2, settransform2] = useState("translateY(0px)")
    const [background2, setbackground2] = useState("none")
    const [classicon2, setclassicon2] = useState("fal")
    const [opacity2, setopacity2] = useState(0)
    const [transform3, settransform3] = useState("translateY(0px)")
    const [background3, setbackground3] = useState("none")
    const [classicon3, setclassicon3] = useState("fal")
    const [opacity3, setopacity3] = useState(0)
    const context = useContext(NoteContext)
    const { setServiceDOMCL, setStoreDOMCL, TopNavD,setTopNavD } = context
    const scrollToTop = () => {
        window.scrollTo(0, 0)
        // setServiceDOMCL("Service_Page_Section")
        // setStoreDOMCL("store_page_section")
    }
    let location = useLocation();
    const pushToHome = ()=>{
        History.push('/')
    }
    useEffect(() => {

        if (location.pathname === "/products") {
            setTopNavD("none")
        }else{
            setTopNavD("flex")
        }

        if (location.pathname === "/") {
            settransform("translateY(-25px)")
            setbackground("rgba(81, 208, 21, 1)")
            setopacity(1)
            setclassicon("fas")
        }
        else {
            settransform("translateY(0px)")
            setbackground("none")
            setopacity(0)
            setclassicon("fal")
        }
        if (location.pathname === "/education") {
            settransform1("translateY(-25px)")
            setbackground1("rgba(224, 68, 35, 1)")
            setopacity1(1)
            setclassicon1("fas")
        }
        else {
            settransform1("translateY(0px)")
            setbackground1("none")
            setopacity1(0)
            setclassicon1("fal")
        }
        if (location.pathname === "/services") {
            settransform2("translateY(-25px)")
            setbackground2("rgba(30, 142, 154, 1)")
            setopacity2(1)
            setclassicon2("fas")
        }
        else {
            settransform2("translateY(0px)")
            setbackground2("none")
            setopacity2(0)
            setclassicon2("fal")
        }
        if (location.pathname === "/store") {
            settransform3("translateY(-25px)")
            setbackground3("rgba(250, 172, 34, 1)")
            setopacity3(1)
            setclassicon3("fas")
        }
        else {
            settransform3("translateY(0px)")
            setbackground3("none")
            setopacity3(0)
            setclassicon3("fal")
        }
    }, [location.pathname])

    return (
        <>
        {/* <p id='megaEvent-banner'>GRAB YOUR SEATS NOW <Link to='/the-minds-day' style={{color: "#B7492F", cursor: "pointer"}}>THE YOUNG MINDS DAY</Link></p> */}
            <div className="mobile_nav" >
                {/* Mobile view top nav */}
                <ul style={{display: TopNavD}}>
                    <li><img src="/image/Brandlogo.png" alt="logo"  /></li>
                    {/* <li><h2>THE YOUNG MINDS</h2></li> */}
                    {/* <li></li> */}
                </ul>
            </div>
            {/* Mobile view bottom nav for navigatiom */}
            <div className="mobileRouting">
                <ul className="mobileNav">
                    <li onClick={scrollToTop} style={{ transform: transform }}>
                        <NavLink to="/" activelassname='active' exact={true}>
                            <i className={`${classicon} fa-home`} style={{ background: background, color: "rgba(81, 208, 21, 1)" , fontSize: "24px" }}></i>
                            <p className='website_para' style={{ opacity: opacity, textAlign: "center", marginBottom: "0px", fontWeight: "bold" }}>Home</p>
                        </NavLink>
                    </li>
                    <li onClick={scrollToTop} style={{ transform: transform1 }}>
                        <NavLink to="/education" activelassname='active'>
                            <i className={`${classicon1} fa-book-open`} style={{ background: background1, color: "rgba(224, 68, 35, 1)" , fontSize: "24px" }}></i>
                            <p className='website_para' style={{ opacity: opacity1, textAlign: "center", marginBottom: "0px", fontWeight: "bold" }}>Education</p>
                        </NavLink>
                    </li>
                    <li onClick={scrollToTop} style={{ transform: transform2 }}>
                        <NavLink to="/services" activeclassname='active'>
                            <i className={`${classicon2} fa-robot`} style={{ background: background2, color: "rgba(30, 142, 154, 1)" , fontSize: "24px" }}></i>
                            <p className='website_para' style={{ opacity: opacity2, textAlign: "center", marginBottom: "0px", fontWeight: "bold" }}>Services</p>
                        </NavLink>
                    </li>
                    <li onClick={scrollToTop} style={{ transform: transform3 }}>
                        <NavLink to="/store" activeclassname='active'>
                            <i className={`${classicon3} fa-shopping-bag`} style={{ background: background3, color: "rgba(250, 172, 34, 1)" , fontSize: "24px" }}></i>
                            <p className='website_para' style={{ opacity: opacity3, textAlign: "center", marginBottom: "0px", fontWeight: "bold" }}>Store</p>
                        </NavLink>
                    </li>
                    {/* <li onClick= {scrollToTop}><NavLink to="/about" activeclassname='active'><i className="fas fa-id-badge"></i></NavLink></li> */}
                </ul>
            </div>
            {/* Desktop view for navigation */}
            <div className="navigation">
                <ul className="topNav">
                    <li onClick={pushToHome}><img src="/image/Brandlogo.png" alt="logo" /></li>
                    {/* <li><h2>THE YOUNG MINDS</h2></li> */}
                    {/* <li></li> */}
                </ul>
                <ul className='mainNav'>
                    <li onClick={scrollToTop}><NavLink to="/" activelassname='active' exact={true} style={{ color: "#800080" }} >Home</NavLink></li>
                    <li onClick={scrollToTop}><NavLink to="/education" activelassname='active' style={{color: "rgba(224, 68, 35, 1)"}}>Education</NavLink></li>
                    <li onClick={scrollToTop}><NavLink to="/services" activeclassname='active' style={{color: "#e19005"}}>Services</NavLink></li>
                    <li onClick={scrollToTop}><NavLink to="/store" activeclassname='active' style={{color: "rgba(30, 142, 154, 1)"}}>Store</NavLink></li>
                    {/* <li onClick= {scrollToTop}><NavLink to="/about" activeclassname='active'>About Us</NavLink></li> */}
                </ul>
                {/* <div className='navblank'></div> */}
            </div>
        </>
    )
}

export default Nav
