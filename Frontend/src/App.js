import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom"

// import Tiket from './OredYour3DProduct/Tiket';
import {useEffect} from "react"

import ReactGa from "react-ga"

import Topscroll from "./Mainpage/Topscroll"
import Nav from "./Navbar/Nav";
import NoteState from './context/notes/Notestate';
import Footer from "./Footer/Footer";
import Store from "./Our_Store/Store";
// import Community from "./Community/Community";

import  {Helmet} from 'react-helmet';
import Cult from "./Cult/Cult"
import ServicePage from './Services/ServicePage';
import Homepage from './Home/Homepage';
import Manufacturing from './OredYour3DProduct/Manufacturing';
import Education from './Community/Education';
import Hey from './Cult/Productdetail';
import Legal from './Legal/Legal';
import About from './About/About';
import Affiliate from './Affiliate/Affiliate';
import Ocean from './Ocean/Ocean';
import Registration from './Ocean/Registration';
import Thankyou from './Ocean/Thankyou';
import Floating from './Mainpage/Floating';
import LearningMaterial from './Ocean/LearningMaterial';
import Passcode from './Ocean/Passcode';
import BlogLM from './Ocean/BlogLM'
import Mindsday from './Ocean/Mindsday';
import Schedule from './Ocean/Schedule';
import Grabyourseat from './Ocean/Grabyourseat';
import Event from './Ocean/Event';
import Signin from './User/Signin';
import SignUp from './User/Signup';
import Reset from './User/Reset';
import Resetpass from './User/Resetpass';
import Profile from './User/Profile';
// import { LinkedInCallback } from 'react-linkedin-login-oauth2';
// import Gprofile from './User/Gprofile';
import Validate from './User/Validate';
import Product from './User/Product';
import Verification from './User/Verification';
import Settings from './User/Settings';
import Notification from './User/Notification';
import Sales from './User/Sales';
import User from './User/User';
import Salesdetails from './User/Salesdetails';
import Modeller from './User/Modeller';
import Modellist from './User/Modellist';
import Productview from './User/Productview';
import USERp from './User/USERp';
import Map from './Maps/Map';
import Modelling from './Modelling/Modelling';
import Dashboard from './Admin/Dashboard';
import Adminlogin from './Admin/Adminlogin';
import SellerRequest from './Admin/SellerRequest';
import Addproduct from './Admin/Addproduct';
import SellerDashboard from "./User/Dashboard"
import Orders from './Admin/Orders';
import SellerOrders from './User/Orders';
import Checkout from './Cult/Checkout';
import OrderDetails from './User/OrderDetails';
// import Search from './User/search';
// import Fortest from './Home/Fortest';
// import { Helmet } from 'react-helmet';


function App() {
  useEffect(() => {
    ReactGa.initialize('UA-221388951-1')
    ReactGa.pageview(window.location.pathname)
  }, [])
  return (
  
    <div className="App">
         <NoteState>
      <BrowserRouter>
      
      <Helmet>
        <title>The Young Minds</title>
        <meta
          name="description"
          content="Discover modern - day sciences, advanced technologies, engineering marvels, cognitive art and magical mathematics."
        />
        <meta
          name="keywords"
          content="Learning, Future, Marketplace"
        />
          <meta name="og:image" content= 'https://theyoungminds.org/image/logo.png' />
      </Helmet>
      {/* <Nav/> */}
        <Switch>
            <Route exact path="/" component={Homepage}/>
            {/* <Route path="/homeblog" component={Homeblog}/> */}
            <Route path="/about" component={About}/>
            <Route exact path="/services" component={ServicePage}/>
            <Route exact path="/service" component={ServicePage}/>
            {/* <Route exact path="/manufacturing" component={Newservice}/> */}
            <Route exact path="/order3d" component={Manufacturing}/>
            
            <Route path="/store" component={Store}/>
            <Route exact path="/products/:slug/:id" component={Hey}/>
            <Route path="/legals" component={Legal}/>
            <Route path="/thank-you" component={Affiliate}/>
            <Route exact path="/education" component={Education}/>
            <Route exact path="/ocean-challenge" component={Ocean}/>
            <Route exact path="/the-minds-day" component={Mindsday}/>
            <Route exact path="/the-minds-day/schedule" component={Schedule}/>
            <Route exact path="/the-minds-day/grab-your-seat" component={Grabyourseat}/>
            <Route exact path="/the-minds-day/:id" component={Event}/>
            <Route exact path="/ocean-challenge/thank-you" component={Thankyou}/>
            <Route exact path="/ocean-challenge/learning-material" component={LearningMaterial}/>
            <Route exact path="/ocean-challenge/learning-material-blog" component={BlogLM}/>
            <Route exact path="/ocean-challenge/passcode" component={Passcode}/>
            <Route exact path="/services/3d-modelling" component={Modelling}/>

            <Route exact path="/ocean-challenge/registration" component={Registration}/>
          {/* <Route exact path="/home" component={Home} /> */}
          {/* <Route exact path="/services" component={Services} /> */}
          <Route exact path="/products" component={Cult} />
          <Route exact path="/sign-in" component={Signin} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/reset-pass" component={Reset} />
          <Route exact path="/user/profile" component={Profile} />
          <Route exact path="/verification/:id" component={Verification} />
          <Route exact path="/user/settings/:id" component={Settings} />
          <Route exact path="/seller/add-product" component={Product} />
          <Route exact path="/user/product/view/:id" component={Productview} />
          <Route exact path="/user/message/:id" component={Notification} />
          <Route exact path="/user/sales/:id" component={Sales} />
          <Route exact path="/user/sales/details/:id" component={Salesdetails} />
          <Route exact path="/seller-profile" component={User} />
          <Route exact path="/seller/dashboard" component={SellerDashboard} />
          <Route exact path="/user-profile" component={USERp} />
          <Route exact path="/Product-Modal" component={Modeller} />
          <Route exact path="/admin-dashboard" component={Dashboard} />
          <Route exact path="/admin-dashboard/add-product" component={Addproduct} />
          <Route exact path="/admin-dashboard/orders" component={Orders} />
          <Route exact path="/seller/orders" component={SellerOrders} />
          <Route exact path="/seller/orders/:id" component={OrderDetails} />
          <Route exact path="/admin-dashboard/seller-request" component={SellerRequest} />
          <Route exact path="/admin-login" component={Adminlogin} />
          <Route exact path="/checkout/:id" component={Checkout} />
          <Route exact path="/map" component={Map} />
          <Route exact path="/model-list" component={Modellist} />
          {/* <Route exact path="/search-for-model" component={Search} /> */}
          <Route exact path="/validate-auth" component={Validate} />
          {/* <Route exact path="/linkedin" component={LinkedInCallback} /> */}
          {/* <Route exact path="/:id/resetpassword/:token" component={Resetpass} /> */}
          <Route exact path="/set-new-password" component={Resetpass} />
        </Switch>
        <Topscroll/>
        <Floating/>
        {/* <Footer/> */}
      </BrowserRouter>
      </NoteState>
    </div>
   
  );
}

export default App;