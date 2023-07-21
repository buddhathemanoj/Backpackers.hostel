import React from 'react'
import Mainnav from './Mainnav';
import '../Styles/Workation.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFlag } from "@fortawesome/free-solid-svg-icons";
import img1 from '../Assets/img1.webp';
import Selectstay from './Selectstay';
import img2 from '../Assets/img2.webp';

export default function Workations() {
  return (
    <> <div style={{ position: 'fixed', 
    width:'100%',
    overflow: 'hidden' ,
    boxShadow:" 11px 12px 16px 0px rgba(0, 0, 0, 0.307)"
    
  }}>
      <Mainnav />
    </div>
    <br/>
    <br/>
    <br/><br/>
    <div>
      <p className='secondary-nav'>Book for 7 nights or more to avail the workation discount <FontAwesomeIcon icon={faFlag} /></p>
    </div>
    <div style={{display:"flex" , width:"100%"}} >
      <div className="con" style={{flex:"1"}}>
        <h3>Longer you stay,<br/> Lesser you pay!</h3>
        <p  style={{fontSize:"18px"}}>Ditch the four corners of your boring office and work from the land of the blue skies, indigo rivers and green forests. Wrap up your zoom meetings quick with our high speed wi-fi, grab some lunch on the go from our cafe and take walks around the lakeside later in the day. Sounds like a plan?</p>
        <Selectstay/>
      </div>
      <div className='con-img' style={{flex:"1"}}>
        <img className='img1' src={img1} alt='Image'/>
      </div>
    </div>
    <div style={{display:"flex" , width:"100%"}}>
      <div className='con-img2' style={{flex:"1"}}>
        <img className='img2' src={img2} alt='Image'/>
      </div>
      <div className="con2" style={{flex:"1"}}>
        <h3>WORK FROM ANYWHERE!</h3>
        <p  style={{fontSize:"18px"}}>Remote working boosts productivity, there is no arguing with that. Instead of feeling entrapped in the same routine everyday, break free and work from the hills. Or the deserts. Or the middle of tea plantations. Or near the beach. You get what we are saying.<br/><br/>For this one time, mix professional with your personal and enrich your work life, de-stress your mind and get those creative juices flowing. With a choice for over 50+ stunning destinations and all modern amenities, your friendly neighbourhood backpacker hostel is ALL SET to give you your dream workation.</p>
      
      <br/><br/><br/><br/><br/>
      <button className='img2-btn' style={{textAlign:"center"}} >
          POPULAR HOSTELS
      </button>
      </div>
    </div>
    
    </>
  )
}
