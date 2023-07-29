


import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Workation } from "../Pages/Workation";
import Mainnav from "../Pages/Mainnav";
import Loginform from "../Pages/Login";
import Hostels from "../Pages/Hostels";
import Workations from "../Pages/Workations";
import Destinations from "../Pages/Destinations.tsx";
import Blogs from "../Pages/Blogs";
import Home from "../Pages/Home";
import { Footer } from "../Pages/Footer";
import Membership from "../Pages/Membership";
import { Login } from "../Userauth/Login";
import { Agra } from "../Pages/Agra";

import { Bookingscreen } from "../Hostelrooms/Bookingscreen";
import { Signup } from "../Userauth/Signup";
import Profilescreen from "../Hostelrooms/Profilescreen";
import { Adminscreen } from "../Hostelrooms/Adminscreen";
import { Checkinagraweb } from "../Pages/checkinagraweb";
import FullBlogPage from "../Pages/Fullblogpage";

function Routesmain() {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const isUserAdmin = user?.data?.currentUser?.isAdmin;
  
  // Rest of your code
  

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<> <Mainnav /> <Home /> <Footer /></>} />
          <Route path="/home" element={<> <Mainnav /> <Home /> <Footer /></>} />
          <Route path="/destinations" element={<> <Mainnav /><Destinations /> <Footer /></>} />
          <Route path="/hostels" element={<> <Mainnav /><Hostels /> <Footer /></>} />
          <Route path="/workations" element={<> <Mainnav /><Workations /> <Footer /></>} />
          <Route path="/membership" element={<> <Mainnav /><Membership /><Footer /></>} />
          <Route path="/blogs" element={<> <Mainnav /><Blogs /><Footer /></>} />
          {/* <Route path="/hostels/agra" element={<Agra />} /> */}
          <Route path="/checkin/:city" element={<> <Mainnav /> <Checkinagraweb /><Footer /></>} />
          <Route path="/workation/checkin/:city" element={<> <Mainnav /><Workation/> <Footer /></>} />
          <Route path="/book/:roomid" element={<Bookingscreen />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/blogs/:id" element={ <><Mainnav/><FullBlogPage /><Footer/></>} />
          <Route path="/myprofile" element={<> <Mainnav /><Profilescreen /></>} />
          <Route path="/checkin/myprofile" element={<> <Mainnav /><Profilescreen /></>} />
          {isUserAdmin ? (
            <Route exact path="/admin" element={<> <Mainnav /><Adminscreen /><Footer /></>} />
          ) : (
            <Route
              path="/admin"
              element={<Navigate to="/"/>}
            />
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Routesmain;



