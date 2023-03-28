import React, { useEffect, useState, useContext } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import NoteContext from "../context/notes/Notecontext"
import Sidenav from './Sidenav'


const OrderDetails = () => {
    const [OrderDetails, setOrderDetails] = useState([])
    const { id } = useParams()
    const context = useContext(NoteContext)
    const {backopacity1, setbackopacity1, Hamtoggle1, setHamtoggle1} = context
    const History = useHistory()
    useEffect(() => {
        verifyTOken()
    }, [])
    const verifyTOken = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_USER_API}/token-verification`, {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                credentials: "include",
            })
            const json = await response.json()
            if (json.success === true) {
                // alert(json.msg)
                getData()
                // setData(json.data)
            }
            else {
                History.push('/sign-in')
            }
        } catch (error) {
            History.push('/sign-in')
            console.log("Some error occures")
        }
    }
    const getData = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API}/get-order-detail?productID=${id}`, {
                method: 'GET',
            })
            const json = await response.json()
            if (json.success === true && OrderDetails.length < 1) {
                setOrderDetails(OrderDetails.concat(json.data))
                console.log(json)
            }
            // if (Array.isArray(json)) {
            //     setOrderData(json)
            //     console.log(json)
            //     console.log(json[0].data.name)
            //     setOrderDetails(json[0].data)
            // }
            // console.log(first)
        } catch (error) {
            // setWarning("Sorry! Some error occured !!")
            console.log(error)
            // document.getElementById("n").click();
        }
    }
    const toggle = () =>{
        setHamtoggle1(Hamtoggle1 === "translateX(-300px)" ? "translateX(0px)" : "translateX(-300px)")
        setbackopacity1(backopacity1 === "1" ? "0.9" : "1")
    }
    return (
        <div className='order-Details'>
            <Sidenav />
            {OrderDetails.map((data, index) => {
                return (
                    <>
                  <i style={{marginTop: "0px", textAlign: "start"}} className="fa-solid fa-bars hamburger-menu" onClick={toggle}></i>
                    <div className="detailGird">
                    <div className="main-page" key={index}>

                        <div className="d-flex my-4" style={{alignItems: "center"}}>
                            <i className='fas fa-chevron-left' onClick={() => History.push('/seller/orders')}></i>
                            <p style={{marginBottom: "0px"}} className='mx-4'>{data.data.sku.toUpperCase()}</p>
                            <p style={{marginBottom: "0px"}}>{data.data.orderAt}</p>
                        </div>
                        <div className="orderBox">
                            <div className="d-flex">
                                <p>{data.buyer.orderStatus}</p>
                                <p  className='mx-3'>{data.data.sku.toUpperCase()}</p>
                            </div>
                            <div className="d-flex" style={{justifyContent: "space-between", alignItems: "center"}}>
                            <div className="d-flex" style={{alignItems: "center"}}>
                                <img style={{width: "50px", height: "auto"}} src={data.data.illustrationImageUrl} alt="" />
                                <div className='mx-3'>
                                    <p style={{marginBottom: "0px"}}>{data.data.name}</p>
                                    <p style={{marginBottom: "0px"}}>{data.data.sku}</p>
                                </div>
                            </div>
                            <p style={{marginBottom: "0px"}}>Rs {data.data.price}/-</p>
                            </div>
                        </div>
                        <div className="orderBox my-4">
                            <h4>{data.payment.status === "captured" ? "Paid" : "Due"}</h4>
                            <div className="d-flex my-2" style={{borderBottom: "1px solid #808080", justifyContent: "space-between"}}>
                                <p>Total</p>
                                <p  className='mx-3'>Rs {data.data.price}/-</p>
                            </div>
                            <div className="d-flex" style={{ justifyContent: "space-between"}}>
                                <p>Paid by {data.buyer.name}</p>
                                <p  className='mx-3'>Rs {data.data.price}/-</p>
                            </div>
                        </div>
                    </div>
                    <div className="buyerDetails mx-2">
                        <div className="buyerBox">
                            <h4>Customer</h4>
                            <p>{data.buyer.name}</p>
                            <p>{data.buyer.email}</p>
                            <p className='' style={{borderBottom: "1px solid #808080", paddingBottom: "10px"}}>{data.buyer.phone}</p>
                            <h4 style={{marginTop: "10px"}}>Shipping Details</h4>
                            <p>{data.buyer.name}</p>
                            <div className="d-flex">
                            <p >{data.buyer.country}</p>
                                <p className='mx-2'>{data.buyer.state}</p>
                                <p>{data.buyer.city}</p>
                            </div>
                            <p>{data.buyer.address}</p>
                            <p>{data.buyer.pin}</p>
                        </div>
                    </div>
                    </div>
                    </>
                )
            })}

        </div>
    )
}

export default OrderDetails
