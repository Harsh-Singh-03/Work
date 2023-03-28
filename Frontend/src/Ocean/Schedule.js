import React, { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import ScheduleList from './Schedule.json'

const Schedule = () => {
    const History = useHistory()
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, [])
    const pushbacktohome = () => {
        History.push('/the-minds-day')
    }
    return (
        <div className='MindsDay'>
            <div className="oceanNavigation" style={{ position: "absolute" }}>
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
            <div className="exactDate">
                {/* <div style={{ display: "grid", placeItems: "center" }}>
                    <img src="/image/logo.png" alt="" />
                    <h2>THE MINDS DAY</h2>
                </div> */}
                <div className="schedule1" style={{ marginBottom: "2rem" }}>
                    <img src="/image/Schedule-Bg.png" id='scheduleBG1' alt="" />
                    <h1 className='deskh1'>Full Day <br /> Schedule</h1>
                    <h1 className='mobileh1'>Full Day Schedule</h1>
                    <Link to="/the-minds-day/grab-your-seat" style={{ textDecoration: "none" }}> <button>Book Ticket</button></Link>
                    {/* <button>Book Ticket</button> */}
                </div>
                <div className="middleLine"></div>
                <div className="eventDetail eventDetail1" style={{ flexDirection: "column" }}>
                    <div className="boxdestail boxdestail1 boxdestail2">
                        <span>Location</span>
                        <p>India Tour</p>
                    </div>
                    <div className="boxdestail boxdestail1 boxdestail2">
                        <span>Starting From</span>
                        <p>7<sup style={{fontWeight: "400", textTransform: "lowercase"}}>th</sup> JAN, 2023</p>
                    </div>
                    <div className="boxdestail boxdestail1 boxdestail2" style={{ marginRight: "" }}>
                        <span>STARTS AT</span>
                        <p>9:00 A.M</p>
                    </div>
                </div>
            </div>
            {/* <div className="exactDate">
                <div style={{ display: "grid", placeItems: "center" }}>
                    <img src="/image/logo.png" alt="" />
                    <h2>THE MINDS DAY</h2>
                </div>
                <div className="middleLine"></div>
                <div className="eventDetail eventDetail1" style={{ flexDirection: "column" }}>
                    <div className="boxdestail boxdestail1">
                        <span>Location</span>
                        <p>Kolkata</p>
                    </div>
                    <div className="boxdestail boxdestail1">
                        <span>STarting From</span>
                        <p>7<sup style={{fontWeight: "400", textTransform: "lowercase"}}>th</sup> jan, 2023</p>
                    </div>
                    <div className="boxdestail boxdestail1" style={{ marginRight: "" }}>
                        <span>Starting at</span>
                        <p>9:00 Am</p>
                    </div>
                </div>
            </div> */}
            {/* <div className="schedule" style={{marginBottom: "2rem"}}>
                <img src="/image/Schedule-Bg.png" id='scheduleBG' alt="" />
                <h1>Full Day <br /> Schedule</h1>
               <Link to="/the-minds-day/grab-your-seat" style={{textDecoration: "none"}}> <button>Book Ticket</button></Link>
            </div> */}
            <div className="dashedBorder1"></div>
            <div className="d-flex" style={{ justifyContent: "center" }}>
                <div className="scheduleBox">
                    <img src="/image/Underwater2.webp" alt="" />
                    <h4>The Ocean Challenge</h4>
                    <p>Location</p>
                    <div className="sectionDeviderforschedule"></div>
                    <h4 id='h4-copy'>9:00 AM - 7:00 PM</h4>
                    <p>Duration</p>
                </div>
            </div>
            <div className="scheduleBoxDom">
                {ScheduleList.map((data, index) => {
                    return (
                        <div className="scheduleBox" key={index} style={{ marginLeft: index + 1 % 2 ? "3%" : "0px" }}>
                            <img src={data.img} alt="" />
                            <h4>{data.name}</h4>
                            <p>Location</p>
                            <div className="sectionDeviderforschedule"></div>
                            <h4 id='h4-copy'>{data.time}</h4>
                            <p>Duration</p>
                        </div>
                    )
                })}
            </div>
            <div className="dashedBorder1"></div>
        </div>
    )
}

export default Schedule


