import React, { useEffect, useState, useContext } from 'react'
import {  useHistory, useParams } from 'react-router-dom'
import NoteContext from "../context/notes/Notecontext"
import Sidenav from './Sidenav'

const Orders = () => {
    const [OrderData, setOrderData] = useState([])
    const [funcBtn, setFuncBtn] = useState("Pending")
    const context = useContext(NoteContext)
    const {backopacity1, setbackopacity1, Hamtoggle1, setHamtoggle1} = context

    const History = useHistory()

    useEffect(() => {
        verify()
    }, [])

    const verify = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API}/admin-verify`, {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                credentials: "include"
            })
            const json = await response.json()
            console.log(json)
            if (json.success === true) {
                getData()
            
            }
            else {
                // setmainDisplay("none")
                History.push('/admin-login')
            }
            // console.log(first)
        } catch (error) {
            // setWarning("Sorry! Some error occured !!")
            // setmainDisplay("none")
            // History.push('/admin-login')
            console.log(error)
            // document.getElementById("n").click();
        }
    }


    const getData = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API}/get-printable-order`, {
                method: 'GET',
            })
            const json = await response.json()
            if (Array.isArray(json)) {
                setOrderData(json)
                console.log(json)
               
                // json.forEach(element => {
                //     console.log(element)
                // });
            }
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
    const UpdateOStatus =  async () =>{
        
    }
    return (
        <div style={{ width: "calc(100vw - 40px)", maxWidth: "1440px", margin: "20px", position: "relative" }}>
             <i style={{marginTop: "0px", textAlign: "start"}} className="fa-solid fa-bars hamburger-menu" onClick={toggle}></i>
            <div className="desk-display-table" style={{ justifyContent: "space-around" }}>
                <Sidenav />
                <table className="table printable-table" style={{ }}>
                    <thead>
                        <tr>
                            <th scope="col">Status</th>
                            <th scope="col">Product</th>
                            {/* <th scope="col">Inventory</th> */}
                            <th scope="col">Category</th>
                            <th scope="col">Vendor</th>
                            <th scope="col">Functions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {OrderData.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td scope="row" key={index} style={{ display: "flex", alignItems: "center", borderBottom: "none", boxShadow: "none" }}>{item.buyer.orderStatus}</td>
                                    <td style={{ width: "20%" }}>{item.data.name}</td>
                                    {/* <td style={{ textAlign: "center" }}>{item.data.quantity}</td> */}
                                    <td>{item.data.category}</td>
                                    <td>{item.data.sellerEmail}</td>
                                    <td>
                                        {/* <button style={{fontSize: "12px"}} className='btn btn-primary-small' onClick={UpdateOStatus}>{ (item.buyer.orderStatus === "Placed") ? "Mark as Accept" : ((item.buyer.orderStatus === "Unfullfilled") ? "Mark As Fullfill" : "Rejected")}</button> */}
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                      {/* onClick={() => editData(data.data)}
                                    onClick={() => DeleteData(data.data.id)} */}
                </table>

            </div>
            <div className="mobile-display-table" style={{ justifyContent: "space-around" }}>
                <Sidenav />
                <table className="table printable-table" style={{ }}>
                    <div className="d-flex my-2" style={{ justifyContent: "space-between" }}>
                        <h2>Products</h2>
                        {/* <button className='btn btn-primary' disabled={Isdisable2} onClick={SubmitMplist}>Update Most Populer</button> */}
                    </div>
                    <tbody>
                        {OrderData.map((data, index) => {
                            return (
                                <div className="mobilelist" key={index}>
                                <div className="details-list">
                                    <img className='' style={{ height: "40px" }} src={data.data.illustrationImageUrl} alt="" />
                                    <div style={{marginLeft: "15px"}}>
                                        <h4>{data.data.name.slice(0, 15)} ..</h4>
                                        <p>{data.data.quantity} in stock</p>
                                        <span>{data.data.sellerEmail === undefined ? "THE YOUNG MINDS" : data.data.sellerEmail}</span>
                                    </div>
                                </div>
                                <div className="details-action">
                                    <p>{data.data.orderAt}</p>
                                </div>
                            </div>
                            )
                        })}
                    </tbody>
                      {/* onClick={() => editData(data.data)}
                                    onClick={() => DeleteData(data.data.id)} */}
                </table>

            </div>
        </div>
    )
}

export default Orders
