import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Footer.css'
import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa';
export const Footer = () => {
  return (
    <div className='footerst'>

    <div className='logoft'>
       
        <h2 className='footlogo'>SLEEPSAFARI</h2>
       
        <div className='linksfootinsta'>
      <FaInstagram style={{ marginRight: '13px', width:'30px',height:'30px' }} />
      <FaFacebook style={{ marginRight: '13px' , width:'30px',height:'30px'  }} />
      <FaLinkedin style={{ marginRight: '13px' , width:'30px',height:'30px'  }} />
      <FaYoutube  style={{ marginRight: '13px' , width:'30px',height:'30px'  }}/>
    </div>
           
    </div>
<hr></hr>
<div className='ftlinks'>
  
<div className='navlinks'>
<h4 className='headft'>Destinations</h4>
  <nav>
  
    <ul className='links1'>
    <li><Link  style={{ textDecoration: 'none',color:'white'}} to='/destinatins' >Destinations</Link></li>
    <li><Link  style={{ textDecoration: 'none' ,color:'white'}} to='/hostels' >Hostels</Link></li>
    <li><Link  style={{ textDecoration: 'none' ,color:'white'}} to='/workations' >Workations</Link></li>
    
    </ul>
    
  </nav>
</div>

<div  className='navlinks'>
<h4 className='headft'>Links</h4>
    <nav>
  
        <ul  className='links1'>
            <li>Carrer</li>
            <li>Invest & Partner Program</li>
            <li>About Us</li>
            <li>Blogs</li>
            <li>Help & Support</li>
        </ul>
    </nav>
</div>


<div  className='navlinks'>
<h4 className='headft'>Policies</h4>
    <nav>
       
        <ul  className='links1'>
            <li>Guest Policy</li>
            <li>Privacy Policy </li>
            <li>Refund policy </li>
            <li>Terms & Conditions </li>
        </ul>
    </nav>
</div>

<div>
    <h4 style={{color:'yellow'}}>
        Address
    </h4>
    <h4>SLEEPSAFARI</h4>
    <p>44h,AnnaNagar,</p>
    <p>East Street</p>
    <p>Chennai-620027</p>
</div>

</div>



    </div>
  )
}
