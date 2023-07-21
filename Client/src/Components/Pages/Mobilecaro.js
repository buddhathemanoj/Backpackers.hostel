import React from 'react';
import Slider from 'react-slick';
import mobcaro1 from '../Assets/Caromobile1.jpg'
import mobcaro2 from '../Assets/caromobile2.jpg'
import mobcaro3 from '../Assets/caromobile3.jpg'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Styles/Home.css'

class   Mobcaro extends React.Component {
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
        <Slider className='mobslidemain' {...settings}>
          <div >
            <img style={{width:'996px',height:'640px'}} className='mobimgslide' src={mobcaro1} alt='fgg ' />
          </div>
          <div>
          <img  style={{width:'996px',height:'640px'}} className='mobimgslide' src={mobcaro2} alt='fggg ' />
          </div>
          <div>
            <img  style={{width:'996px',height:'640px'}} className='mobimgslide' src={mobcaro3} alt='fghg ' />
          </div>
        </Slider>
      );
    }
  }
  export default Mobcaro;
  