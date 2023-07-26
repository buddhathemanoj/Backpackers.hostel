


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';

import '../Styles/Checkin.css';

const CheckInForm = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
 

  const locationOptions = [
    { value: 'agra', label: 'Agra' },
    { value: 'bengaluru', label: 'Bangalore' },
   
  ];


  const handleLocationChange = (selectedOption) => {
    setSelectedLocation(selectedOption);
  };

  const isFormValid = selectedLocation !== null;

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
        {selectedLocation && (
          <Link to={`/checkin/${selectedLocation.value}`}>
            <button
              style={{ marginLeft: '0%' }}
              className='btnbooknow'
              disabled={!isFormValid}
            >
              BOOK NOW
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default CheckInForm;
