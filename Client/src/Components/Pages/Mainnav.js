import React, { useState, useEffect } from 'react';
import Mobilenav from './Mobilenav';
import Navbar from './Navbar';

export default function Mainnav() {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 660);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {isMobileView ? (
        <Mobilenav />
      ) : (
        <Navbar />
      )}
    </div>
  );
}
