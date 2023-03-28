import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import './LearningMaterial.css'
import './ResponsiveLM.css'
import UID from 'uniquebrowserid';
const Passcode = () => {
    const History = useHistory()
    const [changeType, setchangeType] = useState("password")
    const [changeIcon, setchangeIcon] = useState("eye-slash")
    const [statusDisplay, setstatusDisplay] = useState("none")
    const [getValue1, setgetvalue1] = useState("")
    const Url = process.env.REACT_APP_OCEAN
    useEffect(() => {

        verifyToken();
    }, [])
    const toggleVisibility = () =>{
      setchangeType(changeType === "password" ? "text" : "password")
      setchangeIcon(changeIcon === "eye" ? "eye-slash" : "eye")
    }
    const verifyToken = async () =>{
        try {
            let str = document.cookie;
            str = str.split('; ');
            const result = {};
            for (let i in str) {
                const cur = str[i].split('=');
                result[cur[0]] = cur[1];
            }
            // if(result.Browser_Code !== undefined){
          
          // }
            // if(result.Identifier !== undefined && result.Browser_Code !== undefined){
              var data = JSON.stringify({
                "Browser_Code": result.Browser_Code,
              });
                const response = await fetch(`${Url}/token-verification`, {
                  method: 'POST',
                  headers: { "Content-Type": "application/json"},
                  credentials: "include",
                  body: data
                })
                const json = await response.json()
                // console.log(json.success)
                if(json.success === true){
                    History.push('/ocean-challenge/learning-material')
                }
              // }
    
            // console.log(json.access_token)
          
            // setTimeout(() => {
              // serachFormData(json.access_token, OrderID, ref)
            // }, 10000);
            // console.log(json.data)
          } catch (error) {
            // setWarning("Sorry! Some error occured !!")
            console.log("Some error occures")
            // document.getElementById("n").click();
          }
    }
    const something = async ()=>{
        // setchangeType(changeType === "password" ? "text" : "password")
        try {
          // const browserID = new UID().completeID()
          setstatusDisplay("flex")
          const browserID = new UID().completeID()
          var data = JSON.stringify({
            "passcode": getValue1,
            "browserID": browserID
          });
            const response = await fetch(`${Url}/passcode-verification`, {
              method: 'POST',
              credentials: "include",
              headers: { "Content-Type": "application/json"},
              body: data
               
              // params: { "category": cateListt }
            })
            const json = await response.json()
            // console.log(json)
            // console.log(response)
            // console.log(json.success)
            if(json.success === true){
       
              document.cookie = `Browser_Code=${browserID}; expires=Sun, 8 Jan 2023 12:00:00 UTC; path=/;`;
                // document.cookie = `Authtoken=${json.Token}; expires=Sun, 8 Jan 2023 12:00:00 UTC; path=/;`;
                // document.cookie = `Authtoken=${json.Token}; expires=Wed, 9 Nov 2022 17:43:00 IST;`;
                History.push('/ocean-challenge/learning-material')
            }else{
              setstatusDisplay("none")
            }
            // console.log(json.access_token)
          
            // setTimeout(() => {
              // serachFormData(json.access_token, OrderID, ref)
            // }, 10000);
            // console.log(json.data)
          } catch (error) {
            setstatusDisplay("none")
            // setWarning("Sorry! Some error occured !!")
            console.log(error)
          }
    }
    const getValue = (e)=>{
        setgetvalue1(e.target.value)
        // console.log(e.target.value)
    }
  return (
    <>
    <div className="Ocean_challengeDOM" style={{display: statusDisplay === "none" ? "block" : "none"}}>
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
    <div className="passcodeDom">
    <div className="imageContainer">
    <img src="/image/EventOcean.webp" alt="" />
    </div>
    <div className="passcodefields">
        <p>Enter Passcode</p>
        <p className='subP'>Enter passcode that was sent in your gmail</p>
        <div className="d-flex" style={{flexDirection: "column"}}>
          <div className='tryingSomething' style={{position: "relative"}}>

        <input type={changeType} placeholder='&#x1F512; Enter passcode' onChange={getValue}/>
        <i className={`fa-sharp fa-solid fa-${changeIcon}`} onClick={()=> toggleVisibility()} ></i>
          </div>
        <button onClick={something}>Confirm</button>
        <p className='subP'>Question? Emails us at <span style={{color: "#51D015"}}>connect@theyoungminds.org</span></p>
        </div>
    </div>
    </div>
</div>
<div className='putItcenter' style={{ display: statusDisplay, 
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "calc(100vh - 80px)" }} >
        <div className="spinner-grow" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div>Please wait...</div>
      </div>
</>
  )
}

export default Passcode