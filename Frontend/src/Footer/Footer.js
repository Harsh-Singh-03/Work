import React from 'react'
import "./Footr.css"
import Logo from '../image/TYMLOGO.png'
import {Link} from "react-router-dom"

export default function Footer() {
    const scrollToTop = ()=>{
        window.scrollTo(0, 0)
    }
  return (
    <div>
          <div className="footer">
              {/* footer navigation */}
                    <ul className="navigate">
                        {/* <h4>Navigate To</h4> */}
                        <li onClick={scrollToTop}><a href='https://theyoungminds.zohorecruit.in/jobs/Careers/' target="_blank" rel="noopener noreferrer">Career</a></li>
                        <li onClick={scrollToTop}><Link to="/about">About</Link></li>
                        <li onClick={scrollToTop}><Link to="/legals" className='toggleGrid'>Legals</Link></li>
                        {/* <li onClick={scrollToTop} className='website_para'><a href="http://register.theyoungminds.org/student-ambassador-program" target='_blank'>Student Ambassador</a></li> */}
                        <li onClick={scrollToTop} className='website_para'><a href="https://register.theyoungminds.org/affiliate-program" target='_blank'>Partner With Us</a></li>
                        {/* <li onClick={scrollToTop}><Link to="/services">Services</Link></li>
                        <li className='try' onClick={scrollToTop}><Link to="/conditions">Terms & Condition</Link></li>
                        <li className='toggle' onClick={scrollToTop}><Link to="/conditions">T & C</Link></li> */}
                    </ul>
                    {/* Footer intro */}
                    {/* <div className="shortIntro">
                        <img src={Logo} alt="" />
                        <h4>THE YOUNG MINDS</h4>
                        <p>Let's make education Equitable and Accessible for all</p>
                    </div> */}
                    <div className='blankLine'></div>
                    {/* Social Media Links */}
                    <div className="socialMedia">
                        {/* <h4>Follow Us</h4> */}
                        <a href="https://www.facebook.com/theyoungminds.org/" target="_blank" rel="noopener noreferrer"  style={{marginRight: "10px", color: "#000000"}}><i className="fab fa-facebook-f utility"></i></a>
                        <a href="https://www.instagram.com/theyoungminds.community/?igshid=YmMyMTA2M2Y%3D" target="_blank" rel="noopener noreferrer" style={{marginRight: "10px", color: "#000000"}}><i className="fab fa-instagram utility"></i></a>
                        <a href="https://twitter.com/theyoungminds_" target="_blank" rel="noopener noreferrer" style={{marginRight: "10px", color: "#000000"}}><i className="fab fa-twitter utility"></i></a>
                    </div>
                </div>
                <span className='copyright'>&copy; 2022 Theyoungminds all rights reserved.</span>
            <div className="newfooter">
                <p className='website_para' style={{marginBottom: "0px"}}>&copy; 2022 Theyoungminds all rights reserved.</p>
                <div className="navigationorurl">
                        <p onClick={scrollToTop} className='website_para'><a href='https://theyoungminds.zohorecruit.in/jobs/Careers/' target="_blank" rel="noopener noreferrer">Career</a></p>
                        <p onClick={scrollToTop} className='website_para'><Link to="/about">About</Link></p>
                        <p onClick={scrollToTop} className='website_para'><Link to="/legals">Legals</Link></p>
                        {/* <p onClick={scrollToTop} className='website_para'><a href="http://register.theyoungminds.org/student-ambassador-program" target='_blank'>Student Ambassador</a></p> */}
                        <p onClick={scrollToTop} className='website_para'><a href="https://register.theyoungminds.org/affiliate-program" target='_blank'>Partner With Us</a></p>
                        <div className="dashBlank"></div>
                        <a href="https://www.facebook.com/theyoungminds.org/" target="_blank" rel="noopener noreferrer"  style={{marginRight: "20px"}}><i className="fab fa-facebook-f utility"></i></a>
                        <a href="https://www.instagram.com/theyoungminds.community/?igshid=YmMyMTA2M2Y%3D" target="_blank" rel="noopener noreferrer" style={{marginRight: "20px"}}><i className="fab fa-instagram utility"></i></a>
                        <a href="https://twitter.com/theyoungminds_" target="_blank" rel="noopener noreferrer" style={{marginRight: "20px"}}><i className="fab fa-twitter utility"></i></a>
                </div>

            </div>
    </div>
  )
}
