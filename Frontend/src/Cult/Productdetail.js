import React, { useEffect, useState, useRef, useContext } from 'react'
import { useHistory, Link, useParams } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import './Cult.css'
import Cultdata from './CultData.json'
import './ResponsiveProduct.css'
import './Utility.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import NoteContext from "../context/notes/Notecontext"
import Checkoutimg from "../image/Checkout.png"
import Customerimg from "../image/customer.png"
import Supportpng from "../image/globalsupport.png"
import Returnpng from "../image/return.png"
import { event } from 'react-ga';
import { Helmet } from 'react-helmet';
import Nav from '../Navbar/Nav';
import { sendEmail, printblePayment,captureOrder, onSuccessfullPayment, comfermationOfPayment } from '../api';
import Footer from '../Footer/Footer';

const Productdetail = () => {
    // SingleLine1
    const { slug, id } = useParams()
    const context = useContext(NoteContext)
    const [direction, setdirection] = useState("column")
    const [Rdisplay, setRdisplay] = useState("column")
    const { detailedINFO, toggleform1, toggleform, cultData, first, setfirst, second, setsecond, slideIMG, setsliddeIMG, display, setdisplay, cateList, setcateList, display1, setdisplay1, display4, setdisplay4, display2, setdisplay2, detailDisplay, setdetailDisplay, printDisplay, setprintDisplay, iframeDisplay, setiframeDisplay, formtoggle, setformtoggle, P_name, setP_name, iframeSRC, setiframeSRC, P_url, setP_url, P_img, setP_img, description, setdescription, creator, setcreator, sliderIMG, setslidderIMG,
        P_download, setP_dowload,
        P_view, setP_view,
        P_Likes, setP_Likes,
        Price, setPrice,
        Pricetest, setPricetest,
        fls, setFls,
        warning, setWarning,
        toggle, settoggle,
        FAQSlide, setFAQSlide,
        frameHeight, setframeHeight,
        btnDisplay, setbtnDisplay,
        newDisplay, setnewDisplay,
        rotateDeg, setrotateDeg,
        toggleBG, settoggleBG,
        toggleColor, settoggleColor,
        IconRotate, setIconRotate,
        content1, setcontent1,
        toggleIconColor, settoggleIconColor,
        toggleBG2, settoggleBG2,
        toggleColor2, settoggleColor2,
        IconRotate2, setIconRotate2,
        content2, setcontent2,
        toggleIconColor2, settoggleIconColor2,
        toggleBG3, settoggleBG3,
        toggleColor3, settoggleColor3,
        IconRotate3, setIconRotate3,
        content3, setcontent3,
        toggleIconColor3, settoggleIconColor3, mobileTopForm, setmobileTopForm, mobileTopForm1, setmobileTopForm1, mobileTopForm2, setmobileTopForm2, setTags, Tags, CreateGuid, setGuid, Guid, sortingVal } = context;

    // reload download form 2nd time when its onload and print form reload first time when it onload
    const pushToLink = (url) => {
        window.open(url, '_blank')
    }



    var history = useHistory()

    const toggleContent = () => {
        setIconRotate(IconRotate === "rotate(0deg)" ? "rotate(180deg)" : "rotate(0deg)")
        settoggleIconColor(toggleIconColor === "#000000" ? "#FFFFFF" : "#000000")
        settoggleColor(toggleColor === "#F1573D" ? "#FFFFFF" : "#F1573D")
        settoggleBG(toggleBG === "#F1573D" ? "#FFFFFF" : "#F1573D")
        setcontent1(content1 === "spec_content spec_content_show" ? "spec_content" : "spec_content spec_content_show")
    }

    const toggleContent2 = () => {
        setIconRotate2(IconRotate2 === "rotate(0deg)" ? "rotate(180deg)" : "rotate(0deg)")
        settoggleIconColor2(toggleIconColor2 === "#000000" ? "#FFFFFF" : "#000000")
        settoggleColor2(toggleColor2 === "#406690" ? "#FFFFFF" : "#406690")
        settoggleBG2(toggleBG2 === "#406690" ? "#FFFFFF" : "#406690")
        setcontent2(content2 === "spec_content spec_content_show" ? "spec_content" : "spec_content spec_content_show")
    }

    const toggleContent3 = () => {
        setIconRotate3(IconRotate3 === "rotate(0deg)" ? "rotate(180deg)" : "rotate(0deg)")
        settoggleIconColor3(toggleIconColor3 === "#000000" ? "#FFFFFF" : "#000000")
        settoggleColor3(toggleColor3 === "#FAAC22" ? "#FFFFFF" : "#FAAC22")
        settoggleBG3(toggleBG3 === "#FAAC22" ? "#FFFFFF" : "#FAAC22")
        setcontent3(content3 === "spec_content spec_content_show" ? "spec_content" : "spec_content spec_content_show")
    }
    const toggleformDisplay = () => {
        setnewDisplay("none")
        setbtnDisplay("flex")
        setiframeDisplay("none")
        setformtoggle("block")
        setmobileTopForm1("block")
        setmobileTopForm2("auto")
        setmobileTopForm("none")
    }

    const reqRef = useRef(null)
    const viewRef = useRef(null)

    const scrollToPrev = (elementRef) => {
        setIconRotate("rotate(180deg)")
        settoggleIconColor("#FFFFFF")
        settoggleColor("#FFFFFF")
        settoggleBG("#F1573D")
        setcontent1("spec_content spec_content_show")
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: "smooth"
        })
    }

    useEffect(() => {
        // console.log("hello")
        const script = document.createElement("script");
        // <!-- <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet"/> -->
        script.src = "https://checkout.razorpay.com/v1/checkout.js";

        script.async = true;
        document.body.appendChild(script);

        var guidd = CreateGuid();
        setGuid(guidd)
        cultData("Allproduct", sortingVal)
        newDetailp()
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        console.log(slug)
        console.log(id)
    }, [])

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        setslidderIMG(0)
    }, [slug])

    const newDetailp = () => {
        setmobileTopForm("none") // for mobile purpose
        setmobileTopForm1("block") // for mobile purpose
        setmobileTopForm2("auto") // for mobile purpose
        setPrice(2)
        setPricetest(1)
        setdetailDisplay("block")
        setnewDisplay("none")
        setbtnDisplay("flex")
        // console.log(slideIMG)
        setdisplay("none")
        setdisplay1("block")
        setiframeDisplay("none")
        setformtoggle("block")
    }

    const Mobiletoggleform = (url, price) => {
        setdisplay("none")
        setmobileTopForm("block")
        setmobileTopForm1("none")
        setmobileTopForm2("0px")
        setdisplay1("block")
        // setprintDisplay("0")
        setdirection("column-reverse !important")
        setiframeSRC(`https://forms.zohopublic.in/ymeducation/form/Cult3DProducts/formperma/0ZrZe7Z1BAzkJwZiF36dFktidq4b-g_y6AquI55weKQ/?SingleLine= ${url}`)
        setframeHeight("620px")
        setiframeDisplay("block")
        setdetailDisplay("none")
        setformtoggle("none")
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        setbtnDisplay("none")
        setnewDisplay("flex")
        setPrice(price)
        setPricetest(price - 1)
    }
    const toggleformDesk1 = (url, price, email, id, name) => {
        setdisplay("none")
        setdisplay1("block")
        // setprintDisplay("0")
        if (cateList === "USER") {
            setiframeSRC(`https://forms.zohopublic.in/ymeducation/form/ProductTest/formperma/ViEObjPurbivBm9xq4ObJWtu6oI1NU9hej8kTzTFUnA/?SingleLine= ${url}&Number= ${price}&SingleLine2=${Guid}&SingleLine3=${email}&SingleLine4=sell-${id}&SingleLine5=${name}`)
        } else {
            setiframeSRC(`https://forms.zohopublic.in/ymeducation/form/Cult3DProducts1/formperma/xPK9AxwdwPw1h_o7Mbf7_1oQacRr6v5apRGwL0Y26Do/?SingleLine= ${url}&Number= ${price}&SingleLine2=${Guid}`)
        }
        setiframeDisplay("block")
        setformtoggle("none")
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        setframeHeight("760px")
        setdetailDisplay("none")
        setnewDisplay("flex")
        setbtnDisplay("none")
        setPrice(price)
        setPricetest(price - 1)
    }
    const toggleformDesk = (url, price) => {
        setdisplay("none")
        setdisplay1("block")
        setiframeSRC(`https://forms.zohopublic.in/ymeducation/form/Cult3DProducts/formperma/0ZrZe7Z1BAzkJwZiF36dFktidq4b-g_y6AquI55weKQ/?SingleLine= ${url}`)
        setframeHeight("620px")
        setiframeDisplay("block")
        setformtoggle("none")
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        // setdetailDisplay("none")
        setbtnDisplay("none")
        // setprintDisplay("0")
        setnewDisplay("flex")
        setPrice(price)
        setPricetest(price - 1)
    }

    const Mobiletoggleform1 = (url, price) => {
        // console.log(Tags)
        // console.log(Tags.length)
        setdisplay("none")
        setdisplay1("block")
        setmobileTopForm1("none")
        setmobileTopForm2("0px")
        setmobileTopForm("block")
        setdirection("column-reverse !important")
        setiframeSRC(`https://forms.zohopublic.in/ymeducation/form/Cult3DProducts1/formperma/xPK9AxwdwPw1h_o7Mbf7_1oQacRr6v5apRGwL0Y26Do/?SingleLine= ${url}&Number= ${price}&SingleLine2=${Guid}`)
        setiframeDisplay("block")
        setformtoggle("none")
        // setprintDisplay("0")
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        // setdetailDisplay("none")
        setframeHeight("760px")
        setnewDisplay("flex")
        setbtnDisplay("none")
        setPrice(price)
        setPricetest(price - 1)
    }
    const toggleDisc = () => {
        if (iframeDisplay === "none") {
            setdisplay("flex")
            setdisplay1("none")
            history.push('/products')
            setcateList(cateList)
        } else {
            toggleformDisplay()
        }
    }

    const trylingLoad = (url) => {
        // console.log("hey refresh")
        if (Price === Pricetest) {
            if (iframeSRC === `https://forms.zohopublic.in/ymeducation/form/Cult3DProducts/formperma/0ZrZe7Z1BAzkJwZiF36dFktidq4b-g_y6AquI55weKQ/?SingleLine= ${url}`) {
                pushToLink(url)
                // console.log("open hoja vai")
            } else {
                let myIframe = document.getElementById("query_z_form")
                myIframe.src = iframeSRC

            }
        }

        if (Price < Pricetest) {
            if (iframeSRC === `https://forms.zohopublic.in/ymeducation/form/Cult3DProducts/formperma/0ZrZe7Z1BAzkJwZiF36dFktidq4b-g_y6AquI55weKQ/?SingleLine= ${url}`) {
                let myIframe = document.getElementById("query_z_form")
                myIframe.src = iframeSRC
                setPricetest(Price - 1)
            }
            else {
                setPricetest(Price)
            }
        } else {
            setPricetest(Pricetest + 1)
        }
    }
    const swappingIMG = (e, index, url) => {
        // const imageVar = e.target.src;
        setslidderIMG(index)
        // let img_url = document.querySelectorAll('.det_DOM_IMG')
        // img_url.src = imageVar
        // console.log(img_url.src)
        // console.log(imageVar)
        // // e.target.src = P_img
        // setP_img(imageVar)
    }
    return (
        <>
            <Nav />
            {first.map((data, index) => {
                if (id === data.id && slug === data.slug) {
                    return (

                        <div className='threeD_PRODUCT' key={index}>
                            <Helmet>
                                <title>{data.title}</title>
                                <meta
                                    name="description"
                                    content={data.metaDescription}
                                />
                                <meta
                                    name="keywords"
                                    content={data.tags.map(item => { return item })}
                                />
                            </Helmet>
                            <div className="detailedProduct">
                                <div className="navigationToback">
                                    <i className="fas fa-chevron-left utility toggle_allproduct" onClick={toggleDisc}></i>
                                    <div className="fontHeading1"></div></div>
                                <div className='det_DOM' style={{ flexDirection: direction }}>
                                    <div style={{ display: formtoggle }}>
                                        <div className="det_DOM_IMG">

                                            <img src={data.illustrations[sliderIMG].imageUrl} alt="product" />
                                        </div>
                                        <div className="descImgbox">
                                            {data.illustrations.map((data, index) => {
                                                return (
                                                    <div className="desc-slide-img" key={index}>
                                                        {index < 3 && (
                                                            <div className={`bottometcimg ${index === sliderIMG ? "bg_img_change" : ""}`}>

                                                                <img src={data.imageUrl} alt="product" onClick={(e) => swappingIMG(e, index, data.illustrationImageUrl)} />
                                                            </div>
                                                        )}
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>

                                    {/*  details for desktop */}
                                    <div className="details_p">
                                        <h1 className='product_title'>{data.name}</h1>
                                        <span className='printing_span'>Printing price :</span>
                                        <div className="pricingArea" style={{ alignItems: "center" }}>
                                            <h1 className='printing_price'>&#8377;{data.price}</h1>
                                            <h4 className='price_actual'>&#8377;{data.price + 200}</h4>
                                        </div>
                                        <div className="desc_product_cult" style={{ marginTop: "10px", marginLeft: "0px" }}>
                                            <p>{data.description.slice(0, 200)}{data.description.length > 200 ? "..." : ""}</p>
                                            <span className='description_viewMore' onClick={() => scrollToPrev(viewRef)}>{data.description.length > 200 ? "View More..." : ""}</span>
                                        </div>

                                        <div className="functionalityBtns" style={{ display: btnDisplay, alignItems: "center" }}>
                                            {/* <button className='print_funtionality' onClick={() => toggleformDesk1(data.url, data.price, data.selleremail, data.sellerid, data.name)}>Print</button> */}
                                            {/* displayRazorpay(data.id, data.sellerEmail, data */}
                                            <button className='print_funtionality' onClick={()=> history.push(`/checkout/${data.id}`) }>Print</button>
                                            <div className="horizontal_blank"></div>
                                            <div className="d-flex" style={{ alignItems: "center" }} onClick={() => toggleformDesk(data.url, data.price)}>
                                                <span className="fas fa-download utility"></span>
                                                <p>Download Files For Free</p>
                                            </div>
                                        </div>
                                        <div className="ourSmartService">
                                            <div className="smartService">
                                                <img src={Checkoutimg} alt="checkout" />
                                                {/* <span className="far fa-credit-card"></span> */}
                                                <p>Checkout</p>
                                            </div>
                                            <div className="smartService">
                                                <img src={Customerimg} alt="support" />
                                                {/* <span className="far fa-user"></span> */}
                                                <p >Customer Support</p>
                                            </div>
                                            <div className="smartService">
                                                <img src={Returnpng} alt="return" />
                                                {/* <span className="fal fa-cart-arrow-down"></span> */}
                                                <p >Return Policy</p>
                                            </div>
                                            <div className="smartService" style={{ border: "none" }}>
                                                {/* <img src="image/3dprint.png" alt="support" /> */}
                                                <img src={Supportpng} alt="support" />
                                                {/* <span className="fal fa-globe"></span> */}
                                                <p >Global Shopping</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* details for mobile */}
                                    <div className="details_p details_p_mobile">
                                        <h1 className='product_title' style={{ display: mobileTopForm }}>{data.name}</h1>
                                        <div className="desc_product_cult" style={{ marginTop: "10px", marginLeft: "0px", display: mobileTopForm }}>
                                            <p>{data.description.slice(0, 200)}{data.description.length > 200 ? "..." : ""}</p>
                                            <span className='description_viewMore' onClick={() => scrollToPrev(viewRef)}>{data.description.length > 200 ? "View More..." : ""}</span>
                                        </div>
                                    </div>
                                    <div className="iframedpfrom" style={{ display: iframeDisplay }}>

                                        <iframe ref={reqRef} style={{ marginTop: "0px", marginLeft: "0px", minHeight: frameHeight }} frameBorder="0" id="query_z_form" src={iframeSRC} onLoad={() => trylingLoad(data.url)}></iframe>
                                    </div>

                                    {/* details for mobile */}
                                    <div className="details_p details_p_mobile" style={{ marginTop: iframeDisplay === "none" ? "30px" : "0px" }}>
                                        <h1 className='product_title' style={{ display: mobileTopForm1 }}>{data.name}</h1>
                                        <div className="desc_product_cult" style={{ marginTop: "10px", marginLeft: "0px", display: mobileTopForm1 }}>
                                            <p>{data.description.slice(0, 200)}{data.description.length > 200 ? "..." : ""}</p>
                                            <span className='description_viewMore' onClick={() => scrollToPrev(viewRef)}>{data.description.length > 200 ? "View More..." : ""}</span>
                                        </div>
                                        <div className="functionalityBtns functionalityBtnsMobile" style={{ alignItems: "center", lineHeight: "105%" }}>
                                            <p style={{ color: "#808080" }}>Printing price :</p>
                                            {/* <div className="horizontal_blank"></div>
                            <div className="d-flex" style={{ alignItems: "center" }} onClick={Mobiletoggleform}>
                                <span className="fas fa-download utility"></span>
                                <p>Download Files For Free</p>,
                            </div> */}
                                        </div>
                                        <div className="pricingArea pricingAreaMobile" style={{ alignItems: "center" }}>
                                            <h1 className='printing_price' style={{ color: "black" }}>&#8377;{data.price}</h1>
                                            <h4 className='price_actual'>&#8377;{data.priceCompare !== 0 && data.priceCompare !== undefined ? data.priceCompare : data.price}</h4>
                                        </div>
                                        <div className="ourSmartService">
                                            <div className="smartService">
                                                <img src={Checkoutimg} alt="checkout" />
                                                {/* <span className="far fa-credit-card"></span> */}
                                                <p>Checkout</p>
                                            </div>
                                            <div className="smartService">
                                                <img src={Customerimg} alt="customer" />
                                                {/* <span className="far fa-user"></span> */}
                                                <p >Customer Support</p>
                                            </div>
                                            <div className="smartService">
                                                <img src={Returnpng} alt="return" />
                                                {/* <span className="fal fa-cart-arrow-down"></span> */}
                                                <p >Return Policy</p>
                                            </div>
                                            <div className="smartService" style={{ border: "none" }}>
                                                <img src={Supportpng} alt="support" />
                                                {/* <span className="fal fa-globe"></span> */}
                                                <p >Global Shopping</p>
                                            </div>
                                        </div>
                                        <div className="d-flex" style={{ width: "100%" }}>

                                            <button className='print_funtionalityMobile' onClick={()=> history.push(`/checkout/${data.id}`) } style={{ display: mobileTopForm1 }}>Print</button>
                                            <button className='print_funtionalityMobile print_funtionalityMobiledownload' onClick={() => Mobiletoggleform(data.url, data.price)} style={{ display: mobileTopForm1 }}>Download</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="advertisement"></div>


                                {/* specifications */}
                                <div className="product_summary">
                                    <div className="d-flex" style={{ width: "auto", marginBottom: "40px" }}>
                                        <div className="faqhorizontalLine"></div>
                                        <h1 className='Website_Heading' >Summary</h1>
                                    </div>

                                    <div className="spec_section" style={{ marginBottom: "40px" }}>
                                        <div className="first_spec">
                                            <div className="first_spec_detail" onClick={toggleContent} style={{ background: toggleBG }}>
                                                <div className="spec_Heading spec_Heading1">
                                                    <h1 style={{ color: toggleColor }} ref={viewRef}>Product Details</h1>
                                                    <span className={`fal fa-chevron-double-down`} style={{ color: toggleIconColor, transform: IconRotate }}></span>
                                                </div>
                                            </div>
                                            <div className={content1}>
                                                <p className='website_para' style={{ color: "#808080", lineHeight: "30px" }}>{data.description}</p>
                                            </div>
                                        </div>
                                        <div className="second_spec">
                                            <div className="second_spec_detail" onClick={toggleContent2} style={{ background: toggleBG2 }}>
                                                <div className="spec_Heading spec_Heading2">
                                                    <h1 style={{ color: toggleColor2 }}>TAGS </h1>
                                                    <span className={`fal fa-chevron-double-down`} style={{ color: toggleIconColor2, transform: IconRotate2 }}></span>
                                                </div>

                                            </div>
                                            <div className={content2}>
                                                <p className='website_para' style={{ display: data.tags.length === 0 ? "block" : "none", lineHeight: "30px", color: "#808080" }}>Sorry! no Tags Available for these Product.</p>
                                                {data.tags.map((data, index) => {
                                                    return (

                                                        <p className='website_para' style={{ lineHeight: "30px", color: "#808080" }} key={index}>{index + 1} : #{data}.</p>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        <div className="third_spec">
                                            <div className="third_spec_detail" onClick={toggleContent3} style={{ background: toggleBG3 }}>
                                                <div className="spec_Heading spec_Heading3">
                                                    <h1 style={{ color: toggleColor3 }}>Product Parameters</h1>
                                                    <span className={`fal fa-chevron-double-down`} style={{ color: toggleIconColor3, transform: IconRotate3 }}></span>
                                                </div>

                                            </div>
                                            <div className={content3}>
                                                <p className='website_para' style={{ color: "#808080", lineHeight: "30px" }}>1 : Layer Height : 0.1mm</p>
                                                <p className='website_para' style={{ color: "#808080", lineHeight: "30px" }}>2 : Infill : 20%</p>
                                                <p className='website_para' style={{ color: "#808080", lineHeight: "30px" }}>3 : Support Removal : Yes</p>
                                                <p className='website_para' style={{ color: "#808080", lineHeight: "30px" }}>***Also our team will contact you after sumbitting form, So you can discuss your own printing ideas with us.</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                {/* other product */}
                                <div className="otherProduct">
                                    <div className="otherProductHeadline" style={{ width: "auto" }}>
                                        <div className="faqhorizontalLine"></div>
                                        <h1 className='Website_Heading removeSuggestion' >Our suggestions</h1>
                                    </div>
                                    <div className="productsForSection">
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
                                                {Cultdata.map((data, index) => {
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
                                                        </Link>)
                                                })}
                                            </OwlCarousel>
                                        </div>
                                    </div>

                                    <div className="sectionDevider"></div>

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
                    )
                }
            })}
            <Footer />
        </>
    )
}

export default Productdetail