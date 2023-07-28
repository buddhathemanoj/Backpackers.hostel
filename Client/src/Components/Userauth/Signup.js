



import React, { useState } from "react";
import { Loader } from "../Hostelrooms/Loader";
import { Error } from "../Hostelrooms/Error";
import { Success } from "../Hostelrooms/Success";
import axios from "axios";
import {  useNavigate } from "react-router-dom";
export const Signup = () => {

  const navigate = useNavigate();
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [lname, setLname] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showOtpForm, setShowOtpForm] = useState(false);
  const [otp, setOtp] = useState("");
  const [userId, setUserId] = useState("");
  async function handleRegister() {
    if (password.length >= 8) {
      const user = {
        fname,
        lname,
        email,
        password,
      };
      try {
        setLoading(true);
        const response = await axios.post("http://localhost:5001/api/users/register", user);
        setLoading(false);
        if (response.data.status === "ok") {
          setShowOtpForm(true);
          console.log(response.data);
          // Call another API to fetch the user ID using the registered email
          const userIdResponse = await axios.post("http://localhost:5001/api/users/getUserId", {
            email: user.email,
          });
          if (userIdResponse.data.status === "ok") {
            setUserId(userIdResponse.data.userId); // Store the user ID in state
          }
        } else if (response.data.error === "User Exists") {
          setError(true);
          console.log("User already exists");
        } else {
          setError(true);
          console.log("Error during registration");
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(true);
      }
    } else {
      alert("password did not match");
    }
  }

  async function handleVerifyOtp() {
    try {
      setLoading(true);
      const result = await axios.post("http://localhost:5001/api/users/verifyotp", {
        userId: userId, // Use the stored userId here
        otp,
      });
      setLoading(false);
      if (result.data.status === "verified") {
        setSuccess(true);
        navigate("/home");

      } else {
        setError(true);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(true);
    }
  }

  return (
    <div style={{ padding: "100px" }}>
        {loading && <Loader />}
      {error && <Error />}
      {success && <Success />}
      {showOtpForm ? (
        <div className="row justify-content-center">
          <div className="col-md-5 mt-5 boxshaows">
            <h2 style={{ textAlign: "center" }}>Enter OTP</h2>
            <input
              type="text"
              className="form-control"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <button className="btn btn-primary" onClick={handleVerifyOtp}>
              Verify OTP
            </button>
          </div>
        </div>
      ) :  (
        <div className="row justify-content-center">
          <div className="col-md-5 mt-5 boxshaows">
            <h2 style={{ textAlign: "center" }}>Signup</h2>
           
           <input
              type="text"
              className="form-control"
              placeholder="first-name"
              value={fname}
              onChange={(e) => {
                setFname(e.target.value);
              }}
            />
            <input
              type="text"
              className="form-control"
              placeholder="last name"
              value={lname}
              onChange={(e) => {
                setLname(e.target.value);
              }}
            />
            <input
              type="text"
              className="form-control"
              placeholder="enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="text"
              className="form-control"
              placeholder="enter your password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          
            <button className="btn btn-primary" onClick={handleRegister}>
              Signup
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
        
  
