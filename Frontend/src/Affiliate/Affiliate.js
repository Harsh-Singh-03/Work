import React, { useEffect, useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import NoteContext from "../context/notes/Notecontext"
import { Link } from 'react-router-dom'


const Affiliate = () => {
    const context = useContext(NoteContext)
 const {generateTokenforaffiliate, setloaderPageDisplay, loaderPageDisplay, setloaderText, loaderText } = context
    let host = process.env.REACT_APP_API
    const History = useHistory()
    useEffect(() => {
        // if (document.referrer === "https://forms.zohopublic.in/") {
            DOsomething();
        // }
    }, [])
    useEffect(() => {
        setloaderText(loaderText)
    }, [loaderText])
    
    const DOsomething = () => {
        const queryParams = new URLSearchParams(window.location.search);
        const OrderID = queryParams.get('id');
        setTimeout(() => {
            let str = document.cookie;
            str = str.split('; ');
            const result = {};
            for (let i in str) {
                const cur = str[i].split('=');
                result[cur[0]] = cur[1];
            }
    
    
            if(result.ref !== undefined){
    
                generateTokenforaffiliate(OrderID, result.ref)
            }
            else{
                setloaderPageDisplay('none')
            }
        }, 2000);

    }
    return (
        <>
        <div className='affiliateDOM' style={{display: "grid", minHeight: "100vh", placeItems: "center"}}>
            {/* <button className='affiliate' onClick={DOsomething}>Careers</button> */}
            <div className="showSuccesspayment" style={{ display: "grid" }}>
                <div className="showingBoxpayment">
                    <span className="fas fa-check" style={{ background: "#51D015" }}></span>
                    <h4>Form Submitted Successfully</h4>
                    <div className="d-flex">
                        <a href='https://Wa.me/+918910540012' target="_blank" style={{ textDecoration: "none", marginRight: "20px", cursor: "pointer" }}><button><i className="fab fa-whatsapp" style={{ marginRight: "5px", color: "white" }}></i>Contact Us</button></a>
                        <Link to='/' style={{ textDecoration: "none", cursor: "pointer" }}><button id='Checkingbtnclick' style={{ color: "#000000", background: "#f9f9f9", border: "1px solid #51D015" }}>Go Back</button></Link>
                        {/* <button id='Checkingbtnclick' onClick={sendData} style={{ color: "#000000", background: "#f9f9f9", border: "1px solid #51D015" }}>Cookies</button> */}
                    </div>
                </div>
            </div>

        </div>
        </>
    )
}

export default Affiliate
