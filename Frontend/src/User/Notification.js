import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'

const Notification = () => {
    const { id } = useParams()
    const History = useHistory()
    const [Data, setData] = useState({})
    useEffect(() => {
        console.log(id)
        if (id !== "") {
            getProfile()
        }
    }, [])
    const getProfile = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_USER_API}/user-profile`, {
                method: 'POST',
                credentials: 'include',
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
    return (
        <div style={{width: "100vw", maxWidth: "500px"}}>
            <p>Notification and message page</p>
            <div className="d-flex" style={{ justifyContent: "space-between", alignItems: "center", width: "100%", padding: "10px", position: "fixed", zIndex: "50", bottom: "0px", left: "0px", background: "#808080" }}>
                <a href={`/user/profile/${id}`} style={{ fontSize: '12px', margin: "0px", padding: "0px", color: "#fff" }} >profile</a>
                <a href={`/user/message/${id}`} style={{ fontSize: '12px', margin: "0px", padding: "0px", color: "#fff" }} >Messages</a>
                <a href={`/user/product/${id}`} style={{ fontSize: '12px', margin: "0px", padding: "0px", color: "#fff" }} >Product</a>
                <a href={`/user/sales/${id}`} style={{ fontSize: '12px', margin: "0px", padding: "0px", color: "#fff" }} >Salses</a>
                <a href={`/user/settings/${id}`} style={{ fontSize: '12px', margin: "0px", padding: "0px", color: "#fff" }} >Settings</a>
            </div>
            <ul class="list-group" style={{width: "100%"}}>
                <li class="list-group-item">An item</li>
                <li class="list-group-item">A second item</li>
                <li class="list-group-item">A third item</li>
                <li class="list-group-item">A fourth item</li>
                <li class="list-group-item">And a fifth one</li>
            </ul>
        </div>
    )
}

export default Notification
