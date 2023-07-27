import React from "react";
import { BrowserRouter ,Router,Routes ,Route } from "react-router-dom";
import Maincheckinagra from "../Pages/Maincheckinagra";
import Mainnav from "../Pages/Mainnav";
import Loginform from "../Pages/Login";
import Hostels from "../Pages/Hostels";
import Workations from "../Pages/Workations";
import Destinations from "../Pages/Destinations.tsx";
import Blogs from "../Pages/Blogs";
import Home from "../Pages/Home";
import { Footer } from "../Pages/Footer";
import Membership from "../Pages/Membership";
import { Login } from "../Userauth/Login"
import { Agra } from "../Pages/Agra";
import { Register } from "../Pages/Register.js";
import { Bookingscreen } from "../Hostelrooms/Bookingscreen";
import { Signup } from "../Userauth/Signup";
import Profilescreen from "../Hostelrooms/Profilescreen";
import { Adminscreen } from "../Hostelrooms/Adminscreen";
function Routesmain (){
  
    return(
<div>
  
  <BrowserRouter>
    
        <Routes>
        <Route exact path="/" element={<> <Mainnav/> <Home/> <Footer/></>} />
        <Route exact path="/home" element={ <Home/> } />
          <Route exact path="/destinations" element={<Destinations />} />
          <Route exact path="/hostels" element={<Hostels />} />
          <Route exact path="/workations" element={<Workations />} />
          <Route exact path="/membership" element={<Membership />} />
          <Route exact path="/blogs" element={<Blogs />} />
          <Route exact path="/hostels/agra" element={<Agra />} />
          <Route exact path="/checkin/:city" element={<Maincheckinagra />} />
          <Route exact path="/register" element={<Register />} />
          <Route path="/book/:roomid" element={<Bookingscreen />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/myprofile" element={<Profilescreen />} />
          <Route exact path="/admin" element={<Adminscreen />} />
         


        </Routes>
        </BrowserRouter>
    
</div>
    )
}
export default Routesmain;