import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../Styles/Selectstay.css'
import axios from 'axios';
const Selectstay=()=> {
  const [selectedLocation, setSelectedLocation] = useState(null);
    const [locationOptions, setLocationOptions] = useState([]);

    
 
    useEffect(() => {
      const fetchWorkCities = async () => {
        try {
          const response = await axios.get("http://localhost:5001/api/work/checkin/getallworkforselection");
          const workcities = response.data;
          setLocationOptions(workcities);
        } catch (error) {
          console.log("Error fetching work cities:", error);
        }
      };
  
      fetchWorkCities();
    }, []);

    const handleLocationChange = (selectedOption) => {
      setSelectedLocation(selectedOption);
    };
      const isFormValid = selectedLocation !== null;
     



  return (
    <>
    <div className='cord'>
    <div className="stayform">
      <div className="select-stay">
        <label>Select your Destination:</label>
        <Select
         className='stayselector'
          options={locationOptions}
          value={selectedLocation}
          onChange={handleLocationChange}
        />
      </div>
  
      <br/>
      </div>
      {selectedLocation && (
        <Link to={`/workation/checkin/${selectedLocation.value}`}>
          <button
            
            className='staybtn'
            disabled={!isFormValid}
          >
            BOOK NOW
          </button>
        </Link>
      )}
      
    
    </div>
    </>
  )
}

export default Selectstay
