import React, { useRef, useContext } from 'react'
import NoteContext from "../context/notes/Notecontext"
import { useHistory } from 'react-router-dom'
import { Helmet } from 'react-helmet';
// import { LazyLoadImage } from 'react-lazy-load-image-component';
import './Homepage.css'
import Nav from '../Navbar/Nav';
import Footer from '../Footer/Footer';

const Homepage = () => {
    const context = useContext(NoteContext)
    const { setServiceDOMCL, setStoreDOMCL } = context

    const printerRef = useRef(null)
    const History = useHistory()
    const slideToRef = (e, elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: "smooth"
        })
    }
 // "postbuild": "react-snap"

    const toggleAccordian1 = () => {
        History.push("/education")
    }
    const toggleAccordian2 = () => {
        setStoreDOMCL("store_page_section store_page_section_anime")
        History.push("/services")
    }
    const toggleAccordian3 = () => {
        setServiceDOMCL("Service_Page_Section Service_Page_Section_anime")
        History.push("/store")
    }
    return (
        <>
        <Nav/>
        <div className='HomePageRevamp'>
            <Helmet>
            {/* <link rel="shortcut icon" href="https://testing-theyoungminds.web.app/favicon.ico" type="image/x-icon" /> */}
                {/* <title>Music Website</title> */}
                <meta
                    name="og:description"
                    content="Discover modern - day sciences, advanced technologies, engineering marvels, cognitive art and magical mathematics."
                />
                <meta
                    name="keywords"
                    content="Learning, Future, Marketplace"
                />
              <meta property="og:url" content="https://theyoungminds.org/"></meta>
            </Helmet>
            <div className="mobileHeadingsBanner">
                <h4>Together we can</h4>
                <h1 className='Website_Heading'>Make an Impact</h1>
            </div>
            <div className="LandingPageBanner LandingPageBannerStore">
                <div className="leftSideContentBanner" ref={printerRef}>
                    <div className='deskHeadingsBanner'>
                        <h4>Together we can</h4>
                        <h1 className='Website_Heading'>Make an impact</h1>

                    </div>
                    <div className='ANimatedtPara'>

                        <p className='website_para'>Discover modern - day sciences, advanced technologies, engineering marvels, cognitive art and magical mathematics.</p>
                        {/* <p className='landingViweMore'>Learn More {'-->'}</p> */}
                    </div>
                    <div className="dropdownDescription" style={{ marginTop: "50px" }}>


                        <div className="accordianFirst">
                            <div className="visiblwHead" onClick={toggleAccordian1} style={{ justifyContent: "space-between" }}>
                                <h1>Never Stop Learning</h1>
                                <i className="fas fa-chevron-down" style={{ transform: "rotate(-90deg)" }}></i>
                            </div>

                        </div>
                        <div className="accordianFirst">
                            <div className="visiblwHead" onClick={toggleAccordian2} style={{ justifyContent: "space-between" }}>
                                <h1>Future is here</h1>
                                <i className="fas fa-chevron-down" style={{ transform: "rotate(-90deg)" }}></i>
                            </div>

                        </div>
                        <div className="accordianFirst" style={{ borderBottom: "none" }}>
                            <div className="visiblwHead" onClick={toggleAccordian3} style={{ justifyContent: "space-between" }}>
                                <h1>Marketplace for better learning</h1>
                                <i className="fas fa-chevron-down" style={{ transform: "rotate(-90deg)" }}></i>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="imgserviceContainer" style={{ marginTop: "0px" }}>
                    <img src="/image/Homebanner.webp" loading='eager' alt="Banner" />
                    <button className='imgContainerBttn1' onClick={toggleAccordian1} >Education</button>
                    <button className='imgContainerBttn2' onClick={toggleAccordian2} >Our Service</button>
                    <button className='imgContainerBttn3' onClick={toggleAccordian3} >Our Marketplace</button>
                </div>
                <div className="imgserviceContainer_mobile">
                    <img src="/image/Homebanner.webp" alt="Banner" loading='eager' />
                    <button className='imgContainerBttn1' onClick={toggleAccordian2} >Our Service</button>
                    <button className='imgContainerBttn2' onClick={toggleAccordian1} >Education</button>
                    <button className='imgContainerBttn3' onClick={toggleAccordian3} >Our Marketplace</button>
                </div>
            </div>
            <div className="ourquote">
                <div className="para ">
                    <i className="fas fa-solid fa-quote-left"></i>
                    <p>We’re on a mission towards global sustainable development goal for making Education Equitable & Accessible</p>
                    <i className="fas fa-solid fa-quote-right"></i>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Homepage
