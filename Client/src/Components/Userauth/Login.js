
import React, { useState } from "react";
import axios from "axios";
import { Loader } from "../Hostelrooms/Loader";
import { Error } from "../Hostelrooms/Error";
import { Link, useNavigate } from "react-router-dom";
import { Success } from "../Hostelrooms/Success";
import auth from "./auth";
import { message } from 'antd';
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
      message.error(' Please try again with correct credentials.', 0);
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
