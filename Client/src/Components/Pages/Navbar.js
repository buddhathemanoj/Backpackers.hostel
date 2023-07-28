import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../Styles/Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
function Navbar() {

function handleLogout(){
  localStorage.removeItem('currentUser')
  window.location.href="/login"
}

  const location = useLocation();
  const user = JSON.parse(localStorage.getItem('currentUser'));


   
  return (
    <div>
      <nav className="Navbar">
        <li
          className="linklogii"
          class="nav-item"
          style={{ listStyle: "none", marginTop: "7px" }}>
          <Link
            className="linklogo"
            to="/"
            style={{
              textDecoration: "none",
              alignItems: "center",
              alignContent: "center",
              fontFamily: "cursive",
              color: "black",
              marginLeft: "20px",
              listStyle: "none !imporatant",
            }} >
            SleepSafari
          </Link>
        </li>

        <div className="Linksss">
          <ul className="links">
            <li class="nav-item" className="link">
              <Link
                to="/destinations"
                style={{ textDecoration: "none" }}
                class="nav-link"
                className={`nav-link ${location.pathname === "/destinations" ? "active" : ""
                  }`}
              >
                Destinations
              </Link>
            </li>
            <li class="nav-item" className="link">
              <Link
                to="/hostels"
                style={{ textDecoration: "none" }}
                class="nav-link"
                className={`nav-link ${location.pathname === "/hostels" ? "active" : ""
                  }`}
              >
                Hostels
              </Link>
            </li>
            <li class="nav-item" className="link">
              <Link
                to="/workations"
                style={{ textDecoration: "none" }}
                class="nav-link"
                className={`nav-link ${location.pathname === "/workations" ? "active" : ""
                  }`}
              >
                Workations
              </Link>
            </li>
            <li class="nav-item" className="link">
              <Link
                to="/membership"
                style={{ textDecoration: "none" }}
                class="nav-link"
                className={`nav-link ${location.pathname === "/membership" ? "active" : ""
                  }`}
              >
                Membership
              </Link>
            </li>
            <li class="nav-item" className="link">
              <Link
                to="/blogs"
                style={{ textDecoration: "none" }}
                class="nav-link"
                className={`nav-link ${location.pathname === "/blogs" ? "active" : ""
                  }`}
              >
                Blogs
              </Link>
            </li>
            {user && user.data && user.data.currentUser ? (
              <><div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <FontAwesomeIcon style={{ marginRight: '13px' }} icon={faUser} />{user.data.currentUser.name}
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="myprofile">Profile</a>
                
                  <a class="dropdown-item" href="#" onClick={handleLogout}>Log-Out</a>
                </div>
              </div></>
            ) : (
              <>
                <li>
                  <Link
                    to="/login"
                    style={{
                      textDecoration: "none",
                      color: "#9D9DF0 !important",
                    }}
                    class="nav-link"
                    className={`nav-link ${location.pathname === "/login" ? "active" : ""
                      }`}
                  >
                    Login
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
