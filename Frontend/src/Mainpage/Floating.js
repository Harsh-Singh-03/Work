import React, {useState, useEffect} from 'react'

const Floating = () => {  
  const [floatingDisc, setfloatingDisc] = useState(true)
  useEffect(() => {
    if(window.location.pathname === "/ocean-challenge"){
      setfloatingDisc(false)
     }
     if(window.location.pathname === "/ocean-challenge/"){
      setfloatingDisc(false)
     }
     if(window.location.pathname === "/ocean-challenge/registration"){
      setfloatingDisc(false)
     }
     if(window.location.pathname === "/ocean-challenge/thank-you"){
      setfloatingDisc(false)
     }
     if(window.location.pathname === "/the-minds-day/grab-your-seat"){
      setfloatingDisc(false)
     }
     if(window.location.pathname === "/the-minds-day/:id"){
      setfloatingDisc(false)
     }
     if(window.location.pathname === "/the-minds-day/schedule"){
      setfloatingDisc(false)
     }
     if(window.location.pathname === "/the-minds-day/"){
      setfloatingDisc(false)
     }
     if(window.location.pathname === "/the-minds-day"){
      setfloatingDisc(false)
     }
  }, [])
  
  return (
    <a className='totheTopScrollFloating' style={{display: floatingDisc === true ? "grid" : "none"}} target='_bkank' href='https://Wa.me/+918910540012'>
        <img src="/image/wp.gif" alt="" />
        {/* <i className="fa-brands fa-square-whatsapp"></i> */}
    </a>
  )
}

export default Floating