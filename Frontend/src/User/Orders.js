import React, { useEffect, useState, useContext } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import NoteContext from "../context/notes/Notecontext"
import Sidenav from './Sidenav'

const Orders = () => {
    const [OrderData, setOrderData] = useState([])
    const [OrderDetails, setOrderDetails] = useState({})
    const [Data, setData] = useState([])
    const [orderDisplay, setorderDisplay] = useState("none")
    const [mainDisplay, setmainDisplay] = useState("block")
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
                getData(json.data.email)
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


    const getData = async (mail) => {
        try {
            const response = await fetch(`${process.env.REACT_APP_USER_API}/get-seller-printable-order`, {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: mail })
            })
            const json = await response.json()
            if (Array.isArray(json)) {
                setOrderData(json)
                console.log(json)
                console.log(json[0].data.name)
                setOrderDetails(json[0].data)
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
    return (
            <div style={{ width: "calc(100vw - 40px)", maxWidth: "1440px", margin: "20px", position: "relative" }}>
                  <i style={{marginTop: "0px", textAlign: "start"}} className="fa-solid fa-bars hamburger-menu" onClick={toggle}></i>
                    {/* <h2 style={{marginLeft: "300px"}}>Products</h2>                         */}
                <div className="desk-display-table" style={{ justifyContent: "space-around" }}>
                    <Sidenav />
                    <table className="table printable-table" style={{}}>
                        <thead>
                            <tr>
                                <th scope="col">Product</th>
                                <th scope="col">Name</th>
                                <th scope="col">Inventory</th>
                                <th scope="col">Category</th>
                                <th scope="col">Status</th>
                               
                            </tr>
                        </thead>
                        <tbody>
                            {OrderData.map((item, index) => {
                                return (
                                    <tr key={index} onClick={() => History.push(`/seller/orders/${item.id}`)}>
                                        <td scope="row" key={index} style={{ display: "flex", alignItems: "center", borderBottom: "none", boxShadow: "none" }}> <img className='mx-2' style={{ height: "40px" }} src={item.data.illustrationImageUrl} alt="" /></td>
                                        <td style={{ width: "20%" }}>{item.data.name}</td>
                                        <td style={{ textAlign: "center" }}>{item.data.quantity}</td>
                                        <td>{item.data.category}</td>
                                        <td>{item.data.orderStatus}</td>
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
                    <table className="table printable-table" style={{}}>
                        <div className="d-flex my-2" style={{ justifyContent: "space-between" }}>
                            <h2>Products</h2>
                            {/* <button className='btn btn-primary' disabled={Isdisable2} onClick={SubmitMplist}>Update Most Populer</button> */}
                        </div>
                        <tbody>
                            {OrderData.map((data, index) => {
                                return (
                                    <div className="mobilelist" key={index} onClick={() => History.push(`/seller/orders/${data.id}`)}>
                                        <div className="details-list">
                                            <img className='' style={{ height: "40px" }} src={data.data.illustrationImageUrl} alt="" />
                                            <div style={{ marginLeft: "15px" }}>
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
