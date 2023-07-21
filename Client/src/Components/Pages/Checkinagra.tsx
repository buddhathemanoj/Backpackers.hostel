
import * as React from 'react';
import { useState , useEffect} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Mainnav from './Mainnav';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../Styles/Checkinagra.css';

import { Footer } from './Footer';
import avhost1 from '../Assets/avhost1.webp';
import avhost2 from '../Assets/avhost2.webp';
import avhost3 from '../Assets/avhost3.webp';
import avhost4 from '../Assets/avhost4.webp';

export const Checkinagra = () => {

  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(null);
 
  useEffect(() => {
    const checkoutDate = new Date(checkInDate);
    checkoutDate.setDate(checkoutDate.getDate() + 2);
    setCheckOutDate(checkoutDate);
  }, [checkInDate]);
  const handleCheckInDateChange = (date) => {
    setCheckInDate(date);
  };

  const handleCheckOutDateChange = (date) => {
    setCheckOutDate(date);
  };






  const [state, setState] = React.useState({
    bottom: false,
    showSummary: false,
    selectedBeds: {
      '6 Bed Mixed Dormitory': 1,
      '4 Bed Mixed Dormitory': 1,
      'Standard Double Room': 1,
    },
    prices: {
      '6 Bed Mixed Dormitory': 549,
      '4 Bed Mixed Dormitory': 599,
      'Standard Double Room': 1702,
    },
    selectedRoomType: '',
  });

  const toggleDrawer = (anchor, open, roomType) => (event) => {
    if (
      event.type === 'keydown' &&
      ((event).key === 'Tab' ||
        (event).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open, showSummary: true, selectedRoomType: roomType });
  };

  const handleBedSelection = (roomType, increment) => {
    setState((prevState) => {
      const selectedBeds = { ...prevState.selectedBeds };
      const updatedBeds = selectedBeds[roomType] + increment;
      selectedBeds[roomType] = updatedBeds > 0 ? updatedBeds : 0;
      return { ...prevState, selectedBeds };
    });
  };
 
  const calculateTotalPrice = (roomType) => {
    const { selectedBeds } = state;
    const pricePerBed = state.prices[roomType];
    const totalPrice = pricePerBed * selectedBeds[roomType];
    const gst = 0.18 * totalPrice;
    const roundedTotalprice= Math.round(totalPrice+gst);
    return roundedTotalprice;
   
  };
  const gSt = (roomType)=>{
    const { selectedBeds } = state;
    const pricePerBed = state.prices[roomType];
    const totalPrice = pricePerBed * selectedBeds[roomType];
    const gst = 0.18 * totalPrice;
    return gst;
  }
  

  const list = (anchor, roomType) => (
    <Box
      sx={{
        width: '100%',
        backgroundColor: 'offwhite',
        height: '60px',
        padding: '20px',
        marginTop:'0px',
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {state.showSummary && state.selectedRoomType === roomType && (
        <>
        <div style={{display:'flex', justifyContent:'space-between'}}>
          <div>
            <h5><b>{roomType}</b></h5>
           
            <p><b>Selected Beds: {state.selectedBeds[roomType]}</b></p>
          </div>
          <div style={{marginRight:'10%'}}>
         <p><b> GST : </b>{gSt(roomType)}</p>
          <p><b>Payable amount:  </b>{calculateTotalPrice(roomType)}</p>
          <br/>
          <Link to="/register">
            <Button  sx={{
                       backgroundColor: 'yellow',
                        color: 'black', 
                        alignItems:'end', }} className='btnsummary'>View summary</Button>
          </Link></div></div>
        </>
      )}
    </Box>
  );

  return (
    <div>
      <div style={{ position: 'fixed', top: '0', width: '100%', zIndex: '999' }}>
        <Mainnav />
      </div>
<br/>
<br/>
<br/>
<br/>
<br/>
<div>


</div>
      <div className="container">
   

        <div className="maincardsds">
        <div className="heading">


          <div><h1>Available Hostels</h1></div>

       <div className='boxavab' style={{display:'flex'}}>
       <div className="datebox">
         
          <DatePicker
            className='checkinnbox1'
            selected={checkInDate}
            onChange={handleCheckInDateChange}
          />
        </div>
        <div className="datebox">
          
          <DatePicker
            className='checkouttbox1'
            selected={checkOutDate}
            onChange={handleCheckOutDateChange}
          />
        </div>
      </div>


        </div>
          <div className='cardwrapper'>
          <div className="cardsss">
            <img className="imghostel" src={avhost1} alt="Hostel 1" />
            <div className="card-body">
              <div style={{display:'flex', justifyContent:'space-between'}}>
              <div>
                <h5>
                  <b>Bed in 6 Bed Mixed Dormitory</b>
                </h5>
              </div>
              <div className="pricecard">
                <span>
                  <b>&#8377;{state.prices['6 Bed Mixed Dormitory']}</b>
                </span>
                <p>1 Night</p>
              </div>
              </div>
              <div className='buttons' style={{display:'flex' , justifyContent:'space-between'}}>
              <div className="bed-selection">
                <button className='btnadd' onClick={() => handleBedSelection('6 Bed Mixed Dormitory', -1)} disabled={state.selectedBeds['6 Bed Mixed Dormitory'] <= 1}>-</button>
                <span><b>{state.selectedBeds['6 Bed Mixed Dormitory']}</b></span>
                <button className='btnadd' onClick={() => handleBedSelection('6 Bed Mixed Dormitory', 1)} disabled={state.selectedBeds['6 Bed Mixed Dormitory'] >= 4}>+</button>
              </div>
              <Button    sx={{
                       backgroundColor: 'yellow',
                        color: 'black',  }}
  className='btnbooking' onClick={toggleDrawer('bottom', true, '6 Bed Mixed Dormitory')}>Book now</Button></div>
            </div>
          </div>
          <br/>

          <div className="cardsss">
            <img className="imghostel" src={avhost2} alt="Hostel 2" />
            <div className="card-body">
            <div style={{display:'flex', justifyContent:'space-between'}}>
              <div>
                <h5>
                  <b>Bed in 4 Bed Mixed Dormitory</b>
                </h5>
              </div>
              <div className="pricecard">
                <span>
                  <b>&#8377;{state.prices['4 Bed Mixed Dormitory']}</b>
                </span>
                <p>1 Night</p>
              </div>
              </div>
              <div className='buttons' style={{display:'flex' , justifyContent:'space-between'}}>
              <div className="bed-selection">
                <button className='btnadd' onClick={() => handleBedSelection('4 Bed Mixed Dormitory', -1)} disabled={state.selectedBeds['4 Bed Mixed Dormitory'] <= 1}>-</button>
                <span><b>{state.selectedBeds['4 Bed Mixed Dormitory']}</b></span>
                <button className='btnadd' onClick={() => handleBedSelection('4 Bed Mixed Dormitory', 1)} disabled={state.selectedBeds['4 Bed Mixed Dormitory'] >= 4}>+</button>
              </div>
              <Button  sx={{
                       backgroundColor: 'yellow',
                        color: 'black',  }} className='btnbooking'  onClick={toggleDrawer('bottom', true, '4 Bed Mixed Dormitory')}>Book now</Button></div>
            </div>
          </div>
          <br/>
          <div className="cardsss">
            <img className="imghostel" src={avhost3} alt="Hostel 3" />
            <div className="card-body">
            <div style={{display:'flex', justifyContent:'space-between'}}>
              <div>
                <h5>
                  <b>Standard Double Room</b>
                </h5>
              </div>
              <div className="pricecard">
                <span>
                  <b>&#8377;{state.prices['Standard Double Room']}</b>
                </span>
                <p>1 Night</p>
              </div>
              </div>
              <div className='buttons' style={{display:'flex' , justifyContent:'space-between'}}>
              <div className="bed-selection">
                <button className='btnadd' onClick={() => handleBedSelection('Standard Double Room', -1)} disabled={state.selectedBeds['Standard Double Room'] <= 1}>-</button>
                <span><b>{state.selectedBeds['Standard Double Room']}</b></span>
                <button className='btnadd' onClick={() => handleBedSelection('Standard Double Room', 1)} disabled={state.selectedBeds['Standard Double Room'] >= 2}>+</button>
              </div>
              <Button  sx={{
                       backgroundColor: 'yellow',
                        color: 'black',  }} className='btnbooking' onClick={toggleDrawer('bottom', true, 'Standard Double Room')}>Book now</Button></div>
            </div>
          </div>
          <br/>
          <br/>
        </div>
        </div>
      </div>

      <div>
        <Drawer
          anchor="bottom"
          open={state['bottom']}
          onClose={toggleDrawer('bottom', false, '')}
        >
          {list('bottom', '6 Bed Mixed Dormitory')}
          {list('bottom', '4 Bed Mixed Dormitory')}
          {list('bottom', 'Standard Double Room')}
        </Drawer>
      </div>

      <Footer />
    </div>
  );
};



