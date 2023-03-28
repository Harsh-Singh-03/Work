import React, { useState, useRef, useContext, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import NoteContext from "../context/notes/Notecontext"
import Footer from '../Footer/Footer'
import Nav from '../Navbar/Nav'
import checkoutPng from "../image/Checkout.png"
import './Storepage.css'

const Store = () => {
    const context = useContext(NoteContext)
    const { setStoreDOMCL, StoreDOMCL } = context
    const [AccordianDisplay, setAccordianDisplay] = useState("block")
    const [AccordianDisplay1, setAccordianDisplay1] = useState("normalModePara")
    const [AccordianDisplay2, setAccordianDisplay2] = useState("normalModePara")
    const [AccordianDisplay3, setAccordianDisplay3] = useState("normalModePara")
    const [AccordianDisplay4, setAccordianDisplay4] = useState("normalModePara")
    const [AccordianDisplay5, setAccordianDisplay5] = useState("normalModePara")

    const printerRef = useRef(null)

    const slideToRef = (e, elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: "smooth"
        })
    }
    useEffect(() => {
        window.scrollTo(0, 0);

    }, [])


    const toggleAccordian1 = () => {
        setAccordianDisplay(AccordianDisplay1 === "accordian_para" ? "block" : "none")
        setAccordianDisplay2("none")
        setAccordianDisplay5("none")
        setAccordianDisplay3("none")
        setAccordianDisplay4("none")
        setAccordianDisplay1(AccordianDisplay1 === "accordian_para" ? "normalModePara" : "accordian_para")
    }
    const toggleAccordian2 = () => {
        setAccordianDisplay(AccordianDisplay2 === "accordian_para" ? "block" : "none")
        setAccordianDisplay1("none")
        setAccordianDisplay3("none")
        setAccordianDisplay5("none")
        setAccordianDisplay4("none")
        setAccordianDisplay2(AccordianDisplay2 === "accordian_para" ? "normalModePara" : "accordian_para")
    }
    const toggleAccordian3 = () => {
        setAccordianDisplay(AccordianDisplay3 === "accordian_para" ? "block" : "none")
        setAccordianDisplay2("none")
        setAccordianDisplay1("none")
        setAccordianDisplay4("none")
        setAccordianDisplay5("none")
        setAccordianDisplay3(AccordianDisplay3 === "accordian_para" ? "normalModePara" : "accordian_para")
    }
    const toggleAccordian4 = () => {
        setAccordianDisplay(AccordianDisplay4 === "accordian_para" ? "block" : "none")
        setAccordianDisplay3("none")
        setAccordianDisplay1("none")
        setAccordianDisplay("none")
        setAccordianDisplay5("none")
        setAccordianDisplay4(AccordianDisplay4 === "accordian_para" ? "normalModePara" : "accordian_para")
    }
    const toggleAccordian5 = () => {
        setAccordianDisplay(AccordianDisplay5 === "accordian_para" ? "block" : "none")
        setAccordianDisplay3("none")
        setAccordianDisplay1("none")
        setAccordianDisplay4("none")
        setAccordianDisplay("none")
        setAccordianDisplay5(AccordianDisplay5 === "accordian_para" ? "normalModePara" : "accordian_para")
    }





    return (
        <>
        <Nav/>
        <div className='store_page_section'>
            <Helmet>
                {/* <title>Music Website</title> */}
                <meta
                    name="description"
                    content="3D Printers, Robotic Kits, STEAM Toys, Laboratory Equipments, Smart Classroom Equipments And Much More."
                />
                <meta
                    name="keywords"
                    content="3D Printers, Educational Accessories, PCBs and Software, Robotics, 3D Smart Classrooms, 3D Printed Product, Fix Your Printer"
                />
            </Helmet>
            <div className="mobileHeadingsBanner">
                <h4>Marketplace for</h4>
                <h1 className='Website_Heading'>Better Learning</h1>
            </div>
            <div className="LandingPageBanner LandingPageBannerStore">
                <div className="leftSideContentBanner" ref={printerRef}>
                    <div className='deskHeadingsBanner'>
                        <h4>Marketplace for</h4>
                        <h1 className='Website_Heading'>Better Learning</h1>

                    </div>
                    <div className='ANimatedtPara' style={{ display: AccordianDisplay }}>

                        <p className='website_para'>3D Printers, Robotic Kits, STEAM Toys, Laboratory Equipments, Smart Classroom Equipments And Much More.</p>
                        {/* <p className='landingViweMore'>Start Your Journey &#x2192;</p> */}
                    </div>
                    <div className="dropdownDescription dropdownDescriptionStore">
                        <div className="accordianFirst">
                            <div className="visiblwHead" onClick={toggleAccordian1} style={{ color: AccordianDisplay1 === "accordian_para" ? "#51D015" : "black" }}>
                                <i className="fas fa-chevron-down" style={{ transform: AccordianDisplay1 === "accordian_para" ? "rotate(180deg)" : "rotate(0deg)" }}></i>
                                <h1>3D Printers</h1>
                            </div>
                            <div className={AccordianDisplay1}>

                                <p className='website_para' style={{ marginBottom: "20px" }}>
                                    Wide range of 3D printers — from low-cost professional to industrial and educational machines.  We provide lifetime support, hand holding, and onsite training.</p>
                                <p className='landingViweMore' style={{ marginBottom: "20px", marginTop: "20px !important" }}><a href='https://store.theyoungminds.org/collections/3d-printers' target="_blank">Start Your Journey &#x2192;</a></p>
                            </div>
                        </div>
                        <div className="accordianFirst">
                            <div className="visiblwHead" onClick={toggleAccordian5} style={{ color: AccordianDisplay5 === "accordian_para" ? "#51D015" : "black" }}>
                                <i className="fas fa-chevron-down" style={{ transform: AccordianDisplay5 === "accordian_para" ? "rotate(180deg)" : "rotate(0deg)" }}></i>
                                <h1>Educational Accessories</h1>
                            </div>
                            <div className={AccordianDisplay5}>

                                <p className='website_para' style={{ marginBottom: "20px" }}>
                                    Explore a wide range of educational equipment and supplies for better and continuous learning experiences for all - from stationeries to mechanical and medical learning equipment.</p>
                                <p className='landingViweMore' style={{ marginBottom: "20px", marginTop: "20px !important" }}><a href='https://store.theyoungminds.org/collections/accessories' target='_blank'>Start Your Journey &#x2192;</a></p>
                            </div>
                        </div>

                        <div className="accordianFirst">
                            <div className="visiblwHead" onClick={toggleAccordian3} style={{ color: AccordianDisplay3 === "accordian_para" ? "#51D015" : "black" }}>
                                <i className="fas fa-chevron-down" style={{ transform: AccordianDisplay3 === "accordian_para" ? "rotate(180deg)" : "rotate(0deg)" }}></i>
                                <h1>PCBs  & Software</h1>
                            </div>
                            <div className={AccordianDisplay3}>

                                <p className='website_para' style={{ marginBottom: "20px" }}>
                                    PCBs are the building blocks of modern-day electronic devices. Find all sorts of semiconductors, connectors, resistors, diodes, capacitors, and radio devices mounted to, and “talk” to one another .</p>
                                <p className='landingViweMore' style={{ marginBottom: "20px", marginTop: "20px !important" }}><a href='https://store.theyoungminds.org' target='_blank' >Start Your Journey &#x2192;</a></p>
                            </div>
                        </div>
                        <div className="accordianFirst">
                            <div className="visiblwHead" onClick={toggleAccordian4} style={{ color: AccordianDisplay4 === "accordian_para" ? "#51D015" : "black" }}>
                                <i className="fas fa-chevron-down" style={{ transform: AccordianDisplay4 === "accordian_para" ? "rotate(180deg)" : "rotate(0deg)" }}></i>
                                <h1>Robotics</h1>
                            </div>
                            <div className={AccordianDisplay4}>

                                <p className='website_para' style={{ marginBottom: "20px" }}>
                                    PCBs are the building blocks of modern-day electronic devices. Find all sorts of semiconductors, connectors, resistors, diodes, capacitors, and radio devices mounted to, and “talk” to one another .</p>
                                <p className='landingViweMore' style={{ marginBottom: "20px", marginTop: "20px !important" }}><a href='https://store.theyoungminds.org' target="_blank">Start Your Journey &#x2192;</a></p>
                            </div>
                        </div>
                        <div className="accordianFirst" style={{ borderBottom: "none" }}>
                            <div className="visiblwHead" onClick={toggleAccordian2} style={{ color: AccordianDisplay2 === "accordian_para" ? "#51D015" : "black" }}>
                                <i className="fas fa-chevron-down" style={{ transform: AccordianDisplay2 === "accordian_para" ? "rotate(180deg)" : "rotate(0deg)" }}></i>
                                <h1>Smart Classrooms</h1>
                            </div>
                            <div className={AccordianDisplay2}>

                                <p className='website_para' style={{ marginBottom: "20px" }}>
                                    Foster better learning experiences for learners with our smart, modern-day classroom equipment. Let's make education more engaging and explore tools to effectively handle challenges in explaining complex concepts.</p>
                                <p className='landingViweMore' style={{ marginBottom: "20px", marginTop: "20px !important" }}><a href='https://store.theyoungminds.org' target='_blank'>Start Your Journey &#x2192;</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="imgstoreContainer">
                    <img src="/image/storebanner.png" alt="banner" />
                    <button className='imgContainerBtnstore1 imgContainerBtnstore' onClick={toggleAccordian3} style={{ border: AccordianDisplay3 === "accordian_para" ? "1px solid #51D015" : "none", color: AccordianDisplay3 === "accordian_para" ? "#FFFFFF" : "#51D015" }}> <img src="/image/software (1).png" alt="logo" /> </button>
                    <button className='imgContainerBtnstore2 imgContainerBtnstore' onClick={toggleAccordian4} style={{ border: AccordianDisplay4 === "accordian_para" ? "1px solid #51D015" : "none", color: AccordianDisplay4 === "accordian_para" ? "#FFFFFF" : "#51D015" }}> <img src="/image/software.png" alt="logo" /> </button>
                    <button className='imgContainerBtnstore3 imgContainerBtnstore' onClick={toggleAccordian5} style={{ border: AccordianDisplay5 === "accordian_para" ? "1px solid #51D015" : "none", color: AccordianDisplay5 === "accordian_para" ? "#FFFFFF" : "#51D015" }}> <img src="/image/software (2).png" alt="logo" /></button>
                    <button className='imgContainerBtnstore4 imgContainerBtnstore' onClick={toggleAccordian1} style={{ border: AccordianDisplay1 === "accordian_para" ? "1px solid #51D015" : "none", color: AccordianDisplay1 === "accordian_para" ? "#FFFFFF" : "#51D015" }}> <img src="/image/3dprint.png" alt="logo" /></button>
                    <button className='imgContainerBtnstore5 imgContainerBtnstore' onClick={toggleAccordian2} style={{ border: AccordianDisplay2 === "accordian_para" ? "1px solid #51D015" : "none", color: AccordianDisplay2 === "accordian_para" ? "#FFFFFF" : "#51D015" }}> <img src="/image/software (3).png" alt="logo" /></button>
                </div>
                <div className="imgstoreContainer_mobile">
                    <img src="/image/storebanner.png" alt="banner" />
                    <a href='https://store.theyoungminds.org/' target='_blank' style={{ textDecoration: "none" }} className="mobileBannerSettlement mobileBannerSettlement1">
                        <button className='imgContainerBtnstore imgContainerBtnstore1'> <img src="/image/software (1).png" alt="logo" /> </button>
                        <p className='website_para' style={{ marginTop: "5px" }}>PCBs & Software</p>
                    </a>
                    <a href='https://store.theyoungminds.org/' target='_blank' style={{ textDecoration: "none" }} className="mobileBannerSettlement mobileBannerSettlement2">
                        <button className='imgContainerBtnstore imgContainerBtnstore2'> <img src="/image/software.png" alt="logo" /> </button>
                        <p className='website_para' style={{ marginTop: "5px" }}>Robotics</p>
                    </a>
                    <a href='https://store.theyoungminds.org/collections/accessories' target='_blank' style={{ textDecoration: "none" }} className="mobileBannerSettlement mobileBannerSettlement3">
                        <button className='imgContainerBtnstore imgContainerBtnstore3'> <img src="/image/software (2).png" alt="logo" /> </button>
                        <p className='website_para' style={{ marginTop: "5px" }}>Accessories</p>
                    </a>
                    <a style={{ textDecoration: "none" }} className="mobileBannerSettlement mobileBannerSettlement4" href='https://store.theyoungminds.org/collections/3d-printers' target='_blank'>
                        <button className='imgContainerBtnstore imgContainerBtnstore4'> <img src="/image/3dprint.png" alt="logo" /> </button>
                        <p className='website_para' style={{ marginTop: "5px" }}>3D Printers</p>
                    </a>
                    <a href='https://store.theyoungminds.org/collections/accessories' target='_blank' style={{ textDecoration: "none" }} className="mobileBannerSettlement mobileBannerSettlement5">
                        <button className='imgContainerBtnstore imgContainerBtnstore5'> <img src="/image/software (3).png" alt="logo" /> </button>
                        <p className='website_para' style={{ marginTop: "5px" }}>Smart Classroom</p>
                    </a>
                    {/* <div className='imgContainerBtnstore1 imgContainerBtnstore'>
                    </div>
                    <button className='imgContainerBtnstore2 imgContainerBtnstore' onClick={(e)=>{toggleAccordian4(); slideToRef(e, printerRef);} } style={{ border: AccordianDisplay4 === "accordian_para" ? "1px solid #51D015" : "none", color: AccordianDisplay4 === "accordian_para" ? "#FFFFFF" : "#51D015" }}> <img src="/image/software.png" alt="logo" /> </button>
                    <button className='imgContainerBtnstore3 imgContainerBtnstore' onClick={(e)=>{toggleAccordian5(); slideToRef(e, printerRef);} } style={{ border: AccordianDisplay5 === "accordian_para" ? "1px solid #51D015" : "none", color: AccordianDisplay5 === "accordian_para" ? "#FFFFFF" : "#51D015" }}> <img src="/image/software (2).png" alt="logo" /></button>
                    <button className='imgContainerBtnstore4 imgContainerBtnstore' onClick={(e)=>{toggleAccordian1(); slideToRef(e, printerRef);} } style={{ border: AccordianDisplay1 === "accordian_para" ? "1px solid #51D015" : "none", color: AccordianDisplay1 === "accordian_para" ? "#FFFFFF" : "#51D015" }}> <img src="/image/3dprint.png" alt="logo" /></button>
                    <button className='imgContainerBtnstore5 imgContainerBtnstore' onClick={(e)=>{toggleAccordian2(); slideToRef(e, printerRef);} } style={{ border: AccordianDisplay2 === "accordian_para" ? "1px solid #51D015" : "none", color: AccordianDisplay2 === "accordian_para" ? "#FFFFFF" : "#51D015" }}> <img src="/image/software (3).png" alt="logo" /></button> */}

                </div>
            </div>

            <div className="ourSmartStore">
                <div className="whyustitle">
                    <h1>WHY US ?</h1>
                </div>
                <div className="whyussolution">
                    <div className="checkoutsafe">
                        <img src={checkoutPng} alt="icons" />
                        <p className='website_para'>Safe Checkout</p>
                    </div>
                    <div className="checkoutsafe">
                        <img src="/image/customer.png" alt="icons" />
                        <p className='website_para'>Customer Support</p>
                    </div>
                    <div className="checkoutsafe">
                        <img src="/image/return.png" alt="icons" />
                        <p className='website_para'>Return Policy</p>
                    </div>
                    <div className="checkoutsafe">
                        <img src="/image/globalsupport.png" alt="icons" />
                        <p className='website_para'>Global Shipping</p>
                    </div>
                    <div className="checkoutsafe mobileCheckout" style={{ borderRight: "none" }}>
                        <img src="/image/convinence.png" alt="icons" />
                        <p className='website_para'>Convinence</p>
                    </div>
                </div>
            </div>

            <div className="talktoour" style={{ overflow: "hidden" }}>
                <div className='consultant'>
                    <h1 className='Website_Heading'>TALK TO OUR CONSULTANTS</h1>
                    <div className='ctaforcontact'>
                        <a href='https://Wa.me/+918910540012' target="_blank" style={{ textDecoration: "none" }}><button><i className="fab fa-whatsapp" style={{ marginRight: "5px" }}></i> Contact Us</button></a>
                        <span className='bar'></span>
                        <div className='d-flex' style={{ color: "#000000", alignItems: "center" }}>
                            <i className='fas fa-align-left'></i>
                            <p style={{ cursor: "pointer" }}> <a href="https://zfrmz.in/4exdx5fD6jPBijNSwpNw" target='_blank' style={{ textDecoration: "none", color: "#000000" }}> Or Fill A Form</a></p>
                        </div>
                    </div>
                </div>
                <div className='consultantImg'>
                    <img src="/image/lastcta.png" alt="CTA" />
                </div>
            </div>
            {/* courses */}
            <div className="fixyourPrinterSection">
                <div className='mainSection'>
                    <div className="FYPbanner">
                        <div className="FYPsideBar"></div>
                        <div className="FYPheadings">
                            <h4>TRANSFORM YOUR</h4>
                            <h1>Learning Space</h1>
                            <p>We aim to empower learners with specially designed spaces meant for better learning. These custom spaces are meant to enhance the Science, Technology, Engineering, Arts, and Mathematics capabilities of learners and educators</p>
                            <a href="https://forms.zoho.in/ymeducation/form/TransformYourLearningSpace" style={{textDecoration: "none"}} target='_blank'><button>View More</button></a>
                        </div>
                    </div>
                    {/* <div className="derailsBanner">
                    <div className="productSectionHeadline" style={{ width: "auto" }}>
                        <div className="faqhorizontalLine" style={{ background: "#1E8E9A" }}></div>
                        <h1 className='Website_Heading'>Category</h1>
                    </div>
                    <p className='website_para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur illo corporis inventore!</p>
                    <button className='otherProductSectionBTN' style={{ color: "#1E8E9A" }} onClick={PustToProduct}>view more</button>
                </div> */}
                    <div className='FYPImage'><img src="/image/storelast2.png" alt="hording" /></div>
                </div>
                <div className='sideBoxDom'>
                    <div className='sideBox' style={{ overflow: "hidden" }}>
                        <div className="SBbanner">
                            <div className="SBsideBar"></div>
                            <div className="SBheadings">
                                <h4>Became a</h4>
                                <h1>Student Ambassador</h1>
                                <p>Amplify your impact and establish yourself as a mentor and leader in your community</p>
                                <a href="http://register.theyoungminds.org/student-ambassador-program" target='_blank' style={{textDecoration: "none", cursor: "pointer", cursor: "pointer"}}><button>JOIN NOW</button></a>
                            </div>
                            <div className='SBImage'><img src="/image/FYP!.png" alt="hording" /></div>
                        </div>
                    </div>
                    <div className='sideBox' style={{ overflow: "hidden", marginBottom: "0px", marginRight: "0px" }}>
                        <div className="SBbanner">
                            <div className="SBsideBar" style={{ background: "#51D015" }}></div>
                            <div className="SBheadings">
                                <h4>Became an</h4>
                                <h1>Affiliate</h1>
                                <p>Join our program & earn up to 10%  guaranteed affiliate commission.</p>
                                <a href="http://register.theyoungminds.org/affiliate-program" target='_blank' style={{textDecoration: "none", cursor: "pointer"}}><button style={{background: "#51D015", color: "white", border: "none",cursor: "pointer"}}>JOIN NOW</button></a>
                            </div>
                            <div className='SBImage'><img src="/image/FYM3.png" alt="hording" style={{ transform: "translate(20px, 0px)" }} /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Store

