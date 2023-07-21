

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Mobilenav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Mobilenav() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuIconClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleCloseButtonClick = () => {
    setMenuOpen(false);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className='mainnavft'>
        <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" onClick={handleMenuIconClick}>
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </button>
        <div className={`offcanvas-menu ${isMenuOpen ? 'show' : ''}`}>
          {isMenuOpen && (
            <div className="navlinksd">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/destinations" className="nav-link" onClick={handleLinkClick}>
                    Destinations
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/hostels" className="nav-link" onClick={handleLinkClick}>
                    Hostels
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/workations" className="nav-link" onClick={handleLinkClick}>
                    Workations
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/membership" className="nav-link" onClick={handleLinkClick}>
                    Membership
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/blogs" className="nav-link" onClick={handleLinkClick}>
                    Blogs
                  </Link>
                </li>
              </ul>
              <button className="close-button" onClick={handleCloseButtonClick}>
                x
              </button>
            </div>
          )}
        </div>
      </nav>
    </div>
    <div>
        <p className='logomainmobile'>SLEEP SAFARI</p>
    </div>
    </div>
  );
}

export default Mobilenav;
