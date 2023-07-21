


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../Styles/Checkin.css';

const CheckInForm = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(null);

  const locationOptions = [
    { value: 'agra', label: 'Agra' },
    { value: 'bangalore', label: 'Bangalore' },
    { value: 'chickmangalore', label: 'Chickmangalore' },
    { value: 'coorg', label: 'Coorg' },
    { value: 'delhi', label: 'Delhi' },
    { value: 'goa', label: 'Goa' },
    { value: 'himachal', label: 'Himachal' },
    { value: 'jaisalmer', label: 'Jaisalmer' },
    { value: 'kasol', label: 'Kasol' },
    { value: 'kerala', label: 'Kerala' },
    { value: 'udaipur', label: 'Udaipur' },
  ];

  useEffect(() => {
    const checkoutDate = new Date(checkInDate);
    checkoutDate.setDate(checkoutDate.getDate() + 2);
    setCheckOutDate(checkoutDate);
  }, [checkInDate]);

  const handleLocationChange = (selectedOption) => {
    setSelectedLocation(selectedOption);
  };

  const handleCheckInDateChange = (date) => {
    setCheckInDate(date);
  };

  const handleCheckOutDateChange = (date) => {
    setCheckOutDate(date);
  };

  const isFormValid = selectedLocation !== null; // Check if the form content is selected

  return (
    <div>
      <div className="checkinform">
        <div className="location-box">
          <label>SELECT HOSTEL</label>
          <Select
            className='locationselector'
            options={locationOptions}
            value={selectedLocation}
            onChange={handleLocationChange}
          />
        </div>
        <div className='dateboxes'>
        <div className="date-box">
          <label>CHECK-IN</label><br />
          <DatePicker
            className='checkinbox1'
            selected={checkInDate}
            onChange={handleCheckInDateChange}
          />
        </div>
        <div className="date-box1">
          <label className='checkoutpara'>CHECK-OUT</label><br />
          <DatePicker
            className='checkoutbox1'
            selected={checkOutDate}
            onChange={handleCheckOutDateChange}
          />
        </div></div>
        <Link to='/checkinagra'>
          <button
            style={{ marginLeft: '0%' }}
            className='btnbooknow'
            disabled={!isFormValid} // Disable the button if the form content is not selected
          >
            BOOK NOW
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CheckInForm;
