import React from 'react';
import '../Styles/Login.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  FaFacebook, FaGoogle } from 'react-icons/fa';const Loginform = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        // Logic for submitting the login form
      };
  return (
    <div>
      <div className="container">
        <form className='loginn' onSubmit={handleSubmit} action="/action_page.php">
          <div className="row">
            <h2 style={{ textAlign: 'center' }}>You're almost done!</h2>
            <p style={{ marginLeft:'10%' }}>just enter your details and you;ll be ready to #getUpGo</p>
         

            

            <div className="col">
             
              <label >EMAIL</label>
              <input className='inpputt' type="email" name='email' required />
              <label >PASSWORD</label>
              <input className='inpputt' type="password" name='password'  required />
              <div style={{textAlign:'end' , marginLeft:'55%' , fontSize:'18px'}}  className="col">
            <Link to="#" className="btn">Forgotpassword?</Link>
          </div>
              <input style={{backgroundColor:'yellow' ,color:'black'}} type="submit" value="Login" />
            </div>

            <div style={{display:'flex' , marginLeft:'35%', gap:'2rem' }}>
                <div>
            <a href="#" className="fb btn">
           
            <FaFacebook style={{  width:'35px',height:'35px'  }} />
      
    
              </a></div>
              <div>
              <a href="#" className="google btn">
              <FaGoogle style={{  width:'35px',height:'35px'  }} />
              </a>
              </div>
            </div>
            <p style={{marginLeft:'18%'}}>Don't have an account? <b>Create Account</b></p>
            
           <p style={{marginLeft:'46%'}}>OR</p>
           
           <p style={{marginLeft:'33%'}}><b>Continue as Guest</b></p>
          </div>
        </form>
      </div>


    </div>
  );
};

export default Loginform;
