import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';
import Workshop from './Workshop.json'
import Program from './Program.json'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Education.css'
import './ResponsiveEducation.css'
import { Helmet } from 'react-helmet';
import Nav from '../Navbar/Nav';
import Footer from '../Footer/Footer';

const Education = () => {
  const slideToRef = ( elementRef) => {
    window.scrollTo({
        top: elementRef.current.offsetTop,
        behavior: "smooth"
    })
}
useEffect(() => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
})
}, [])

  const program = useRef(null)
  const [Slider, setSlider] = useState(0)
  const [AccordianDisplay, setAccordianDisplay] = useState("block")
  const [AccordianDisplay1, setAccordianDisplay1] = useState("normalModePara")
  const [AccordianDisplay2, setAccordianDisplay2] = useState("normalModePara")
  const [AccordianDisplay3, setAccordianDisplay3] = useState("normalModePara")
  const [AccordianDisplay4, setAccordianDisplay4] = useState("normalModePara")
  const [AccordianDisplay5, setAccordianDisplay5] = useState("normalModePara")
  const [AccordianDisplay6, setAccordianDisplay6] = useState("normalModePara")
  const pushToSection = ()=>{
    window.scrollTo({
      top: 300,
      behavior: 'smooth'
    })
  }
  const toggleAccordian1 = () => {
    setAccordianDisplay(AccordianDisplay1 === "accordian_para" ? "block" : "none")
    setAccordianDisplay2("none")
    setAccordianDisplay5("none")
    setAccordianDisplay3("none")
    setSlider(1)
    setAccordianDisplay6("none")
    setAccordianDisplay4("none")
    setAccordianDisplay1(AccordianDisplay1 === "accordian_para" ? "normalModePara" : "accordian_para")
  }
  const toggleAccordian2 = () => {
    setAccordianDisplay(AccordianDisplay2 === "accordian_para" ? "block" : "none")
    setAccordianDisplay1("none")
    setAccordianDisplay6("none")
    setAccordianDisplay3("none")
    setAccordianDisplay5("none")
    setSlider(0)
    setAccordianDisplay4("none")
    setAccordianDisplay2(AccordianDisplay2 === "accordian_para" ? "normalModePara" : "accordian_para")
  }
  const toggleAccordian3 = () => {
    setAccordianDisplay(AccordianDisplay3 === "accordian_para" ? "block" : "none")
    setAccordianDisplay2("none")
    setAccordianDisplay1("none")
    setAccordianDisplay4("none")
    setSlider(2)
    setAccordianDisplay5("none")
    setAccordianDisplay6("none")
    setAccordianDisplay3(AccordianDisplay3 === "accordian_para" ? "normalModePara" : "accordian_para")
  }
  const toggleAccordian4 = () => {
    setAccordianDisplay(AccordianDisplay4 === "accordian_para" ? "block" : "none")
    setAccordianDisplay3("none")
    setAccordianDisplay2("none")
    setSlider(4)
    setAccordianDisplay6("none")
    setAccordianDisplay1("none")
    setAccordianDisplay5("none")
    setAccordianDisplay4(AccordianDisplay4 === "accordian_para" ? "normalModePara" : "accordian_para")
  }
  const toggleAccordian5 = () => {
    setAccordianDisplay(AccordianDisplay5 === "accordian_para" ? "block" : "none")
    setAccordianDisplay3("none")
    setAccordianDisplay1("none")
    setAccordianDisplay2("none")
    setSlider(3)
    setAccordianDisplay4("none")
    setAccordianDisplay6("none")
    setAccordianDisplay5(AccordianDisplay5 === "accordian_para" ? "normalModePara" : "accordian_para")
  }
  const toggleAccordian6 = () => {
    setAccordianDisplay(AccordianDisplay6 === "accordian_para" ? "block" : "none")
    setAccordianDisplay3("none")
    setAccordianDisplay1("none")
    setAccordianDisplay5("none")
    setSlider(5)
    setAccordianDisplay2("none")
    setAccordianDisplay4("none")
    setAccordianDisplay6(AccordianDisplay6 === "accordian_para" ? "normalModePara" : "accordian_para")
  }
  const prevSlide = ()=>{
    setSlider(Slider === 0 ? 5 : Slider - 1)
  }
  const nextSlide = ()=>{
    setSlider(Slider === 5 ? 0 : Slider + 1)
  }
  

  return (
    <>
    <Nav/>
    <div className='Education_page'>
        <Helmet>
                {/* <title>Music Website</title> */}
                <meta
                    name="description"
                    content="Our programs aims to develop community by introducing interesting ways to learn Science, Technology Engineering and Maths through experience based programs."
                />
                <meta
                    name="keywords"
                    content="Kindergarten, Primary, Secondary, Graduate, Professional, Retired, Workshop, Event"
                />
            </Helmet>
      <div className="LandingPageBanner" style={{justifyContent: "space-around"}}>
        <div className="leftSideContentBanner">
          <h1 className='Website_Heading'>Never Stop Learning.</h1>
          <div className='ANimatedtPara' style={{ display: AccordianDisplay }}>

            <p className='website_para' >Our programs aims to develop
community by introducing interesting
ways to learn Science, Technology
Engineering and Maths through experience based programs. </p>
          </div>
          <div className="dropdownDescription">
            <div className="accordianFirst">
              <div className="visiblwHead" onClick={toggleAccordian2} style={{ color: AccordianDisplay2 === "accordian_para" ? "#51D015" : "black" }}>
                <i className="fas fa-chevron-down" style={{ transform: AccordianDisplay2 === "accordian_para" ? "rotate(180deg)" : "rotate(0deg)" }}></i>
                <h1>Kindergarten</h1>
              </div>
              <div className={AccordianDisplay2}>

                <p className='website_para' style={{ marginBottom: "20px" }}>
                 Let your child learn naturally through game based experiences and engaging methodologies. Curated programs by our experts are designed to increase confidence, develop creativity and enhance motor skill.</p>
                <p className='landingViweMore' style={{ marginBottom: "20px", marginTop: "20px !important" }} onClick={()=> slideToRef(program)}>Start Your Journey &#x2192;</p>
              </div>
            </div>
            <div className="accordianFirst">
              <div className="visiblwHead" onClick={toggleAccordian1} style={{ color: AccordianDisplay1 === "accordian_para" ? "#51D015" : "black" }}>
                <i className="fas fa-chevron-down" style={{ transform: AccordianDisplay1 === "accordian_para" ? "rotate(180deg)" : "rotate(0deg)" }}></i>
                <h1>Primary</h1>
              </div>
              <div className={AccordianDisplay1}>

                <p className='website_para' style={{ marginBottom: "20px" }}>
Empower and spark your child’s imagination, innovation and entrepreneurial capacity so they can express themselves with confidence.</p>
                <p className='landingViweMore' style={{ marginBottom: "20px", marginTop: "20px !important" }} onClick={()=> slideToRef(program)}>Start Your Journey  &#x2192;</p>
              </div>
            </div>

            <div className="accordianFirst">
              <div className="visiblwHead" onClick={toggleAccordian3} style={{ color: AccordianDisplay3 === "accordian_para" ? "#51D015" : "black" }}>
                <i className="fas fa-chevron-down" style={{ transform: AccordianDisplay3 === "accordian_para" ? "rotate(180deg)" : "rotate(0deg)" }}></i>
                <h1>Secondary</h1>
              </div>
              <div className={AccordianDisplay3}>

                <p className='website_para' style={{ marginBottom: "20px" }}>
                  Develop future-ready skills with our programs designed especially to equip students to understand and apply the fundamental principles and concepts of Science, Technology, Engineering, Arts, and Math.</p>
                <p className='landingViweMore' style={{ marginBottom: "20px", marginTop: "20px !important" }} onClick={()=> slideToRef(program)}>Start Your Journey  &#x2192;</p>
              </div>
            </div>
            <div className="accordianFirst">
              <div className="visiblwHead" onClick={toggleAccordian5} style={{ color: AccordianDisplay5 === "accordian_para" ? "#51D015" : "black" }}>
                <i className="fas fa-chevron-down" style={{ transform: AccordianDisplay5 === "accordian_para" ? "rotate(180deg)" : "rotate(0deg)" }}></i>
                <h1>Graduate</h1>
              </div>
              <div className={AccordianDisplay5}>

                <p className='website_para' style={{ marginBottom: "20px" }}>
Solve real-life challenges and the gap between theory and practices. Work-Study in a structured way to enhance your entrepreneurial, engineering, and scientific skills.</p>
                <p className='landingViweMore' style={{ marginBottom: "20px", marginTop: "20px !important" }} onClick={()=> slideToRef(program)}>Start Your Journey  &#x2192;</p>
              </div>
            </div>
            <div className="accordianFirst">
              <div className="visiblwHead" onClick={toggleAccordian4} style={{ color: AccordianDisplay4 === "accordian_para" ? "#51D015" : "black" }}>
                <i className="fas fa-chevron-down" style={{ transform: AccordianDisplay4 === "accordian_para" ? "rotate(180deg)" : "rotate(0deg)" }}></i>
                <h1>Professional</h1>
              </div>
              <div className={AccordianDisplay4}>

                <p className='website_para' style={{ marginBottom: "20px" }}>
Short, intensive - self paced programs to develop your skills and strengthen your professional profile or business.</p>
                <p className='landingViweMore' style={{ marginBottom: "20px", marginTop: "20px !important" }} onClick={()=> slideToRef(program)}>Start Your Journey  &#x2192;</p>
              </div>
            </div>
            <div className="accordianFirst" style={{borderBottom: "none"}}>
              <div className="visiblwHead" onClick={toggleAccordian6} style={{ color: AccordianDisplay6 === "accordian_para" ? "#51D015" : "black" }}>
                <i className="fas fa-chevron-down" style={{ transform: AccordianDisplay6 === "accordian_para" ? "rotate(180deg)" : "rotate(0deg)" }}></i>
                <h1>Retired</h1>
              </div>
              <div className={AccordianDisplay6} >

                <p className='website_para' style={{ marginBottom: "20px" }}>Let's go back to school. Solve real-life challenges and enhance your skills with our engaging & experience-based programs.</p>
                <p className='landingViweMore' style={{ marginBottom: "20px", marginTop: "20px !important" }} onClick={()=> slideToRef(program)}>Start Your Journey  &#x2192;</p>
              </div>
            </div>

          </div>
        </div>
        <div className="imageEducationBanner">
          <img className="mainBannerimage" src="/image/checking.png" alt="banner" />
          <img className='sideImage1' onClick={toggleAccordian2} src="/image/Bkinder.png" alt="category" />
          <img className='sideImage2' onClick={toggleAccordian1} src="/image/Bprimary.png" alt="category" />
          <img className='sideImage3' onClick={toggleAccordian3} src="/image/Bsecondary.png" alt="category" />
          <img className='sideImage3' onClick={toggleAccordian3} src="/image/Bsecondary.png" alt="category" />
          <img className='sideImage4' onClick={toggleAccordian5} src="/image/Bgraduate.png" alt="category" />
          <img className='sideImage5' onClick={toggleAccordian4} src="/image/Bprofessional.png" alt="category" />
          <img className='sideImage6' onClick={toggleAccordian6} src="/image/Bretired.png" alt="category" />
        </div>
        <div className="imageEducationBannerMobile">
          <img className="mainBannerimage" src="/image/checking.png" alt="banner" />
          <img className='sideImage1' onClick={()=>{setSlider(0); pushToSection()}} src="/image/Bkinder.png" alt="category" />
          <img className='sideImage2' onClick={()=>{setSlider(1); pushToSection()}} src="/image/Bprimary.png" alt="category" />
          <img className='sideImage3' onClick={()=>{setSlider(2); pushToSection()}} src="/image/Bsecondary.png" alt="category" />
          <img className='sideImage4' onClick={()=>{setSlider(3); pushToSection()}} src="/image/Bgraduate.png" alt="category" />
          <img className='sideImage5' onClick={()=>{setSlider(4); pushToSection()}} src="/image/Bprofessional.png" alt="category" />
          <img className='sideImage6' onClick={()=>{setSlider(5); pushToSection()}} src="/image/Bretired.png" alt="category" />
        </div>
        {/* <div className="imgserviceContainer_mobile"> */}
          {/* <img src="/image/servicepage.png" alt="" /> */}
          {/* <button className='imgContainerBtn1' onClick={(e)=> {setSlider(2); slideToRef(e, manugacturingRef)}}>Addictive Manufacturing</button>
                <button className='imgContainerBtn2' onClick={(e)=>{setSlider(1); slideToRef(e, manugacturingRef)}}>3d Modeling</button>
                <button className='imgContainerBtn4' onClick={(e)=> slideToRef(e, serviceRef1)}>Fix your printer</button>
                <button className='imgContainerBtn3' onClick={(e)=> slideToRef(e, serviceRef)}>our product</button>
                <button className='imgContainerBtn5' onClick={(e)=> {setSlider(3); slideToRef(e, manugacturingRef)}}>Casting</button> */}
        {/* </div> */}
      </div>

{/* Program section */}
                <div className="programsDOM" ref={program}>
                  {Program.map((data, index) =>{
                    return (
                      <div className={index === Slider ? "TYMprogram" : "Ourprogram"} key={index}>
                        <h1>{data.Title}</h1>
                        <div style={{display: "grid", placeItems: "center"}}>
                        <div className="programDetails">
                          <img src={data.img} alt="programs" />
                          {data.btn.map((item, index)=>{
                            return (
                              <a href={item.link} target="_blank" className={`programbtn${index} programbtn`} key={index}>
                              <button>{item.name}</button>
                              </a>
                            )
                          })}
                        </div>
                        </div>
                      </div>
                    )
                  })}
                          <div className="navigationArrows">
                          <i className="fas fa-chevron-left" onClick={prevSlide}></i>
                          <i className="fas fa-chevron-right" onClick={nextSlide}></i>
                          </div>
                </div>

      {/* potential section */}
      <div className="potentialSection">
        <div className="potentialHeadind">
          <div className="HeadingSection">
            <div className="horizontalBar"></div>
            <div><h4 className='semiheading'>Unlock Your</h4><h1 className='Website_Heading' style={{ display: "inline" }}>Potential</h1></div>
          </div>
          <p className='website_para' style={{ marginTop: "30px", maxWidth: "80%", marginLeft: "24px", color: "#808080" }}>We at The YOUNG MINDS promote opportunities to break new grounds - from improving electronic devices with smarter materials to generating real life solutions, building prototypes and educating about the applications of STEAM.</p>
        </div>
        <div className="imgpotential">
          <img src="/image/potential.png" alt="banner" />
        </div>
      </div>
      <div className="sectionDevider"></div>

      {/* banner */}
      <div className="hordingsDom">
        <div className="hordings">
          <h4>join the pool of</h4>
          <h1>Global talents</h1>
          <span></span>
          <p className='hordingPara1'>By participating in </p>
          <p className='hordungPara2'>Global Challenges</p>
          <img src="/image/hording2.png" alt="challenge" style={{width: "90%"}}/>
        </div>
        <div className="hordings">
          <h4>Solve real life</h4>
          <h1>Challenges</h1>
          <span></span>
          <p className='hordingPara1'>And contribute towards</p>
          <p className='hordungPara2'>Sustainable Developments Goals</p>
          <img src="/image/challenge.png" alt="development" style={{width: "90%"}} />
        </div>
        <div className="hordings" >
          <h4>Join Our</h4>
          <h1>Membership</h1>
          <span></span>
          <p className='hordingPara1'>Get a lifetime membership to </p>
          <p className='hordungPara2'>The Young Minds Labs</p>
          <img src="/image/hording1.png" alt="membership" />
        </div>
      </div>
      <div className="sectionDevider" style={{marginBottom: "0px"}}></div>
      {/* Success Stories */}
      <div className="successStories">
        <div className="successdiv">
          <div className="HeadingSection">
            <div className="horizontalBar"></div>
            <div><h4>Read Our</h4><h1 className='Website_Heading' style={{ display: "inline" }}>Success stories</h1></div>
          </div>
                <div className="maindetailofsuccess">
                  <div className="imagesuccess"><img src="/image/success.png" alt="story" /></div>
                  <div className="detailssuccess">
                    <h4>Let’s build more empowered community</h4>
                    <p>Developed by “OM” from our Community Development Program. It’s been a beautiful journey with OM from Mana, Uttarakhand, India. Where we spent 3 months to develop a 3D Printed prosthetic arm prototype. This will help build and research on prosthetic arm for the community.</p>
                    <div className="studentInfo" style={{marginTop: "30px"}}>
                      <p>Grade</p>
                      <span style={{marginRight: "10px"}}>:</span>
                      <span>VI</span>
                    </div>
                    <div className="studentInfo">
                      <p>Age</p>
                      <span style={{marginRight: "10px"}}>:</span>
                      <span>13</span>
                    </div>
                    <div className="studentInfo">
                      <p>Address</p>
                      <span style={{marginRight: "10px"}}>:</span>
                      <span>Last village of India</span>
                    </div>
                  </div>
                </div>

        </div>
      </div>
            
      <div className="sectionDevider"></div>
      {/* workshop */}
      <div className="productsForSection" style={{ marginTop: "50px", flexDirection: "column" }}>
        <div className="derailsBanner educationDetailBanner">
          <div className="productSectionHeadline" style={{ width: "auto" }}>
            <div className="faqhorizontalLine" style={{ background: "#1E8E9A", marginLeft: "0px" }}></div>
            <h1 className='Website_Heading' style={{display: "inline"}}>Workshops And Events </h1>
          </div>
          {/* <button className='otherProductSectionBTN' style={{ color: "#1E8E9A" }}>view more</button> */}
        </div>
        <div className="CoolEvents">
          {/* <OwlCarousel className='owl-theme' loop={true} dots={true} autoplay={true} nav={true} margin={0} autoplayTimeout={5000} slideBy={1} autoWidth={true} mouseDrag={true} touchDrag={true} pullDrag={true} autoplaySpeed={1000} navSpeed={1000} autoplayHoverPause={true}> */}
            {Workshop.map((data, index) => {
              return (
                <div className="eventWorkshop" key={index} style={{marginBottom: index === 1 ?"0px" : "auto"}}>
                  
                  <div className='mainBoxofEanW'>
                      <h4 style={{ color: "#000000" }}>{data.Title}</h4>
                    <img src={data.img} alt="events" loading='eager' />
                  </div>
                  <a href={data.link} target='_blank'><button>  Register now</button></a>
                </div>
              )
            })}
          {/* </OwlCarousel> */}
        </div>
      </div>
      <div className="sectionDevider"></div>

            <div className="talktoour" style={{overflow: "hidden"}}>
              <div className='consultant'>
                <h1 className='Website_Heading'>TALK TO OUR CONSULTANTS</h1>
                <div className='ctaforcontact'>
                <a href='https://Wa.me/+918910540012' target="_blank" style={{textDecoration: "none"}}><button><i className="fab fa-whatsapp" style={{marginRight: "5px"}}></i> Contact Us</button></a>
                  <span className='bar'></span>
                  <div className='d-flex' style={{color: "#000000", alignItems: "center"}}>
                    <i className='fas fa-align-left'></i>
                    <p style={{cursor: "pointer"}}> <a href="https://zfrmz.in/4exdx5fD6jPBijNSwpNw" target='_blank' style={{ textDecoration: "none", color: "#000000"}}> Or Fill A Form</a></p>
                  </div>
                </div>
              </div>
              <div  className='consultantImg'>
            <img src="/image/lastcta.png" alt="CTA" />
              </div>
            </div>
            <div className="fixyourPrinterSection">
               
                <div className='sideBoxDom d-flex' >
                    <div className='sideBox' style={{ overflow: "hidden", marginRight: "5%" }}>
                        <div className="SBbanner">
                            <div className="SBsideBar"></div>
                            <div className="SBheadings">
                                <h4>Became a</h4>
                                <h1>Student Ambassador</h1>
                                <p>Join our program & earn up to 10%  guaranteed affiliate commission.</p>
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
                                <p>It's free and easy to join.Get up and running today.</p>
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

export default Education
