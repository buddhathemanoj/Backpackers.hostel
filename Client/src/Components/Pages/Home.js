import React from 'react'
import Maincaro from './Maincaro'
import Mainnav from './Mainnav'
import { Footer } from './Footer'
import Featuredhostels from './Featuredhostels'
import '../Styles/Home.css'


import NEWSimg from '../Assets/newsltter.svg'
import CheckInForm from './Checkin'
export default function Home() {
  // const user = JSON.parse(localStorage.getItem("currentUser"));
 
  return (
    <div style={{padding:'0 9%'}}>
       
        <br/>
        <br/>
        <div className='stbar'>
            <h2 className='h1bar'> The SleepSafari commune membership program is now online</h2>
            <button className='btn1member'>Explore</button>
        </div>
        <br/>
         
        <div>
            <Maincaro/>
        </div>
        <br/>
        <br/>
        <CheckInForm/>
        <br/>
        
        <br/>
         <h2 className='ftdhostel'>FEATURED HOSTELS</h2>
        <Featuredhostels/>

        <br/>
      
       <br/>

       <div className='newsletter row d-flex align-items-center'>
       
       
        <div className='col-md-5 ml-10 firstcol'>
        <img className='imgnews' src={NEWSimg} alt=''/>
      
        <h1>Subscribe to our newsletter</h1>
 
          </div>
          <div className='col-md-4 '>
            <div className='justify-content-center'>
        <p>Receive updates about the latest launches, exclusive offers and more</p>
        <form className='formnews'>
        <input className='inputnews' type='email'placeholder='Enter your e-mail ID' ></input>
        <button className='btnnews' type='submit'>➡️</button>
        </form>
        </div>
        </div>
  
       </div>
 <br/>
 <br/>
 <br/>

    </div>
  )
}

