import React, {useEffect} from 'react'
import { event } from 'react-ga'
import { Link, useParams, useHistory } from 'react-router-dom'
import Tickets from './Ticket.json'
const Event = () => {
    const History = useHistory()
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, [])
    const pushbacktohome = ()=>{
        History.push('/the-minds-day')
    }
    const { id } = useParams()
    const TagList = ["Automative", "Banking", "Finance", "Education", "Food", "Gaming", "Health-Care", "Logistics", "Manufacturing", "Oil & Gas", "Real Estate", "Travel", "Telecom", "Retail", "Marketing"]
    return (
        <div className='MindsDay'>
            {Tickets.map((data, index) => {
                return (
                    <>
                        {data.slug === id && (
                            <div key={index}>
                                <div className="oceanNavigation" style={{position: "absolute"}}>
                                    <div className="oceanNavigation1">
                                        <div className="BrandLOGO d-flex" onClick={pushbacktohome} style={{ alignItems: "flex-end", cursor: "pointer" }}>
                                            <img src="/image/TYMLOGO.png" alt="" />
                                            <h4 className='gradientHead'>THE MINDS DAY</h4>
                                        </div>
                                        <div className="d-flex">
                                            {/* <button onClick={()=> scrollToPrev(requestRef)}>Request A Call Back</button> */}
                                            <Link to='/ocean-challenge/passcode' style={{ textDecoration: "none", color: "#fff" }}>Log In</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="mainVideo mainBanner">
                                    <img src="/image/EventBG.webp" alt="" />
                                    <div className="textinimg">
                                        <p>Participate Now</p>
                                        <span>#Live</span>
                                    </div>
                                </div>
                                <div className="exprienceThefuture exprienceThefutureanother">
                                    <div className="Headingss Headingsss">
                                        <h4>Experience The Future</h4>
                                        <h1>{data.name}</h1>
                                    </div>
                                    <p className='website_para' style={{ margin: "1rem 0px" }}>{data.para}
                                    </p>
                                    <div className="eventDetail">
                                        <div className="boxdestail">
                                            <span>Location</span>
                                            <p>Kolkata</p>
                                        </div>
                                        <div className="boxdestail">
                                            <span>STARTING FROM </span>
                                            <p>7th JAN, 2023</p>
                                        </div>
                                        <div className="boxdestail" style={{ marginRight: "" }}>
                                            <span>STARTS AT</span>
                                            <p>9:00 A.M</p>
                                        </div>
                                    </div>
                                    <div className="d-flex" style={{ alignItems: "center", justifyContent: "center" }}>
                                        <a href={data.Link} target='_blank'><button>BOOK TICKET</button></a>
                                        <Link to='/the-minds-day/schedule' style={{ textDecoration: "none" }}><button className='fillmode'>VIEW FULL DAY SCHEDULE</button></Link>
                                    </div>
                                </div>
                        
                                <div className="TicketSections" style={{marginTop: "6rem"}}>
                                    <div className="dashedBorder dashedBorder1"></div>
                                    <div className="eventimingDection">
                                        <div style={{ display: "grid", placeItems: "center" }}>
                                            <div className="d-flex" style={{ alignItems: "center" }}>
                                                <p>Learn</p>
                                                <p>Build</p>
                                                <p style={{ border: "none" }}>Compete</p>
                                            </div>
                                            <h1>SECTOR FOCUs</h1>
                                        </div>
                                    </div>
                                    <div className="boxestags">
                                        {TagList.map((item, index) => {
                                            return (
                                                <div className="tagbox" key={index}>
                                                    {item}
                                                </div>
                                            )
                                        })}

                                    </div>
                                    <div className="dashedBorder"></div>
                                    <div className="schedule" style={{marginBottom: "0px"}}>
                                    <img src="/image/Schedule-Bg.png" id='scheduleBG' alt="" />
                                    <h1>Connect <br /> With us</h1>
                                    <div className="d-flex" style={{ width: "70%", justifyContent: "space-evenly" }}>

                                        <a className="circleBox circleBoxBorder1" href='https://Wa.me/+918910540012' target='_blank' style={{ textDecoration: "none", color: "#000" }}>
                                            <img src="/image/wp.gif" alt="" />
                                            <p>Connect on Whatsapp</p>
                                        </a>
                                        <div className='circleBox1'></div>

                                        <a href='mailto:connect@theyoungminds.org' target='_blank' className="circleBox circleBoxBorder2" style={{ textDecoration: "none", color: "#000" }}>
                                            <img src="/image/mail.gif" alt="" />
                                            <p>Email Us Now</p>
                                        </a>
                                        <div className='circleBox1'></div>
                                        <a href='tel:+91-8910540012' target="_blank" style={{ textDecoration: "none", color: "#000" }} className="circleBox">
                                            <img src="/image/call.gif" alt="" />
                                            <p> Call Us Now</p>
                                        </a>

                                    </div>
                                </div>
                                </div>
                                <div className="affiliate-program-section" style={{marginTop: "1rem"}}>
                                    <div style={{ display: 'grid', placeItems: "center", minWidth: "40%" }}>
                                        <img src="/image/logo.png" alt="" />
                                        <h1 style={{ marginBottom: "0px" }}>The Minds Day</h1>

                                    </div>
                                    <div className="join_our_program">
                                        <h2>Become an affiliate</h2>
                                        <p className='website_para' >Earn some sweet cash with The Young MInds & become an affiliate and earn <strong>10% commissions</strong> on every ticket sold with your unique link.</p>
                                        <a href='https://register.theyoungminds.org/affiliate-program' target='_blank' style={{ textDecoration: "none" }}> <button>Start Your Journey</button></a>
                                    </div>
                                    <div>

                                    </div>
                                </div>
                            </div>
                        )}
                    </>
                )
            })}

        </div>
    )
}

export default Event
