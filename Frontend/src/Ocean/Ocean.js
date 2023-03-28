import React, { useRef, useState, useEffect } from 'react'
import './Ocean.css'
import Logo from '../image/TYMLOGO.png'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
// import AboutWallper from '../image/aboutWallpaper.png'
import 'owl.carousel/dist/assets/owl.theme.default.css';
import BlogData from "./oceanData.json"
import './Responsive.css'
import './Oceanblog.css'
import SliderData from "./Oceanslider.json"
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Nav from '../Navbar/Nav';
const Ocean = () => {
    let mutesvid = false
    const [BlogSlide, setBlogSlide] = useState(0)
    const [BlogSlide1, setBlogSlide1] = useState(0)
    const [autoP, setautoP] = useState(0)
    const [oceanDisplay, setoceanDisplay] = useState("block")
    const [oceanDisplay1, setoceanDisplay1] = useState("none")

    const tesingClick = (index)=>{
        setoceanDisplay("none")
        setoceanDisplay1("grid")
        setBlogSlide1(index)
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    const toggleBlogDisc1 = () => {
        setoceanDisplay("block")
        setoceanDisplay1("none")
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    const togglteDropdown = (index) => {
        setBlogSlide(index)
    }
    const nextSlide = () => {
        setBlogSlide1(BlogSlide1 === 3 ? 0 : BlogSlide1 + 1)
    }
    const prevSlide = () => {
        setBlogSlide1(BlogSlide1 === 0 ? 3 : BlogSlide1 - 1)
    }
    const requestRef = useRef(null)
    const vidRef = useRef(null)

    const scrollToPrev = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: "smooth"
        })
    }
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, [])


    window.addEventListener('scroll', reveal);

    function reveal() {
        var reveals = document.querySelectorAll('.oceanSection');

        for (var i = 0; i < reveals.length; i++) {

            var windowheight = window.innerHeight;
            var revealtop = reveals[i].getBoundingClientRect().top;
            var revealpoint = 150;
            if (revealtop < windowheight - revealpoint) {
                reveals[i].classList.add('activereveal');
            }
            else {
                reveals[i].classList.remove('activereveal');
            }
        }
    }


    return (
        <>
            <div className='Ocean_challengeDOM' style={{ display: oceanDisplay }}>
                <img src="/image/C_Home.webp" className='mainBannnerBG' alt="" />
                <div className="oceanSection1">
                    {/* <img src="/image/oceanlanding.png" className='oceanS1bg deskoceanS1bg' alt="" /> */}
                    {/* <img src="/image/MSection 1.png" className='oceanS1bg MoboceanS1bg' alt="" /> */}
                    <div className="oceanNavigation">
                        <div className="oceanNavigation1">
                            <div className="BrandLOGO d-flex" style={{ alignItems: "flex-end" }}>
                                <img src="/image/TYMLOGO.png" alt="" />
                                <h4>THE YOUNG MINDS</h4>
                            </div>
                            <div className="d-flex">
                                <button onClick={() => scrollToPrev(requestRef)} id="participate">Request A Call Back</button>
                                <img src='/image/call.gif' onClick={() => scrollToPrev(requestRef)} id="participateimg"/>
                                <Link to='/ocean-challenge/registration' id="bottombarlinkdesk" style={{ textDecoration: "none" }}><button style={{ marginRight: "0px" }} >Participate Now</button></Link>
                                <Link to='/ocean-challenge/registration' id='bottombarlink'  style={{ textDecoration: "none" }}> <img src="/image/button.gif" alt="" /> Participate Now</Link>
                            </div>
                        </div>
                    </div>
                    <div className="newbannersection">
                        <p>NATIONAL ROBOTIC CHALLENGE</p>
                        <img src="/image/theunderwater.png" alt="" />
                        <h5>Learn | Build | Compete</h5>
                        <span>And win a trip to The Great Barrier Reef, Australia</span>
                    </div>
                    {/* <img className='dolphins' src="/image/dolphins.png" alt="" />
                    <img className='steamboat' src="/image/steamboat.png" alt="" /> */}
                    <div className="LoactionButtonDOM1 d-flex">

                        <div className="buttontypeDIv1">
                            <i className="fa-regular fa-map"></i>
                            <div className='buttonDash1'> </div>
                            <p>KOLKATA</p>
                        </div>
                        {/* <div className="buttontypeDIv1">
                            <i className="fa-solid fa-location-dot"></i>
                            <div className='buttonDash1'> </div>
                            <p>BLOB</p>
                        </div> */}
                        <div className="buttontypeDIv1">
                            <i className="fal fa-calendar-days"></i>
                            <div className='buttonDash1'> </div>
                            <p>7<sup>th</sup> Jan, 2023</p>
                        </div>

                        <div className="buttontypeDIv1" style={{ marginRight: "0px" }}>
                            <i className="fa-regular fa-clock"></i>
                            <div className='buttonDash1'> </div>
                            <p>9:00 AM</p>
                        </div>
                    </div>
                    <p className='letsdive'>Let's Dive deep to explore</p>
                    {/* <i className="fa-solid fa-anchor"></i> */}
                </div>
                <div className="oceanSection2">
                    {/* <img src="/image/oceansection2.png" className='oceanS2bg' alt="" /> */}
                    {/* <Link to='/ocean-challenge/registration' style={{ textDecoration: "none", pointerEvents: "all" }}><div className="buttonParticipateM">REGISTER NOW</div></Link> */}

                    <div className="coolBlogofocean" id=''>
                        <OwlCarousel className='owl-theme' loop={true} dots={true} autoplay={true} nav={true} margin={0} autoplayTimeout={5000} slideBy={1} autoWidth={true} mouseDrag={true} touchDrag={true} pullDrag={true} autoplaySpeed={1000} navSpeed={1000} autoplayHoverPause={true}>
                            {BlogData.map((data, index) => {
                                return (
                                    <div key={index} >
                                        <p className='Ttileblog' style={{ marginTop: "70px" }}>0{index + 1}/<sup>04</sup> {data.Title}</p>
                                        <div className="coolBlogofoceanbox" onClick={()=>tesingClick(index)}>
                                            <img src={data.image} alt="" />
                                            <div>
                                                <p>{data.Para.slice(0, 180)}{data.Para.length > 180 ? "..." : "."}</p>
                                                {/* <button onClick={() => ToggleblogDisc(index)}>Read More</button> */}
                                                <button>Read More</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </OwlCarousel>
                    </div>
                    <div className="d-flex" style={{ width: "100%", alignItems: "center", justifyContent: "center", marginTop: "40px" }}>
                        <div className='LineDIvider'></div>
                        <div className='circulerDIvider'></div>
                        <h2 className='deadliestTrash'>Deadliest Ocean Trash</h2>
                        <div className='circulerDIvider'></div>
                        <div className='LineDIvider'></div>
                    </div>
                </div>
                <div className="oceanSection3 oceanSection">
                    {/* <h1>Hey</h1> */}
                    {/* <img src="/image/Section 3.png" className='section3bgimg' alt="" /> */}
                    <div className="typeoftrash">
                        <div className='trashSection'>
                            <img className='trashIMG' src="/image/trash1.png" alt="" />
                            <h4 className='trashHead'>1st</h4>
                            <p className='trashPara'>Cigerattes</p>
                        </div>
                        <div className="trashDevider"></div>
                        <div className='trashSection'>
                            <img className='trashIMG' src="/image/trash4.png" alt="" />
                            <h4 className='trashHead'>2nd</h4>
                            <p className='trashPara'>Plastic Bags</p>
                        </div>
                        <div className="trashDevider"></div>
                        <div className='trashSection'>
                            <img className='trashIMG' src="/image/trash5.png" alt="" />
                            <h4 className='trashHead'>3rd</h4>
                            <p className='trashPara'>Plastic Bottles</p>
                        </div>
                        <div className="trashDevider"></div>
                        <div className='trashSection'>
                            <img className='trashIMG' src="/image/trash3.png" alt="" />
                            <h4 className='trashHead'>4th</h4>
                            <p className='trashPara'>Fishing Gear</p>
                        </div>
                        <div className="trashDevider"></div>
                        <div className='trashSection'>
                            <img className='trashIMG' src="/image/trash2.png" alt="" />
                            <h4 className='trashHead'>5th</h4>
                            <p className='trashPara'>Bottle Caps</p>
                        </div>
                        {/* <div className="trashDevider"></div> */}
                    </div>
                    <div className="EventVideo" ref={vidRef}>
                        <img src="/image/playbutton.gif" className='playbutton'alt="" />
                        <video className='videoofevent' controls={true}>
                            <source src="/image/Ocean Opportunity.mp4" type="video/mp4" />
                        </video>
                        {/* <img src="/image/Diver1 (2).png" alt="" /> */}
                        {/* <iframe className='videoofevent' id='videoofevent' src="https://drive.google.com/file/d/1BmRaLKkgw32KNrLrHt4uT3sscsjtkUDE/preview" allow='autoplay;'></iframe> */}
                        {/* <iframe className='videoofevent' src={`https://www.youtube.com/embed/Lo1jnHlwHtI?autoplay=1&mute=1&rel=0&modestbranding=0&showinfo=0&controls=0`}title="YouTube video player" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe> */}

                    </div>
                </div>
                <div className="oceanSection4 oceanSection">
                    {/* <img src="/image/Section 4.jpeg" className='section4bgimg' alt="" /> */}
                    <div className="solvetheChallenge" style={{ display: "flex" }}>
                        <div className="descriptionofsol">
                            <h4>Let's Solve the challenge</h4>
                            <h1>BRING YOUR</h1>
                            <h1 style={{ marginBottom: "20px" }}>FRIENDS</h1>
                            <div className="bottombarFriends"></div>
                            <div className="d-flex">
                                <h1 style={{ transform: "translateY(-10px)" }}>T</h1>
                                <p>he Young Minds organizes opportunities to ignite a passion for science, technology, engineering, arts and mathematics (STEAM). By bringing future STEAM leaders together in an engaging and collaborative competition,  that drives home the importance, excitement, and applicability of STEAM to solve real life challenges . We aim to inspires the community to learn the skills they will need to make the discoveries the world would consider miracles, impossibilities, or just plain science fiction. </p>

                            </div>
                            <p className='Pt1' style={{ marginLeft: "30px" }}>We strives to convince the various governmets and organizations of the world to embrace STEAM , and to support it by investing in their young adults that will soon begin to make their marks in the world.</p>
                        </div>
                        <div className="Imagesofdivers">
                            <img className='diver1' src="/image/Diver1.png" alt="" />
                            <img className="diver2" src="/image/Diver2.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="oceanSection5 oceanSection">
                    {/* <img src="/image/Section 5.png" className='section5bgimg' alt="" /> */}
                    <img src="/image/fish.png" className='fishImge1' alt="" />
                    <div className="d-flex newnewDflex" >
                        <div className="ImageSub">
                            <img src="/image/submarine.png" alt="" />
                        </div>
                        <div className="descriptuonRobot">
                            <h1>Let's Build A robot</h1>
                            <p>And participate in the National Robotic Challenge with the bests in the country. A complete guidance by our mentors.</p>
                            <div className="instructions">
                                <p>Learn</p>
                                <span>Detailed explaination of different concepts – ranging from ideation, design, proto-typing,</span>
                            </div>
                            <div className="instructions">
                                <p>Build</p>
                                <span>Our mentors will provide the pre-requisite  training to tbuild a robot and get prerpare for the challenge.</span>
                            </div>
                            <div className="instructions" style={{ marginBottom: "0px" }}>
                                <p>Complete</p>
                                <span>Participate in the National Robotics Challenge and contribute towards Global Sustainable Development Goals.</span>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: "grid", placeItems: "end", transform: "translateY(-40px)" }}>

                        <img src="/image/fish2.png" className="fishj22" alt="" />
                    </div>
                </div>
                <div className="oceansection6 oceanSection" id='oceanSection6'>
                    {/* <img src="/image/Section 77.jpg" className='section6bgimg' id='section6bgimg' alt="" /> */}
                    <div className="LhsDesc1">
                        <h2>SOlve Challenges and</h2>
                        <h1>Win Prize</h1>
                        <p>Become part of our journey, above and below the surface.
                            Contribute towards
                            Global Sustainable Development</p> </div>
                    <div className="challengesnPrize1">
                        <div className="LhsDesc1">
                            <div className="progressBarLevl">
                                <div className="d-flex" style={{ marginTop: "50px", alignItems: "center" }}>
                                    <div className="blankblur1">
                                        <div className='blankblur'></div>
                                    </div>
                                    <button>Level 1</button>
                                </div>
                                <p>Qualification Round  : A round to test the strenght of your robot.</p>
                            </div>
                            <div className="progressBarLevl">
                                <div className="d-flex newdflex" style={{ alignItems: "center" }}>
                                    <div className="blankblur1">
                                        <div className='blankblur'></div>
                                    </div>
                                    <button>Level 2</button>
                                </div>
                                <p>Challenger Round  : A round of 3 where we test the adaptability of the robot. </p>
                            </div>
                            <div className="progressBarLevl">
                                <div className="d-flex newdflex" style={{ alignItems: "center" }}>
                                    <div className="blankblur1">
                                        <div className='blankblur'></div>
                                    </div>
                                    <button>Level 3</button>
                                </div>
                                <p>Knock out round : A competative gameplay and play to be the best.</p>
                            </div>
                            <div className="progressBarLevl">
                                <div className="d-flex newdflex" style={{ alignItems: "center" }}>
                                    <div className="blankblur1">
                                        <div className='blankblur'></div>
                                    </div>
                                    <button>SEMI-FINALS</button>
                                </div>
                                <p>Collect the most number of waste and step into the Grande Final.</p>
                            </div>
                            <div className="progressBarLevl">
                                <div className="d-flex newdflex" style={{ alignItems: "center" }}>
                                    <div className="blankblur1">
                                        <div className='blankblur'></div>
                                    </div>
                                    <button>FINALS</button>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                        <div className="prixeImgDom">
                            <img src="/image/collection1.png" className='collection1Desk' alt="" />
                            <img src="/image/collection2.png" className='collection1Mob' alt="" />
                        </div>
                    </div>
                </div>
                <div className="oceanSection7 oceanSection">
                    {/* <img className='section7bgimg' src="/image/Section 8.png" alt="" /> */}
                    <div className="trserorBox">
                        <img src="/image/prizelist.webp" className='trserorBoxImg' alt="" />
                        {/* <h4 className='h4-treseror'>WIN A CHANCE TO VISIT</h4>
                        <h2 className='h2-treseror'>A GREAT BARRIER REEF</h2>
                        <img src="/image/UnderWater.png" className='trserorBoxImg' alt="" />
                        <div className='listOfTreseror'>
                            <img src="/image/Moneyhunt.png"  alt="" />
                            <div className='d-flex' style={{ alignItems: "center" }}>
                                <img src="/image/T1.png" className='T1' alt="" />
                                <span>+</span>
                                <img src="/image/T2.png" className='T1' alt="" />
                                <span>+</span>
                                <img src="/image/T3.png" className='T1' alt="" />
                                <span>+</span>
                                <img src="/image/T4.png" className='T1' alt="" />
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className="oceanSection8 oceanSection">
                    {/* <img src="/image/Section 9.jpg" className='section8bgimg' alt="" /> */}
                    <div className="Section8HEad">
                        <p>Schedule</p>
                        <h2>We are coming to your city</h2>
                        {/* <h2></h2> */}
                        <div className="SectionnnDivider"></div>
                    </div>
                    <div style={{ display: 'grid', placeItems: "center" }}>

                        <img src="/image/Indiamap.png" className='MapIndia' alt="" />

                    </div>
                    <div className="LoactionButtonDOM">
                        <div className="buttontypeDIv">
                            <i className="fa-regular fa-map"></i>
                            <div className='buttonDash'> </div>
                            <p>KOLKATA</p>
                        </div>
                        {/* <div className="buttontypeDIv">
                            <i className="fa-solid fa-location-dot"></i>
                            <div className='buttonDash'> </div>
                            <p>BLOB</p>
                        </div> */}
                        <div className="buttontypeDIv">
                            <i className="fal fa-calendar-days"></i>
                            <div className='buttonDash'> </div>
                            <p>7<sup>th</sup> Jan, 2023</p>
                        </div>
                        <div className="buttontypeDIv" style={{ marginRight: "0px" }}>
                            <i className="fa-regular fa-clock"></i>
                            <div className='buttonDash'> </div>
                            <p>9:00 AM</p>
                        </div>
                    </div>
                </div>
                <div className="oceanSection9 oceanSection">
                    {/* <img src="/image/Section 11.png" className='section9bgimg' alt="" /> */}
                    <h2>CONTRIBUTE TOWARDS</h2>
                    <h1>GLOBAL SUSTAINABLE DEVELOPMENT</h1>
                    <div className="coolBlogofocean coolSliderofocean" id=''>
                        <OwlCarousel className='owl-theme' loop={true} dots={true} autoplay={true} nav={true} margin={0} autoplayTimeout={5000} slideBy={1} autoWidth={true} mouseDrag={true} touchDrag={true} pullDrag={true} autoplaySpeed={1000} navSpeed={1000} autoplayHoverPause={true}>
                            {SliderData.map((data, index) => {
                                return (

                                    <div className="coolSliderofoceanbox" key={index}>
                                        <img src={data.image} className='image1' alt="" />
                                        <img src={data.image2} className='image2' alt="" />
                                        <div>
                                        </div>
                                    </div>
                                )
                            })}
                        </OwlCarousel>
                    </div>
                    <div className="d-flex" style={{ width: "100%", alignItems: "center", justifyContent: "center", marginTop: "40px" }}>
                        <div className='LineDIvider1'></div>
                        <div className='circulerDIvider'></div>
                        <h3 className='deadliestTrash'>Contact Information</h3>
                        <div className='circulerDIvider'></div>
                        <div className='LineDIvider1'></div>
                    </div>
                </div>
                <div className="oceanSection10 oceanSection" ref={requestRef} >
                    {/* <img src="/image/Section 12.png" alt="" /> */}
                    <div className="IframeForm">

                        <iframe frameBorder="0" src='https://forms.zohopublic.in/ymeducation/form/WEAREHERETOHELPYOU/formperma/fJdJ9cqWzbcW6zDvD5iUr6vmq09O1oeC0K7fergsNYU'></iframe>


                    </div>
                    <div className="seectionDevider"></div>
                    <div className="d-flex">
                        <div className="newFooterr" style={{ background: "none", color: "#fff", display: "flex !important" }}>
                            <p className='website_para' style={{ marginBottom: "0px", color: "#fff" }}>&copy; 2022 Theyoungminds all rights reserved.</p>
                            <div className="navigationorurl" style={{ display: "flex" }}>

                                <div className="dashBlank" style={{ background: "#fff" }}></div>
                                <a href="https://www.facebook.com/theyoungminds.org/" target="_blank" rel="noopener noreferrer" style={{ marginRight: "20px", color: "#fff" }}><i className="fab fa-facebook-f utility"></i></a>
                                <a href="https://www.instagram.com/theyoungminds.community/?igshid=YmMyMTA2M2Y%3D" target="_blank" rel="noopener noreferrer" style={{ marginRight: "20px", color: "#fff" }}><i className="fab fa-instagram utility"></i></a>
                                <a href="https://twitter.com/theyoungminds_" target="_blank" rel="noopener noreferrer" style={{ marginRight: "20px", color: "#fff" }}><i className="fab fa-twitter utility"></i></a>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            <div className="Ocean_challengeDOM" style={{ height: "auto", display: oceanDisplay1 }}>
                <img src="/image/registrationBg.jpg" className='mainBannnerBG' style={{ height: "auto" }} alt="" />
                <div className="oceanNavigation">
                    <div className="oceanNavigation1">
                        <div className="BrandLOGO d-flex" style={{ alignItems: "flex-end" }}>
                            <img src="/image/TYMLOGO.png" alt="" />
                            <h4>THE YOUNG MINDS</h4>
                        </div>
                        <div className="d-flex">
                            {/* <button onClick={()=> scrollToPrev(requestRef)}>Request A Call Back</button> */}
                            <Link to='/ocean-challenge/registration' style={{ textDecoration: "none" }}><button style={{ marginRight: "0px" }} id="participate">Participate Now</button></Link>
                        </div>
                    </div>
                </div>
                <div className="wholeblogdom">
                    {BlogSlide1 === 0 && (
                        <div className={BlogSlide1 === 0 ? "pop-up-blog pop-up-blog-show" : "pop-up-blog"}>
                            <div className="d-flex" style={{ justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                                <span>01/<sup>04</sup></span>
                                <i className="fal fa-xmark" style={{ cursor: "pointer" }} onClick={toggleBlogDisc1}></i>
                            </div>
                            <div className="d-flex" style={{ alignItems: "center", justifyContent: "center" }}>
                                <span className='fal fa-play' style={{ transform: "rotate(180deg)" }} onClick={prevSlide}></span>
                                <img src='/image/Blogocean1.webp' className='blogimg' alt="" />
                                <span className='fal fa-play' onClick={nextSlide}></span>
                                {/* <h1 className='h1-blog-ocean'>FIRST Global Challenge:</h1>
                            <h1>Ocean Opportunities</h1> */}
                            </div>

                            {/* <div className="leaderDetails">
                                <img src="/image/Udit-Sharma.png" alt="" />
                                <p>Somos una empresa Santanderena que brinda el servicio especializado de organización y.</p>
                            </div> */}
                            <h2 className='h2-blog-ocean' style={{ marginTop: "20px" }}>Overview</h2>
                            <p className='overviewPara website_para'></p>
                            <h4 className='h4-blog-ocean'>1.1. About FIRST® Global</h4>
                            <p className='p-blog-ocean'>FIRST® Global organizes a yearly international robotics challenge to ignite a passion for science, technology, engineering, and mathematics (STEM) among the more than two billion youths across the world. By bringing these future STEM leaders together in an engaging and collaborative competition that drives home the importance, excitement, and applicability of STEM education, FIRST Global inspires students to learn the skills they will need to make the discoveries their parents and grandparents would consider miracles, impossibilities, or just plain science fiction.<br /> <br />FIRST Global also strives to convince the various governments and organizations of the world to embrace STEM education, and to support it by investing in their young adults that will soon begin to make their marks in the world. <br /><br />Themed around the greatest challenges facing our planet, including the 14 Grand Challenges for Engineering identified by National Academy of Engineering, each year a different challenge takes center stage in an effort to foster understanding and cooperation among the youth of the world as they use their abilities to solve the world’s problems.<br /><br />Participation in FIRST Global is about more than just robots. As participants learn to find solutions to the world’s grand challenges – water, energy, security, medicine, food, and education – they learn how to work with each other, trust each other, and become part of a truly global community. <br /><br />More information about FIRST Global programs, including contact information and links to social media, can be found on the FIRST Global website.<br /><br />REV Robotics supplies the Kit of Parts from which teams will build their robots. Spare or replacement parts, as well as additional information about materials contained in the Kit of Parts, can be found on the REV Robotics website.
                            </p>
                            <h4 className="h4-blog-ocean">1.2. FIRST Global Challenge: Ocean Opportunities</h4>
                            <p className="p-blog-ocean">Every year millions of tons of pollutants, generated by human activity, make their way into the world’s oceans, negatively affecting marine life and global populations. The 2019 FIRST Global Challenge brings attention to this critical issue in order to educate ourselves and take action to preserve our oceans and wildlife. In Ocean Opportunities, teams learn about real-world challenges related to cleaning up the world’s oceans. </p>
                            <h4 className="h4-blog-ocean">1.3. This Document and Its Conventions</h4>
                            <p className="p-blog-ocean">The 2019 FIRST Global Challenge Game Manual is a resource for all FIRST Global teams to provide specific information on the 2019 challenge. The rules detailed within are explicit. The information is not to be interpreted based on previous FIRST Global Challenges, assumptions about intent, or what a situation would look like in “real life.” All teams are expected to abide by the FIRST Global Challenge rules as they are written.</p>
                            <p className="p-blog-ocean">Key words that have a specific definition in Ocean Opportunities are indicated in ALL CAPITAL LETTERS and are defined in the Glossary section of this document. </p>
                            <h4 className="h4-blog-ocean">1.4. Translations</h4>
                            <p className="p-blog-ocean">The Ocean Opportunities game manual is written in English and translated into other languages. In the event of any conflict between a translated version of this manual and the English language version, the English version as published on the FIRST Global Control Hub (at http://hub.first.global) is considered the correct and commanding version.</p>
                            <h4 className="h4-blog-ocean">1.5. Game Manual Updates</h4>
                            <p className="p-blog-ocean">Any modification to this document, updates to the rules, or clarifications will be published on the FIRST Global Control Hub at http://hub.first.global. The most recent posted version of the game manual published on the FIRST Global Control Hub will be considered the official version. While notification of updates is communicated in multiple ways, teams should visit the website periodically to ensure awareness of any changes.</p>
                            <h4 className="h4-blog-ocean">1.6. Question and Answer System</h4>
                            <p className="p-blog-ocean">There is a dedicated Question and Answer (Q&A) system for teams to ask clarifying questions about game and robot rules. The questions and official answers will be shared with all teams on the Q&A forum, located at https://hub.first.global/forums/forum/2019-game-qa/. Answers posted to the Q&A system by FIRST Global are considered official clarification of rules, thus teams are encouraged to periodically review the forum. All finalized questions and answers will also be compiled and shared on https://hub.first.global/qa/ for easy viewing.</p>
                        </div>
                    )

                    }
                    {BlogSlide1 === 1 && (
                        <div className={BlogSlide1 === 1 ? "pop-up-blog pop-up-blog-show" : "pop-up-blog"}>
                            <div className="d-flex" style={{ justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                                <span>02/<sup>04</sup></span>
                                <i className="fal fa-xmark" style={{ cursor: "pointer" }} onClick={toggleBlogDisc1}></i>
                            </div>
                            <div className="d-flex" style={{ alignItems: "center", justifyContent: "center" }}>
                                <span className='fal fa-play' style={{ transform: "rotate(180deg)" }} onClick={prevSlide}></span>
                                <img src='/image/Blogocean2.webp' className='blogimg' alt="" />
                                <span className='fal fa-play' onClick={nextSlide}></span>
                                {/* <h1 className='h1-blog-ocean'>FIRST Global Challenge:</h1>
                            <h1>Ocean Opportunities</h1> */}
                            </div>
                            {/* <div className="leaderDetails">
                                <img src="/image/Udit-Sharma.png" alt="" />
                                <p>Somos una empresa Santanderena que brinda el servicio especializado de organización y.</p>
                            </div> */}
                            <h2 className='h2-blog-ocean' style={{ marginTop: "20px" }}>Overview</h2>
                            <h4 className='h4-blog-ocean'>2.1. Game Description</h4>
                            <p className='p-blog-ocean'>Ocean Opportunities is played on a 6 m by 7 m elevated platform. Two (2) CLEANUP CREWS (also known as ALLIANCES), each composed of three (3) FIRST Global teams, compete with their COLLECTORS (also known as ROBOTS) on the PLAYING FIELD. Each MATCH features a different randomized combination of teams. </p>
                            <p className='p-blog-ocean'>The objective of Ocean Opportunities is for CLEANUP CREWS to remove both MICRO and MACRO POLLUTANTS from the OCEAN and deliver them to two types of PROCESSORS. Tasks during the MATCH include delivering POLLUTANTS to any of the three (3) levels of the central PROCESSING BARGE and moving POLLUTANTS to the REDUCTION PROCESSING HUBS. CLEANUP CREWS can earn additional points by DOCKING their COLLECTORS on the PROCESSING BARGE by the end of the MATCH to earn additional points.</p>
                            <p className='p-blog-ocean'>CLEANUP CREWS that work together to remove all the POLLUTANTS from the OCEAN by the end of the MATCH shall receive additional points, known as a Coopertition Bonus. </p>

                            <h4 className='h4-blog-ocean'>2.1.1. Playing Field</h4>
                            <img src="/image/playingField1.webp" className='img-blog-ocean' alt="" />
                            <span className='span-blog-ocean'>Figure 2-1: Ocean Opportunities PLAYING FIELD</span>
                            <img src="/image/playingField2.webp" className='img-blog-ocean' alt="" />
                            <span className='span-blog-ocean'>Figure 2-2: PLAYING FIELD Layout</span>
                            <p className='p-blog-ocean'>MATCHES are played on a raised 6 m by 7 m carpeted PLAYING FIELD, bounded by and including the inward facing surfaces of the GUARDRAILS. </p>
                            <p className='p-blog-ocean'>CLEANUP CREW STATIONS, located on each short side of the PLAYING FIELD, are where the DRIVE TEAMS (DRIVERS, HUMAN PLAYERS, AND CAPTAINS) stand during the MATCH. </p>
                            <p className='p-blog-ocean'>The front corners of the PLAYING FIELD are the REDUCTION PROCESSING HUBS. HUMAN PLAYERS can choose to leave scored POLLUTANTS in the REDUCTION PROCESSING HUBS for points or assist their ALLIANCE by loading POLLUTANTS from this area into a COLLECTOR.</p>
                            <p className='p-blog-ocean'>CURRENT bins that dispense POLLUTANTS at the start of the MATCH are located along the back wall of the PLAYING FIELD.</p>
                            <p className='p-blog-ocean'>The PROCESSING BARGE is located at the center of the PLAYING FIELD and is vertically divided in half, providing dedicated scoring sides for each CLEANUP CREW. The PROCESSING BARGE has three (3) levels that represent different processing efficiencies. The lowest is the RECOVERY level, the middle is the RECYCLE level, and the highest is the REUSE level. </p>
                            <p className='p-blog-ocean'>CLEANUP CREWS earn additional points by DOCKING their COLLECTORS on the PROCESSING BARGE by the end of the MATCH. This can be done by PARTIAL DOCKING, FULL DOCKING or ELEVATED DOCKING</p>
                            <h4 className='h4-blog-ocean'>2.1.2. Game Pieces</h4>
                            <p className='p-blog-ocean'>Fifty (50) MACRO POLLUTANTS and thirty (30) MICRO POLLUTANTS are released into the OCEAN from the CURRENT bins at the start of each MATCH, evenly allocated between the two sides of the PLAYING FIELD. Before the CURRENTS distribute the pollutants, teams place their COLLECTORS in the starting configuration. COLLECTORS may start the MATCH with one (1) pre-loaded POLLUTANT (of either size).</p>
                            <p className='p-blog-ocean'>FIRST Global may adjust the quantity of POLLUTANTS on the PLAYING FIELD for the Playoff and Final MATCHES.</p>
                            <h4 className='h4-blog-ocean'>2.2. Scoring</h4>
                            <h4 className='h4-blog-ocean'>2.2.1. Processing Barge</h4>
                            <p className='p-blog-ocean'>COLLECTORS retrieve POLLUTANTS from the OCEAN. COLLECTORS can score POLLUTANTS in the PROCESSING BARGE by depositing POLLUTANTS onto any of the three (3) levels. Each POLLUTANT scored on the REUSE level of the PROCESSING BARGE is worth six (6) points. Each POLLUTANT scored on the RECYCLE level is worth three (3) points. Each POLLUTANT scored on the RECOVERY level is worth two (2) points.</p>
                            <h4 className='h4-blog-ocean'>2.2.2. Reduction Processing Hub</h4>
                            <p className='p-blog-ocean'>COLLECTORS score POLLUTANTS in the REDUCTION PROCESSING HUB by depositing or pushing the POLLUTANT into the designated area. Each POLLUTANT in the REDUCTION PROCESSING HUB at the end of the MATCH is worth one (1) point. </p>
                            <p className='p-blog-ocean'>A HUMAN PLAYER in the CLEANUP CREW STATION can retrieve POLLUTANTS from the REDUCTION PROCESSING HUB, with the understanding that E08 and E05 are to be carefully followed. The HUMAN PLAYER can load POLLUTANTS into any COLLECTOR from their ALLIANCE, provided that (1) the COLLECTOR is in contact with the CLEANUP CREW STATION GUARDRAIL on their ALLIANCE side of the PLAYING FIELD and (2) that the COLLECTOR is fully outside of the REDUCTION PROCESSING HUB at the time that the POLLUTANTS are loaded (see E05). POLLUTANTS retrieved from the REDUCTION PROCESSING HUB by a HUMAN PLAYER may not be returned to the REDUCTION PROCESSING HUB by a HUMAN PLAYER and must either be returned to the OCEAN over the CLEANUP CREW STATION GUARDRAIL or loaded into a COLLECTOR.</p>
                            <h4 className='h4-blog-ocean'>2.2.3. Docking</h4>
                            <p className='p-blog-ocean'>As the game ends, COLLECTORS remove themselves from the OCEAN. This is done by DOCKING on their ALLIANCE side of the PROCESSING BARGE. PARTIAL DOCKING is worth five (5) points per COLLECTOR, FULL DOCKING is worth ten (10) points per COLLECTOR, and ELEVATED DOCKING is worth twenty (20) points per COLLECTOR. There is no time restriction for when ROBOTS can begin DOCKING. Scores for DOCKING will be assessed when the COLLECTORS come to rest or within five (5) seconds after the end of the MATCH, whichever is sooner. </p>
                            <h4 className='h4-blog-ocean'>2.2.4. Coopertition® Bonus</h4>
                            <p className='p-blog-ocean'>Coopertition® is displaying kindness and respect in the face of fierce competition. Coopertition is founded on the concept that teams can and should cooperate with each other even as they compete. Coopertition means competing always, but assisting and enabling others when you can.</p>
                            <p className='p-blog-ocean'>ALLIANCES can work together to clear the OCEAN of all POLLUTANTS. A POLLUTANT is considered clear if it is not in contact with the OCEAN at the end of the match. Completion of this task through Coopertition by the end of the MATCH will earn each ALLIANCE one (1) extra ranking point during Ranking MATCHES, or seventy-five (75) bonus points during the Playoff and Final MATCHES.</p>
                            <p className='p-blog-ocean'>ALLIANCES should remember that POLLUTANTS that are removed from the PLAYING FIELD, either by a HUMAN PLAYER or ejected by the actions of a COLLECTOR, will be returned to the OCEAN and could impact awarding of the Coopertition Bonus</p>
                            <h4 className='h4-blog-ocean'>2.3. Safety Rules</h4>
                            <p className='p-blog-ocean'> <strong>S01 :</strong> ROBOTS must stay on the PLAYING FIELD. If a ROBOT goes completely out of bounds or appears to have a high likelihood of violating S02 due to actions outside of the PLAYING FIELD, it will be disabled by the Head REFEREE for the rest of the MATCH. This is not intended to penalize ROBOTS for having mechanisms which inadvertently and inconsequentially cross the GUARDRAIL by a small amount during normal game play. </p>
                            <p className='p-blog-ocean'>Violation Consequence: ROBOT disabled for MATCH. </p>
                            <p className='p-blog-ocean'><strong>S02 :</strong>ROBOTS must not be dangerous or damage the PLAYING FIELD, POLLUTANTS, other ROBOTS, or humans. ROBOTS should not damage the PLAYING FIELD, POLLUTANTS, other ROBOTS, or pose a safety risk to team members or volunteers. If the Head REFEREE determines a team is in violation of this rule, or that a team has a high likelihood of violating this rule, the ROBOT may be disabled for the MATCH and must be re-inspected before subsequent MATCHES. </p>
                            <p className='p-blog-ocean'>Violation Consequence: ROBOT disabled for MATCH. </p>
                            <h4 className='h4-blog-ocean'>2.4. General Game Rules</h4>
                            <p className='p-blog-ocean'> <strong>G01 :</strong>Teams must play the game as written. These rules are written in a simple manner to make them as accessible as possible. Attempts to gain competitive advantage by employing an unintended method of play violates the rules and does not meet the spirit of FIRST Global. </p>
                            <p className='p-blog-ocean'> <strong>G02 :</strong>ROBOTS must start the MATCH within a 50 cm x 50 cm x 50 cm volume. Before a MATCH can start, all ROBOTS on the PLAYING FIELD must meet this requirement. The team flags or ALLIANCE indicators (provided by FIRST Global) are allowed to exceed this volume constraint.<br />
                                A.	If the problem can be corrected quickly, the Head REFEREE will invite a team member to fix the situation for the offending ROBOT.
                                B.	If the problem cannot be corrected quickly, the offending ROBOT will be removed from the PLAYING FIELD and the MATCH will start without the offending ROBOT. <br />
                                ROBOTS may extend beyond this size after the MATCH begins, but teams should pay attention to rules G08 and E06. ROBOTS that expand cannot have detachable parts (see G07).
                            </p>
                            <p className='p-blog-ocean'> <strong>G03 :</strong>Each DRIVE TEAM may consist of up to four (4) STUDENTS. The maximum allowed DRIVE TEAM members are two (2) DRIVERS, one (1) CAPTAIN and one (1) HUMAN PLAYER. The minimum allowed DRIVE TEAM members are one (1) HUMAN PLAYER, who should show up for MATCHES even if the ROBOT is not functioning (see T01). The DRIVE TEAM are the only team members allowed at the PLAYING FIELD and to set up the ROBOT. </p>
                            <p className='p-blog-ocean'>Violation Consequence: Must be corrected before the MATCH can start.</p>
                            <p className='p-blog-ocean'> <strong>G04 :</strong>DRIVE TEAMS must remain in the CLEANUP CREW STATION during a MATCH. The DRIVE TEAMS must stay in their respective CLEANUP CREW STATIONS throughout the MATCH. Small and inconsequential violations will receive a verbal warning.  </p>
                            <p className='p-blog-ocean'> <strong>G05 :</strong>Outside communication with the DRIVE TEAM is prohibited during a MATCH. Members of the DRIVE TEAM are expected to only communicate with other ALLIANCE DRIVE TEAM members in their MATCH.</p>
                            <p className='p-blog-ocean'> <strong>G06 :</strong>DRIVE TEAM members should not contact anything inside of the PLAYING FIELD until the LED lights indicate that it is safe to do so. Team members should not reach into the PLAYING FIELD or contact the surface, elements, POLLUTANTS, or ROBOTS, either directly or by using an object, unless the LEDs on the PLAYING FIELD are green and indicate that the PLAYING FIELD is safe to enter. This rule applies both before and after the MATCH, and in all situations except those covered by G12, E05, and E08.  </p>
                            <p className='p-blog-ocean'> <strong>G07 :</strong>ROBOTS should remain in one (1) piece on the PLAYING FIELD. ROBOTS may not intentionally detach parts on the PLAYING FIELD during a MATCH. Minor violations which do not affect the outcome of the MATCH will result in a verbal warning. Major violations, such as an entire ROBOT appendage detaching, may be considered a violation of S02.</p>
                            <p className='p-blog-ocean'> <strong>G08 :</strong>ROBOTS must not intentionally damage, tip over, or disable other ROBOTS. Strategies which are aimed at damaging, tipping, or disabling other ROBOTS are not in the spirit of FIRST Global and are not allowed. Teams are responsible for the actions of their ROBOTS at all times. Driving recklessly is not an excuse for tipping or damaging another ROBOT. Teams are also responsible for building a robust ROBOT which will not easily tip or become entangled due to minor contact. </p>
                            <p className='p-blog-ocean'> <strong>G09 :</strong>ROBOTS should be designed to permit easy removal of POLLUTANTS without requiring the ROBOT to be powered.  </p>
                            <p className='p-blog-ocean'> <strong>G10 :</strong>Scores are calculated when all ROBOTS and POLLUTANTS come to rest at the end of the MATCH. A five (5) second period after the end of the MATCH will be used to establish the resting status of the ROBOTS AND POLLUTANTS. Teams should try to make scoring clear and unambiguous, particularly when DOCKING their ROBOTS.</p>
                            <p className='p-blog-ocean'> <strong>G11 :</strong>ROBOTS must function in imperfect situations. The PLAYING FIELD and placement of elements making up the PLAYING FIELD may vary by up to +/- 25 mm except if specifically noted in the PLAYING FIELD build guide. ROBOT designs should be robust enough to work even if the PLAYING FIELD or POLLUTANTS are not perfectly sized or have a slightly different texture or color. </p>
                            <p className='p-blog-ocean'> <strong>G12 :</strong>After the MATCH has started, if a ROBOT has not moved, DRIVE TEAM members may handle their respective ROBOT. DRIVE TEAM members and specifically designated FIRST Global Field Support staff can attempt the following corrections to get their ROBOT playing in a MATCH. <br />
                                A.	Turn the ROBOT on or off.<br />
                                B.	Plug in the battery.<br />
                                C.	Fix loose wire connections. <br />
                                Once the ROBOT has moved under its own power, the ROBOT may not be touched by any humans until the MATCH has ended. DRIVE TEAM members should not touch other ROBOTS, POLLUTANTS, or any part of the PLAYING FIELD while attempting repair on their immobile ROBOT, as that contact would be considered a violation of E05 and/or G06.
                            </p>
                            <p className='p-blog-ocean'>Violation Consequence: ROBOT disabled for MATCH.</p>
                            <p className='p-blog-ocean'> <strong>G13 :</strong>Strategies aimed at causing an opponent to violate a rule are not allowed. If an ALLIANCE forces an opponent to violate a rule, the penalty that would typically be assigned to the opponent will instead be assigned to the ALLIANCE that forced the violation.  </p>
                            <p className='p-blog-ocean'> <strong>G14 :</strong>ROBOTS may not grab, grapple, or grasp PLAYING FIELD elements unless otherwise explicitly permitted. ROBOT mechanisms should not be designed to attach to any part of the PLAYING FIELD except when explicitly permitted. </p>
                            <p className='p-blog-ocean'> <strong>G15 :</strong>Scores are final and there are no replays. All of the volunteers at FIRST Global work hard to provide a fair and consistent game experience for all teams, but occasionally mistakes may be made. How teams deal with adversity will say as much about their character as how they deal with success. Teams should avoid situations which could be rule violations and make their scoring actions clear to avoid misunderstandings.</p>
                            <p className='p-blog-ocean'> <strong>G16 :</strong>	Teams should behave as a representative of a whole nation on a global stage. All teams are expected to behave in a respectful and professional manner when interacting with other FIRST Global teams, volunteers, and staff during the event. STUDENTS and adults are held to the same standard, and teams may be disqualified from the FIRST Global Challenge for uncivil or egregious behavior. .</p>
                            <h4 className='h4-blog-ocean'>2.5. Game-Specific Rules</h4>
                            <p className='p-blog-ocean'> <strong>E01 :</strong>ROBOTS must start each MATCH in contact with the GUARDRAIL closest to their CLEANUP CREW STATION. Some part of the ROBOT must be in contact with the GUARDRAIL on the short end of the PLAYING FIELD closest to their CLEANUP CREW STATION. No other part of the ROBOT may be in contact with any other PLAYING FIELD element (with the exception of the one (1) POLLUTANT allowed in E02) or any other ROBOT.</p>
                            <p className='p-blog-ocean'>Violation Consequence: The problem must be corrected before the MATCH can start.</p>
                            <p className='p-blog-ocean'> <strong>E02 :</strong>ROBOTS may start the MATCH loaded with one (1) POLLUTANT. Before the MATCH starts, each team is allowed to place one (1) POLLUTANT in or in contact with their ROBOT. These POLLUTANTS will come from the CURRENT bin located closest to their ALLIANCE side of the PLAYING FIELD. If a team chooses not to preload a POLLUTANT, the POLLUTANT will remain in the CURRENT. 	</p>
                            <p className='p-blog-ocean'>Violation Consequence: The problem must be corrected before the MATCH can start.</p>
                            <p className='p-blog-ocean'> <strong>E03 :</strong> Damaged POLLUTANTS will not be scored. POLLUTANTS that are torn or deformed during a MATCH to a point where they no longer return to their original shape will not count towards an ALLIANCE’S score.	</p>
                            <p className='p-blog-ocean'> <strong>E04 :</strong>	POLLUTANTS must remain on the PLAYING FIELD. POLLUTANTS are to remain on the PLAYING FIELD or be in the process of being scored in the PROCESSORS. POLLUTANTS ejected from the PLAYING FIELD will be reintroduced into the OCEAN by Field Support staff when safe to do so at the approximate location they exited. Intentional ejection of POLLUTANTS from the PLAYING FIELD will result in a verbal warning.

                                POLLUTANTS that are not considered PROCESSED (for example, POLLUTANTS held by HUMAN PLAYERS or POLLUTANTS ejected from the PLAYING FIELD) will be returned to the OCEAN at the end of the end of the MATCH.
                            </p>
                            <p className='p-blog-ocean'> <strong>E05 :</strong>DRIVE TEAMS must not directly interact with ROBOTS during the MATCH. The CAPTAIN and DRIVERS are prohibited from touching ROBOTS, either directly or by using objects at any time, with the exception of G12. HUMAN PLAYERS are prohibited from touching the ROBOT at any time, with the exception of G12. HUMAN PLAYERS may load POLLUTANTS into the ROBOT without touching the ROBOT only when the ROBOT is in contact with the CLEANUP CREW STATION GUARDRAIL on their ALLIANCE side of the PLAYING FIELD and the ROBOT is fully outside of the REDUCTION PROCESSING HUB.

                                There is no limit to the number of POLLUTANTS a HUMAN PLAYER can load into a ROBOT, however POLLUTANTS must be loaded by the HUMAN PLAYER one at a time. Each HUMAN PLAYER can hold and handle one POLLUTANT at a time, resulting in a maximum of three (3) possible POLLUTANTS held by an ALLIANCE’S HUMAN PLAYERS. Therefore, each ALLIANCE can only have three (3) POLLUTANTS out of the OCEAN at a time. Keep in mind that any POLLUTANTS held by HUMAN PLAYERS at the end of the MATCH are considered to be in the OCEAN.
                            </p>
                            <p className='p-blog-ocean'>Violation Consequence: YELLOW CARD for the team who touched the ROBOT.</p>
                            <p className='p-blog-ocean'> <strong>E06 :</strong>Ocean Opportunities is intended to be a scoring game. ROBOT actions, intentional or not, which only serve to prevent the opposing ALLIANCE from scoring or which are outside the intent of fair and productive game play are not allowed. These actions include but are not limited to:<br />
                                A.	Interfering with a POLLUTANT scoring in the opposing ALLIANCE’S side of the PLAYING FIELD.<br />
                                B.	Blocking access to the opposing ALLIANCE’S scoring areas.<br />
                                C.	Preventing the free movement of one (1) or more of the opposing ALLIANCE’S ROBOTS by blockading, trapping, or pinning. <br />
                                D.	Removing POLLUTANTS from the opposing ALLIANCE’S scoring areas.<br />
                            </p>
                            <p className='p-blog-ocean'> <strong>E07 :</strong>	DRIVE TEAMS must start and stop the ROBOT at the right time. ROBOTS should start the MATCH stationary and in compliance with the starting rules stated in E01. Controllers can be held by the DRIVE TEAM with the ROBOT program in the Init state, but the ROBOTS cannot move until “go” in the countdown “three, two, one, go!” ROBOTS should stop moving promptly when the timer reaches zero (0:00) by stopping the program on their driver station (tablet). </p>
                            <p className='p-blog-ocean'>Violation Consequence: YELLOW CARD for the offending team.</p>
                            <p className='p-blog-ocean'> <strong>E08 :</strong>	HUMAN PLAYERS must be very careful when interacting with the REDUCTION PROCESSING HUB. HUMAN PLAYERS can retrieve POLLUTANTS from the REDUCTION PROCESSING HUB only when there are no ROBOTS or parts of ROBOTS located within or above the REDUCTION PROCESSING HUB.	</p>
                            <p className='p-blog-ocean'> <strong>E09 :</strong>POLLUTANTS retrieved by a HUMAN PLAYER from the REDUCTION PROCESSING HUB have limits on how they can be returned to the PLAYING FIELD. POLLUTANTS retrieved from the REDUCTION PROCESSING HUB by a HUMAN PLAYER may not be returned to the REDUCTION PROCESSING HUB. These POLLUTANTS must be returned to play in one of two ways:<br />
                                A.	Returned to the OCEAN over the CLEANUP CREW STATION GUARDRAIL. POLLUTANTS should be placed in the OCEAN close to the CLEANUP CREW STATION GUARDRAIL and may not be thrown or rolled by the HUMAN PLAYER into the OCEAN.<br />
                                B.	Loaded into a ROBOT that is both:<br />
                                a.	Fully outside of the REDUCTION PROCESSING HUB.<br />
                                b.	In contact with the CLEANUP CREW STATION GUARDRAIL. <br />
                            </p>
                        </div>
                    )

                    }
                    {BlogSlide1 === 2 && (
                        <div className={BlogSlide1 === 2 ? "pop-up-blog pop-up-blog-show" : "pop-up-blog"}>
                            <div className="d-flex" style={{ justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                                <span>03/<sup>04</sup></span>
                                <i className="fal fa-xmark" style={{ cursor: "pointer" }} onClick={toggleBlogDisc1}></i>
                            </div>
                            <div className="d-flex" style={{ alignItems: "center", justifyContent: "center" }}>
                                <span className='fal fa-play' style={{ transform: "rotate(180deg)" }} onClick={prevSlide}></span>
                                <img src='/image/Blogocean3.webp' className='blogimg' alt="" />
                                <span className='fal fa-play' onClick={nextSlide}></span>
                                {/* <h1 className='h1-blog-ocean'>FIRST Global Challenge:</h1>
                            <h1>Ocean Opportunities</h1> */}
                            </div>
{/* 
                            <div className="leaderDetails">
                                <img src="/image/Udit-Sharma.png" alt="" />
                                <p>Somos una empresa Santanderena que brinda el servicio especializado de organización y.</p>
                            </div> */}
                            <h2 className='h2-blog-ocean' style={{ marginTop: "20px" }}>Overview</h2>
                            <h4 className='h4-blog-ocean'>2.1. Game Description</h4>
                            <p className='p-blog-ocean'>This section outlines the rules and requirements for the design and construction of a 2019 FIRST Global ROBOT. FIRST Global ROBOTS are teleoperated and designed and built by STUDENTS to compete in the Ocean Opportunities challenge.</p>
                            <h4 className='h4-blog-ocean'>3.2. Robot Construction Rulesh</h4>
                            <p className='p-blog-ocean'> <strong>R01 :</strong> Each ROBOT must pass an initial inspection before being allowed to play in any Ranking or Playoff MATCH. <br />
                                A.	If a Head REFEREE or Inspector determines that a ROBOT is in violation of any rules, the team may be disqualified from the current MATCH (if they are playing) and will be required to pass a re-inspection before competing in their next MATCH. <br />
                                B.	ROBOTS may be re-inspected at any time.<br />
                                C.	If a team makes major modifications to their ROBOT, re-inspection is required.<br />
                            </p>
                            <p className='p-blog-ocean'> <strong>R02 :</strong>ROBOTS must be constructed from only the quantity and type of components included in the 2019 FIRST Global Kit of Parts unless otherwise explicitly allowed. Each team will receive one (1) 2019 FIRST Global Kit of Parts. Teams may purchase additional parts for prototyping or as spares, but extra components cannot be used to increase the quantity included on the final ROBOT.   </p>
                            <p className='p-blog-ocean'> <strong>R03 :</strong>Teams must only use official REV Robotics products. Unless otherwise specified in R04, no substitutions are allowed. This rule is intended to help keep the level of competition equal for all teams.   </p>
                            <p className='p-blog-ocean'> <strong>R04 :</strong>ROBOTS may also be constructed using the following additional “non-REV Robotics” parts: <br />
                                A.	Any commercially available M3 screws (up to 50 mm long) and any commercially available nuts and/or washers that are the same sizes as those included in the 2019 FIRST Global Kit of Parts. These additional parts are to be used as replacements and cannot be used to increase the quantity included on the final ROBOT. <br />
                                B.	Additional zip ties or cable ties. Must be functionally equivalent to REV Robotics zip ties in all ways (e.g., not longer, stronger, nor stiffer). <br />
                                C.	Lubricants used only in small amounts to reduce friction within the ROBOT. Lubricants must not contaminate the PLAYING FIELD, POLLUTANTS, or other ROBOTS. Use of lubricants is limited to:<br />
                                a.	Non-aerosol grease used in extreme moderation only on the internal gearing of motors or servos as needed after a gearing repair.<br />
                                b.	Bicycle chain lubricant for repairing rusty roller chain, provided it is used sparingly and excess amounts are wiped off.<br />
                                D.	Small amounts of tape or heat-shrink tubing used solely for:<br />
                                a.	Labeling wires, motors, or sensors.<br />
                                b.	Securing wire connections.<br />
                            </p>
                            <p className='p-blog-ocean'> <strong>R05 :</strong>Not all items included in the Kit of Parts may be modified. Motors or servos may not be modified in any way. Modifications to wires which are to be used with electronic components are not allowed, except when those modifications return the wires to their original condition as provided by REV Robotics. Modifications to any electronic component are not allowed. Cutting mechanical components such as extrusion, brackets, screws, chain, hook and loop, cords, etc. is allowed.  </p>
                            <p className='p-blog-ocean'> <strong>R06 :</strong> Not all designs that meet all other rules are legal. The following design features are not allowed:<br />A.	Those which could potentially damage the PLAYING FIELD.<br />B.	Those which could potentially damage the POLLUTANTS.<br />C.	Those which pose an unnecessary risk of ENTANGLEMENT.<br /> </p>
                            <p className='p-blog-ocean'> <strong>R07 :</strong> ROBOTS may use only one control system. This means one (1) Control Hub, one (1) Expansion Hub, and one (1) battery. </p>
                            <p className='p-blog-ocean'> <strong>R08 :</strong> ROBOTS may only have one webcam. Each team is provided with a single Logitech Webcam in their Kit of Parts for vision recognition of the Vuforia vision targets. The targets are located on the PROCESSING BARGE as shown below and can be downloaded at https://hub.first.global/game/.</p>

                        </div>
                    )

                    }
                    {BlogSlide1 === 3 && (
                        <div className={BlogSlide1 === 3 ? "pop-up-blog pop-up-blog-show" : "pop-up-blog"}>
                            <div className="d-flex" style={{ justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                                <span>04/<sup>04</sup></span>
                                <i className="fal fa-xmark" style={{ cursor: "pointer" }} onClick={toggleBlogDisc1}></i>
                            </div>
                            <div className="d-flex" style={{ alignItems: "center", justifyContent: "center" }}>
                                <span className='fal fa-play' style={{ transform: "rotate(180deg)" }} onClick={prevSlide}></span>
                                    <img src='/image/Blogocean4.webp' className='blogimg' alt="" />
                                <span className='fal fa-play' onClick={nextSlide}></span>
                                {/* <h1 className='h1-blog-ocean'>FIRST Global Challenge:</h1>
                            <h1>Ocean Opportunities</h1> */}
                            </div>

                            {/* <div className="leaderDetails">
                                <img src="/image/Udit-Sharma.png" alt="" />
                                <p>Somos una empresa Santanderena que brinda el servicio especializado de organización y.</p>
                            </div> */}
                            <h2 className='h2-blog-ocean' style={{ marginTop: "20px" }}>Overview</h2>
                            <p className='p-blog-ocean'>The 2019 FIRST Global Challenge is played in a tournament format, consisting of three (3) types of MATCHES. Ranking MATCHES provide each team with the opportunity to compete with its ROBOT on the PLAYING FIELD to score points that will help determine their rank amongst the total participating teams. Playoff MATCHES follow the Ranking MATCHES to determine the top ALLIANCES. Final MATCHES determine the champion ALLIANCE. </p>
                            <h4 className='h4-blog-ocean'>4.2. Ranking Matches</h4>
                            <p className='p-blog-ocean'>Each team will play a set number of Ranking MATCHES based on the time allowed in the schedule. Ranking MATCH assignments and schedules will be generated once ROBOTS have been inspected. Teams will earn ranking points based on their ALLIANCE’S performance during Ranking MATCHES, and the ranking points will determine which teams advance to the Playoff MATCHES. </p>
                            <h4 className='h4-blog-ocean'>4.3. Team Rankings</h4>
                            <p className='p-blog-ocean'>In Ranking MATCHES, teams earn a win, loss, or tie. Teams receive ranking points based on the following:<br />
                                A.	Each winning team in a MATCH receives two (2) ranking points.<br />
                                B.	If a Ranking MATCH ends in a tie, all six (6) teams receive one (1) ranking point.<br />
                                C.	If a team loses the MATCH, they will receive zero (0) ranking points. This does not take into account the Coopertition Bonus, which would be awarded to both ALLIANCES regardless of MATCH outcome.<br />
                                D.	If a team is disqualified, that team receives zero (0) ranking points. All other teams receive the MATCH ranking points as listed above.<br />
                            </p>
                            <p className='p-blog-ocean'>If ranking points are tied at the conclusion of Ranking MATCHES, the next factor for determining which teams advance to the Playoff MATCHES is the total score from all of the team’s previous MATCHES, with the highest total scores advancing.</p>
                            <p className='p-blog-ocean'>If ranking points and the highest total score from all previous MATCHES are both tied, the next factor for determining which teams advance to the Playoff MATCHES is total Coopertition Bonus points. The team with the highest number of cumulative Coopertition Bonus points advances.</p>
                            <h4 className='h4-blog-ocean'>4.4. Competition Advancement</h4>
                            <p className='p-blog-ocean'>A total of thirty-two (32) teams compete in Playoff MATCHES. The eight (8) ALLIANCES are led by the top ranked eight (8) teams as determined at the conclusion of the Ranking MATCHES. ALLIANCE partners are assigned based on rankings and a random draw. Each ALLIANCE will have four (4) teams.</p>
                            <p className='p-blog-ocean'>The Playoff and Final MATCHES are structured as a round-robin tournament event consisting of three (3) rounds. </p>
                            <p className='p-blog-ocean'>During the Playoff and Final MATCHES, clearing the OCEAN is worth seventy-five (75) Coopertition Bonus points awarded to both ALLIANCES. This bonus may help teams who lose their MATCH advance to the next round. </p>
                            <p className='p-blog-ocean'>In Round 1 of the Playoff MATCHES, each of the eight (8) ALLIANCES will play two (2) MATCHES as listed in the table below. </p>
                            <p className='p-blog-ocean'>In Round 1 of the Playoff MATCHES, each of the eight (8) ALLIANCES will play two (2) MATCHES as listed in the table below. </p>
                            <p className='p-blog-ocean'>In Round 2 of the Playoff MATCHES, each of the ALLIANCES will play the remaining ALLIANCES one time based on their performance in Round 1 and according to the table below. </p>
                            <p className='p-blog-ocean'>At the end of Round 2, the top two (2) ALLIANCES will move on to the Final MATCHES (Round 3).</p>
                            <p className='p-blog-ocean'>In the Final MATCHES, the top two (2) ALLIANCES will play each other in up to three (3) MATCHES to determine the winning ALLIANCE (with two (2) Final MATCH wins needed to become the winning ALLIANCE).</p>
                            <h4 className='h4-blog-ocean'>4.5. Tournament Rules</h4>
                            <p className='p-blog-ocean'> <strong>T01 :</strong> DRIVE TEAMS must send at least one (1) HUMAN PLAYER to their scheduled MATCHES. If a team’s ROBOT is broken, at least one (1) HUMAN PLAYER must show up to the MATCH while the rest of the team is working on repairing the ROBOT. MATCHES will not be delayed to wait for a missing team. MATCH schedules are subject to change and may be running ahead or behind the listed times. Teams are expected to actively monitor which MATCHES are currently playing to ensure they arrive to their scheduled MATCHES on time.  </p>
                            <p className='p-blog-ocean'>Violation Consequence: Automatic RED CARD for the team that did not show up to the MATCH.</p>
                            <p className='p-blog-ocean'> <strong>T02 :</strong> DRIVE TEAMS should show up at the PLAYING FIELD ready to play. DRIVE TEAMS should show up to MATCHES with all their equipment in a condition that is ready to play. MATCHES are expected to start promptly. Teams are not permitted to make repairs or perform complicated set-up or adjustments on the PLAYING FIELD. </p>
                            <p className='p-blog-ocean'> <strong>T03 :</strong> Safety glasses are required. Properly rated safety glasses or side shields are required on the competition floor and in the pits and should always be worn when working around the ROBOT.  </p>
                            <p className='p-blog-ocean'> <strong>T04 :</strong> ROBOTS must display their ALLIANCE and national flags. At all times during the tournament, teams should display their national flag, which will be provided by FIRST Global at the event. During MATCHES, teams must display the correct ALLIANCE color flag (red or blue), attached to the ROBOT such that the entire flag is above the top of the ROBOT at the beginning of the MATCH. ALLIANCE color flags will be distributed in the queue and should be returned following the MATCH. </p>
                            <p className='p-blog-ocean'> <strong>T05 :</strong> Each ALLIANCE will have four (4) teams for Playoff and Final MATCHES. Each MATCH will consist of three (3) of the four (4) teams competing on the field. It is up to each ALLIANCE individually to decide on which ROBOTS will participate in each MATCH. All four (4) teams must participate in a minimum of one (1) MATCH per round of the Playoff MATCHES. If the ALLIANCES do not come to an agreement on who will play in each round, a random selection will be made by FIRST Global.  </p>
                            <p className='p-blog-ocean'>Four (4) teams per ALLIANCE allows for teams to make strategic choices as to which ROBOT plays each MATCH, while allowing for more teams to participate in the competition. All teams on the ALLIANCE are treated equally and will all share in any awards that the team receives.</p>
                            <p className='p-blog-ocean'> <strong>T06 :</strong> Teams are sorted into ALLIANCES for Playoff MATCHES based on ranking and a random draw. At the conclusion of Ranking MATCHES, the top twenty-four (24) teams will be automatically placed into eight (8) ALLIANCES based on their rank and according to the table below. An additional eight (8) teams will be selected via a random draw from the remaining pool of teams to fill the fourth slot on each ALLIANCE. </p>
                            <p className='p-blog-ocean'> The random draw of teams is independent of team rank. Tournament rules apply to all four (4) teams on each ALLIANCE.  </p>

                        </div>
                    )

                    }
                </div>
            </div>
        </>
    )
}

export default Ocean