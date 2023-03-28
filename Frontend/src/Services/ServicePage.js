
import React, { useEffect, useState, useRef, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import NoteContext from "../context/notes/Notecontext"
import "./ServicePage.css"
import "./serviceResponsive.css"
import { Helmet } from 'react-helmet';
import Nav from '../Navbar/Nav';
import Footer from '../Footer/Footer';
const ServicePage = () => {
    const context = useContext(NoteContext)
    var history = useHistory();
    const { detailedINFO, toggleform1, toggleform, cultData, first, cateList, second, display2, setcateList, display4, setFls, fls, warning, ServiceDOMCL, setServiceDOMCL, setdisplay1, setdisplay, sortingVal } = context

    const [Slider, setSlider] = useState(0)


    const [AccordianDisplay, setAccordianDisplay] = useState("block")
    const [AccordianDisplay1, setAccordianDisplay1] = useState("normalModePara")
    const [AccordianDisplay2, setAccordianDisplay2] = useState("normalModePara")
    const [AccordianDisplay3, setAccordianDisplay3] = useState("normalModePara")
    const [AccordianDisplay4, setAccordianDisplay4] = useState("normalModePara")
    const [AccordianDisplay5, setAccordianDisplay5] = useState("normalModePara")
    const [movingLeft, setmovingLeft] = useState("18%")
    const [movingWidth, setmovingWidth] = useState("22%")
    const [anime_Idea, setanime_Idea] = useState("ideas_Knowlage")
    const [ideaHead, setideaHead] = useState("Introduction")
    const [serviceBtnLink, setserviceBtnLink] = useState("#")
    const [ideaImg, setideaImg] = useState("/image/step1.png")
    const [ideaPara, setideaPara] = useState("We bring you the most advanced and quickest way to turn your ideas into life.  Get end-to-end products manufactured: 3D Modelling - Additive Manufacturing - Casting.")

    const serviceRef = useRef(null)
    const serviceRef1 = useRef(null)
    const manugacturingRef = useRef(null)

    const slideToRef = (e, elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: "smooth"
        })
    }


    useEffect(() => {
        if (Slider === 0) {
            toggleRangeBox()
        }
        if (Slider === 1) {
            toggleRangeBox1()
        }
        if (Slider === 2) {
            toggleRangeBox2()
        }
        if (Slider === 3) {
            toggleRangeBox3()
        }
    }, [Slider])
    const PrevIdea = () => {
        setSlider(Slider === 0 ? 3 : Slider - 1)
    }
    const NextIdea = () => {
        setSlider(Slider === 3 ? 0 : Slider + 1)
    }
    const toggleRangeBox = () => {
        setideaHead("Introduction")
        setanime_Idea(anime_Idea === "anime_Idea" ? "ideas_Knowlage" : "anime_Idea")
        setideaPara("We bring you the most advanced and quickest way to turn your ideas into life.  Get end-to-end products manufactured: 3D Modelling - Additive Manufacturing - Casting.")
        setmovingLeft("18%")
        setmovingWidth("22%")
        setideaImg("/image/step1.png")
        setserviceBtnLink("#")
    }
    const toggleRangeBox1 = () => {
        setideaHead("DESIGNING")
        setideaImg("/image/step2.png")
        setanime_Idea(anime_Idea === "anime_Idea" ? "ideas_Knowlage" : "anime_Idea")
        setideaPara("We will convert your 2D idea into a 3D design, with the help of our hand-picked CAD designers. Also, scan any real life object into a 3D design, within minutes!!")
        setmovingLeft("41%")
        setmovingWidth("46%")
        setserviceBtnLink("https://register.theyoungminds.org/designing")
    }
    const toggleRangeBox2 = () => {
        setideaImg("/image/step3.png")
        setideaHead("ADDITIVE MANUFACTURING")
        setideaPara("Our 3D printers, will make final sellable products for you, not only that this is an end to end services, starting from designing to prototyping.")
        setmovingLeft("62%")
        setanime_Idea(anime_Idea === "anime_Idea" ? "ideas_Knowlage" : "anime_Idea")
        setmovingWidth("67%")
        setserviceBtnLink("/order3d")
    }
    const toggleRangeBox3 = () => {
        setideaImg("/image/step4.png")
        setideaHead("CASTING")
        setideaPara("We are equipped with converting your 3d printed models into a metal product, whether it be machinery, 3D printers or jewellery parts.")
        setmovingLeft("94%")
        setanime_Idea(anime_Idea === "anime_Idea" ? "ideas_Knowlage" : "anime_Idea")
        setmovingWidth("100%")
        setserviceBtnLink("https://register.theyoungminds.org/casting")
    }
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
        setAccordianDisplay2("none")
        setAccordianDisplay1("none")
        setAccordianDisplay5("none")
        setAccordianDisplay4(AccordianDisplay4 === "accordian_para" ? "normalModePara" : "accordian_para")
    }
    const toggleAccordian5 = () => {
        setAccordianDisplay(AccordianDisplay5 === "accordian_para" ? "block" : "none")
        setAccordianDisplay3("none")
        setAccordianDisplay1("none")
        setAccordianDisplay2("none")
        setAccordianDisplay4("none")
        setAccordianDisplay5(AccordianDisplay5 === "accordian_para" ? "normalModePara" : "accordian_para")
    }

    useEffect(() => {
        if (cateList !== "MOST POPULAR") {
            cultData(cateList, sortingVal)
        }
        else {
            cultData("MOST POPULAR", sortingVal)
        }

        window.scrollTo(0, 0);

    }, [])
    const PustToProduct = () => {
        history.push('/products')
    }
    const PustToProduct1 = () => {
        history.push('/products')
        setdisplay("flex")
        setdisplay1("none")
    }
    const loadData = (e) => {
        setcateList(e.target.innerText)
        cultData(e.target.innerText, sortingVal)
        console.log(e.target.dataset.id)
    }

    return (
        <>
        <Nav/>
        <div className='Service_Page_Section'>
        
            <Helmet>
                {/* <title>Music Website</title> */}
                <meta
                    name="description"
                    content="Create, innovate & develop are the backbone of our diverse organization. We are committed to facilitating, enhancing and developing sustainable, resilient, and inclusive infrastructure."
                />
                <meta
                    name="keywords"
                    content="3D Modeling, Designing, Additive Manufacturing, Casting, 3D Printer, 3D Printed Product, Fix Your Printer"
                />
            </Helmet>
            {/* Top Banner */}
            <div className="LandingPageBanner">
                <div className="leftSideContentBanner">
                    <h1 className='Website_Heading'>Future is here</h1>
                    <div className='ANimatedtPara' style={{ display: AccordianDisplay }}>

                        <p className='website_para' >Create, innovate & develop are the backbone of our diverse organization. We are committed to facilitating, enhancing and developing sustainable, resilient, and inclusive infrastructure.</p>
                    </div>
                    <div className="dropdownDescription">
                        <div className="accordianFirst">
                            <div className="visiblwHead" onClick={toggleAccordian2} style={{ color: AccordianDisplay2 === "accordian_para" ? "#51D015" : "black" }}>
                                <i className="fas fa-chevron-down" style={{ transform: AccordianDisplay2 === "accordian_para" ? "rotate(180deg)" : "rotate(0deg)" }}></i>
                                <h1>3D Modeling</h1>
                            </div>
                            <div className={AccordianDisplay2}>

                                <p className='website_para' style={{ marginBottom: "20px" }}>
                                    Our professional designers will give your 3D designs, the feel of realism, use it on your website, NFT's, virtual cataloging and many more creative ways.</p>
                                <p className='landingViweMore' style={{ marginBottom: "20px", marginTop: "20px !important" }}><a href='https://register.theyoungminds.org/modeling' target="_blank">Start Your Journey  &#x2192;</a></p>
                            </div>
                        </div>
                        <div className="accordianFirst">
                            <div className="visiblwHead" onClick={toggleAccordian1} style={{ color: AccordianDisplay1 === "accordian_para" ? "#51D015" : "black" }}>
                                <i className="fas fa-chevron-down" style={{ transform: AccordianDisplay1 === "accordian_para" ? "rotate(180deg)" : "rotate(0deg)" }}></i>
                                <h1>Additive Manufacturing</h1>
                            </div>
                            <div className={AccordianDisplay1}>

                                <p className='website_para' style={{ marginBottom: "20px" }}>Our 3D printers, will make final sellable products for you, not only that this is an end to end services, starting from designing to prototyping.</p>
                                <p className='landingViweMore' style={{ marginBottom: "20px", marginTop: "20px !important" }}><Link to='/order3d'>Start Your Journey  &#x2192;</Link></p>
                            </div>
                        </div>

                        <div className="accordianFirst">
                            <div className="visiblwHead" onClick={toggleAccordian3} style={{ color: AccordianDisplay3 === "accordian_para" ? "#51D015" : "black" }}>
                                <i className="fas fa-chevron-down" style={{ transform: AccordianDisplay3 === "accordian_para" ? "rotate(180deg)" : "rotate(0deg)" }}></i>
                                <h1>Casting</h1>
                            </div>
                            <div className={AccordianDisplay3}>

                                <p className='website_para' style={{ marginBottom: "20px" }}>
                                    We are equipped with converting your 3d printed models into a metal product, whether it be machinery, 3D printers or jewellery parts.</p>
                                <p className='landingViweMore' style={{ marginBottom: "20px", marginTop: "20px !important" }}><a href='https://register.theyoungminds.org/casting' target="_blank">Start Your Journey  &#x2192;</a></p>
                            </div>
                        </div>
                        <div className="accordianFirst">
                            <div className="visiblwHead" onClick={toggleAccordian5} style={{ color: AccordianDisplay5 === "accordian_para" ? "#51D015" : "black" }}>
                                <i className="fas fa-chevron-down" style={{ transform: AccordianDisplay5 === "accordian_para" ? "rotate(180deg)" : "rotate(0deg)" }}></i>
                                <h1>Our Product</h1>
                            </div>
                            <div className={AccordianDisplay5}>

                                <p className='website_para' style={{ marginBottom: "20px" }}>Cool utilities and learning tools to 3D Print.</p>
                                <p className='landingViweMore' style={{ marginBottom: "20px", marginTop: "20px !important" }}><Link to='/products'>Start Your Journey  &#x2192;</Link></p>
                            </div>
                        </div>
                        <div className="accordianFirst" style={{ borderBottom: "none" }}>
                            <div className="visiblwHead" onClick={toggleAccordian4} style={{ color: AccordianDisplay4 === "accordian_para" ? "#51D015" : "black" }}>
                                <i className="fas fa-chevron-down" style={{ transform: AccordianDisplay4 === "accordian_para" ? "rotate(180deg)" : "rotate(0deg)" }}></i>
                                <h1>Fix Your Printer</h1>
                            </div>
                            <div className={AccordianDisplay4}>

                                <p className='website_para' style={{ marginBottom: "20px" }}>Have a broken 3D printer and don’t know where to get it repaired? Look no further! Bring it to us using the button below and we’ll get it fixed as soon as possible.</p>
                                <p className='landingViweMore' style={{ marginBottom: "20px", marginTop: "20px !important" }}><a href='https://register.theyoungminds.org/fix-your-printer' target="_blank">Start Your Journey  &#x2192;</a></p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="imgserviceContainer">
                    <img src="/image/servicepage.png" alt="banner" />
                    <button className='imgContainerBtn1' onClick={toggleAccordian1} style={{ background: AccordianDisplay1 === "accordian_para" ? "#51D015" : "#FFFFFF", color: AccordianDisplay1 === "accordian_para" ? "#FFFFFF" : "#51D015" }}>Additive Manufacturing</button>
                    <button className='imgContainerBtn3' onClick={toggleAccordian2} style={{ background: AccordianDisplay2 === "accordian_para" ? "#51D015" : "#FFFFFF", color: AccordianDisplay2 === "accordian_para" ? "#FFFFFF" : "#51D015" }}>3d Modeling</button>
                    <button className='imgContainerBtn4' onClick={toggleAccordian4} style={{ background: AccordianDisplay4 === "accordian_para" ? "#51D015" : "#FFFFFF", color: AccordianDisplay4 === "accordian_para" ? "#FFFFFF" : "#51D015" }}>Fix your printer</button>
                    <button className='imgContainerBtn5' onClick={toggleAccordian5} style={{ background: AccordianDisplay5 === "accordian_para" ? "#51D015" : "#FFFFFF", color: AccordianDisplay5 === "accordian_para" ? "#FFFFFF" : "#51D015" }}>our product</button>
                    <button className='imgContainerBtn2' onClick={toggleAccordian3} style={{ background: AccordianDisplay3 === "accordian_para" ? "#51D015" : "#FFFFFF", color: AccordianDisplay3 === "accordian_para" ? "#FFFFFF" : "#51D015" }}>Casting</button>
                </div>
                <div className="imgserviceContainer_mobile">
                    <img src="/image/servicepage.png" alt="banner" />
                    <button className='imgContainerBtn1' onClick={(e) => { setSlider(2); slideToRef(e, manugacturingRef) }}>Additive Manufacturing</button>
                    <button className='imgContainerBtn3' onClick={(e) => { setSlider(1); slideToRef(e, manugacturingRef) }}>3d Modeling</button>
                    <button className='imgContainerBtn4' onClick={(e) => slideToRef(e, serviceRef1)}>Fix your printer</button>
                    <button className='imgContainerBtn5' onClick={(e) => slideToRef(e, serviceRef)}>our product</button>
                    <button className='imgContainerBtn2' onClick={(e) => { setSlider(3); slideToRef(e, manugacturingRef) }}>Casting</button>
                </div>
            </div>
            {/* turn your ideas into life */}
            <div className="IdeasFoLife" ref={manugacturingRef}>
                <div className="HeadingSection">
                    <div className="horizontalBar"></div>
                    <div><h4>Turn Your</h4><h1 className='Website_Heading' style={{ display: "inline" }}>Ideas into life</h1></div>
                </div>
                <div className="differentIdeas">
                    <div className="blankImgBox">
                        <img src={ideaImg} alt="stepping" />
                    </div>
                    <div className={anime_Idea}>
                        <h4>{ideaHead}</h4>
                        <p>{ideaPara}</p>
                        <div className="navigatingIdeas">
                            <i className="fas fa-chevron-left" onClick={PrevIdea}></i>
                            <a href={serviceBtnLink} target="_blank" style={{ display: Slider === 0 ? "none" : "block" }}><button>GET A QUOTE</button></a>
                            <button style={{ display: Slider === 0 ? "block" : "none" }} onClick={() => setSlider(1)}>GET STARTED</button>
                            <i className="fas fa-chevron-right" onClick={NextIdea}></i>
                        </div>
                    </div>
                </div>
            </div>

            <div className="showingRangeI">
                <div className='rangeImgbox' onClick={() => setSlider(0)} style={{ border: Slider === 0 ? "1px solid #51D015" : "none" }}><i className="far fa-play-circle"></i></div>
                <div className='rangeImgbox' onClick={() => setSlider(1)} style={{ border: Slider === 1 ? "1px solid #51D015" : "none" }}><img src="/image/curve 1.png" alt="Designing" /></div>
                <div className='rangeImgbox' onClick={() => setSlider(2)} style={{ border: Slider === 2 ? "1px solid #51D015" : "none" }}><img src="/image/manufacturing 1.png" alt="Manufacturing" /></div>
                <div className='rangeImgbox' onClick={() => setSlider(3)} style={{ border: Slider === 3 ? "1px solid #51D015" : "none" }}><img src="/image/crucible 1.png" alt="casting" /></div>
                <div className='originalRange'></div>
                <div className='actualRange' style={{ width: movingWidth }}></div>
                <img className='bulbMoving' style={{ left: movingLeft }} src="/image/bulb.png" alt="navigator" />
            </div>

            {/* marketing banner */}
            <div className="services_Ad">
                <h4>consult to get end-to-end product info</h4>
                <h1>Consultancy</h1>
                <div className="bottomUnderLine"></div>
                <div className='endToEnd'>
                    <div className='Benefit'>
                        <div className="BenefitImg">
                            <img src="/image/curve 1.png" alt="designing" />

                        </div>
                        <div className="innerDescription">
                            <div className="d-flex">
                                <span className='sideBarLine'></span>
                                <p className='bigParaTitle'>DESIGNING</p>
                            </div>
                            <p className='paraDescription'>Convert your idea into a digital masterpiece</p>
                        </div>
                    </div>
                    <i className="fas fa-plus" style={{ fontSize: "20px", color: "black" }}></i>
                    <div className='Benefit'>
                        <div className="BenefitImg">
                            <img src="/image/crucible 1.png" alt="casting" />

                        </div>
                        <div className="innerDescription">
                            <div className="d-flex">
                                <span className='sideBarLine'></span>
                                <p className='bigParaTitle'>CASTING</p>
                            </div>
                            <p className='paraDescription'>Hold your designs in your hands</p>
                        </div>
                    </div>
                    <i className="fas fa-plus" style={{ fontSize: "20px", color: "black" }}></i>
                    <div className='Benefit'>
                        <div className="BenefitImg">
                            <img src="/image/manufacturing 1.png" alt="manufacturing" />

                        </div>
                        <div className="innerDescription">
                            <div className="d-flex">
                                <span className='sideBarLine'></span>
                                <p className='bigParaTitle'>MANUFACTURING</p>
                            </div>
                            <p className='paraDescription'>Making it more precious and sellable</p>
                        </div>
                    </div>
                </div>
                <a href="https://zfrmz.in/4exdx5fD6jPBijNSwpNw" target='_blank' style={{ textDecoration: "none" }}><button className='GetToCode'>Talk To US</button></a>
            </div>

            <div className="CategoryBanner" ref={serviceRef}>
                <div className="categoryNavSection">
                    <h1>Discover By Category</h1>
                </div>
                <div className="rightNavsection">
                    <ul className="rightNavsectionList">
                        <li data-id='SCIENCE' onClick={(e) => loadData(e)}>Science</li>
                        <li data-id='TECHNOLOGY' onClick={(e) => loadData(e)}>Technology</li>
                        <li data-id='ENGINEERING' onClick={(e) => loadData(e)}>Engineering</li>
                        <li data-id='ARTS' onClick={(e) => loadData(e)}>Arts</li>
                        <li data-id='MATHEMATICS' onClick={(e) => loadData(e)}>Mathematics</li>
                    </ul>
                </div>
            </div>
            {/* product page */}
            <div className="productsForSection" style={{ marginTop: "50px", paddingBottom: "30px", marginBottom: "20px" }}>
                <div className="derailsBanner">
                    <div className="productSectionHeadline" style={{ width: "auto" }}>
                        <div className="faqhorizontalLine" style={{ background: "#1E8E9A" }}></div>
                        <h1 className='Website_Heading' style={{ display: cateList === "MOST POPULAR" ? "block" : "none" }}>MOST <br /> Popular </h1>
                        <h1 className='Website_Heading' style={{ display: cateList === "MOST POPULAR" ? "none" : "block" }}>{cateList}</h1>
                    </div>
                    <p className='website_para'>Cool utilities and learning tools to 3D Print.</p>
                    <button className='otherProductSectionBTN testingviewmore' style={{ color: "#1E8E9A" }} onClick={PustToProduct1}>view more</button>
                </div>
                <div style={{ display: display2, height: "auto", minHeight: "200px", width: "60vw", justifyContent: "center", alignItems: "center", maxWidth: "800px" }} >
                    <div className="spinner-grow" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>

                </div>
                <div id="products" style={{ display: display4 }}>
                    <OwlCarousel className='owl-theme' loop={true} dots={true} autoplay={true} nav={true} margin={0} autoplayTimeout={5000} slideBy={1} autoWidth={true} mouseDrag={true} touchDrag={true} pullDrag={true} autoplaySpeed={1000} navSpeed={1000} autoplayHoverPause={true}>
                        {first.map((data, index) => {
                            return (
                                <Link to={`/products/${data.slug}/${data.id}`} style={{ textDecoration: "none" }} key={index} >
                                    <div className="text3dflip">
                                        <div className='test_other_product_box'>
                                            <img src={data.illustrationImageUrl} alt="product" loading='eager' />
                                            <div className="boottomBarUnderImg" style={{ background: "#1E8E9A" }}></div>
                                            <div className="cult_option_display">
                                                <h4 style={{ color: "#1E8E9A" }}>&#8377;{data.price}</h4>
                                                <h4 style={{ color: "#000000" }}>{data.name.slice(0, 20)}{data.name.length > 20 ? "..." : "."}</h4>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })}
                    </OwlCarousel>
                </div>
            </div>
            <div className="sectionDevider"></div>

            {/* courses */}
            <div className="fixyourPrinterSection" ref={serviceRef1}>
                <div className='mainSection'>
                    <div className="FYPbanner">
                        <div className="FYPsideBar"></div>
                        <div className="FYPheadings">
                            <h4>Fix Your</h4>
                            <h1>Printers</h1>
                            <p>Have a broken 3D printer and don’t know where to get it repaired? Look no further! Bring it to us using the button below and we’ll get it fixed as soon as possible.</p>
                            <a href="https://register.theyoungminds.org/fix-your-printer" target="_blank"><button>View More</button></a>
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
                    <div className='FYPImage'><img src="/image/FYP.png" alt="printer" /></div>
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
            <Button id='n' variant="primary" onClick={() => { setFls(true) }}>
                Launch demo modal
            </Button>
            <Modal show={fls}   >
                <Modal.Header closeButton onClick={() => { setFls(false) }}>
                    <Modal.Title style={{ color: 'red' }}>Warning !!</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', color: 'red' }}> {warning} </Modal.Body>

            </Modal>
        </div>
        <Footer/>
        </>
    )
}

export default ServicePage