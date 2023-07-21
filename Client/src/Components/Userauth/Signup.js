// import React, { useState, useEffect } from "react";
// import { Loader } from "../Hostelrooms/Loader";
// import { Error} from "../Hostelrooms/Error";
// import { Success } from "../Hostelrooms/Success";
// import axios from "axios";

// export const Signup = () => {
//   const [fname, setFname] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [lname, setLname] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);
//  const [success , setSuccess] = useState();
//   async function handleRegisterr() {
//     if (password >=0) {
//       const user = {
//         fname,
//         lname,
//         email,
//         password,
        
//       }
//       try {
//         setLoading(true)
//         const result = await axios.post("http://localhost:5001/api/users/register" , user).data
//         setLoading(false)
//         setSuccess(true)

//         setFname('')
//         setEmail('')
//         setPassword('')
//         setLname('')

//       } catch (error) {
//         console.log(error);
//         setLoading(false);
//         setError(true)
//       }
      
      
      
      
//       console.log(user);
//     } else {
//       alert("password did not match");
//     }
//   }
//   return (
//     <div style={{ padding: "100px" }}>
//         {loading && (<Loader/>)}
//         {error&& (<Error/>)}
        
//       <div className="row justify-content-center ">
//         <div className="col-md-5 mt-5 boxshaows">
//           <div>
//           {success&&(<Success/>)}
//             <h2 style={{textAlign:'center'}}>Signup</h2>
//             <input
//               type="text"
//               className="form-control"
//               placeholder="first-name"
//               value={fname}
//               onChange={(e) => {
//                 setFname(e.target.value);
//               }}
//             />
//             <input
//               type="text"
//               className="form-control"
//               placeholder="last name"
//               value={lname}
//               onChange={(e) => {
//                 setLname(e.target.value);
//               }}
//             />
//             <input
//               type="text"
//               className="form-control"
//               placeholder="enter your email"
//               value={email}
//               onChange={(e) => {
//                 setEmail(e.target.value);
//               }}
//             />
//             <input
//               type="text"
//               className="form-control"
//               placeholder="enter your password"
//               value={password}
//               onChange={(e) => {
//                 setPassword(e.target.value);
//               }}
//             />
          
//             <button className="btn btn-primary" onClick={handleRegisterr}>
//               Signup
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };



import React, { useState } from "react";
import { Loader } from "../Hostelrooms/Loader";
import { Error } from "../Hostelrooms/Error";
import { Success } from "../Hostelrooms/Success";
import axios from "axios";

export const Signup = () => {
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
    if (password >= 0) {
      const user = {
        fname,
        lname,
        email,
        password,
      };
      try {
        setLoading(true);
        const result = await axios.post("http://localhost:5001/api/users/register", user);
        setLoading(false);
        if (result.data.status === "ok") {
          setShowOtpForm(true);
          console.log(result.data)
          setUserId(result.data.data.userId);
        } else {
          setError(true);
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
        userId: result.data.data.userId, // <--- The error is here
        otp,
      });
      setLoading(false);
      if (result.data.status === "verified") {
        setSuccess(true);
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
        
  
