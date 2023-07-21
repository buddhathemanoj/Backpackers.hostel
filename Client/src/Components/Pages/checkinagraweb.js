






import React, { useState , useEffect  , useContext} from 'react';
import { Link , useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Footer } from './Footer';
import Mainnav from './Mainnav';

import avhost1 from '../Assets/avhost1.webp';
import avhost2 from '../Assets/avhost2.webp';
import avhost3 from '../Assets/avhost3.webp';
import tajmahal from './tajmahal.webp'
import ags1 from '../Assets/ags1.webp'
import ags2 from '../Assets/ags2.webp'
import ags3 from '../Assets/ags3.webp'
import { BookingContext } from './Bookingcontext';
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
  import '../Styles/Checkinwebagra.css'  
import { Bookroom } from '../Hostelrooms/Bookroom';
 
export const Checkinagraweb = () => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
const [showOffcanvas, setShowOffcanvas] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
  
    window.addEventListener('resize', handleResize);
  
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  

  const toggleOffcanvas = () => {
    if (windowWidth < 500) {
      setShowOffcanvas(!showOffcanvas);
    }
  };
    const [showMore, setShowMore] = useState(false);

    const handleShowMore = () => {
      setShowMore(true);
    };
  
    const handleShowLess = () => {
      setShowMore(false);
    };
  
    
  const [selectedBeds, setSelectedBeds] = useState({
    '6 Bed Mixed Dormitory': 0,
    '4 Bed Mixed Dormitory': 0,
    'Standard Double Room': 0,
  });
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [showTotalPrice, setShowTotalPrice] = useState(false);

  useEffect(() => {
    const checkoutDate = new Date(checkInDate);
    checkoutDate.setDate(checkoutDate.getDate() + 2);
    setCheckOutDate(checkoutDate);
  }, [checkInDate ]);

  const prices = {
    '6 Bed Mixed Dormitory': 549,
    '4 Bed Mixed Dormitory': 599,
    'Standard Double Room': 1702,
  };

 

  const handleBedSelection = (roomType, count) => {
    const newCount = selectedBeds[roomType] + count >= 0 ? selectedBeds[roomType] + count : 0;
    setSelectedBeds((prevState) => ({ ...prevState, [roomType]: newCount }));
    setShowTotalPrice(true); // Show the total price div
    if (windowWidth < 500) {
      setShowOffcanvas(!showOffcanvas);
    }
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    for (const roomType in selectedBeds) {
      const bedPrice = prices[roomType];
      const bedCount = selectedBeds[roomType];
      totalPrice += bedPrice * bedCount;
    }
    const gst = totalPrice * 0.18; 
    const roundPrice =Math.round(totalPrice + gst)
    return roundPrice;
  };
   const  gst = ()=>{
    let gstprice = 0;
    for (const roomType in selectedBeds) {
        const bedPrice = prices[roomType];
        const bedCount = selectedBeds[roomType];
         gstprice += (bedPrice*bedCount)*0.18;

    }
    return gstprice;
   }
  const handleCheckInDateChange = (date) => {
    setCheckInDate(date);
  };

  const handleCheckOutDateChange = (date) => {
    setCheckOutDate(date);
  };


  const navigate = useNavigate();
  const { setBookingData } = useContext(BookingContext);
  useEffect(() => {
    const createdData = {
      checkInDate: checkInDate ? checkInDate.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }) : '-',
      checkOutDate: checkOutDate ? checkOutDate.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }) : '-',
      selectedBeds: Object.entries(selectedBeds).map(([roomType, count]) => ({
        roomType,
        count,
      })),
      fullAmount: calculateTotalPrice(),
      gstAmount: gst(),
    };
  
    setBookingData(createdData);
  }, [checkInDate, checkOutDate, selectedBeds, calculateTotalPrice, gst]);
  


  const handleBookNowClick = () => {
 

    navigate('/register');


    
  };




  //"how to retrive this data in another reactpage  in this file give me detailed code with this data? "

  // const handleBookNowClick = () => {

  //   const data={
  //     checkInDate: checkInDate ? checkInDate.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }) : '-',
  //     checkOutDate: checkOutDate ? checkOutDate.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }) : '-',
  //     selectedBeds:Object.entries(selectedBeds).map(([roomType, count]) => ({
  //       roomType,
  //       count,
  //     })),
  //     fullAmount:calculateTotalPrice(),
  //     gstAmount:gst(),
    
  //   };
  //        fetch("http://localhost:3003/checkinagra",{
  //    method:'POST',
  //    headers:{
  //     'Content-Type':'application/json',
  //    },
  //   body:JSON.stringify(data),
    
  //        })
  //        .then((response) => {
  //         if (response.ok) {
  //           console.log('Booking saved successfully');
  //           // Do something after successful booking
  //         } else {
  //           console.error('Error saving booking');
  //           // Handle the error case
  //         }
  //       })
  //       .catch((error) => {
  //         console.error('Error saving booking:', error);
  //         // Handle the error case
  //       });
    
      
    
  //     };
  
  return (
    <div>
        <Mainnav/>
        <br/>
        <br/>
        <br/>


        <div>
    <div className='grid-agra-container'>

        
        <div className='grid-card-agra'>

          <img className='groupmainpic' src={tajmahal} alt='jj'/>
        </div>
       
       <div>
       <div className='grid-card-agra'>
       <img className='grudpicside'  src={ags1} alt='jj'/>
       <br/>
       
       <img  className='grudpicside' src={ags2}  alt='jfj'/>
       <br/>
       <img className='grudpicside' src={ags3} alt='jgj'/>

       </div>
       </div>
       </div>
  </div>

<br/>
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
            <p className='amenitysmallpara'>Water dispenser</p>
            </div>
          <div>
            < img className='amnpic' src={amn11} alt='amnn' />
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





       
            <div className='mainboxes' style={{display:'flex',gap:'190px'}}>
            <div>
      <div className="date-picker-wrapper">
        <div> <h3> AVAILABILITY</h3></div>
        <div className='dates' style={{display:'flex',gap:'0px',marginTop:'-7px'}}>
        <div className="date-picker">
         
          <DatePicker className='datepickerr' selected={checkInDate} onChange={handleCheckInDateChange} dateFormat="dd/MM/yyyy" />
        </div>
        <div className="date-pickerr">
         
          <DatePicker  className='datepickerr1' selected={checkOutDate} onChange={handleCheckOutDateChange} dateFormat="dd/MM/yyyy" />
        </div>
        </div>
      </div>
<br/>
      <div className='hostelsss'>
        <div className='col-md-9 mt=2'><Bookroom/></div>

      </div>
      <br/>
      <br/>
      </div>
    

 <div>


 {showTotalPrice && (
      <div className={`total-price ${windowWidth < 500 ? 'hide' : ''}`}>
        <h1>SUMMARY</h1>
        <br/>
        <hr/>
        <p><b>Check-in Date: {checkInDate ? checkInDate.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }) : '-'}</b></p>
        <p><b>Check-out Date: {checkOutDate ? checkOutDate.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }) : '-'}</b></p>
        <hr/>
        <p>Selected Beds:</p>
        {Object.entries(selectedBeds).map(([roomType, count]) => (
          <p key={roomType}>
            {roomType}: {count}
          </p>
        ))}
        <hr/>
        <p><b> GST: &#8377;{gst()}</b></p>
        <p><b>Total Price: &#8377;{calculateTotalPrice()}</b></p>
        <Link to='/register'><button className='book-now-button' onClick={handleBookNowClick}>Book Now</button></Link>
      </div>
    )}
 {windowWidth < 500 && (
   <div className={`offcanvas offcanvas-bottom ${showOffcanvas ? 'show half-height' : ''}`} tabIndex="-1" id="totalPriceOffcanvas" aria-labelledby="totalPriceOffcanvasLabel">
    <div  className="offcanvas-header">
      <h5 className="offcanvas-title" id="totalPriceOffcanvasLabel">Total Price</h5>
      <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
                onClick={toggleOffcanvas}
              ></button>
    </div>
    <div id='bodyoffcanvas' className="offcanvas-body">
      <div>
        {showTotalPrice && (
          <div className="total-price">
            <h1>SUMMARY</h1>
           
            <hr/>
            <p style={{fontSize:'16px'}}><b>Check-in Date: {checkInDate ? checkInDate.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }) : '-'}</b></p>
            <p style={{fontSize:'16px'}}><b>Check-out Date: {checkOutDate ? checkOutDate.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }) : '-'}</b></p>
            <hr/>
            <p>Selected Beds:</p>
            {Object.entries(selectedBeds).map(([roomType, count]) => (
              <p key={roomType}>
                {roomType}: {count}
              </p>
            ))}
            <hr/>
            <p><b> GST: &#8377;{gst()}</b></p>
            <p><b>Total Price: &#8377;{calculateTotalPrice()}</b></p>
            <Link to="/register">
              <button className="book-now-button" onClick={handleBookNowClick}>Book Now</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  </div>
)}


  </div>












{/* 
        <div>
      {showTotalPrice && (
        <div className="total-price">
          <h1>SUMMARY</h1>
          <br/>
          <hr/>
         
          <p><b>Check-in Date: {checkInDate ? checkInDate.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }) : '-'}</b></p>
<p><b>Check-out Date: {checkOutDate ? checkOutDate.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }) : '-'}</b></p>

          <hr/>
          <p>Selected Beds:</p>
          {Object.entries(selectedBeds).map(([roomType, count]) => (
            <p key={roomType}>
              {roomType}: {count}
            </p>
          ))}
          <hr/>
          <p><b> GST: &#8377;{gst()}</b></p>
          <p><b>Total Price: &#8377;{calculateTotalPrice()}</b></p>
         < Link to='/register'> <button className='book-now-button' onClick={handleBookNowClick}>Book Now</button></Link>
        </div>
       






      )}

      
      </div> */}
      </div>


      <div>
        <Footer/>
      </div>
    </div>
  );

 };

