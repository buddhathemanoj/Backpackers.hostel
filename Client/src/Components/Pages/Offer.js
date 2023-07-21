import React, { useState, useEffect } from 'react';
import HOsteloffer from '../Assets/Hostelpage1.svg'
import AnotherImage from '../Assets/Hostelpage2.svg';
import '../Styles/Hostel.css'
export default function Offer() {
  const [displayImage, setDisplayImage] = useState(HOsteloffer);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1090) {
        setDisplayImage(AnotherImage);
      } else {
        setDisplayImage(HOsteloffer);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {window.innerWidth > 1090 ? (
        <div className="mainofferpic">
          <img className="pic1" src={displayImage} alt="mm" />
        </div>
      ) : (
        <div className='mobofferpic'>
         <img className="pic1" src={AnotherImage} alt='mm' />
        </div>
      )}
    </div>
  );
}
