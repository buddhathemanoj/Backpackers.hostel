import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Styles/Promini.css";
import {useState,useContext} from 'react';
import { useSearchParams } from 'react-router-dom';
import { BookingContext } from './Bookingcontext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTree } from '@fortawesome/free-solid-svg-icons';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Propic from '../Assets/promem1.jpeg'
import Propic1 from '../Assets/promem2.jpeg'
import Propic2 from '../Assets/promem3.jpeg'
export const Promini = () => {
  const sliderRef = useRef(null);

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const previousSlide = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
   
    speed: 500,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <div className="slider-arrow next" onClick={nextSlide}></div>,
    prevArrow: <div className="slider-arrow prev" onClick={previousSlide}></div>,
  };
    const { bookingData, setBookingData } = useContext(BookingContext);
    const [selectedPro, setSelectedPro] = useState(null);
    const [totalAmount, setTotalAmount] = useState(bookingData ? bookingData.fullAmount : 0);
    const handleProSelection = (proType) => {
      setBookingData((prevData) => {
        let updatedAmount = prevData.fullAmount || 0;
        let updatedSelectedPro = null;
  
        if (selectedPro === proType) {
          updatedAmount -= getProPrice(proType); 
        } else {
          updatedAmount += getProPrice(proType); 
          updatedSelectedPro = proType; 
        }
  
        return {
          ...prevData,
          fullAmount: updatedAmount,
          selectedPro: updatedSelectedPro, 
        };
      });
    };
  
    const handleDelete = () => {
      setBookingData((prevData) => {
        let updatedAmount = prevData.fullAmount || 0;
        return {
          ...prevData,
          fullAmount: updatedAmount - getProPrice(prevData.selectedPro), 
          selectedPro: null, 
        };
      });
    };
  
    
    const getProPrice = (proType) => {
      const ProPrices = {
        '1stpro': 4999,
        '2ndpro': 9999,
        '3rdpro': 14999,
      };
      return ProPrices[proType] || 0;
    };




  return (
    <div >
      <div className="contaaainer" style={{overflow:'hidden' ,justifyContent:'center'}} >
    
        <Slider ref={sliderRef} {...settings} className="slider_container">
          <div>
          <Card sx={{ maxWidth: 280 }}>
      <CardMedia
        sx={{ height: 160 }}
        image={Propic}
        title="green iguana"
      />
      <CardContent>
      
        <Typography variant="body2" color="text.secondary">
        <ul className='listmini' style={{listStyle:"none", textAlign:'initial', lineHeight:'2rem', marginLeft:'-16%'}}>
      <li>
        <FontAwesomeIcon  style={{ marginRight: '13px' }} icon={faTree} />    A travel package worth <b> ₹4999/-</b>
      </li>
      <li>
        <FontAwesomeIcon icon={faTree} style={{ marginRight: '13px' }} />
        4999 coins funded instantly
      </li>
      <li>
        <FontAwesomeIcon style={{ marginRight: '13px' }} icon={faTree} />
        Affiliate vouchers from top brands worth ₹3000/-
      </li>
     
      </ul>
        </Typography>
      </CardContent>
      <CardActions>
      <Button
              onClick={() => handleProSelection('1stpro')}
              size="small"
              variant={selectedPro === '1stpro' ? 'outlined' : 'contained'}
              disabled={selectedPro === '1stpro'}
            >
              {selectedPro === '1stpro' ? 'Added' : 'Add'}
            </Button>
            <Button onClick={handleDelete} size="small" disabled={selectedPro !== null}>
  Delete
</Button>
      
      </CardActions>
    </Card>
          </div>
          <div>
          <Card sx={{maxWidth: 280 }}>
      <CardMedia
        sx={{ height: 160 }}
        image={Propic1}
        title="green iguana"
      />
      <CardContent>
     
        <Typography variant="body2" color="text.secondary">
        <ul  className='listmini' style={{listStyle:"none", textAlign:'initial' ,  lineHeight:'2rem', marginLeft:'-15%'}}>
      <li>
        <FontAwesomeIcon  style={{ marginRight: '13px' }} icon={faTree} />    A travel package worth <b> ₹9999/-</b>
      </li>
      <li>
        <FontAwesomeIcon icon={faTree} style={{ marginRight: '13px' }} />
        9999 coins funded instantly
      </li>
      <li>
        <FontAwesomeIcon style={{ marginRight: '13px' }} icon={faTree} />
        Affiliate vouchers from top brands worth ₹5000/-
      </li>
      </ul>
        </Typography>
      </CardContent>
      <CardActions>
      <Button
              onClick={() => handleProSelection('2ndpro')}
              size="small"
              variant={selectedPro === '2ndpro' ? 'outlined' : 'contained'}
              disabled={selectedPro === '2ndpro'}
            >
              {selectedPro === '2ndpro' ? 'Added' : 'Add'}
            </Button>
            <Button onClick={handleDelete} size="small" disabled={selectedPro !== null}>
  Delete
</Button>
        
      </CardActions>
    </Card>
          </div>
          <div>
          <Card sx={{ maxWidth: 280 }}>
      <CardMedia
        sx={{ height: 160 }}
        image={Propic2}
        title="green iguana"
      />
   
      <CardContent>
     
        <Typography variant="body2" color="text.secondary">
        
      <ul  className='listmini' style={{listStyle:"none", textAlign:'initial' , lineHeight:'2rem', marginLeft:'-15%'}}>
      <li>
        <FontAwesomeIcon  style={{ marginRight: '13px' }} icon={faTree} />  A travel package worth<b>₹14999/-</b>
      </li>
      <li>
        <FontAwesomeIcon icon={faTree} style={{ marginRight: '13px' }} />
        14999 coins funded instantly
      </li>
      <li>
        <FontAwesomeIcon style={{ marginRight: '13px' }} icon={faTree} />
        Affiliate vouchers from top brands worth ₹8000/-
      </li>
      
      </ul>
        </Typography>
      </CardContent>
    
      <CardActions style={{marginTop:'-29px'}}>
      <Button
              onClick={() => handleProSelection('3rdpro')}
              size="small"
              variant={selectedPro === '3rdpro' ? 'outlined' : 'contained'}
              disabled={selectedPro === '3rdpro'}
            >
              {selectedPro === '3rdpro' ? 'Added' : 'Add'}
            </Button>
            <Button onClick={handleDelete} size="small" disabled={selectedPro !== null}>
  Delete
</Button>
       
      </CardActions>
    </Card>
          </div>
        </Slider>
      </div>
    </div>
  );
};
