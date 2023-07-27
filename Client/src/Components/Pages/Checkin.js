




import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import axios from 'axios';
import '../Styles/Checkin.css';

const CheckInForm = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [locationOptions, setLocationOptions] = useState([]);


  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await axios.get("http://localhost:5001/api/checkin/getallcityforselection");
        const cities = response.data;
        setLocationOptions(cities);
      } catch (error) {
        console.log("Error fetching cities:", error);
      }
    };

    fetchCities();
  }, []);

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
