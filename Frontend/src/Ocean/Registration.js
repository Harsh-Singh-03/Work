import React, { useState, useEffect, useRef, useContext } from 'react';
import NoteContext from "../context/notes/Notecontext"
import './Registration.css'

const Registration = () => {
    const context = useContext(NoteContext)
    const { CreateGuid, CreateGuidfopass } = context
    const loadingGuid = () =>{
        var newguid = CreateGuid()
        var passcode = CreateGuidfopass()
        let myIframe = document.getElementById("query_z_form")
    
        if(myIframe.src === "https://forms.zohopublic.in/ymeducation/form/THEOCEANCHALLENGE/formperma/LfvCMuFZA2AW7Q7FRNu2PJdQfBLfwnyWnBindMWG2q0"){
          myIframe.src = `https://forms.zohopublic.in/ymeducation/form/THEOCEANCHALLENGE/formperma/LfvCMuFZA2AW7Q7FRNu2PJdQfBLfwnyWnBindMWG2q0/?SingleLine5=${newguid}&SingleLine6=${passcode}`
        }
      }
    const requestRef = useRef(null)
    const scrollToPrev= (elementRef)=>{
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
    return (
        <div className='OceanRegistration_'>
            <img src="/image/registrationBg.jpg" className='RegistrationBg' alt="" />
            <div className="oceanNavigation">
                <div className="oceanNavigation1">
                    <div className="BrandLOGO d-flex" style={{ alignItems: "flex-end" }}>
                        <img src="/image/TYMLOGO.png" alt="" />
                        <h4>THE YOUNG MINDS</h4>
                    </div>
                    <div className="d-flex">
                        <button onClick={()=> scrollToPrev(requestRef)} id= "participate">Request A Call Back</button>
                        <img src='/image/call.gif' onClick={() => scrollToPrev(requestRef)} id="participateimg"/>
                    </div>
                </div>
            </div>
            <div className="formSection">
                {/* <img src="/image/qrForm.png" className='QrForm' alt="" /> */}
                <div className="oceanActualForm">
                    <iframe frameBorder="0" onLoad={loadingGuid} id='query_z_form' style={{width: "100%", height: "100%"}} src='https://forms.zohopublic.in/ymeducation/form/THEOCEANCHALLENGE/formperma/LfvCMuFZA2AW7Q7FRNu2PJdQfBLfwnyWnBindMWG2q0'></iframe>
                </div>
            </div>
            <div className="d-flex" style={{ width: "100%", alignItems: "center", justifyContent: "center", marginTop: "60px" }}>
                    <div className='LineDIvider'></div>
                    <div className='circulerDIvider'></div>
                    <h2 className='deadliestTrash'>Participant’s Benefits</h2>
                    <div className='circulerDIvider'></div>
                    <div className='LineDIvider'></div>
                </div>
                <h1 className='maintitle'>GET ACCESS TO OUR KIT</h1>
            <div className="RobotKit">
                <img src="/image/RobotKit.png" className='Robotkitpng' alt="" />
                <div>
                    <h1 style={{marginTop: "20px"}}>EXCLUSIVE</h1>
                    <h1>ROBOT KIT</h1>
                  
                    <div className="blankDashing"></div>
                    <p>A Complete access to all the materials, and resources required to build the robot.</p>
                    <div className="tagss">
                        <p style={{borderRight: "1px dashed #fff"}}>Workshops</p>
                        <p>Teachers</p>
                    </div>
                </div>
            </div>
            <div className="d-flex MiniRobotDOM">
                <div className="MiniRobotkit">
                    <img src="/image/Mkit2.png" className='Robotkitpng RobotkitpngDesk' alt="" />
                    <img src="/image/MkitM.png" className='Robotkitpng RobotkitMobile' alt="" />
                    <div>
                        <h4>CODING <br/> RESOURCES</h4>
                        <p>To begin, simply drag blocks of code and snap them together to form a stack of actions. Codeblocks is a great way to learn and teach coding principles. </p>
                        <div className="tagsss">
                        <p style={{borderRight: "1px dashed #fff"}}>Workshops</p>
                        <p>Teachers</p>
                    </div>
                    </div>
                </div>
                <div className="MiniRobotkit" style={{marginRight: "0px"}}>
                    <img src="/image/Mkit3.png" className='Robotkitpng RobotkitpngDesk' alt="" />
                    <img src="/image/MkitM1.png" className='Robotkitpng RobotkitMobile' alt="" />
                    <div>
                        <h4>ASSEMBLING<br/> MANUAL</h4>
                        <p>Every year millions of tons of pollutants, generated by human activity, make their way into the world’s oceans, negatively affecting marine life and global populations. The 2019 FIRST Global...</p>
                        <div className="tagsss">
                        <p style={{borderRight: "1px dashed #fff"}}>Workshops</p>
                        <p>Teachers</p>
                    </div>
                    </div>
                </div>
            </div>
            <div className="prizes_grand">
                <h4>Compete &</h4>
                <h2>Win Prizes</h2>
                <img src="/image/prizelist.png" alt="" />
                <div className="head_grand">
                {/* <h4 className='h4-grand'>WIN A CHANCE TO VISIT</h4>
                <h2 className='h2-grand' style={{color: "#ffffff"}}>A GREAT BARRIER REEF</h2> */}
                </div>``
                 {/* <video className='videoofevent' controls={true}> */}
                         {/* <source src="/image/Ocean Opportunity.mp4" type="video/mp4" /> */}
                 {/* </video> */}
            </div>
            <div className="EventVideo">
                        {/* <img src="/image/playbutton.gif" className='playbutton'alt="" />
                        <video className='videoofevent' controls={true}>
                            <source src="/image/Ocean Opportunity.mp4" type="video/mp4" />
                        </video> */}
                        <iframe className='videoofevent' id="iframeVideo"  src={`https://www.youtube.com/embed/SV_9Qe_R8Ko?autoplay=0&mute=0&rel=0&modestbranding=0&showinfo=0&controls=1`}title="YouTube video player" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
               

                    </div>
            <div className="winner_list winner_listDesk" style={{height: "auto"}}>
                <div className="winnerListBox">
                    <img src="/image/crown1.png" className='CrownImg' alt="" />
                    <img src="/image/winnerIcon.png" alt="" />
                    <h4>2<sup>nd</sup> WINNER</h4>
                    <div className="d-flex" style={{marginBottom: "1rem", alignItems: "center", width: "100%"}}>
                        <div className="subParaimg">
                            <img src="/image/T1.png" alt="" />
                        </div>
                        <p>World Robot Olympiad</p>
                    </div>
                    <div className="d-flex" style={{marginBottom: "1rem", alignItems: "center", width: "100%"}}>
                        <div className="subParaimg">
                            <img src="/image/T2.png" alt="" />
                        </div>
                        <p>Google Science Fair</p>
                    </div>
                    <div className="d-flex" style={{marginBottom: "1rem", alignItems: "center", width: "100%"}}>
                        <div className="subParaimg">
                            <img src="/image/T3.png" alt="" />
                        </div>
                        <p>LEGO EV3 Kit</p>
                    </div>
                    <div className="d-flex" style={{marginBottom: "0px", alignItems: "center", width: "100%"}}>
                        <div className="subParaimg">
                            <img src="/image/T4.png" alt="" />
                        </div>
                        <p>Goodies</p>
                    </div>
                </div>
                <div className="winnerListBox">
                    <img src="/image/winnerIcon.png" alt="" />
                    <img src="/image/crown.png" className='CrownImg' alt="" />
                    <h4>WINNER</h4>
                    <div className="d-flex" style={{marginBottom: "1rem", alignItems: "center", width: "100%"}}>
                        <div className="subParaimg">
                            <img src="/image/airplaneff.png" alt="" />
                        </div>
                        <p>Trip to The Great Barrier Reef, Australia</p>
                    </div>
                    <div className="d-flex" style={{marginBottom: "1rem", alignItems: "center", width: "100%"}}>
                        <div className="subParaimg">
                            <img src="/image/T1.png" alt="" />
                        </div>
                        <p>World Robot Olympiad</p>
                    </div>
                    <div className="d-flex" style={{marginBottom: "1rem", alignItems: "center", width: "100%"}}>
                        <div className="subParaimg">
                            <img src="/image/T2.png" alt="" />
                        </div>
                        <p>Google Science Fair</p>
                    </div>
                    <div className="d-flex" style={{marginBottom: "1rem", alignItems: "center", width: "100%"}}>
                        <div className="subParaimg">
                            <img src="/image/T3.png" alt="" />
                        </div>
                        <p>LEGO EV3 Kit</p>
                    </div>
                    <div className="d-flex" style={{marginBottom: "0px", alignItems: "center", width: "100%"}}>
                        <div className="subParaimg">
                            <img src="/image/T4.png" alt="" />
                        </div>
                        <p>Goodies</p>
                    </div>
                </div>
                <div className="winnerListBox">
                    <img src="/image/winnerIcon.png" alt="" />
                    <img src="/image/crown2.png" className='CrownImg' alt="" />
                    <h4>3<sup>rd</sup> WINNER</h4>
                    <div className="d-flex" style={{marginBottom: "1rem", alignItems: "center", width: "100%"}}>
                        <div className="subParaimg">
                            <img src="/image/T2.png" alt="" />
                        </div>
                        <p>Google Science Fair</p>
                    </div>
                    <div className="d-flex" style={{marginBottom: "1rem", alignItems: "center", width: "100%"}}>
                        <div className="subParaimg">
                            <img src="/image/T3.png" alt="" />
                        </div>
                        <p>LEGO EV3 Kit</p>
                    </div>
                    <div className="d-flex" style={{marginBottom: "0px", alignItems: "center", width: "100%"}}>
                        <div className="subParaimg">
                            <img src="/image/T4.png" alt="" />
                        </div>
                        <p>Goodies</p>
                    </div>
                </div>
            </div>
            <div className="winner_list winner_listMobile" style={{height: "auto"}}>
            <div className="winnerListBox">
                    <img src="/image/winnerIcon.png" alt="" />
                    <img src="/image/crown.png" className='CrownImg' alt="" />
                    <h4>WINNER</h4>
                    <div className="d-flex" style={{marginBottom: "15px", alignItems: "center", width: "100%"}}>
                        <div className="subParaimg">
                            <img src="/image/airplaneff.png" alt="" />
                        </div>
                        <p>Trip to The Great Barrier Reef, Australia</p>
                    </div>
                    <div className="d-flex" style={{marginBottom: "15px", alignItems: "center", width: "100%"}}>
                        <div className="subParaimg">
                            <img src="/image/T1.png" alt="" />
                        </div>
                        <p>World Robot Olympiad</p>
                    </div>
                    <div className="d-flex" style={{marginBottom: "15px", alignItems: "center", width: "100%"}}>
                        <div className="subParaimg">
                            <img src="/image/T2.png" alt="" />
                        </div>
                        <p>Google Science Fair</p>
                    </div>
                    <div className="d-flex" style={{marginBottom: "15px", alignItems: "center", width: "100%"}}>
                        <div className="subParaimg">
                            <img src="/image/T3.png" alt="" />
                        </div>
                        <p>LEGO EV3 Kit</p>
                    </div>
                    <div className="d-flex" style={{marginBottom: "0px", alignItems: "center", width: "100%"}}>
                        <div className="subParaimg">
                            <img src="/image/T4.png" alt="" />
                        </div>
                        <p>Goodies</p>
                    </div>
                </div>
                <div className="winnerListBox">
                    <img src="/image/crown1.png" className='CrownImg' alt="" />
                    <img src="/image/winnerIcon.png" alt="" />
                    <h4>2<sup>nd</sup> WINNER</h4>
                    <div className="d-flex" style={{marginBottom: "15px", alignItems: "center", width: "100%"}}>
                        <div className="subParaimg">
                            <img src="/image/T1.png" alt="" />
                        </div>
                        <p>World Robot Olympiad</p>
                    </div>
                    <div className="d-flex" style={{marginBottom: "15px", alignItems: "center", width: "100%"}}>
                        <div className="subParaimg">
                            <img src="/image/T2.png" alt="" />
                        </div>
                        <p>World Science Fair</p>
                    </div>
                    <div className="d-flex" style={{marginBottom: "15px", alignItems: "center", width: "100%"}}>
                        <div className="subParaimg">
                            <img src="/image/T3.png" alt="" />
                        </div>
                        <p>LEGO EV3 Kit</p>
                    </div>
                    <div className="d-flex" style={{marginBottom: "0px", alignItems: "center", width: "100%"}}>
                        <div className="subParaimg">
                            <img src="/image/T4.png" alt="" />
                        </div>
                        <p>Goodies</p>
                    </div>
                </div>
              
                <div className="winnerListBox">
                    <img src="/image/winnerIcon.png" alt="" />
                    <img src="/image/crown2.png" className='CrownImg' alt="" />
                    <h4>3<sup>rd</sup> WINNER</h4>
                    <div className="d-flex" style={{marginBottom: "15px", alignItems: "center", width: "100%"}}>
                        <div className="subParaimg">
                            <img src="/image/T2.png" alt="" />
                        </div>
                        <p>Google Science Fair</p>
                    </div>
                    <div className="d-flex" style={{marginBottom: "15px", alignItems: "center", width: "100%"}}>
                        <div className="subParaimg">
                            <img src="/image/T3.png" alt="" />
                        </div>
                        <p>LEGO EV3 Kit</p>
                    </div>
                    <div className="d-flex" style={{marginBottom: "0px", alignItems: "center", width: "100%"}}>
                        <div className="subParaimg">
                            <img src="/image/T4.png" alt="" />
                        </div>
                        <p>Goodies</p>
                    </div>
                </div>
            </div>
            <div className="d-flex" style={{ width: "100%", alignItems: "center", justifyContent: "center", marginTop: "60px" }}>
                    <div className='LineDIvider'></div>
                    <div className='circulerDIvider'></div>
                    <h2 className='deadliestTrash'>Contact Information</h2>
                    <div className='circulerDIvider'></div>
                    <div className='LineDIvider'></div>
                </div>
            <div className="oceanSection10 oceanSection" ref={requestRef}>
                {/* <img src="/image/Section 12.png" alt="" /> */}
                <div className="IframeForm">

                    <iframe frameBorder="0" src='https://forms.zohopublic.in/ymeducation/form/WEAREHERETOHELPYOU/formperma/fJdJ9cqWzbcW6zDvD5iUr6vmq09O1oeC0K7fergsNYU/?SingleLine=Yme12344'></iframe>


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
    )
}

export default Registration