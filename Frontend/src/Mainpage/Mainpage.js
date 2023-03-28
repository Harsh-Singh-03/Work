import React from 'react'
import "./Mainpage.css"
import { useState} from 'react'
import { Link } from 'react-router-dom'

export default function Mainpage(props) {
    const toggleDisplay= props.toggleDisplay;
    const display = props.display;
    const _display= props._display;
    const homeDisplayBtn= props.homeDisplayBtn;
    const headingDisplay = props.headingDisplay;
    const buttonDisplay =props.buttonDisplay;
    const buttonDisplay_store= props.buttonDisplay_store
    const buttonDisplay_service= props.buttonDisplay_service
    const Descpara = props.Descpara;
    const [linking, setlinking] = useState("services")
    const [linking1, setlinking1] = useState("services")
    const [disabled, setdisabled] = useState(true)
    const [disabled1, setdisabled1] = useState(true)
    const toggleLink = (event) => {
        setdisabled(event.target.value === "services" ? true : false)
       setlinking(event.target.value)
    }
    const toggleSelection = (event) =>{
        setdisabled1(event.target.value === "select_cateogry" ? true : false)
        setlinking1(event.target.value)
    }
    return (
        <div>
            {/* Landing page content taken from props form each pages to change accordingly*/}
            <div className="sectionAbout">
                <div className="imgContainer">
                <img src={props.img} alt="loading" />
                </div>
                <div className="squareDOM"><div className="innerSquare"><div className="boxSquare"></div></div></div>
                <div className="contentAbout">
                    <h3 className='title'>{props.title}</h3>
                    <div className="midHeading">
                        <div className='square'></div>
                        <h4>{props.midHeading}</h4>
                        <h2 className="heading">{props.companyName}</h2>
                        <h2 style={{display: headingDisplay}} className="heading">{props.LibraryDetail}</h2>
                        <h2 style={{display: headingDisplay}}className="heading">{props.LibraryDetails}</h2>
                        <h2 className='heading shadowheading'>{props.purpose}</h2>
                        <h4>{props.community}</h4>
                        <p style={{display: toggleDisplay}}>{Descpara}</p>
                        <div className="inputDOM" style={{display: display}}>
                        <select name="dropdownCat" id="dropdownCat" className='dropdownCat1' onChange= {toggleSelection} >
                            <option value="select_cateogry">Select Category</option>
                            <option value="https://store.theyoungminds.org/collections/3d-printers" >3D Printers</option>
                            <option value="https://store.theyoungminds.org/collections/accessories">Accessories</option>
                            <option value="https://store.theyoungminds.org/">All Categories</option>
                        </select>
                        <span className="fas fa-angle-down dropDownArrow"></span>
                    </div>
                        <div className="service-inputDOM inputDOM" style={{display: _display}}>
                        <select name="dropdownCat" id="dropdownCat" className='dropdownCat1' onChange= {toggleLink}>
                            <option value="services">Select Category</option>
                            <option value="/order3d">Addictive Manufacturing</option>
                            <option value="https://zfrmz.in/vnNizJBwnyWUZbhywvzF">3D Modelling</option>
                            <option value="https://zfrmz.in/Nd24nchirZkqEWrWd9B9">Fix Your Printer</option>
                        </select>
                        <span className="fas fa-angle-down dropDownArrow"></span>
                    </div>
                        <a href= {props.btnLink} target="_blank" rel="noopener noreferrer"><button className='normalButton' style={{display:buttonDisplay }}>{props.btnText}</button></a>

                        <Link to= "/homeblog"><button style={{display: homeDisplayBtn }} className='normalButton'>Explore More</button></Link>
                      
                  <button style={{display:buttonDisplay_store }} disabled={disabled === true } className="dropdownButton" ><a className='servicebtnwithdisable' href= {linking} target="_blank" rel="noopener noreferrer" >{props.btnText}</a></button>
                  <button style={{display:buttonDisplay_service }} disabled={disabled1 === true } className="dropdownButton"><a className='servicebtnwithdisable' href= {linking1} target="_blank" rel="noopener noreferrer" >{props.btnText}</a></button>
                        
                    </div>
                </div>
                <div className="para">
                    <i className="fas fa-solid fa-quote-left"></i>
                    <p>We’re on a mission towards global sustainable development goal for making education Equitable & Accessible</p>
                    <i className="fas fa-solid fa-quote-right"></i>
                </div>
            </div>
            <div className="blank"></div>
        </div>
    )
}

