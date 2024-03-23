import React, { useState } from "react";
import "./navbar.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const imgUrl =
    "https://st2.depositphotos.com/1768926/7866/v/950/depositphotos_78666192-stock-illustration-a-logo-sample-logo-for.jpg";
  return (
    <>
      <nav className="main-nav min-h-36">
        <div className="logo">
          <img className="w-auto h-36" src={imgUrl} alt="Logo Image" />
        </div>
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">about</NavLink>
            </li>
            <li>
              <NavLink to="/service">services</NavLink>
            </li>
            <li>
              <NavLink to="/contact">contact</NavLink>
            </li>
          </ul>
        </div>
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a href="" target="">
                <FaFacebookSquare className="facebook" />
              </a>
            </li>
            <li>
              <a href="" target="">
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
            <li>
              <a href="" target="">
                <FaYoutubeSquare className="youtube" />
              </a>
            </li>
          </ul>
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
