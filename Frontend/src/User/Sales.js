import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'

const Sales = () => {
    const { id } = useParams()
    const History = useHistory()
    const [Data, setData] = useState({})
    useEffect(() => {
        if (id !== "") {
            getProfile()
        }
    }, [])
    const getProfile = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_USER_API}/user-profile`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify({ id: id })
            })
            const json = await response.json()
            if (json.success === true) {
                setData(json.data)
                console.log(json)
            } else {
                History.push('/sign-in')
            }
            // alert(json.msg)
        } catch (error) {
            console.log(error)
        }
    }
    const pushToDetail = ()=>{
        History.push(`/user/sales/details/${id}`)
    }
    return (
        <div style={{width: "100vw", maxWidth: "500px"}}>
            <p>seller sales list</p>
            <div className="d-flex" style={{ justifyContent: "space-between", alignItems: "center", width: "100%", padding: "10px", position: "fixed", zIndex: "50", bottom: "0px", left: "0px", background: "#808080" }}>
                <a href={`/user/profile/${id}`} style={{ fontSize: '12px', margin: "0px", padding: "0px", color: "#fff" }} >profile</a>
                <a href={`/user/message/${id}`} style={{ fontSize: '12px', margin: "0px", padding: "0px", color: "#fff" }} >Messages</a>
                <a href={`/user/product/${id}`} style={{ fontSize: '12px', margin: "0px", padding: "0px", color: "#fff" }} >Product</a>
                <a href={`/user/sales/${id}`} style={{ fontSize: '12px', margin: "0px", padding: "0px", color: "#fff" }} >Salses</a>
                <a href={`/user/settings/${id}`} style={{ fontSize: '12px', margin: "0px", padding: "0px", color: "#fff" }} >Settings</a>
            </div>
            <div className="d-flex" style={{ width: "100%", overflow: "scroll", alignItems: 'center', padding: "30px 10px" }}>
                <div style={{ minWidth: "240px", height: "180px", marginRight: "20px", boxShadow: "rgba(0, 0, 0, 0.08) 0px 4px 12px" }}></div>
                <div style={{ minWidth: "240px", height: "180px", marginRight: "20px", boxShadow: " rgba(0, 0, 0, 0.08) 0px 4px 12px" }}></div>
                <div style={{ minWidth: "240px", height: "180px", marginRight: "20px", boxShadow: "rgba(0, 0, 0, 0.08) 0px 4px 12px" }}></div>
            </div>
            <div className="d-flex" style={{ alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" , margin: "10px 20px" }}>
                        <h5>Your order</h5>
                        {/* <i className="fa-solid fa-circle-plus" style={{ fontSize: "20px", marginRight: "1rem" }} onClick={openForm}></i> */}
                    </div>
                <div className='my-2' onClick={pushToDetail} style={{fontSize: "12px", lineHeight:"100%", borderBottom: "1px solid #808080", paddingBottom: "10px"}}>
                    <div className="d-flex" style={{ justifyContent: "space-between", margin: "0px 20px"}}>
                        <p>OrderId Date</p>
                        <p>TYM Store</p>
                    </div>
                    <div className="d-flex" style={{ justifyContent: "space-between", margin: "0px 20px"}}>
                        <p>Customer Name <br/> Order Status </p>
                        <p>Amount</p>
                    </div>
                    <span style={{marginLeft: "20px"}}>Quantity Payment Method</span>
                </div>
                <div className='my-2' onClick={pushToDetail} style={{fontSize: "12px", lineHeight:"100%", borderBottom: "1px solid #808080", paddingBottom: "10px"}}>
                    <div className="d-flex" style={{ justifyContent: "space-between", margin: "0px 20px"}}>
                        <p>OrderId Date</p>
                        <p>TYM Store</p>
                    </div>
                    <div className="d-flex" style={{ justifyContent: "space-between", margin: "0px 20px"}}>
                        <p>Customer Name <br/> Order Status </p>
                        <p>Amount</p>
                    </div>
                    <span style={{marginLeft: "20px"}}>Quantity Payment Method</span>
                </div>

         
        </div>
    )
}
export default Sales