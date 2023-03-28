import { ReactComponent as MallSvg } from './local_mall.svg';
import { ReactComponent as ImgSvg } from './imgIcon.svg';
import { ReactComponent as AddSvg } from './add_black.svg';
import { ReactComponent as RemoveSvg } from './remove_black.svg';
import { ReactComponent as SellSvg } from './sell_black.svg';
import { ReactComponent as SSvg } from './stion.svg';
import { ReactComponent as UploadSvg } from './Group18.svg'
import { ReactComponent as DeleteSvg } from './deleteIcon.svg'
import { ReactComponent as EyeSvg } from './eyeIcon.svg'
// import "https://checkout.razorpay.com/v1/checkout.js"
import React, { useState, useEffect, useRef, useContext } from 'react';
import NoteContext from "../context/notes/Notecontext"
import './Ordersbuy.css';
import { ReactComponent as DropDownsvg } from './pathT.svg';
import { sendEmail, payment, onSuccessfullPayment, comfermationOfPayment } from '../api';
import { Modal, Button, Form } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import useGAEventsTracker from '../GaEvent/useGAEventsTracker';
import suggestion from './json/suggestoin.json'
import materialType from './json/materials.json'
import colors from './json/Colors.json'
import "./responsiveOrder.css"
import './Newservice.css'
import axios from 'axios';
import Nav from '../Navbar/Nav';
import Footer from '../Footer/Footer';
import { Helmet } from 'react-helmet';

const Manufacturing = () => {

  const [yesIcon, setyesIcon] = useState(3)
  const [Slider, setSlider] = React.useState(0)
  const [customizeD, setcustomizeD] = useState("none")
  const [mainDisplay, setmainDisplay] = useState("block")
  const [statusDisplay, setstatusDisplay] = useState("none")
  const [firstAcc, setfirstAcc] = useState("block")
  const [checkDISC, setcheckDISC] = useState("none")
  const [checkDISC1, setcheckDISC1] = useState("none")
  const [secondAcc, setsecondAcc] = useState("none")
  const [thirdAcc, setthirdAcc] = useState("none")
  const [fourthAcc, setfourthAcc] = useState("none")
  const [fifthAcc, setfifthAcc] = useState("none")
  const [rotateIcon1, setrotateIcon1] = useState("lock-open")
  const [rotateIcon2, setrotateIcon2] = useState("lock")
  const [rotateIcon3, setrotateIcon3] = useState("lock")
  const [rotateIcon4, setrotateIcon4] = useState("lock")
  const [rotateIcon5, setrotateIcon5] = useState("lock")
  const [thankupage, setthankupage] = useState("none")
  const [thankupagetext, setthankupagetext] = useState("")
  const [thankupageicon, setthankupageicon] = useState("")
  const [thankupageBG, setthankupageBG] = useState("")
  const [guuid, setguuid] = useState("")
  const firstRef = useRef(null)
  const secondRef = useRef(null)
  const thirdRef = useRef(null)
  const fourthRef = useRef(null)
  const fifthRef = useRef(null)

//  Api for zoho
const context = useContext(NoteContext)
 const {generateToken, pushToZOho, sendattachment, updateData, ZohoId, Zohotoken, GoAffproCall, CreateGuid } = context
 let fileData = new FormData();

  const loadingGuid = () =>{
    var newguid = CreateGuid()
    let myIframe = document.getElementById("query_z_form")

    if(myIframe.src === "https://forms.zohopublic.in/ymeducation/form/TalktoUs/formperma/5nBvO9RjvAe2yyrMvIGxSbC7M_V1qZaZOQRVctVhwbM"){
      myIframe.src = `https://forms.zohopublic.in/ymeducation/form/TalktoUs/formperma/5nBvO9RjvAe2yyrMvIGxSbC7M_V1qZaZOQRVctVhwbM/?SingleLine1=${newguid}`
    }
  }
  //  function for auto scrolling..
  const scrollToPrev= (elementRef)=>{
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth"
    })
  }
  //  function for pervious button toggeling
  const checkingID = (e) => {
    if (e.target.dataset.id === "1") {
      setSlider(0)
      // console.log(Slider)
      setfirstAcc('block')
      setrotateIcon1("lock-open")
      setsecondAcc("none")
      setrotateIcon2("lock")
      // console.log(filesinput.length)

    
      scrollToPrev(firstRef)
    }
    if (e.target.dataset.id === "2") {
      // console.log(fileData)
      setSlider(0)
      // console.log(Slider)
      setsecondAcc("block")
      setrotateIcon2("lock-open")
      setrotateIcon3("lock")
      setthirdAcc('none')
      scrollToPrev(secondRef)
    }
    if (e.target.dataset.id === "3") {
      setSlider(1)
      // console.log(Slider)
      setthirdAcc("block")
      setrotateIcon3("lock-open")
      setfourthAcc('none')
      setrotateIcon4("lock")
      scrollToPrev(thirdRef)
    }
    if (e.target.dataset.id === "4") {
      setSlider(2)
      document.getElementsByName("checkBox")[0].checked = false;
      setRushPaint('')
      // console.log(Slider)
      setfourthAcc("block")
      setrotateIcon4("lock-open")
      setrotateIcon5("lock")
      setfifthAcc('none')
      scrollToPrev(fourthRef)
    }
  }
  // function for after payment back backbutton
  const toggleLoadinDisplay = () => {
    setstatusDisplay("none")
    setmainDisplay("block");
  }
  // function for customise checkbox for vappor polis supportremoval
  const checkboxInpToggle = (support,polish)=>{
    if(support === "supportRemoval" && polish === "vaporPolishing"){
      setcheckDISC("block")
      setcheckDISC1("block")
    }
    if(polish !== "vaporPolishing" && support !== "supportRemoval"){
      setcheckDISC("none")
      setcheckDISC1("none")
    }
  }
  useEffect(() => {
    // console.log("hello")

      const script = document.createElement("script");
      const link = document.createElement('link')
      link.href ="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
      link.rel="stylesheet"
      // <!-- <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet"/> -->
      script.src = "https://checkout.razorpay.com/v1/checkout.js";

      script.async = true;
    document.head.appendChild(link)
      document.body.appendChild(script);
    setmainDisplay("block")
    setstatusDisplay("none")
  }, [])

  // function for suggestion selcted yes Icon 
  const toggleYes = (index) => {
    setyesIcon(index)
  }

  var totalPrice;

  const indianStateArray = [
    { stateobj: "Andhra Pradesh" },
    { stateobj: "Arunachal Pradesh" },
    { stateobj: "Assam" },
    { stateobj: "Bihar" },
    { stateobj: "Chhattisgarh" },
    { stateobj: "Goa" },
    { stateobj: "Gujarat" },
    { stateobj: "Haryana" },
    { stateobj: "Himachal Pradesh" },
    { stateobj: "Jammu and Kashmir" },
    { stateobj: "Jharkhand" },
    { stateobj: "Karnataka" },
    { stateobj: "Kerala" },
    { stateobj: "Madhya Pradesh" },
    { stateobj: "Maharashtra" },
    { stateobj: "Manipur" },
    { stateobj: "Meghalaya" },
    { stateobj: "Mizoram" },
    { stateobj: "Nagaland" },
    { stateobj: "Odisha" },
    { stateobj: "Punjab" },
    { stateobj: "Rajasthan" },
    { stateobj: "Sikkim" },
    { stateobj: "Tamil Nadu" },
    { stateobj: "Telangana" },
    { stateobj: "Tripura" },
    { stateobj: "Uttarakhand" },
    { stateobj: "Uttar Pradesh" },
    { stateobj: "West Bengal" },
    { stateobj: "Andaman and Nicobar Islands" },
    { stateobj: "Chandigarh" },
    { stateobj: "Dadra and Nagar Haveli" },
    { stateobj: "Daman and Diu" },
    { stateobj: "Delhi" },
    { stateobj: "Lakshadweep" },
    { stateobj: "Puducherry" }]

  const [total, setTotal] = React.useState(0)
  const [count, setCount] = React.useState(1)
  const [idProductType, setIdProductType] = useState(null)
  const [idProductName, setIdProductName] = useState('')
  const [clientName, setclientName] = React.useState('')
  const [clientPhone, setclientPhone] = React.useState('')
  const [clientEmail, setclientEmail] = React.useState('')
  const [OrderID, setOrderID] = useState("")
  const [PayemntID, setPayemntID] = useState("")
  const [GoaffproAmount, setGoaffproAmount] = useState(0)
    let uniqueID = ""
  const [fisrtVol, setFisrtVol] = React.useState(0)


  const  Url= process.env.REACT_APP_API
  const GAEventsTracker = useGAEventsTracker("Additive Manufacturing Service")




  var history = useHistory()

//  function for display razarpay for payment
  async function displayRazorpay() {
    var clientId = ""
    const payData = { total, count }
    const result = await payment(payData)
    // console.log(clientId);
    if (!result) {
      alert("Server error. Are you online?");
      return;
    }
    // Getting the order details back
    const { amount, id: order_id, currency } = result.data.respon.response;
    const OrderIDD = result.data.respon.response.id
    // console.log(result.data.respon.response)
    let sendData = { outputMm1, mmInput2, supRemov, voporPolish, free, hNo, area, Lankmark, Town, pincode, state, warning, count, pCount, idProductType, idProductName, svgDLoad, rushPaint, Painting, colorTypeId, Slider, handeling, printing, material, additional, deliver, gst, total, clientName, clientPhone, clientEmail, colorType, PaintingCost, OrderIDD  }
    generateToken(sendData)
    // const { amount, id: order_id, currency } = result.data.response;
    var re = result.data
    const options = {
      key: result.data.respon.key,
      amount: amount.toString(),
      currency: currency,
      name: "Additive Manufacturing",
      description: "Additive Manufacturing Service",
      order_id: order_id,
      handler: function (response) {
        // console.log(response);
        const dataSendOnSuccess = { clientId: uniqueID, response, re }
        // let respon = onSuccessfullPayment(dataSendOnSuccess)
        GAEventsTracker("Checkout Complete", `productName : "Additive Manufacturing"`);
        GAEventsTracker("Checkout Complete", `productPrice:${count * total}`)
        GAEventsTracker("Checkout Complete", `productQuantity:${count}`)
        GAEventsTracker("Checkout Complete", `productCategory:"YM Services"`)
        sendToTicket({ id: response.razorpay_payment_id, clientId: uniqueID, link: clientId.link })

      },

      theme: {
        color: "#193566",
      },
      prefill: {
        name: clientName,
        contact: clientPhone,
        email: clientEmail
      }
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
    document.getElementById("goBackHide").style.display = "block";
  }
const [confirmPayment, setconfirmPayment] = useState('')
useEffect(() => {
    if( ZohoId !== ""){

    bhejAttachment();

    }
    
  }, [ZohoId])

const bhejAttachment = async ()=>{
  if(ZohoId !== ""){
    for (let i = 0; i < files.length; i++) {
      // console.log('inloop')
      // fileData.append("file", filesinput[i].File)
      fileData.append("file", files[i].file)
      // console.log(files)
      // console.log(files[i])
      // console.log(files[i].file)
      // let resp = await uploads_file(formData1);
      //   // formData2.append("respon", JSON.stringify(resp.data))
      //   // formData1.delete("images");
      //   // sendattachment(filesinput[i])
    let reslove =  await axios.post(`${Url}/sendattachment/?id=${ZohoId}`, fileData).then(res =>console.log(res)).catch(err => console.log(err))
    fileData.delete("file");
    }

  }
}

  useEffect(() => {
    if(confirmPayment === "captured" && OrderID !== "" && PayemntID !== "" ){
      let str = document.cookie;

      str = str.split('; ');
      const result = {};
      for (let i in str) {
          const cur = str[i].split('=');
          result[cur[0]] = cur[1];
      }


      console.log(result);
      console.log(result.ref);
      const actualref = result.ref !== undefined ? result.ref : "" 
      console.log(GoaffproAmount)
       updateData( ZohoId, OrderID, PayemntID, GoaffproAmount, actualref)
    }
  }, [confirmPayment, OrderID, PayemntID])
  
//  function for send to ticket after successful payment in razorpay
  const sendToTicket = async (id) => {
    // console.log(id.id);
    let ifRight = await comfermationOfPayment({ id: id.id })
    console.log(ifRight.data.amount)
    if (ifRight !== undefined || ifRight !== null) {
      if (ifRight.data.id === id.id && ifRight.data.status === "captured" && ifRight.data.entity === "payment") {
        // history.push(`/checkyouorder/${id.clientId}`)
        setGoaffproAmount(ifRight.data.amount / 100)
        setthankupage("grid")
        setthankupagetext('Order Placed Successfully')
        setthankupageicon("fas fa-check")
        setthankupageBG("#51D015")
        // updateData(Zohotoken, ZohoId, ifRight.data.id, ifRight.data.order_id)
        setconfirmPayment(ifRight.data.status)
        setPayemntID(ifRight.data.id)
        setOrderID(ifRight.data.order_id)
        setmainDisplay("none")
        setstatusDisplay("none")
       
        // if(result.ref !== undefined){
          // const GoAffproAmount = ifRight.data.amount/100
          //  GoAffproCall(ifRight.data.order_id, result.ref)
        // }
        // ,"connect@theyoungminds.org","ym.designer001@gmail.com","ym.engineer001@gmail.com"
        const mailArray = ["ym.programmer005@gmail.com","connect@theyoungminds.org","ym.designer001@gmail.com","ym.engineer001@gmail.com"]
        await sendEmail({
          to: mailArray,
          subject: "successfull order details",
          content: `The client name : ${clientName}, <br>
                  The client phone : ${clientPhone},  <br>
                  The client Email : ${clientEmail},  <br>
                  clientZohoId : ${ZohoId}, <br>
                  Details are ==> <br>
                  layerHight: ${outputMm1},  <br>
                  inFill: ${mmInput2}%, <br>
                  productType:${idProductName}, <br>
                  productName:${idProductType}, <br>
                  supportRemove: ${supRemov}, <br>
                  voporPolish: ${voporPolish}, <br>
                  deliveryOrPickup: ${free},  <br>
                  address1: ${hNo}, <br>
                  address2: ${area}, <br>
                  Lankmark: ${Lankmark}, <br>
                  Town: ${Town}, <br>
                  pincode: ${pincode},  <br>
                  state: ${state}, <br>
                  count: ${count}, <br>
                  Painting: ${Painting}, <br>
                  rushPaint: ${rushPaint}, <br>
                  colorTypeId: ${colorTypeId}, <br>
                  color: ${colorType}, <br>
                  handelingFees: ${handeling}, <br>
                  printingFees: ${printing},  <br>
                  materialFees: ${material}, <br>
                  additionalFees: ${additional}, <br>
                  deliveryFees: ${deliver}, <br>
                  tax: ${gst}, <br>
                  netTotal: ${count * total},<br>
                  PaymentID: ${ifRight.data.id},<br>
                  order_id: ${ifRight.data.order_id}`
        })
        
      } else {
        setmainDisplay("none")
        setstatusDisplay("none")
        setthankupage("grid")
        setthankupageBG("red")
        setthankupageicon("fas fa-times")
        setthankupagetext('Order Failed')
      }
    }
  }


  var vstl = document.getElementById("vs_iframe");

  var x_axis = 0, y_axis = 0, z_axis = 0, area1 = 0, lastSelectedFile = File;
  var box_vol = 0, shape_vol = 0;
  var unit_1, unit_2, mult_1, mult_2, fixed = 0;
  var input_size = true;
  let letGetAddress, letGetPlace, colorChosse;

  var shade = '#DDDDDD';
  var element = 0;
//  function for files size may be.
  function commas_convert(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const [rushPaint, setRushPaint] = React.useState('')
  const [pickSuggetion, setPickSuggetion] = React.useState(-1)
  const [svgDLoad, setSvgDLoad] = React.useState(0)
  const [files, setFiles] = React.useState([])
  const [filesinput, setfilesinput] = React.useState([])
  const [totalVolume, setTotalVolume] = React.useState(0)

  var imgArry = [];


//  fuction for takeing file after user select file through input
  var saveImg = async (e) => {
    if (e.target.files[0] !== undefined) {
      var selectedFile = e.target.files[0];
      var selectedFile2 = e.target.files;
      // console.log(e)
      // console.log(selectedFile)
      // console.log(selectedFile2)
      setfilesinput(selectedFile2)
      vstl.contentWindow.postMessage({ msg_type: 'load', file: selectedFile }, '*');
      setDataP()
    }

  }
  const [imgCount, setImgCount] = React.useState(0)
  const [handeling, setHandeling] = React.useState(1000)
  const [printing, setPrinting] = React.useState(0)
  const [machineCost, setmachineCost] = React.useState(0)
  const [PaintingCost, setPaintingCost] = React.useState(0)
  const [PaintingCost1, setPaintingCost1] = React.useState(0)
  const [Painting, setPainting] = React.useState("")
  
  const [material, setMaterial] = React.useState(0)
  const [additional, setAdditional] = React.useState(0)
  const [additional1, setAdditional1] = React.useState(0)
  const [deliver, setDeliver] = React.useState(0)
  const [gst, setgst] = React.useState(0)
  const [finishing, setFinishing] = React.useState(0)
  var saveObj = []


  React.useEffect(() => {
    letGetAddress = document.getElementById("letGetAddress")
    letGetPlace = document.getElementById("letGetPlace")
    vstl = document.getElementById("vs_iframe");
    // alert(vstl)

    if (vstl !== null && vstl !== undefined) {
      vstl.onload = function () {

        vstl.contentWindow.postMessage({ msg_type: "get_info" }, "*");
        window.onmessage = function (e) {

          if (e.origin === "https://www.viewstl.com" && e.data.msg_type) {
            if (e.data.msg_type === "info") {

              vstl.contentWindow.postMessage({ msg_type: 'set_bgcolor', value: '#DEE3ED' }, '*');
              vstl.contentWindow.postMessage({ msg_type: 'set_color', value: shade }, '*');

              input_size = false; x_axis = e.data.x; y_axis = e.data.y; z_axis = e.data.z; area1 = e.data.area;
              shape_vol = e.data.volume / 1000;
              var volume = null
              if (shape_vol !== 0) {
                if (shape_vol * Math.pow(1, 3) < 1000000) {

                  volume = commas_convert((shape_vol * Math.pow(1, 3) * 1).toFixed(0 + fixed));

                } else {
                  alert("too big flie")
                  //svol.innerHTML = "Too big!";
                }
              }
              // var objfile = allSelectedFiles[allSelectedFiles.length-1];
              // console.log(allSelectedFiles);
              // console.log(objfile);
              var selectedlastfileele = document.getElementById('selectedfile');
              var selectedlastfile = selectedlastfileele.files.item(0);
              imgArry.push({
                volume: volume, name: selectedlastfile.name, x_axis, y_axis, z_axis,
                file: selectedlastfile
              });

              setFiles([])

              setFiles(imgArry)
              callForVol(volume)
              //var link = document.getElementById('my_link');

              //link.click();
              //console.log(link);

            }
          }
        }
      }

    }






    
    
    

    
    if (Slider === 3) {
      var allMath = handeling + additional + ((material  + deliver  + machineCost + PaintingCost + printing + finishing) * count)
      var centerV = (((allMath) / 100) * 12).toFixed(2);
      setgst(centerV)
    }
    
    if (Slider === 3) {
      setTimeout(() => {
        setTotal(Math.round(handeling + additional + ((material  + deliver  + machineCost + PaintingCost + printing + finishing) * count) + parseInt(gst)))
      }, 500);
    }






    if (Slider === 0) {
      if (svgDLoad === 1) {
        document.getElementById("inputload").style.display = "none";
        document.getElementById("inputLoading").style.display = "flex";
      } else {
        setTimeout(() => {
          if (document.getElementById("inputload") !== null) {
            document.getElementById("inputload").style.display = "flex";
            document.getElementById("inputLoading").style.display = "none";
          }

        }, 2000)
      }
    }





    if (Slider === 1) {
      if (idProductType !== null) {
        const noS = parseInt(idProductType.split(",")[1]);
        if (noS !== -1) {
          document.getElementsByName("checkBox1")[noS].checked = true;
        }
      }
    }




    if (pCount === null) {
      document.getElementsByName("pickup")[0].click()
    }
    //    console.log( document.getElementsByName("pickup"));

    if (free === "pickup") {
      setPCount(0)
    } else if (free === "delivery") {
      setPCount(1)
    }

    if (document.getElementsByName('pickup')[pCount] !== undefined) {
      if (pCount !== null) {
        document.getElementsByName('pickup')[pCount].checked = true;
      }
    };
    if (Slider === 3 && rushPaint === "rushPaint") {
      // console.log("slider 3")
      document.getElementsByName("checkBox")[0].checked = true;
    }

    if (Slider === 1 && pickSuggetion >= 0) {
      // console.log("slider 1")
      document.getElementsByClassName('suggestionTab')[pickSuggetion].style.borderLeft = "5px solid #193566"
    }

  });

  React.useEffect(() => {

    if (rushPaint !== "") {
      setAdditional(500)
    }
    if (rushPaint === "") {
      setAdditional(0)
    }

    // console.log(additional)
  }, [rushPaint]);

  useEffect(() => {
    // console.log(count)
    let tempTotal = handeling + additional +(( material + machineCost+ PaintingCost + deliver + printing + finishing) * count)
    var centerV = (((tempTotal) / 100) * 12).toFixed(2);
    // console.log(centerV)
    setgst(centerV)
    setTotal(Math.round(tempTotal + parseInt(centerV)))
  }, [count])
  useEffect(() => {
    // console.log(total)
    // console.log(gst)
  }, [total,gst])
  

  React.useEffect(() => {

    if (Painting !== "") {
      setPaintingCost(PaintingCost1)
    }
    if (Painting === "") {
      setPaintingCost(0)
    }
  }, [Painting]);

  const [colorType, setColorType] = useState('')

  const saveValue = (e, index, name) => {
    setIdProductType(e.target.value)
    // console.log(materialType)
    setIdProductName(name)
    // console.log(index)
    // console.log(idProductType)
  }


  const [mmInput, setMmInput] = React.useState('0')
  const [mmInput2, setMmInput2] = React.useState('0')
  const [supRemov, setSupRemov] = React.useState("supportRemoval")
  const [voporPolish, setVoporPolish] = React.useState()
  const outputMm = 0.4 - mmInput * 0.003
  const outputMm1 = outputMm.toPrecision(1)

  const [free, setFree] = React.useState(1)
  const [cousto, setCousto] = React.useState(null)
  const [hNo, setHNo] = React.useState('')
  const [area, setArea] = React.useState('')
  const [colorTypeId, setcolorTypeId] = React.useState('')
  const [Lankmark, setLankmark] = React.useState('')
  const [Town, setTown] = React.useState('')
  const [pincode, setPincode] = React.useState('')
  const [state, setState] = React.useState('')
  const [warning, setWarning] = React.useState('')
  const [pCount, setPCount] = React.useState(null)
  const [fls, setFls] = React.useState(false)
  const [arrray, setArrray] = React.useState([])

  const callForVol = (a) => {
    if (imgCount === 0) {
      setTotalVolume(a)
      setImgCount(imgCount + 1)
    }
  }

  const sendData = async (e) => {

    totalPrice = total * count;
    await ("Added to CarGAEventsTrackert", `productName : "Additive Manufacturing"`);
    await GAEventsTracker("Added to Cart", `productPrice:${totalPrice}`);
    await GAEventsTracker("Added to Cart", `productQuantity:${count}`);
    await GAEventsTracker("Added to Cart", `productCategory:"YM Services"`);

    if (e.target.dataset.id === '0') {
      if (files[0] === undefined) {
        setWarning("add a file")
        document.getElementById("n").click();
      } else if (document.getElementById('inputLoading').style.display !== 'none') {
        setWarning("please wait")
        document.getElementById("n").click();
      }
      else {
        setsecondAcc('block')
        setrotateIcon2("lock-open")
        setfirstAcc('none')
        setrotateIcon1("lock")
        scrollToPrev(secondRef)
        
      }
    }
    if (e.target.dataset.id === '1') {
      if (cousto === null) {
        setWarning("click on any option")
        document.getElementById("n").click();
      } else {
        // console.log(outputMm1)
        // console.log(mmInput2)
        if (files[0] !== undefined) {


          for (let index = 0; index < files.length; index++) {
  
            element = element + parseInt(files[index].volume);
            if (outputMm1 == 0.1) {
              setAdditional1((element * 4) + ((0.02 * element) * mmInput2))
              // console.log(mmInput2)
              // console.log(element)
              
            } else if(outputMm1 == 0.2) {
              setAdditional1((element * 3) + ((0.02 * element) * mmInput2))
              // console.log(mmInput)
            }
             else if(outputMm1 == 0.3) {
              setAdditional1((element * 2) + ((0.02 * element) * mmInput2))
              // console.log(mmInput)
            }
            else{
              setAdditional1((element * 1.5) + ((0.02 * element) * mmInput2))
              // console.log(mmInput2)
    
            }
            // console.log(element);
          };
        }
        setSlider(Slider + 1); // 1
        setsecondAcc('none')
        setrotateIcon2("lock")
        setthirdAcc('block')
        setrotateIcon3("lock-open")
        scrollToPrev(thirdRef)
        setTimeout(() => {
          document.getElementsByName("checkBox1")[1].click()
          document.getElementById("defultColor").click()
        }, 300);
      }
    }

    if (e.target.dataset.id === '2') {
      if (idProductType === "" || colorType === "") {
        setWarning("chosse any fild")
        document.getElementById("n").click();
      } else {
        setSlider(Slider + 1); // 2
        setfourthAcc('block')
        // console.log(f)
        // console.log(outputMm1)
        // console.log(mmInput2)
        // console.log(additional1)
        setrotateIcon4("lock-open")
        setthirdAcc('none')
        setrotateIcon3("lock")
        scrollToPrev(fourthRef)
      }
    }
    if (e.target.dataset.id === '3') {
      if(supRemov === "supportRemoval" && voporPolish === "vaporPolishing"){
        setFinishing(500)

      }else if(supRemov === "supportRemoval" || voporPolish === "vaporPolishing"){
        setFinishing(250)

      }else{
        setFinishing(0)
      }
      // if (supRemov === "supportRemove") {
      //   setFinishing(250)
      // };
      // if (voporPolish === "voporPolish") {
      //   if (supRemov === "supportRemove") {
      //     setFinishing(500)
      //   } else {
      //     setFinishing(250)
      //   }
      // };


      if (free === "delivery") {
        if (state === "" || pincode === "" || area === "" || Town === "" || clientName === "" || clientPhone === "" || clientEmail === "") {
          setWarning("Please fill all field")
          document.getElementById("n").click()
        }
        else {
          let pattern = /^[a-zA-Z0-9.-_]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
          if (clientPhone.length === 10) {

            if (pattern.test(clientEmail)) {
              setSlider(Slider + 1); // 3
              setfourthAcc('none')
              setrotateIcon4("lock")
              setfifthAcc('block')
              setrotateIcon5("lock-open")
              scrollToPrev(fifthRef)
            } else {
              setWarning("Please check your email")
              document.getElementById("n").click()
            }

          } else {
            setWarning("Please check your phone number ")
            document.getElementById("n").click()
          }
        }
      } else if (free === "pickup") {
        if (clientName === "" || clientPhone === "" || clientEmail === "") {
          setWarning("Please fill all fild")
          document.getElementById("n").click()
        } else {
          let pattern = /^[a-zA-Z0-9.-_]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
          if (clientPhone.length === 10) {
            if (clientEmail !== "") {
              if (pattern.test(clientEmail)) {
                setSlider(Slider + 1); // 3
                setfourthAcc('none')
                setrotateIcon4("lock")
                setfifthAcc('block')
                setrotateIcon5("lock-open")
                scrollToPrev(fifthRef)
              } else {
                setWarning("Please check your email")
                document.getElementById("n").click()
              }
            }
          } else {
            setWarning("Please check your phone number ")
            document.getElementById("n").click()
          }
        }

      } else if (free === "") {
        setWarning("Please choose a field")
        document.getElementById("n").click()
      }



      if (files[0] !== undefined) {


        for (let index = 0; index < files.length; index++) {

          element = element + parseInt(files[index].volume);
          // console.log(element);
        };

        setPrinting(element * 10)
        setmachineCost(7.5 * element)
        setPaintingCost1(5 * element)

        if (idProductType === "material,0" || idProductType === "material,1") {
          if (colorType === "black" || colorType === "white") {
            setMaterial(additional1 + 0);

          } else {
            setMaterial(additional1 + (element * 2))

          }
        } else if (idProductType === 'material,2') {
          setMaterial(additional1 + (element * 250))
        } else {
          if (colorType === "black" || colorType === "white") {
            setMaterial(additional1 + (element * 5))

          } else {
            setMaterial(additional1 + (element * 7))
            // console.log(additional1)
          }
        }



        if (pCount === 1) {
          if (state.toLowerCase() === "west bengal" || state.toLowerCase() === "westbengal" || state.toLowerCase() === "w.b." || state.toLowerCase() === "wb") {
            if (pincode.indexOf(7) === 0) {
              if (Town.toLocaleLowerCase() === "kolkata") {

              }
              setDeliver(element * 1 * 0.6)

            }
          } else {
            setDeliver(element * 1 * 0.8)

          }
        }
      }
    }


    if (e.target.dataset.id === '4') {
      if (count <= 0) {
        setWarning("Please give positive integer");
        document.getElementById("n").click();
      } else {
        setmainDisplay("none")
        
        setstatusDisplay("flex")
        // console.log(files)
        displayRazorpay()
        var formData1 = new FormData()
        var formData2 = new FormData()
        let testingArray= []

        /*##Why this code is not comfortable for send image because it react so fast and crash the backend block to send response*/
        
        // files.map( async (img, index) => {
            //     formData1.append("images", img.file)
            //   let resp = await axios.post("${Url}/upload_files",formData1);
            //   console.log(resp.data);
            //     formData2.append("respon",resp.data)
            //     formData1.delete("images");
            //     console.log(formData1.getAll("images"));
            // })
            // var imgSasveArray = formData2.getAll("respon")
            // let sendData = { outputMm1, mmInput2, supRemov, voporPolish, free, hNo, area, Lankmark, Town, pincode, state, warning, count, pCount, idProductType, idProductName, svgDLoad, rushPaint, Painting, colorTypeId, Slider, handeling, printing, material, additional, deliver, gst, total, clientName, clientPhone, clientEmail, colorType, PaintingCost  }
            // generateToken(sendData)
            
        // let sendRes = await postDataFor3D(sendData)
        // uniqueID = sendRes.data._id
        // console.log(uniqueID)
      }
    }
  }
  const makeActive = (a) => {
    for (let index = 0; index < document.getElementsByClassName('suggestionTab').length; index++) {
      document.getElementsByClassName('suggestionTab')[index].style.borderLeft = ""
    }
    if (a >= 0) {
      setPickSuggetion(a)
      document.getElementsByClassName('suggestionTab')[a].style.borderLeft = "5px solid #193566"
    } else {
      setPickSuggetion(document.getElementsByClassName('suggestionTab').length - 1);
      document.getElementsByClassName("suggestionTab")[document.getElementsByClassName('suggestionTab').length - 1].style.borderLeft = "5px solid #193566"
    }
  }

  const tiggerInput = () => {
    var inputTrigger = document.getElementById("selectedfile")
    inputTrigger.click()
  }
  const preView = (index) => {
    var vstls = document.getElementById("vs-iframe");
    var dnone = document.getElementById("dnone");
    vstls.style.display = "flex"
    dnone.style.display = "flex"
    vstls.contentWindow.postMessage({ msg_type: 'load', file: files[index].file }, '*');

    saveObj.push(files[index].volume, files[index].name, Math.round(files[index].x_axis), Math.round(files[index].y_axis), Math.round(files[index].z_axis))
    setArrray([]);
    setArrray(saveObj)

  }
  const deleted = (index) => {
    index <= 0 ? files.shift(index) : files.splice(index, index)
    var a = files;
    // setFiles([])

    setTimeout(() => {
      setFiles(a)
      var elementVol = 0
      for (let index = 0; index < a.length; index++) {
        elementVol = elementVol + parseInt(a[index].volume);
      }
      setTotalVolume(elementVol)
      if(files.length === 0){
        document.getElementById('selectedfile').value='';
      }
    }, 300)
  }
  const addPinCode = (e) => {
    if (e.target.value.length <= 6) {
      setPincode(e.target.value);
    }

  }
  const setDataP = () => {
    setSvgDLoad(1)
    setTimeout(() => {
      var element1 = 0
      for (let index = 0; index < files.length; index++) {
        element1 = element1 + parseInt(files[index].volume);
      }
      if (imgCount !== 0) {

        setTotalVolume(element1)
        // console.log(element1);
      }
      setImgCount(imgCount + 1)
      setSvgDLoad(0)
    }, 3000)
  }
  const defultSet = () => {
    if (cousto === 1) {
      document.getElementsByName("checkBox1")[1].click()
      document.getElementById("defultColor").click()
    } else {
      document.getElementsByName("checkBox1")[1].click()
      document.getElementById("defultColor").click()
    }
  }

  var price = 100;

  return (
    <div>
      <Nav/>
      <Helmet>
                {/* <title>Music Website</title> */}
                <meta
                    name="description"
                    content="Create, innovate & develop are the backbone of our diverse organization. We are committed to facilitating, enhancing and developing sustainable, resilient, and inclusive infrastructure."
                />
                <meta
                    name="keywords"
                    content="Additive Manufacturing"
                />
            </Helmet>
      <div className="manufactutingService" style={{ display: mainDisplay }}>
        <div className="sectionAbout">
          <div className="imgContainer">
            <img src='/image/about.jpg' alt="loading" />
          </div>
          <div className="squareDOM"><div className="innerSquare"><div className="boxSquare"></div></div></div>
          <div className="contentAbout">
            <div className='bannerHeading_c'>
              <div className="headingDis">
                <Link to='/service' > <i className="fas fa-chevron-left utility"></i></Link>
                <div>
                  <h4>ADDITIVE</h4>
                  <h2>MANUFACTURING</h2>
                  {/* <p>Description Goes Here...</p> */}
                </div>
              </div>
            </div>
            <div className="midHeading">
              <div className='square'></div>
              <h4></h4>
              <h2 className="heading">DISCOVER SCIENTIFIC</h2>
              <h2 className="heading">KNOWLEDGE AND STAY</h2>
              <h2 className="heading">CONNECT TO THE WORLD</h2>
              <h2 className='heading shadowheading'>OF STEAM</h2>
              <h4></h4>
            </div>
          </div>
        </div>

        {/* <Mainpage title ="." midHeading ="Library For All___" companyName="Discover scientific" LibraryDetail="Knowledge and stay"  LibraryDetails= "connect to the world" purpose= "of STEAM" community="" display="none" img="/image/community.jpg" toggleDisplay="none" buttonDisplay= "none" headingDisplay="block" btnText="Go To Our Library" btnLink="http://library.theyoungminds.org/blogs/" _display="none" buttonDisplay_store="none" homeDisplayBtn="none" buttonDisplay_service="none"/> */}
        <div className="newserviceDOM">
          {/* <p>Beyond the sense of community and opportunity that we strive to provide, XYZ is also the place to find out about amazingBeyond the sense of community and opportunity that we strive to provide, XYZ is also the place to find out about amazing</p> */}
          <div className="fontHeading1">
            <h4>FOLLOW</h4>
            <h2>Steps : </h2>
            <p className='newserviceDOM_p'>Our professional designers will give your 3D designs, the feel of realism, use it on your website, NFT's, virtual cataloging and many more creative ways.</p>
          </div>
          <div className="service_accordian">
            <div className="Uploadfile_acc" ref={firstRef}>
              <div className="toggleTitle_acc">
                <div>
                  <h4>1 : Upload Your File</h4>
                  <span>(STL or Zipped STL Files)</span>
                </div>
                 <i className={`fas fa-${rotateIcon1} utility`}></i>
              </div>
              <div className="uploadFile_body" style={{ display: firstAcc }}>
                <div id="inputload" style={{ flexDirection: "column" }}>
                  <button className="uploadBlock btton">
                    <form encType="multipart/form-data" id="form" >
                      <input type="file" accept='.stl' className="hdn-input" style={{ cursor: "pointer" }} onChange={saveImg} name="" id="selectedfile" />
                    </form>
                    <div className="dashBorder">
                      <UploadSvg />
                    </div>
                    <iframe name="viewstl" id="vs_iframe" src="https://www.viewstl.com/?embedded&bgcolor=gray&color=white&noborder=yes&orientation=bottom" className='none' ></iframe>
                  </button>
                  <div className="d-in clor addMore" style={{ display: "flex", flexDirection: "row", paddingLeft: "10px", cursor: "pointer", color: "#193566", alignItems: "center" }}>

                    <div style={{ cursor: "pointer" }} onClick={tiggerInput} className="circle">
                      <div style={{ cursor: "pointer", color: "#193566 !important" }} className="plusSymbol" ></div>
                    </div>

                    <div className="mx-2">
                      <p style={{ marginBottom: "0px !important" }}>Add more Files</p>
                    </div>
                  </div>
                  <div className="fileListBox">
                    {files.map((any, index) => <div key={index} className="pointText"> <div style={{ maxWidth: "193px", overflow: "auto" }}>  {any.name} </div>  <div style={{ display: "flex", flexDirection: "row", alignItems: "center", cursor: "pointer" }}>  <div onClick={() => { preView(index) }}> <EyeSvg width="18px" height="20px" /> </div> <hr className='routetion' style={{ width: "20px" }} /> <DeleteSvg width="15px" onClick={(e) => { deleted(index) }} height="20px" />   </div>

                    </div>)}
                  </div>

                </div>
                <div id="inputLoading" style={{ height: "110px", justifyContent: "center" }}>
                  <div className="d-flex align-items-center" style={{ width: "200px" }}>
                    <strong>Loading...</strong>
                    <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
                  </div>
                </div>
                <div id="dnone">
                  <div style={{ borderRadius: "23px" }} >
                    <div className='show3D' >
                      <iframe name="viewstl" id="vs-iframe" src="https://www.viewstl.com/?embedded&bgcolor=gray&color=white&noborder=yes&orientation=bottom" ></iframe>
                      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", color: "#193566" }} >
                        <div>Volume : :</div>   {arrray[0]} cm3
                      </div >
                      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", color: "#193566" }} >
                        <div>Name :</div>     {arrray[1]}
                      </div>
                      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", color: "#193566" }}>
                        <div>X-coordinate :</div>    {arrray[2]} mm
                      </div>
                      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", color: "#193566" }} >
                        <div>Y-coordinate :</div>    {arrray[3]} mm
                      </div>
                      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", color: "#193566" }} >
                        <div>Z-coordinate :</div>   {arrray[4]} mm
                      </div>
                      <button className='btn btn-danger' onClick={() => { document.getElementById("vs-iframe").style.display = "none"; document.getElementById("dnone").style.display = "none" }} > close it </button>
                    </div>
                  </div>
                </div>
                <div className="d-in any clor buttonStyle">
                  <span></span>

                  <button data-id='0' onClick={sendData} className="submitAll">
                    Next
                  </button>
                </div>
              </div>
            </div>
            <div className="Uploadfile_acc" ref={secondRef}>
              <div className="toggleTitle_acc">
                <div>
                  <h4>2 : Choose Quality</h4>
                  <span>Choose Your Desirable Quality</span>
                </div>
                <i className={`fas fa-${rotateIcon2} utility`}></i>
              </div>
              <div className="uploadFile_body" style={{ display: secondAcc }}>
                <div style={{ display: "flex", flexDirection: "column", marginBottom: "10px" }}>
                  <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }} >
                    <div className='suggestionTips'> <h4> Our Suggestions </h4> </div>
                    <div>

                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around" }} >
                    {suggestion.map((any, index) => {
                      return (
                        <div className='suggestionTab  px-2' data-id={index} onClick={() => {
                          setCousto(0); setSupRemov(any.supportRemoval); setVoporPolish(any.vaporPolishing); setMmInput(any.inFill2); setMmInput2(any.inFill); makeActive(index); setFinishing(any.plus); toggleYes(index); setcustomizeD("none"); checkboxInpToggle(any.supportRemoval, any.vaporPolishing);}} key={index} >
                          <div className="yesIcon"><i className={`fas fa-check utility ${index === yesIcon ? "IconYes" : ""}`}></i></div>
                          <div style={{ minWidth: "100%" }}>
                            <h4 style={{ fontWeight: "700", marginBottom: "10px!important" }}> ₹ {totalVolume !== 0 ? Math.round((totalVolume * any.multi) + any.plus + 1000 + (((totalVolume * any.multi) + any.plus + 1000) * 18 / 100)) : 0} </h4> <h4 className='suggestionQLHeading' style={{ fontWeight: "600", background: '#C2CBDB', display: 'inline' }}>{any.typeName}</h4>
                          </div>
                          <p style={{ color: "#a4b3c9" }} > ({any.layerHight}mm, {any.inFill}%, {any.supportRemoval} , {any.vaporPolishing})   </p>
                          <hr />

                        </div>
                      )
                    })}
                    <div className='suggestionTab px-2' onClick={() => { setCousto(1); setSupRemov("supportRemoval"); setVoporPolish(""); makeActive(-1); setcustomizeD("block"); setyesIcon(3) }} >
                      <div className="yesIcon"><i style={{ display: customizeD }} className={`fas fa-check utility`}></i></div>
                      <h4 style={{ fontWeight: "700", minWidth: "100%", }}>Customise </h4>
                      <p style={{ color: "#a4b3c9" }} > (You can customise on 3rd page If you want)</p>
                      <hr />

                    </div>
                  </div>
                </div>
                <div className="custamizeDOM" style={{ display: customizeD }}>
                  <div className="bottomM-1">
                    <div style={{ fontSize: "17px" }} className='fontHeading2'><h4>Layer Height:</h4> </div>
                    <div className="dashFild">
                      <p>{outputMm1} mm</p>
                    </div>
                  </div>

                  <div className="inputRange">
                    <div className="inpuText">
                      <p> 0.4 mm</p>
                    </div>
                    <input type="range" style={{ background: `linear-gradient(to right, #193566 0%, #193566 ${mmInput}%, #fff 0%, #fff 100%)` }} onChange={(e) => { setMmInput(e.target.value) }} value={mmInput} className="inputN" />
                    <div className="inpuText">
                      <p>0.1 mm</p>
                    </div>
                  </div>


                  <div className="bottomM-1">
                    <div style={{ fontSize: "17px" }} className='fontHeading2'><h4>Infill Percentage:</h4>  </div>
                    {/* <div className="dashFild" >
                      <p>{mmInput2} %</p>
                    </div> */}
                    <input className='toggleinputuser' type="number" min="0" max="100" value={mmInput2} onChange={(e) => { setMmInput2(e.target.value > 100 ? 100 : e.target.value) }} />
                  </div>

                  <div className="inputRange">
                    <div className="inpuText">
                      <p> 0%&nbsp;&nbsp;</p>
                    </div>
                    <input type="range" style={{ background: `linear-gradient(to right, #193566 0%, #193566 ${mmInput2}%, #fff 0%, #fff 100%)` }} onChange={(e) => { setMmInput2(e.target.value) }} value={mmInput2} className="inputN" />
                    <div className="inpuText ">
                      <p>  &nbsp;&nbsp; 100%</p>
                    </div>
                  </div>



                  <div className="rowFlex my-3">
                    <div style={{ fontSize: "17px" }} className='fontHeading2'><h4>Support Removal:</h4>
                      <div className="underCap">
                        <span>(weight * 1.33)</span>
                      </div>
                    </div>
                    {/* <label className='blockLine'> <input type="checkbox" /> <span onClick={() => { supRemov === "supportRemoval" ? setSupRemov("") : setSupRemov("supportRemoval") }} className='checked toggle_support_input'  ></span>  </label> */}
                    <div className="inputfieldforcheckbox" onClick={() => { setSupRemov("supportRemoval"); setcheckDISC("block"); }}><i className="fas fa-check" style={{display: "block"}}></i></div>
                  </div>


                  <div className="rowFlex my-3">

                    <div style={{ fontSize: "17px" }} className='fontHeading2'><h4>Vapor Polishing:</h4>
                      <div className="underCap">
                        <span>  (weight * 1.25 ; eligible materials: ABS/PLA/PC/BendLAY/HIPS)</span>
                      </div>
                    </div>
                    {/* <label className='blockLine'> <input type="checkbox" /> <span onClick={() => { voporPolish === "vaporPolishing" ? setVoporPolish("") : setVoporPolish("vaporPolishing") }} className='checked toggle_polish_input'  ></span>  </label> */}
                    <div className="inputfieldforcheckbox" onClick={() => { setVoporPolish(voporPolish === "vaporPolishing"? "":"vaporPolishing"); setcheckDISC1(checkDISC1 === "none"?"block":"none"); }}><i className="fas fa-check" style={{display: checkDISC1}}></i></div>
                  </div>


                  <div className="rowFlex my-2">
                    <div className="fontSize20px">
                      Our Suggestions
                    </div>
                    < SSvg />
                  </div>
                  <div style={{ display: "flex" }}>

                    {suggestion.map((any, index) => {
                      return (
                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }} className='letGetPlace' key={index} >

                          <h4 onClick={() => { setSupRemov(any.supportRemoval); setVoporPolish(any.vaporPolishing); setMmInput(any.inFill2); setMmInput2(any.inFill); setFinishing(any.plus); checkboxInpToggle(any.supportRemoval, any.vaporPolishing); }}>{any.typeName}</h4>

                        </div>
                      )
                    })}
                  </div>

                </div>
                <div className="d-in any clor buttonStyle">
                  <button data-id='1' onClick={checkingID} className="submitAll">
                    Prev
                  </button>

                  <button data-id='1' onClick={sendData} className="submitAll">
                    Next
                  </button>
                </div>
              </div>
            </div>
            <div className="Uploadfile_acc" ref={thirdRef}>
              <div className="toggleTitle_acc">
                <div>
                  <h4>3 : Choose Preferred Material</h4>
                  <span>Choose Your Desirable Quality</span>
                </div>
                <i className={`fas fa-${rotateIcon3} utility`}></i>
              </div>
              <div className="uploadFile_body" style={{ display: thirdAcc }}>
                <div className="materialVaule">
                  <div>{materialType.map((productType, index) => <label key={index} className='blockLine'> <input type="radio" onClick={(e)=> {saveValue(e, index,productType.name )}} value={`${productType.id},${index}`} name="checkBox1" /> <span className='checked'  ></span> {productType.name} </label>)} </div>
                </div>
                <br />
                <div className="fontHeading2">
                  <h4>  Choose preferred colour</h4>
                </div>
                <br />
                <div className="absluteContainer">

                  <div className="colorChosse" >
                    <br />
                    <br />
                    <div className="flexClr">
                      <div className="clrVlue" onClick={() => { setcolorTypeId('white'); setColorType('White') }} style={{ cursor: "pointer", backgroundColor: "white" }} id="defultColor"></div>
                      <div className="clrVlue" onClick={() => { setcolorTypeId('black'); setColorType('Black') }} style={{ cursor: "pointer", backgroundColor: "black" }} ></div>
                    </div>
                    <hr />
                    <div className="flexClr">
                      {colors.map((productType, index) => <div key={index} className="clrVlue" onClick={() => { setColorType(productType.name); setcolorTypeId(productType.id) }} style={{ cursor: "pointer", backgroundColor: `${productType.value}` }}></div>)}

                    </div>
                  </div>
                  <div className="roundRetrangel">
                    {colorType === "" ? 'select Item' : <> <div className="clrVlue" style={{ cursor: "pointer", backgroundColor: `${colorType}` }} ></div> {colorType} </>} <DropDownsvg className='rotation' />
                  </div>
                </div>
                <div className="d-in any clor buttonStyle">
                  <button data-id='2' onClick={checkingID} className="submitAll">
                    Prev
                  </button>

                  <button data-id='2' onClick={sendData} className="submitAll">
                    Next
                  </button>
                </div>
              </div>
            </div>
            <div className="Uploadfile_acc" ref={fourthRef}>
              <div className="toggleTitle_acc">
                <div>
                  <h4>4 : Delivery</h4>
                </div>
                <i className={`fas fa-${rotateIcon4} utility`}></i>
              </div>
              <div className="uploadFile_body" style={{ display: fourthAcc }}>
                <div className="clmScoler">
                  <div className="fontChipkuInput" style={{ marginBottom: "10px" }} >
                    <div style={{ fontSize: "14px", fontWeight: "bold", paddingLeft: "8px" }} className='fontHeading2' ><h4 style={{ marginTop: "0px" }}>Name :</h4></div>
                    <input type="text" height="45px" name='name' value={clientName} onChange={(e) => { setclientName(e.target.value) }} className="form-control shadowInput col-12 inputBox_u" style={{ height: "27px" }} placeholder="Enter Your Full Name" />
                  </div>
                  <div className="fontChipkuInput" style={{ marginBottom: "10px" }} >
                    <div style={{ fontSize: "14px", fontWeight: "bold", paddingLeft: "8px" }} className='fontHeading2' ><h4>Phone :</h4></div>
                    <input type="text" height="45px" name='phone' value={clientPhone} onChange={(e) => { setclientPhone(e.target.value) }} className="form-control shadowInput col-12 inputBox_u" style={{ height: "27px" }} placeholder="Enter Your phone Number" />
                  </div>
                  <div className="fontChipkuInput" style={{ marginBottom: "10px" }} >
                    <div style={{ fontSize: "14px", fontWeight: "bold", paddingLeft: "8px" }} className='fontHeading2' ><h4>Email :</h4></div>
                    <input type="text" height="45px" name='email' value={clientEmail} onChange={(e) => { setclientEmail(e.target.value) }} className="form-control shadowInput col-12 inputBox_u" style={{ height: "27px" }} placeholder="Enter Your Email" />
                  </div>
                  <br />
                  <div className='' >
                    <div className="fontHeading2">
                      <h4>Shipping:</h4>
                    </div>
                    <label className='blockLine mx-3' onClick={() => { setFree("pickup") }} > <input type="radio" name="pickup" /> <span onClick={() => { setFree("pickup") }} className='checked'  ></span> pickup (free) </label>
                    <label className='blockLine  mx-3' onClick={() => { setFree("delivery") }} style={{ marginBottom: "20px" }} > <input type="radio" name="pickup" /> <span onClick={() => { setFree("delivery") }} className='checked'  ></span>delivery ($5.80 USD + $0.01 USD/g)  </label>
                  </div>
                  {free === "delivery" ? <div id='letGetAddress' style={{ flexDirection: "column" }}>
                    <div className="fontHeading2">
                      <h4 className="delHead">Delivery At:</h4>
                    </div>
                    <div className="rowFlex" style={{ marginTop: "20px" }}>
                      <div className="fontChipkuInput" style={{ marginBottom: "10px" }} >
                        <div style={{ fontSize: "14px", fontWeight: "bold", paddingLeft: "8px" }} className='fontHeading2' ><h4>Pincode :</h4></div>
                        <input type="number" height="45px" name='pincode' value={pincode} onChange={(e) => { addPinCode(e) }} className="form-control shadowInput col-10" style={{ height: "35px" }} placeholder="Enter Your Pincode" />
                      </div>

                      <div className="fontChipkuInput" style={{ marginBottom: "10px" }} >
                        <div style={{ fontSize: "14px", fontWeight: "bold" }} className='fontHeading2'  ><h4>State :</h4></div>
                        <Form.Select aria-label="Default select example" value={state} onChange={(e) => { setState(e.target.value) }} className="form-control shadowInput col-10" style={{ borderRadius: "10px", height: "35px" }} >
                          <option className="form-control shadowInput col-10" style={{ borderRadius: "10px", height: "35px" }} value='' >Choose Your State</option>

                          {indianStateArray.map((stateArray, index) => {
                            return (
                              <option value={stateArray.stateobj} key={index}>{stateArray.stateobj}</option>
                            )

                          })}

                        </Form.Select>
                      </div>
                    </div>
                    <div className="fontChipkuInput" style={{ marginBottom: "10px" }} >
                      <div style={{ fontSize: "14px", fontWeight: "bold", paddingLeft: "8px" }} className='fontHeading2' ><h4>Town/City:</h4></div>
                      <input type="text" name='city' height="45px" value={Town} onChange={(e) => { setTown(e.target.value) }} className="form-control shadowInput col-12 inputBox_u" style={{ height: "27px" }} placeholder="Enter Your Town/City" />
                    </div>
                    <div className="fontChipkuInput" style={{ marginBottom: "10px" }} >
                      <div style={{ fontSize: "14px", fontWeight: "bold", paddingLeft: "8px" }} className='fontHeading2' ><h4>Flat, House no, Building, Apartment:</h4></div>
                      <input type="text" name='houseNo' height="45px" value={hNo} onChange={(e) => { setHNo(e.target.value) }} className="form-control shadowInput col-12 inputBox_u" style={{ height: "27px" }} placeholder="Enter Your Apartment/House no. etc" />
                    </div>
                    <div className="fontChipkuInput" style={{ marginBottom: "10px" }} >
                      <div style={{ fontSize: "14px", fontWeight: "bold", paddingLeft: "8px" }} className='fontHeading2' ><h4>Area, Street, Sector:</h4></div>
                      <input type="text" name='street' height="45px" value={area} onChange={(e) => { setArea(e.target.value) }} className="form-control shadowInput col-12 inputBox_u" style={{ height: "27px" }} placeholder="Enter Your Area/Street/Sector" />
                    </div>
                    <div className="fontChipkuInput" style={{ marginBottom: "10px" }} >
                      <div style={{ fontSize: "14px", fontWeight: "bold", paddingLeft: "8px" }} className='fontHeading2' ><h4>Lankmark (Optional):</h4></div>
                      <input type="text" name='landmark' height="45px" value={Lankmark} onChange={(e) => { setLankmark(e.target.value) }} className="form-control shadowInput col-12 inputBox_u" style={{ height: "27px" }} placeholder="Enter Your Landmark" />
                    </div>
                  </div> : <div id="letGetPlace" className="p_LGP">
                    <div className="addActive"></div>
                    <p>9, Mangoe Ln, Mission Row Extension, Esplanade, Chowringhee North, Bow Barracks, Kolkata, West Bengal 700001</p>
                  </div>}
                </div>
                <div className="d-in any clor buttonStyle">
                  <button data-id='3' onClick={checkingID} className="submitAll">
                    Prev
                  </button>

                  <button data-id='3' onClick={sendData} className="submitAll">
                    Next
                  </button>
                </div>
              </div>
            </div>
            <div className="Uploadfile_acc" style={{ borderBottom: '1px solid #97A7C3' }} ref={fifthRef}>
              <div className="toggleTitle_acc">
                <div>
                  <h4>5 : Order Summary</h4>
                </div>
                <i className={`fas fa-${rotateIcon5} utility`}></i>
              </div>
              <div className="uploadFile_body" style={{ display: fifthAcc }}>
                {/* <div className="rowFlex my-2">
                  <div className="fontHeading2" style={{ fontSize: "21px" }}>
                    <h4>Your Cart :</h4>
                  </div>
                  < MallSvg />
                </div> */}
                <div className="rowFlex p-3 cartMrOr" style={{ boxShadow: "4px 5px 4px 1px #d7dde3, -4px -5px 4px 1px #ffffff", borderRadius: "7px" }}>

                  <div style={{ display: "flex", flexDirection: 'row', alignItems: "center" }}>
                    < ImgSvg />
                    <div className="fontHeading2 mx-2 cartInHead" style={{ fontSize: "12px" }}>
                      Quantity
                      <div className="underCap cartInHead">
                        product description
                      </div>
                    </div>

                  </div>
                  <div style={{ display: "flex", flexDirection: 'row', alignItems: "center" }} className="">
                    <button className="round " onClick={() => setCount(count >= 2 ? count-1 : 1) } >
                      < RemoveSvg />
                    </button>
                    <input type="number" min={1} value={count} style={{ width: "40px", backgroundColor: "#ecf0f3", border: "2px solid #ecf0f3", textAlign: "center", boxShadow: "inset rgb(215 221 227) 0px 2px 4px 1px, inset rgb(255 255 255) -4px -5px 4px 1px", borderRadius: "7px" }} onChange={(e) => { if (e.target.value !== "") { setCount(parseInt(e.target.value)) } }} className='focusInputColor' />

                    <button className="round " onClick={() => { setCount(count + 1) }}>
                      < AddSvg />
                    </button>
                  </div>
                </div>
                <br />
                <div className="rowFlex">
                  <div className='fontHeading2'>Rush Printing:
                    <div className="underCap">
                      <p className='website_para'>
                      (Estimated delivery time - 1 week)

                      </p>
                    </div>
                  </div>
                  <label className='blockLine'> <input type="checkbox" name="checkBox" /> <span onClick={(e) => { rushPaint === "rushPaint" ? setRushPaint("") : setRushPaint("rushPaint") }} className="checked"  ></span>  </label>
                </div>
                <div className="rowFlex">
                  <div className='fontHeading2'>Painting Cost:
                  </div>
                  <label className='blockLine'> <input type="checkbox" name="checkBox" /> <span onClick={(e) => { Painting === "Painting" ? setPainting("") : setPainting("Painting") }} className="checked"  ></span>  </label>
                </div>
                <br />
                <div className="rowFlex my-2">
                  <div className="fontHeading2" >
                    Billing:
                  </div>
                  < SellSvg />
                </div>
                <div className="Aretrianget py-2">
                  <div className="rowFlex mx-4 my-2">
                    <div className="underCap" style={{ fontStyle: "normal" }}>
                      Handling fees
                    </div>
                    <div className="underCap" style={{ fontStyle: "normal" }}>
                      {handeling.toFixed(2)}
                    </div>
                  </div>
                  <div className="rowFlex mx-4 my-2">
                    <div className="underCap" style={{ fontStyle: "normal" }}>
                      Printing fees
                    </div>
                    <div className="underCap" style={{ fontStyle: "normal" }}>
                      {printing * count.toFixed(2)}
                    </div>
                  </div>
                  <div className="rowFlex mx-4 my-2">
                    <div className="underCap" style={{ fontStyle: "normal" }}>
                      Material fees
                    </div>
                    <div className="underCap" style={{ fontStyle: "normal" }}>
                      {Math.round(material * count.toFixed(2)) }
                    </div>
                  </div>
                  <div className="rowFlex mx-4 my-2">
                    <div className="underCap" style={{ fontStyle: "normal" }}>
                      Finishing fees
                    </div>
                    <div className="underCap" style={{ fontStyle: "normal" }}>
                      {finishing * count.toFixed(2)}
                    </div>
                  </div>
                  <div className="rowFlex mx-4 my-2">
                    <div className="underCap" style={{ fontStyle: "normal" }}>
                      Machine Cost
                    </div>
                    <div className="underCap" style={{ fontStyle: "normal" }}>
                      {machineCost * count.toFixed(2)}
                    </div>
                  </div>
                  <div className="rowFlex mx-4 my-2">
                    <div className="underCap" style={{ fontStyle: "normal" }}>
                      Painting Cost
                    </div>
                    <div className="underCap" style={{ fontStyle: "normal" }}>
                      {PaintingCost * count.toFixed(2)}
                    </div>
                  </div>
                  <div className="rowFlex mx-4 my-2">
                    <div className="underCap" style={{ fontStyle: "normal" }}>
                      Additional fees
                    </div>
                    <div className="underCap" style={{ fontStyle: "normal" }}>
                      {additional.toFixed(2)}
                    </div>
                  </div>
                  <div className="rowFlex mx-4 my-2">
                    <div className="underCap" style={{ fontStyle: "normal" }}>
                      Transport Cost
                    </div>
                    <div className="underCap" style={{ fontStyle: "normal" }}>
                      {deliver * count.toFixed(2)}
                    </div>
                  </div>
                  <div className="rowFlex mx-4 my-2">
                    <div className="underCap" style={{ fontStyle: "normal" }}>
                      G.S.T
                    </div>
                    <div className="underCap" style={{ fontStyle: "normal" }}>
                      {gst}
                    </div>
                  </div>
                  <div className="rowFlex mx-4 my-2">
                    <div className="underCap" style={{ fontStyle: "normal" }}>
                      Net Total
                    </div>
                    <div className="underCap" style={{ fontStyle: "normal" }}>
                      {total.toFixed(2)}
                    </div>
                  </div>
                  <hr className='mx-2' style={{ background: "#193566", }} />

                  <div className="rowFlex mx-4 my-2">
                    <div className="fontHeading2" >
                      Total
                    </div>
                    <div className="fontHeading2" >
                      {total.toFixed(2)}
                    </div>
                  </div>
                </div>
                <div className="d-in any clor buttonStyle">
                  <button data-id='4' onClick={checkingID} className="submitAll">
                    Prev
                  </button>

                  <button data-id='4' onClick={sendData} className="submitAll">
                    Payment
                  </button>
                </div>
              </div>
            </div>     
          </div>
        </div>
                    {/* <div className="ask_queryFor"> */}
                 <iframe frameBorder="0" id="query_z_form" onLoad={loadingGuid} style={{ height: "700px", width: "100%", maxWidth: "1440px"}} src={`https://forms.zohopublic.in/ymeducation/form/TalktoUs/formperma/5nBvO9RjvAe2yyrMvIGxSbC7M_V1qZaZOQRVctVhwbM`}></iframe>
                    {/* </div> */}
                    
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
      <div className='putItcenter' style={{ display: statusDisplay, 
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "40vh" }} >
        <div className="spinner-grow" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div>Your Patience is appreciated! Please Wait while we upload your files.</div>
        <div className="putItCenter">
          <button id='goBackHide' className='submitAll' onClick={toggleLoadinDisplay} >Goback </button>
        </div>
      </div>
      <div className="showSuccesspayment" style={{display: thankupage}}>
        <div className="showingBoxpayment">
        <span className={thankupageicon} style={{background: thankupageBG}}></span>
        <h4>{thankupagetext}</h4>
        

          <h4>ORDER ID : {OrderID}</h4>
          <h4>PAYMENT ID : {PayemntID}</h4>
    
          <div className="d-flex">

          <a href='https://Wa.me/+918910540012' target="_blank" style={{textDecoration: "none", marginRight: "20px"}}><button><i className="fab fa-whatsapp" style={{marginRight: "5px", color: "white"}}></i>Contact Us</button></a>
          <a href='/order3d' style={{textDecoration: "none"}}><button style={{color: "#000000", background: "#f9f9f9", border: "1px solid #51D015"}}>Go Back</button></a>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Manufacturing