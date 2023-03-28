import NoteContext from "./Notecontext";
import { useState, useEffect } from "react";
import axios from 'axios';

const NoteState = (props) => {
  const [first, setfirst] = useState([])
  const [sortingVal, setsortingVal] = useState("")
  const [Hamtoggle, setHamtoggle] = useState("translateX(0px)")
  const [backopacity, setbackopacity] = useState("1")
  const [Hamtoggle1, setHamtoggle1] = useState("translateX(0px)")
  const [backopacity1, setbackopacity1] = useState("1")
  const [second, setsecond] = useState([])
  const [slideIMG, setsliddeIMG] = useState([])
  const [sliderIMG, setslidderIMG] = useState(0)
  const [display, setdisplay] = useState("flex")
  const [cateList, setcateList] = useState("MOST POPULAR")
  const [display1, setdisplay1] = useState("none")
  const [display4, setdisplay4] = useState("flex")
  const [display2, setdisplay2] = useState("none")
  const [detailDisplay, setdetailDisplay] = useState("block")
  const [printDisplay, setprintDisplay] = useState("1")
  const [iframeDisplay, setiframeDisplay] = useState("none")
  const [formtoggle, setformtoggle] = useState("block")
  const [P_name, setP_name] = useState("")
  const [iframeSRC, setiframeSRC] = useState("")
  const [P_url, setP_url] = useState("")
  const [P_img, setP_img] = useState("")
  const [description, setdescription] = useState("")
  const [Tags, setTags] = useState([])
  const [creator, setcreator] = useState("")
  const [P_download, setP_dowload] = useState(0)
  const [P_view, setP_view] = useState(0)
  const [P_Likes, setP_Likes] = useState(0)
  const [Price, setPrice] = useState(0)
  const [Pricetest, setPricetest] = useState(-10)
  const [fls, setFls] = useState(false)
  const [warning, setWarning] = useState('')
  const [toggle, settoggle] = useState(-1)
  const [FAQSlide, setFAQSlide] = useState(5)
  const [frameHeight, setframeHeight] = useState("620px")
  const [btnDisplay, setbtnDisplay] = useState("flex")
  const [newDisplay, setnewDisplay] = useState("none")
  const [rotateDeg, setrotateDeg] = useState("rotateY(0deg)")
  const [mobileTopForm, setmobileTopForm] = useState("none")
  const [mobileTopForm1, setmobileTopForm1] = useState("block")
  const [mobileTopForm2, setmobileTopForm2] = useState("flex")

  const [toggleBG, settoggleBG] = useState("#FFFFFF")
  const [toggleColor, settoggleColor] = useState("#F1573D")
  const [IconRotate, setIconRotate] = useState("rotate(0deg)")
  const [content1, setcontent1] = useState("spec_content")
  const [toggleIconColor, settoggleIconColor] = useState("#000000")

  const [toggleBG2, settoggleBG2] = useState("#FFFFFF")
  const [toggleColor2, settoggleColor2] = useState("#406690")
  const [IconRotate2, setIconRotate2] = useState("rotate(0deg)")
  const [content2, setcontent2] = useState("spec_content")
  const [toggleIconColor2, settoggleIconColor2] = useState("#000000")

  const [toggleBG3, settoggleBG3] = useState("#FFFFFF")
  const [toggleColor3, settoggleColor3] = useState("#FAAC22")
  const [IconRotate3, setIconRotate3] = useState("rotate(0deg)")
  const [content3, setcontent3] = useState("spec_content")
  const [toggleIconColor3, settoggleIconColor3] = useState("#000000")
  const [ServiceDOMCL, setServiceDOMCL] = useState("Service_Page_Section")
  const [StoreDOMCL, setStoreDOMCL] = useState("store_page_section")
  const [ZohoId, setZohoId] = useState("")
  const [Zohotoken, setZohotoken] = useState('')
  const [loaderPageDisplay, setloaderPageDisplay] = useState('none')
  const [loaderText, setloaderText] = useState("Processing ...")
  const [stoping, setstoping] = useState(true)
  const [Guid, setGuid] = useState("")
  const [LMBlog, setLMBlog] = useState(0)
  const [TopNavD, setTopNavD] = useState("flex")

// Guid
function CreateGuid() {  
  let num = Math.round(Math.random()*3)
  function _p8(s) {  
     var p = (Math.random().toString(16)+"000000000").substr(2,8);  
     return s ? + p.substr(0,4) + p.substr(4,4) : p ;  
  }  
  if(num === 1){
    return "YM-"+_p8(true);  
  }
  else{
    return "YM-"+_p8();
  }
}  
function CreateGuidfopass() {  
  let num = Math.round(Math.random()*3)
  function _p8(s) {  
     var p = (Math.random().toString(16)+"000000000").substr(2,8);  
     return s ? + p.substr(0,4) + p.substr(4,4) : p ;  
  }  
  if(num === 1){
    return "PW-"+_p8();  
  }
  else{
    return "PW-"+_p8(true);
  }
}  
 
  //manufacturing all api 
  const  Url= process.env.REACT_APP_API
  // for generating access token goaffpro
  const generateTokenforaffiliate = async (OrderID, ref) => {
    try {
      const response = await fetch(`${Url}/accesstoken1/?id=${OrderID}&ref=${ref}`, {
        method: 'POST',
        // params: { "category": cateListt }
      })
      const json = await response.json()
      // console.log(json)
      // console.log(json.access_token)
    
      // setTimeout(() => {
        // serachFormData(json.access_token, OrderID, ref)
      // }, 10000);
      // console.log(json.data)
    } catch (error) {
      // setWarning("Sorry! Some error occured !!")
      console.log(error)
      // document.getElementById("n").click();
    }
  }

// check form data 
let tryingsomething = true
  const serachFormData = async (token, id, ref) =>{
    try {
      const response = await fetch(`${Url}/testing/?id=${id}&token=${token}&ref=${ref}`, {
        method: 'POST',
        // params: { "category": "Harsh", "token": token},
        // headers: { "Content-Type": "application/json" },
        
      
      })
      const json = await response.json()
      // console.log(json)
      // console.log(json.access_token)
      // if(json.data[0].OrderID !== "" && json.data[0].OrderID !== null && json !== {} && json.data[0].Total !== "" && json.data[0].Total !== null){
        setloaderPageDisplay("none")
          if(json !== ""){
            // console.log(json)
            // GoAffproCall(json.data[0].OrderID, json.data[0].Total, ref, json.data[0].Page_Title)
          }
         
    
      // }
      // console.log(json.data)
      // console.log(json.data[0].OrderID)
      // console.log(json.data[0].Total)
    } catch (error) {
      // setWarning("Sorry! Some error occured !!")
     
      console.log(error)
      // document.getElementById("n").click();
    }
  }

  const GoAffproCall = async (orderID, ref)=>{
    try {
        var data = JSON.stringify({
            "ref": ref,
            "order_id": orderID
          });
        const response = await fetch(`${Url}/accesstoken2`, {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: data
    
        })
        const json = await response.json()
        // console.log(json)
    
    
    } catch (error) {
        console.log(error)
    }
    }
  // for generating access token
  const generateToken = async (data, fileData) => {
    try {
      const response = await fetch(`${Url}/accesstoken`, {
        method: 'POST',
        // params: { "category": cateListt }
      })
      const json = await response.json()
      // console.log(json)
      // console.log(json.access_token)
      pushToZOho( data, fileData)
      // console.log(json.data)
    } catch (error) {
      // setWarning("Sorry! Some error occured !!")
      console.log(error)
      // document.getElementById("n").click();
    }
  }

  // pushing data to zoho
  const pushToZOho = async ( data, fileData) => {
    try {
      const response = await fetch(`${Url}/postingdata/?name=${data.clientName}&phone=${data.clientPhone}&email=${data.clientEmail}&state=${data.state}&street=${data.hNo}&city=${data.Town}&country=${'India'}&pincode=${data.pincode}&delivery=${data.free}&layer=${data.outputMm1}&infill=${data.mmInput2}&color=${data.colorType}&material=${data.idProductName}&rush=${data.rushPaint}&count=${data.count}&handeling=${data.handeling}&printing=${data.printing}&materialamount=${data.material}&additional=${data.additional}&deliverya=${data.deliver}&gst=${data.gst}&total=${data.total},&paintingfees=${data.PaintingCost},&painting=${data.Painting}&orderid=${data.OrderIDD}`, {
        method: 'POST',
        // body: JSON.stringify(data)
        // headers: { "Content-Type": "application/json" },
        
      
      })
      const json = await response.json()
      // console.log(json)
      // console.log(json.access_token)
      // console.log(json.data)
      setZohoId(json)
      // sendattachment(json, fileData, token)
    } catch (error) {
      // setWarning("Sorry! Some error occured !!")
      console.log(error)
      // document.getElementById("n").click();
    }
  }
  const updateData = async (id, order, payment, amount, ref) => {
    try {
      // var data = JSON.stringify({
      //   "ref": ref,
      //   "id": id,
      //   "paymentid": payment,
      //   "orderid": order,
      //   "total": amount
      // });
      const response = await fetch(`${Url}/updatingdata/?id=${id}&paymentid=${payment}&orderid=${order}&total=${amount}&ref=${ref}`, {
        method: 'PUT',
      

        // params: { "category": "Harsh", "token": token},
        // headers: { "Content-Type": "application/json" },
        
      
      })
      const json = await response.json()
      // console.log(json)
      // console.log(json.access_token)
      // console.log(json.data)
    } catch (error) {
      // setWarning("Sorry! Some error occured !!")
      console.log(error)
      // document.getElementById("n").click();
    }
  }


  // let arrayOfYourFiles=[image, audio, video]
// create formData object
// const formData = new FormData();
// arrayOfYourFiles.forEach(file=>{
//   formData.append("arrayOfFilesName", file);
// });

// axios({
//   method: "POST",
//   url: serverUrl + "/multiplefiles",
//   data: formData,
//   headers: {
//     "Content-Type": "multipart/form-data"
//   }
// })
  // 1000.ed59a31d1fb6a03efe3ca4a4672d8cfd.a6afec5b4e6536921dcfc3d25241b455
  //  cult product section
  const cultData = async (cateListt, sort) => {
    setdisplay2("flex")
    setdisplay4("none")
    try {
      const response = await fetch(`${Url}/getcult/?category=${cateListt}&sort=${sort}`, {
        method: 'GET',
        params: { "category": cateListt }
      })
      const json = await response.json()
      // console.log(json)
      // setfirst1(json.data)
      // console.log(first1)
      // console.log(json.data.creationsBatch.results)
      if (cateListt === "MOST POPULAR") {
        setsecond(json)
      }
      setfirst(json)
      setTimeout(() => {
        setdisplay2("none")
        setdisplay4("flex")

      }, 500);
      // console.log(first)
    } catch (error) {
      // setWarning("Sorry! Some error occured !!")
      console.log(error)
      // document.getElementById("n").click();
    }
    // setfirst([...first, json.data.creation])
  }
  const toggleform = (e, name, url, img, downloads, views, likes, description, creatornick, imgBox, price, tags) => {
    // for mobile view only
    setmobileTopForm("block")
    setmobileTopForm1("none")
    setmobileTopForm2("0px")

    setdisplay("none")
    setTags(tags)
    setdisplay1("block")
    setiframeSRC(`https://forms.zohopublic.in/ymeducation/form/Cult3DProducts/formperma/0ZrZe7Z1BAzkJwZiF36dFktidq4b-g_y6AquI55weKQ/?SingleLine= ${url}`)
    setframeHeight("620px")
    setiframeDisplay("block")
    setformtoggle("none")
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    if (window.screen.width < 700) {
      // console.log("width checking")
    }
    setbtnDisplay("none")
    //   setprintDisplay("0")
    setnewDisplay("flex")
    setPricetest(price - 1)

    setP_name(name)
    setP_url(url)
    setPrice(price)
    setP_img(img)
    setP_dowload(downloads)
    setP_view(views)
    setP_Likes(likes)
    setcreator(creatornick.bio)
    setdescription(description)
    setsliddeIMG(imgBox)
    // console.log(slideIMG)
    if (e.target.dataset.id === "MOST POPULAR") {
      setcateList(e.target.dataset.id)
      // console.log(e.target.dataset.id)
    }
    else {
      //   setcateList("nope")

    }
  }
  const toggleform1 = (e, name, url, img, downloads, views, likes, description, creatornick, imgBox, price, tags) => {
    // for mobile view
    setmobileTopForm("block")
    setmobileTopForm2("0px")
    setmobileTopForm1("none")

    setTags(tags)
    setdisplay("none")
    setdisplay1("block")
    //   setprintDisplay("0")
    setiframeDisplay("block")
    setformtoggle("none")
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    setframeHeight("760px")
    //   if(window.screen.width < 700){
    //     setdetailDisplay("none")
    //   }
    setnewDisplay("flex")
    setbtnDisplay("none")
    setPricetest(price - 1)
    setP_name(name)
    setP_url(url)
    setPrice(price)
    setP_img(img)
    setP_dowload(downloads)
    setP_view(views)
    setP_Likes(likes)
    setcreator(creatornick.bio)
    setdescription(description)
    setsliddeIMG(imgBox)
    // console.log(slideIMG)
    setiframeSRC(`https://forms.zohopublic.in/ymeducation/form/Cult3DProducts1/formperma/xPK9AxwdwPw1h_o7Mbf7_1oQacRr6v5apRGwL0Y26Do/?SingleLine= ${url}&Number= ${price}`)
    if (e.target.dataset.id === "MOST POPULAR") {
      setcateList(e.target.dataset.id)
      // console.log(e.target.dataset.id)
    }
  }
  const detailedINFO = (e, name, url, img, downloads, views, likes, description, creatornick, imgBox, price, tags) => {
    setP_name(name)
    setP_url(url)
    setmobileTopForm("none") // for mobile purpose
    setmobileTopForm1("block") // for mobile purpose
    setmobileTopForm2("auto") // for mobile purpose

    setPrice(price)
    setdetailDisplay("block")
    setTags(tags)
    //   setprintDisplay("1")
    setPricetest(price - 1)
    setP_img(img)
    setP_dowload(downloads)
    setP_view(views)
    setP_Likes(likes)
    setcreator(creatornick.bio)
    setdescription(description)
    setsliddeIMG(imgBox)
    setnewDisplay("none")
    setbtnDisplay("flex")
    // console.log(slideIMG)
    setiframeSRC(`https://forms.zohopublic.in/ymeducation/form/Cult3DProducts1/formperma/xPK9AxwdwPw1h_o7Mbf7_1oQacRr6v5apRGwL0Y26Do/?SingleLine= ${url}&Number= ${price}`)
    setdisplay("none")
    setdisplay1("block")
    setiframeDisplay("none")
    setformtoggle("block")
    if (e.target.dataset.id === "MOST POPULAR") {
      setcateList(e.target.dataset.id)
      // console.log(e.target.dataset.id)
    }
    // else{
    //     setcateList("nope")

    // }
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    //  console.log(name,url,img,downloads,views)
  }



  return (
    <NoteContext.Provider value={{ detailedINFO, toggleform1, toggleform, cultData, first, setfirst, second, setsecond, slideIMG, setsliddeIMG, display, setdisplay, cateList, setcateList, display1, setdisplay1, display4, setdisplay4, display2, setdisplay2, detailDisplay, setdetailDisplay, printDisplay, setprintDisplay, iframeDisplay, setiframeDisplay, formtoggle, setformtoggle, P_name, setP_name, iframeSRC, setiframeSRC, P_url, setP_url, P_img, setP_img, description, setdescription, creator, setcreator, sliderIMG, setslidderIMG, P_download, setP_dowload, P_view, setP_view, P_Likes, setP_Likes, Price, setPrice, Pricetest, setPricetest, fls, setFls, warning, setWarning, toggle, settoggle, FAQSlide, setFAQSlide, frameHeight, setframeHeight, btnDisplay, setbtnDisplay, newDisplay, setnewDisplay, rotateDeg, setrotateDeg, toggleBG, settoggleBG, toggleColor, settoggleColor, IconRotate, setIconRotate, content1, setcontent1, toggleIconColor, settoggleIconColor, toggleBG2, settoggleBG2, toggleColor2, settoggleColor2, IconRotate2, setIconRotate2, content2, setcontent2, toggleIconColor2, settoggleIconColor2, toggleBG3, settoggleBG3, toggleColor3, settoggleColor3, IconRotate3, setIconRotate3, content3, setcontent3, toggleIconColor3, settoggleIconColor3, mobileTopForm, setmobileTopForm, setmobileTopForm1, mobileTopForm1, mobileTopForm2, setmobileTopForm2, setTags, Tags, setServiceDOMCL, ServiceDOMCL, StoreDOMCL, setStoreDOMCL, generateToken, pushToZOho, updateData, setZohoId, ZohoId, Zohotoken, setZohotoken, generateTokenforaffiliate, GoAffproCall, setloaderPageDisplay, loaderPageDisplay, setloaderText, loaderText,CreateGuid,setGuid,Guid, setLMBlog, LMBlog, CreateGuidfopass, setTopNavD, TopNavD, setsortingVal, sortingVal, setbackopacity, setHamtoggle, Hamtoggle, backopacity, setbackopacity1, setHamtoggle1, Hamtoggle1, backopacity1  }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;