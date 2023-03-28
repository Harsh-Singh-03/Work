import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Mindsday.css'
import Ticket from './Ticket.json'
import "./Responsive_MindsDay.css"
const Mindsday = () => {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}, [])
  return (
    <div className='MindsDay'>
      <div className="oceanNavigation" style={{position: "absolute"}}>
        <div className="oceanNavigation1">
          <div className="BrandLOGO d-flex" style={{ alignItems: "flex-end" }} >
            <img src="/image/TYMLOGO.png" alt="" />
            <h4 className='gradientHead'>THE MINDS DAY</h4>
          </div>
          <div className="d-flex">
            {/* <button onClick={()=> scrollToPrev(requestRef)}>Request A Call Back</button> */}
            <Link to='/ocean-challenge/passcode' style={{ textDecoration: "none", color: "#fff" }}>Log In</Link>
          </div>
        </div>
      </div>
      <div className="mainVideo">
        <video loop autoPlay muted>
          <source src="/image/videotest.mp4" type="video/mp4" />
          {/* <img src="/image/Underwater2.webp" alt="" /> */}
        </video>
      </div>
      <div className="exprienceThefuture">
        <div className="Headingss">
          <h4>Experience The Future</h4>
          <h1>The Minds Day</h1>
        </div>
        <p className='website_para' style={{ margin: "1rem 0px" }}>Explore the ocean of opportunities at India's one of it's kind - collabarative and cohersive sustainable drive. We at The Young Minds strive everyday to ignite a passion for Science, Technology, Engineering, Arts and Mathematics (STEAM).
        </p>
        <div className="eventDetail">
          <div className="boxdestail">
            <span>Location</span>
            <p>Kolkata</p>
          </div>
          <div className="boxdestail">
            <span>STARTING FROM </span>
            <p>7<sup style={{fontWeight: "400", textTransform: "lowercase"}}>th</sup> JAN, 2023</p>
          </div>
          <div className="boxdestail" style={{ marginRight: "" }}>
            <span>STARTS AT</span>
            <p>9:00 A.M</p>
          </div>
        </div>
        <div className="d-flex" style={{ alignItems: "center", justifyContent: "center" }}>
          <Link to='/the-minds-day/grab-your-seat' style={{textDecoration: "none"}}><button>BOOK TICKET</button></Link>
          <Link to='/the-minds-day/schedule' style={{ textDecoration: "none" }}><button className='fillmode'>VIEW FULL DAY SCHEDULE</button></Link>
        </div>
      </div>
      <div className="schedule">
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
      <div className="TicketSections">
        <div className="dashedBorder"></div>
        <div className="eventimingDection">
          <div style={{ display: "grid", placeItems: "center" }}>
            <div className="d-flex" style={{ alignItems: "center" }}>
              <p>Learn</p>
              <p>Build</p>
              <p style={{ border: "none" }}>Compete</p>
            </div>
            <h1>11 EVENTS IN {24 / 2} HOURS</h1>
          </div>
        </div>
        <div className="underwatersection">
          <img src="/image/Underwater2.webp" alt="" />
          <div className="MainTitle">
            <p>Let's Dive deep to explore</p>
          </div>
          <div className="underwaterdetails">
            <div>
              <h4>The Ocean Challenge</h4>
              {/* <h4>Challenge</h4> */}
              <div className='someextradash'></div>
              <p>Participate Now</p>
              <span>#Live</span>
            </div>
            <div className="funcbtnsss">
              <Link to='/ocean-challenge' style={{ textDecoration: "none" }}><button>More Info</button></Link>
              <Link to='/ocean-challenge/registration' style={{ textDecoration: "none" }}><button id='newbuttom'>Buy Now</button></Link>
            </div>
          </div>
        </div>
        <div className="realticketDOM">
          {Ticket.map((data, index) => {
            return (
              <div className="realTicket" key={index} style={{ marginRight: (index + 1) % 2 ? "5%" : "0px" }}>
                <img src={data.img} alt="" />
                <div>
                  <h4>{data.Title}</h4>
                  <h4>{data.Title1}</h4>
                  <div className='someextradashh'></div>
                  <p>Participate Now</p>
                  <span>#Live</span>
                </div>
                <div className="funcbtnticket">
                  <Link to={`/the-minds-day/${data.slug}`} style={{ textDecoration: "none" }}><button style={{ background: (index + 1) % 2 ? "rgba(255, 255, 255, 0.38)" : "rgba(0, 0, 0, 0.38)" }}>More Info</button></Link>
                  <a href={data.Link} target="_blank" style={{ textDecoration: "none" }}><button className='newbuttom'>Buy Now</button></a>
                </div>
              </div>
            )
          })}
        </div>
        <div className="dashedBorder"></div>
        <div className="ourquote newquote">
          <div className="para homeQuote">
            <i className="fas fa-solid fa-quote-left"></i>
            <div>
              <p style={{ color: "#e04935", marginBottom: "0px" }}>We are ready to celebrate Nation's promising & bright future together. <br /> </p>
              <p>With more than 1,00,000+ minds together</p></div>
            <i className="fas fa-solid fa-quote-right newi"></i>
          </div>
        </div>
      </div>
      <div className="ComingUrCity">
        <img src="/image/Kolkata.webp" alt="" />
        <div className="headingOfcity">
          <div className="nextLoaction">
            <div className="d-flex" style={{ alignItems: "center", width: "100%", justifyContent: "space-between" }}>
              <div className="dashededLeftLine"></div>
              <h1>Happening Next</h1>
              <div className="dashededLeftLine"></div>
            </div>
            <h3 className='' style={{ fontWeight: "600", color: "#fff", textAlign: "center" }}>We are coming to your city</h3>
          </div>
        </div>
      </div>
      <div className="eventDetail" style={{ width: "80%", marginLeft: "10%", justifyContent: "center" }}>
        <div className="boxdestail">
          <span>Location</span>
          <p>Kolkata</p>
        </div>
        <div className="boxdestail">
          <span>Date</span>
          <p> 7<sup style={{fontWeight: "400", textTransform: "lowercase"}}>th</sup> JAN, 2023</p>
        </div>
        <div className="boxdestail" style={{ marginRight: "0px" }}>
          <span>Starts At</span>
          <p>9:00 A.M</p>
        </div>
      </div>
      <div className="grabYourSeat" style={{ display: "grid", placeItems: "center" }}>
        <Link to='/the-minds-day/grab-your-seat' style={{ textDecoration: "none" }}><button><img src="/image/button.gif" alt="" /> Grab Your Seat</button></Link>
      </div>
      <div className="instapostsection">
        <h2>The Young Minds Way</h2>
        <div className="d-flex" style={{ alignItems: "center", justifyContent: "center", marginTop: "2rem" }}>
          <img src="/image/logo.png" className='SDGoal SDGoal1' alt="" />
          <img src="/image/SDGoal.png" className='SDGoal' alt="" />
        </div>
        <div className="actualPost">
          <div className="Headerofpost">
            <div className="d-flex" style={{ alignItems: "center" }}>
              <div className="smallIcon">
                <img src="/image/logo.png" alt="" />
              </div>
              <span>theyoungminds.community</span>
            </div>
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </div>
          <div className="Igpostvideo">
            <video loop autoPlay muted>
              <source src="/image/IGPost.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="bottomofpost">
            <div className="d-flex" style={{ alignItems: "center" }}>
            <i className="fa-solid fa-heart" style={{color: "#f2003c"}}></i>
            <i className="fal fa-comment"></i>
            <i className="fal fa-paper-plane"></i>
            </div>
            <i className="fa-regular fa-bookmark" style={{margin: "0px"}}></i>
          </div>
          <p>1,218 Likes</p>
          <p className='descpp'> <strong>theyoungminds.community</strong> We are calling out all learners, educators, startups, professionals, <small style={{color: "#808080"}}>...more</small> </p>
        </div>
      </div>
      <div className="affiliate-program-section">
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
  )
}

export default Mindsday