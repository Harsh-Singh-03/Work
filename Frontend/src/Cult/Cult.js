import React, { useEffect, useRef, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom';
import '../Modelling/Modelling.css'
import { Modal, Button } from 'react-bootstrap';
import './Cult.css'
import './ResponsiveProduct.css'
import './Utility.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import NoteContext from "../context/notes/Notecontext"
import Nav from '../Navbar/Nav';
import Footer from '../Footer/Footer';

const Cult = () => {
    const History = useHistory()
    const context = useContext(NoteContext)
    const { cultData, first, setfirst , second, cateList, setcateList, setdisplay1, display4, display2, fls, setFls, warning, setsortingVal, sortingVal } = context;


    const dropDownChange = (e) => {
        setcateList(e.target.value)
        setdisplay1("none")
        // setTimeout(() => { 
        cultData(e.target.value, sortingVal);
    }
    const CatRef = useRef(null)

    useEffect(() => {
        cultData("MOST POPULAR", sortingVal)
        if (cateList !== "MOST POPULAR") {
            cultData(cateList, sortingVal)
        }
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, [])

    const toggleCategory = (e, elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: "smooth"
        })
        // console.log(e)
        setcateList(e.target.innerText)
        setdisplay1("none")
        // console.log(e.target.dataset.id)
        // setTimeout(() => { 
        cultData(e.target.innerText, sortingVal)
        // }, 2000);
    }
    const toggleCategory1 = (e, elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: "smooth"
        })
        // console.log(e)
        setcateList(e.target.innerText.toUpperCase())
        setdisplay1("none")
        // console.log(e.target.dataset.id)
        // setTimeout(() => { 
        cultData(e.target.innerText.toUpperCase() === "ALL PRODUCT" ? "Allproduct" : e.target.innerText.toUpperCase(), sortingVal)
        // }, 2000);
    }

    const toggleSort = (e) =>{
        setsortingVal(e.target.value)
        if(e.target.value === "Low"){
            console.log(e.target.value)
            const sortedProducts = [...first].sort((a, b) => a.price - b.price);
            console.log(sortedProducts)
            setfirst(sortedProducts)
        }
        if(e.target.value === "High"){
            console.log(e.target.value)
            const sortedProducts = [...first].sort((a, b) => b.price - a.price);
            console.log(sortedProducts)
            setfirst(sortedProducts)
        }
        if(e.target.value === "New"){
            console.log(e.target.value)
            const sortedProducts = [...first].sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
            console.log(sortedProducts)
            setfirst(sortedProducts)
        }
    }
    useEffect(() => {
      console.log(first)
    }, [first])
    
    return (
        <>
            <Nav />
            <div className='threeD_PRODUCT'>
                <div className='cults_productDOM TYM_Service' >
                    <div id='pritable-service'>
                        <div className="nav-modelling">
                            <img id='brand-logo' src="/image/TYMLogo.png" alt="" />
                            <div className='d-flex'>
                                {/* <button>Start Selling</button> */}
                                <i className="fa-solid fa-user" onClick={() => History.push('/sign-in')}></i>
                                {/* <i style={{marginLeft: "16px"}} class="fa-solid fa-folder-magnifying-glass"> </i> */}
                                {/* <img id='jobsearchIcon' src="/image/Job Seeker.png" alt="" /> */}
                            </div>
                        </div>
                        <div className="searchBar">
                            <input type="text" id='search-model' placeholder='Search for a service' />
                            <i id='search-btn' className="fas fa-magnifying-glass" style={{ fontWeight: "600" }}></i>
                        </div>
                        <div className="suggestionBar">
                            <p style={{ fontWeight: "700", marginRight: "15px" }}>Suggested:</p>
                            <p onClick={(e) => toggleCategory1(e, CatRef)}>Science</p>
                            <p onClick={(e) => toggleCategory1(e, CatRef)}>Technology</p>
                            <p onClick={(e) => toggleCategory1(e, CatRef)}>Engineering</p>
                            <p onClick={(e) => toggleCategory1(e, CatRef)}>Arts</p>
                            <p onClick={(e) => toggleCategory1(e, CatRef)}>Mathematics</p>
                            <p onClick={(e) => toggleCategory1(e, CatRef)}>All Product</p>
                        </div>
                        <div className="main-modelling-banner">
                            <img id='banner-img' src="/image/ModellingBanner.png" alt="" />
                            <h1 className='banner-head'>Future technologies will drive <br /> <strong>Industry</strong></h1>
                        </div>
                        <div className="post-a-req">
                            <p>Post a request</p>
                            <span>Get matched with sellers for your project.</span>
                            <button>Coming Soon</button>
                        </div>
                    </div>
                    <div className="landingBanner pritable-service-d">
                        <div className="landingBannerTitle">
                            <h1 className='landingPageHeading1'>3D Printable</h1>
                            <h1 className='landingPageHeading'>FOR BETTER LEARNING</h1>
                        </div>
                        <img src="/image/productBanner.png" alt="banner" />
                    </div>
                    <div className="sectionDevider"></div>

                    <div className="otherProduct" style={{ marginBottom: "30px" }}>
                        <div className='productsForSection-M'>
                            <div className="most-poplar-gigs">
                                <div className="d-flex" style={{ alignItems: "center", width: "100%", justifyContent: "center" }}>
                                    <div className="H-B"></div>
                                    <h2>MOST POPULAR PRODUCT IN</h2>
                                    <div className="H-B"></div>
                                </div>
                                <h1>3D PRINTABLE</h1>
                            </div>
                            <div className="popular-gigs-list">
                                {second.map((data, index) => {
                                    return (
                                        <Link to={`/products/${data.slug}/${data.id}`} style={{ textDecoration: "none" }} key={index} >
                                            <div className="text3dflip">
                                                <div className='test_other_product_box'>
                                                    <img src={data.illustrationImageUrl} alt="product" />
                                                    <div className="boottomBarUnderImg" style={{ background: "#E04423" }}></div>
                                                    <div className="cult_option_display">
                                                        <h4 style={{ color: "#E04423" }}>&#8377;{data.price}</h4>
                                                        <h4 style={{ color: "#000000" }}>{data.name.slice(0, 20)}{data.name.length > 20 ? "..." : "."}</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="productsForSection productsForSection-d">
                            {/* . */}
                            <div className="derailsBanner">
                                <div className="productSectionHeadline" style={{ width: "auto" }}>
                                    <div className="faqhorizontalLine" style={{ background: "#E04423" }}></div>
                                    <h1 className='Website_Heading'>Most <br /> Popular</h1>
                                </div>
                                <p className='website_para'>Cool utilities and learning tools to 3D Print.</p>
                                {/* <button className='otherProductSectionBTN'>view more</button> */}
                            </div>
                            <div id="products">
                                <OwlCarousel className='owl-theme' loop={true} dots={true} autoplay={true} nav={true} margin={0} autoplayTimeout={5000} slideBy={1} autoWidth={true} mouseDrag={true} touchDrag={true} pullDrag={true} autoplaySpeed={1000} navSpeed={1000} autoplayHoverPause={true}>
                                    {second.map((data, index) => {
                                        return (
                                            <Link to={`/products/${data.slug}/${data.id}`} style={{ textDecoration: "none" }} key={index} >
                                                <div className="text3dflip">
                                                    <div className='test_other_product_box'>
                                                        <img src={data.illustrationImageUrl} alt="product" />
                                                        <div className="boottomBarUnderImg" style={{ background: "#E04423" }}></div>
                                                        <div className="cult_option_display">
                                                            <h4 style={{ color: "#E04423" }}>&#8377;{data.price}</h4>
                                                            <h4 style={{ color: "#000000" }}>{data.name.slice(0, 20)}{data.name.length > 20 ? "..." : "."}</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        )
                                    })}
                                </OwlCarousel>
                            </div>
                        </div>

                        <div className="sectionDevider"></div>

                    </div>
                    <div className="moreDetailedList">
                        <div className="navig-product" style={{ justifyContent: "space-between", width: "100vw", maxWidth: "1440px", alignItems: "center" }}>
                            <div className="d-flex" style={{ width: "auto", justifyContent: "flex-start" }}>
                                <div className="faqhorizontalLine" style={{ background: "#E04423" }}></div>
                                <h1 className='Website_Heading'>3D Printing</h1>
                            </div>
                            <div className="categoryDropDown">
                                <p>Category:</p>
                                <select name="dropdown" className='categoryDropDowndetail' onChange={dropDownChange}>
                                    <option value="MOST POPULAR">Select Category</option>
                                    <option value="SCIENCE" >Science</option>
                                    <option value="TECHNOLOGY">Technology</option>
                                    <option value="ENGINEERING">Engineering</option>
                                    <option value="ARTS">Arts</option>
                                    <option value="MATHEMATICS">Mathematics</option>
                                    <option value="MOST POPULAR">Most Popular</option>
                                </select>
                            </div>
                        </div>
                        <div className="filter-sort">
                            {/* <div className='sort-btn' style={{marginLeft: "0px"}}>Sort By</div> */}
                            <div className="categoryDropDown">
                                <select name="dropdown" className='categoryDropDowndetail' onChange={toggleSort}>
                                    <option value="MOST POPULAR">Sort By</option>
                                    <option value="Low" >Low to high</option>
                                    <option value="High">High to low</option>
                                    <option value="New">Newest First</option>
                                </select>
                            </div>
                            <div className='sort-btn' onClick={(e) => toggleCategory1(e, CatRef)}>Most Popular</div>
                            <div className='sort-btn' onClick={(e) => toggleCategory1(e, CatRef)}>Science</div>
                            <div className='sort-btn' onClick={(e) => toggleCategory1(e, CatRef)}>Technology</div>
                            <div className='sort-btn' onClick={(e) => toggleCategory1(e, CatRef)}>Engineering</div>
                            <div className='sort-btn' onClick={(e) => toggleCategory1(e, CatRef)}>Arts</div>
                            <div className='sort-btn' onClick={(e) => toggleCategory1(e, CatRef)}>Mathematics</div>
                            <div className='sort-btn' onClick={(e) => toggleCategory1(e, CatRef)}>All Product</div>
                        </div>
                        <div className="moreDetailedListView" ref={CatRef}>
                            <div className="MDCategory">
                                <h6>CategorIES</h6>

                                <ul className="category_d_product">

                                    <li data-id="MOST POPULAR" className={cateList === "MOST POPULAR" ? "cat_list_change" : "cat_list"} onClick={(e) => toggleCategory(e, CatRef)} ><p>MOST POPULAR</p><i className="fas fa-plus" style={{ pointerEvents: "none" }}></i>
                                    </li>
                                    <li data-id="science" className={cateList === "SCIENCE" ? "cat_list_change" : "cat_list"} onClick={(e) => toggleCategory(e, CatRef)} ><p>science</p><i className="fas fa-plus" style={{ pointerEvents: "none" }}></i>
                                    </li>
                                    <li data-id="technology" className={cateList === "TECHNOLOGY" ? "cat_list_change" : "cat_list"} onClick={(e) => toggleCategory(e, CatRef)}  ><p>Technology</p><i className="fas fa-plus" style={{ pointerEvents: "none" }}></i>
                                    </li>
                                    <li data-id="engineering" className={cateList === "ENGINEERING" ? "cat_list_change" : "cat_list"} onClick={(e) => toggleCategory(e, CatRef)}  ><p>Engineering</p><i className="fas fa-plus" style={{ pointerEvents: "none" }}></i>
                                    </li>
                                    <li data-id="arts" className={cateList === "ARTS" ? "cat_list_change" : "cat_list"} onClick={(e) => toggleCategory(e, CatRef)} ><p>Arts</p><i className="fas fa-plus" style={{ pointerEvents: "none" }}></i>
                                    </li>
                                    <li data-id="mathematics" className={cateList === "MATHEMATICS" ? "cat_list_change" : "cat_list"} onClick={(e) => toggleCategory(e, CatRef)} ><p>Mathematics</p><i className="fas fa-plus" style={{ pointerEvents: "none" }}></i>
                                    </li>
                                    <li data-id="User" className={cateList === "User" ? "cat_list_change" : "cat_list"} onClick={(e) => toggleCategory(e, CatRef)} ><p>USER</p><i className="fas fa-plus" style={{ pointerEvents: "none" }}></i>
                                    </li>
                                </ul>
                            </div>
                            <div className='putItcenter' style={{ display: display2, minHeight: "40vh", width: "60vw", justifyContent: "center", alignItems: "center", maxWidth: "800px" }} >
                                <div className="spinner-grow" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>

                            </div>
                            <div className="MDProduct" id='' style={{ display: display4 }}>
                                {first.map((data, index) => {
                                    return (
                                        <Link to={`/products/${data.slug}/${data.id}`} style={{ textDecoration: "none" }} key={index} >
                                            {/* onClick={(e) => detailedINFO(e, data.name, data.url, data.illustrationImageUrl, data.downloadsCount, data.viewsCount, data.likesCount, data.description, data.creator, data.illustrations, data.price, data.tags)} */}
                                            <div className="text3dflip" style={{ marginRight: "40px" }} >
                                                <div className='test_other_product_box'>
                                                    <img src={data.illustrationImageUrl} alt="product" />
                                                    <div className="boottomBarUnderImg" style={{ background: "#1E8E9A" }}></div>
                                                    <div className="cult_option_display">
                                                        <h4 style={{ color: "#1E8E9A" }}>&#8377;{data.price}</h4>
                                                        <h4 style={{ color: "#000000" }}>{data.name.slice(0, 20)}{data.name.length > 20 ? "..." : "."}</h4>
                                                    </div>
                                                </div>

                                            </div>
                                        </Link>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <Button id='n' variant="primary" onClick={() => { setFls(true) }}>
                    Launch demo modal
                </Button>
                <Modal show={fls}   >
                    <Modal.Header closeButton onClick={() => { setFls(false) }}>
                        <Modal.Title style={{ color: 'red' }}>Warning !!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', color: 'red' }}> {warning} </Modal.Body>

                </Modal>
            </div>
            <Footer />
        </>
    )
}

export default Cult