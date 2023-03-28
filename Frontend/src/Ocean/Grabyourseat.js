import React, {useEffect} from 'react'
import { Link, useHistory } from 'react-router-dom'
const Grabyourseat = () => {
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
  return (
    <div className='MindsDay'>
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

            <div className="exactDate">
                {/* <div style={{ display: "grid", placeItems: "center" }}>
                    <img src="/image/logo.png" alt="" />
                    <h2>THE MINDS DAY</h2>
                </div> */}
                   <div className="schedule1" style={{marginBottom: "2rem"}}>
                <img src="/image/Schedule-Bg.png" id='scheduleBG1' alt="" />
                <h1 className='deskh1'>Grab Your<br /> Seats</h1>
                <h1 className='mobileh1'>Grab Your Seats</h1>
                <p>experience the future</p>
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
            {/* <div className="schedule" style={{marginBottom: "2rem"}}>
                <img src="/image/Schedule-Bg.png" id='scheduleBG' alt="" />
                <h1>Grab Your <br /> Seat</h1>
            
            </div> */}
            <div className="dashedBorder1"></div>
            <div className="d-flex somemycode" style={{alignItems: "center", justifyContent: "space-between", width: "calc(100% - 60px)" , marginLeft: "30px"}}>
                <h4 className='dropdownGYS'>Kolkata</h4>
                <i className="fa-solid fa-minus dropdownGYSI"></i>
            </div>
            <table id='Passtable'>
                <thead>
                    <tr>
                        <th>Tickets</th>
                        <th style={{textAlign: "center"}}>Price</th>
                        <th style={{textAlign: "end" }}>Buy Now</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>General Pass -</strong><br />Ground Access</td>
                        <td style={{textAlign: "center"}}>&#x20b9; 1499.00</td>
                        <td style={{textAlign: "end" }}><a href="https://rzp.io/l/mGpkFWZ" target='_black' >Checkout</a></td>
                    </tr>
                    <tr>
                        <td><strong>Student Pass -</strong><br />Ground Access</td>
                        <td style={{textAlign: "center"}}>&#x20b9; 999.00</td>
                        <td style={{textAlign: "end" }}><a href="https://rzp.io/l/IGKAA0RWp" target='_blank'>Checkout</a></td>
                    </tr>
                    <tr>
                        <td><strong>StartUp Pass -</strong><br />All Access</td>
                        <td style={{textAlign: "center"}}>&#x20b9; 2499.00</td>
                        <td style={{textAlign: "end" }}><a href="https://rzp.io/l/qlgoqbKn" target='_blank'>Checkout</a></td>
                    </tr>
                    <tr>
                        <td><strong>Educator Pass -</strong><br />All Access</td>
                        <td style={{textAlign: "center"}}>&#x20b9; 1999.00</td>
                        <td style={{textAlign: "end" }}><a href="https://rzp.io/l/o3L78Hkofp" target="_blank">Checkout</a></td>
                    </tr>
                    <tr>
                        <td><strong>Parents Pass -</strong><br />All Access</td>
                        <td style={{textAlign: "center"}}>&#x20b9; 1499.00</td>
                        <td style={{textAlign: "end" }}><a href="https://rzp.io/l/tunCLHSep" target='_blank'>Checkout</a></td>
                    </tr>
                    <tr>
                        <td><strong>All Access Pass -</strong><br />All Access-with cover</td>
                        <td style={{textAlign: "center"}}>&#x20b9; 5000.00</td>
                        <td style={{textAlign: "end" }}><a href="https://rzp.io/l/WLFf3F0D3" target="_blank">Checkout</a></td>
                    </tr>
                </tbody>
            </table>
            <div className="dashedBorder1"></div>
            <div className="d-flex somemycode" style={{alignItems: "center", justifyContent: "space-between", width: "calc(100% - 60px)" , marginLeft: "30px"}}>
                <h4 className='dropdownGYS'>Delhi</h4>
                <i className="fa-solid fa-plus dropdownGYSI"></i>
            </div>
            <div className="dashedBorder1"></div>
            <div className="d-flex somemycode" style={{alignItems: "center", justifyContent: "space-between", width: "calc(100% - 60px)" , marginLeft: "30px"}}>
                <h4 className='dropdownGYS'>Bombay</h4>
                <i className="fa-solid fa-plus dropdownGYSI"></i>
            </div>
            <div className="dashedBorder1"></div>
            <div className="d-flex somemycode" style={{alignItems: "center", justifyContent: "space-between", width: "calc(100% - 60px)" , marginLeft: "30px"}}>
                <h4 className='dropdownGYS'>Bangalore</h4>
                <i className="fa-solid fa-plus dropdownGYSI"></i>
            </div>
            <div className="dashedBorder1"></div>
            <div className="d-flex somemycode" style={{alignItems: "center", justifyContent: "space-between", width: "calc(100% - 60px)" , marginLeft: "30px"}}>
                <h4 className='dropdownGYS'>Hyderabad</h4>
                <i className="fa-solid fa-plus dropdownGYSI"></i>
            </div>
            <div className="dashedBorder1"></div>
            <div className="d-flex somemycode" style={{alignItems: "center", justifyContent: "space-between", width: "calc(100% - 60px)" , marginLeft: "30px"}}>
                <h4 className='dropdownGYS'>Chennai</h4>
                <i className="fa-solid fa-plus dropdownGYSI"></i>
            </div>
            <div className="dashedBorder1"></div>
            <div className="d-flex somemycode" style={{alignItems: "center", justifyContent: "space-between", width: "calc(100% - 60px)" , marginLeft: "30px"}}>
                <h4 className='dropdownGYS'>Ahmedabad</h4>
                <i className="fa-solid fa-plus dropdownGYSI"></i>
            </div>
            <div className="dashedBorder1"></div>
            <div className="d-flex somemycode" style={{alignItems: "center", justifyContent: "space-between", width: "calc(100% - 60px)" , marginLeft: "30px"}}>
                <h4 className='dropdownGYS'>Jaipur</h4>
                <i className="fa-solid fa-plus dropdownGYSI"></i>
            </div>
            <div className="dashedBorder1"></div>
            <div className="d-flex somemycode" style={{alignItems: "center", justifyContent: "space-between", width: "calc(100% - 60px)" , marginLeft: "30px"}}>
                <h4 className='dropdownGYS'>Pune</h4>
                <i className="fa-solid fa-plus dropdownGYSI"></i>
            </div>
            <div className="dashedBorder1"></div>
            <div className="d-flex somemycode" style={{alignItems: "center", justifyContent: "space-between", width: "calc(100% - 60px)" , marginLeft: "30px"}}>
                <h4 className='dropdownGYS'>Indore</h4>
                <i className="fa-solid fa-plus dropdownGYSI"></i>
            </div>
            <div className="dashedBorder1"></div>
            <div className="d-flex somemycode" style={{alignItems: "center", justifyContent: "space-between", width: "calc(100% - 60px)" , marginLeft: "30px"}}>
                <h4 className='dropdownGYS'>Lucknow</h4>
                <i className="fa-solid fa-plus dropdownGYSI"></i>
            </div>
            <div className="dashedBorder1"></div>
            </div>
  )
}

export default Grabyourseat