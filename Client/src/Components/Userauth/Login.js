// import React, { useState, useEffect } from "react";

// import axios from "axios";
// import { Loader } from "../Hostelrooms/Loader";
// import { Error} from "../Hostelrooms/Error";
// import { Link } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';
// import { Success } from "../Hostelrooms/Success";
// import auth from "./auth";
// export const Login = () => {

//      const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);
//   const[success, setsuccess]=useState(false)  

  
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log(email, password);
//     const data = {
//       email,
//       password,
//     };
  
//     try {
//       const response = await axios.post("http://localhost:5001/api/users/login", data);
//       const responseData = response.data;
  
//       if (responseData.status === 'ok') {
//         console.log('Login successful');
//         localStorage.setItem('currentUser',JSON.stringify(responseData));
  
        
//         auth.login(() => {
          
//           navigate('/home');
//         });
//       } else {
//         alert('Login failed');
//       }
//     } catch (err) {
//       console.log(err);
//       alert("Error: " + err.response.data.error);
//     }
//   };
  
//   return (
//     <div>
//         {loading&&(<Loader/>)}
//       <div className="row justify-content-center ">
//         <div className="col-md-5">
//             {error&&(<Error/>)}
//           <div>
//             <h1>Login</h1>
//     {success&& (<Success/>)}
//     <form onSubmit={handleSubmit}>
//             <input
//               type="text"
//               className="form-control"
//               placeholder="email"
//               value={email}
//               onChange={(e) => {
//                 setEmail(e.target.value);
//               }}
//             />
//             <input
//               type="text"
//               className="form-control"
//               placeholder="password"
//               value={password}
//               onChange={(e) => {
//                 setPassword(e.target.value);
//               }}
//             />
//             <button className="btn btn-primary" type="submit">
//               Log In
//             </button>
//             <Link to={"/signup"}>
//               <p>Click to register here</p>
//             </Link>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
import React, { useState } from "react";
import axios from "axios";
import { Loader } from "../Hostelrooms/Loader";
import { Error } from "../Hostelrooms/Error";
import { Link, useNavigate } from "react-router-dom";
import { Success } from "../Hostelrooms/Success";
import auth from "./auth";

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleLogin = async () => {
    const user = {
      email,
      password,
    };
    try {
      setLoading(true);
      const result = await axios.post("http://localhost:5001/api/users/login", user);
      setLoading(false);
      const currentUser = result.data;
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
      auth.login(() => {
        navigate('/home');
      });
    } catch (error) {
      console.log(error);
      setError(true);
      setLoading(false);
    }
  };

  return (
    <div>
      {loading && <Loader />}
      <div className="row justify-content-center ">
        <div className="col-md-5">
          {error && <Error />}
          <div>
            <h1>Login</h1>
            {success && <Success />}
            <input
              type="text"
              className="form-control"
              placeholder="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="text"
              className="form-control"
              placeholder="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button className="btn btn-primary" onClick={handleLogin}>
              Log In
            </button>
            <Link to={"/signup"}>
              <p>Click to register here</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
