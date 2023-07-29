import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { useParams } from 'react-router-dom';
import avhost1 from "../Assets/avhost1.webp";
import avhost2 from "../Assets/avhost2.webp";
import avhost3 from "../Assets/avhost3.webp";
import tajmahal from "./tajmahal.webp";
import ags1 from "../Assets/ags1.webp";
import ags2 from "../Assets/ags2.webp";
import ags3 from "../Assets/ags3.webp";
import { BookingContext } from "./Bookingcontext";
import amn from "../Assets/amenities.svg";
import amn1 from "../Assets/amenities1.svg";
import amn2 from "../Assets/amenity2.svg";
import amn3 from "../Assets/amenity3.svg";
import amn4 from "../Assets/amenity4.svg";
import amn5 from "../Assets/amenity5.svg";
import amn6 from "../Assets/amenity6.svg";
import amn7 from "../Assets/amenity7.svg";
import amn8 from "../Assets/amenity8.svg";
import amn9 from "../Assets/amenity9.svg";
import amn10 from "../Assets/amenity10.svg";
import amn11 from "../Assets/amenity11.svg";
import agra1 from "../Assets/agra/agra1.svg";
import agra2 from "../Assets/agra/agra2.svg";
import agra3 from "../Assets/agra/agra3.svg";
import agra4 from "../Assets/agra/agra4.svg";
import "../Styles/Checkinwebagra.css";
import { Bookroom } from "../Hostelrooms/Bookroom";
import { Loader } from "../Hostelrooms/Loader";
import { Error } from "@mui/icons-material";

import axios from "axios";
export const Checkinagraweb = () => {

   

  const { city } = useParams();

  const [cityData, setCityData] = useState({});

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [showMore, setShowMore] = useState(false);


  const handleShowMore = () => {
    setShowMore(true);
  };
  useEffect(() => {
    console.log('Selected City:', city);
  }, [city]);


  const handleShowLess = () => {
    setShowMore(false);
  };

  useEffect(() => {
    const fetchCityData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/api/city/getcities/${city}`);
        setCityData(response.data.citiees[0]);
        console.log(response.data)
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    fetchCityData();
  }, [city]);

  return (

    
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        <div style={{padding:'0 3%'}}>
          
      <br />
      <br />
      <br />

      <div>
      {cityData?.first4pics &&(
        <div className="grid-agra-container">
          <div className="grid-card-agra">
            <img className="groupmainpic" src={cityData.first4pics[0]} alt="jj" />
          </div>

          <div>
          <div className="grid-card-agra">
            
            <img className="grudpicside" src={cityData.first4pics[1]} alt="Image 2" />
            <br />
            <img className="grudpicside" src={cityData.first4pics[2]} alt="Image 3" />
            <br />
            <img className="grudpicside" src={cityData.first4pics[3]} alt="Image 4" />
          </div>
          </div>
        </div>
      )}
     
      </div> 

     
     

      <div className="belowimagespara">
        <p className="h1belowimages">
          {" "}
          SleepSafari <strong>  <h1>{cityData?.heading}</h1></strong>
        </p>
        <button className="btnviewrooms">VIEW ROOMS</button>
      </div>

      <br />
      <div className="parmember">
        <p>
         {cityData?.seeless}
        </p>

        {showMore ? (
          <>
            <p>
             {cityData?.seemore}
            </p>
            <button className="btnmember" onClick={handleShowLess}>
              Show Less
            </button>
          </>
        ) : (
          <>
            <button className="btnmember" onClick={handleShowMore}>
              Show More
            </button>
          </>
        )}
      </div>

      <div className="amenityhead">
        <p>AMENITIES</p>
      </div>

      <div className="amenity">
        <diV >
          <img className="amnpic" src={amn} alt="amnn" />
          <p className="amenitysmallpara">cafe</p>
        </diV>
        <div style={{alignItems:'center'}}>
          <img className="amnpic" src={amn1} alt="amnn" />
          <p className="amenitysmallpara">CCTV</p>
        </div>
        <div style={{alignItems:'center'}}>
          <img className="amnpic" src={amn2} alt="amnn" />
          <p className="amenitysmallcommon">Common Area</p>
        </div>
        <div style={{alignItems:'center'}}>
          <img className="amnpic" src={amn3} alt="amnn" />
          <p className="amenitysmallpara">Front Desk</p>
        </div>

        <div style={{alignItems:'center'}}>
          <img className="amnpic" src={amn4} alt="amnn" />
          <p className="amenitysmallpara">House keeping</p>
        </div>
        <div style={{alignItems:'center'}}>
          <img className="amnpic" src={amn5} alt="amnn" />
          <p className="amenitysmallpara"> Indoor games</p>
        </div>
        <div style={{alignItems:'center'}}>
          <img className="amnpic" src={amn6} alt="amnn" />
          <p className="amenitysmallpara">PArking</p>
        </div>
        <div style={{alignItems:'center'}}>
          <img className="amnpic" src={amn7} alt="amnn" />
          <p className="amenitysmallpara">Pet freindly</p>
        </div>
        <div style={{alignItems:'center'}}>
          <img className="amnpic" src={amn8} alt="amnn" />
          <p className="amenitysmallpara">Power backup</p>
        </div>
        <div style={{alignItems:'center'}}>
          <img className="amnpic" src={amn9} alt="amnn" />
          <p className="amenitysmallpara">Wi_Fi</p>
        </div>
        <div style={{alignItems:'center'}}>
          <img className="amnpic" src={amn10} alt="amnn" />
          <p className="amenitysmallpara">Water dispenser</p>
        </div>
        <div style={{alignItems:'center'}}>
          <img className="amnpic" src={amn11} alt="amnn" />
          <p className="amenitysmallpara">Air conditioner</p>
        </div>
      </div>
      <br />
      <br />
      <p className="paraagrawhatwedo">WHAT WE WILL DO</p>
      <br />
      {cityData?.whatwedopics && cityData?.whatwedoheadng && cityData?.whatwedopara && (
      <div className="grid-container-whatwedo">
        <div className="grid-what-wedo">
          <div className="bx1wedo">
            <img className="agrawharwedopic"  src={cityData.whatwedopics[0]} alt="gj" />
            <p className="parawhwedo">{cityData.whatwedoheadng[0]}</p>
          </div>
          <p className="parabelowpicwedo">
           {cityData. whatwedopara[0]}
          </p>
        </div>
        <div className="grid-what-wedo">
          <div className="bx1wedo">
            <img className="agrawharwedopic" src={cityData.whatwedopics[1]} alt="gj" />
            <p className="parawhwedo">{cityData.whatwedoheadng[1]}</p>
          </div>
          <p className="parabelowpicwedo">
          {cityData. whatwedopara[1]}
          </p>
        </div>
        <div className="grid-what-wedo">
          <div className="bx1wedo">
            <img className="agrawharwedopic"  src={cityData.whatwedopics[2]} alt="gj" />
            <p className="parawhwedo">{cityData.whatwedoheadng[2]}</p>
          </div>
          <p className="parabelowpicwedo">
          {cityData. whatwedopara[2]}
          </p>
        </div>
        <div className="grid-what-wedo">
          <div className="bx1wedo">
            <img className="agrawharwedopic"  src={cityData.whatwedopics[3]} alt="gj" />
            <p className="parawhwedo">{cityData.whatwedoheadng[3]}</p>
          </div>
          <p className="parabelowpicwedo">
          {cityData. whatwedopara[3]}
          </p>
        </div>
      </div>
      )}
      <br />
      <br />
      <br />

      <div>
        <h3> AVAILABILITY</h3>
        <br />
        <div >
        <Bookroom city={city} />
        </div>
        <br />
      </div>
      
        </div>
      )}
    </>
  );
};