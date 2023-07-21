import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Styles/Home.css'

class Carosal extends React.Component {
    render() {
      const settings = {
        // dots: true, // Show navigation dots
        infinite: true, // Enable infinite loop
        speed: 2000, // Transition speed in milliseconds
        slidesToShow: 1, // Number of slides to show at a time
        slidesToScroll: 1, // Number of slides to scroll at a time
        autoplay: true, // Enable auto-sliding
        autoplaySpeed: 2000, // Auto-sliding interval in milliseconds
      };
  
      return (
        <Slider className='slidemain' {...settings}>
          <div >
            <img className='imgslide' src='1stslide.png' alt='fgg ' />
          </div>
          <div>
          <img   className='imgslide' src='2ndslide.jpeg' alt='fggg ' />
          </div>
          <div>
            <img   className='imgslide' src='3rdslide.jpg' alt='fghg ' />
          </div>
        </Slider>
      );
    }
  }
  export default Carosal;
  