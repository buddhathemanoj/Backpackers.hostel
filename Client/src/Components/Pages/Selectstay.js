import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../Styles/Selectstay.css'

const Selectstay=()=> {
    const [stay,setStay] = useState(null);
    const [checkInDate,setCheckInDate] = useState(new Date());
    const [checkOutDate,setCheckOutDate] =useState(null)

    const locationOptions=[
        {value: "kammanahalli", label:"Kammanahalli"},
        {value: "ulsoor", label:"Ulsoor"},
        {value: "koramangala", label:"Koramangala"},
        {value: "commercialstreet", label:"Commercial Street"},
        {value: "mgroad", label:"MG Road"},
        {value: "bommanahalli", label:"Bommanahali"}
    ];
    useEffect(()=>{
        const checkoutdate = new Date(checkInDate);
        checkoutdate.setDate(checkoutdate.getDate()+2);
        setCheckOutDate(checkoutdate);
    },[checkInDate]);

    const handleLocationChange = (selectedOption) => {
        setStay(selectedOption);
      };
    
      const handleCheckInDateChange = (date) => {
        setCheckInDate(date);
      };
    
      const handleCheckOutDateChange = (date) => {
        setCheckOutDate(date);
      };
    



  return (
    <>
    <div className='cord'>
    <div className="stayform">
      <div className="select-stay">
        <label>Select your Destination:</label>
        <Select
         className='stayselector'
          options={locationOptions}
          value={stay}
          onChange={handleLocationChange}
        />
      </div>
      <div className="staydate">
        <label>Check-in Date:</label><br/>
        <DatePicker
         className='selectdatein'
          selected={checkInDate}
          onChange={handleCheckInDateChange}
        />
      </div>
      <div className="staydate1">
        <label >Check-out Date:</label><br/>
        <DatePicker
        className='selectdateout'
          selected={checkOutDate}
          onChange={handleCheckOutDateChange}
        />
      </div>
      <br/>
      </div>
      <button  className='staybtn' >BOOK NOW</button>
    
    </div>
    </>
  )
}

export default Selectstay
