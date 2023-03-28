import React,{useState} from 'react'
import PrivacyPolicy from "./PrivacyPolicy"
import "./legal.css"
import Condition from "./Condition";
import Nav from '../Navbar/Nav';
import Footer from '../Footer/Footer';
const Legal = () => {
    const [Switch, setSwitch] = useState(0)
  return (
    <div className='legalstym'>
      <Nav/>
        <div className="swtichBoxes">
            <div className={Switch === 0 ? "swtichBtn ExtraA" : "swtichBtn"} onClick={()=> setSwitch(0)}>Terms & Condition</div>
            <div className={Switch === 1 ? "swtichBtn ExtraA" : "swtichBtn"} onClick={()=> setSwitch(1)}>Privacy Policy</div>
        </div>
      {Switch === 0 ? <Condition/> : <PrivacyPolicy/>}
      <Footer/>
    </div>
  )
}

export default Legal
