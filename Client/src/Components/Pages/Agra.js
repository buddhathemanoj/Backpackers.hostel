import React ,{useState , useEffect} from 'react'
import Navbar from './Navbar'
import { Footer } from './Footer'
import Accordion from './Policies'
import Offer from './Offer'
import tajmahal from './tajmahal.webp'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Agra.css'
import ags1 from '../Assets/ags1.webp'
import ags2 from '../Assets/ags2.webp'
import ags3 from '../Assets/ags3.webp'
import offerpic from '../Assets/Hostelpage1.svg'
import amn from '../Assets/amenities.svg'
import amn1 from '../Assets/amenities1.svg'
import amn2 from '../Assets/amenity2.svg'
import amn3 from '../Assets/amenity3.svg'
import amn4 from '../Assets/amenity4.svg'
import amn5 from '../Assets/amenity5.svg'

import amn6 from '../Assets/amenity6.svg'
import amn7 from '../Assets/amenity7.svg'
import amn8 from '../Assets/amenity8.svg'
import amn9 from '../Assets/amenity9.svg'
import amn10 from '../Assets/amenity10.svg'
import amn11 from '../Assets/amenity11.svg'
import agra1 from '../Assets/agra/agra1.svg'
import agra2 from '../Assets/agra/agra2.svg'
import agra3 from '../Assets/agra/agra3.svg'
import agra4 from '../Assets/agra/agra4.svg'

import avatar from '../Assets/Policies/reviewpic1.svg'
import avatar1 from '../Assets/Policies/review2.svg'
import avatar2 from '../Assets/Policies/review3.svg'

export const Agra = () => {
        

  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(true);
  };

  const handleShowLess = () => {
    setShowMore(false);
  };

  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 767);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
        <Navbar/>
       
       <img className='offerpic1' src={offerpic} alt='hd' />
 <br/>
        <br/>

        {/* images of agra */}

  <div>
    <div className='grid-agra-container'>

        
        <div className='grid-card-agra'>

          <img className='groupmainpic' src={tajmahal} alt='jj'/>
        </div>
       
        <div>
      <div className='grid-card-agra'>
        <img className={isMobileView ? 'grudpicside' : ''} src={ags1} alt='jj' />
        <br/>
        <img className={isMobileView ? 'grudpicside' : ''} src={ags2} alt='jfj' />
        <br/>
        <img className={isMobileView ? 'grudpicside' : ''} src={ags3} alt='jgj' />
      </div>
    </div>
       </div>
  </div>
    <br/>
    <div className='belowimagespara'>
      <p className='h1belowimages'> SleepSafari <strong>AGRA</strong></p>
      <button className='btnviewrooms'>VIEW ROOMS</button>
    </div>

    <br/>
    <div className='parmember'>
        <p>
        Only about 300 mts. from one of the 7 wonders of the world, The Hosteller Agra is perfect for your impromptu weekend plans. Situated on the beautifully paved road that leads to the Taj Mahal, it offers everything a traveller wishes for. Spacious rooms, great common areas to chill out, A+ hospitality and the buzz of a backpacker hostel. Whether it's a quick 2 day getaway or a longer staycation, we're always in to host you. Uncover a cool new hangout spot in our basement common area.



        </p>

        {showMore ? (
          <>
            <p>
            With everything from a foosball table to a carrom board, the space is always humming with activity. We are super filmy and love to flaunt it too. The large projector beside the game area is a perfect friend for a Bollywood movie marathon. Grab the best seats in the house and relax back with the fluffiest pillows as the lights dim and your favourite masala movie begins.<br/>


A special secret awaits at our hostel. Wanna know what? Head over to the huge open terrace and soak in the mesmerising landscape. As you take it all in, right there in front of you, stands the most majestic structure of all - the Taj Mahal. An ethereal view like no other, we bet you won’t be able to take your eyes away from it. Spend your evenings watching the glorious sunset as you sip on a cuppa joe. Let the cool breeze refresh you. With not one but TWO terrace areas, there's no shortage of chilly winds and lovely views here. Wait no longer and get ready to fall in love.


            </p>
            <button className='btnmember' onClick={handleShowLess}>Show Less</button>
          </>
          
        ) : (
          <>
            <button className='btnmember' onClick={handleShowMore}>Show More</button>
          </>
        )}
        </div>
       

        <div className='amenityhead'>
          <p>AMENITIES</p>
          </div>

       <div className='amenity'>
        <diV>
         < img className='amnpic' src={amn} alt='amnn' />
         <p className='amenitysmallpara'>cafe</p>
         </diV>
         <div>
         < img className='amnpic' src={amn1} alt='amnn' />
          <p className='amenitysmallpara'>CCTV</p>
         </div>
         <div>
         < img className='amnpic' src={amn2} alt='amnn' /> 
           <p className='amenitysmallcommon'>Common Area</p>
         </div>
          <div>
            
            < img className='amnpic' src={amn3} alt='amnn' />
            <p className='amenitysmallpara'>Front Desk</p>
            </div>
        
          <div>
            < img className='amnpic' src={amn4} alt='amnn' />
            <p className='amenitysmallpara'>House keeping</p>
            </div>
          <div>
            < img className='amnpic' src={amn5} alt='amnn' />
            <p className='amenitysmallpara'> Indoor games</p>
            </div>
          <div>
            < img className='amnpic' src={amn6} alt='amnn' />
            <p className='amenitysmallpara'>PArking</p>
            </div>
          <div>
            < img className='amnpic' src={amn7} alt='amnn' />
            <p className='amenitysmallpara'>Pet freindly</p>
            </div>
          <div>
            < img className='amnpic' src={amn8} alt='amnn' />
            <p className='amenitysmallpara'>Power backup</p>
            </div>
          <div>
            < img className='amnpic' src={amn9} alt='amnn' />
            <p className='amenitysmallpara'>Wi_Fi</p>
            </div>
          <div>
            < img className='amnpic' src={amn10} alt='amnn' />
            <p className='amenitysmalllparaa'>Water dispenser</p>
            </div>
            <div className={isMobileView ? 'mobileviewamnhide' : ''}>
        <img className='amnpic' src={amn11} alt='amnn' />
        <p className='amenitysmallpara'>Air conditioner</p>
      </div>

         </div>
         <br/>
         <br/>
<p className='paraagrawhatwedo'>WHAT WE WILL DO</p><br/>
<div className='grid-container-whatwedo' >
   <div className='grid-what-wedo'>
    
    <div className='bx1wedo'>
      <img className='agrawharwedopic' src={agra1} alt='gj'/>
       <p className='parawhwedo'>Heritage City</p>
    </div>
    <p className='parabelowpicwedo'>Agra is steeped in history and full of beautiful historical monuments that will take your breath away.</p>
    
    </div>
    <div className='grid-what-wedo'>
    
    <div className='bx1wedo'>
      <img className='agrawharwedopic' src={agra2} alt='gj'/>
       <p className='parawhwedo'>Mugalai cuisine</p>
    </div>
    <p className='parabelowpicwedo'>Get a taste of the royal Mughal experience in Agra’s cuisine which is full of rich, spicy and delicious Mughlai dishes.</p>
    
    </div>
    <div className='grid-what-wedo'>
    
    <div className='bx1wedo'>
      <img className='agrawharwedopic' src={agra3} alt='gj'/>
       <p className='parawhwedo'>Fantastic location</p>
    </div>
    <p className='parabelowpicwedo'>The hostel is walking distance from the grand Taj Mahal. It could become your everyday walking spot.</p>
    
    </div>
    <div className='grid-what-wedo'>
    
    <div className='bx1wedo'>
      <img className='agrawharwedopic' src={agra4} alt='gj'/>
       <p className='parawhwedo'>Taj Mahal view</p>
    </div>
    <p className='parabelowpicwedo'>Enjoy the mesmerizing view of the glorious and shining Taj Mahal from the terrace. Sunrise and sunset.</p>
    
    </div>


</div>
<br/>
<br/>
<br/>
{/* policiessssssssssssssssssssss */}

<div>

<Accordion/>
<br/>
<br/>
<br/>
</div>



<div className='headerreview'>
  <div className='reviewdias'>
    
    <p className='reviewheading'>WHAT OTHERS SAY</p> 
    
<div className='roundflex' >
  <div className='round'></div>
  <div className='round'></div>
  <div className='round'></div>
  <div className='round'></div>
  <div className='round'></div>
  <div>
    <p> 220 Reviews</p>
  
  </div>
</div>
</div>
 

<div className='reviewarc'>

<div className="arc-container">
<div className="arc">
        <div className="content"><b>5 </b></div><br/>
        <div ><br/><br/><b><p className='parareviews'> LOCATION </p></b></div>
      </div>
    </div>
    <div className="arc-container">
<div className="arc">
        <div className="content"><b>5 </b></div><br/>
        <div ><br/><br/><b><p className='parareviews'> LOCATION </p></b></div>
      </div>
    </div>

    <div className="arc-container">
      <div className="arc">
        <div className="content"> <b>4.7</b> </div>
        <div ><br/><br/><b><p className='parareviews'> AMBIENCE </p></b></div>
      </div>
      
    </div>

    <div className="arc-container">
<div className="arc">
        <div className="content"><b>5 </b></div><br/>
        <div ><br/><br/><b><p className='parareviews'> LOCATION </p></b></div>
      </div>
    </div>

</div>


  </div>
<br/>
<br/>
<br/>
<br/>

<br/>
<br/>
<br/>
<br/>
<div className='bgyellow'>
      

 <div className='reviewdiv'>
 

      <div className="review-container">
        <div className="review-column">
          
          <div className='reviewbox'>
            <img className='avtarpic' src={avatar} alt='hg' />
            <div className='reviewparas'>
              <p><b>Kavya</b></p>
              <p className='paragroup' >SOLO</p>
              </div>

          </div>
       
          <p className='reviewparaa'>For solo travellers, The SleepSafari Agra was a good experience and had a great vibe. The service of rooms, hosts,and food was awesome. Hop[e to stay longer next time in The sleep Safari Agra</p>
          </div>
        <div className="review-column">
          
        <div className='reviewbox'>
            <img className='avtarpic' src={avatar1} alt='hg' />
            <div className='reviewparas'>
              <p><b>Dinesh</b></p>
              <p className='paragroup' >Group</p>
              </div>

          </div>
       
          <p className='reviewparaa'>Really a great place to stay. Helpful and really humble staff, great location,and really clean and calm environment. I enjoyed a lot in there. 10/10 for all services</p>
  
          
          </div>
        <div className="review-column">
          
        <div className='reviewbox'>
            <img className='avtarpic' src={avatar2} alt='hg' />
            <div className='reviewparas'>
              <p><b>Imram Khan</b></p>
              <p className='paragroup' >SOLO</p>
              </div>

          </div>
       
          <p className='reviewparaa'>Affordable prices,nearby location of te Taj Mahal. Great terrace ambience. As a traveller, perfect stay optiion. If you are planning to visit Agra then I would say kahiin mat jao seedha SlepSafari jao</p>
          
          </div>
      </div>
    </div>



  </div>
<br/>
<br/>
<br/>

         <Footer/>
  </div>
  )
}
