import React, {useState, useEffect} from 'react'
import "./Mainpage.css"


function Topscroll() {
  const [isVisible, setisVisible] = useState(false)
  useEffect(() => {
   window.addEventListener("scroll", ()=>{
     if(window.scrollY > 500){
      setisVisible(true)
     }
     else{
      setisVisible(false)
     }

     if(window.location.pathname === "/ocean-challenge"){
      setisVisible(false)
     }
     if(window.location.pathname === "/ocean-challenge/"){
      setisVisible(false)
     }
     if(window.location.pathname === "/ocean-challenge/registration"){
      setisVisible(false)
     }
     if(window.location.pathname === "/ocean-challenge/thank-you"){
      setisVisible(false)
     }
     if(window.location.pathname === "/ocean-challenge/learning-material"){
      setisVisible(false)
     }
     if(window.location.pathname === "/the-minds-day/grab-your-seat"){
      setisVisible(false)
     }
     if(window.location.pathname === "/the-minds-day/:id"){
      setisVisible(false)
     }
     if(window.location.pathname === "/the-minds-day/schedule"){
      setisVisible(false)
     }
     if(window.location.pathname === "/the-minds-day/"){
      setisVisible(false)
     }
     if(window.location.pathname === "/the-minds-day"){
      setisVisible(false)
     }
    
   })
  }, [])
  

    const scrollToTop = ()=>{
        window.scrollTo({
          top:0,
          behavior:"smooth"
        });
    }
  return (
    <div className={ isVisible === true ? 'totheTopScroll scrollVisible':'totheTopScroll'} onClick={scrollToTop} >
        <i className="fas fa-arrow-up"></i>
        <h6>Top</h6>
    </div>
  )
}

export default Topscroll