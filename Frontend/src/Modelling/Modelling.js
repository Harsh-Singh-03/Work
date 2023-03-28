import React from 'react'
import './Modelling.css'

const Modelling = () => {
    const Gigslist = [1, 1, 1, 1]
    return (
        <div className='TYM_Service'>
            <div className="nav-modelling">
                <i className="fa-solid fa-chevron-left" style={{ color: "#000" }}></i>
                <div className='d-flex'>
                    <i className="fa-solid fa-user"></i>
                    {/* <i style={{marginLeft: "16px"}} class="fa-solid fa-folder-magnifying-glass"> </i> */}
                    <img id='jobsearchIcon' src="/image/Job Seeker.png" alt="" />
                </div>
            </div>
            <div className="searchBar">
                <input type="text" id='search-model' placeholder='Search for a service' />
                <i id='search-btn' className="fas fa-magnifying-glass" style={{ fontWeight: "600" }}></i>
            </div>
            <div className="suggestionBar">
                <p style={{ fontWeight: "700", marginRight: "15px" }}>Suggested:</p>
                <p>Science</p>
                <p>Technology</p>
                <p>Engineering</p>
                <p>Arts</p>
                <p>Mathematics</p>
                <p>Other</p>
            </div>
            <div className="main-modelling-banner">
                <img id='banner-img' src="/image/ModellingBanner.png" alt="" />
                <h1 className='banner-head'>We make <br /> stuff <br /> happen</h1>
            </div>
            <div className="post-a-req">
                <p>SUBTITLE GOES HERE</p>
                <span>Get matched with sellers for your project.</span>
                <button>Get Match</button>
            </div>
            <div className="most-poplar-gigs">
                <div className="d-flex" style={{ alignItems: "center", width: "100%", justifyContent: "center" }}>
                    <div className="H-B"></div>
                    <h2>MOST POPULAR GIGS IN</h2>
                    <div className="H-B"></div>
                </div>
                <h1>3D Modelling</h1>
            </div>
            <div className="popular-gigs-list">
                {Gigslist.map((data, index) => {
                    return (
                        <div className='popular-gigs' key={index+data}>
                            <img id='model' src="/image/D-dumy.svg" alt="" />
                            <div className="d-flex seller-desc" style={{alignItems: "center", padding: "10px", borderBottom: "0.5px dashed #B3B9C9"}}>
                                <i className="fa-solid fa-user"></i>
                                <div>
                                    <p>Name</p>
                                    <p id="desc">Service </p>
                                </div>
                            </div>
                            <div className="d-flex pricing" style={{justifyContent: "space-between", padding: "15px", alignItems: "center"}}>
                                <p> 4.5</p>
                                <p style={{color: "#E04423"}}>5000</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="filter-sort">
                <div className='sort-btn'>Sort By</div>
            </div>
            <div className="popular-gigs-list">
                {Gigslist.map((data, index) => {
                    return (
                        <div className='popular-gigs' key={index+data}>
                            <img id='model' src="/image/D-dumy.svg" alt="" />
                            <div className="d-flex seller-desc" style={{alignItems: "center", padding: "10px", borderBottom: "0.5px dashed #B3B9C9"}}>
                                <i className="fa-solid fa-user"></i>
                                <div>
                                    <p>Name</p>
                                    <p id="desc">Service </p>
                                </div>
                            </div>
                            <div className="d-flex pricing" style={{justifyContent: "space-between", padding: "15px", alignItems: "center"}}>
                                <p> 4.5</p>
                                <p style={{color: "#E04423"}}>5000</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Modelling

