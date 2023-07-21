import React, { useState, useEffect } from 'react';
import { Promini } from './Promini';
import Minipro from './Minipro';
export default function Allpro() {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth >= 767);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {isMobileView ? (
        <Minipro/>
      ) : (
      <Promini/>
      )}
    </div>
  );
}
