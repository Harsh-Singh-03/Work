import React, { useState, useEffect } from 'react'
import Teamlist from "./Team.json"
import Mainpage from '../Mainpage/Mainpage'
// import './responsiveAbout.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import AboutWallper from '../image/aboutWallpaper.png'
import Nav from "../Navbar/Nav";
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './About.css'
import Footer from '../Footer/Footer';
import { Helmet } from 'react-helmet';
const About = () => {
    const [Slider, setSlider] = useState(0)
    const [Slider1, setSlider1] = useState(0)
    const [movingLeft, setmovingLeft] = useState("18%")
    const [movingWidth, setmovingWidth] = useState("22%")
    const [anime_Idea, setanime_Idea] = useState("ideas_Knowlage")
    const [ideaHead, setideaHead] = useState("Introduction")
    const [serviceBtnLink, setserviceBtnLink] = useState("#")
    const [ideaImg, setideaImg] = useState("/image/Aboutlist (1).png")
    const [ideaPara, setideaPara] = useState(["We at Young Minds contribute to shaping how our world lives, works and plays – through next generation advancements in science, technology, engineering arts and mathematics."])
    useEffect(() => {
        if (Slider === 0) {
            toggleRangeBox()
        }
        if (Slider === 1) {
            toggleRangeBox1()
        }
        if (Slider === 2) {
            toggleRangeBox2()
        }
        if (Slider === 3) {
            toggleRangeBox3()
        }
    }, [Slider])
    const toggleRangeBox = () => {
        setideaHead("Introduction")
        setanime_Idea(anime_Idea === "anime_Idea" ? "ideas_Knowlage" : "anime_Idea")
        setideaPara(["We at Young Minds contribute to shaping how our world lives, works and plays – through next generation advancements in science, technology, engineering arts and mathematics."])
        setmovingLeft("18%")
        setmovingWidth("22%")
        setideaImg("/image/Aboutlist (1).png")
        setserviceBtnLink("#")
    }
    const toggleRangeBox1 = () => {
        setideaHead("QUALITY EDUCATION")
        setideaImg("/image/Aboutlist (4).png")
        setanime_Idea(anime_Idea === "anime_Idea" ? "ideas_Knowlage" : "anime_Idea")
        setideaPara(["1. Free primary & secondary education","2. Equal access to quality pre-primary education","3. Equal access to secondary, technical and vocational education","4. Skill based education","5. Eliminate discrimination in education","6. Universal literacy & numeracy","7. Global citizenship program","8. Increase the supply of qualified educators"])
        setmovingLeft("41%")
        setmovingWidth("46%")
        setserviceBtnLink("https://register.theyoungminds.org/designing")
    }
    const toggleRangeBox2 = () => {
        setideaImg("/image/Aboutlist (3).png")
        setideaHead("Industry, Innovation & Infrastructure")
        setideaPara(["1. Universal access to information & communication technology","2. Support technology development & industrial diversification","3. Promote inclusive & sustainable industrialisation","4. Develop sustainable, resilient and inclusive infrastructure","5. Enhance research and upgrade industrial technologies", "6. Facilitate sustainable infrastructure development",])
        setmovingLeft("62%")
        setanime_Idea(anime_Idea === "anime_Idea" ? "ideas_Knowlage" : "anime_Idea")
        setmovingWidth("67%")
        setserviceBtnLink("/order3d")
    }
    const toggleRangeBox3 = () => {
        setideaImg("/image/Aboutlist (2).png")
        setideaHead("Partnerships for the goal")
        setideaPara([ "1. Mobilise Rresources to improve domestic revenue collection","2. Invest in least developed countries","3. Knowledge sharing and cooperation for science, technology & innovation.", "4. Respect national leadership to implement policies for sustainable development.","5. Enhance the Global partnership for sustainable development","6. Strengthen the science, technology and innovation capacity","7. Enhance availability of reliable data.","8. Promote sustainable technologies globally.","9. Develop measurements of progress.","10. Enhance SDG capacity of developing countries.","11. Encourage effective partnerships."])
        setmovingLeft("94%")
        setanime_Idea(anime_Idea === "anime_Idea" ? "ideas_Knowlage" : "anime_Idea")
        setmovingWidth("100%")
        setserviceBtnLink("https://register.theyoungminds.org/casting")
    }
    const PrevIdea = () => {
        setSlider(Slider === 0 ? 3 : Slider - 1)
    }
    const NextIdea = () => {
        setSlider(Slider === 3 ? 0 : Slider + 1)
    }
    return (
        <>
        <Nav/>
        <Helmet>
        <title>The Young Minds</title>
        <meta
          name="description"
          content="Discover modern - day sciences, advanced technologies, engineering marvels, cognitive art and magical mathematics."
        />
        <meta
          name="keywords"
          content="Learning, Future, Marketplace"
        />
      </Helmet>
        <div className='About_DOM'>
               <Mainpage title="About Us" midHeading="Towards Global Sustainable Development : ___" companyName="Sustainable" purpose="Development" community="" display="none" img= "/image/aboutWallpaper.png" toggleDisplay="block" buttonDisplay="none" Descpara="We at Young Minds contribute to shaping how our world lives, works and plays – through next generation advancements in science, technology, engineering arts and mathematics." headingDisplay="none" _display="none" buttonDisplay_store="none" homeDisplayBtn="none" buttonDisplay_service="none" />
            <div className="HeadingSection sampleHeading" style={{ margin: "40px 72px" }}>
                {/* <div className="horizontalBar"></div> */}
                <div><h4>THE YOUNG MINDS WAY OF </h4><h1 className='Website_Heading' style={{ display: "inline" }}>Sustainable Development</h1></div>
            </div>
            <div className="showingRangeI">
                <div className='rangeImgbox' onClick={() => setSlider(0)} style={{ border: Slider === 0 ? "1px solid #51D015" : "none" }}><i className="far fa-play-circle"></i></div>
                <div className='rangeImgbox' onClick={() => setSlider(1)} style={{ border: Slider === 1 ? "1px solid #51D015" : "none" }}><img src="/image/E_WEB_04.png" alt="Designing" className='newimgforabout' /></div>
                <div className='rangeImgbox' onClick={() => setSlider(2)} style={{ border: Slider === 2 ? "1px solid #51D015" : "none" }}><img src="/image/E_WEB_09.png" alt="Manufacturing" className='newimgforabout' /></div>
                <div className='rangeImgbox' onClick={() => setSlider(3)} style={{ border: Slider === 3 ? "1px solid #51D015" : "none" }}><img src="/image/E_WEB_17.png" alt="casting" className='newimgforabout' /></div>
                <div className='originalRange'></div>
                <div className='actualRange' style={{ width: movingWidth }}></div>
                <img className='bulbMoving rocketmoving' style={{ left: movingLeft, top: "-50%" }} src="/image/Roket.png" alt="navigator" />
            </div>
            <div className="IdeasFoLife" style={{minHeight: "400px", marginBottom: "5%"}}>
                <div className="HeadingSection">
                    <div className="horizontalBar"></div>
                    <div><h4>Goal For</h4><h1 className='Website_Heading' style={{ display: "inline" }}>{ideaHead}</h1></div>
                </div>
                <div className="differentIdeas" style={{alignItems: "center"}}>
                    <div className="blankImgBox">
                        <img src={ideaImg} alt="stepping" />
                    </div>
                    <div className={anime_Idea}>
                        {/* <h4>{ideaHead}</h4> */}
                        {ideaPara.map((data, index)=>{
                            return (
                                <p style={{marginBottom: "0px", lineHeight: "145%"}} key={index}>{data}</p>


                            )
                        })}
                        {/* <div className="navigatingIdeas">
                            <i className="fas fa-chevron-left" onClick={PrevIdea}></i>
                            <a href={serviceBtnLink} target="_blank" style={{ display: Slider === 0 ? "none" : "block" }}><button>GET A QUOTE</button></a>
                            <button style={{ display: Slider === 0 ? "block" : "none" }} onClick={() => setSlider(1)}>GET STARTED</button>
                            <i className="fas fa-chevron-right" onClick={NextIdea}></i>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className="WhyTYM">

                <div className="HeadingSection sampleHeading" style={{ margin: "40px 72px", display: "flex", alignItems: "center" }}>
                    {/* <div className="horizontalBar"></div> */}
                    <img src="/image/unnamed 1.png" className='headinIMG' alt="" />
                    <div><h4>WHY</h4><h1 className='Website_Heading' style={{ display: "inline" }}>THE YOUNG MINDS</h1></div>
                </div>
                <div className="TYMans">
                    <div className='bLankImgBOX'>
                        <img src="/image/Vector.png" alt="" />
                    </div>
                    <div className="list">
                        <li className="website_para">Equal & accessible education.</li>
                        <li className="website_para">Universal literacy and numeracy.</li>
                    </div>
                </div>
                <div className="TYMans">
                    <div className='bLankImgBOX'>
                        <img src="/image/Vector (1).png" alt="" />
                    </div>
                    <div className="list">
                        <li className="website_para">Strengthen the science, technology and innovation.</li>
                        <li className="website_para">Capacity eliminate discrimination in education.</li>
                    </div>
                </div>
                <div className="TYMans">
                    <div className='bLankImgBOX'>
                        <img src="/image/Vector (2).png" alt="" />
                    </div>
                    <div className="list">
                        <li className="website_para">Universal access to information & communication technology.</li>
                        <li className="website_para">Enhance SDG capacity and global partnership for sustainable development.</li>
                    </div>
                </div>

            </div>
            <div className="wordsfromtym">
                <div className="HeadingSection sampleHeading" style={{ margin: "40px 72px", display: "flex", alignItems: "center" }}>
                    {/* <div className="horizontalBar1" style={{height: "100%"}}></div> */}
                    <div><h4>Words from</h4><h1 className='Website_Heading' style={{ display: "inline" }}>THE YOUNG MINDS</h1></div>
                </div>
                <div className="mainLeaderContainer">
                    <div className={Slider1 === 0 ? "mainDESCbox" : "mainDESCbox BoxAnime2"}>
                        <img src= {Slider1 === 0 ? "/image/UditSharma.jfif" : "/image/pradyuma.png" } alt="" />
                        <div className="detailDesignation">
                            <p style={{ fontWeight: "bold" }}>{Slider1 === 0 ? "Udit Sharma" : "Pradyuma Agarwal"}</p>
                            <p>President, The Young Minds</p>
                        </div>
                    </div>
                    <p className={Slider1 === 1 ? "mainLeaderContainer_P" : "mainLeaderContainer_P BoxAnime4"}>{Slider1 === 0 ? "We at Young Minds believe that everyone deserves same quality of education and make it affordable, or even free if possible. It will be an all in one platform for everything required to support S.T.E.A.M Education, for individual and institutions." : "As a Team Young Minds Leader, I am committed to building and bridging gaps in the ways we experience and learn Science, Technology, Engineering, Arts, and Technology."}</p>
                </div>
            </div>
            <div className="navigationICONTYM" >
                <i className="fas fa-long-arrow-alt-left" onClick={() => setSlider1(Slider1 === 1 ? 0 : 1)}></i>
                <i className="fas fa-long-arrow-alt-right" onClick={() => setSlider1(Slider1 === 1 ? 0 : 1)}></i>
            </div>
            <div className="gettoknowusdom">

                <div className="HeadingSection sampleHeading" style={{ margin: "40px 72px", display: "flex", alignItems: "center" }}>
                    {/* <div className="horizontalBar"></div> */}
                    <div><h4>GET TO KNOW US</h4><h1 className='Website_Heading' style={{ display: "inline" }}>OUR TEAM</h1></div>
                </div>
                <div className="CoolEvents" id='products'>
                    <OwlCarousel className='owl-theme' loop={true} dots={false} autoplay={true} nav={true} margin={0} autoplayTimeout={5000} slideBy={1} autoWidth={true} mouseDrag={true} touchDrag={true} pullDrag={true} autoplaySpeed={1000} navSpeed={1000} autoplayHoverPause={true}>
                        {Teamlist.map((data, index) => {
                            return (
                                <div className="mainDESCboxforteam" key={index}>
                                    <img src={data.image} alt="" />
                                    <div className="detailDesignation">
                                        <p style={{ fontWeight: "bold" }}>{data.name}</p>
                                        <p>{data.post}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </OwlCarousel>
                </div>
                <div className="join_our_community">
                    <a href='https://theyoungminds.zohorecruit.in/jobs/Careers/' target="_blank" rel="noopener noreferrer"><button>Careers</button></a>
                </div>

            </div>
        </div>
        <Footer/>
        </>
    )
}

export default About
