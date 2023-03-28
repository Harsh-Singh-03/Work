import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { sendEmail, printblePayment, captureOrder, onSuccessfullPayment, comfermationOfPayment } from '../api';

const Checkout = () => {
    const { id } = useParams();
    const History = useHistory();
    const [Data, setData] = useState("")
    const [captureDetails, setcaptureDetails] = useState({
        name: "",
        email: "",
        phone: "",
        country: "",
        address: "",
        city: "",
        state: "",
        pin: ""

    })
    const [mainDisplay, setmainDisplay] = useState("none")

    useEffect(() => {
        const script = document.createElement("script");
        // <!-- <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet"/> -->
        script.src = "https://checkout.razorpay.com/v1/checkout.js";

        script.async = true;
        document.body.appendChild(script);
        getData()
    }, [])

    const getData = async () => {
        console.log("hello")
        try {
            const response = await fetch(`${process.env.REACT_APP_API}/product-checkout-data?id=${id}`, {
                method: 'GET',
            })
            const json = await response.json()
            console.log(json)
            if (json.success === true) {
                setData(json.data)
                console.log(json.data)
                setmainDisplay("flex")
            }
            else {
                History.push(`/products`)
            }
            // console.log(first)
        } catch (error) {
            History.push('/products')
            // setWarning("Sorry! Some error occured !!")
            console.log("error")
            // document.getElementById("n").click();
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setcaptureDetails((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };
    async function displayRazorpay(e) {
        e.preventDefault()
        if(captureDetails.name !== "" && captureDetails.address !== "" && captureDetails.city !== "" && captureDetails.country !== "" && captureDetails.email !== "" && captureDetails.phone !== "" && captureDetails.pin !== "" && captureDetails.state !== ""){
            var clientId = ""
            const payData = { id: id }
            const result = await printblePayment(payData)
            // console.log(clientId);
            if (!result) {
                alert("got some error ");
                return;
            }
            // Getting the order details back
            const { amount, id: order_id, currency } = result.data.respon.response;
            const OrderIDD = result.data.respon.response.id
            // console.log(result.data.respon.response)
            // let sendData = { outputMm1, mmInput2, supRemov, voporPolish, free, hNo, area, Lankmark, Town, pincode, state, warning, count, pCount, idProductType, idProductName, svgDLoad, rushPaint, Painting, colorTypeId, Slider, handeling, printing, material, additional, deliver, gst, total, clientName, clientPhone, clientEmail, colorType, PaintingCost, OrderIDD  }
            // generateToken(sendData)
            // const { amount, id: order_id, currency } = result.data.response;
            var re = result.data
            const options = {
                key: result.data.respon.key,
                amount: amount.toString(),
                currency: currency,
                name: "3d printable",
                description: "3d printable",
                order_id: order_id,
                handler: function (response) {
                    console.log(response)
                    // console.log(response);
                    // const dataSendOnSuccess = { clientId: uniqueID, response, re }
                    // let respon = onSuccessfullPayment(dataSendOnSuccess)
                    // GAEventsTracker("Checkout Complete", `productName : "Additive Manufacturing"`);
                    // GAEventsTracker("Checkout Complete", `productPrice:${count * total}`)
                    // GAEventsTracker("Checkout Complete", `productQuantity:${count}`)
                    // GAEventsTracker("Checkout Complete", `productCategory:"YM Services"`)
                    sendToTicket({ id: response.razorpay_payment_id, email: Data.sellerEmail !== undefined && Data.sellerEmail !== "undefined" ? Data.sellerEmail : "The Young Minds", details: Data })
    
                },
    
                theme: {
                    color: "#193566",
                },
                prefill: {
                    name: captureDetails.name,
                    contact: parseInt(captureDetails.phone),
                    email: captureDetails.email
                }
            };
    
            const paymentObject = new window.Razorpay(options);
            paymentObject.open();
        }
        else{
            alert("please fill all the neccesery details")
        }
        // document.getElementById("goBackHide").style.display = "block";
    }
    const sendToTicket = async (id) => {
        // console.log(id.id);
        let ifRight = await comfermationOfPayment({ id: id.id })
        console.log(ifRight.data.amount)
        if (ifRight !== undefined || ifRight !== null) {
            if (ifRight.data.id === id.id && ifRight.data.status === "captured" && ifRight.data.entity === "payment") {
                const mailArray = id.email !== "The Young Minds" ? ["ym.programmer005@gmail.com", id.email] : ["ym.programmer005@gmail.com"]
                await sendEmail({
                    to: mailArray,
                    subject: "Order Received",
                    content: `<h2 style="text-align=center;">Order Recived</h2>
                        <p>Seller ${id.email !== undefined && id.email !== "undefined" ? id.email : "The Young Minds"}</p>
                        <p> ${id.details} </p>
                         `
                })
                // const mailArray1 = ["harshnov802@gmail.com"]
                // await sendEmail({
                //   to: mailArray1,
                //   subject:  "Order Placed Successfully",
                //   content: `<h2 style="text-align=center;">Order Placed Successfully</h2>
                //   <p>Thanks for purchasing from our THE YOUNG MINDS</p>
                //             <p> Your Order ${id.details.id}</p>
                //             <p>Any Queries feel free to reach out to us</p>
                //              `
                // })
                let date = new Date()
                let month = date.getMonth() + 1
                let day = date.getDate()
                let year = date.getFullYear()
                const originalDate = `${year}/${month}/${day}`
                let Details = id.details
                Details.orderAt = originalDate
                let buyerDetails = captureDetails
                buyerDetails.orderStatus = "Placed"
                const orderDetails = { data: Details, buyer: buyerDetails, payment: ifRight.data }
                await captureOrder(orderDetails)
            } else {

            }
        }
    }

    return (
        <div className='d-flex checkout-page' style={{ display: mainDisplay }}>
            <div className='my-4 mx-3'>
                <p>Contact Information</p>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
                    <input type="text" name='name' onChange={handleChange} value={captureDetails.name} className="form-control" id="exampleInputText" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" name='email' onChange={handleChange} value={captureDetails.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Phone</label>
                    <input type="phone" name='phone' onChange={handleChange} value={captureDetails.phone} className="form-control" id="exampleInputPassword1" />
                </div>
                <p>Shipping Address</p>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Country</label>
                    <input type="text" name='country' onChange={handleChange} value={captureDetails.country} className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
                    <input type="text" name='address' onChange={handleChange} value={captureDetails.address} className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="d-flex">
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">City</label>
                        <input type="text" name='city' onChange={handleChange} value={captureDetails.city} className="form-control" id="exampleInputPassword1" />
                    </div>  <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">State</label>
                        <input type="text" name='state' onChange={handleChange} value={captureDetails.state} className="form-control" id="exampleInputPassword1" />
                    </div>  <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Pin</label>
                        <input type="number" name='pin' onChange={handleChange} value={captureDetails.pin} className="form-control" id="exampleInputPassword1" />
                    </div>
                </div>
                <button className="btn btn-primary" style={{ float: "right" }} onClick={displayRazorpay}>Proceed To Pay</button>
            </div>
            <div className='mx-3' >
                <div className="productDetails my-4" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "fit-content", borderBottom: "1px solid #dee2e6", paddingBottom: "20px" }}>
                    <div className="d-flex" style={{ alignItems: "center" }}>
                        <img className='mx-3' style={{ width: "60px" }} src={Data.illustrationImageUrl} alt="" />
                        <h5>{Data.name}</h5>
                    </div>
                    <p style={{ marginBottom: "0px", marginLeft: "50px" }}>{Data.price}/-</p>
                </div>
                <div className="d-flex" style={{width: "100%", justifyContent: 'space-between', alignItems: "center", borderBottom: "1px solid #dee2e6",}}>
                    <div className='mx-3'>
                        <h5 >TOTAL</h5>
                        <small>Include all taxes</small>
                    </div>
                    <h6>Rs {Data.price}/-</h6>
                </div>
            </div>
        </div>
    )

}

export default Checkout