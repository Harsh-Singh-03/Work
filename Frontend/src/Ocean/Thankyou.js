import React, { useEffect, useState, useContext } from 'react'
import NoteContext from "../context/notes/Notecontext"

import { Link, useHistory } from 'react-router-dom'
import './Thankyou.css'

const Thankyou = () => {
    const History = useHistory()
    const context = useContext(NoteContext)
    const {generateTokenforaffiliate } = context
    let host = process.env.REACT_APP_API
    useEffect(() => {
            DOsomething();
    }, [])
    
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
            
        }, 2000);

    }
    const pushtolearn = () =>{
        History.push("/ocean-challenge/learning-material")
    }
  return (
    <div className='Ty-page-ocean'>
        <img src="/image/Ty-bg.png" className='Ty-bg' alt="" />
        <h1 className='maintyheadMobile'>MORE TO BE </h1>
        <h1 className='maintyheadMobile' style={{marginLeft: "50px", top: "160px"}}> UNCOVERED</h1>
        <h1 className='maintyhead'>MORE TO BE UNCOVERED</h1>
        <div className="oceanNavigation">
                <div className="oceanNavigation1">
                    <div className="BrandLOGO d-flex" style={{ alignItems: "flex-end" }}>
                        <img src="/image/TYMLOGO.png" alt="" />
                        <h4>THE YOUNG MINDS</h4>
                    </div>
                    <div className="d-flex">
                        {/* <button>Request A Call Back</button> */}
                    </div>
                </div>
            </div>
            <div className="thankYouContent">
             <div className="ResponseUpdate">
                <h4>Thank you for your response! Gear up for the challenge</h4>
                <div className="checkoutss">
                    <div className="status"><span className="fas fa-check"></span></div>
                    <p>Register For The Challenge</p>
                </div>
                <div className="checkoutss">
                    <div className="status"></div>
                    <p>Learn From Our Experts. Utilize our resources</p>
                </div>
                <div className="checkoutss">
                    <div className="status"></div>
                    <p>Compete with your friends</p>
                </div>
             
             </div>
                
               <img src="/image/Turtle.png" className='Turtle' alt="" />

            </div>
            <div className="extraNote" onClick={pushtolearn} style={{cursor: "pointer"}}>
                    <h4>Learning Materials</h4>
                    <i className="fa-solid fa-arrow-right-long"></i>
                    {/* <p>Our resources will be available from 1st of November. Stay Tuned! For updates</p> */}
                </div>
             
    </div>
    
  )
}

export default Thankyou