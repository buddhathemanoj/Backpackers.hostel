import React, { useState } from 'react';
import Mainnav from './Mainnav';
import { Footer } from './Footer';
import MembershipJoin from './Promember';
import '../Styles/Membership.css'
import bnimg from '../Assets/benifit1.svg'
import bnimg1 from '../Assets/benifit2.svg'
import bnimg2 from '../Assets/benifit3.svg'
import bnimg3 from '../Assets/benifit4.svg'
import bnimg4 from '../Assets/benifit5.svg'
import bnimg5 from '../Assets/benifit6.svg'
import bnimg6 from '../Assets/benifit7.svg'
import bnimg7 from '../Assets/benifit8.svg'




export default function Membership() {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(true);
  };

  const handleShowLess = () => {
    setShowMore(false);
  };

  return (
    <div className='mainmember'>
      <div style={{ position: 'fixed', 
      width:'100%',
      overflow: 'hidden' ,
     
      boxShadow:" 11px 12px 16px 0px rgba(0, 0, 0, 0.307)"
      
    }}>
      
      </div>
      <br></br>
  
      <div className='membership'  style={{padding:'0 3%'}}>

      <div className="headontainer">
      <h1 className="memberheadfirst">The SleepSafari Commune</h1>
      <div className="backround"></div>
    </div>

       


        <h2>The ultimate way to elevate your travel experience</h2>
       <div className='paramember'>
        <p>
        Step up the way your travel and treat yourself to a membership in The Hosteller Commune, a remarkable VIP hostel membership program, designed to celebrate and reward your love for travel. Picture yourself embarking on thrilling adventures, immersing yourself in vibrant cultures, and creating unforgettable memories - all while reaping the benefits of this membership program. Enjoy experiences across our extensive network of 50+ award-winning backpacker hostels, Unbox Cafes, and remarkable trips from Step Out Co. Are you ready to unlock a world of extraordinary perks?
        <br/>

We go above and beyond to ensure your journey is nothing short of extraordinary. Begin your travel escapades by enjoying a seamless check-in experience, as we understand that sometimes the excitement of exploring a new destination can't wait. You'll have the privilege of early check-ins, effortlessly settling into your cosy abode without delay. And when it comes time to bid farewell to your temporary home, embrace the flexibility of late checkouts, granting you those precious extra hours to squeeze in a little more adventure or simply relish a few more moments of relaxation.<br/>



        </p>

        {showMore ? (
          <>
            <p>
            Fuel your wanderlust with a delectable start to your day, thanks to the exclusive F&B coupons that come exclusively with the membership. Imagine waking up to a tantalising spread of fresh toast, aromatic coffee, and a variety of hearty options, all designed to energise you for the exciting adventures ahead. It's our way of ensuring you embark on your travels with a full heart and a satisfied appetite.<br/>

We believe that little treats along the way adds that extra sparkle to your journey. With The Hosteller Membership, expect to be showered with guaranteed discounts, ensuring that you not only create cherished memories but also save money to splurge on souvenirs or those delightful local delicacies. Whether it's discounted room rates, exclusive access to our exciting Step Out Co. experiences, or wallet-friendly deals at our Unbox Cafes, with this hostel membership program we're committed to making your travel dreams more attainable and your wallet happier.<br/>

But wait, there's more! As a member, you become part of a vibrant community of like-minded travel enthusiasts. Imagine sharing tales of adventure with fellow travellers, sharing tips and insider secrets, and creating lifelong friendships. The Hosteller Membership is not just about exclusive benefits; it's about belonging to a community of travellers who understand your passion for adventures.<br/>

So, why wait? Take the leap and reward yourself with The Hosteller Membership. Allow us to elevate your travel experiences, sprinkle your journey with extra magic, and unleash a world of exclusive perks. Adventure awaits, and we can't wait to embark on this thrilling journey with you!



            </p>
            <button className='btnmember' onClick={handleShowLess}>Show Less</button>
          </>
          
        ) : (
          <>
            <button className='btnmember' onClick={handleShowMore}>Show More</button>
          </>
        )}
        </div>
      </div>
     
<br/>
<br/>
<br/>
<div style={{padding:'0 3%'}}>
  <button   className='btnmemberbooking'  >Become a Member</button>

</div>
<br/>
<br/>
     <div className='mainbenifits'>
      <div className='headingbenifits'>
<h1 className='h1benifit'>Exclusive Benefits</h1>
<p  className='pbenifit' >Embark on a thrilling journey as an exclusive member of The Hosteller Commune. Earn TH coins with every stay, and spend them to play rewarding games, earn vouchers, unlock member exclusive rates, special discounts and a host of other perks that will make planning your next getaway a breeze! Enjoy the unbeatable rates reserved just for members of this reward program and Let our hostel membership elevate your travel experience with extraordinary perks and unforgettable adventures!</p>
</div>
     
     <div className="grid-cotainer">
      <div className="grid-iem">
        
       
          

        <img src={bnimg} alt="Image 1" className="gridimag" />
        <br/>
        <br/>
      
        <div className="grid-cntent">
          <h3 id='gridbn1h1'>Welcome Bonus</h3>
          <p id='gridbn1p1'>SS Coins worth your membership amount  </p>
        </div>

         
        </div>
        
       
        
        
      
      <div className="grid-iem">
        
      <img src={bnimg1} alt="Image1" className="gridimag" />
        <br/>
        <br/>
      
        <div className="grid-cntent">
          <h3 id='gridbn1h1'>Special Vouchers</h3>
          <p id='gridbn1p1'>Get Exceptional offers from top brands </p>
        </div>

        
        
        </div>
      <div className="grid-iem">
        
      <img src={bnimg2} alt="Imag1" className="gridimag" />
        <br/>
        <br/>
      
        <div className="grid-cntent">
          <h3 id='gridbn1h1'>Guaranteed Discounts</h3>
          <p id='gridbn1p1'> Get attractive discounts on every booking  </p>
        </div>

        
        </div>
      <div className="grid-iem">
        
      <img src={bnimg3} alt="Imagg1" className="gridimag" />
        <br/>
        <br/>
      
        <div className="grid-cntent">
          <h3 id='gridbn1h1'>Coin Shower</h3>
          <p id='gridbn1p1'>Get 1.5x,2x or 2.5x cashbacks as SS coins </p>
        </div>

        
        </div>
      <div className="grid-iem">
        
      <img src={bnimg4} alt="Imaggg1" className="gridimag" />
        <br/>
        <br/>
      
        <div className="grid-cntent">
          <h3 id='gridbn1h1'>Premium Perks</h3>
          <p id='gridbn1p1'>Early check-ins,late check outs and more  </p>
        </div>

        
        
        </div>
      <div className="grid-iem">
        
      <img src={bnimg5} alt="Imaaf1" className="gridimag" />
        <br/>
        <br/>
      
        <div className="grid-cntent">
          <h3 id='gridbn1h1'>Community First</h3>
          <p id='gridbn1p1'>Get invited to our members only Discord server  </p>
        </div>

        
        </div>
      <div className="grid-iem">
        
        
      <img src={bnimg6} alt="Imath" className="gridimag" />
        <br/>
        <br/>
      
        <div className="grid-cntent">
          <h3 id='gridbn1h1'>Free Merch</h3>
          <p id='gridbn1p1'>Get a travel kit when never seen before merch  </p>
        </div>

        
        
        </div>
      <div className="grid-iem">
        
        
      <img src={bnimg7} alt="Imgh 1" className="gridimag" />
        <br/>
        <br/>
      
        <div className="grid-cntent">
          <h3 id='gridbn1h1'>No Blackout Dates</h3>
          <p id='gridbn1p1'>Books hostels anytime, anywhere for anyone easily  </p>
        </div>

        
        </div>
    </div>
  


     </div>
<br/>
<br/>
<div  style={{padding:'0 3%'}}>
  <MembershipJoin/>
</div>
<br/>
<br/>
<br/>
<br/>
    
    <div>
   
    </div>




    </div>
  );
}
