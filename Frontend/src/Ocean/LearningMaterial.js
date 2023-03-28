import React, { useRef, useContext, useState, useEffect } from 'react'
import NoteContext from "../context/notes/Notecontext"
import { useHistory } from 'react-router-dom'
import LearningMaterialBlog from './LearningMaterial.json'
import { Helmet } from 'react-helmet';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
// import { LazyLoadImage } from 'react-lazy-load-image-component';
import Nav from '../Navbar/Nav';
import Footer from '../Footer/Footer';
import Logo from '../image/TYMLOGO.png'

import UID from 'uniquebrowserid';


const LearningMaterial = () => {

    const [ImgSLide, setImgSLide] = useState(0)
    const [Ctatoggle, setCtatoggle] = useState("block")
    const [Ctatoggle1, setCtatoggle1] = useState("none")
    const [Ctatoggle2, setCtatoggle2] = useState("none")
    const [imgsrc, setimgsrc] = useState("")
    const [CodeSlider, setCodeSlider] = useState(0)
    const [movingLeft, setmovingLeft] = useState("15%")
    const [ToggleDisplay, setToggleDisplay] = useState("none")
    const [Blogdisplay, setBlogdisplay] = useState("none")
    const context = useContext(NoteContext)
    const { setLMBlog, LMBlog } = context
    const Url = process.env.REACT_APP_OCEAN
    const imgArray = ["/image/robotpart.png","/image/robotpart1.png","/image/robotpart2.png","/image/robotpart3.png","/image/robotpart4.png","/image/robotpart5.png","/image/robotpart6.png","/image/robotpart7.png"]
    useEffect(() => {
        verifyToken();
        setimgsrc(imgArray[0])
    }, [])
//     function  printDocument() {
//         console.log("hello")
//     const input = document.getElementById('learning-material-resource');
//     console.log(input)
//     html2canvas(input)
//       .then((canvas) => {
//         const imgData = canvas.toDataURL('image/png');
//         const pdf = new jsPDF();
//         pdf.addImage(imgData, 'JPEG', 0, 0);
//         // pdf.output('dataurlnewwindow');
//         pdf.save("download.pdf");
//       })
//     ;
//   }
const toggleImg = (e)=>{
    setimgsrc(e.target.src)
}
    const verifyToken = async () => {
        try {
            let str = document.cookie;
            str = str.split('; ');
            const result = {};
            for (let i in str) {
                const cur = str[i].split('=');
                result[cur[0]] = cur[1];
            }
        
            // console.log(result.Authtoken)
            // if (result.Identifier !== undefined && result.Browser_Code !== undefined) {
                var data = JSON.stringify({
                    "Browser_Code": result.Browser_Code,
                  });
                const response = await fetch(`${Url}/token-verification`, {
                    method: 'POST',
                    headers: { "Content-Type": "application/json"},
                    credentials: "include",
                    body: data
                })
                const json = await response.json()
                // console.log(json.success)
                if (json.success === true) {
                    setToggleDisplay("block")
                }
                else {
                    History.push('/ocean-challenge/passcode')
                }
            // }
            // else {
            //     History.push('/ocean-challenge/passcode')
            // }

        } catch (error) {
            // setWarning("Sorry! Some error occured !!")
            console.log("error")
            // document.getElementById("n").click();
        }
    }
    const printerRef = useRef(null)
    const History = useHistory()
    const slideToRef = (e, elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: "smooth"
        })
    }
    const prevSlide = (steps) => {
        // window.scrollTo({
        //     top:100,
        //     behavior: "smooth"
        // })
        setImgSLide(ImgSLide === 1 ? steps.length - 1 : ImgSLide - 1)
    }
    const nextSlide = (steps) => {
        // window.scrollTo({
        //     top: 100,
        //     behavior: "smooth"
        // })
        setImgSLide(ImgSLide === steps.length - 1 ? 1 : ImgSLide + 1)
    }
    const prevSlide2 = (steps) => {
        window.scrollTo({
            top: 100,
            behavior: "smooth"
        })
        setImgSLide(2)
    }
    const nextSlide2 = (steps) => {
        window.scrollTo({
            top: 100,
            behavior: "smooth"
        })
        setImgSLide(ImgSLide + 1)
    }
    const prevSlide1 = () => {
        // window.scrollTo({
        //     top: 100,
        //     behavior: "smooth"
        // })
        setCodeSlider(CodeSlider === 0 ? 11 : CodeSlider - 1)
    }
    const nextSlide1 = () => {
        // window.scrollTo({
        //     top: 100,
        //     behavior: "smooth"
        // })
        setCodeSlider(CodeSlider === 11 ? 0 : CodeSlider + 1)
    }
    // "postbuild": "react-snap"

    const toggleAccordian = () => {
        setLMBlog(0)
        setmovingLeft("15%")
        setBlogdisplay("grid")
        setImgSLide(0)
        setCodeSlider(0)
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
        // History.push('/ocean/learning-material-blog')
    }
    const toggleAccordian1 = () => {
        setLMBlog(0)
        setmovingLeft("35%")
        setBlogdisplay("grid")
        setImgSLide(1)
        setCodeSlider(0)
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
        // History.push('/ocean/learning-material-blog')
    }
    const toggleAccordian2 = () => {
        setLMBlog(1)
        setImgSLide(0)
        setmovingLeft("58%")
        setCodeSlider(0)
        setBlogdisplay("grid")
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
        // History.push('/ocean/learning-material-blog')
    }
    const toggleAccordian3 = () => {
        setLMBlog(2)
        setmovingLeft("76%")
        setImgSLide(0)
        setCodeSlider(0)
        setBlogdisplay("grid")
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    
        // History.push('/ocean/learning-material-blog')
    }
    return (
        <div style={{ display: ToggleDisplay }} >
            <div style={{ display: Blogdisplay === "none" ? "block" : "none" }}>
             <div className="navigation">
                <ul className="topNav">
                    <li ><img src={Logo} alt="logo" /></li>
                    <li><h2>THE YOUNG MINDS</h2></li>
                    <li></li>
                </ul>
            </div>
            <div className="mobile_nav">
                {/* Mobile view top nav */}
                <ul>
                    <li><img src={Logo} alt="logo"  /></li>
                    <li><h2>THE YOUNG MINDS</h2></li>
                    {/* <li></li> */}
                </ul>
            </div>
         </div>
            <div className='HomePageRevamp' style={{ display: Blogdisplay === "none" ? "block" : "none" }}>
                <div className="mobileHeadingsBanner">
                    <h4>Mega Event</h4>
                    <h1 className='Website_Heading'>Ocean Challenge</h1>
                </div>
                <div className="LandingPageBanner LandingPageBannerStore">
                    <div className="leftSideContentBanner" ref={printerRef}>
                        <div className='deskHeadingsBanner'>
                            <h4>Mega Event</h4>
                            <h1 className='Website_Heading'>Ocean Challenge</h1>

                        </div>
                        <div className='ANimatedtPara'>

                            <p className='website_para'>Discover modern - day sciences, advanced technologies, engineering marvels, cognitive art and magical mathematics.</p>
                            {/* <p className='landingViweMore'>Learn More {'-->'}</p> */}
                        </div>
                        <div className="dropdownDescription" style={{ marginTop: "50px", display: "block" }}>


                            <div className="accordianFirst">
                                <div className="visiblwHead" onClick={toggleAccordian} style={{ justifyContent: "space-between" }}>
                                    <h1>Overview</h1>
                                    <i className="fas fa-chevron-down" style={{ transform: "rotate(-90deg)" }}></i>
                                </div>

                            </div>
                            <div className="accordianFirst">
                                <div className="visiblwHead" onClick={toggleAccordian1} style={{ justifyContent: "space-between" }}>
                                    <h1>Building the Arduino Robot</h1>
                                    <i className="fas fa-chevron-down" style={{ transform: "rotate(-90deg)" }}></i>
                                </div>

                            </div>
                            <div className="accordianFirst">
                                <div className="visiblwHead" onClick={toggleAccordian2} style={{ justifyContent: "space-between" }}>
                                    <h1>Arduino Robot Circuit Diagram</h1>
                                    <i className="fas fa-chevron-down" style={{ transform: "rotate(-90deg)" }}></i>
                                </div>

                            </div>
                            <div className="accordianFirst" style={{ borderBottom: "none" }}>
                                <div className="visiblwHead" onClick={toggleAccordian3} style={{ justifyContent: "space-between" }}>
                                    <h1>Code Your Robot</h1>
                                    <i className="fas fa-chevron-down" style={{ transform: "rotate(-90deg)" }}></i>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="imgserviceContainer" style={{ marginTop: "0px" }}>
                        <img src="/image/Blogindex.webp" loading='eager' alt="Banner" />
                    </div>
                    <div className="imgserviceContainer_mobile">
                        <img src="/image/Blogindex.webp" alt="Banner" loading='eager' />
                    </div>

                </div>
            </div>
            <div className='Learinig-Material-Blog' id= "learning-material-resource" style={{ display: Blogdisplay }}>
                <p className='website_para' onClick={()=> setBlogdisplay("none")} style={{fontWeight: "600", textDecoration: "underline", cursor: "pointer"}}>Go Back</p>
                <div className="showRangeBlog">
                    <div className='blogSwitchrange' onClick={() => toggleAccordian()} style={{ opacity: movingLeft === "15%" ? "0" : "1" }}><p className='range-p'>Overview</p><p className='range-p2'>1</p></div>
                    <div className='blogSwitchrange' onClick={() => toggleAccordian1()} style={{ opacity: movingLeft === "35%" ? "0" : "1" }}><p className='range-p'>Assembling</p><p className='range-p2'>2</p></div>
                    <div className='blogSwitchrange' onClick={() => toggleAccordian2()} style={{ opacity: LMBlog === 1 ? "0" : "1" }} ><p className='range-p'>Circuit</p><p className='range-p2'>3</p></div>
                    <div className='blogSwitchrange' onClick={() => toggleAccordian3()} style={{ opacity: LMBlog === 2 ? "0" : "1" }}> <p className='range-p'>Coding</p><p className='range-p2'>4</p> </div>
                    <img src="/image/robot_smile.png" style={{ left: movingLeft }} alt="" />
                    <div className='originalRange'></div>
                </div>
                {LearningMaterialBlog.map((data, index) => {
                    return (
                        <div key={index}>
                            {index === LMBlog && (
                                <>
                                    {index === 0 && ImgSLide === 0 && (
                                        <>
                                                <div className="EventVideo2">
                        {/* <img src="/image/playbutton.gif" className='playbutton'alt="" /> */}
                        {/* <img src="/image/Diver1 (2).png" alt="" /> */}
                        {/* <iframe className='videoofevent' id='videoofevent' src="https://drive.google.com/file/d/1BmRaLKkgw32KNrLrHt4uT3sscsjtkUDE/preview" allow='autoplay;'></iframe> */}
                        <iframe className='' src={`https://www.youtube.com/embed/5J5017p4p-A?autoplay=0&mute=10&rel=0&modestbranding=0&showinfo=0`}title="YouTube video player" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>

                    </div>
                                            <div style={{ display: "block", width: "100%" }} className='mainHead'>
                                                <h1 className='Website_Heading' style={{ display: "inline" }}>Overview</h1>
                                            </div>
                                            <p className='p-blog-ocean'>In this tutorial I will show you how I made my Mecanum Wheels Robot Platform from my previous video, to work together and operate automatically with my 3D printed Robotic Arm, also an Arduino project from one of my previous videos.<br /><br />
                                                You can watch the following video or read the written tutorial above.<br /><br />
                                                So, we can control the Mecanum wheels robot with the custom-build Android application the same way as explained in the previous video. In addition to that, now the app also has buttons for controlling the robot arm.<br /><br />
                                                The original robot arm control app actually had sliders for controlling the robot joints, but that was causing some problems with the arm stability. In this way the arm works much better, so therefore I will provide this updated version of the robot arm control app and the Arduino code to the original robot arm project as well.<br /><br />
                                                Nevertheless, the coolest feature of this robot is the ability to store the movements and then automatically repeat them.<br /><br />
                                                Using the Save button, we can simply store the positions of the motors for each step. Then we just need to click the Run button and the robot will automatically repeat the stored movements over and over again.</p><br />
                                            <div style={{ display: "block", width: "100%" }} className='mainHead'>
                                                <h1 className='Website_Heading' style={{ display: "inline" }}>Resource Center</h1>
                                            </div>
                                            <div className="stepAccordian">
                                                <div className="accordTitle" onClick={() => { setCtatoggle(Ctatoggle === "block" ? "none" : "block"); setCtatoggle1("none"); setCtatoggle2("none") }}>
                                                    <h4 className="h4-blog-ocean" style={{ margin: "0px !important" }}>Step 1: Building the Arduino Robot</h4>
                                                    <i className="fa-solid fa-chevron-up" style={{ transform: Ctatoggle === "none" ? "rotate(0deg)" : "rotate(180deg)", transition: "0.5s ease" }}></i>
                                                </div>
                                                <div style={{ display: Ctatoggle }}>
                                                <div className="accordianCta">
                                                    <i className="fal fa-file-arrow-down"></i>
                                                    <div className="somefiles">
                                                        <p className='somefilesp'>Arduino Robot Arm and Mecanum Wheels Robot 3D Printing Files</p>
                                                        {/* <div className="d-flex" style={{ alignItems: "center" }}>
                                                            <div className="d-flex" style={{ alignItems: "center" }}>
                                                                <i className="fa-regular fa-copy"></i>
                                                                <span>1 file(s)</span>
                                                            </div>
                                                            <div className="d-flex" style={{ alignItems: "center", marginLeft: "1rem" }}>
                                                                <i className="fa-solid fa-bars"></i>
                                                                <span>3.48mb</span>
                                                            </div>
                                                        </div> */}

                                                    </div>
                                                    <a href="https://workdrive.zohopublic.in/external/a060f7f852ccfc66429ce9485cc70e4db835b511b6adfd51e0601ccbe469eef4" target="_blank"><button>Download</button></a>
                                                </div>
                                                {/* <div className="imgtogglebox">
                                                    <img src={imgsrc} className='blogimg2' alt="" />
                                                    <div className="miniimgdom">
                                                    {imgArray.map((img, index2)=>{
                                                        return (
                                                            <img src= {img} alt="" key={index2} style={{border: img === imgsrc ? "1px solid #000000": "none"}} className="miniimg" onClick={toggleImg} />
                                                        )
                                                    })}
                                                    </div>
                                                </div> */}
                                                </div>
                                            </div>
                                            <div className="stepAccordian">
                                                <div className="accordTitle" onClick={() => { setCtatoggle1(Ctatoggle1 === "block" ? "none" : "block"); setCtatoggle("none"); setCtatoggle2("none") }}>
                                                    <h4 className="h4-blog-ocean" style={{ margin: "0px !important" }}>Step 2: Arduino Robot Circuit Diagram</h4>
                                                    <i className="fa-solid fa-chevron-up" style={{ transform: Ctatoggle1 === "none" ? "rotate(0deg)" : "rotate(180deg)", transition: "0.5s ease" }}></i>
                                                </div>
                                                <div style={{ display: Ctatoggle1 }}>
                                                    {/* <div className="accordianCta" >
                                                        <i className="fal fa-file-arrow-down"></i>
                                                        <div className="somefiles">
                                                            <p className='somefilesp'>complete Arduino code for this Arduino robot project</p>


                                                        </div>
                                                        <a href="/image/Robotcode.ino" download><button>Download</button></a>
                                                    </div> */}
                                                    <table className='accordianTable' >
                                                        <thead>
                                                        <tr>
                                                            <th>Items</th>
                                                            <th>Quantity</th>
                                                            <th style={{ textAlign: "end" }}>Get it now</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr>
                                                            <td>1. Nema 17 stepper motor</td>
                                                            <td>4x</td>
                                                            <td style={{ textAlign: "end" }}> <a href="https://store.theyoungminds.org/products/stepperonline-stepper-motor" target="_blank" className='btTypelink'> Buy Now</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>2. DRV 8825 stepper motor driver</td>
                                                            <td>4x</td>
                                                            <td style={{ textAlign: "end" }}> <a href="https://store.theyoungminds.org/collections/pcbs-software/products/stepper-motor-driver-printer" target="_blank" className='btTypelink'> Buy Now</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>3. Mg996 servomotor </td>
                                                            <td>3x</td>
                                                            <td style={{ textAlign: "end" }}> <a href="https://store.theyoungminds.org/products/mg996r-servo-motor" target="_blank"  className='btTypelink'> Buy Now</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>4. Micro metal geared servo motor </td>
                                                            <td>3x</td>
                                                            <td style={{ textAlign: "end" }}> <a href="https://store.theyoungminds.org/products/sg90-micro-servo-motor-for-rc-robot" target="_blank" className='btTypelink'> Buy Now</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>5. Arduino Mega 2560</td>
                                                            <td>1x</td>
                                                            <td style={{ textAlign: "end" }}> <a href="https://store.theyoungminds.org/collections/pcbs-software/products/arduino-mega-board" target="_blank" className='btTypelink'> Buy Now</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>6. Bluetooth module</td>
                                                            <td>1x</td>
                                                            <td style={{ textAlign: "end" }}> <a href="https://store.theyoungminds.org/collections/pcbs-software/products/hc-05-bluetooth-module" target="_blank" className='btTypelink'> Buy Now</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>7. Lipo Battery</td>
                                                            <td>1x</td>
                                                            <td style={{ textAlign: "end" }}> <a href="https://store.theyoungminds.org/collections/robotics/products/li-po-battery" target="_blank" className='btTypelink'> Buy Now</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>8. XT60 connector</td>
                                                            <td>1x</td>
                                                            <td style={{ textAlign: "end" }}> <a href="https://store.theyoungminds.org/collections/robotics/products/xt60-connector" target="_blank" className='btTypelink'> Buy Now</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>9. Male Female header pins</td>
                                                            <td>10 strips</td>
                                                            <td style={{ textAlign: "end" }}> <a href="https://store.theyoungminds.org/collections/pcbs-software/products/header-pin" target="_blank" className='btTypelink'> Buy Now</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>10. Drilled PC</td>
                                                            <td>1x</td>
                                                            <td style={{ textAlign: "end" }}> <a href="https://store.theyoungminds.org/collections/pcbs-software/products/drilled-pcb" target="_blank" className='btTypelink'> Buy Now</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>11. LM350  </td>
                                                            <td>1x</td>
                                                            <td style={{ textAlign: "end" }}> <a href="https://store.theyoungminds.org/collections/pcbs-software/products/voltage-regulator-lm-350" target="_blank" className='btTypelink'> Buy Now</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>12. Capacitors</td>
                                                            <td>1x</td>
                                                            <td style={{ textAlign: "end" }}> <a href="https://store.theyoungminds.org/products/capacitors-1" target="_blank" className='btTypelink'> Buy Now</a></td>
                                                        </tr>
                                                        {/* <tr>
                                                            <td>13.  All the printables</td>
                                                            <td>1x</td>
                                                            <td style={{ textAlign: "end" }}> <a href="#" target="_blank" className='btTypelink'> Buy Now</a></td>
                                                        </tr> */}
                                                        <tr>
                                                            <td>13  M4,M6 screws and nuts</td>
                                                            <td>1x</td>
                                                            <td style={{ textAlign: "end" }}> <a href="https://store.theyoungminds.org/products/nuts" target="_blank" className='btTypelink'> Buy Now</a></td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                    {/* <div className="ciruitTAble">
                                                        <div className="Trow">
                                                            <p className='Trowp'>Items</p>
                                                            <p className='Trowp' style={{ textAlign: "center" }}>Quantity</p>
                                                            <p className='Trowp' style={{ textAlign: "end" }}>Get it now</p>
                                                        </div>
                                                        <div className="Trow">
                                                            <p className='quantityP'>1. Nema 17 stepper motor</p>
                                                            <p className='quantityP'>1x</p>
                                                            <a href="#" className='btTypelink'><p style={{ textAlign: "end" }}></p></a>
                                                        </div>
                                                    </div> */}
                                                </div>
                                            </div>
                                            <div className="stepAccordian">
                                                <div className="accordTitle" onClick={() => { setCtatoggle2(Ctatoggle2 === "block" ? "none" : "block"); setCtatoggle("none"); setCtatoggle1("none") }}>
                                                    <h4 className="h4-blog-ocean" style={{ margin: "0px !important" }}>Step 3: Arduino Code Your Robot</h4>
                                                    <i className="fa-solid fa-chevron-up" style={{ transform: Ctatoggle2 === "none" ? "rotate(0deg)" : "rotate(180deg)", transition: "0.5s ease" }}></i>
                                                </div>
                                                <div style={{ display: Ctatoggle2 }}>
                                                    <div className="accordianCta" >
                                                        <i className="fal fa-file-arrow-down"></i>
                                                        <div className="somefiles">
                                                            <p className='somefilesp'>Arduino Robot Arm and Mecanum Wheels Robot 3D printing Files</p>
                                                            {/* <div className="d-flex" style={{ alignItems: "center" }}>
                                                                <div className="d-flex" style={{ alignItems: "center" }}>
                                                                    <i className="fa-regular fa-copy"></i>
                                                                    <span>1 file(s)</span>
                                                                </div>
                                                                <div className="d-flex" style={{ alignItems: "center", marginLeft: "1rem" }}>
                                                                    <i className="fa-solid fa-bars"></i>
                                                                    <span>3.48mb</span>
                                                                </div>
                                                            </div> */}

                                                        </div>
                                                        <a href="https://workdrive.zohopublic.in/external/a060f7f852ccfc66429ce9485cc70e4db835b511b6adfd51e0601ccbe469eef4" target="_blank"><button>Download</button></a>
                                                    </div>
                                                    <div className="accordianCta">
                                                        <i className="fal fa-file-arrow-down"></i>
                                                        <div className="somefiles">
                                                            <p className='somefilesp'>complete Arduino code for this Arduino robot project</p>


                                                        </div>
                                                        <a href="/image/Robotcode.ino" download><button>Download</button></a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <div className="d-flex" style={{ width: "100%", alignItems: "center", justifyContent: "flex-start", marginTop: "40px" }}>
                                                <div className='LineDIvider' style={{ background: "#000000" }}></div>
                                                <div className='circulerDIvider' style={{ background: "#000000" }}></div>
                                                <h3 className='deadliestTrash' style={{ color: "#000000" }}>Need Help?</h3>
                                                <div className='circulerDIvider' style={{ background: "#000000" }}></div>
                                                <div className='LineDIvider' style={{ background: "#000000" }}></div>
                                            </div> */}
                                            <div className="IframeForm IframeForm1">

                                                <iframe frameBorder="0" src='https://forms.zohopublic.in/ymeducation/form/ConnectToOurMentor/formperma/OpIJxNZPmoebE4CuZwRfPQZ7TfeMge0xdFxn0qJgiM8'></iframe>


                                            </div>
                                        </>
                                    )}
                                    {index === 1 && ImgSLide === 0 && (
                                        <>
                                            <div style={{ display: "flex", width: "90vw", maxWidth: "1200px" }} className='mainHead'>
                                            <h1 className='Website_Heading' style={{ display: "inline" }}>{data.Heading}</h1>
                                            <a href={data.pdf} target='_blank' style={{textDecoration: "none"}} className="individualFile forDesk">
                                            <i className="fa-solid fa-download"></i>
                                            <span>Download as pdf</span>
                                            </a>
                                        </div>
                                        <a href={data.pdf} target='_blank' style={{textDecoration: "none"}}  className="individualFile formobile">
                                            <i className="fa-solid fa-download"></i>
                                            <span>Download as pdf</span>
                                            </a>
                                            <div className="funtionButtons">
                                                <a href="/image/Circuit-Diagram.webp" download><button>Download Circuit Diagram</button></a>
                                               <a href="https://store.theyoungminds.org/products" target='_blank'> <button className='midButton'>Buy Kits</button></a>
                                            </div>
                                            <img src="/image/Circuit-Diagram.webp" className='blogimg2' alt="" />
                                            <h2 className='h2-blog-ocean'>Parts Required</h2>
                                            <table className='accordianTable' >
                                                        <thead>
                                                        <tr>
                                                            <th>Items</th>
                                                            <th>Quantity</th>
                                                            <th style={{ textAlign: "end" }}>Get it now</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr>
                                                            <td>1. Nema 17 stepper motor</td>
                                                            <td>4x</td>
                                                            <td style={{ textAlign: "end" }}> <a href="https://store.theyoungminds.org/products/stepperonline-stepper-motor" target="_blank" className='btTypelink'> Buy Now</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>2. DRV 8825 stepper motor driver</td>
                                                            <td>4x</td>
                                                            <td style={{ textAlign: "end" }}> <a href="https://store.theyoungminds.org/collections/pcbs-software/products/stepper-motor-driver-printer" target="_blank" className='btTypelink'> Buy Now</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>3. Mg996 servomotor </td>
                                                            <td>3x</td>
                                                            <td style={{ textAlign: "end" }}> <a href="https://store.theyoungminds.org/products/mg996r-servo-motor" target="_blank"  className='btTypelink'> Buy Now</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>4. Micro metal geared servo motor </td>
                                                            <td>3x</td>
                                                            <td style={{ textAlign: "end" }}> <a href="https://store.theyoungminds.org/products/sg90-micro-servo-motor-for-rc-robot" target="_blank" className='btTypelink'> Buy Now</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>5. Arduino Mega 2560</td>
                                                            <td>1x</td>
                                                            <td style={{ textAlign: "end" }}> <a href="https://store.theyoungminds.org/collections/pcbs-software/products/arduino-mega-board" target="_blank" className='btTypelink'> Buy Now</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>6. Bluetooth module</td>
                                                            <td>1x</td>
                                                            <td style={{ textAlign: "end" }}> <a href="https://store.theyoungminds.org/collections/pcbs-software/products/hc-05-bluetooth-module" target="_blank" className='btTypelink'> Buy Now</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>7. Lipo Battery</td>
                                                            <td>1x</td>
                                                            <td style={{ textAlign: "end" }}> <a href="https://store.theyoungminds.org/collections/robotics/products/li-po-battery" target="_blank" className='btTypelink'> Buy Now</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>8. XT60 connector</td>
                                                            <td>1x</td>
                                                            <td style={{ textAlign: "end" }}> <a href="https://store.theyoungminds.org/collections/robotics/products/xt60-connector" target="_blank" className='btTypelink'> Buy Now</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>9. Male Female header pins</td>
                                                            <td>10 strips</td>
                                                            <td style={{ textAlign: "end" }}> <a href="https://store.theyoungminds.org/collections/pcbs-software/products/header-pin" target="_blank" className='btTypelink'> Buy Now</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>10. Drilled PC</td>
                                                            <td>1x</td>
                                                            <td style={{ textAlign: "end" }}> <a href="https://store.theyoungminds.org/collections/pcbs-software/products/drilled-pcb" target="_blank" className='btTypelink'> Buy Now</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>11. LM350  </td>
                                                            <td>1x</td>
                                                            <td style={{ textAlign: "end" }}> <a href="https://store.theyoungminds.org/collections/pcbs-software/products/voltage-regulator-lm-350" target="_blank" className='btTypelink'> Buy Now</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>12. Capacitors</td>
                                                            <td>1x</td>
                                                            <td style={{ textAlign: "end" }}> <a href="https://store.theyoungminds.org/products/capacitors-1" target="_blank" className='btTypelink'> Buy Now</a></td>
                                                        </tr>
                                                        {/* <tr>
                                                            <td>13.  All the printables</td>
                                                            <td>1x</td>
                                                            <td style={{ textAlign: "end" }}> <a href="#" target="_blank" className='btTypelink'> Buy Now</a></td>
                                                        </tr> */}
                                                        <tr>
                                                            <td>13.  M4,M6 screws and nuts</td>
                                                            <td>1x</td>
                                                            <td style={{ textAlign: "end" }}> <a href="https://store.theyoungminds.org/products/nuts" target="_blank" className='btTypelink'> Buy Now</a></td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                            <div className="navBtn" style={{ display: "flex", justifyContent: "center", width: "100%", margin: "30px 0px" }}>
                                                <span className='fal fa-play' style={{ transform: "rotate(180deg)", marginRight: "100px", cursor: "pointer" }} onClick={() => prevSlide2(data.Steps)}></span>
                                                <span className='fal fa-play' style={{ cursor: "pointer" }} onClick={() => nextSlide2(data.Steps)}></span>
                                            </div>
                                        </>
                                    )}
                                    <div style={{ display: ImgSLide === 0 ? "none" : "block" }}>
                                        <div style={{ display: "flex", width: "90vw", maxWidth: "1200px" }} className='mainHead'>
                                            <h1 className='Website_Heading' style={{ display: "inline" }}>{data.Heading}</h1>
                                            <a href={data.pdf} target='_blank' style={{textDecoration: "none"}} className="individualFile forDesk">
                                            <i className="fa-solid fa-download"></i>
                                            <span>Download as pdf</span>
                                            </a>
                                        </div>
                                        <a href={data.pdf} target='_blank' style={{textDecoration: "none"}}  className="individualFile formobile">
                                            <i className="fa-solid fa-download"></i>
                                            <span>Download as pdf</span>
                                            </a>
                                        <div className="funtionButtons">
                                            <a href="https://workdrive.zohopublic.in/external/a060f7f852ccfc66429ce9485cc70e4db835b511b6adfd51e0601ccbe469eef4" style={{display: LMBlog === 0 ? "block" : "none"}} target="_blank"><button >DOWNLOAD 3d Printable</button></a>
                                            <a href={data.Steps[ImgSLide].img1} style={{display: LMBlog === 1 ? "block" : "none"}} download><button>DOWNLOAD Circuit Diagram</button></a>
                                            {/* onClick={() => {navigator.clipboard.writeText()}} */}
                                            <a href="https://store.theyoungminds.org/products" target='_blank'> <button className='midButton'>Buy Kits</button></a>
                                        </div>

                                        <div className="steps">
                                            {data.Steps.map((item, i) => {
                                                return (
                                                    <div style={{ display: i === ImgSLide ? "grid" : "none" }} key={i}>
                                                        <h4 className='h4-blog-ocean' style={{marginBottom: "0px"}}>{data.Procedure}</h4>
                                                        <h2 className="h2-blog-ocean">Step {i}</h2>
                                                        <img src={item.img1}  style={{marginTop: "1rem"}} className='blogimg2 blogimg3' alt="" />
                                                        <div className="btnprocedureslider">
                                                            <div className="btnbtn" onClick={() => prevSlide(data.Steps)}></div>
                                                            <div className="btnbtn midbtnbtn"></div>
                                                            <div className="btnbtn" style={{ marginRight: "0px" }} onClick={() => nextSlide(data.Steps)}></div>
                                                        </div>
                                                        {/* <h4 className='h4-blog-ocean' style={{ display: i === 0 ? "none" : "block" }}>Step {i}</h4> */}
                                                        <p className='p-blog-ocean'>{item.Para1}</p>
                                                        <div className="navBtn" style={{ display: "flex", justifyContent: "center", width: "100%", margin: "30px 0px" }}>
                                                            <span className='fal fa-play' style={{ transform: "rotate(180deg)", marginRight: "100px", cursor: "pointer" }} onClick={() => prevSlide(data.Steps)}></span>
                                                            <span className='fal fa-play' style={{ cursor: "pointer" }} onClick={() => nextSlide(data.Steps)}></span>
                                                        </div>
                                                        <h2 className='h2-blog-ocean'>Tutorial</h2>
                                                        <div className="underLineUnder"></div>
                                                        <img src="/image/Circuit-Diagram.webp" style={{display: LMBlog === 1 ? "block" : "none"}} className='blogimg2' alt="" />
                                          
                                                    </div>
                                                )
                                            })}

                                        </div>
                                        <div className="EventVideo2" style={{display: LMBlog === 0 ? "block" : "none"}}>
                        {/* <img src="/image/playbutton.gif" className='playbutton'alt="" /> */}
                        {/* <img src="/image/Diver1 (2).png" alt="" /> */}
                        {/* <iframe className='videoofevent' id='videoofevent' src="https://drive.google.com/file/d/1BmRaLKkgw32KNrLrHt4uT3sscsjtkUDE/preview" allow='autoplay;'></iframe> */}
                        <iframe className='' src={`https://www.youtube.com/embed/5J5017p4p-A?autoplay=0&mute=10&rel=0&modestbranding=0&showinfo=0`}title="YouTube video player" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>

                    </div>
                                    </div>
                                </>
                            )}
                        </div>
                    )
                })}
                {LMBlog === 2 && (
                    <div className='coding-robot'>
                          <div style={{ display: "flex", width: "90vw", maxWidth: "1200px" }} className='mainHead'>
                          <h1 className='Website_Heading' style={{ display: "inline" }}>Chapter 3: Arduino Robot Code</h1>
                                            {/* <div className="individualFile forDesk">
                                            <i className="fa-solid fa-download"></i>
                                            <span>Download as pdf</span>
                                            </div> */}
                                        </div>
                                        {/* <div className="individualFile formobile">
                                            <i className="fa-solid fa-download"></i>
                                            <span>Download as pdf</span>
                                            </div> */}
                        <div className="funtionButtons">
                            <a href="/image/Robotcode.ino" download><button>Download Code</button></a>
                            <a href="https://workdrive.zohopublic.in/external/8286194c1e6efc9e0940ef49d89038dfcb29f21cf63c8c10478b43e0106d1c50/download" target='_blank'>
                                <button className='midButton'>Download App</button>
                                </a>
                        </div>
                        {CodeSlider === 0 && (
                            <>
                                <h2 className='h2-blog-ocean h22-blog-ocean'>Overview</h2>
                                <p className='p-blog-ocean'>What’s left is to take a look how the Arduino code and the Android application work. As the code is a bit longer, for better understanding, I will post the source code of the program in sections with description for each section. And at the end of this article I will post the complete source code. <br /><br />
                                    So first we need to define the 6 servo, the 4 stepper motors and the Bluetooth communication, as well as define some variables need for the program below. In the setup section we set the maximum speed of the steppers, define the pins to which the servos are connected, begin the Bluetooth communication and set the robot arm to initial position. So that’s pretty much everything for this tutorial. The project works well, but please note that it’s far from perfect. The automatic movements might not be that precise because of the slipping of the mecanum wheels as well as the poor performance of the servo motors. These cheap servo motors can also shake or jitter even when not moving just because don’t have enough strength to hold the weight of the 3D printed parts.
                                </p>
                                <div className="funtionButtons">
                                    <a href="https://workdrive.zohopublic.in/external/8286194c1e6efc9e0940ef49d89038dfcb29f21cf63c8c10478b43e0106d1c50/download" target='_blank'>
                                    <button className='midButton'>Download App</button>
                                    </a>

                                </div>
                            </>
                        )}
                        {CodeSlider === 1 && (
                            <>
                                <h4 className='h4-blog-ocean'>Coding The Robot</h4>
                                <h2 className='h2-blog-ocean'>Step 1</h2>
                                <div className="underLineUnder"></div>
                                <div className="codeblock" style={{overflow: "scroll"}}>
                                    <SyntaxHighlighter language="c" style={docco} >
                                        {"#include <SoftwareSerial.h>\n#include <AccelStepper.h>\n#include <Servo.h>Servo servo01;\n\nServo servo02;\nServo servo03;\nServo servo04;\nServo servo05;\nServo servo06;\n\nSoftwareSerial Bluetooth(A8, 38); // Arduino(RX, TX) - HC-05 Bluetooth (TX, RX)\n// Define the stepper motors and the pins the will use\nAccelStepper LeftBackWheel(1, 42, 43);   // (Type:driver, STEP, DIR) - Stepper1\nAccelStepper LeftFrontWheel(1, 40, 41);  // Stepper2\nAccelStepper RightBackWheel(1, 44, 45);  // Stepper3\nAccelStepper RightFrontWheel(1, 46, 47); // Stepper4\n\n#define led 14\n\nint wheelSpeed = 1500;\nint lbw[50], lfw[50], rbw[50], rfw[50]; // arrays for storing positions/steps\n\nint servo1Pos, servo2Pos, servo3Pos, servo4Pos, servo5Pos, servo6Pos; // current position\nint servo1PPos, servo2PPos, servo3PPos, servo4PPos, servo5PPos, servo6PPos; // previous position\nint servo01SP[50], servo02SP[50], servo03SP[50], servo04SP[50], servo05SP[50], servo06SP[50]; // for storing positions/steps\nint speedDelay = 20;\nint index = 0;\nint dataIn;\nint m = 0;\nvoid setup() {\n// Set initial seed values for the steppers\nLeftFrontWheel.setMaxSpeed(3000);\nLeftBackWheel.setMaxSpeed(3000);\nRightFrontWheel.setMaxSpeed(3000);\nRightBackWheel.setMaxSpeed(3000);\npinMode(led, OUTPUT);\nservo01.attach(5);\nservo02.attach(6);\nservo03.attach(7);\nservo04.attach(8);\nservo05.attach(9);\nservo06.attach(10);\nBluetooth.begin(38400);\n // Default baud rate of the Bluetooth module\nBluetooth.setTimeout(5);\ndelay(20);\nSerial.begin(38400);// Move robot arm to initial position\nservo1PPos = 90;\nservo01.write(servo1PPos);\nservo2PPos = 100;\nservo02.write(servo2PPos);\nservo3PPos = 120;\nservo03.write(servo3PPos);\nservo4PPos = 95;\nservo04.write(servo4PPos);\nservo5PPos = 60;\nservo05.write(servo5PPos);\nservo6PPos = 110;\nservo06.write(servo6PPos);\n}"}
                                    </SyntaxHighlighter>
                                </div>
                                <p className='p-blog-ocean'>Then in the loop section we start by checking whether there is any incoming data.</p>
                            </>
                        )}
                        {CodeSlider === 2 && (
                            <>
                                <h4 className='h4-blog-ocean'>Coding The Robot</h4>
                                <h2 className='h2-blog-ocean'>Step 2</h2>
                                <div className="underLineUnder"></div>
                                <div className="codeblock">
                                    <SyntaxHighlighter language="c" style={docco}>
                                        {"// Check for incoming data\nif (Bluetooth.available() > 0) {\ndataIn = Bluetooth.read();\n}  // Read the data"}
                                    </SyntaxHighlighter>
                                </div>
                                <p className="p-blog-ocean">This data comes from the smartphone or the Android app, so let’s take a look what kind of data it is actually sending. The Android app is made using the MIT App Inventor online application. It consists of simple buttons which have appropriate images as background.</p>
                            </>
                        )}
                        {CodeSlider === 3 && (
                            <>
                                <h4 className='h4-blog-ocean'>Circuit Diagram</h4>
                                <h2 className='h2-blog-ocean'>Step 3</h2>
                                <div className="underLineUnder"></div>
                                <img src="/image/CodeBlockimg.png" className='blogimg2' alt="" />
                                <p className="p-blog-ocean">If we take a look at the blocks of the app, we can see that all it does is it sends one-byte numbers when the buttons are clicked.</p>
                            </>
                        )}
                        {CodeSlider === 4 && (
                            <>
                                <h4 className='h4-blog-ocean'>Circuit Diagram</h4>
                                <h2 className='h2-blog-ocean'>Step 4</h2>
                                <div className="underLineUnder"></div>
                                <img src="/image/CodeBlockimg4.png" className='blogimg2' alt="" />
                                <p className="p-blog-ocean">So, depending on clicked button, we tell the Arduino what to do. For example, if we receive the number ‘2’ the mecanum wheels platform will move forward, using the moveForward custom function.</p>
                            </>
                        )}
                        {CodeSlider === 5 && (
                            <>
                                <h4 className='h4-blog-ocean'>Coding The Robot</h4>
                                <h2 className='h2-blog-ocean'>Step 5</h2>
                                <div className="underLineUnder"></div>
                                <div className="codeblock">
                                    <SyntaxHighlighter language="c" style={docco}>
                                        {"if (dataIn == 2) {\nm = 2;\n}//\nif (m == 2) {\nmoveForward();\n}\nCode language: Arduino (arduino)\nThis custom function sets all four stepper motors to rotate forward.\n\nvoid moveForward() {\nLeftFrontWheel.setSpeed(wheelSpeed);\nLeftBackWheel.setSpeed(wheelSpeed);\nRightFrontWheel.setSpeed(wheelSpeed);\nRightBackWheel.setSpeed(wheelSpeed);\n}"}
                                    </SyntaxHighlighter>
                                </div>
                                <p className="p-blog-ocean">
                                    For moving in any other direction, we just need rotate the wheels in the appropriate directions.<br />For controlling the robot arm, we use the same method. Again, we have buttons in the app and when holding the buttons, the robot arm joints move in the particular direction.
                                </p>
                            </>
                        )}
                        {CodeSlider === 7 && (
                            <>
                                <h4 className='h4-blog-ocean'>Circuit Diagram</h4>
                                <h2 className='h2-blog-ocean'>Step 7</h2>
                                <div className="underLineUnder"></div>
                                <img src="/image/CodeBlockimg4.png" className='blogimg2' alt="" />
                                <p className="p-blog-ocean">The Arduino code enters the while loop of that number, and stays there until we touch up the button, because at that moment we send the number 0 which means the robot should do nothing.</p>
                            </>
                        )}
                        {CodeSlider === 6 && (
                            <>
                                <h4 className='h4-blog-ocean'>Circuit Diagram</h4>
                                <h2 className='h2-blog-ocean'>Step 6</h2>
                                <div className="underLineUnder"></div>
                                <img src="/image/CodeBlockimg3.png" className='blogimg22' alt="" />
                                <p className="p-blog-ocean">As I mentioned earlier, in the original Robot Arm control app we were using sliders for controlling the positions of the servos but that was causing some problems because in that way we had to send Text to the Arduino, instead of 1-byte number. The problem is the Arduino sometimes misses the Text coming from the App and makes error or the Robot arm shakes and behaves abnormal.<br />
                                    In this way we simple send a single 1-byte number when a particular button is touched down.</p>
                            </>
                        )}
                        {CodeSlider === 8 && (
                            <>
                                <h4 className='h4-blog-ocean'>Coding The Robot</h4>
                                <h2 className='h2-blog-ocean'>Step 8</h2>
                                <div className="underLineUnder"></div>
                                <div className="codeblock">
                                    <SyntaxHighlighter language="c" style={docco}>
                                        {"// Move servo 1 in positive direction\nwhile (m == 16) {\nif (Bluetooth.available() > 0) {\n m = Bluetooth.read();\n}\nservo01.write(servo1PPos);\nservo1PPos++;\ndelay(speedDelay);\n}\n// Move servo 1 in negative direction\nwhile (m == 17) {\nif (Bluetooth.available() > 0) {\n  m = Bluetooth.read();\n}\nservo01.write(servo1PPos);\nservo1PPos--;\ndelay(speedDelay);\n}"}
                                    </SyntaxHighlighter>
                                </div>
                                <p className="p-blog-ocean">
                                    So, depending on the touched buttons the servos move either in positive or negative direction. The same working principle applies for all servo motors. For changing the speed of movement, we use the values coming from the slider which range from 100 to 250.
                                </p>
                            </>
                        )}
                        {CodeSlider === 9 && (
                            <>
                                <h4 className='h4-blog-ocean'>Coding The Robot</h4>
                                <h2 className='h2-blog-ocean'>Step 9</h2>
                                <div className="underLineUnder"></div>
                                <div className="codeblock">
                                    <SyntaxHighlighter language="c" style={docco}>
                                        {"// If arm speed slider is changed\n if (dataIn > 101 & dataIn < 250) {\n   speedDelay = dataIn / 10; // Change servo speed (delay time)\n }"}
                                    </SyntaxHighlighter>
                                </div>
                                <p className="p-blog-ocean">
                                    By dividing them by 10 we get values from 10 to 25, which are used as delay in microseconds in the whiles loops for driving the servos.<br />For storing the robot movements, we simply save the current positions of the servos and the steppers into arrays, each time the Save button is clicked.
                                </p>
                            </>
                        )}
                        {CodeSlider === 10 && (
                            <>
                                <h4 className='h4-blog-ocean'>Coding The Robot</h4>
                                <h2 className='h2-blog-ocean'>Step 10</h2>
                                <div className="underLineUnder"></div>
                                <div className="codeblock">
                                    <SyntaxHighlighter language="c" style={docco}>
                                        {"// If button 'SAVE' is pressed\nif (m == 12) {\n  //if it's initial save, set the steppers position to 0\n  if (index == 0) {\n    LeftBackWheel.setCurrentPosition(0);\n    LeftFrontWheel.setCurrentPosition(0);\n    RightBackWheel.setCurrentPosition(0);\n    RightFrontWheel.setCurrentPosition(0);\n  }\n  lbw[index] = LeftBackWheel.currentPosition();  // save position into the array\n  lfw[index] = LeftFrontWheel.currentPosition();\n  rbw[index] = RightBackWheel.currentPosition();\n  rfw[index] = RightFrontWheel.currentPosition();\n  servo01SP[index] = servo1PPos;  // save position into the array\n  servo02SP[index] = servo2PPos;\n  servo03SP[index] = servo3PPos;\n  servo04SP[index] = servo4PPos;\n  servo05SP[index] = servo5PPos;\n  servo06SP[index] = servo6PPos;\n  index++;                        // Increase the array index\n  m = 0;\n}"}
                                    </SyntaxHighlighter>
                                </div>
                                <p className="p-blog-ocean">
                                    Then when we press the Run button we call the runSteps() custom function. This custom function runs through all stored steps using some for and while loops.
                                </p>
                            </>
                        )}
                        {CodeSlider === 11 && (
                            <>
                                <h4 className='h4-blog-ocean'>Coding The Robot</h4>
                                <h2 className='h2-blog-ocean'>Step 11</h2>
                                <div className="underLineUnder"></div>
                                <div className="codeblock">
                                    <SyntaxHighlighter language="c" style={docco} >
                                        {"if (m == 14) {\nrunSteps();\n// If button 'RESET' is pressed\nif (dataIn != 14) {\n  stopMoving();\n  memset(lbw, 0, sizeof(lbw)); // Clear the array data to 0\n  memset(lfw, 0, sizeof(lfw));\n  memset(rbw, 0, sizeof(rbw));\n  memset(rfw, 0, sizeof(rfw));\n  memset(servo01SP, 0, sizeof(servo01SP)); // Clear the array data to 0\n  memset(servo02SP, 0, sizeof(servo02SP));\n  memset(servo03SP, 0, sizeof(servo03SP));\n  memset(servo04SP, 0, sizeof(servo04SP));\n  memset(servo05SP, 0, sizeof(servo05SP));\n  memset(servo06SP, 0, sizeof(servo06SP));\n  index = 0;  // Index to 0\n }\n}"}
                                    </SyntaxHighlighter>
                                </div>
                                <p className="p-blog-ocean">
                                    We should note that it starts from the first position and goes the last position, and repeats that over and over again. Therefore, when saving the steps, we actually need to position the robot in a way that the first step has the same position as the last step. While running through the steps we can also change the speed of both the platform and the robot arm, as well as pause and reset all the steps.
                                </p>
                            </>
                        )}
                        <div className="navBtn" style={{ display: "flex", justifyContent: "center", width: "100%", margin: "30px 0px" }}>
                            <span className='fal fa-play' style={{ transform: "rotate(180deg)", marginRight: "100px", cursor: "pointer" }} onClick={() => prevSlide1()}></span>
                            <span className='fal fa-play' style={{ cursor: "pointer" }} onClick={() => nextSlide1()}></span>
                        </div>
                    </div>
                )}
            </div>
            <div style={{ display: Blogdisplay === "none" ? "block" : "none" }}>

                <Footer />
            </div>
        </div>
    )
}

export default LearningMaterial
