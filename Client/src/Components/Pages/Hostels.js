import React from 'react'

import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Offer from './Offer'

import Hostel1 from '../Assets/hostel1.jpeg'
import Hostel2 from '../Assets/hostel2.jpeg'
import Hostel3 from '../Assets/hostel3.jpeg'
import Hostel4 from '../Assets/hostel4.jpeg'
import Hostel5 from '../Assets/hostel5.jpeg'
import Hostel6 from '../Assets/hostel6.jpeg'
import Hostel7 from '../Assets/hostel7.jpeg'
import Hostel8 from '../Assets/hostel8.jpeg'
import Hostel9 from '../Assets/hostel1.jpeg'
import Hostel10 from '../Assets/hostel2.jpeg'
import Hostel11 from '../Assets/hostel3.jpeg'
import Hostel12 from '../Assets/hostel4.jpeg'
import Hostel13 from '../Assets/hostel4.jpeg'
import Hostel14 from '../Assets/hostel4.jpeg'
import HOsteloffer from '../Assets/Hostelpage2.svg'
import '../Styles/Hostel.css'
export default function Hostels() {
  return (
    <div>

      
      <Offer/>
        <div>
             

        <div className="grid-hostel-container">

          <Link to='/hostels/agra' >
      <div className="grid-hostel-card">
        
         <div className='bgimghostel' style={{
          backgroundImage:`url(${Hostel1})`,
         }} >
         </div>
         <div className='hostelcardcontent'>
          < p className='hostcontentpara1'> SLEEPSAFARI</p>
          <p className='hostcontentpara2'><strong>AGRA</strong></p>
        </div>
        
        
        </div>
        </Link>
        <div className="grid-hostel-card">
        
        <div className='bgimghostel' 
        
        style={{
          backgroundImage:`url(${Hostel2})`,
         }}
        
        ></div>
           <div className='hostelcardcontent'>
          < p className='hostcontentpara1'> SLEEPSAFARI</p>
          <p className='BANGcontentpara2'><strong>BANGALORE,B..</strong></p>
        </div>
        
       
       
       </div>
       <div className="grid-hostel-card">
        
        <div className='bgimghostel' 
        
        style={{
          backgroundImage:`url(${Hostel3})`,
         }}
        ></div>
        <div className='hostelcardcontent'>
          < p className='hostcontentpara1'> SLEEPSAFARI</p>
          <p className='BANGcontentpara2'><strong>BANGALORE,K..</strong></p>
        </div>
       
       </div>
       <div className="grid-hostel-card">
        
        <div className='bgimghostel'
        style={{
          backgroundImage:`url(${Hostel4})`,
         }}
        
        ></div>
        <div className='hostelcardcontent'>
          < p className='hostcontentpara1'> SLEEPSAFARI</p>
          <p className='BANGcontentpara2'><strong>BHANDARDARA</strong></p>
        </div>
       
       </div>
       <div className="grid-hostel-card">
        
        <div className='bgimghostel'
        
        style={{
          backgroundImage:`url(${Hostel5})`,
         }}
        ></div>
        <div className='hostelcardcontent'>
          < p className='hostcontentpara1'> SLEEPSAFARI</p>
          <p className='hostcontentpara2'><strong>BIR</strong></p>
        </div>
       
       </div>
       <div className="grid-hostel-card">
        
        <div className='bgimghostel'
        
        style={{
          backgroundImage:`url(${Hostel6})`,
         }}
        
        ></div>
 <div className='hostelcardcontent'>
          < p className='hostcontentpara1'> SLEEPSAFARI</p>
          <p className='BANGcontentpara2'><strong>CHIKMANGALUR</strong></p>
        </div>
       
       </div>
       <div className="grid-hostel-card">
        
        <div className='bgimghostel' 
        style={{
          backgroundImage:`url(${Hostel7})`,
         }}
        
        ></div>
 <div className='hostelcardcontent'>
          < p className='hostcontentpara1'> SLEEPSAFARI</p>
          <p className='COORGcontentpara2'><strong>COORG</strong></p>
        </div>
       
       </div>
       <div className="grid-hostel-card">
        
        <div className='bgimghostel'
        
        style={{
          backgroundImage:`url(${Hostel8})`,
         }}
        ></div>
        <div className='hostelcardcontent'>
          < p className='hostcontentpara1'> SLEEPSAFARI</p>
          <p className='hostcontentpara2'><strong>DELHI</strong></p>
        </div>
       
       </div>
       <div className="grid-hostel-card">
        
        <div className='bgimghostel'
        
        style={{
          backgroundImage:`url(${Hostel9})`,
         }}
        ></div>
        <div className='hostelcardcontent'>
          < p className='hostcontentpara1'> SLEEPSAFARI</p>
          <p className='GOAcontentpara2'><strong>GOA,ANJUNA</strong></p>
        </div>
       
       </div>
       <div className="grid-hostel-card">
        
        <div className='bgimghostel' 
        
        style={{
          backgroundImage:`url(${Hostel10})`,
         }}

        ></div>
        <div className='hostelcardcontent'>
          < p className='hostcontentpara1'> SLEEPSAFARI</p>
          <p className='GOAcontentpara2'><strong>GOA,ARPORA</strong></p>
        </div>
       
       </div>
       <div className="grid-hostel-card">
        
        <div className='bgimghostel'
        
        style={{
          backgroundImage:`url(${Hostel11})`,
         }}

        ></div>
        <div className='hostelcardcontent'>
          < p className='hostcontentpara1'> SLEEPSAFARI</p>
          <p className='GOAcontentpara2'><strong>GOA,CANDOLI..</strong></p>
        </div>
       
       </div>
       <div className="grid-hostel-card">
        
        <div className='bgimghostel'
        
        style={{
          backgroundImage:`url(${Hostel12})`,
         }}
        
        ></div>
        <div className='hostelcardcontent'>
          < p className='hostcontentpara1'> SLEEPSAFARI</p>
          <p className='HIMAcontentpara2'><strong>HIMACHAL</strong></p>
        </div>
       
       </div>
       <div className="grid-hostel-card">
        
        <div className='bgimghostel'
        
        style={{
          backgroundImage:`url(${Hostel13})`,
         }}
        
        ></div>
        <div className='hostelcardcontent'>
          < p className='hostcontentpara1'> SLEEPSAFARI</p>
          <p className='JAIScontentpara2'><strong>JAISALMER</strong></p>
        </div>
       
       </div>
       <div className="grid-hostel-card">
        
        <div className='bgimghostel'
        
        style={{
          backgroundImage:`url(${Hostel14})`,
         }}

        ></div>
        
        <div className='hostelcardcontent'>
          < p className='hostcontentpara1'> SLEEPSAFARI</p>
          <p className='JAIScontentpara2'><strong>JAISALMER,S..</strong></p>
        </div>
       
       </div>
       <div className="grid-hostel-card">
        
        <div className='bgimghostel'
        
        style={{
          backgroundImage:`url(${Hostel14})`,
         }}

        ></div>
         <div className='hostelcardcontent'>
          < p className='hostcontentpara1'> SLEEPSAFARI</p>
          <p className='KASOLcontentpara2'><strong>KASOL</strong></p>
        </div>
       
       
       </div>
      
    </div>

        
          </div>
<br/>
<br/>
          
    </div>
  )
}
