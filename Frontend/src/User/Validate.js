import React, {useEffect} from 'react'
import { useHistory } from 'react-router-dom'

const Validate = () => {
    const History = useHistory()
    useEffect(() => {
        googleprofile();
    }, [])
    const googleprofile = () =>{
        fetch(`${process.env.REACT_APP_USER_API}/login/success`, {
            method: "GET",
            credentials: "include",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              "Access-Control-Allow-Credentials": true,
            },
          })
            .then((response) => {
              if (response.status === 200) return response.json();
              throw new Error("authentication has been failed!");
            })
            .then((resObject) => {
              console.log(resObject)
              if(resObject.success === true){
                alert(resObject.msg)
                if(resObject.user.usertype === "pending"){
                  History.push(`/verification/${resObject.user._id}`)
                }
                else{
                  History.push(`/user/profile/${resObject.user._id}`)
                }
              }
              else{
                alert(resObject.msg)
                History.push(`/sign-in`)
                
              }
            })
            .catch((err) => {
              console.log(err);
            });
    }
  return (
    <div className='putItcenter' style={{ display: "flex", 
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh" }} >
          <div className="spinner-grow" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div>Your Patience is appreciated! Please Wait while we upload your files.</div>
        </div>
  )
}

export default Validate