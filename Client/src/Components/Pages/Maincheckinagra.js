import React, { useState, useEffect } from 'react';
import { Checkinagra } from './Checkinagra.tsx';
import { Checkinagraweb } from './checkinagraweb';
export default function Maincheckinagra() {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 1200);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {isMobileView ? (
       <Checkinagra/>
      ) : (
       <Checkinagraweb/>
      )}
    </div>
  );
}
